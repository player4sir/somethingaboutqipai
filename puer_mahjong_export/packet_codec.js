/**
 * 普洱麻将 (东方棋牌) - 协议封包与解包编解码器
 * 实现 15 字节 QE 协议头以及 256 字节 S-box 字节流代换加解密
 */

const SEND_BYTE_LIST = [
    112,47,64,95,68,142,110,69,126,171,44,31,180,172,157,145,13,54,155,11,212,196,57,116,191,35,22,20,6,235,4,62,
    18,92,139,188,97,99,246,165,225,101,216,245,90,7,240,19,242,32,107,74,36,89,137,100,215,66,106,94,61,10,119,224,
    128,39,184,197,140,14,250,138,213,41,86,87,108,83,103,65,232,0,26,206,134,131,176,34,40,77,63,38,70,79,111,43,
    114,58,241,141,151,149,73,132,229,227,121,143,81,16,168,130,198,221,255,252,228,207,179,9,93,234,156,52,249,23,159,218,
    135,248,21,5,60,211,164,133,46,251,238,71,59,239,55,127,147,175,105,12,113,49,222,33,117,160,170,186,124,56,2,183,129,
    1,253,231,29,204,205,189,27,122,42,173,102,190,85,51,3,219,136,178,30,78,185,230,194,247,203,125,201,98,195,166,220,
    167,80,181,75,148,192,146,76,17,91,120,217,177,237,25,233,161,28,182,50,153,163,118,158,123,109,154,48,214,169,37,199,
    174,150,53,208,187,210,200,162,8,243,209,115,244,72,45,144,202,226,88,193,24,82,254,223,104,152,84,236,96,67,15
];

const RECV_BYTE_LIST = [
    81,161,158,176,30,131,28,45,233,119,61,19,147,16,69,255,109,201,32,47,27,130,26,125,245,207,82,168,210,164,180,11,
    49,151,87,25,52,223,91,65,88,73,170,95,10,239,136,1,220,149,212,175,123,227,17,142,157,22,97,140,132,60,31,90,
    2,79,57,254,4,7,92,139,238,102,51,196,200,89,181,93,194,108,246,77,251,174,74,75,243,53,44,202,33,120,59,3,
    253,36,189,37,55,41,172,78,249,146,58,50,76,218,6,94,0,148,96,236,23,152,215,62,203,106,169,217,156,187,8,143,
    64,160,111,85,103,135,84,128,178,54,71,34,68,99,5,107,240,15,199,144,197,101,226,100,250,213,219,18,122,14,216,126,
    153,209,232,214,134,39,191,193,110,222,154,9,13,171,225,145,86,205,179,118,12,195,211,159,66,182,155,229,35,167,173,
    24,198,244,184,190,21,67,112,224,231,188,241,186,165,166,83,117,228,235,230,133,20,72,221,56,42,204,127,177,192,113,150,
    248,63,40,242,105,116,104,183,163,80,208,121,29,252,206,138,141,46,98,48,234,237,43,38,185,129,124,70,137,115,162,247,114
];

const CMD_NAMES = {
    4103: "ROOM_LOGIN_SUCCESS",
    4104: "ROOM_LOGOUT_SUCCESS",
    4105: "ROOM_RECONNECT",
    4109: "SERVER_BROADCAST_PLAYER_LOGIN",
    4110: "SERVER_BROADCAST_PLAYER_LOGOUT",
    16385: "SERVER_BROADCAST_PLAYER_READY",
    20480: "PACKAGE_ACK",
    20482: "BROADCAST_GAME_START",
    20484: "BROADCAST_GAME_OVER",
    20486: "BROADCAST_DING_ZHUANG",
    20487: "C2S_OUT_CARD",
    20488: "BROADCAST_ZHI_TOU",
    20489: "C2S_OPERATION",
    20496: "BROADCAST_DING_FENG",
    20498: "BROADCAST_USER_OPERATION",
    20500: "BROADCAST_USER_OPERATION_RESULT",
    20503: "C2S_CANCEL_OPERATION",
    20504: "DEAL_CARD",
    20512: "GRAB_CARD",
    20514: "BROADCAST_PLAYING_JI_TYPE",
    20516: "BROADCAST_ZHUO_JI",
    20518: "BROADCAST_SETTLE",
    20520: "BROADCAST_HANDCARDS",
    20530: "BROADCAST_BANKER_FIRST_OPERATION",
    20532: "BROADCAST_UPDATE_PLAYER_MONEY",
    20534: "BROADCAST_GANG_OPERATION_RESULT",
    21250: "BROADCAST_XIAZHU_OPTIONS",
    21251: "C2S_USER_XIAZHU_REQUEST",
    21252: "BROADCAST_XIAZHU_RESULT",
    21254: "BROADCAST_SELECT_GANG_CARDS",
    21255: "C2S_USER_SUBMIT_GANG_CARD",
    21256: "BROADCAST_GANG_CARDS",
    21266: "BROADCAST_DINGQUE_OPTIONS",
    21267: "C2S_USER_DINGQUE_REQUEST",
    21268: "BROADCAST_ONE_DINGQUE_RESULT",
    21270: "BROADCAST_ALL_DINGQUE_RESULT",
    21303: "C2S_USER_OPERATION_RESULT",
    21304: "BROADCAST_DING_LAIZI",
    21392: "BROADCAST_HUAN_SAN_ZHANG",
    21393: "C2S_USER_HUAN_SAN_ZHANG_RESULT",
    21396: "BROADCAST_ALL_HUAN_SAN_ZHANG",
    86022: "GRAP_CARD_LEGACY",
    86024: "OUT_CARD",
    86032: "OPERATION"
};

/**
 * 客户端封包（构建发送给服务端的原始数据包）
 * @param {number} cmd 命令ID
 * @param {Buffer|Uint8Array} payload 待发送的有效载荷（Protobuf 或业务数据）
 * @returns {Buffer} 包含 15 字节头部与加密 payload 的数据包
 */
function encodePacket(cmd, payload = Buffer.alloc(0)) {
    const headLen = 15;
    const bodyLen = payload.length;
    const totalLen = headLen + bodyLen;
    const buf = Buffer.alloc(totalLen);

    // 0..3: 数据长度（大端序） = totalLen - 4
    buf.writeInt32BE(totalLen - 4, 0);
    // 4..5: 魔数 'Q', 'E'
    buf.writeUInt8(0x51, 4); // 'Q'
    buf.writeUInt8(0x45, 5); // 'E'
    // 6: 主版本 1
    buf.writeUInt8(1, 6);
    // 7: 次版本 0
    buf.writeUInt8(0, 7);
    // 8..11: 命令 ID（大端序）
    buf.writeInt32BE(cmd, 8);
    // 12..13: 序号/序列 1（大端序）
    buf.writeInt16BE(1, 12);

    // 15..end: 字节代换加密与校验和
    let sum = 0;
    for (let i = 0; i < bodyLen; i++) {
        const rawByte = payload[i];
        sum = (sum + rawByte) & 0xFF;
        buf[headLen + i] = SEND_BYTE_LIST[rawByte];
    }

    // 14: 校验字节 (1 + ~sum)
    buf.writeUInt8((1 + (~sum & 0xFF)) & 0xFF, 14);

    return buf;
}

/**
 * 服务端下行解包（解析接收到的原始数据包）
 * @param {Buffer|Uint8Array} buf 收到的原始数据包
 * @returns {Object} { cmd, cmdName, verified, payload }
 */
function decodePacket(buf) {
    if (buf.length < 15) {
        throw new Error('包长度小于最小协议头 15 字节');
    }

    const dataLen = buf.readInt32BE(0);
    const magicQ = buf.readUInt8(4);
    const magicE = buf.readUInt8(5);
    if (magicQ !== 0x51 || magicE !== 0x45) {
        throw new Error(`魔数不匹配: 期望 QE (0x5145), 实际 0x${magicQ.toString(16)}${magicE.toString(16)}`);
    }

    const versionMajor = buf.readUInt8(6);
    const versionMinor = buf.readUInt8(7);
    const cmd = buf.readInt32BE(8);
    const seq = buf.readInt16BE(12);
    const checkByte = buf.readUInt8(14);

    const bodyLen = buf.length - 15;
    const decryptedPayload = Buffer.alloc(bodyLen);

    let sum = checkByte;
    for (let i = 0; i < bodyLen; i++) {
        const encByte = buf[15 + i];
        const decByte = RECV_BYTE_LIST[encByte];
        decryptedPayload[i] = decByte;
        sum = (sum + decByte) & 0xFF;
    }

    const verified = (sum === 0);

    return {
        dataLen,
        version: `${versionMajor}.${versionMinor}`,
        cmd,
        cmdName: CMD_NAMES[cmd] || `UNKNOWN_CMD_${cmd}`,
        seq,
        checkByte,
        verified,
        payload: decryptedPayload
    };
}

module.exports = {
    encodePacket,
    decodePacket,
    CMD_NAMES,
    SEND_BYTE_LIST,
    RECV_BYTE_LIST
};

// 单元自测
if (require.main === module) {
    console.log('=== 协议编解码自测 ===');
    const testCmd = 20487; // C2S_OUT_CARD
    const testData = Buffer.from([0x01, 0x02, 0x15, 0x29]); // 出牌数据测试载荷

    console.log(`原始载荷 (${testData.length} 字节):`, testData);
    const encoded = encodePacket(testCmd, testData);
    console.log(`封包完成 (${encoded.length} 字节):`, encoded.toString('hex'));

    const decoded = decodePacket(encoded);
    console.log(`解包结果: Cmd: ${decoded.cmd} (${decoded.cmdName}), 校验验证: ${decoded.verified}`);
    console.log(`还原载荷:`, decoded.payload);
    console.log(`载荷一致性:`, testData.equals(decoded.payload) ? 'PASS √' : 'FAIL ×');
}
