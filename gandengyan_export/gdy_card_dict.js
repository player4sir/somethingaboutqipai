/**
 * 干瞪眼卡牌解析与规则验证工具
 * 对应普洱/东方棋牌 (wxf4e8b870d6c337ac) subGame_gdy
 */

const SUIT_NAMES = ['方块', '梅花', '红桃', '黑桃', '王'];
const SUIT_ICONS = ['♦', '♣', '♥', '♠', '★'];

const VALUE_NAMES = {
  3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9', 10: '10',
  11: 'J', 12: 'Q', 13: 'K', 14: 'A', 15: '2', 16: '小王', 17: '大王'
};

const GDY_CARD_TYPES = {
  [-1]: '无效牌型',
  0: '单牌',
  1: '对子',
  2: '单顺(连牌)',
  3: '双顺(连对)',
  4.5: '软小炸弹(3张带赖子)',
  5: '硬小炸弹(3张纯同点)',
  5.5: '软大炸弹(4张带赖子)',
  6: '硬大炸弹(4张纯同点)',
  7: '火箭(双王)'
};

function parseGdyCardByte(b) {
  const norm = b % 256;
  if (norm === 78) return { byte: norm, suit: 4, value: 16, isGod: true, name: '小王', text: '★小王' };
  if (norm === 79) return { byte: norm, suit: 4, value: 17, isGod: true, name: '大王', text: '★大王' };

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
    isGod: false,
    suitName,
    valName,
    name: `${suitName}${valName}`,
    text: `${suitIcon}${valName}`
  };
}

function parseGdyHand(bytes) {
  const cards = bytes.map(parseGdyCardByte);
  cards.sort((a, b) => {
    if (b.value !== a.value) return b.value - a.value;
    return b.suit - a.suit;
  });
  return cards;
}

function formatGdyHand(bytes) {
  return parseGdyHand(bytes).map(c => c.text).join(' ');
}

/**
 * 校验干瞪眼常规压牌合法性 (上家出牌 prev vs 现出牌 curr)
 * 核心特色：单牌和对子只能压大 1 点的牌；2 可以压任意单牌/对子；炸弹/火箭可以压任意非炸弹
 */
function canBeat(currCards, prevCards) {
  if (!prevCards || prevCards.length === 0) return true;
  // TODO: integrate with GdyCardTypeAnalyzer
  return true;
}

module.exports = {
  SUIT_NAMES,
  SUIT_ICONS,
  VALUE_NAMES,
  GDY_CARD_TYPES,
  parseGdyCardByte,
  parseGdyHand,
  formatGdyHand,
  canBeat
};

if (require.main === module) {
  console.log('=== 干瞪眼卡牌解析自检 ===');
  const sample = [1, 2, 17, 18, 33, 49, 78, 79, 3, 4, 5];
  console.log('原始字节:', sample);
  console.log('卡牌展示:', formatGdyHand(sample));
}
