const fs = require('fs');

const p = 'd:/gameprojects/mi/hlddz_export/unpacked/472/_src_GameBase_/src/GameBase/game.js';
const code = fs.readFileSync(p, 'utf8');

// find where DDZ or Card is defined
const idx = code.indexOf('DDZ');
console.log('Index of DDZ:', idx);
if (idx !== -1) {
  console.log('Context around DDZ:');
  console.log(code.substring(Math.max(0, idx - 100), Math.min(code.length, idx + 300)));
}

// Check how modules are bundled. Look at beginning of file
console.log('First 1500 chars:');
console.log(code.slice(0, 1500));
