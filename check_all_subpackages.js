const fs = require('fs');
const path = require('path');

const unpackedRoot = 'd:/gameprojects/mi/puer_mahjong_export/unpacked';
const dirs = fs.readdirSync(unpackedRoot);

console.log('Unpacked packages in puer_mahjong_export:');
dirs.forEach(d => {
  const p = path.join(unpackedRoot, d);
  let gameJs = null;
  // search for game.js
  function findGameJs(cur) {
    try {
      const list = fs.readdirSync(cur);
      for (const f of list) {
        const fp = path.join(cur, f);
        if (fs.statSync(fp).isDirectory()) findGameJs(fp);
        else if (f === 'game.js') gameJs = fp;
      }
    } catch(e){}
  }
  findGameJs(p);
  if (gameJs) {
    const code = fs.readFileSync(gameJs, 'utf8');
    const sysMatches = code.match(/System\.register\(\s*["']([^"']+)["']/g);
    console.log(`  ${d.padEnd(20)}: game.js found (${(code.length/1024).toFixed(1)} KB), ${sysMatches ? sysMatches.length : 0} virtual modules`);
  } else {
    console.log(`  ${d.padEnd(20)}: no game.js`);
  }
});
