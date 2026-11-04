/**
 * 耍红牌 (云南特色竞技扑克) 牌型识别与算番规则引擎
 * 完整实现 ShpRules.ts 中的同点、同花、连对、顺子、赖子替换与暴击计算
 */

const { parseShpCardByte, parseShpHand, SHP_HAND_KINDS, MULTIPLIERS, formatShpHand } = require('./shp_card_dict');

const SHP_HAND_KIND = {
  None: 0,
  TongDian: 1,
  TongHua: 2,
  LianDui: 3,
  ShunZi: 4
};

function getMultiplier(kind, len) {
  if (kind === SHP_HAND_KIND.TongDian) {
    if (len <= 0) return 0;
    if (len >= 6) return 300;
    return MULTIPLIERS.TongDian[len] || 0;
  }
  if (kind === SHP_HAND_KIND.TongHua) {
    if (len < 5) return 0;
    if (len >= 12) return 300;
    return MULTIPLIERS.TongHua[len] || 0;
  }
  if (kind === SHP_HAND_KIND.LianDui) {
    if (len < 2) return 0;
    if (len >= 6) return 300;
    return MULTIPLIERS.LianDui[len] || 0;
  }
  if (kind === SHP_HAND_KIND.ShunZi) {
    if (len < 5) return 0;
    if (len >= 12) return 300;
    return MULTIPLIERS.ShunZi[len] || 0;
  }
  return 0;
}

// 1. 评估同点
function evaluateTongDian(cards) {
  const jokers = cards.filter(c => c.isJoker);
  const normals = cards.filter(c => !c.isJoker);

  if (normals.length === 0) {
    if (jokers.length === 0) return null;
    const len = jokers.length;
    return {
      kind: SHP_HAND_KIND.TongDian,
      kindName: '同点',
      length: len,
      rankKey: 14, // AAA
      multiplier: getMultiplier(SHP_HAND_KIND.TongDian, len)
    };
  }

  const rankCounts = new Map();
  for (const c of normals) {
    rankCounts.set(c.rank, (rankCounts.get(c.rank) || 0) + 1);
  }

  // 必须所有正常牌点数相同
  if (rankCounts.size !== 1) return null;

  const rank = normals[0].rank;
  const totalLen = normals.length + jokers.length;
  return {
    kind: SHP_HAND_KIND.TongDian,
    kindName: '同点',
    length: totalLen,
    rankKey: rank,
    multiplier: getMultiplier(SHP_HAND_KIND.TongDian, totalLen)
  };
}

// 2. 评估同花
function evaluateTongHua(cards) {
  if (cards.length < 5) return null;
  const jokers = cards.filter(c => c.isJoker);
  const normals = cards.filter(c => !c.isJoker);

  if (normals.length > 0) {
    const suit = normals[0].suit;
    if (!normals.every(c => c.suit === suit)) return null;

    const maxRank = Math.max(...normals.map(c => c.rank));
    return {
      kind: SHP_HAND_KIND.TongHua,
      kindName: '同花',
      length: cards.length,
      rankKey: maxRank,
      multiplier: getMultiplier(SHP_HAND_KIND.TongHua, cards.length)
    };
  }

  // 纯王构成的同花
  return {
    kind: SHP_HAND_KIND.TongHua,
    kindName: '同花',
    length: cards.length,
    rankKey: 14,
    multiplier: getMultiplier(SHP_HAND_KIND.TongHua, cards.length)
  };
}

// 3. 评估顺子 (>= 5 张相连)
function evaluateShunZi(cards) {
  if (cards.length < 5) return null;
  const jokers = cards.filter(c => c.isJoker).length;
  const normals = cards.filter(c => !c.isJoker);

  const ranks = [...new Set(normals.map(c => c.rank))].sort((a, b) => a - b);
  if (ranks.length !== normals.length) return null; // 不能有重复点数

  const minR = ranks[0];
  const maxR = ranks[ranks.length - 1];
  const span = maxR - minR + 1;

  if (span > cards.length) return null;
  const neededJokers = span - ranks.length;
  if (jokers < neededJokers) return null;

  return {
    kind: SHP_HAND_KIND.ShunZi,
    kindName: '顺子',
    length: cards.length,
    rankKey: Math.min(14, minR + cards.length - 1),
    multiplier: getMultiplier(SHP_HAND_KIND.ShunZi, cards.length)
  };
}

// 4. 评估连对 (>= 2 对相连)
function evaluateLianDui(cards) {
  if (cards.length < 4 || cards.length % 2 !== 0) return null;
  const pairCount = cards.length / 2;
  const jokers = cards.filter(c => c.isJoker).length;
  const normals = cards.filter(c => !c.isJoker);

  const counts = new Map();
  for (const c of normals) {
    counts.set(c.rank, (counts.get(c.rank) || 0) + 1);
    if (counts.get(c.rank) > 2) return null;
  }

  const ranks = [...counts.keys()].sort((a, b) => a - b);
  const minR = ranks[0];
  const maxR = ranks[ranks.length - 1];
  const span = maxR - minR + 1;

  if (span > pairCount) return null;

  let missing = 0;
  for (let r = minR; r <= minR + pairCount - 1; r++) {
    const cur = counts.get(r) || 0;
    missing += (2 - cur);
  }

  if (jokers < missing) return null;

  return {
    kind: SHP_HAND_KIND.LianDui,
    kindName: '连对',
    length: pairCount,
    rankKey: minR + pairCount - 1,
    multiplier: getMultiplier(SHP_HAND_KIND.LianDui, pairCount)
  };
}

// 综合检测出最优牌型
function evaluateBestHand(bytes) {
  if (!bytes || bytes.length === 0) return null;
  const cards = bytes.map(parseShpCardByte);

  const results = [
    evaluateTongDian(cards),
    evaluateTongHua(cards),
    evaluateLianDui(cards),
    evaluateShunZi(cards)
  ].filter(Boolean);

  if (results.length === 0) return null;

  // 选倍数最高者，倍数相同选点数最高者
  results.sort((a, b) => {
    if (b.multiplier !== a.multiplier) return b.multiplier - a.multiplier;
    return b.rankKey - a.rankKey;
  });

  return results[0];
}

// 计算暴击倍数 (同牌型直接暴击)
function computeCritMultiplier(sameKindCount) {
  if (sameKindCount < 2) return 1;
  return Math.min(sameKindCount, 5); // 最多 5 倍暴击
}

module.exports = {
  SHP_HAND_KIND,
  getMultiplier,
  evaluateTongDian,
  evaluateTongHua,
  evaluateShunZi,
  evaluateLianDui,
  evaluateBestHand,
  computeCritMultiplier
};

if (require.main === module) {
  console.log('=== 耍红牌规则引擎自测 ===');
  const test1 = [3, 19, 35, 51, 78]; // 4张3 + 小王 -> 5张同点
  const res1 = evaluateBestHand(test1);
  console.log('测试 1 (3333 + 王):', formatShpHand(test1), '=>', res1);

  const test2 = [1, 3, 5, 7, 9]; // 同花方块 A, 3, 5, 7, 9
  const res2 = evaluateBestHand(test2);
  console.log('测试 2 (同花方块):', formatShpHand(test2), '=>', res2);

  const test3 = [3, 19, 4, 20, 78, 5]; // 连对 33 44 5 + 王
  const res3 = evaluateBestHand(test3);
  console.log('测试 3 (连对 33-44-55):', formatShpHand(test3), '=>', res3);

  const test4 = [3, 4, 5, 6, 78]; // 顺子 3 4 5 6 + 王(充当7)
  const res4 = evaluateBestHand(test4);
  console.log('测试 4 (顺子 3-7):', formatShpHand(test4), '=>', res4);
}
