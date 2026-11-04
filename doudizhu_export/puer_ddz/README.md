# 普洱/东方棋牌内置斗地主全量逆向与协议工程文档

> 目标平台: 微信小游戏 (WeChat Mini-Game)  
> 宿主程序: `WeChatAppEx.exe` (WMPF 独立进程)  
> 小程序 AppID: `wxf4e8b870d6c337ac` (版本号: `46`)  
> 子游戏标识: `subGame_ddz` (`_subpackages_subGame_ddz_.wxapkg`)  
> 运行引擎: Cocos Creator 3.x (SystemJS 95 个虚拟模块)

---

## 1. 架构总览与 Mermaid 业务流图

斗地主游戏流转遵循标准的经典斗地主与加倍规则，由客户端主状态机与服务端双向事件驱动：

```mermaid
sequenceDiagram
    autonumber
    participant Client as 客户端 (Cocos/JS)
    participant Server as 游戏服务端 (WebSocket)
    
    Note over Client,Server: 1. 进桌与发牌
    Client->>Server: 进桌验证 (Token, RoomID)
    Server-->>Client: SERVER_COMMAND_LOGIN_ROOM_SUCCESS (4103)
    Server-->>Client: SERVER_BROADCAST_GAME_START (24578) 开局广播
    Server-->>Client: SERVER_BROADCAST_DEAL_CARD_INFO (24603) 发牌广播 (下发 17 张手牌字节)
    
    Note over Client,Server: 2. 叫分 / 叫抢地主阶段
    loop 叫分与抢地主
        Server-->>Client: 广播当前行动玩家 nextUserId 与倒计时
        alt 叫分模式 (1/2/3分)
            Client->>Server: CLIENT_REQUEST_SCORE (8194) 发送叫分分值
            Server-->>Client: SERVER_BROADCAST_SCORE (24579) 广播叫分
        else 抢地主模式
            Client->>Server: CLIENT_REQUEST_LANDLORD (8199) 发送是否抢地主
            Server-->>Client: SERVER_BROADCAST_LANDLORD (24585) 广播抢地主结果
        end
    end

    Note over Client,Server: 3. 底牌亮牌与加倍阶段
    Server-->>Client: SERVER_BROADCAST_LANDLORD_CARDS (24679) 广播地主归属及 3 张底牌
    Server-->>Client: SERVER_NOTIFY_MULTIPLE (24674) 通知进入加倍阶段
    Client->>Server: CLIENT_REQUEST_ROOM_MULTIPLE (24673) 请求加倍/超级加倍
    Server-->>Client: SERVER_BROADCAST_MULTIPLE (24675) 广播加倍倍数

    Note over Client,Server: 4. 出牌轮次与管牌
    loop 出牌轮换
        Server-->>Client: SERVER_BROADCAST_PLAY_CARD_START (24580) 轮到出牌
        alt 玩家打出合法牌型
            Client->>Server: CLIENT_COMMAND_PLAY_REQUEST (8195) 提交出牌张数与字节序列
            Server-->>Client: SERVER_BROADCAST_PLAY_CARD_RESULT (24581) 广播打出的牌与牌型 ID
        else 玩家不出
            Client->>Server: CLIENT_REQUEST_PASS (8196) 请求过牌
            Server-->>Client: SERVER_BROADCAST_USER_PASS (24582) 广播过牌
        end
    end

    Note over Client,Server: 5. 局结算
    Server-->>Client: SERVER_BROADCAST_GAME_OVER (24584) 结算炸弹数、火箭、春天及三家金币变动
```

---

## 2. 目录结构与产物清单

```text
d:/gameprojects/mi/doudizhu_export/puer_ddz/
├── raw_wxapkg/                         # 原始微信客户端加密包 (_subpackages_subGame_ddz_.wxapkg)
├── decrypted_wxapkg/                   # 0xBE 标准格式解密包 (461,760 字节)
├── unpacked/                           # 解包后的 subpackages/subGame_ddz/ 资源与脚本
├── src/                                # 95 个解绑且规范格式化的核心 TS/JS 源码模块
│   ├── DDZController.js                # 游戏主状态机 (发牌、叫地主、加倍、出牌轮转、结算)
│   ├── DDZCmd.js                       # 客户端/服务端全量网络命令 ID 定义与路由绑定
│   ├── GJPB.js                         # 二进制 WebSocket 报文协议编解码器
│   ├── Card2.js                        # 卡牌字节属性换算 (花色/点数/特殊牌)
│   ├── CardConfig.js                   # 18 种标准与连炸牌型配置与大小排序表
│   ├── PokerHelper.js                  # 智能出牌提示、手牌管理与比牌算法
│   ├── ddzOperationPrefabCtr.js        # 叫分/抢地主/加倍/出牌/不出等操作按钮控制
│   ├── ddzDeskCardsCtr.js              # 牌桌三方出牌区动画与手牌对齐排布
│   ├── ddzHanderCardsCtr.js            # 玩家自己手牌触摸选牌、弹起与滑选控制
│   ├── ddzGameOverPrefabCtr.js         # 胜负结算面板、加倍明细与春天/反春判定
│   └── ...                             # 记牌器、时钟、表情、快捷语音等界面组件
├── assets_named/                       # 1,162 个由 Cocos UUID 规范还原的原生多媒体资源
│   ├── audio/                          # 完整音效库
│   │   ├── card/                       # 男/女声报牌音效、出牌声、过牌声 (Audio_Event_Pass)
│   │   ├── effect/                     # 炸弹轰炸声、飞机轰鸣声、火箭发射声、金币掉落声
│   │   ├── chatxiaobo/                 # 普洱本地男声特色方言语音包 (9 条)
│   │   └── chatxiaoya/                 # 普洱本地女声特色方言语音包 (9 条)
│   ├── image/                          # 牌桌背景 (bg.png)、头像框、结算奖牌、加倍标志
│   └── spineAni/                       # 炸弹 (zhadan)、飞机 (feiji)、春天动画 Spine 骨骼贴图
├── remote_assets/                      # 远程动态下载的未解混淆原始缓存包
├── ddz_card_dict.js                    # Node.js 牌面解析与转换工具
├── ddz_rule_evaluator.js               # 独立实现的牌型识别与比牌规则引擎
└── restore_ddz_assets.js               # Cocos UUID 反混淆资产还原脚本
```

---

## 3. 卡牌字节编码与花色换算 (`Card2.ts`)

#### 编码公式
- **花色**: `suit = Math.floor(byte / 16)`
  - `0`: 方块 (♦) `0x01` ~ `0x0D`
  - `1`: 梅花 (♣) `0x11` ~ `0x1D`
  - `2`: 红桃 (♥) `0x21` ~ `0x2D`
  - `3`: 黑桃 (♠) `0x31` ~ `0x3D`
  - `4`: 特殊牌 / 大小王 (`0x4E / 78` 小王, `0x4F / 79` 大王, `64` 日历牌, `65` 听用牌)
- **点数权重 (`value`)**:
  - `3` ~ `10`: 值为 3 ~ 10
  - `J`: 11, `Q`: 12, `K`: 13
  - `A`: 14 (`byte % 16 == 1` 时加 13)
  - `2`: 15 (`byte % 16 == 2` 时加 13)
  - `小王`: 16, `大王`: 17

---

## 4. 全量网络指令路由表 (`DDZCmd.ts` / `GJPB.ts`)

| 命令常量 | Cmd ID | 方向 | 数据体序列化规范与说明 |
| :--- | :---: | :---: | :--- |
| `CLIENT_REQUEST_SCORE` | 8194 | C -> S | `writeShort(action)`: 叫分 (0:不叫, 1:1分, 2:2分, 3:3分) |
| `CLIENT_REQUEST_LANDLORD` | 8199 | C -> S | `writeShort(action)`: 抢地主 (0:不抢, 1:抢) |
| `CLIENT_COMMAND_PLAY_REQUEST` | 8195 | C -> S | `writeByte(count)` + `writeByte[](cards)`: 出牌字节序列 |
| `CLIENT_REQUEST_PASS` | 8196 | C -> S | 过牌 (不出) |
| `CLIENT_REQUEST_AI` | 8198 | C -> S | `writeInt(ai)`: 托管请求 (1:开启托管, 0:取消托管) |
| `CLIENT_REQUEST_ROOM_MULTIPLE`| 24673 | C -> S | `writeShort(multiple)`: 加倍请求 (1:不加倍, 2:加倍, 4:超级加倍) |
| `CLIENT_COMMON_USE_PROP` | 8486 | C -> S | `writeInt(propType)`: 使用记牌器道具 |
| `SERVER_BROADCAST_GAME_START` | 24578 | S -> C | 开局广播 (出牌倒计时 `outCardTimeout`、初始倍数) |
| `SERVER_BROADCAST_DEAL_CARD_INFO` | 24603 | S -> C | `readShort(count)` + `readByte[](cards)`: 初始手牌下发 (17张) |
| `SERVER_BROADCAST_SCORE` | 24579 | S -> C | 广播玩家叫分结果与 `nextUserId` |
| `SERVER_BROADCAST_LANDLORD` | 24585 | S -> C | 广播地主归属玩家与最终抢地主倍数 |
| `SERVER_BROADCAST_LANDLORD_CARDS` | 24679 | S -> C | `readInt(landLordUserId)` + `readByte[3]`: 地主3张底牌亮牌 |
| `SERVER_NOTIFY_MULTIPLE` | 24674 | S -> C | 服务端通知加倍阶段开启与超时时间 |
| `SERVER_BROADCAST_MULTIPLE` | 24675 | S -> C | 广播玩家加倍状态 (1:不加倍, 2:加倍) |
| `SERVER_BROADCAST_PLAY_CARD_START` | 24580 | S -> C | 出牌轮次开启，含首出倒计时与底牌牌型加倍 |
| `SERVER_BROADCAST_PLAY_CARD_RESULT` | 24581 | S -> C | 广播玩家出牌结果、牌型 ID 与打出的牌 |
| `SERVER_BROADCAST_USER_PASS` | 24582 | S -> C | 广播玩家不出 |
| `SERVER_BROADCAST_RECONNECTED_CARDS` | 16397 | S -> C | 断线重连手牌与记牌器数据 (包含 3 到大王各点数的剩余统计) |
| `SERVER_BROADCAST_GAME_OVER` | 24584 | S -> C | 结算广播 (炸弹数、火箭数、春天、三家手牌余牌及输赢金币) |

---

## 5. 牌型识别与压制规则 (`ddz_rule_evaluator.js`)

可在 Node.js 中直接引入 [ddz_rule_evaluator.js](file:///d:/gameprojects/mi/doudizhu_export/puer_ddz/ddz_rule_evaluator.js) 测试牌型判定：

```javascript
const { evaluatePlay, comparePlays } = require('./ddz_rule_evaluator.js');

// 示例 1: 炸弹压制顺子
const prevPlay = evaluatePlay([3, 4, 5, 6, 7]); // 顺子 3-7
const currPlay = evaluatePlay([3, 19, 35, 51]); // 炸弹 3333
console.log('是否可压制:', comparePlays(currPlay, prevPlay)); // true

// 示例 2: 飞机带翅膀
const planePlay = evaluatePlay([3, 19, 35, 4, 20, 36, 7, 8]); // 333444 + 7 + 8
console.log('牌型类型:', planePlay.typeName, '主牌值:', planePlay.mainValue);
```

---

## 6. 核心模块与实用工具快速入口

- **主控制器**: [`DDZController.js`](file:///d:/gameprojects/mi/doudizhu_export/puer_ddz/src/DDZController.js)
- **协议命令表**: [`DDZCmd.js`](file:///d:/gameprojects/mi/doudizhu_export/puer_ddz/src/DDZCmd.js)
- **卡牌字典工具**: [`ddz_card_dict.js`](file:///d:/gameprojects/mi/doudizhu_export/puer_ddz/ddz_card_dict.js)
- **牌型规则引擎**: [`ddz_rule_evaluator.js`](file:///d:/gameprojects/mi/doudizhu_export/puer_ddz/ddz_rule_evaluator.js)
- **原生素材目录**: [assets_named](file:///d:/gameprojects/mi/doudizhu_export/puer_ddz/assets_named)
