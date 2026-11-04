const fs = require('fs');

const p = 'd:/gameprojects/mi/puer_mahjong_export/unpacked/main/subpackages/main/game.js';
const str = fs.readFileSync(p, 'utf8');
const idx = str.indexOf('SUBGAME_SHP');
console.log(str.substring(Math.max(0, idx - 500), Math.min(str.length, idx + 800)));
