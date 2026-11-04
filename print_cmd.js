const fs = require('fs');
const content = fs.readFileSync('d:/gameprojects/mi/unpacked/subGame_mj/subpackages/subGame_mj/game.js', 'utf8');

const marker = `System.register("chunks:///_virtual/FXJCmd3.ts"`;
const start = content.indexOf(marker);
const end = content.indexOf('System.register("chunks:///_virtual/', start + marker.length);
const modCode = content.substring(start, end);

console.log(modCode);
