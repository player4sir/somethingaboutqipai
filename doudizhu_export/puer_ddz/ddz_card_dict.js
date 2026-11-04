/**
 * 斗地主卡牌映射与解析工具
 * 适用于普洱棋牌/东方棋牌 (wxf4e8b870d6c337ac) 及通用斗地主
 */

const SUIT_NAMES = ['方块', '梅花', '红桃', '黑桃', '王'];
const SUIT_ICONS = ['♦', '♣', '♥', '♠', '★'];

const VALUE_NAMES = {
  3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9', 10: '10',
  11: 'J', 12: 'Q', 13: 'K', 14: 'A', 15: '2', 16: '小王', 17: '大王'
};

const CARD_TYPES = {
  1: '单牌',
  2: '对子',
  3: '三条',
  4: '顺子',
  5: '连对',
  6: '飞机',
  7: '三带一',
  8: '三带二',
  9: '四带二',
  10: '四带两对',
  11: '炸弹',
  12: '火箭(王炸)',
  14: '炸弹飞机带翅膀',
  15: '两联炸弹',
  16: '三联炸弹',
  17: '四联炸弹',
  18: '五联炸弹'
};

function parseCardByte(b) {
  const norm = b % 256;
  if (norm === 78) return { byte: norm, suit: 4, value: 16, name: '小王', text: '★小王' };
  if (norm === 79) return { byte: norm, suit: 4, value: 17, name: '大王', text: '★大王' };
  if (norm === 64) return { byte: norm, suit: 4, value: 0, name: '日历牌', text: '日历' };
  if (norm === 65) return { byte: norm, suit: 4, value: 0, name: '听用牌', text: '听用' };

  let val = norm % 16;
  if (val < 3) val += 13; // 1->14(A), 2->15(2)
  else if (val > 13) val += 2;

  let suit = Math.floor(norm / 16);
  if (suit >= 5 && suit <= 9) suit -= 5;

  const suitName = SUIT_NAMES[suit] || '未知';
  const suitIcon = SUIT_ICONS[suit] || '?';
  const valName = VALUE_NAMES[val] || `${val}`;

  return {
    byte: norm,
    suit,
    value: val,
    suitName,
    valName,
    name: `${suitName}${valName}`,
    text: `${suitIcon}${valName}`
  };
}

function parseHandCards(bytes) {
  const cards = bytes.map(parseCardByte);
  // Sort descending by value, then by suit
  cards.sort((a, b) => {
    if (b.value !== a.value) return b.value - a.value;
    return b.suit - a.suit;
  });
  return cards;
}

function formatHand(bytes) {
  const cards = parseHandCards(bytes);
  return cards.map(c => c.text).join(' ');
}

module.exports = {
  SUIT_NAMES,
  SUIT_ICONS,
  VALUE_NAMES,
  CARD_TYPES,
  parseCardByte,
  parseHandCards,
  formatHand
};

if (require.main === module) {
  console.log('=== 斗地主卡牌字典自检 ===');
  const sample = [1, 2, 17, 18, 33, 34, 49, 50, 78, 79, 3, 19, 35, 51, 13, 29, 45, 61];
  console.log('原始字节:', sample);
  console.log('格式化牌型:');
  console.log(formatHand(sample));
}
