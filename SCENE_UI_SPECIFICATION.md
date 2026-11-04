# 普洱/东方棋牌 (wxf4e8b870d6c337ac) 各游戏场景UI设计规范与搭建技术文档

> **版本**：v46 (Cocos Creator 3.x 逆向还原工程)  
> **设计基准分辨率**：`1280 × 720` (16:9 横屏)  
> **全面屏/刘海屏适配**：`width >= 1440` 时水平边缘安全内缩 `57px`  
> **配套交互预览器**：[game_scene_ui_viewer/index.html](file:///d:/gameprojects/mi/game_scene_ui_viewer/index.html)

---

## 一、 视口与响应式适配机制 (Viewport & Adaptive Resolution)

在所有子游戏的核心常数模块（如 `DDZConstant.ts`、`lycConstant.ts`、`SubConstant.ts`、`shpConstant.ts`）中，均采用了统一的屏幕动态计算方法：

```typescript
// 统一适配公式
const visibleSize = view.getVisibleSize();
const width = visibleSize.width;
const height = visibleSize.height;
const notchOffset = width >= 1440 ? 57 : 0; // 刘海/圆角保护边距
```

### 1. 坐标系转换说明
* **Cocos Creator 3.x 世界/局部坐标系**：
  * 原点 `(0, 0)` 位于 Canvas 画布正中心。
  * `+X` 轴向右，`-X` 轴向左。
  * `+Y` 轴向上，`-Y` 轴向下。
  * 屏幕左下角为 `(-width / 2, -height / 2)`，右上角为 `(width / 2, height / 2)`。
* **DOM / Canvas 2D 坐标系映射**：
  * $X_{screen} = \frac{W}{2} + X_{cocos}$
  * $Y_{screen} = \frac{H}{2} - Y_{cocos}$

---

## 二、 6 大核心场景设计架构 (Scene Architecture)

### 1. 经典斗地主场景 (`subGame_ddz` · 3人桌)
* **Prefab 资产**：`prefab/gameScenePrefab` (UUID: `41S5Z0dZtHcJh7QBL3up94`)
* **支持人数**：3 人 (0号我自己、1号下家右侧、2号上家左侧)
* **节点层级树 (Hierarchy)**：
  ```
  gameScenePrefab (Canvas, UITransform: 1280x720)
  ├── gj_bg (全屏自适应桌面, Widget alignFlags: 45)
  │   ├── img_deskbg (牌桌毛呢毡面贴图, pos: [0, 26.68, 0])
  │   │   ├── logo (普洱棋牌 Logo, pos: [0, -8.45, 0])
  │   │   ├── baseChip_bg (底分底注铭牌, pos: [0, -76.01, 0])
  │   │   │   ├── lable_deskinfo_1 (场次信息, pos: [-130, 0, 0])
  │   │   │   └── lable_deskinfo_2 (倍数信息, pos: [130, 0, 0])
  │   │   └── conGameNode (连胜连赢动画展示, pos: [0, 85.03, 0])
  │   ├── menu (左上角菜单/退出按钮, pos: [-550, 300, 0])
  │   └── timeNode (左上角时间/电量/WiFi, pos: [-430, 316, 0])
  ├── userNode (席位父容器, DDZUserPrefab 实例化)
  ├── deskCardsNode (牌桌区域父节点)
  │   ├── bottomCardsNode (地主3张底牌区, pos: [0, 260, 0])
  │   ├── lastOutCardNode (历史出牌记录区)
  │   ├── outCardNode (各玩家出牌展示区)
  │   └── handCardNode (本地玩家手牌区, pos: [0, -200, 0])
  ├── operationNode (操作按钮栏: 不出/提示/出牌/叫地主/加倍, pos: [0, -35, 0])
  ├── clockNode (倒计时闹钟节点, 默认中心 pos: [0, 85, 0])
  ├── tuoguanMask (智能托管遮罩, pos: [0, -200, 0])
  └── popupNode (弹窗与结算展示层)
  ```
* **座次与关键区域坐标表 (1280×720 设计分辨率)**：
  | 席位 / 组件 | Cocos 坐标 $(X, Y)$ | 屏幕坐标 $(X_{px}, Y_{px})$ | 说明 |
  | :--- | :--- | :--- | :--- |
  | **0号位 (自己)** | `(-580, -310)` | `(60, 670)` | 本地玩家头像与资产信息 |
  | **1号位 (下家)** | `(580 - offset, 110)` | `(1220, 250)` | 右侧对手，出牌区居左对齐 |
  | **2号位 (上家)** | `(-580 + offset, 110)`| `(60, 250)` | 左侧对手，出牌区居右对齐 |
  | **本地出牌区** | `(0, -35)` | `(640, 395)` | 自己打出牌型的居中放置槽 |
  | **地主底牌区** | `(0, 260)` | `(640, 100)` | 顶部居中 3 张高亮底牌 |
  | **手牌容器** | `(0, -200)` | `(640, 560)` | 17~20张手牌，单牌弹起 `+45px` |

---

### 2. 普洱麻将场景 (`src_subGame_mj` · 4人血战/换三张桌)
* **Prefab 资产**：`prefab/GameScenePrefab` (UUID: `39gyiRp0dJE5QlqbaY3GBr`)
* **支持人数**：4 人 (0号南门本地、1号北门对家、2号东门上家、3号西门下家)
* **节点层级树 (Hierarchy)**：
  ```
  GameScenePrefab
  ├── bg (3D/2D 混合麻将桌布贴图)
  ├── nodeDesk (牌桌台面与罗盘)
  │   ├── compassNode (风向罗盘, 东南西北指针与定庄灯)
  │   ├── diceNode (骰子旋转掷点动画节点)
  │   └── wallNode (牌墙节点, 4条牌墙砖块堆砌)
  ├── nodeUser (4席玩家头像、听牌标记、换三张标记、定缺标记 biaoji_que)
  ├── nodeHandCard (手牌系统)
  │   ├── handCard_0 (本地立牌 13+1 张, 支持触摸滑动与抬起打出)
  │   ├── handCard_1/2/3 (对手暗牌或明牌投影)
  │   └── meldCard_0..3 (各家吃、碰、杠、弯杠、暗杠展示槽)
  ├── nodeOutCard (中央弃牌海, 4向排列弃牌)
  ├── opration (麻将专属操作栏: 吃/碰/杠/胡/过, pos: [120, -110, 0])
  ├── nodeNormalAnim (胡牌雷电、自摸、刮风下雨特效)
  └── menus (左上角菜单与局数剩余牌数显示)
  ```
* **座次分布与特征**：
  * **0号位 (南/自己)**：`[-560, -290]`，正下方横置长立牌，最新抓牌向右偏移 `16px`。
  * **1号位 (北/对家)**：`[0, 280]`，顶部倒置暗牌排布。
  * **2号位 (东/上家)**：`[-560 + offset, 60]`，左侧纵向侧立暗牌。
  * **3号位 (西/下家)**：`[560 - offset, 60]`，右侧纵向侧立暗牌。
  * **定缺与换三张**：拥有独立的浮空提示与高亮蒙版。

---

### 3. 捞腌菜场景 (`subGame_lyc` · 7人庄闲桌)
* **Prefab 资产**：`prefab/gameScenePrefab` (UUID: `3b35hDaaFAA6ubSku0wYXA`)
* **支持人数**：最多 7 人 (0号自己，1~2号右侧，3号顶部庄家，4号顶部左侧，5~6号左侧)
* **节点层级树 (Hierarchy)**：
  ```
  gameScenePrefab
  ├── deskBg (大椭圆下注桌)
  ├── betZone (中央筹码池与散户买马门)
  │   ├── chipStackNode (总筹码堆叠动效)
  │   └── maBaoList (买马位 1~3 门槽位)
  ├── userNode (7位玩家环形分布)
  ├── handCardNode (本地 4 张腌菜牌, 牌点与腌菜牌型计算)
  ├── operPanelPrefab (下注操作栏: 100/500/1000/买马/走水/看牌/弃牌)
  ├── comparePrefab (开牌比点动画, 庄家对闲家逐一开牌结算)
  └── lordBrokeNode (爆庄与庄家连庄动效)
  ```
* **7 席位环形精密坐标表**：
  ```javascript
  playerHeadPos: {
    0: v3(-W/2 + 60, -H/2 + 50, 0),        // 自己 (左下)
    1: v3( W/2 - 60 - offset, -108, 0),    // 闲家1 (右下)
    2: v3( W/2 - 60 - offset,   68, 0),    // 闲家2 (右上)
    3: v3( 220,  H/2 - 60, 0),             // 庄家 (顶右)
    4: v3(-220,  H/2 - 60, 0),             // 闲家3 (顶左)
    5: v3(-W/2 + 60 + offset,   68, 0),    // 闲家4 (左上)
    6: v3(-W/2 + 60 + offset, -108, 0)     // 闲家5 (左下)
  }
  ```

---

### 4. 疯狂干瞪眼场景 (`subGame_gdy` · 5人接龙桌)
* **Prefab 资产**：`prefab/gameScenePrefab` (UUID: `293tONE2BKgZB70FbbEVnC`)
* **支持人数**：最多 5 人
* **特色机制布局**：
  * **摸牌堆 (`drawDeckPos: [0, 110]`)**：牌局未摸完的公用牌库位于中心上方，每轮轮空未出牌玩家必须在此摸牌。
  * **接龙出牌区 (`outCardPos: [0, -18]`)**：干瞪眼规则只能打出比上家“大1点”的点数，出牌展示区紧贴中央。
  * **操作面板 (`operationPos: [0, -205]`)**：包含【不出】、【出牌】、【摸牌】。

---

### 5. 滇西耍红牌场景 (`subGame_shp` · 5人4轮比牌桌)
* **Prefab 资产**：`prefab/gameScenePrefab` (UUID: `7cF1Ti7OdBIrqTJSZHCg4x`)
* **支持人数**：5 人
* **特色机制布局**：
  * **四轮比牌槽位 (`compareSlots`)**：横向分布于桌中 `[-150, 50]`、`[-50, 50]`、`[50, 50]`、`[150, 50]`。
  * **暴击光束槽 (`ShpCritBeamEffect`)**：连胜暴击时发射金色激光光束穿透屏幕。
  * **弃牌堆 (`discardPileVisual`)**：已弃牌以层叠折角（`-35°`、`35°`、`0°`）飞向弃牌槽。

---

### 6. 游戏大厅场景 (`src_hall` · 统一入口)
* **Prefab 资产**：`prefab/hall/hallPrefab` (UUID: `ecMOPdPI5JloF2w6vr7SgA`)
* **节点层级树 (Hierarchy)**：
  ```
  hallPrefab
  ├── userInfo (左上角玩家卡片: 头像、昵称、银币、房卡、VIP等级、段位图标)
  ├── toolBar (右上角工具区: 公告、活动、邮件、玩法规则、设置)
  ├── viewNode (中央游戏列表, 采用水平 256px 间距排列)
  │   ├── game_mj (普洱麻将入口)
  │   ├── game_ddz (经典斗地主入口)
  │   ├── game_lyc (特色捞腌菜入口)
  │   ├── game_gdy (疯狂干瞪眼入口)
  │   ├── game_shp (滇西耍红牌入口)
  │   ├── match (竞技比赛场入口)
  │   └── private (好友房创建/加入入口)
  └── menus / bottomNode (底部功能导航: 兑换商城、背包系统、段位排行榜、亲友圈俱乐部)
  ```

---

## 三、 手牌触摸交互与动效规格 (Touch & Animations)

1. **手牌抬起高度 (`GJPopupOffset`)**：
   * 所有扑克类游戏的手牌在点击或滑动选中时，垂直提升高度统一为 **`45px`**。
   * 取消选中时平滑回落至基线。
2. **多选滑牌逻辑 (`CardTouchMove`)**：
   * 监听 `TOUCH_START`、`TOUCH_MOVE`、`TOUCH_END` 事件。
   * 取触点与每张手牌的 `UITransform.getBoundingBox()` 碰撞检测，在划过的手牌矩形集合上自动翻转选中态。
3. **出牌后座次动画**：
   * 手牌缩放至 `0.75` 并通过缓动函数 `tween()` 平滑移动至各座次的 `outPutCardPos`。
   * 音效与聊天表情挂载在各座次头像边缘。

---

## 四、 本地运行与查看可视化搭建器

我们在项目中构建了完整的交互式 HTML5 场景构建工具，无需安装任何额外依赖，双击或在浏览器中打开即可实时查看、缩放、切换所有 6 大场景：

* **可视化入口**：[game_scene_ui_viewer/index.html](file:///d:/gameprojects/mi/game_scene_ui_viewer/index.html)
* **核心交互功能**：
  1. 切换 6 大游戏场景，查看不同牌桌设计、席位分布与组件放置。
  2. 点击手牌体验原生 `45px` 弹起动效。
  3. 切换标准分辨率 `1280x720` 与宽屏适配 `1440x720`（查看 `57px` 安全区位移动画）。
  4. 开启对齐参考网格，精确校对像素点。
  5. 侧边栏实时查看 Cocos Creator 3.x 提取的节点树，点击高亮对应组件位置。
  6. 实时导出可直接用于 Cocos Creator 3.x 项目的 TypeScript 构建代码。
