/**
 * 斗地主牌型识别与比牌引擎
 * 支持单张、对子、顺子、连对、飞机带翅膀、四带二、炸弹、王炸
 */

const { parseHandCards, CARD_TYPES, formatHand } = require('./ddz_card_dict');

function evaluatePlay(bytes) {
  if (!bytes || bytes.length === 0) return null;
  const cards = parseHandCards(bytes);
  const n = cards.length;

  // Count by value
  const counts = {};
  for (const c of cards) {
    counts[c.value] = (counts[c.value] || 0) + 1;
  }
  const vals = Object.keys(counts).map(Number).sort((a, b) => b - a); // desc
  const uniqueCount = vals.length;

  // 1. 火箭 (两张王)
  if (n === 2 && counts[16] === 1 && counts[17] === 1) {
    return { typeId: 12, typeName: CARD_TYPES[12], mainValue: 17, length: 2, isBomb: true };
  }

  // 2. 单牌
  if (n === 1) {
    return { typeId: 1, typeName: CARD_TYPES[1], mainValue: cards[0].value, length: 1, isBomb: false };
  }

  // 3. 对子
  if (n === 2 && uniqueCount === 1) {
    return { typeId: 2, typeName: CARD_TYPES[2], mainValue: vals[0], length: 2, isBomb: false };
  }

  // 4. 三条 (3不带)
  if (n === 3 && uniqueCount === 1) {
    return { typeId: 3, typeName: CARD_TYPES[3], mainValue: vals[0], length: 3, isBomb: false };
  }

  // 5. 炸弹 (4同点)
  if (n === 4 && uniqueCount === 1) {
    return { typeId: 11, typeName: CARD_TYPES[11], mainValue: vals[0], length: 4, isBomb: true };
  }

  // 6. 三带一 (4张: 3+1)
  if (n === 4 && uniqueCount === 2) {
    const trio = vals.find(v => counts[v] === 3);
    if (trio) {
      return { typeId: 7, typeName: CARD_TYPES[7], mainValue: trio, length: 4, isBomb: false };
    }
  }

  // 7. 三带二 (5张: 3+2)
  if (n === 5 && uniqueCount === 2) {
    const trio = vals.find(v => counts[v] === 3);
    const pair = vals.find(v => counts[v] === 2);
    if (trio && pair) {
      return { typeId: 8, typeName: CARD_TYPES[8], mainValue: trio, length: 5, isBomb: false };
    }
  }

  // 8. 顺子 (>= 5 张单相连，不能包含2和王: 3 <= v <= 14)
  if (n >= 5 && uniqueCount === n) {
    if (vals[0] <= 14) { // no 2 or Jokers
      let isChain = true;
      for (let i = 0; i < vals.length - 1; i++) {
        if (vals[i] - vals[i + 1] !== 1) {
          isChain = false;
          break;
        }
      }
      if (isChain) {
        return { typeId: 4, typeName: CARD_TYPES[4], mainValue: vals[0], length: n, isBomb: false };
      }
    }
  }

  // 9. 连对 (>= 3 对相连: n >= 6, n % 2 === 0, 3 <= v <= 14)
  if (n >= 6 && n % 2 === 0 && uniqueCount === n / 2) {
    const allPairs = vals.every(v => counts[v] === 2);
    if (allPairs && vals[0] <= 14) {
      let isChain = true;
      for (let i = 0; i < vals.length - 1; i++) {
        if (vals[i] - vals[i + 1] !== 1) {
          isChain = false;
          break;
        }
      }
      if (isChain) {
        return { typeId: 5, typeName: CARD_TYPES[5], mainValue: vals[0], length: n, isBomb: false };
      }
    }
  }

  // 10. 飞机 (二个及以上相邻三张，可不带或带翅膀)
  const trios = vals.filter(v => counts[v] >= 3 && v <= 14).sort((a, b) => b - a);
  // check contiguous trios
  if (trios.length >= 2) {
    for (let len = trios.length; len >= 2; len--) {
      for (let s = 0; s <= trios.length - len; s++) {
        const sub = trios.slice(s, s + len);
        let cont = true;
        for (let j = 0; j < sub.length - 1; j++) {
          if (sub[j] - sub[j + 1] !== 1) {
            cont = false;
            break;
          }
        }
        if (cont) {
          // Pure plane
          if (n === len * 3) {
            return { typeId: 6, typeName: '飞机(不带)', mainValue: sub[0], length: n, isBomb: false };
          }
          // Plane with single wings (len * 4)
          if (n === len * 4) {
            return { typeId: 6, typeName: '飞机带单牌', mainValue: sub[0], length: n, isBomb: false };
          }
          // Plane with pair wings (len * 5)
          if (n === len * 5) {
            const wings = vals.filter(v => !sub.includes(v));
            const pairsOk = wings.every(v => counts[v] === 2 || counts[v] === 4);
            if (pairsOk) {
              return { typeId: 6, typeName: '飞机带对子', mainValue: sub[0], length: n, isBomb: false };
            }
          }
        }
      }
    }
  }

  // 11. 四带二 (6张: 4+2单, 或 8张: 4+2对)
  const quad = vals.find(v => counts[v] === 4);
  if (quad) {
    if (n === 6) {
      return { typeId: 9, typeName: CARD_TYPES[9], mainValue: quad, length: 6, isBomb: false };
    }
    if (n === 8) {
      const rest = vals.filter(v => v !== quad);
      if (rest.length === 2 && rest.every(v => counts[v] === 2)) {
        return { typeId: 10, typeName: CARD_TYPES[10], mainValue: quad, length: 8, isBomb: false };
      }
    }
  }

  return null; // Invalid combination
}

function comparePlays(curr, prev) {
  if (!curr) return false;
  if (!prev) return true; // first play

  // Rocket beats everything
  if (curr.typeId === 12) return true;
  if (prev.typeId === 12) return false;

  // Bomb beats non-bomb
  if (curr.isBomb && !prev.isBomb) return true;
  if (!curr.isBomb && prev.isBomb) return false;

  // Same bomb
  if (curr.isBomb && prev.isBomb) {
    return curr.mainValue > prev.mainValue;
  }

  // Non-bomb: must have identical type and length
  if (curr.typeId === prev.typeId && curr.length === prev.length) {
    return curr.mainValue > prev.mainValue;
  }

  return false;
}

module.exports = {
  evaluatePlay,
  comparePlays
};

if (require.main === module) {
  console.log('=== 牌型识别测试 ===');
  const tests = [
    [78, 79],                  // 王炸
    [3, 19, 35, 51],           // 炸弹 3
    [4, 20, 36, 52],           // 炸弹 4
    [3, 4, 5, 6, 7],           // 顺子 3-7
    [19, 35, 51, 1],           // 3带1 (333 + A)
    [19, 35, 51, 2, 18],       // 3带2 (333 + 22)
    [3, 19, 4, 20, 5, 21],     // 连对 33 44 55
    [3, 19, 35, 4, 20, 36, 7, 8] // 飞机带单 333444 + 7 + 8
  ];

  for (const t of tests) {
    const res = evaluatePlay(t);
    console.log(`${formatHand(t)} => ${res ? res.typeName + ' (主牌值:' + res.mainValue + ')' : '无效牌型'}`);
  }
}
