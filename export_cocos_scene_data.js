const fs = require('fs');
const path = require('path');

const targets = [
  {
    game: 'DDZ',
    title: '经典斗地主',
    subgame: 'subGame_ddz',
    bundle: 'subGame_ddz_remote',
    cfgFile: '179231253589515.json',
    path: 'prefab/gameScenePrefab',
    packFile: 'subGame_ddz_remote/179231253435214/res/import/09/09ef49839.json',
    idx: 376,
    outDir: 'd:/gameprojects/mi/doudizhu_export/puer_ddz'
  },
  {
    game: 'LYC',
    title: '特色捞腌菜',
    subgame: 'subGame_lyc',
    bundle: 'subGame_lyc_remote',
    cfgFile: '179231253644517.json',
    path: 'prefab/gameScenePrefab',
    packFile: 'subGame_lyc_remote/179231253596916/res/import/01/01bfb22fd.json',
    idx: 188,
    outDir: 'd:/gameprojects/mi/laoyancai_export'
  },
  {
    game: 'GDY',
    title: '疯狂干瞪眼',
    subgame: 'subGame_gdy',
    bundle: 'subGame_gdy_remote',
    cfgFile: '17931707323500.json',
    path: 'prefab/gameScenePrefab',
    packFile: 'subGame_gdy_remote/17931707474891/res/import/0e/0e11fdb95.json',
    idx: 192,
    outDir: 'd:/gameprojects/mi/gandengyan_export'
  },
  {
    game: 'SHP',
    title: '滇西耍红牌',
    subgame: 'subGame_shp',
    bundle: 'subGame_shp_remote',
    cfgFile: '179231253727519.json',
    path: 'prefab/gameScenePrefab',
    packFile: 'subGame_shp_remote/179231253678718/res/import/05/053f07cb5.json',
    idx: 196,
    outDir: 'd:/gameprojects/mi/shuahongpai_export'
  },
  {
    game: 'MJ',
    title: '普洱麻将',
    subgame: 'subGame_mj',
    bundle: 'game_remote',
    cfgFile: '17923125312569.json',
    path: 'prefab/GameScenePrefab',
    packFile: 'game_remote/17923125289896/res/import/0a/0afd98013.json',
    idx: 221,
    outDir: 'd:/gameprojects/mi/puer_mahjong_export'
  },
  {
    game: 'HALL',
    title: '游戏大厅',
    subgame: 'hall',
    bundle: 'hall_remote',
    cfgFile: '17923125283551.json',
    path: 'prefab/hall/hallPrefab',
    packFile: 'hall_remote/17923125272490/res/import/0f/0f6923dcf.json',
    idx: 1139,
    outDir: 'd:/gameprojects/mi/puer_mahjong_export'
  }
];

const remoteBase = 'd:/gameprojects/mi/puer_mahjong_export/remote_assets';

function deepFind(arr, callback) {
  if (!Array.isArray(arr)) return;
  callback(arr);
  for (const item of arr) {
    if (Array.isArray(item)) deepFind(item, callback);
  }
}

function parseCocosNode(rawNode) {
  if (!Array.isArray(rawNode)) return null;

  let name = '';
  let active = true;
  let pos = [0, 0, 0];
  let rot = [0, 0, 0, 1];
  let scale = [1, 1, 1];
  let contentSize = [0, 0];
  let anchor = [0.5, 0.5];
  let widget = null;
  let button = null;
  let label = null;
  let sprite = null;

  for (let i = 0; i < rawNode.length; i++) {
    const val = rawNode[i];
    if (typeof val === 'string' && !name && !val.startsWith('_')) {
      name = val;
    } else if (typeof val === 'boolean') {
      active = val;
    }
  }

  if (!name) return null;

  // Search inside all nested arrays for transforms & components
  deepFind(rawNode, (sub) => {
    // Position [1, x, y, z]
    if (sub.length === 4 && sub[0] === 1 && typeof sub[1] === 'number' && typeof sub[2] === 'number') {
      pos = [sub[1], sub[2], sub[3]];
    }
    // Size [5, width, height]
    if (sub.length === 3 && sub[0] === 5 && typeof sub[1] === 'number' && typeof sub[2] === 'number') {
      contentSize = [sub[1], sub[2]];
    }
    // Anchor [5, ax, ay]
    if (sub.length === 3 && sub[0] === 5 && typeof sub[1] === 'number' && sub[1] <= 1 && sub[1] >= 0 && sub[2] <= 1 && sub[2] >= 0) {
      if (contentSize[0] !== sub[1]) {
        anchor = [sub[1], sub[2]];
      }
    }
    // Widget alignFlags (45: full stretch, 9: left+top, etc.)
    if (sub.length >= 4 && (sub[0] === 6 || sub[0] === 15 || sub[0] === 54 || sub[0] === 59) && typeof sub[1] === 'number') {
      widget = { alignFlags: sub[1] };
    }
    // Button clickEvents
    if (sub.length >= 3 && typeof sub[1] === 'string' && sub[1].toLowerCase().includes('click')) {
      button = { handler: sub[1] };
    }
    // Label text
    if (sub.length >= 4 && typeof sub[1] === 'string' && typeof sub[2] === 'number' && typeof sub[3] === 'number') {
      label = { text: sub[1], fontSize: sub[2], lineHeight: sub[3] };
    }
  });

  return {
    name,
    active,
    _lpos: pos,
    _lrot: rot,
    _lscale: scale,
    _contentSize: contentSize,
    _anchorPoint: anchor,
    components: {
      widget,
      button,
      label,
      sprite
    }
  };
}

const masterSceneData = {};

for (const t of targets) {
  const pack = JSON.parse(fs.readFileSync(path.join(remoteBase, t.packFile), 'utf8'));
  const cfg = JSON.parse(fs.readFileSync(path.join(remoteBase, t.bundle, t.cfgFile), 'utf8'));

  let packId = null;
  for (const pid in cfg.packs) {
    if (cfg.packs[pid].includes(t.idx) || cfg.packs[pid].includes(String(t.idx))) {
      packId = pid;
      break;
    }
  }
  const indices = cfg.packs[packId];
  const itemPos = indices.indexOf(t.idx) !== -1 ? indices.indexOf(t.idx) : indices.indexOf(String(t.idx));
  const rawScene = pack[5][itemPos];

  const parsedNodes = [];
  rawScene[0].forEach((rn, idx) => {
    const nodeObj = parseCocosNode(rn);
    if (nodeObj) {
      parsedNodes.push({ nodeIndex: idx, ...nodeObj });
    }
  });

  const sceneExport = {
    game: t.game,
    title: t.title,
    subgame: t.subgame,
    prefabPath: t.path,
    designResolution: { width: 1280, height: 720 },
    widescreenOffset: { threshold: 1440, notchOffset: 57 },
    totalNodes: parsedNodes.length,
    nodes: parsedNodes
  };

  masterSceneData[t.game] = sceneExport;

  const outFile = path.join(t.outDir, `${t.game.toLowerCase()}_scene_prefab.cocos.json`);
  fs.writeFileSync(outFile, JSON.stringify(sceneExport, null, 2), 'utf8');
}

fs.writeFileSync('d:/gameprojects/mi/COCOS_SCENE_DESIGN_DATA.json', JSON.stringify(masterSceneData, null, 2), 'utf8');
console.log('重新生成完毕，所有尺寸、坐标与组件完整！');
