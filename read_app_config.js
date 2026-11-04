const fs = require('fs');

const p = 'd:/gameprojects/mi/hlddz_export/unpacked/472/__WITHOUT_MULTI_PLUGINCODE__/app-config.json';
const json = JSON.parse(fs.readFileSync(p, 'utf8'));
console.log('App-Config keys:', Object.keys(json));
console.log('Subpackages:', json.subpackages ? json.subpackages.map(s => s.root || s.name) : json.subPackages);
console.log('Plugins:', json.plugins);
console.log('Entry:', json.entryPagePath || json.pages);
