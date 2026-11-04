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

function unpack(dec, outDir) {
  if (dec[0] !== 0xbe) {
    throw new Error('Invalid magic byte: 0x' + dec[0].toString(16));
  }
  const fileCount = dec.readUInt32BE(14);
  let offset = 18;
  const files = [];
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

  for (const f of files) {
    const cleanName = f.name.replace(/^\//, '');
    const targetPath = path.join(outDir, cleanName);
    fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    const content = dec.subarray(f.offset, f.offset + f.size);
    fs.writeFileSync(targetPath, content);
  }
  return files.length;
}

const wxid = 'wxd0e404d795ea6f80';
const srcDir = 'C:\\Users\\Administrator\\AppData\\Roaming\\Tencent\\xwechat\\radium\\users\\857c917bec31d3f98010ac3483ccb697\\applet\\packages\\wxd0e404d795ea6f80';
const subDirs = fs.readdirSync(srcDir);
console.log('Subdirs in HLDDZ:', subDirs);

for (const ver of subDirs) {
  const vp = path.join(srcDir, ver);
  if (!fs.statSync(vp).isDirectory()) continue;
  const pkgs = fs.readdirSync(vp).filter(f => f.endsWith('.wxapkg'));
  console.log(`Version ${ver} has ${pkgs.length} packages.`);
  for (const pkg of pkgs) {
    const fullP = path.join(vp, pkg);
    try {
      const dec = decrypt(wxid, fullP);
      const pkgName = pkg.replace('.wxapkg', '');
      const outDir = path.join('d:\\gameprojects\\mi\\hlddz_export\\unpacked', ver, pkgName);
      const count = unpack(dec, outDir);
      console.log(`  Decrypted & unpacked ${pkg} -> ${count} files`);
    } catch (e) {
      console.error(`  Failed on ${pkg}: ${e.message}`);
    }
  }
}
