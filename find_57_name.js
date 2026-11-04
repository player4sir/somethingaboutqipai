const fs = require('fs');
const path = require('path');

const root = 'd:/gameprojects/mi/puer_mahjong_export/unpacked';
function search(dir) {
  try {
    const list = fs.readdirSync(dir);
    for (const f of list) {
      const fp = path.join(dir, f);
      if (fs.statSync(fp).isDirectory()) search(fp);
      else if (f.endsWith('.json') || f.endsWith('.js')) {
        const str = fs.readFileSync(fp, 'utf8');
        // search for 57 and Chinese characters
        let idx = 0;
        while (true) {
          const i = str.indexOf('57', idx);
          if (i === -1) break;
          // check if nearby has game name
          const sub = str.substring(Math.max(0, i - 80), Math.min(str.length, i + 80));
          if (/[\u4e00-\u9fa5]/.test(sub) && (sub.includes('game') || sub.includes('Game') || sub.includes('name') || sub.includes('Name') || sub.includes('title') || sub.includes('57'))) {
            if (sub.includes('牌') || sub.includes('麻将') || sub.includes('喜') || sub.includes('水') || sub.includes('扣') || sub.includes('花') || sub.includes('斗') || sub.includes('瞪')) {
              console.log('Match in', f, ':', sub.replace(/\s+/g, ' '));
            }
          }
          idx = i + 2;
        }
      }
    }
  } catch(e){}
}
search(root);
