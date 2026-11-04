const fs = require('fs');

const p = 'd:/gameprojects/mi/puer_mahjong_export/unpacked/subGame_ddz/subpackages/subGame_ddz/game.js';
const code = fs.readFileSync(p, 'utf8');
console.log('Size:', code.length);

const sysMatches = code.match(/System\.register\(\s*["']([^"']+)["']/g);
console.log('Virtual modules in puer subGame_ddz:', sysMatches ? sysMatches.length : 0);
if (sysMatches) {
  const names = sysMatches.map(m => m.match(/System\.register\(\s*["']([^"']+)["']/)[1]);
  console.log('Modules list:');
  names.forEach(n => console.log('  -', n));
}
