/**
 * 耍红牌 (云南特色竞技扑克) 卡牌字典与属性映射工具
 * 对应普洱/东方棋牌 (wxf4e8b870d6c337ac) subGame_shp
 */

const SUIT_NAMES = ['方块', '梅花', '红桃', '黑桃', '王'];
const SUIT_ICONS = ['♦', '♣', '♥', '♠', '★'];

const VALUE_NAMES = {
  2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9', 10: '10',
  11: 'J', 12: 'Q', 13: 'K', 14: 'A', 78: '小王', 79: '大王'
};

const SHP_HAND_KINDS = {
  0: '无牌型(None)',
  1: '同点(TongDian)',
  2: '同花(TongHua)',
  3: '连对(LianDui)',
  4: '顺子(ShunZi)'
};

// 基础算番倍数表 (来自 ShpRules.ts)
const MULTIPLIERS = {
  TongDian: { 1: 10, 2: 20, 3: 50, 4: 100, 5: 200, 6: 300 },
  TongHua:  { 5: 30, 6: 50, 7: 80, 8: 100, 9: 150, 10: 200, 11: 250, 12: 300 },
  LianDui:  { 2: 30, 3: 60, 4: 100, 5: 200, 6: 300 },
  ShunZi:   { 5: 20, 6: 40, 7: 60, 8: 80, 9: 120, 10: 180, 11: 240, 12: 300 }
};

function parseShpCardByte(b) {
  const norm = b % 256;
  if (norm === 78) return { byte: norm, suit: 4, rank: 0, isJoker: true, name: '小王', text: '★小王' };
  if (norm === 79) return { byte: norm, suit: 4, rank: 0, isJoker: true, name: '大王', text: '★大王' };

  const low = norm & 15;
  const rank = (low === 1) ? 14 : low; // A=14, 2~K=2~13
  const suit = (norm >> 4) & 15;

  const suitName = SUIT_NAMES[suit] || '未知';
  const suitIcon = SUIT_ICONS[suit] || '?';
  const valName = VALUE_NAMES[rank] || `${rank}`;

  return {
    byte: norm,
    suit,
    rank,
    isJoker: false,
    suitName,
    valName,
    name: `${suitName}${valName}`,
    text: `${suitIcon}${valName}`
  };
}

function parseShpHand(bytes) {
  const cards = bytes.map(parseShpCardByte);
  cards.sort((a, b) => {
    if (a.isJoker && !b.isJoker) return -1;
    if (!a.isJoker && b.isJoker) return 1;
    if (b.rank !== a.rank) return b.rank - a.rank;
    return b.suit - a.suit;
  });
  return cards;
}

function formatShpHand(bytes) {
  return parseShpHand(bytes).map(c => c.text).join(' ');
}

module.exports = {
  SUIT_NAMES,
  SUIT_ICONS,
  VALUE_NAMES,
  SHP_HAND_KINDS,
  MULTIPLIERS,
  parseShpCardByte,
  parseShpHand,
  formatShpHand
};

if (require.main === module) {
  console.log('=== 耍红牌卡牌映射自检 ===');
  const sample = [1, 2, 17, 33, 49, 78, 79, 13, 29, 45, 61];
  console.log('原始字节:', sample);
  console.log('解析卡牌:', formatShpHand(sample));
}
