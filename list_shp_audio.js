const fs = require('fs');

const p = 'C:/Users/Administrator/AppData/Roaming/Tencent/xwechat/radium/users/857c917bec31d3f98010ac3483ccb697/applet/local/wxf4e8b870d6c337ac/usr/gamecaches/subGame_shp_remote/179231253727519.json';
const cfg = JSON.parse(fs.readFileSync(p, 'utf8'));
const audioPaths = Object.values(cfg.paths).filter(s => s[0].startsWith('audio/'));
console.log('Audio paths:', audioPaths.length);
audioPaths.forEach(s => console.log(' ', s[0]));
