/**
 * 捞腌菜 (云南传统扑克) 卡牌字典与牌型分析工具
 * 对应普洱/东方棋牌 (wxf4e8b870d6c337ac) subGame_lyc
 */

const SUIT_NAMES = ['方块', '梅花', '红桃', '黑桃', '特殊'];
const SUIT_ICONS = ['♦', '♣', '♥', '♠', '★'];

const VALUE_NAMES = {
  3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9', 10: '10',
  11: 'J', 12: 'Q', 13: 'K', 14: 'A', 15: '2', 29: '小王', 30: '大王', 95: '听用'
};

const LYC_CARD_TYPES = {
  1: '单牌',
  2: '对子',
  3: '单龙',
  4: '双龙',
  6: '三张炮',
  7: '510K假腿(杂色5-10-K)',
  8: '大小王',
  9: '梅花510k纯腿',
  10: '方块510k纯腿',
  11: '黑桃510k纯腿',
  12: '红桃510k纯腿',
  13: '双小王',
  14: '双大王',
  15: '四炸(4张相同)',
  16: '五炸(5张相同)',
  17: '三王',
  18: '六炸(6张相同)',
  19: '七炸(7张相同)',
  20: '四王',
  21: '八炸(8张相同-天花板)'
};

function parseLycCardByte(b) {
  const norm = b % 256;
  if (norm === 78) return { byte: norm, suit: 4, value: 29, name: '小王', text: '★小王' };
  if (norm === 79) return { byte: norm, suit: 4, value: 30, name: '大王', text: '★大王' };
  if (norm === 95) return { byte: norm, suit: 4, value: 95, name: '听用牌', text: '★听用' };

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

function parseLycHand(bytes) {
  const cards = bytes.map(parseLycCardByte);
  cards.sort((a, b) => {
    if (b.value !== a.value) return b.value - a.value;
    return b.suit - a.suit;
  });
  return cards;
}

function formatLycHand(bytes) {
  return parseLycHand(bytes).map(c => c.text).join(' ');
}

module.exports = {
  SUIT_NAMES,
  SUIT_ICONS,
  VALUE_NAMES,
  LYC_CARD_TYPES,
  parseLycCardByte,
  parseLycHand,
  formatLycHand
};

if (require.main === module) {
  console.log('=== 捞腌菜卡牌映射测试 ===');
  const sample = [1, 17, 33, 49, 78, 79, 95, 5, 21, 10, 26, 13, 29];
  console.log('原始字节:', sample);
  console.log('卡牌展示:', formatLycHand(sample));
}
