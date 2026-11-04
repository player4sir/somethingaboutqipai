const fs = require('fs');

const p = 'C:/Users/Administrator/AppData/Roaming/Tencent/xwechat/radium/users/857c917bec31d3f98010ac3483ccb697/applet/local/wxf4e8b870d6c337ac/usr/gamecaches/subGame_shp_remote/179231253727519.json';
if (fs.existsSync(p)) {
  const cfg = JSON.parse(fs.readFileSync(p, 'utf8'));
  console.log('Keys:', Object.keys(cfg));
  console.log('Paths count:', Object.keys(cfg.paths || {}).length);
  const sample = Object.values(cfg.paths).slice(0, 30);
  console.log('Sample paths:');
  sample.forEach(s => console.log(' ', s[0]));
}
