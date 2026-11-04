const fs = require('fs');

const p = 'd:/gameprojects/mi/puer_mahjong_export/unpacked/hall/subpackages/hall/game.js';
if (fs.existsSync(p)) {
  const code = fs.readFileSync(p, 'utf8');
  // find references to 'subGame_shp' or 'shp'
  const idx = code.indexOf('subGame_shp');
  console.log('Index in hall:', idx);
  if (idx !== -1) {
    console.log(code.substring(Math.max(0, idx - 200), Math.min(code.length, idx + 400)));
  }
}
