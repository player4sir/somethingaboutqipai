const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

let beautify = null;
try {
  beautify = require('js-beautify').js;
} catch (e) {}

const WXID = 'wxf4e8b870d6c337ac';
const EXPORT_DIR = 'd:/gameprojects/mi/shuahongpai_export';

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) return;
  ensureDir(dest);
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function decryptWxapkg(wxid, srcPath) {
  const buf = fs.readFileSync(srcPath);
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

function unpackWxapkg(decBuf, outDir) {
  if (decBuf[0] !== 0xbe) {
    throw new Error('Invalid magic byte: 0x' + decBuf[0].toString(16));
  }
  const fileCount = decBuf.readUInt32BE(14);
  let offset = 18;
  const files = [];
  for (let i = 0; i < fileCount; i++) {
    const nameLen = decBuf.readUInt32BE(offset);
    offset += 4;
    const name = decBuf.toString('utf8', offset, offset + nameLen);
    offset += nameLen;
    const fOffset = decBuf.readUInt32BE(offset);
    offset += 4;
    const fSize = decBuf.readUInt32BE(offset);
    offset += 4;
    files.push({ name, offset: fOffset, size: fSize });
  }

  for (const f of files) {
    const cleanName = f.name.replace(/^\//, '');
    const targetPath = path.join(outDir, cleanName);
    ensureDir(path.dirname(targetPath));
    const content = decBuf.subarray(f.offset, f.offset + f.size);
    fs.writeFileSync(targetPath, content);
  }
  return files.length;
}

function debundleSystemJs(gameJsPath, outDir) {
  if (!fs.existsSync(gameJsPath)) return 0;
  ensureDir(outDir);
  const content = fs.readFileSync(gameJsPath, 'utf8');
  const regex = /System\.register\("chunks:\/\/\/_virtual\/([^"]+)"/g;
  const matches = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    matches.push({ name: match[1], index: match.index });
  }
  for (let i = 0; i < matches.length; i++) {
    const item = matches[i];
    const nextIndex = (i + 1 < matches.length) ? matches[i + 1].index : content.length;
    let rawCode = content.substring(item.index, nextIndex).trim();
    rawCode = rawCode.replace(/,\s*$/, '').replace(/;\s*$/, '');
    let fileName = item.name;
    if (!fileName.endsWith('.js') && !fileName.endsWith('.ts')) {
      fileName += '.js';
    } else if (fileName.endsWith('.ts')) {
      fileName = fileName.replace(/\.ts$/, '.js');
    }
    const filePath = path.join(outDir, fileName);
    if (beautify) {
      try {
        const formatted = beautify(rawCode, { indent_size: 4, preserve_newlines: true });
        fs.writeFileSync(filePath, formatted);
      } catch (e) {
        fs.writeFileSync(filePath, rawCode);
      }
    } else {
      fs.writeFileSync(filePath, rawCode);
    }
  }
  return matches.length;
}

// Cocos Base64 UUID decoder
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

function restoreNamedAssets(configPath, nativeRoot, outDir) {
  if (!fs.existsSync(configPath) || !fs.existsSync(nativeRoot)) return 0;
  ensureDir(outDir);
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
      ensureDir(path.dirname(destFull));
      try {
        fs.copyFileSync(srcFile, destFull);
        copied++;
      } catch(e){}
    }
  }
  return copied;
}

console.log('=== 1. 导出普洱/东方棋牌内置「耍红牌」子游戏 (subGame_shp) ===');

const shpRawPath = 'C:/Users/Administrator/AppData/Roaming/Tencent/xwechat/radium/users/857c917bec31d3f98010ac3483ccb697/applet/packages/wxf4e8b870d6c337ac/46/_subpackages_subGame_shp_.wxapkg';

if (fs.existsSync(shpRawPath)) {
  const rawDir = path.join(EXPORT_DIR, 'raw_wxapkg');
  ensureDir(rawDir);
  fs.copyFileSync(shpRawPath, path.join(rawDir, '_subpackages_subGame_shp_.wxapkg'));
  console.log('  [OK] 复制原始 WXAPKG 文件');

  const decBuf = decryptWxapkg(WXID, shpRawPath);
  const decDir = path.join(EXPORT_DIR, 'decrypted_wxapkg');
  ensureDir(decDir);
  fs.writeFileSync(path.join(decDir, '_subpackages_subGame_shp_.wxapkg'), decBuf);
  console.log('  [OK] 0xBE 标准格式解密完成，大小:', decBuf.length);

  const unpDir = path.join(EXPORT_DIR, 'unpacked');
  ensureDir(unpDir);
  const unpCount = unpackWxapkg(decBuf, unpDir);
  console.log('  [OK] 解包完成，释放文件数:', unpCount);

  const gameJsPath = path.join(unpDir, 'subpackages/subGame_shp/game.js');
  const srcDir = path.join(EXPORT_DIR, 'src');
  const modCount = debundleSystemJs(gameJsPath, srcDir);
  console.log('  [OK] SystemJS 模块解绑格式化完成，生成源码模块数:', modCount);

  // Copy remote cache
  const remoteCacheDir = 'C:/Users/Administrator/AppData/Roaming/Tencent/xwechat/radium/users/857c917bec31d3f98010ac3483ccb697/applet/local/wxf4e8b870d6c337ac/usr/gamecaches/subGame_shp_remote';
  if (fs.existsSync(remoteCacheDir)) {
    const remoteDest = path.join(EXPORT_DIR, 'remote_assets');
    copyDirSync(remoteCacheDir, remoteDest);
    console.log('  [OK] 拷贝远程缓存资源完成');

    // Restore named assets
    const cfgJson = path.join(remoteCacheDir, '179231253727519.json');
    const nativeDir = path.join(remoteCacheDir, '179231253678718/res/native');
    const assetsNamedDir = path.join(EXPORT_DIR, 'assets_named');
    const restoredCount = restoreNamedAssets(cfgJson, nativeDir, assetsNamedDir);
    console.log('  [OK] 成功将', restoredCount, '个多媒体素材还原至 assets_named');
  }
} else {
  console.error('未找到 raw wxapkg 文件:', shpRawPath);
}

console.log('=== 耍红牌子游戏包导出处理完成 ===');
