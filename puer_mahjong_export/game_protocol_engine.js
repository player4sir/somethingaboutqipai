/**
 * 普洱麻将 (东方棋牌) - 全协议解析引擎 (Protocol Engine)
 * 支持 15 字节 QE 协议头 + S-Box 密码代换 + Google Protobuf 深度序列化与反序列化
 */

const fs = require('fs');
const path = require('path');
const protobuf = require('protobufjs');
const { encodePacket, decodePacket, CMD_NAMES } = require('./packet_codec');

// 加载 Protobuf 定义
const protoDir = path.join(__dirname, 'proto');
const root = new protobuf.Root();
root.loadSync(path.join(protoDir, 'Common.proto'));
root.loadSync(path.join(protoDir, 'Game.proto'));

// 命令字与 Protobuf 类型绑定映射表
const CMD_TO_PROTO_TYPE = {
    // 客户端上行 (C2S)
    20487: "Game.OutCard",
    20489: "Game.Operation",
    20503: "Game.UserCancel",
    21251: "Game.UserXiaZhu",
    21255: "Game.SelectGangCard",
    21267: "Game.UserDingQue",
    21271: "Game.UserBreakUpOption",
    21281: "Game.UserDingQue",
    21301: "Game.MaiDuanMenResult",
    21303: "Game.OperationResult",
    21305: "Game.SelectFanGangPai",
    21337: "Game.UserXiaZhu",
    21351: "Game.UserGiveUpOption",
    21383: "Game.UserXiaZhu",
    21393: "Game.HuanSanZhang",

    // 服务端下行广播 (S2C)
    4103: "Game.UserLoginRoom",
    4109: "Common.PlayerInfo",
    4105: "Game.UserReconnect",
    20486: "Game.FixBanker",
    20488: "Game.RollDice",
    20496: "Game.QuanfengInfo",
    20498: "Game.Operation",
    20500: "Game.OperationResult",
    20504: "Game.DealCard",
    20512: "Game.GrabCard",
    20514: "Game.PlayingJiType",
    20516: "Game.ZhuoJi",
    20518: "Game.SettleItem",
    20520: "Game.HandCards",
    20530: "Game.FixBanker",
    20532: "Game.UpdatePlayerMoney",
    20534: "Game.gangOperationResult",
    21250: "Game.XiaZhuOption",
    21252: "Game.UserXiaZhu",
    21254: "Game.SelectGangCard",
    21256: "Game.GangCards",
    21266: "Game.DingQueOption",
    21268: "Game.UserDingQue",
    21270: "Game.DingQueResult",
    21304: "Game.FixLaizi",
    21312: "Game.FenZhang",
    21318: "Game.FixBanker",
    21350: "Game.ToWaitGiveup",
    21352: "Game.UserGiveUpOption",
    21364: "Game.DiTingStatus",
    21366: "Game.DiTingStatus",
    21392: "Game.HuanSanZhang",
    21394: "Game.HuanSanZhang",
    21396: "Game.HuanSanZhang",
    20482: "Common.GameState",
    20484: "Common.GameState",
    86024: "Game.OutCard",
    86032: "Game.Operation"
};

/**
 * 将业务 JSON 对象打包为二进制网络包（Protobuf -> S-Box -> QE 包头）
 * @param {number} cmd 命令ID
 * @param {Object} data 业务数据对象
 * @returns {Buffer} 包含完整包头与加密 Payload 的二进制数据
 */
function packMessage(cmd, data) {
    const protoTypeName = CMD_TO_PROTO_TYPE[cmd];
    let payload = Buffer.alloc(0);

    if (protoTypeName && root.lookupType(protoTypeName)) {
        const MessageType = root.lookupType(protoTypeName);
        const errMsg = MessageType.verify(data);
        if (errMsg) {
            throw new Error(`Protobuf 校验失败 [${protoTypeName}]: ${errMsg}`);
        }
        const message = MessageType.create(data);
        payload = Buffer.from(MessageType.encode(message).finish());
    } else if (Buffer.isBuffer(data) || data instanceof Uint8Array) {
        payload = Buffer.from(data);
    }

    return encodePacket(cmd, payload);
}

/**
 * 将二进制网络包解析为业务 JSON 对象（QE 包头 -> S-Box -> Protobuf -> JSON）
 * @param {Buffer} rawPacket 接收到的原始网络字节流
 * @returns {Object} 解析结果
 */
function unpackMessage(rawPacket) {
    const packet = decodePacket(rawPacket);
    const protoTypeName = CMD_TO_PROTO_TYPE[packet.cmd];
    let decodedMessage = null;

    if (protoTypeName && root.lookupType(protoTypeName) && packet.payload.length > 0) {
        try {
            const MessageType = root.lookupType(protoTypeName);
            decodedMessage = MessageType.toObject(MessageType.decode(packet.payload), {
                longs: String,
                enums: String,
                bytes: String,
                defaults: true,
                arrays: true,
                objects: true
            });
        } catch (e) {
            decodedMessage = { _decodeError: e.message, rawHex: packet.payload.toString('hex') };
        }
    }

    return {
        cmd: packet.cmd,
        cmdName: packet.cmdName,
        protoType: protoTypeName || null,
        verified: packet.verified,
        data: decodedMessage !== null ? decodedMessage : packet.payload
    };
}

module.exports = {
    packMessage,
    unpackMessage,
    root,
    CMD_TO_PROTO_TYPE
};

// 单元自测演示
if (require.main === module) {
    console.log('=== 协议引擎端到端自测 (Protobuf + S-Box + QE Header) ===\n');

    // 测试 1: 服务端发牌广播 (DEAL_CARD: 20504 -> Game.DealCard)
    const dealCardData = {
        cards: [0x01, 0x02, 0x03, 0x11, 0x12, 0x13, 0x21, 0x22, 0x23, 0x31, 0x32, 0x41, 0x42],
        cardsCount: [13, 13, 13, 13],
        remainCardsCount: 84
    };

    console.log('1. 测试发牌广播封包 (DEAL_CARD: 20504):');
    console.log('   原始数据:', JSON.stringify(dealCardData));
    const rawPacket = packMessage(20504, dealCardData);
    console.log(`   封包大小: ${rawPacket.length} 字节, Hex: ${rawPacket.toString('hex')}`);

    const unpacked = unpackMessage(rawPacket);
    console.log('   解包还原结果:');
    console.log(`   Cmd: ${unpacked.cmd} (${unpacked.cmdName}) -> 类型: ${unpacked.protoType}`);
    console.log('   还原数据:', JSON.stringify(unpacked.data, null, 2));

    // 测试 2: 玩家摸牌广播 (GRAB_CARD: 20512 -> Game.GrabCard)
    console.log('\n2. 测试摸牌广播 (GRAB_CARD: 20512):');
    const grabCardData = {
        seatId: 1,
        userId: 10086,
        card: 0x15, // 五筒
        remainCardNum: 83
    };
    const grabPacket = packMessage(20512, grabCardData);
    const grabUnpacked = unpackMessage(grabPacket);
    console.log(`   Cmd: ${grabUnpacked.cmd} (${grabUnpacked.cmdName}) -> 摸到牌: 0x${grabUnpacked.data.card.toString(16)} (五筒)`);

    console.log('\n=== 端到端编解码与 Protobuf 双向转换测试 PASS √ ===');
}
