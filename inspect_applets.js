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

const baseDir = 'C:\\Users\\Administrator\\AppData\\Roaming\\Tencent\\xwechat\\radium\\users\\857c917bec31d3f98010ac3483ccb697\\applet\\packages';
const appids = fs.readdirSync(baseDir);

for (const appid of appids) {
  const p = path.join(baseDir, appid);
  const verDirs = fs.readdirSync(p);
  for (const v of verDirs) {
    const vp = path.join(p, v);
    if (!fs.statSync(vp).isDirectory()) continue;
    const files = fs.readdirSync(vp);
    console.log(`\n=== AppID: ${appid} (ver: ${v}) ===`);
    for (const f of files) {
      if (f.endsWith('.wxapkg')) {
        const fullP = path.join(vp, f);
        try {
          const dec = decrypt(appid, fullP);
          const pkg = unpack(dec);
          if (pkg) {
            console.log(`  Package: ${f} (${pkg.fileCount} files)`);
            // print first 5 filenames or search for game/name
            for (const item of pkg.files.slice(0, 5)) {
              console.log(`    - ${item.name} (${item.size} bytes)`);
            }
            // check for game.json or app.json
            const jsonFile = pkg.files.find(x => x.name.includes('.json'));
            if (jsonFile) {
              const data = dec.subarray(jsonFile.offset, jsonFile.offset + jsonFile.size).toString('utf8');
              try {
                const j = JSON.parse(data);
                const desc = j.game || j.subpackages || j.pages || j.deviceOrientation || Object.keys(j).slice(0, 5);
                console.log(`    JSON (${jsonFile.name}):`, JSON.stringify(desc).slice(0, 100));
              } catch(e) {
                console.log(`    JSON (${jsonFile.name}): raw len ${data.length}`);
              }
            }
          } else {
            console.log(`  Package: ${f} (unpack failed, magic: 0x${dec[0].toString(16)})`);
          }
        } catch (err) {
          console.log(`  Error inspecting ${f}: ${err.message}`);
        }
      }
    }
  }
}
