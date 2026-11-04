/**
 * 普洱/东方棋牌 - 多游戏场景UI设计搭建与渲染引擎
 * 基于提取自 Cocos Creator 3.x Prefab 与 Constant 的精确布局坐标
 */

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const canvasWrapper = document.getElementById('canvasWrapper');
const screenBadge = document.getElementById('screenBadge');
const nodeTreeList = document.getElementById('nodeTreeList');
const coordsTableBody = document.getElementById('coordsTableBody');
const codeOutput = document.getElementById('codeOutput');
const nodeCountBadge = document.getElementById('nodeCountBadge');
const statusInfo = document.getElementById('statusInfo');

let currentWidth = 1280;
const currentHeight = 720;
let currentGame = 'DDZ';
let showGrid = false;
let showNodeHighlight = false;
let selectedNode = null;
let hoveredNode = null;

// 手牌选中状态（斗地主/干瞪眼等）
let selectedCardIndices = new Set();

// ==========================================
// 1. 核心坐标转换 (Cocos 3.x -> Canvas 2D)
// ==========================================
// Cocos: 原点在中心 (0, 0), +X 向右, +Y 向上
// Canvas: 原点在左上角 (0, 0), +X 向右, +Y 向下
function toScreen(cx, cy) {
  return {
    x: (currentWidth / 2) + cx,
    y: (currentHeight / 2) - cy
  };
}

function fromScreen(sx, sy) {
  return {
    cx: sx - (currentWidth / 2),
    cy: (currentHeight / 2) - sy
  };
}

// ==========================================
// 2. 场景布局规范配置 (基于逆向常数提取)
// ==========================================
function getLayoutConfig(gameKey, width, height) {
  const notchOffset = width >= 1440 ? 57 : 0;
  const W2 = width / 2;
  const H2 = height / 2;

  switch (gameKey) {
    case 'DDZ':
      return {
        title: '经典斗地主 (3人桌)',
        tableFelt: '#165e38',
        tableBorder: '#3d2511',
        seats: [
          { id: 0, name: '我自己 (地主)', role: 'lord', cx: -W2 + 60, cy: -H2 + 50, coins: '88,920', isSelf: true },
          { id: 1, name: '下家 (农民)', role: 'farmer', cx: W2 - 60 - notchOffset, cy: 110, coins: '15,400' },
          { id: 2, name: '上家 (农民)', role: 'farmer', cx: -W2 + 60 + notchOffset, cy: 110, coins: '43,200' }
        ],
        outCardPos: [
          { cx: 0, cy: -35 },
          { cx: W2 - 215 - notchOffset, cy: 110 },
          { cx: -W2 + 215 + notchOffset, cy: 110 }
        ],
        clockPos: [
          { cx: 0, cy: 85 },
          { cx: W2 - 215 - notchOffset, cy: 110 },
          { cx: -W2 + 215 + notchOffset, cy: 110 }
        ],
        operationPos: { cx: 0, cy: -35 },
        handCardPos: { cx: 0, cy: -200 },
        bottomCardsPos: { cx: 0, cy: 260 },
        buttons: ['不出', '提示', '出牌']
      };

    case 'MJ':
      return {
        title: '普洱麻将 (4人桌)',
        tableFelt: '#1a543b',
        tableBorder: '#4a2d16',
        seats: [
          { id: 0, name: '自己 (南)', role: 'south', cx: -W2 + 80, cy: -H2 + 70, coins: '260,000', isSelf: true },
          { id: 1, name: '对家 (北)', role: 'north', cx: 0, cy: H2 - 80, coins: '180,000' },
          { id: 2, name: '上家 (东)', role: 'east', cx: -W2 + 80 + notchOffset, cy: 60, coins: '95,000' },
          { id: 3, name: '下家 (西)', role: 'west', cx: W2 - 80 - notchOffset, cy: 60, coins: '310,000' }
        ],
        operationPos: { cx: 120, cy: -110 },
        handTilePos: { cx: 0, cy: -250 },
        discardPoolPos: { cx: 0, cy: 0 },
        buttons: ['碰', '杠', '胡', '过']
      };

    case 'LYC':
      return {
        title: '特色捞腌菜 (7人庄闲桌)',
        tableFelt: '#1a4968',
        tableBorder: '#27384a',
        seats: [
          { id: 0, name: '自己 (闲家)', cx: -W2 + 60, cy: -H2 + 50, coins: '120,500', isSelf: true },
          { id: 1, name: '闲家 1', cx: W2 - 60 - notchOffset, cy: -108, coins: '80,000' },
          { id: 2, name: '闲家 2', cx: W2 - 60 - notchOffset, cy: 68, coins: '50,000' },
          { id: 3, name: '庄家', cx: 220, cy: H2 - 60, coins: '1,500,000', role: 'banker' },
          { id: 4, name: '闲家 3', cx: -220, cy: H2 - 60, coins: '78,000' },
          { id: 5, name: '闲家 4', cx: -W2 + 60 + notchOffset, cy: 68, coins: '62,000' },
          { id: 6, name: '闲家 5', cx: -W2 + 60 + notchOffset, cy: -108, coins: '41,000' }
        ],
        betZonePos: { cx: 0, cy: 30 },
        operationPos: { cx: 0, cy: -110 },
        handCardPos: { cx: 0, cy: -220 },
        buttons: ['下注 100', '下注 500', '下注 1000', '看牌', '弃牌']
      };

    case 'GDY':
      return {
        title: '疯狂干瞪眼 (5人接龙桌)',
        tableFelt: '#542020',
        tableBorder: '#3d1616',
        seats: [
          { id: 0, name: '自己', cx: -W2 + 60, cy: -H2 + 50, coins: '50,000', isSelf: true },
          { id: 1, name: '右下', cx: W2 - 60 - notchOffset, cy: 0, coins: '35,000' },
          { id: 2, name: '右上', cx: W2 - 60 - notchOffset, cy: 198, coins: '48,000' },
          { id: 3, name: '左上', cx: -W2 + 60 + notchOffset, cy: 198, coins: '72,000' },
          { id: 4, name: '左下', cx: -W2 + 60 + notchOffset, cy: 0, coins: '29,000' }
        ],
        drawDeckPos: { cx: 0, cy: 110 },
        outCardPos: { cx: 0, cy: -18 },
        operationPos: { cx: 0, cy: -205 },
        handCardPos: { cx: 0, cy: -240 },
        buttons: ['不出', '出牌', '摸牌']
      };

    case 'SHP':
      return {
        title: '滇西耍红牌 (5人4轮比牌桌)',
        tableFelt: '#392254',
        tableBorder: '#27173b',
        seats: [
          { id: 0, name: '自己', cx: -W2 + 70, cy: -H2 + 50, coins: '99,000', isSelf: true },
          { id: 1, name: '下家 1', cx: W2 - 70 - notchOffset, cy: -48, coins: '66,000' },
          { id: 2, name: '下家 2', cx: W2 - 70 - notchOffset, cy: 165, coins: '88,000' },
          { id: 3, name: '上家 2', cx: -W2 + 70 + notchOffset, cy: 165, coins: '120,000' },
          { id: 4, name: '上家 1', cx: -W2 + 70 + notchOffset, cy: -48, coins: '54,000' }
        ],
        compareSlots: [
          { round: 1, cx: -150, cy: 50 },
          { round: 2, cx: -50, cy: 50 },
          { round: 3, cx: 50, cy: 50 },
          { round: 4, cx: 150, cy: 50 }
        ],
        operationPos: { cx: 0, cy: -130 },
        handCardPos: { cx: 0, cy: -220 },
        buttons: ['出牌', '弃牌', '比牌']
      };

    case 'HALL':
      return {
        title: '普洱/东方棋牌 - 游戏大厅',
        tableFelt: '#1b2233',
        tableBorder: '#101521',
        isHall: true,
        userTop: { cx: -W2 + 150, cy: H2 - 50, nick: '普洱玩家9527', coins: '1,280,000', diamond: '680', vip: 5 },
        toolBar: { cx: W2 - 180, cy: H2 - 50 },
        gameCards: [
          { id: 'mj', name: '普洱麻将', icon: '🀄', sub: '血流成河·换三张', cx: -380, cy: 20, color: '#16a34a' },
          { id: 'ddz', name: '经典斗地主', icon: '🃏', sub: '叫分加倍·三人玩', cx: -190, cy: 20, color: '#ea580c' },
          { id: 'lyc', name: '特色捞腌菜', icon: '🥬', sub: '庄闲买马·七人桌', cx: 0, cy: 20, color: '#0284c7' },
          { id: 'gdy', name: '疯狂干瞪眼', icon: '👀', sub: '接龙补牌·神炸弹', cx: 190, cy: 20, color: '#dc2626' },
          { id: 'shp', name: '滇西耍红牌', icon: '🎴', sub: '四轮比拼·暴击光束', cx: 380, cy: 20, color: '#9333ea' }
        ],
        bottomMenus: [
          { name: '商城', icon: '🏪', cx: -280, cy: -H2 + 45 },
          { name: '背包', icon: '🎒', cx: -140, cy: -H2 + 45 },
          { name: '赛事', icon: '🏆', cx: 0, cy: -H2 + 45 },
          { name: '排行', icon: '📊', cx: 140, cy: -H2 + 45 },
          { name: '亲友圈', icon: '👥', cx: 280, cy: -H2 + 45 }
        ]
      };
  }
}

// 模拟手牌数据
const DEMO_CARDS = {
  DDZ: [
    { rank: '3', suit: '♠', color: '#000' },
    { rank: '4', suit: '♥', color: '#dc2626' },
    { rank: '5', suit: '♣', color: '#000' },
    { rank: '6', suit: '♦', color: '#dc2626' },
    { rank: '7', suit: '♠', color: '#000' },
    { rank: '8', suit: '♥', color: '#dc2626' },
    { rank: '9', suit: '♣', color: '#000' },
    { rank: '10', suit: '♦', color: '#dc2626' },
    { rank: 'J', suit: '♠', color: '#000' },
    { rank: 'Q', suit: '♥', color: '#dc2626' },
    { rank: 'K', suit: '♣', color: '#000' },
    { rank: 'A', suit: '♦', color: '#dc2626' },
    { rank: '2', suit: '♠', color: '#000' },
    { rank: '2', suit: '♥', color: '#dc2626' },
    { rank: '小王', suit: '★', color: '#000' },
    { rank: '大王', suit: '★', color: '#dc2626' }
  ],
  MJ: [
    '一万', '二万', '三万', '四条', '五条', '六条', '七筒', '八筒', '九筒', '东风', '南风', '红中', '发财', '摸:九筒'
  ]
};

// ==========================================
// 3. 渲染管线 (Render Loop)
// ==========================================
function renderScene() {
  ctx.clearRect(0, 0, currentWidth, currentHeight);
  const cfg = getLayoutConfig(currentGame, currentWidth, currentHeight);

  if (cfg.isHall) {
    renderHallScene(cfg);
  } else {
    renderTableScene(cfg);
  }

  // 辅助网格与对齐辅助线
  if (showGrid) {
    drawAlignGrid();
  }

  // 节点高亮
  if (selectedNode || hoveredNode) {
    drawNodeHighlight(selectedNode || hoveredNode);
  }
}

// 渲染桌面型游戏 (DDZ, MJ, LYC, GDY, SHP)
function renderTableScene(cfg) {
  const W = currentWidth;
  const H = currentHeight;

  // 1. 桌面底层 (Desktop Felt)
  const cx = W / 2;
  const cy = H / 2;
  
  // 外围木质边框
  ctx.fillStyle = cfg.tableBorder;
  ctx.fillRect(0, 0, W, H);

  // 牌桌毛呢毡面 (椭圆大桌)
  const grad = ctx.createRadialGradient(cx, cy, 100, cx, cy, W / 1.5);
  grad.addColorStop(0, cfg.tableFelt);
  grad.addColorStop(1, '#08170e');
  ctx.fillStyle = grad;

  ctx.beginPath();
  ctx.ellipse(cx, cy, (W / 2) - 30, (H / 2) - 25, 0, 0, Math.PI * 2);
  ctx.fill();

  // 牌桌金色镶边
  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 3;
  ctx.stroke();

  // 牌桌内环金线
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.25)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.ellipse(cx, cy, (W / 2) - 80, (H / 2) - 65, 0, 0, Math.PI * 2);
  ctx.stroke();

  // 2. 牌桌居中徽标与房间信息
  drawTableBrand(cfg);

  // 3. 顶栏系统条 (时间、电量、菜单)
  drawSystemBar(cfg);

  // 4. 渲染所有玩家席位 (Seats)
  cfg.seats.forEach((seat, idx) => {
    drawSeat(seat, idx, cfg);
  });

  // 5. 渲染各游戏专属游戏区
  switch (currentGame) {
    case 'DDZ':
      drawDDZSpecifics(cfg);
      break;
    case 'MJ':
      drawMJSpecifics(cfg);
      break;
    case 'LYC':
      drawLYCSpecifics(cfg);
      break;
    case 'GDY':
      drawGDYSpecifics(cfg);
      break;
    case 'SHP':
      drawSHPSpecifics(cfg);
      break;
  }

  // 6. 渲染操作按钮栏
  drawOperationBar(cfg);
}

// 渲染大厅界面
function renderHallScene(cfg) {
  const W = currentWidth;
  const H = currentHeight;
  const cx = W / 2;
  const cy = H / 2;

  // 大厅深色渐变背景
  const grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0, '#131b2e');
  grad.addColorStop(1, '#0a0d17');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // 顶部装饰光效
  const lightGrad = ctx.createRadialGradient(cx, 0, 50, cx, 0, 600);
  lightGrad.addColorStop(0, 'rgba(59, 130, 246, 0.15)');
  lightGrad.addColorStop(1, 'transparent');
  ctx.fillStyle = lightGrad;
  ctx.fillRect(0, 0, W, 250);

  // 1. 顶部玩家信息栏
  const userPos = toScreen(cfg.userTop.cx, cfg.userTop.cy);
  // 头像框
  ctx.fillStyle = '#1e293b';
  ctx.beginPath();
  ctx.arc(userPos.x - 60, userPos.y, 32, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#e5a73b';
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.fillStyle = '#f8fafc';
  ctx.font = 'bold 24px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('👤', userPos.x - 60, userPos.y + 8);

  // 昵称 & VIP
  ctx.textAlign = 'left';
  ctx.font = 'bold 15px sans-serif';
  ctx.fillStyle = '#f8fafc';
  ctx.fillText(cfg.userTop.nick, userPos.x - 15, userPos.y - 8);
  ctx.fillStyle = '#eab308';
  ctx.font = 'bold 11px sans-serif';
  ctx.fillText(`VIP ${cfg.userTop.vip}`, userPos.x + 95, userPos.y - 8);

  // 银币与房卡
  ctx.fillStyle = 'rgba(0,0,0,0.4)';
  drawRoundRect(ctx, userPos.x - 18, userPos.y + 6, 130, 24, 12);
  ctx.fillStyle = '#fbbf24';
  ctx.font = '12px sans-serif';
  ctx.fillText(`🪙 ${cfg.userTop.coins}`, userPos.x - 8, userPos.y + 22);

  // 2. 顶部工具栏
  const toolPos = toScreen(cfg.toolBar.cx, cfg.toolBar.cy);
  ['📢 公告', '✉️ 邮件', '⚙️ 设置'].forEach((t, i) => {
    const bx = toolPos.x + (i * 75);
    ctx.fillStyle = 'rgba(255,255,255,0.08)';
    drawRoundRect(ctx, bx - 30, toolPos.y - 15, 65, 30, 6);
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(t, bx + 2, toolPos.y + 5);
  });

  // 3. 中央游戏入口卡片 (5大游戏并排展示)
  cfg.gameCards.forEach((g) => {
    const pos = toScreen(g.cx, g.cy);
    const cardW = 160;
    const cardH = 260;
    const bx = pos.x - (cardW / 2);
    const by = pos.y - (cardH / 2);

    // 卡片阴影
    ctx.shadowColor = 'rgba(0,0,0,0.6)';
    ctx.shadowBlur = 16;
    ctx.shadowOffsetY = 8;

    // 卡片背景与边框
    const cGrad = ctx.createLinearGradient(bx, by, bx, by + cardH);
    cGrad.addColorStop(0, '#242f44');
    cGrad.addColorStop(1, '#171e2e');
    ctx.fillStyle = cGrad;
    drawRoundRect(ctx, bx, by, cardW, cardH, 14);

    ctx.shadowColor = 'transparent';
    ctx.strokeStyle = g.color;
    ctx.lineWidth = 2;
    ctx.stroke();

    // 游戏彩色徽记
    ctx.fillStyle = g.color;
    ctx.beginPath();
    ctx.arc(pos.x, by + 65, 42, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = '40px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(g.icon, pos.x, by + 80);

    // 游戏标题
    ctx.font = 'bold 18px sans-serif';
    ctx.fillStyle = '#f8fafc';
    ctx.fillText(g.name, pos.x, by + 145);

    // 游戏副标题玩法介绍
    ctx.font = '11px sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText(g.sub, pos.x, by + 172);

    // 开始游戏按钮
    ctx.fillStyle = `linear-gradient(to right, ${g.color}, #f59e0b)`;
    ctx.fillStyle = g.color;
    drawRoundRect(ctx, pos.x - 55, by + 205, 110, 34, 17);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 13px sans-serif';
    ctx.fillText('快速开始', pos.x, by + 227);
  });

  // 4. 底部导航菜单栏
  cfg.bottomMenus.forEach((m) => {
    const pos = toScreen(m.cx, m.cy);
    ctx.fillStyle = 'rgba(255,255,255,0.06)';
    drawRoundRect(ctx, pos.x - 45, pos.y - 20, 90, 42, 8);
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '13px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${m.icon} ${m.name}`, pos.x, pos.y + 6);
  });
}

// 绘制牌桌中心徽标与信息
function drawTableBrand(cfg) {
  const p = toScreen(0, 40);
  ctx.save();
  ctx.textAlign = 'center';
  ctx.font = 'bold 22px serif';
  ctx.fillStyle = 'rgba(255, 215, 0, 0.25)';
  ctx.fillText('普 洱 棋 牌', p.x, p.y - 15);

  ctx.font = '12px sans-serif';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
  ctx.fillText(`${cfg.title} · 初级休闲场 · 底分: 100`, p.x, p.y + 12);
  ctx.restore();
}

// 绘制系统顶栏 (Menu, Battery, Time)
function drawSystemBar(cfg) {
  // 左上角退出/菜单按钮 (对应 Cocos menu 节点 [-550, 300])
  const menuP = toScreen(-550, 300);
  ctx.fillStyle = 'rgba(0,0,0,0.45)';
  drawRoundRect(ctx, menuP.x - 22, menuP.y - 18, 44, 36, 8);
  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.fillStyle = '#f8fafc';
  ctx.font = '18px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('☰', menuP.x, menuP.y + 6);

  // 左上角时间节点 (对应 Cocos timeNode [-430, 316])
  const timeP = toScreen(-430, 316);
  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  ctx.font = '12px sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.textAlign = 'left';
  ctx.fillText(`🕒 ${timeStr}  📶 100% 🔋`, timeP.x, timeP.y + 4);
}

// 绘制席位组件
function drawSeat(seat, idx, cfg) {
  const p = toScreen(seat.cx, seat.cy);

  // 1. 头像圆形背景与金色外圈
  ctx.save();
  ctx.fillStyle = '#1e293b';
  ctx.beginPath();
  ctx.arc(p.x, p.y, 30, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = seat.role === 'lord' ? '#ef4444' : (seat.role === 'banker' ? '#f59e0b' : '#38bdf8');
  ctx.lineWidth = 3;
  ctx.stroke();

  // 角色/身份标识 (地主、庄家图标)
  if (seat.role === 'lord') {
    ctx.fillStyle = '#dc2626';
    ctx.beginPath();
    ctx.arc(p.x + 22, p.y - 20, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 10px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('主', p.x + 22, p.y - 16);
  } else if (seat.role === 'banker') {
    ctx.fillStyle = '#d97706';
    ctx.beginPath();
    ctx.arc(p.x + 22, p.y - 20, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 10px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('庄', p.x + 22, p.y - 16);
  }

  // 头像简易 Emoji 标识
  ctx.font = '26px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(seat.isSelf ? '🤠' : (idx % 2 === 0 ? '🧑' : '👩'), p.x, p.y + 9);

  // 2. 玩家昵称与银币信息框
  const infoX = p.x;
  const infoY = p.y + 42;
  ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
  drawRoundRect(ctx, infoX - 45, infoY - 8, 90, 32, 6);

  ctx.font = '11px sans-serif';
  ctx.fillStyle = '#e2e8f0';
  ctx.fillText(seat.name, infoX, infoY + 5);

  ctx.font = '10px sans-serif';
  ctx.fillStyle = '#f59e0b';
  ctx.fillText(`🪙 ${seat.coins}`, infoX, infoY + 19);

  // 3. 倒计时时钟 (仅为第0号自己绘制计时圈)
  if (seat.isSelf) {
    ctx.strokeStyle = '#22c55e';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 35, -Math.PI / 2, Math.PI);
    ctx.stroke();
  }

  ctx.restore();
}

// 绘制斗地主特定组件 (底牌、手牌、出牌区)
function drawDDZSpecifics(cfg) {
  // 1. 顶部地主三张底牌
  const bp = toScreen(cfg.bottomCardsPos.cx, cfg.bottomCardsPos.cy);
  ctx.save();
  ctx.fillStyle = 'rgba(0,0,0,0.5)';
  drawRoundRect(ctx, bp.x - 70, bp.y - 30, 140, 60, 6);
  ctx.strokeStyle = '#e5a73b';
  ctx.lineWidth = 1;
  ctx.stroke();

  // 底牌牌面
  [0, 1, 2].forEach(i => {
    drawSingleCard(bp.x - 45 + (i * 35), bp.y - 20, 30, 42, { rank: '?', suit: '🂠', color: '#f59e0b' }, false);
  });
  ctx.fillStyle = '#e5a73b';
  ctx.font = '10px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('地主底牌 (倍数 ×2)', bp.x, bp.y + 24);
  ctx.restore();

  // 2. 上次出牌区 (对应 Cocos outPutCardPos: 0, -35)
  const outP = toScreen(0, -20);
  ctx.save();
  ctx.textAlign = 'center';
  ctx.font = '12px sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  ctx.fillText('出牌展示区', outP.x, outP.y - 35);
  // 演示出牌三张对子/顺子
  [
    { rank: '7', suit: '♠', color: '#000' },
    { rank: '8', suit: '♥', color: '#dc2626' },
    { rank: '9', suit: '♣', color: '#000' },
    { rank: '10', suit: '♦', color: '#dc2626' },
    { rank: 'J', suit: '♠', color: '#000' }
  ].forEach((card, i) => {
    drawSingleCard(outP.x - 80 + (i * 32), outP.y - 25, 40, 56, card, false);
  });
  ctx.restore();

  // 3. 底部手牌区 (对应 Cocos handCardNode [0, -200])
  const hp = toScreen(cfg.handCardPos.cx, cfg.handCardPos.cy);
  const cardW = 68;
  const cardH = 96;
  const cardSpacing = 32;
  const totalCards = DEMO_CARDS.DDZ.length;
  const startX = hp.x - ((totalCards * cardSpacing) / 2);

  DEMO_CARDS.DDZ.forEach((card, idx) => {
    const isSelected = selectedCardIndices.has(idx);
    const cardY = hp.y + (isSelected ? -45 : 0); // 弹起偏移 45px (GJPopupOffset)
    const cardX = startX + (idx * cardSpacing);
    drawSingleCard(cardX, cardY, cardW, cardH, card, isSelected);
  });
}

// 绘制单张扑克牌
function drawSingleCard(x, y, w, h, card, isSelected) {
  ctx.save();
  // 牌背/牌面阴影
  ctx.shadowColor = 'rgba(0,0,0,0.4)';
  ctx.shadowBlur = 6;
  ctx.shadowOffsetY = 3;

  // 牌面白底
  ctx.fillStyle = '#ffffff';
  drawRoundRect(ctx, x, y, w, h, 6);

  ctx.shadowColor = 'transparent';
  ctx.strokeStyle = isSelected ? '#3b82f6' : '#cbd5e1';
  ctx.lineWidth = isSelected ? 2.5 : 1;
  ctx.stroke();

  // 牌面文字
  ctx.fillStyle = card.color;
  ctx.textAlign = 'left';
  ctx.font = `bold ${Math.round(h * 0.22)}px sans-serif`;
  ctx.fillText(card.rank, x + 5, y + Math.round(h * 0.26));

  ctx.font = `${Math.round(h * 0.2)}px sans-serif`;
  ctx.fillText(card.suit, x + 5, y + Math.round(h * 0.48));

  // 中心大花色
  ctx.textAlign = 'center';
  ctx.font = `${Math.round(h * 0.4)}px sans-serif`;
  ctx.fillText(card.suit, x + (w / 2), y + (h / 2) + Math.round(h * 0.15));

  ctx.restore();
}

// 绘制普洱麻将特定组件 (4人手牌、排池、罗盘)
function drawMJSpecifics(cfg) {
  const cx = currentWidth / 2;
  const cy = currentHeight / 2;

  // 1. 中央风向罗盘 (东南西北 + 掷骰区域)
  ctx.save();
  ctx.fillStyle = '#113324';
  drawRoundRect(ctx, cx - 60, cy - 60, 120, 120, 10);
  ctx.strokeStyle = '#e5a73b';
  ctx.lineWidth = 2;
  ctx.stroke();

  // 东南西北指针
  ctx.font = 'bold 14px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillStyle = '#22c55e'; // 南 (亮起)
  ctx.fillText('南', cx, cy + 46);
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  ctx.fillText('北', cx, cy - 34);
  ctx.fillText('东', cx - 40, cy + 5);
  ctx.fillText('西', cx + 40, cy + 5);

  // 中央骰子
  ctx.fillStyle = '#dc2626';
  ctx.font = '22px sans-serif';
  ctx.fillText('⚂ ⚄', cx, cy + 7);
  ctx.restore();

  // 2. 底部手牌 (13张立牌 + 1张摸牌)
  const hp = toScreen(cfg.handTilePos.cx, cfg.handTilePos.cy);
  const tileW = 42;
  const tileH = 62;
  const startX = hp.x - ((DEMO_CARDS.MJ.length * tileW) / 2);

  DEMO_CARDS.MJ.forEach((tileName, idx) => {
    const isNewDraw = idx === DEMO_CARDS.MJ.length - 1;
    const tx = startX + (idx * tileW) + (isNewDraw ? 16 : 0);
    drawSingleMahjongTile(tx, hp.y, tileW, tileH, tileName, isNewDraw);
  });
}

// 绘制单张麻将牌
function drawSingleMahjongTile(x, y, w, h, name, isNewDraw) {
  ctx.save();
  // 麻将骨牌厚度背面 (黄色/绿色背纹)
  ctx.fillStyle = '#059669';
  drawRoundRect(ctx, x, y, w, h, 6);

  // 麻将牌面白肉
  ctx.fillStyle = '#f8fafc';
  drawRoundRect(ctx, x + 2, y + 2, w - 4, h - 8, 4);

  // 牌面文字
  ctx.fillStyle = name.includes('条') ? '#15803d' : (name.includes('万') ? '#b91c1c' : '#1d4ed8');
  ctx.font = 'bold 12px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(name.slice(0, 2), x + (w / 2), y + 24);
  if (name.length > 2) {
    ctx.fillText(name.slice(2), x + (w / 2), y + 42);
  }

  if (isNewDraw) {
    ctx.fillStyle = '#f59e0b';
    ctx.font = '9px sans-serif';
    ctx.fillText('摸牌', x + (w / 2), y + h + 12);
  }
  ctx.restore();
}

// 绘制捞腌菜特定组件 (筹码下注池、散户买马)
function drawLYCSpecifics(cfg) {
  const bp = toScreen(cfg.betZonePos.cx, cfg.betZonePos.cy);
  ctx.save();
  ctx.fillStyle = 'rgba(0,0,0,0.35)';
  drawRoundRect(ctx, bp.x - 180, bp.y - 70, 360, 140, 12);
  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 14px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('捞腌菜 · 庄闲筹码下注池', bp.x, bp.y - 45);

  // 绘制散户买马区
  [-100, 0, 100].forEach((ox, i) => {
    ctx.fillStyle = 'rgba(56, 189, 248, 0.15)';
    drawRoundRect(ctx, bp.x + ox - 40, bp.y - 25, 80, 80, 8);
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
    ctx.stroke();

    ctx.fillStyle = '#f8fafc';
    ctx.font = '12px sans-serif';
    ctx.fillText(`买马门 ${i + 1}`, bp.x + ox, bp.y - 5);
    ctx.fillStyle = '#facc15';
    ctx.font = '11px sans-serif';
    ctx.fillText('🪙 5,000', bp.x + ox, bp.y + 20);
    ctx.font = '16px sans-serif';
    ctx.fillText('🟡', bp.x + ox, bp.y + 42);
  });
  ctx.restore();

  // 底部手牌 (4张腌菜牌)
  const hp = toScreen(cfg.handCardPos.cx, cfg.handCardPos.cy);
  [
    { rank: '8', suit: '♥', color: '#dc2626' },
    { rank: '8', suit: '♦', color: '#dc2626' },
    { rank: '9', suit: '♠', color: '#000' },
    { rank: '9', suit: '♣', color: '#000' }
  ].forEach((card, i) => {
    drawSingleCard(hp.x - 90 + (i * 48), hp.y, 60, 84, card, false);
  });
}

// 绘制干瞪眼特定组件 (摸牌堆、顺子接龙)
function drawGDYSpecifics(cfg) {
  const dp = toScreen(cfg.drawDeckPos.cx, cfg.drawDeckPos.cy);
  ctx.save();
  // 摸牌堆牌背
  ctx.fillStyle = '#1e3a8a';
  drawRoundRect(ctx, dp.x - 30, dp.y - 40, 60, 80, 6);
  ctx.strokeStyle = '#60a5fa';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = 'bold 12px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('摸牌堆', dp.x, dp.y - 5);
  ctx.font = '11px sans-serif';
  ctx.fillText('剩 32 张', dp.x, dp.y + 16);

  // 桌面待接顺子 (干瞪眼特色：只能接大1点！)
  const op = toScreen(cfg.outCardPos.cx, cfg.outCardPos.cy);
  ctx.fillStyle = 'rgba(0,0,0,0.4)';
  drawRoundRect(ctx, op.x - 100, op.y - 45, 200, 90, 8);
  ctx.fillStyle = '#facc15';
  ctx.font = '11px sans-serif';
  ctx.fillText('当前牌面 (需打出+1单牌或炸弹压制)', op.x, op.y - 25);
  drawSingleCard(op.x - 25, op.y - 15, 50, 70, { rank: '8', suit: '♥', color: '#dc2626' }, false);
  ctx.restore();

  // 底部手牌 (5张初始手牌)
  const hp = toScreen(cfg.handCardPos.cx, cfg.handCardPos.cy);
  [
    { rank: '9', suit: '♠', color: '#000' }, // 可接！
    { rank: 'J', suit: '♦', color: '#dc2626' },
    { rank: 'K', suit: '♣', color: '#000' },
    { rank: '2', suit: '♥', color: '#dc2626' }, // 王牌
    { rank: '大王', suit: '★', color: '#dc2626' }
  ].forEach((card, i) => {
    drawSingleCard(hp.x - 120 + (i * 52), hp.y, 60, 84, card, i === 0);
  });
}

// 绘制耍红牌特定组件 (四轮比牌槽位、暴击槽)
function drawSHPSpecifics(cfg) {
  ctx.save();
  // 4轮比牌槽位
  cfg.compareSlots.forEach((slot) => {
    const p = toScreen(slot.cx, slot.cy);
    ctx.fillStyle = 'rgba(255,255,255,0.06)';
    drawRoundRect(ctx, p.x - 40, p.y - 50, 80, 100, 6);
    ctx.strokeStyle = '#a855f7';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.fillStyle = '#c084fc';
    ctx.font = 'bold 12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`第 ${slot.round} 轮`, p.x, p.y - 25);
    ctx.fillStyle = '#e9d5ff';
    ctx.font = '10px sans-serif';
    ctx.fillText('比牌槽', p.x, p.y - 5);

    drawSingleCard(p.x - 22, p.y + 5, 44, 40, { rank: '红', suit: '🎴', color: '#dc2626' }, false);
  });

  // 暴击光束演示
  const cp = toScreen(0, -30);
  ctx.fillStyle = '#f59e0b';
  ctx.font = 'bold 13px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('⚡ 暴击倍率：×4 连胜中', cp.x, cp.y);
  ctx.restore();

  // 底部手牌 (耍红牌 5张)
  const hp = toScreen(cfg.handCardPos.cx, cfg.handCardPos.cy);
  [
    { rank: '红2', suit: '🎴', color: '#dc2626' },
    { rank: '红7', suit: '🎴', color: '#dc2626' },
    { rank: '黑8', suit: '🎴', color: '#000' },
    { rank: '黑9', suit: '🎴', color: '#000' },
    { rank: '红十', suit: '🎴', color: '#dc2626' }
  ].forEach((card, i) => {
    drawSingleCard(hp.x - 120 + (i * 50), hp.y, 56, 80, card, false);
  });
}

// 绘制底部操作按钮栏
function drawOperationBar(cfg) {
  const p = toScreen(cfg.operationPos.cx, cfg.operationPos.cy);
  const btns = cfg.buttons || [];
  const btnW = 100;
  const btnH = 40;
  const gap = 16;
  const totalW = (btns.length * btnW) + ((btns.length - 1) * gap);
  const startX = p.x - (totalW / 2);

  btns.forEach((btnText, i) => {
    const bx = startX + (i * (btnW + gap));
    const isPrimary = i === btns.length - 1; // 最后一个操作按钮为主操作（出牌/胡/下注）

    ctx.save();
    // 按钮背景渐变
    const grad = ctx.createLinearGradient(bx, p.y, bx, p.y + btnH);
    if (isPrimary) {
      grad.addColorStop(0, '#f59e0b');
      grad.addColorStop(1, '#d97706');
    } else {
      grad.addColorStop(0, '#334155');
      grad.addColorStop(1, '#1e293b');
    }
    ctx.fillStyle = grad;
    drawRoundRect(ctx, bx, p.y, btnW, btnH, 8);

    ctx.strokeStyle = isPrimary ? '#fde68a' : '#64748b';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = isPrimary ? '#451a03' : '#f8fafc';
    ctx.font = 'bold 14px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(btnText, bx + (btnW / 2), p.y + 25);
    ctx.restore();
  });
}

// 绘制辅助对齐网格
function drawAlignGrid() {
  ctx.save();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.lineWidth = 1;

  for (let x = 0; x <= currentWidth; x += 50) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, currentHeight);
    ctx.stroke();
  }
  for (let y = 0; y <= currentHeight; y += 50) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(currentWidth, y);
    ctx.stroke();
  }

  // 中心十字轴线
  ctx.strokeStyle = 'rgba(239, 68, 68, 0.4)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(currentWidth / 2, 0);
  ctx.lineTo(currentWidth / 2, currentHeight);
  ctx.moveTo(0, currentHeight / 2);
  ctx.lineTo(currentWidth, currentHeight / 2);
  ctx.stroke();

  ctx.restore();
}

// 绘制节点选中高亮框
function drawNodeHighlight(node) {
  if (!node || !node.pos) return;
  const p = toScreen(node.pos[0], node.pos[1]);
  const w = (node.size && node.size[0]) ? node.size[0] : 60;
  const h = (node.size && node.size[1]) ? node.size[1] : 60;

  ctx.save();
  ctx.strokeStyle = '#e5a73b';
  ctx.lineWidth = 2;
  ctx.setLineDash([4, 4]);
  ctx.strokeRect(p.x - (w / 2), p.y - (h / 2), w, h);

  ctx.fillStyle = '#e5a73b';
  ctx.font = '11px sans-serif';
  ctx.fillText(`${node.name} (${node.pos[0]}, ${node.pos[1]})`, p.x - (w / 2), p.y - (h / 2) - 4);
  ctx.restore();
}

// 绘制圆角矩形辅助函数
function drawRoundRect(c, x, y, w, h, r) {
  c.beginPath();
  c.moveTo(x + r, y);
  c.lineTo(x + w - r, y);
  c.arcTo(x + w, y, x + w, y + r, r);
  c.lineTo(x + w, y + h - r);
  c.arcTo(x + w, y + h, x + w - r, y + h, r);
  c.lineTo(x + r, y + h);
  c.arcTo(x, y + h, x, y + h - r, r);
  c.lineTo(x, y + r);
  c.arcTo(x, y, x + r, y, r);
  c.closePath();
  c.fill();
}

// ==========================================
// 4. 加载场景元数据并更新侧边栏检视器
// ==========================================
let cachedSpecs = null;

async function loadSpecs() {
  if (window.GAME_SCENE_SPECS) {
    cachedSpecs = window.GAME_SCENE_SPECS;
    updateSidebar();
    return;
  }
  try {
    const res = await fetch('../game_scene_specs.json');
    cachedSpecs = await res.json();
    updateSidebar();
  } catch (e) {
    console.error('加载本地场景规格失败:', e);
  }
}

function updateSidebar() {
  const cfg = getLayoutConfig(currentGame, currentWidth, currentHeight);
  document.getElementById('inspectTitle').innerText = `${cfg.title} 检视器`;

  // 1. 刷新节点树
  nodeTreeList.innerHTML = '';
  if (cachedSpecs && cachedSpecs[currentGame]) {
    const spec = cachedSpecs[currentGame];
    nodeCountBadge.innerText = `${spec.nodes.length} 节点`;

    spec.nodes.forEach(node => {
      const item = document.createElement('div');
      item.className = 'node-item' + (selectedNode && selectedNode.id === node.id ? ' selected' : '');
      item.innerHTML = `
        <div class="node-name">📦 ${node.name}</div>
        <div class="node-type">[${node.pos[0]}, ${node.pos[1]}]</div>
      `;
      item.onclick = () => {
        selectedNode = node;
        statusInfo.innerText = `选中节点: ${node.name} | Cocos坐标: [${node.pos[0]}, ${node.pos[1]}] | 尺寸: ${node.size ? node.size.join('×') : '自适应'}`;
        updateSidebar();
        renderScene();
      };
      item.onmouseenter = () => {
        hoveredNode = node;
        renderScene();
      };
      item.onmouseleave = () => {
        hoveredNode = null;
        renderScene();
      };
      nodeTreeList.appendChild(item);
    });
  }

  // 2. 刷新座次坐标表
  coordsTableBody.innerHTML = '';
  if (cfg.seats) {
    cfg.seats.forEach(s => {
      const sp = toScreen(s.cx, s.cy);
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>${s.name}</strong></td>
        <td>(${s.cx}, ${s.cy})</td>
        <td>(${Math.round(sp.x)}, ${Math.round(sp.y)})</td>
        <td>${s.isSelf ? '玩家本位' : '对手席位'}</td>
      `;
      coordsTableBody.appendChild(tr);
    });
  }

  // 3. 刷新构建代码输出
  codeOutput.innerText = generateCocosBuilderCode(currentGame, cfg);
}

// 生成 Cocos Creator 3.x 搭建场景的 TypeScript 代码
function generateCocosBuilderCode(gameKey, cfg) {
  return `/**
 * Cocos Creator 3.x 场景动态搭建脚本
 * 目标游戏: ${cfg.title}
 */
import { _decorator, Component, Node, UITransform, Sprite, Label, Widget, Vec3, view } from 'cc';
const { ccclass } = _decorator;

@ccclass('GameSceneBuilder_${gameKey}')
export class GameSceneBuilder_${gameKey} extends Component {
    start() {
        this.buildScene();
    }

    buildScene() {
        const visibleSize = view.getVisibleSize();
        const notchOffset = visibleSize.width >= 1440 ? 57 : 0;
        const W2 = visibleSize.width / 2;
        const H2 = visibleSize.height / 2;

        // 1. 根节点与全屏背景适配
        const bgNode = new Node('TableBackground');
        const bgTransform = bgNode.addComponent(UITransform);
        bgTransform.setContentSize(visibleSize.width, visibleSize.height);
        const widget = bgNode.addComponent(Widget);
        widget.isAlignTop = widget.isAlignBottom = widget.isAlignLeft = widget.isAlignRight = true;
        this.node.addChild(bgNode);

        // 2. 玩家席位容器
        const seatRoot = new Node('SeatsNode');
        this.node.addChild(seatRoot);

        const seatConfigs = ${JSON.stringify(cfg.seats || [], null, 8)};

        seatConfigs.forEach((seat, idx) => {
            const userNode = new Node('Seat_' + idx);
            userNode.setPosition(new Vec3(seat.cx, seat.cy, 0));

            // 头像与信息栏组件
            const headTransform = userNode.addComponent(UITransform);
            headTransform.setContentSize(80, 80);

            const nickLabel = new Node('Nickname').addComponent(Label);
            nickLabel.string = seat.name;
            nickLabel.fontSize = 14;
            userNode.addChild(nickLabel.node);

            seatRoot.addChild(userNode);
        });

        // 3. 操作按钮面板
        const opNode = new Node('OperationPanel');
        opNode.setPosition(new Vec3(${cfg.operationPos ? cfg.operationPos.cx : 0}, ${cfg.operationPos ? cfg.operationPos.cy : 0}, 0));
        this.node.addChild(opNode);

        console.log('[SceneBuilder] ${cfg.title} UI 树构建完成！');
    }
}`;
}

// ==========================================
// 5. 事件交互处理
// ==========================================
// 点击手牌触发弹起
canvas.addEventListener('click', (e) => {
  if (currentGame !== 'DDZ') return;
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const clickX = (e.clientX - rect.left) * scaleX;
  const clickY = (e.clientY - rect.top) * scaleY;

  const cfg = getLayoutConfig(currentGame, currentWidth, currentHeight);
  const hp = toScreen(cfg.handCardPos.cx, cfg.handCardPos.cy);
  const cardW = 68;
  const cardH = 96;
  const cardSpacing = 32;
  const totalCards = DEMO_CARDS.DDZ.length;
  const startX = hp.x - ((totalCards * cardSpacing) / 2);

  // 从右往左检测碰撞（符合层叠遮挡关系）
  for (let i = totalCards - 1; i >= 0; i--) {
    const isSelected = selectedCardIndices.has(i);
    const cardX = startX + (i * cardSpacing);
    const cardY = hp.y + (isSelected ? -45 : 0);

    if (clickX >= cardX && clickX <= cardX + cardW && clickY >= cardY && clickY <= cardY + cardH) {
      if (selectedCardIndices.has(i)) {
        selectedCardIndices.delete(i);
      } else {
        selectedCardIndices.add(i);
      }
      renderScene();
      break;
    }
  }
});

// 顶部游戏切换 Tab
document.querySelectorAll('#gameTabs .tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#gameTabs .tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentGame = btn.dataset.game;
    selectedCardIndices.clear();
    selectedNode = null;
    hoveredNode = null;
    updateSidebar();
    renderScene();
  });
});

// 侧边栏 Tab 切换
document.querySelectorAll('.s-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.s-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.dataset.tab;
    document.getElementById('tabTree').style.display = target === 'tree' ? 'block' : 'none';
    document.getElementById('tabCoords').style.display = target === 'coords' ? 'block' : 'none';
    document.getElementById('tabCode').style.display = target === 'code' ? 'block' : 'none';
  });
});

// 分辨率切换 (1280x720 <=> 1440x720)
document.getElementById('btnResolution').addEventListener('click', function() {
  if (currentWidth === 1280) {
    currentWidth = 1440;
    this.innerText = '📐 恢复标屏 (1280x720)';
    this.classList.add('active');
    canvas.width = 1440;
    canvasWrapper.style.width = '1440px';
    screenBadge.innerText = '宽屏刘海适配模式: 1440 × 720 (18:9) | 边缘安全区偏移: 57px';
  } else {
    currentWidth = 1280;
    this.innerText = '📐 切换宽屏 (1440x720)';
    this.classList.remove('active');
    canvas.width = 1280;
    canvasWrapper.style.width = '1280px';
    screenBadge.innerText = '标准设计分辨率: 1280 × 720 (16:9) | 适配偏移: 0px';
  }
  updateSidebar();
  renderScene();
});

// 辅助网格切换
document.getElementById('btnGrid').addEventListener('click', function() {
  showGrid = !showGrid;
  this.classList.toggle('active', showGrid);
  renderScene();
});

// 节点高亮切换
document.getElementById('btnNodes').addEventListener('click', function() {
  showNodeHighlight = !showNodeHighlight;
  this.classList.toggle('active', showNodeHighlight);
  renderScene();
});

// 初始化启动
loadSpecs().then(() => {
  renderScene();
});
