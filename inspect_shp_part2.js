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
const res = unpack(dec);
const gameFile = res.files.find(f => f.name.endsWith('game.js'));
const content = dec.subarray(gameFile.offset, gameFile.offset + gameFile.size).toString('utf8');

function extractModule(name) {
  const prefix = `System.register("chunks:///_virtual/${name}"`;
  const idx = content.indexOf(prefix);
  if (idx === -1) return null;
  const nextIdx = content.indexOf('System.register("chunks:///_virtual/', idx + prefix.length);
  return content.substring(idx, nextIdx !== -1 ? nextIdx : idx + 10000);
}

const shpRules = extractModule('ShpRules.ts');
console.log('ShpRules 3000-6000:');
console.log(shpRules.slice(3000, 6000));
