const fs = require('fs');
const path = require('path');

const BASE64_KEYS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const values = new Array(123);
for (let i = 0; i < 123; ++i) values[i] = 64;
for (let i = 0; i < 64; ++i) values[BASE64_KEYS.charCodeAt(i)] = i;

function decodeUuid(base64) {
  const strs = base64.split('@');
  const uuid = strs[0];
  if (uuid.length !== 22) return uuid;
  const hexArr = [];
  const prefix = uuid.slice(0, 2);
  const match = uuid.slice(2);
  let i = 0;
  while (i < match.length) {
    const b0 = values[match.charCodeAt(i++)];
    const b1 = values[match.charCodeAt(i++)];
    const b2 = values[match.charCodeAt(i++)];
    const b3 = values[match.charCodeAt(i++)];
    hexArr.push((b0 >> 2).toString(16));
    hexArr.push((((b0 & 3) << 2) | (b1 >> 4)).toString(16));
    hexArr.push((b1 & 15).toString(16));
    hexArr.push((b2 >> 2).toString(16));
    hexArr.push((((b2 & 3) << 2) | (b3 >> 4)).toString(16));
    hexArr.push((b3 & 15).toString(16));
  }
  const hex = prefix + hexArr.join('');
  return [hex.slice(0, 8), hex.slice(8, 12), hex.slice(12, 16), hex.slice(16, 20), hex.slice(20)].join('-');
}

const configPath = 'd:/gameprojects/mi/doudizhu_export/puer_ddz/remote_assets/179231253589515.json';
const nativeRoot = 'd:/gameprojects/mi/doudizhu_export/puer_ddz/remote_assets/179231253435214/res/native';
const outDir = 'd:/gameprojects/mi/doudizhu_export/puer_ddz/assets_named';

fs.mkdirSync(outDir, { recursive: true });

// Read all native files on disk into map: uuid -> filePath
const nativeFiles = new Map();
function scan(dir) {
  try {
    for (const f of fs.readdirSync(dir)) {
      const fp = path.join(dir, f);
      if (fs.statSync(fp).isDirectory()) scan(fp);
      else {
        const base = path.basename(f);
        const dot = base.indexOf('.');
        const id = dot > -1 ? base.slice(0, dot) : base;
        nativeFiles.set(id, fp);
      }
    }
  } catch(e){}
}
scan(nativeRoot);
console.log(`扫描到 ${nativeFiles.size} 个原生资源文件`);

const cfg = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const uuids = cfg.uuids || [];
const paths = cfg.paths || {};

let copied = 0;
for (const idx in paths) {
  const pInfo = paths[idx];
  const virtualPath = pInfo[0];
  const b64Uuid = uuids[idx];
  if (!b64Uuid) continue;

  const hexUuid = decodeUuid(b64Uuid);
  let srcFile = nativeFiles.get(hexUuid) || nativeFiles.get(b64Uuid);
  if (!srcFile && b64Uuid.includes('@')) {
    const pure = b64Uuid.split('@')[0];
    srcFile = nativeFiles.get(decodeUuid(pure)) || nativeFiles.get(pure);
  }

  if (srcFile) {
    const ext = path.extname(srcFile);
    let destRelative = virtualPath;
    if (!destRelative.endsWith(ext)) {
      destRelative += ext;
    }
    const destFull = path.join(outDir, destRelative);
    fs.mkdirSync(path.dirname(destFull), { recursive: true });
    try {
      fs.copyFileSync(srcFile, destFull);
      copied++;
    } catch(e){}
  }
}

console.log(`成功将 ${copied} 个原生素材还原至规范命名目录: ${outDir}`);
