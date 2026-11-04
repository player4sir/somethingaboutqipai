const fs = require('fs');
const path = require('path');

let beautify = null;
try {
  beautify = require('js-beautify').js;
} catch (e) {}

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

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function debundle(gameJsPath, outDir) {
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

const UNPACKED_BASE = 'd:/gameprojects/mi/puer_mahjong_export/unpacked';
const EXPORT_ROOT = 'd:/gameprojects/mi/puer_mahjong_export';

console.log('=== 开始解绑平台与大厅所有核心子包 ===');

const packagesToDebundle = [
  { name: 'hall', src: 'hall/subpackages/hall/game.js', dest: 'src_hall' },
  { name: 'match', src: 'match/subpackages/match/game.js', dest: 'src_match' },
  { name: 'activity', src: 'activity/subpackages/activity/game.js', dest: 'src_activity' },
  { name: 'giftbag', src: 'giftbag/subpackages/giftbag/game.js', dest: 'src_giftbag' },
  { name: 'private', src: 'private/subpackages/private/game.js', dest: 'src_private' },
  { name: 'game_common', src: 'game_common/subpackages/game_common/game.js', dest: 'src_game_common' },
  { name: 'login', src: 'login/subpackages/login/game.js', dest: 'src_login' },
  { name: 'main', src: 'main/subpackages/main/game.js', dest: 'src_main' }
];

packagesToDebundle.forEach(pkg => {
  const fullJs = path.join(UNPACKED_BASE, pkg.src);
  const outDir = path.join(EXPORT_ROOT, pkg.dest);
  const count = debundle(fullJs, outDir);
  console.log(`  [OK] 解绑 ${pkg.name.padEnd(12)} -> 导出 ${count} 个模块至 ${pkg.dest}`);
});

console.log('\n=== 开始还原大厅与平台多媒体原生资产 ===');
const GC_BASE = 'C:/Users/Administrator/AppData/Roaming/Tencent/xwechat/radium/users/857c917bec31d3f98010ac3483ccb697/applet/local/wxf4e8b870d6c337ac/usr/gamecaches';
const ASSETS_NAMED_ROOT = path.join(EXPORT_ROOT, 'assets_named');

const remoteCaches = [
  { name: 'hall', dir: 'hall_remote' },
  { name: 'match', dir: 'match_remote' },
  { name: 'activity', dir: 'activity_remote' },
  { name: 'giftbag', dir: 'giftbag_remote' },
  { name: 'private', dir: 'private_remote' },
  { name: 'game_common', dir: 'game_common_remote' },
  { name: 'audio_game', dir: 'audio_game' }
];

remoteCaches.forEach(item => {
  const curDir = path.join(GC_BASE, item.dir);
  if (fs.existsSync(curDir)) {
    const files = fs.readdirSync(curDir);
    const jsonFile = files.find(f => f.endsWith('.json'));
    const nativeSub = files.find(f => fs.statSync(path.join(curDir, f)).isDirectory());
    if (jsonFile && nativeSub) {
      const cfgPath = path.join(curDir, jsonFile);
      const natPath = path.join(curDir, nativeSub, 'res/native');
      const outSub = path.join(ASSETS_NAMED_ROOT, item.name);
      const count = restoreNamedAssets(cfgPath, natPath, outSub);
      console.log(`  [OK] 还原 ${item.name.padEnd(12)} -> 恢复 ${count} 个规范命名资产`);
    }
  }
});

console.log('\n=== 全量大厅与系统分包解绑及多媒体还原完成！===');
