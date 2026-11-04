/**
 * 普洱麻将 - 实时网络数据包多维度解析器 (Live Packet Inspector)
 * 支持将原始二进制、十六进制文本或捕获的 WebSocket 帧即时转译为可视化麻将动作
 */

const { unpackMessage } = require('./game_protocol_engine');
const { MahjongMap } = require('./card_dict');

function cardToName(cardByte) {
    if (typeof cardByte !== 'number') return `${cardByte}`;
    const hex = '0x' + cardByte.toString(16).padStart(2, '0');
    return MahjongMap.get(hex) || `未知牌(${hex})`;
}

function formatMahjongData(parsed) {
    const { cmd, cmdName, protoType, verified, data } = parsed;
    let summary = `[${cmdName || cmd}] (验证: ${verified ? 'PASS' : 'FAIL'})`;

    if (!data) return summary;

    switch (cmd) {
        case 20504: // DEAL_CARD 发牌
            if (data.cards) {
                const names = data.cards.map(cardToName);
                summary += `\n  - 开局发牌 (${data.cards.length}张): [${names.join(', ')}]`;
                summary += `\n  - 牌墙剩余: ${data.remainCardsCount} 张`;
            }
            break;

        case 20512: // GRAB_CARD 摸牌
            summary += `\n  - 玩家[座位${data.seatId}] 摸牌: ${cardToName(data.card)} (牌墙剩: ${data.remainCardNum}张)`;
            break;

        case 20487: // C2S_OUT_CARD 出牌
        case 86024: // S2C OUT_CARD 广播出牌
            summary += `\n  - 玩家[座位${data.seatId || '本地'}] 出牌: ${cardToName(data.card || data.cards?.[0])}`;
            break;

        case 20498: // BROADCAST_USER_OPERATION 提示可操作
            summary += `\n  - 提示玩家[座位${data.seatId}] 可执行操作:`;
            if (data.opGroups) {
                data.opGroups.forEach(g => {
                    summary += `\n    * 操作码 ${g.opCode} (可组合: ${JSON.stringify(g.cardsList)})`;
                });
            }
            break;

        case 20500: // BROADCAST_USER_OPERATION_RESULT 操作执行结果
            summary += `\n  - 玩家[座位${data.seatId}] 执行操作: 操作码 ${data.opCode}, 牌值: ${cardToName(data.opCard)}`;
            break;

        case 20516: // BROADCAST_ZHUO_JI 捉鸡广播
            summary += `\n  - 捉鸡/翻牌: 翻出 [${(data.cards || []).map(cardToName).join(', ')}]`;
            break;

        case 20520: // BROADCAST_HANDCARDS 广播所有人手牌
            summary += `\n  - 广播所有玩家手牌:`;
            if (data.handCards) {
                data.handCards.forEach((user, idx) => {
                    const cards = (user.handCards || []).map(cardToName).join(', ');
                    summary += `\n    * 座位 ${user.seatId || idx}: [${cards}]`;
                });
            }
            break;

        case 20518: // BROADCAST_SETTLE 单局结算
            summary += `\n  - 结算数据: ${JSON.stringify(data, null, 2)}`;
            break;

        default:
            summary += `\n  - 数据详情: ${JSON.stringify(data, null, 2)}`;
            break;
    }

    return summary;
}

/**
 * 分析一段十六进制或者 Buffer 数据包
 * @param {Buffer|string} input 
 */
function inspectPacket(input) {
    let buf = input;
    if (typeof input === 'string') {
        buf = Buffer.from(input.replace(/\s+/g, ''), 'hex');
    }
    const parsed = unpackMessage(buf);
    return formatMahjongData(parsed);
}

module.exports = {
    inspectPacket,
    formatMahjongData,
    cardToName
};

// 演示测试
if (require.main === module) {
    const { packMessage } = require('./game_protocol_engine');
    console.log('=== 实时麻将数据包语义化翻译测试 ===\n');

    // 模拟服务端发牌包
    const dealPacket = packMessage(20504, {
        cards: [0x01, 0x02, 0x03, 0x11, 0x12, 0x13, 0x21, 0x22, 0x23, 0x31, 0x41],
        cardsCount: [11, 11, 11, 11],
        remainCardsCount: 84
    });

    console.log(inspectPacket(dealPacket));
    console.log('\n----------------------------------------\n');

    // 模拟玩家摸到一张八条
    const grabPacket = packMessage(20512, {
        seatId: 0,
        userId: 12345,
        card: 0x28, // 八条
        remainCardNum: 83
    });

    console.log(inspectPacket(grabPacket));
}
