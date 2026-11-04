const fs = require('fs');

const p = 'd:/gameprojects/mi/puer_mahjong_export/unpacked/main/subpackages/main/game.js';
const str = fs.readFileSync(p, 'utf8');

let pos = 0;
while (true) {
  const idx = str.indexOf('SUBGAME_SHP', pos);
  if (idx === -1) break;
  console.log('--- At', idx, '---');
  console.log(str.substring(Math.max(0, idx - 100), Math.min(str.length, idx + 200)));
  pos = idx + 11;
}
