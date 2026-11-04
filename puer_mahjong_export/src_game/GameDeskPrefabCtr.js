System.register("chunks:///_virtual/GameDeskPrefabCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./EventManager.ts", "./BaseComponent.ts", "./GameDeskDecorationPrefabCtr.ts", "./OperationMgr.ts", "./PlayerMgr.ts", "./RoomMgr.ts", "./FXJConfig.ts", "./FXJEvent.ts", "./FXJSound.ts", "./GameEvent.ts", "./GameRuleConfig.ts", "./GameViewConfig.ts", "./CardUtil.ts", "./NodeClockCtr.ts", "./NodeDiceCtr.ts", "./NodeHandCardCtr.ts", "./NodeHuCardCtr.ts", "./NodeMeldCardCtr.ts", "./NodeOutCardCtr.ts", "./NodeWallCtr.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m, C, I, A, E, v, y, S, P, T, G, O, R, N, b, D, L;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node
        }, function(e) {
            l = e.Utils
        }, function(e) {
            u = e.GCache
        }, function(e) {
            d = e.AppEvent
        }, function(e) {
            c = e.EventManager
        }, function(e) {
            h = e.BaseComponent
        }, function(e) {
            p = e.GameDeskDecorationPrefabCtr
        }, function(e) {
            f = e.OperationMgr
        }, function(e) {
            _ = e.PlayerMgr
        }, function(e) {
            g = e.RoomMgr
        }, function(e) {
            m = e.GameStatus, C = e.OPCode, I = e.TingMap
        }, function(e) {
            A = e.FXJEvent
        }, function(e) {
            E = e.FXJSound, v = e.GameSound
        }, function(e) {
            y = e.GameEvent
        }, function(e) {
            S = e.GameRuleConfig
        }, function(e) {
            P = e.GameViewConfig
        }, function(e) {
            T = e.CardUtil
        }, function(e) {
            G = e.NodeClockCtr
        }, function(e) {
            O = e.NodeDiceCtr
        }, function(e) {
            R = e.NodeHandCardCtr
        }, function(e) {
            N = e.NodeHuCardCtr
        }, function(e) {
            b = e.NodeMeldCardCtr
        }, function(e) {
            D = e.NodeOutCardCtr
        }, function(e) {
            L = e.NodeWallCtr
        }],
        execute: function() {
            var M, U, w, B, H, F, k, V, x, W, z, Z, X, J, j, Y, Q, q, K, $, ee, te, ne, ie, ae, oe, re, se, le, ue, de, ce, he, pe;
            o._RF.push({}, "6a214pRcM9AKaCghVkSG6rA", "GameDeskPrefabCtr", void 0);
            var fe = r.ccclass,
                _e = r.property,
                ge = r.menu;
            e("GameDeskPrefabCtr", (M = fe("GameDeskPrefabCtr"), U = ge("prefab/game/GameDeskPrefabCtr"), w = _e({
                tooltip: "桌子节点",
                type: p
            }), B = _e({
                tooltip: "牌墙节点",
                type: L
            }), H = _e({
                tooltip: "用户0节点",
                type: s
            }), F = _e({
                tooltip: "用户1节点",
                type: s
            }), k = _e({
                tooltip: "用户2节点",
                type: s
            }), V = _e({
                tooltip: "用户3节点",
                type: s
            }), x = _e({
                tooltip: "房间信息节点",
                type: s
            }), W = _e({
                tooltip: "剩余牌数信息节点",
                type: s
            }), z = _e({
                tooltip: "出牌节点",
                type: D
            }), Z = _e({
                tooltip: "手牌节点",
                type: R
            }), X = _e({
                tooltip: "碰杠牌节点",
                type: b
            }), J = _e({
                tooltip: "胡牌节点",
                type: N
            }), j = _e({
                tooltip: "闹钟节点",
                type: G
            }), Y = _e({
                tooltip: "色子节点",
                type: O
            }), Q = _e({
                tooltip: "Logo节点",
                type: s
            }), M(q = U(($ = t((K = function(e) {
                function t() {
                    var t;
                    return t = e.call(this) || this, i(t, "nodeDesk", $, a(t)), i(t, "nodeWall", ee, a(t)), i(t, "nodeUser0", te, a(t)), i(t, "nodeUser1", ne, a(t)), i(t, "nodeUser2", ie, a(t)), i(t, "nodeUser3", ae, a(t)), i(t, "nodeRoomInfo", oe, a(t)), i(t, "nodeRemainInfo", re, a(t)), i(t, "nodeOutCard", se, a(t)), i(t, "nodeHandCard", le, a(t)), i(t, "nodeMeldCard", ue, a(t)), i(t, "nodeHuCard", de, a(t)), i(t, "nodeClock", ce, a(t)), i(t, "nodeDice", he, a(t)), i(t, "nodeLogo", pe, a(t)), t._gangCount = 0, t.deicInfo = null, t._soundConfig = ["wan", "tong", "tiao", "feng", "jian"], t._dataOperationResultPre = null, t.gameStartAnimIsDone = !0, console.log("==============飞小鸡游戏桌子初始化========"), t.init(), t
                }
                n(t, e);
                var o = t.prototype;
                return o.init = function() {}, o.onInitModuleEvent = function() {
                    this.addModelListener(d.SYS_DESIGN_RESOLUTION_SIZE, this.onUpdateResolution), this.addModelListener(d.NOTIFY_ROOM_LOGIN, this.onGameLogin), this.addModelListener(d.VIEW_BROADCAST_GAME_START, this.onGameStart), this.addModelListener(A.GAME_START_ANI_FINISH, this.onGameStartAnimOver), this.addModelListener(y.VIEW_BROADCAST_ZHI_TOU, this.onRollDices), this.addModelListener(y.VIEW_UPDATE_XIA_ZHU_OPTIONS, this.onXiaZhu), this.addModelListener(y.VIEW_BROADCAST_DEAL_CARD, this.onDealCard), this.addModelListener(y.VIEW_BROADCAST_OPERATION_START, this.onOperationStart), this.addModelListener(y.VIEW_USER_OPERATION, this.onOperationSelect), this.addModelListener(y.SEND_PLAYER_OPERATION_PRE, this.onOperationResultPre), this.addModelListener(y.UPDATE_OPERATION_RESULT, this.onOperationResult), this.addModelListener(y.VIEW_UPDATE_BU_HUA_PAI, this.onUpdateBuHuaPai), this.addModelListener(y.VIEW_BROADCAST_GRAB_CARD, this.onTakeCard), this.addModelListener(A.BROADCAST_FEN_ZHANG, this.onFenZhang), this.addModelListener(d.VIEW_BROADCAST_GAME_OVER, this.onGameOver), this.addModelListener(d.EVENT_GAME_OVER, this.onGameFinish), this.addModelListener(y.RECEIVE_DEAL_CARD, this.onReconnect), this.addModelListener(y.VIEW_BROADCAST_CHANGE_SEAT, this.onChangeSeat), this.addModelListener(y.PRIVATE_PLAY_AGAIN, this.resetDesk), this.addModelListener(y.SHOW_PICK_CARD, this.onShowPickCard), this.addModelListener(y.HIDE_PICK_CARD, this.onHidePickCard), this.addModelListener(y.SHOW_BAO_CARD, this.onShowBaoCard), this.addModelListener(y.HIDE_BAO_CARD, this.onHideBaoCard), this.addModelListener(y.VIEW_UPDATE_CARD_TAG, this.onUpdateCardTag), this.addModelListener(A.UPDATE_PRIVATE_SETTLE_INFO, this.onUpdateCardTag), this.addModelListener(y.VIEW_BROADCAST_WAIT_HINT, this.onWaitHint), this.addModelListener(A.BROADCAST_REALTIME_HU_INFO, this.onGameRealTimeSettle), this.addModelListener(A.VIEW_BROADCAST_TO_WAIT_USER_GIVE_UP, this.onGiveUp), this.addModelListener(A.VIEW_BROADCAST_TO_WAIT_USER_GIVE_UP_RESULT, this.onGiveUpResult), this.addModelListener(y.VIEW_BROADCAST_DINGQUE_OPTIONS, this.onDingQueOptions), this.addModelListener(A.VIEW_BROADCAST_HUAN_SAN_ZHANG, this.onHuanSanZhangOptions), this.addModelListener(y.VIEW_BROADCAST_MAIDUANMEN_USER, this.viewUserMaiDuanMenOptions), this.addModelListener(y.NET_BROADCAST_DING_ZHUANG, this.onNetBroadcastDingZhuang), this.addModelListener(d.UPDATE_PRIVATE_ROOM_INFO, this.onUpdatePrivateRoomInfo)
                }, o.onLoad = function() {}, o.addGameComp = function() {
                    null == this.node && (this.node = l.create_2DNode()), this.node.addComponent("GameComponent");
                    var e = this.node.getComponent("GameComponent");
                    "function" == typeof e.setDelegate && e.setDelegate(this)
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("GameComponent");
                    if (t && "function" == typeof t[e]) {
                        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                        return t[e].apply(t, i)
                    }
                }, o.start = function() {
                    this.initData(), this.addGameComp(), this.resetView(), this.initView()
                }, o.initData = function() {}, o.initView = function() {
                    this.updateUserHeadPos()
                }, o.onUpdateResolution = function(e) {
                    this.updateUserHeadPos()
                }, o.updateUserHeadPos = function() {
                    var e = this,
                        t = this;
                    this.scheduleOnce((function() {
                        var n = [t.nodeUser0.getPosition(), t.nodeUser1.getPosition(), t.nodeUser2.getPosition(), t.nodeUser3.getPosition()];
                        n = e._checkUsersPos(n), u.GameInfo.setUserPos(n), u.GameInfo.setRoomInfoPos(e.nodeRoomInfo.getPosition()), u.GameInfo.setRemainInfoPos(e.nodeRemainInfo.getPosition()), console.log("nodeUser------2", n), c.dispatch(y.INIT_GAMEINFO_POS)
                    }), 0)
                }, o._checkUsersPos = function(e) {
                    var t = this.doGameCompFun("checkUsersPos", e);
                    return l.isNull(t) && (t = e), t
                }, o.updateView = function() {}, o.resetView = function() {
                    this._updateGameStartAnimIsDone(!0);
                    var e = T.getDirFromSeatId(g.getInstance().mySeatId);
                    this.node.setRotationFromEuler(0, -90 * e, 0), this.nodeDesk.getDesk().setRotationFromEuler(0, 90 * e, 0), this.nodeLogo.setRotationFromEuler(0, 90 * e, 0), this._gangCount = 0, this.updateUserDir()
                }, o.updateUserDir = function() {
                    this.nodeMeldCard.updateUserDir(), this.nodeHandCard.updateUserDir(), this.nodeOutCard.updateUserDir(), this.nodeHuCard.updateUserDir()
                }, o.onChangeSeat = function() {
                    this.resetView(), this.nodeWall.onChangeSeat(), this.nodeHandCard.onChangeSeat(), this.nodeOutCard.onChangeSeat(), this.nodeMeldCard.onChangeSeat(), this.nodeHuCard.onChangeSeat(), this.nodeClock.onChangeSeat()
                }, o._resetDeskView = function() {
                    this.nodeWall.resetView(), this.nodeHandCard.resetView(), this.nodeOutCard.resetView(), this.nodeMeldCard.resetView(), this.nodeHuCard.resetView(), this.nodeClock.resetView()
                }, o.resetDesk = function() {}, o.onGameLogin = function(e, t) {
                    this.resetView(), this._resetDeskView()
                }, o.onGameStart = function(e, t) {
                    this.log("GameDeskPrefabCtr.onGameStart"), this.resetView(), this.doGameCompFun("onGameStart");
                    var n = t && 1 == t.isReconn;
                    if (this.nodeWall.onGameStart(n), this.nodeHandCard.onGameStart(), this.nodeOutCard.onGameStart(), this.nodeMeldCard.onGameStart(), this.nodeHuCard.onGameStart(), this.nodeClock.onGameStart(), this.nodeDice.onGameStart(), !n) {
                        this._updateGameStartAnimIsDone(!1), this.deicInfo = null;
                        var i = {
                            seatId: g.getInstance().mySeatId,
                            aniType: P.AnimType.GameStart,
                            eventId: A.GAME_START_ANI_FINISH
                        };
                        c.dispatch(A.VIEW_OUT_CARD_ANI_PLAY, i)
                    }
                }, o._updateGameStartAnimIsDone = function(e, t) {
                    void 0 === t && (t = !1), this.gameStartAnimIsDone = e, c.dispatch(y.NOTIFY_GAMESTART_ANIM_STATUS, this.gameStartAnimIsDone, t)
                }, o.onGameStartAnimOver = function(e) {
                    if (this._updateGameStartAnimIsDone(!0, !0), this.deicInfo) return this.notifyDingZhuang(), this.onShowRollDices(this.deicInfo), void(this.deicInfo = null)
                }, o.onNetBroadcastDingZhuang = function() {
                    this.doGameCompFun("onNetBroadcastDingZhuang")
                }, o.notifyDingZhuang = function() {
                    c.dispatch(y.VIEW_BROADCAST_DING_ZHUANG)
                }, o.onShowRollDices = function(e) {
                    if (this.log("GameDeskPrefabCtr.onRollDices", e), l.isNull(e) || l.table_isEmpty(e.diceInfo)) this.log("GameDeskPrefabCtr.onRollDices", "数据异常", e);
                    else {
                        var t = e.diceInfo[0].seatId,
                            n = e.diceInfo[0].dices || [],
                            i = T.getDirFromSeatId(t);
                        i < 0 || i >= S.playerNum ? this.log("GameDeskPrefabCtr.onRollDices", "庄家座位非法", t) : (n = n.filter((function(e) {
                            return e > 0 && e < 7
                        })), l.table_isEmpty(n) ? this.log("GameDeskPrefabCtr.onRollDices", "骰子数量或数值非法", n) : (this.nodeWall.onRollDices(e), this.nodeDice.onRollDices(e)))
                    }
                }, o.onRollDices = function(e, t) {
                    this.deicInfo = t, this.gameStartAnimIsDone && (this.onShowRollDices(this.deicInfo), this.deicInfo = null)
                }, o.onXiaZhu = function(e, t) {
                    this.log("GameDeskPrefabCtr.onXiaZhu", t), l.isNull(t) ? this.log("GameDeskPrefabCtr.onXiaZhu", "没有下注数据") : this.nodeClock.onMyOptions(m.XIA_ZHU)
                }, o.onDealCard = function(e, t) {
                    this.log("GameDeskPrefabCtr.onDealCard", t), l.isNull(t) || l.table_isEmpty(t.cards) ? this.log("GameDeskPrefabCtr.onDealCard", "没有手牌数据") : (this.nodeWall.onDealCard(t), this.nodeHandCard.onDealCard(t))
                }, o.onWaitHint = function(e, t) {
                    this.nodeClock.onOperationStart({
                        bankSeatId: -1
                    }), this.nodeDice.showGaiBan()
                }, o.onOperationStart = function(e, t) {
                    this.log("GameDeskPrefabCtr.onOperationStart", t), this.nodeClock.onOperationStart(t), this.nodeDice.onOperationStart(t)
                }, o.onOperationSelect = function(e, t) {
                    this.log("GameDeskPrefabCtr.onOperationSelect", t), this.nodeDice.onOperationSelect(t), this.nodeClock.onOperationSelect(t)
                }, o.onOperationResultPre = function(e, t) {
                    this._dataOperationResultPre = t, t.opCode == C.OPE_OUT_CARD && (this.onOutCard(e, t), this.playEffect(e, t))
                }, o.onOperationResult = function(e, t) {
                    if (l.isNull(t) || l.isNull(t.seatId) || l.isNull(t.opCode)) this.log("GameDeskPrefabCtr.onOperationResult", "数据异常", t);
                    else {
                        if (c.dispatch(d.VIEW_UPDATE_GAME_OUTCARD_TIMEOUT, 0), l.isNotNull(this._dataOperationResultPre)) {
                            if (this._dataOperationResultPre.opCode == C.OPE_OUT_CARD && this._dataOperationResultPre.opCard == t.opCard && this._dataOperationResultPre.opCards.length == t.opCards.length && this._dataOperationResultPre.seatId == t.seatId) return void(this._dataOperationResultPre = null);
                            this._dataOperationResultPre.opCode == C.OPE_OUT_CARD && this.onOutCardRevert(e, this._dataOperationResultPre)
                        }
                        switch (this._dataOperationResultPre = null, t.opCode) {
                            case C.OPE_OUT_CARD:
                                this.onOutCard(e, t);
                                break;
                            case C.OPE_RIGHT_CHI:
                            case C.OPE_MIDDLE_CHI:
                            case C.OPE_LEFT_CHI:
                            case C.OPE_PENG:
                            case C.OPE_QIANG_PENG:
                            case C.OPE_LANG_QI:
                            case C.OPE_MING_LOU:
                                this.onPengGang(e, t);
                                break;
                            case C.OPE_BAO_JIAO:
                            case C.OPE_TING:
                            case C.OPE_KOU_TING:
                                this.onBaoTing(e, t);
                                break;
                            case C.OPE_AN_GANG:
                            case C.OPE_GANG:
                            case C.OPE_BU_GANG:
                            case C.OPE_HUA_GANG:
                                this.onPengGang(e, t, !0);
                                break;
                            case C.OPE_HU:
                            case C.OPE_ZI_MO:
                                this.onHu(e, t);
                                break;
                            case C.OPE_DIAO:
                                break;
                            default:
                                this.doGameCompFun("onOperationResult", t)
                        }
                        this.playEffect(e, t)
                    }
                }, o.playEffect = function(e, t) {
                    var n = "xiaobo",
                        i = _.getInstance().findPlayerWithUserId(t.userId);
                    switch (l.isNotNull(i) ? (2 == l.number_valueOf(i.gameUserInfo.sex) && (n = "xiaoya"), console.log("playEffect", t.userId, n, i.gameUserInfo.sex)) : console.log("playEffect", t.userId, n, "玩家信息丢失"), t.opCode) {
                        case C.OPE_OUT_CARD:
                            this.playTingEffect(t, n);
                            break;
                        case C.OPE_RIGHT_CHI:
                        case C.OPE_MIDDLE_CHI:
                        case C.OPE_LEFT_CHI:
                            var a = l.clone(E.GameChi);
                            a.path = l.string_format(E.GameChi.path, n), v.getInstance().playEffect(a);
                            break;
                        case C.OPE_PENG:
                        case C.OPE_QIANG_PENG:
                            var o = l.clone(E.GamePeng);
                            o.path = l.string_format(E.GamePeng.path, n), v.getInstance().playEffect(o);
                            break;
                        case C.OPE_AN_GANG:
                            var r = {
                                seatId: t.seatId,
                                aniType: P.AnimType.Gang,
                                aniName: "ag"
                            };
                            this._showGangAnim(r, n);
                            break;
                        case C.OPE_GANG:
                            var s = {
                                seatId: t.seatId,
                                aniType: P.AnimType.Gang,
                                aniName: "mg"
                            };
                            this._showGangAnim(s, n);
                            break;
                        case C.OPE_BU_GANG:
                            var u = {
                                seatId: t.seatId,
                                aniType: P.AnimType.Gang,
                                aniName: "mg"
                            };
                            this._showGangAnim(u, n);
                            break;
                        case C.OPE_HUA_GANG:
                            var d = l.clone(E.GameHuaGang);
                            d.path = l.string_format(E.GameHuaGang.path, n), v.getInstance().playEffect(d);
                            break;
                        case C.OPE_LANG_QI:
                            var c = l.clone(E.GameLangQi);
                            c.path = l.string_format(E.GameLangQi.path, n), v.getInstance().playEffect(c);
                            break;
                        case C.OPE_HU:
                            var h = l.clone(E.GameHu);
                            h.path = l.string_format(E.GameHu.path, n), v.getInstance().playEffect(h);
                            break;
                        case C.OPE_GANG_HU:
                            var p = l.clone(E.GameGangHu);
                            p.path = l.string_format(E.GameGangHu.path, n), v.getInstance().playEffect(p);
                            break;
                        case C.OPE_ZI_MO:
                            var f = l.clone(E.GameZiMo);
                            f.path = l.string_format(E.GameZiMo.path, n), v.getInstance().playEffect(f);
                            break;
                        case C.OPE_DIAO:
                            break;
                        default:
                            if (I[t.opCode]) {
                                var g = l.clone(E.GameTing);
                                g.path = l.string_format(E.GameTing.path, n), setTimeout((function() {
                                    v.getInstance().playEffect(g)
                                }), 100)
                            }
                    }
                }, o.playTingEffect = function(e, t) {
                    var n = this.doGameCompFun("playTingEffect", e);
                    if (1 == n || null == n) {
                        var i = T.getCardValueLocalTypeValue(e.opCard),
                            a = i[0],
                            o = i[1];
                        if (l.isNotNull(this._soundConfig[a])) {
                            var r = l.clone(E.GameDiscard);
                            r.path = l.string_format(E.GameDiscard.path, t, this._soundConfig[a], o), v.getInstance().playEffect(r)
                        }
                    }
                }, o._showGangAnim = function(e, t) {
                    this.doGameCompFun("checkNeedGangAnim") && c.dispatch(A.VIEW_OUT_CARD_ANI_PLAY, e);
                    var n = l.clone(E.GameGang);
                    n.path = l.string_format(E.GameGang.path, t), v.getInstance().playEffect(n)
                }, o.onUpdateBuHuaPai = function(e, t) {
                    if (l.isNull(t)) this.log("GameDeskPrefabCtr.onUpdateBuHuaPai", "没有花牌数据");
                    else {
                        v.getInstance().playEffect(E.Get);
                        var n = {
                            seatId: t.seatId,
                            gangCount: this._gangCount,
                            remian: t.remainCardNum,
                            cards: t.cards
                        };
                        this.log("GameDeskPrefabCtr.onUpdateBuHuaPai", n), this.nodeWall.onTakeCard(n), this.nodeHandCard.onTakeCardList(n), this.nodeClock.onTakeCard(n)
                    }
                }, o.onFenZhang = function(e, t) {
                    this.nodeWall.onFenZhang(t), this.nodeHandCard.onFenZhang(t)
                }, o.onTakeCard = function(e, t) {
                    if (l.isNull(t)) this.log("GameDeskPrefabCtr.onTakeCard", "没有抓牌数据");
                    else {
                        v.getInstance().playEffect(E.Get);
                        var n = {
                            seatId: t.seatId,
                            gangCount: this._gangCount,
                            remian: t.remainCardNum,
                            card: t.card
                        };
                        this.log("GameDeskPrefabCtr.onTakeCard", n), this.nodeWall.onTakeCard(n), this.nodeHandCard.onTakeCard(n), this.nodeClock.onTakeCard(n)
                    }
                }, o.onOutCard = function(e, t) {
                    this.log("GameDeskPrefabCtr.onOutCard", t), l.isNull(t) || l.isNull(t.seatId) || l.isNull(t.opCard) ? this.log("GameDeskPrefabCtr.onOutCard", "出牌数据错误") : (v.getInstance().playEffect(E.Play), this.nodeHandCard.onOutCard(t), this.nodeOutCard.onOutCard(t), this.nodeClock.onOperationResult())
                }, o.onHideHandCard = function(e) {
                    this.nodeHandCard.hideHandCard(e)
                }, o.onOutCardRevert = function(e, t) {
                    this.log("GameDeskPrefabCtr.onOutCardRevert", t), l.isNull(t) || l.isNull(t.seatId) || l.isNull(t.opCard) ? this.log("GameDeskPrefabCtr.onOutCardRevert", "出牌数据错误") : (this.nodeHandCard.onOutCardRevert(t), this.nodeOutCard.onOutCardRevert(t))
                }, o.onPengGang = function(e, t, n) {
                    void 0 === n && (n = !1), l.isNull(t) || l.isNull(t.seatId) || l.isNull(t.cardSeatId) || l.isNull(t.opCard) ? this.log("GameDeskPrefabCtr.onPengGang", "碰杠数据错误") : 0 != t.cardSeatId ? (n && this._gangCount++, this.log("GameDeskPrefabCtr.onPengGang", t), this.nodeOutCard.onPengGang(t), this.nodeHandCard.onPengGang(t), this.nodeMeldCard.onPengGang(t), this.nodeClock.onPengGang(t)) : this.log("GameDeskPrefabCtr.onPengGang", "无效座位号")
                }, o.onChannelOperationResult = function(e) {
                    this.nodeOutCard.onChannelOperationResult(e), this.nodeHandCard.onChannelOperationResult(e), this.nodeMeldCard.onChannelOperationResult(e), this.nodeClock.onChannelOperationResult(e)
                }, o.onBaoTing = function(e, t) {
                    if (this.doGameCompFun("onBaoTing", t), S.TingHide) {
                        if (l.isNull(t) || l.isNull(t.seatId) || l.isNull(t.opCard)) return void this.log("GameDeskPrefabCtr.onBaoTing", "报听数据错误");
                        this.log("GameDeskPrefabCtr.onBaoTing", t), this.nodeHandCard.onBaoTing(t), this.nodeClock.onPengGang(t)
                    }
                }, o.onHu = function(e, t) {
                    l.isNull(t) || l.isNull(t.seatId) || l.isNull(t.cardSeatId) || l.isNull(t.opCard) ? this.log("GameDeskPrefabCtr.onHu", "胡牌数据错误") : 0 != t.cardSeatId ? (this.log("GameDeskPrefabCtr.onHu", t), this.nodeMeldCard.onChannelOperationResult(t), this.nodeOutCard.onHu(t), this.nodeHandCard.onHu(t), this.nodeHuCard.onHu(t)) : this.log("GameDeskPrefabCtr.onHu", "无效座位号")
                }, o.onGameRealTimeSettle = function(e, t) {
                    this.nodeHandCard.onGameRealTimeSettle(t)
                }, o.onGameFinish = function(e) {
                    f.getInstance().reset()
                }, o.onGameOver = function(e, t) {
                    if (this.log("GameDeskPrefabCtr.onGameOver", t), l.isNull(t) || l.table_isEmpty(t.handCards)) this.log("GameDeskPrefabCtr.onGameOver", "结算数据错误");
                    else {
                        f.getInstance().reset(), this.nodeWall.onGameOver(t), this.nodeHandCard.onGameOver(t), this.nodeOutCard.onGameOver(t), this.nodeMeldCard.onGameOver(t), this.nodeHuCard.onGameOver(t), this.nodeClock.onGameOver(t);
                        var n = {
                            seatId: g.getInstance().mySeatId,
                            aniType: P.AnimType.GameOver
                        };
                        c.dispatch(A.VIEW_OUT_CARD_ANI_PLAY, n)
                    }
                }, o.onReconnect = function() {
                    var e = this;
                    this.resetView();
                    var t = {
                            bankSeatId: l.number_valueOf(g.getInstance().bankSeatId, -1),
                            dices: g.getInstance().dices,
                            remain: g.getInstance().getRemainCardsCount(),
                            gangCount: 0,
                            playerList: _.getInstance().playerList,
                            operationSeatId: f.getInstance().seatId,
                            operationTimePass: g.getInstance().timePass
                        },
                        n = T.getDirFromSeatId(t.bankSeatId);
                    n < 0 || n >= S.playerNum ? this.log("GameDeskPrefabCtr.onReconnect", "庄家座位非法", t.bankSeatId) : (this.nodeClock.onReconnect(t), this.nodeWall.onReconnect(t), l.table_isEmpty(t.playerList) ? this.log("GameDeskPrefabCtr.onReconnect", "玩家数据异常", t) : (this.log("GameDeskPrefabCtr.onReconnect", t), t.playerList.forEach((function(e, n, i) {
                        for (var a = 0; a < e.opGroups.length; a++) switch (e.opGroups[a].opCode) {
                            case C.OPE_AN_GANG:
                            case C.OPE_GANG:
                            case C.OPE_BU_GANG:
                            case C.OPE_HUA_GANG:
                                t.gangCount++
                        }
                    })), this._gangCount = t.gangCount, this.doGameCompFun("onReconnectBaoTing"), this.nodeHandCard.onReconnect(t), this.nodeOutCard.onReconnect(t), this.nodeMeldCard.onReconnect(t), this.nodeHuCard.onReconnect(t), this.nodeDice.onReconnect(), this.doGameCompFun("reconnectDesk", (function(t) {
                        e.viewUserMaiDuanMenOptions(null, t)
                    }))))
                }, o.onShowPickCard = function(e, t) {
                    this.nodeOutCard.onShowPickCard(t), this.nodeMeldCard.onShowPickCard(t)
                }, o.onHidePickCard = function() {
                    this.nodeOutCard.onHidePickCard(), this.nodeMeldCard.onHidePickCard()
                }, o.onShowBaoCard = function(e, t) {
                    this.nodeOutCard.onShowBaoCard(t), this.nodeMeldCard.onShowBaoCard(t)
                }, o.onHideBaoCard = function(e, t) {
                    this.nodeOutCard.onHideBaoCard(t), this.nodeMeldCard.onHideBaoCard()
                }, o.onUpdateCardTag = function(e) {
                    this.nodeOutCard.onUpdateCardTag(), this.nodeMeldCard.onUpdateCardTag(), this.nodeHandCard.onUpdateCardTag()
                }, o.onGiveUp = function(e, t, n) {
                    var i;
                    if ((null == t || null == (i = t.seatIdList) ? void 0 : i.length) > 0) {
                        var a = t.seatIdList[0];
                        this.nodeClock.onUserOptions(a, m.WAIT_USER_GIVE_UP, n || 30)
                    }
                }, o.onGiveUpResult = function(e, t) {
                    1 == t.isGiveUp && (t.userId == u.User.getUserMid() && this.nodeClock.onCloseClock(), this.nodeHandCard.onGiveUpResult(t))
                }, o.onDingQueOptions = function() {
                    this.nodeClock.onMyOptions(m.DING_QUE), this.nodeDice.showGaiBan()
                }, o.onHuanSanZhangOptions = function() {
                    this.nodeClock.onMyOptions(m.HUAN_SAN_ZHANG), this.nodeDice.showGaiBan()
                }, o.viewUserMaiDuanMenOptions = function(e, t) {
                    this.nodeClock.onUserOptions(t.seatId, m.MAI_DUAN_MEN), this.nodeDice.showGaiBan()
                }, o.onUpdatePrivateRoomInfo = function() {
                    u.PrivateData.isTwoPlayerModule() && (this.nodeHandCard.updateUserDir(), this.nodeOutCard.updateUserDir(!0), this.nodeMeldCard.updateUserDir(!1), this.nodeHuCard.updateUserDir(), this.nodeClock.updateViewTimerDir(), this.updateUserHeadPos())
                }, o.onDestroy = function() {}, o.log = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    console.log(t)
                }, t
            }(h)).prototype, "nodeDesk", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ee = t(K.prototype, "nodeWall", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), te = t(K.prototype, "nodeUser0", [H], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ne = t(K.prototype, "nodeUser1", [F], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ie = t(K.prototype, "nodeUser2", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ae = t(K.prototype, "nodeUser3", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), oe = t(K.prototype, "nodeRoomInfo", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), re = t(K.prototype, "nodeRemainInfo", [W], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), se = t(K.prototype, "nodeOutCard", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), le = t(K.prototype, "nodeHandCard", [Z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ue = t(K.prototype, "nodeMeldCard", [X], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), de = t(K.prototype, "nodeHuCard", [J], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ce = t(K.prototype, "nodeClock", [j], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), he = t(K.prototype, "nodeDice", [Y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), pe = t(K.prototype, "nodeLogo", [Q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), q = K)) || q) || q)), o._RF.pop()
        }
    }
}))