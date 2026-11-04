const fs = require('fs');
const path = require('path');

const targets = [
  { game: 'DDZ', name: '斗地主', bundle: 'subGame_ddz_remote', cfgFile: '179231253589515.json', path: 'prefab/gameScenePrefab', packFile: 'subGame_ddz_remote/179231253435214/res/import/09/09ef49839.json', idx: 376 },
  { game: 'LYC', name: '捞腌菜', bundle: 'subGame_lyc_remote', cfgFile: '179231253644517.json', path: 'prefab/gameScenePrefab', packFile: 'subGame_lyc_remote/179231253596916/res/import/01/01bfb22fd.json', idx: 188 },
  { game: 'GDY', name: '干瞪眼', bundle: 'subGame_gdy_remote', cfgFile: '17931707323500.json',  path: 'prefab/gameScenePrefab', packFile: 'subGame_gdy_remote/17931707474891/res/import/0e/0e11fdb95.json', idx: 192 },
  { game: 'SHP', name: '耍红牌', bundle: 'subGame_shp_remote', cfgFile: '179231253727519.json', path: 'prefab/gameScenePrefab', packFile: 'subGame_shp_remote/179231253678718/res/import/05/053f07cb5.json', idx: 196 },
  { game: 'MJ',  name: '普洱麻将', bundle: 'game_remote',        cfgFile: '17923125312569.json',  path: 'prefab/GameScenePrefab', packFile: 'game_remote/17923125289896/res/import/0a/0afd98013.json',        idx: 221 },
  { game: 'HALL',name: '游戏大厅', bundle: 'hall_remote',        cfgFile: '17923125283551.json',  path: 'prefab/hall/hallPrefab', packFile: 'hall_remote/17923125272490/res/import/0f/0f6923dcf.json',        idx: 1139 }
];

const remoteBase = 'd:/gameprojects/mi/puer_mahjong_export/remote_assets';

function extractNodeInfo(raw) {
  if (!Array.isArray(raw)) return null;
  
  // Find name string
  let name = null;
  for (let i = 0; i < Math.min(raw.length, 5); i++) {
    if (typeof raw[i] === 'string' && raw[i].length > 0 && !raw[i].startsWith('_')) {
      name = raw[i];
      break;
    }
  }
  if (!name) return null;

  // Search for position [1, x, y, z]
  let pos = [0, 0, 0];
  let size = null;
  let components = [];

  for (const item of raw) {
    if (Array.isArray(item)) {
      // Position vector: [1, x, y, z]
      if (item.length === 4 && item[0] === 1 && typeof item[1] === 'number' && typeof item[2] === 'number') {
        pos = [item[1], item[2], item[3]];
      }
      // Content size: [5, width, height]
      if (item.length === 3 && item[0] === 5 && typeof item[1] === 'number' && typeof item[2] === 'number') {
        size = [item[1], item[2]];
      }
      // Inspect inner items for UITransform / Widget / etc.
      for (const sub of item) {
        if (Array.isArray(sub)) {
          if (sub.length === 3 && sub[0] === 5 && typeof sub[1] === 'number' && typeof sub[2] === 'number') {
            size = [sub[1], sub[2]];
          }
          if (sub.length === 4 && sub[0] === 1 && typeof sub[1] === 'number' && typeof sub[2] === 'number') {
            pos = [sub[1], sub[2], sub[3]];
          }
        }
      }
    }
  }

  return { name, pos, size };
}

const allResults = {};

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
  const sceneData = pack[5][itemPos];
  const rawNodes = sceneData[0];
  
  const nodes = [];
  rawNodes.forEach((rn, i) => {
    const info = extractNodeInfo(rn);
    if (info) {
      nodes.push({ id: i, ...info });
    }
  });

  allResults[t.game] = {
    game: t.game,
    title: t.name,
    prefabPath: t.path,
    totalRawNodes: rawNodes.length,
    extractedNodesCount: nodes.length,
    nodes: nodes
  };

  console.log(`[${t.game}] ${t.name}: 提取到 ${nodes.length} 个具有明确命名与布局的节点`);
}

fs.writeFileSync('d:/gameprojects/mi/game_scene_specs.json', JSON.stringify(allResults, null, 2), 'utf8');
console.log('全部场景设计已保存到 d:/gameprojects/mi/game_scene_specs.json');
