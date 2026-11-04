const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
let beautify = null;
try {
  beautify = require('js-beautify').js;
} catch (e) {}

const EXPORT_BASE = 'd:/gameprojects/mi/doudizhu_export';

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

// 1. Process Puer/Dongfang DDZ
console.log('=== 1. 导出普洱棋牌内置斗地主子游戏 (wxf4e8b870d6c337ac) ===');
const puerDdzRaw = 'C:/Users/Administrator/AppData/Roaming/Tencent/xwechat/radium/users/857c917bec31d3f98010ac3483ccb697/applet/packages/wxf4e8b870d6c337ac/46/_subpackages_subGame_ddz_.wxapkg';
const puerDdzExport = path.join(EXPORT_BASE, 'puer_ddz');

if (fs.existsSync(puerDdzRaw)) {
  const rawDir = path.join(puerDdzExport, 'raw_wxapkg');
  ensureDir(rawDir);
  fs.copyFileSync(puerDdzRaw, path.join(rawDir, '_subpackages_subGame_ddz_.wxapkg'));
  console.log('  [OK] 复制原始 WXAPKG');

  const decBuf = decryptWxapkg('wxf4e8b870d6c337ac', puerDdzRaw);
  const decDir = path.join(puerDdzExport, 'decrypted_wxapkg');
  ensureDir(decDir);
  fs.writeFileSync(path.join(decDir, '_subpackages_subGame_ddz_.wxapkg'), decBuf);
  console.log('  [OK] 解密完成，尺寸:', decBuf.length);

  const unpackedDir = path.join(puerDdzExport, 'unpacked');
  ensureDir(unpackedDir);
  const unpCount = unpackWxapkg(decBuf, unpackedDir);
  console.log('  [OK] 解包完成，释放文件数:', unpCount);

  const srcDir = path.join(puerDdzExport, 'src');
  const debCount = debundleSystemJs(path.join(unpackedDir, 'subpackages/subGame_ddz/game.js'), srcDir);
  console.log('  [OK] SystemJS 模块解绑格式化完成，生成源码文件数:', debCount);

  // Copy remote assets
  const remoteCacheDir = 'C:/Users/Administrator/AppData/Roaming/Tencent/xwechat/radium/users/857c917bec31d3f98010ac3483ccb697/applet/local/wxf4e8b870d6c337ac/usr/gamecaches/subGame_ddz_remote';
  if (fs.existsSync(remoteCacheDir)) {
    const remoteDest = path.join(puerDdzExport, 'remote_assets');
    copyDirSync(remoteCacheDir, remoteDest);
    console.log('  [OK] 拷贝远程缓存资源');
  }
}

// 2. Process Tencent Official HLDDZ
console.log('\n=== 2. 导出腾讯官方《欢乐斗地主》(wxd0e404d795ea6f80) ===');
const hlddzPkgDir = 'C:/Users/Administrator/AppData/Roaming/Tencent/xwechat/radium/users/857c917bec31d3f98010ac3483ccb697/applet/packages/wxd0e404d795ea6f80/472';
const hlddzExport = path.join(EXPORT_BASE, 'tencent_hlddz');

if (fs.existsSync(hlddzPkgDir)) {
  const pkgs = fs.readdirSync(hlddzPkgDir).filter(f => f.endsWith('.wxapkg'));
  console.log(`  发现 ${pkgs.length} 个 WXAPKG 基础与分包`);

  const rawDir = path.join(hlddzExport, 'raw_wxapkg');
  const decDir = path.join(hlddzExport, 'decrypted_wxapkg');
  const unpDir = path.join(hlddzExport, 'unpacked');
  ensureDir(rawDir);
  ensureDir(decDir);
  ensureDir(unpDir);

  for (const pkg of pkgs) {
    const srcPkg = path.join(hlddzPkgDir, pkg);
    fs.copyFileSync(srcPkg, path.join(rawDir, pkg));
    const decBuf = decryptWxapkg('wxd0e404d795ea6f80', srcPkg);
    fs.writeFileSync(path.join(decDir, pkg), decBuf);
    const subOut = path.join(unpDir, pkg.replace('.wxapkg', ''));
    unpackWxapkg(decBuf, subOut);
  }
  console.log('  [OK] 全部 26 个分包解密与解包完成');

  // Copy local game caches and configs
  const localDir = 'C:/Users/Administrator/AppData/Roaming/Tencent/xwechat/radium/users/857c917bec31d3f98010ac3483ccb697/applet/local/wxd0e404d795ea6f80';
  if (fs.existsSync(localDir)) {
    const cacheDest = path.join(hlddzExport, 'local_cache');
    copyDirSync(path.join(localDir, 'usr/gamecaches'), path.join(cacheDest, 'gamecaches'));
    copyDirSync(path.join(localDir, 'usr/cfg_mina'), path.join(cacheDest, 'cfg_mina'));
    copyDirSync(path.join(localDir, 'usr/TsdkTransformCache'), path.join(cacheDest, 'TsdkTransformCache'));
    console.log('  [OK] 拷贝本地配置与缓存完成');
  }
}

console.log('\n=== 全量斗地主数据包导出完成！===');
