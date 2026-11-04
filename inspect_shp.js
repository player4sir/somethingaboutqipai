const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function decrypt(wxid, src) {
  const buf = fs.readFileSync(src);
  if (buf.subarray(0, 6).toString('utf8') !== 'V1MMWX') {
    return buf;
  }
  const key = crypto.pbkdf2Sync(wxid, 'saltiest', 1000, 32, 'sha1');
  const iv = Buffer.from('the iv: 16 bytes');
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  decipher.setAutoPadding(false);
  const decHeader = decipher.update(buf.subarray(6, 1030));
  const xorByte = wxid.charCodeAt(wxid.length - 2);
  const body = buf.subarray(1030);
  const decBody = Buffer.allocUnsafe(body.length);
  for (let i = 0; i < body.length; i++) {
    decBody[i] = body[i] ^ xorByte;
  }
  return Buffer.concat([decHeader.subarray(0, 1023), decBody]);
}

function unpack(dec) {
  if (dec[0] !== 0xbe) return null;
  const fileCount = dec.readUInt32BE(14);
  const files = [];
  let offset = 18;
  for (let i = 0; i < fileCount; i++) {
    const nameLen = dec.readUInt32BE(offset);
    offset += 4;
    const name = dec.toString('utf8', offset, offset + nameLen);
    offset += nameLen;
    const fOffset = dec.readUInt32BE(offset);
    offset += 4;
    const fSize = dec.readUInt32BE(offset);
    offset += 4;
    files.push({ name, offset: fOffset, size: fSize });
  }
  return { fileCount, files };
}

const shpPath = 'C:/Users/Administrator/AppData/Roaming/Tencent/xwechat/radium/users/857c917bec31d3f98010ac3483ccb697/applet/packages/wxf4e8b870d6c337ac/46/_subpackages_subGame_shp_.wxapkg';
const dec = decrypt('wxf4e8b870d6c337ac', shpPath);
console.log('Decrypted size:', dec.length, 'magic:', dec[0].toString(16));
const res = unpack(dec);
console.log('Files in subGame_shp:', res.fileCount);
res.files.forEach(f => console.log(' ', f.name, f.size));

// Read game.js in subGame_shp and check virtual modules
const gameFile = res.files.find(f => f.name.endsWith('game.js'));
if (gameFile) {
  const content = dec.subarray(gameFile.offset, gameFile.offset + gameFile.size).toString('utf8');
  console.log('game.js size:', content.length);
  const sysMatches = content.match(/System\.register\(\s*["']([^"']+)["']/g);
  if (sysMatches) {
    console.log('Virtual modules in subGame_shp:', sysMatches.length);
    const names = sysMatches.map(m => m.match(/System\.register\(\s*["']([^"']+)["']/)[1]);
    console.log('Sample module names:', names.slice(0, 20));
  }
  // Check Chinese strings or game name mentions
  const titleMatches = content.match(/沙窝牌|十四喜|双扣|升级|打饼子|字牌|跑胡子|大贰|长牌|十五湖|骨牌|十三水/g);
  console.log('Game keyword matches:', titleMatches ? [...new Set(titleMatches)] : 'none');
}
