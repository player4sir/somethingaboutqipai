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
        const i = str.indexOf('subGame_shp');
        if (i !== -1) {
          console.log('Found in:', fp);
          console.log('Snippet:', str.substring(Math.max(0, i - 100), Math.min(str.length, i + 200)));
        }
      }
    }
  } catch(e){}
}
search(root);
