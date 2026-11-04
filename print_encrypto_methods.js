const fs = require('fs');
const content = fs.readFileSync('d:/gameprojects/mi/unpacked/base/subpackages/base/game.js', 'utf8');

const marker = `System.register("chunks:///_virtual/Encrypto.ts"`;
const start = content.indexOf(marker);
const end = content.indexOf('System.register("chunks:///_virtual/', start + marker.length);
const modCode = content.substring(start, end);

console.log(modCode.substring(2000, 5000));
