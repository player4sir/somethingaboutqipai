const fs = require('fs');
const path = require('path');

const gcDir = 'C:/Users/Administrator/AppData/Roaming/Tencent/xwechat/radium/users/857c917bec31d3f98010ac3483ccb697/applet/local/wxf4e8b870d6c337ac/usr/gamecaches';
if (fs.existsSync(gcDir)) {
  const list = fs.readdirSync(gcDir);
  list.forEach(item => {
    const p = path.join(gcDir, item);
    const st = fs.statSync(p);
    console.log(item.padEnd(30), st.isDirectory() ? '[DIR]' : st.size);
    if (st.isDirectory()) {
      const sub = fs.readdirSync(p);
      console.log('    -> contains:', sub.slice(0, 5));
    }
  });
}
