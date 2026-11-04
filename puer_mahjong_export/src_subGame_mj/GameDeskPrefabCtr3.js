System.register("chunks:///_virtual/GameDeskPrefabCtr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./EventManager.ts", "./BaseComponent.ts", "./GameDeskDecorationPrefabCtr.ts", "./OperationMgr3.ts", "./PlayerMgr6.ts", "./RoomMgr6.ts", "./FXJConfig3.ts", "./FXJEvent3.ts", "./FXJRes3.ts", "./FXJSound3.ts", "./GameEvent6.ts", "./GameRuleConfig4.ts", "./GameViewConfig5.ts", "./CardUtil3.ts", "./NodeClockCtr3.ts", "./NodeDiceCtr3.ts", "./NodeHandCardCtr3.ts", "./NodeHuCardCtr3.ts", "./NodeMeldCardCtr3.ts", "./NodeOutCardCtr3.ts", "./NodeWallCtr3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f, C, E, S, A, I, G, y, v, P, T, b, O, R, M, N, U, D, L, B;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, u = e.Texture2D, l = e.MeshRenderer
        }, function(e) {
            d = e.Utils
        }, function(e) {
            c = e.GCache
        }, function(e) {
            h = e.AppEvent
        }, function(e) {
            p = e.EventManager
        }, function(e) {
            m = e.BaseComponent
        }, function(e) {
            _ = e.GameDeskDecorationPrefabCtr
        }, function(e) {
            g = e.OperationMgr
        }, function(e) {
            f = e.PlayerMgr
        }, function(e) {
            C = e.RoomMgr
        }, function(e) {
            E = e.GameStatus, S = e.OPCode, A = e.TingMap
        }, function(e) {
            I = e.FXJEvent
        }, function(e) {
            G = e.FXJRes
        }, function(e) {
            y = e.FXJSound, v = e.GameSound
        }, function(e) {
            P = e.GameEvent
        }, function(e) {
            T = e.GameRuleConfig
        }, function(e) {
            b = e.GameViewConfig
        }, function(e) {
            O = e.CardUtil
        }, function(e) {
            R = e.NodeClockCtr
        }, function(e) {
            M = e.NodeDiceCtr
        }, function(e) {
            N = e.NodeHandCardCtr
        }, function(e) {
            U = e.NodeHuCardCtr
        }, function(e) {
            D = e.NodeMeldCardCtr
        }, function(e) {
            L = e.NodeOutCardCtr
        }, function(e) {
            B = e.NodeWallCtr
        }],
        execute: function() {
            var w, k, H, x, F, V, J, j, W, z, X, Z, Y, Q, q, K, $, ee, te, ne, ae, ie, oe, re, se, ue, le, de, ce, he, pe, me, _e, ge;
            o._RF.push({}, "fe9c4iT+NhBXo23TdS4NMv4", "GameDeskPrefabCtr", void 0);
            var fe = r.ccclass,
                Ce = r.property,
                Ee = r.menu;
            e("GameDeskPrefabCtr", (w = fe("GameDeskPrefabCtr"), k = Ee("prefab/subGame/mj/GameDeskPrefabCtr"), H = Ce({
                tooltip: "桌子节点",
                type: _
            }), x = Ce({
                tooltip: "牌墙节点",
                type: B
            }), F = Ce({
                tooltip: "用户0节点",
                type: s
            }), V = Ce({
                tooltip: "用户1节点",
                type: s
            }), J = Ce({
                tooltip: "用户2节点",
                type: s
            }), j = Ce({
                tooltip: "用户3节点",
                type: s
            }), W = Ce({
                tooltip: "房间信息节点",
                type: s
            }), z = Ce({
                tooltip: "剩余牌数信息节点",
                type: s
            }), X = Ce({
                tooltip: "出牌节点",
                type: L
            }), Z = Ce({
                tooltip: "手牌节点",
                type: N
            }), Y = Ce({
                tooltip: "碰杠牌节点",
                type: D
            }), Q = Ce({
                tooltip: "胡牌节点",
                type: U
            }), q = Ce({
                tooltip: "闹钟节点",
                type: R
            }), K = Ce({
                tooltip: "色子节点",
                type: M
            }), $ = Ce({
                tooltip: "Logo节点",
                type: s
            }), w(ee = k((ne = t((te = function(e) {
                function t() {
                    var t;
                    return t = e.call(this) || this, a(t, "nodeDesk", ne, i(t)), a(t, "nodeWall", ae, i(t)), a(t, "nodeUser0", ie, i(t)), a(t, "nodeUser1", oe, i(t)), a(t, "nodeUser2", re, i(t)), a(t, "nodeUser3", se, i(t)), a(t, "nodeRoomInfo", ue, i(t)), a(t, "nodeRemainInfo", le, i(t)), a(t, "nodeOutCard", de, i(t)), a(t, "nodeHandCard", ce, i(t)), a(t, "nodeMeldCard", he, i(t)), a(t, "nodeHuCard", pe, i(t)), a(t, "nodeClock", me, i(t)), a(t, "nodeDice", _e, i(t)), a(t, "nodeLogo", ge, i(t)), t._gangCount = 0, t.deicInfo = null, t._soundConfig = ["wan", "tong", "tiao", "feng", "jian"], t._dataOperationResultPre = null, t.gameStartAnimIsDone = !0, console.log("==============飞小鸡游戏桌子初始化========"), t.init(), t
                }
                n(t, e);
                var o = t.prototype;
                return o.init = function() {}, o.onInitModuleEvent = function() {
                    this.addModelListener(h.SYS_DESIGN_RESOLUTION_SIZE, this.onUpdateResolution), this.addModelListener(h.NOTIFY_ROOM_LOGIN, this.onGameLogin), this.addModelListener(P.VIEW_BROADCAST_GAME_START, this.onGameStart), this.addModelListener(I.GAME_START_ANI_FINISH, this.onGameStartAnimOver), this.addModelListener(P.VIEW_BROADCAST_ZHI_TOU, this.onRollDices), this.addModelListener(P.VIEW_UPDATE_XIA_ZHU_OPTIONS, this.onXiaZhu), this.addModelListener(P.VIEW_BROADCAST_DEAL_CARD, this.onDealCard), this.addModelListener(P.VIEW_BROADCAST_OPERATION_START, this.onOperationStart), this.addModelListener(P.VIEW_USER_OPERATION, this.onOperationSelect), this.addModelListener(P.SEND_PLAYER_OPERATION_PRE, this.onOperationResultPre), this.addModelListener(P.UPDATE_OPERATION_RESULT, this.onOperationResult), this.addModelListener(P.VIEW_UPDATE_BU_HUA_PAI, this.onUpdateBuHuaPai), this.addModelListener(P.VIEW_BROADCAST_GRAB_CARD, this.onTakeCard), this.addModelListener(I.BROADCAST_FEN_ZHANG, this.onFenZhang), this.addModelListener(P.VIEW_BROADCAST_GAME_OVER, this.onGameOver), this.addModelListener(h.EVENT_GAME_OVER, this.onGameFinish), this.addModelListener(P.RECEIVE_DEAL_CARD, this.onReconnect), this.addModelListener(P.VIEW_BROADCAST_CHANGE_SEAT, this.onChangeSeat), this.addModelListener(P.PRIVATE_PLAY_AGAIN, this.resetDesk), this.addModelListener(P.SHOW_PICK_CARD, this.onShowPickCard), this.addModelListener(P.HIDE_PICK_CARD, this.onHidePickCard), this.addModelListener(P.SHOW_BAO_CARD, this.onShowBaoCard), this.addModelListener(P.HIDE_BAO_CARD, this.onHideBaoCard), this.addModelListener(P.VIEW_UPDATE_CARD_TAG, this.onUpdateCardTag), this.addModelListener(I.UPDATE_PRIVATE_SETTLE_INFO, this.onUpdateCardTag), this.addModelListener(P.VIEW_BROADCAST_WAIT_HINT, this.onWaitHint), this.addModelListener(I.BROADCAST_REALTIME_HU_INFO, this.onGameRealTimeSettle), this.addModelListener(I.VIEW_BROADCAST_TO_WAIT_USER_GIVE_UP, this.onGiveUp), this.addModelListener(I.VIEW_BROADCAST_TO_WAIT_USER_GIVE_UP_RESULT, this.onGiveUpResult), this.addModelListener(P.VIEW_BROADCAST_DINGQUE_OPTIONS, this.onDingQueOptions), this.addModelListener(I.VIEW_BROADCAST_HUAN_SAN_ZHANG, this.onHuanSanZhangOptions), this.addModelListener(P.VIEW_BROADCAST_MAIDUANMEN_USER, this.viewUserMaiDuanMenOptions), this.addModelListener(P.NET_BROADCAST_DING_ZHUANG, this.onNetBroadcastDingZhuang), this.addModelListener(h.UPDATE_PRIVATE_ROOM_INFO, this.onUpdatePrivateRoomInfo)
                }, o.onLoad = function() {
                    this.initBg(), this.initData(), this.addGameComp(), this.resetView()
                }, o.initBg = function() {
                    var e = this;
                    this.getPreLoaderRes(G.Picture_Game_Desk.bundle, G.Picture_Game_Desk.path, u, (function(t) {
                        e.nodeLogo && e.nodeLogo.isValid && t && e.nodeLogo.getChildByName("logo").getComponent(l).material.setProperty("albedoMap", t)
                    }))
                }, o.addGameComp = function() {
                    null == this.node && (this.node = d.create_2DNode()), this.node.addComponent("MJGameComponent");
                    var e = this.node.getComponent("MJGameComponent");
                    "function" == typeof e.setDelegate && e.setDelegate(this)
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("MJGameComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
                        return t[e].apply(t, a)
                    }
                }, o.start = function() {
                    this.initView()
                }, o.initData = function() {}, o.initView = function() {
                    this.updateUserHeadPos()
                }, o.onUpdateResolution = function(e) {
                    this.updateUserHeadPos()
                }, o.updateUserHeadPos = function() {
                    var e = this;
                    console.log("nodeUser------1");
                    var t = this;
                    this.scheduleOnce((function() {
                        var n = [t.nodeUser0.getPosition(), t.nodeUser1.getPosition(), t.nodeUser2.getPosition(), t.nodeUser3.getPosition()];
                        n = e._checkUsersPos(n), c.GameInfo.setUserPos(n), c.GameInfo.setRoomInfoPos(e.nodeRoomInfo.getPosition()), c.GameInfo.setRemainInfoPos(e.nodeRemainInfo.getPosition()), console.log("nodeUser------2", n), p.dispatch(P.INIT_GAMEINFO_POS)
                    }), 0)
                }, o._checkUsersPos = function(e) {
                    var t = this.doGameCompFun("checkUsersPos", e);
                    return d.isNull(t) && (t = e), t
                }, o.updateView = function() {}, o.resetView = function() {
                    this._updateGameStartAnimIsDone(!0);
                    var e = O.getDirFromSeatId(C.getInstance().mySeatId);
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
                        var a = {
                            seatId: C.getInstance().mySeatId,
                            aniType: b.AnimType.GameStart,
                            eventId: I.GAME_START_ANI_FINISH
                        };
                        p.dispatch(I.VIEW_OUT_CARD_ANI_PLAY, a)
                    }
                }, o._updateGameStartAnimIsDone = function(e, t) {
                    void 0 === t && (t = !1), this.gameStartAnimIsDone = e, p.dispatch(P.NOTIFY_GAMESTART_ANIM_STATUS, this.gameStartAnimIsDone, t)
                }, o.onGameStartAnimOver = function(e) {
                    if (this._updateGameStartAnimIsDone(!0, !0), this.deicInfo) return this.notifyDingZhuang(), this.onShowRollDices(this.deicInfo), void(this.deicInfo = null)
                }, o.onNetBroadcastDingZhuang = function() {
                    this.doGameCompFun("onNetBroadcastDingZhuang")
                }, o.notifyDingZhuang = function() {
                    p.dispatch(P.VIEW_BROADCAST_DING_ZHUANG)
                }, o.onShowRollDices = function(e) {
                    if (this.log("GameDeskPrefabCtr.onRollDices", e), d.isNull(e) || d.table_isEmpty(e.diceInfo)) this.log("GameDeskPrefabCtr.onRollDices", "数据异常", e);
                    else {
                        var t = e.diceInfo[0].seatId,
                            n = e.diceInfo[0].dices || [],
                            a = O.getDirFromSeatId(t);
                        a < 0 || a >= T.playerNum ? this.log("GameDeskPrefabCtr.onRollDices", "庄家座位非法", t) : (n = n.filter((function(e) {
                            return e > 0 && e < 7
                        })), d.table_isEmpty(n) ? this.log("GameDeskPrefabCtr.onRollDices", "骰子数量或数值非法", n) : (this.nodeWall.onRollDices(e), this.nodeDice.onRollDices(e)))
                    }
                }, o.onRollDices = function(e, t) {
                    this.deicInfo = t, this.gameStartAnimIsDone && (this.onShowRollDices(this.deicInfo), this.deicInfo = null)
                }, o.onXiaZhu = function(e, t) {
                    this.log("GameDeskPrefabCtr.onXiaZhu", t), d.isNull(t) ? this.log("GameDeskPrefabCtr.onXiaZhu", "没有下注数据") : this.nodeClock.onMyOptions(E.XIA_ZHU)
                }, o.onDealCard = function(e, t) {
                    this.log("GameDeskPrefabCtr.onDealCard", t), d.isNull(t) || d.table_isEmpty(t.cards) ? this.log("GameDeskPrefabCtr.onDealCard", "没有手牌数据") : (this.nodeWall.onDealCard(t), this.nodeHandCard.onDealCard(t))
                }, o.onWaitHint = function(e, t) {
                    this.nodeClock.onOperationStart({
                        bankSeatId: -1
                    }), this.nodeDice.showGaiBan()
                }, o.onOperationStart = function(e, t) {
                    this.log("GameDeskPrefabCtr.onOperationStart", t), this.nodeClock.onOperationStart(t), this.nodeDice.onOperationStart(t)
                }, o.onOperationSelect = function(e, t) {
                    this.log("GameDeskPrefabCtr.onOperationSelect", t), this.nodeDice.onOperationSelect(t), this.nodeClock.onOperationSelect(t)
                }, o.onOperationResultPre = function(e, t) {
                    this._dataOperationResultPre = t, t.opCode == S.OPE_OUT_CARD && (this.onOutCard(e, t), this.playEffect(e, t))
                }, o.onOperationResult = function(e, t) {
                    if (d.isNull(t) || d.isNull(t.seatId) || d.isNull(t.opCode)) this.log("GameDeskPrefabCtr.onOperationResult", "数据异常", t);
                    else {
                        if (p.dispatch(h.VIEW_UPDATE_GAME_OUTCARD_TIMEOUT, 0), d.isNotNull(this._dataOperationResultPre)) {
                            if (this._dataOperationResultPre.opCode == S.OPE_OUT_CARD && this._dataOperationResultPre.opCard == t.opCard && this._dataOperationResultPre.opCards.length == t.opCards.length && this._dataOperationResultPre.seatId == t.seatId) return void(this._dataOperationResultPre = null);
                            this._dataOperationResultPre.opCode == S.OPE_OUT_CARD && this.onOutCardRevert(e, this._dataOperationResultPre)
                        }
                        switch (this._dataOperationResultPre = null, t.opCode) {
                            case S.OPE_OUT_CARD:
                                this.onOutCard(e, t);
                                break;
                            case S.OPE_RIGHT_CHI:
                            case S.OPE_MIDDLE_CHI:
                            case S.OPE_LEFT_CHI:
                            case S.OPE_PENG:
                            case S.OPE_QIANG_PENG:
                            case S.OPE_LANG_QI:
                            case S.OPE_MING_LOU:
                                this.onPengGang(e, t);
                                break;
                            case S.OPE_BAO_JIAO:
                            case S.OPE_TING:
                            case S.OPE_KOU_TING:
                                this.onBaoTing(e, t);
                                break;
                            case S.OPE_AN_GANG:
                            case S.OPE_GANG:
                            case S.OPE_BU_GANG:
                            case S.OPE_HUA_GANG:
                                this.onPengGang(e, t, !0);
                                break;
                            case S.OPE_HU:
                            case S.OPE_ZI_MO:
                                this.onHu(e, t);
                                break;
                            case S.OPE_DIAO:
                                break;
                            default:
                                this.doGameCompFun("onOperationResult", t)
                        }
                        this.playEffect(e, t)
                    }
                }, o.playEffect = function(e, t) {
                    var n = "xiaobo",
                        a = f.getInstance().findPlayerWithUserId(t.userId);
                    switch (d.isNotNull(a) ? (2 == d.number_valueOf(a.gameUserInfo.sex) && (n = "xiaoya"), console.log("playEffect", t.userId, n, a.gameUserInfo.sex)) : console.log("playEffect", t.userId, n, "玩家信息丢失"), t.opCode) {
                        case S.OPE_OUT_CARD:
                            var i = O.getCardValueLocalTypeValue(t.opCard),
                                o = i[0],
                                r = i[1];
                            if (d.isNotNull(this._soundConfig[o])) {
                                var s = d.clone(y.GameDiscard);
                                s.path = d.string_format(y.GameDiscard.path, n, this._soundConfig[o], r), v.getInstance().playEffect(s)
                            }
                            break;
                        case S.OPE_RIGHT_CHI:
                        case S.OPE_MIDDLE_CHI:
                        case S.OPE_LEFT_CHI:
                            var u = d.clone(y.GameChi);
                            u.path = d.string_format(y.GameChi.path, n), v.getInstance().playEffect(u);
                            break;
                        case S.OPE_PENG:
                        case S.OPE_QIANG_PENG:
                            var l = d.clone(y.GamePeng);
                            l.path = d.string_format(y.GamePeng.path, n), v.getInstance().playEffect(l);
                            break;
                        case S.OPE_AN_GANG:
                            var c = {
                                seatId: t.seatId,
                                aniType: b.AnimType.Gang,
                                aniName: "ag"
                            };
                            this._showGangAnim(c, n);
                            break;
                        case S.OPE_GANG:
                            var h = {
                                seatId: t.seatId,
                                aniType: b.AnimType.Gang,
                                aniName: "mg"
                            };
                            this._showGangAnim(h, n);
                            break;
                        case S.OPE_BU_GANG:
                            var p = {
                                seatId: t.seatId,
                                aniType: b.AnimType.Gang,
                                aniName: "mg"
                            };
                            this._showGangAnim(p, n);
                            break;
                        case S.OPE_HUA_GANG:
                            var m = d.clone(y.GameHuaGang);
                            m.path = d.string_format(y.GameHuaGang.path, n), v.getInstance().playEffect(m);
                            break;
                        case S.OPE_LANG_QI:
                            var _ = d.clone(y.GameLangQi);
                            _.path = d.string_format(y.GameLangQi.path, n), v.getInstance().playEffect(_);
                            break;
                        case S.OPE_HU:
                            var g = d.clone(y.GameHu);
                            g.path = d.string_format(y.GameHu.path, n), v.getInstance().playEffect(g);
                            break;
                        case S.OPE_GANG_HU:
                            var C = d.clone(y.GameGangHu);
                            C.path = d.string_format(y.GameGangHu.path, n), v.getInstance().playEffect(C);
                            break;
                        case S.OPE_ZI_MO:
                            var E = d.clone(y.GameZiMo);
                            E.path = d.string_format(y.GameZiMo.path, n), v.getInstance().playEffect(E);
                            break;
                        case S.OPE_DIAO:
                            break;
                        default:
                            if (A[t.opCode]) {
                                var I = d.clone(y.GameTing);
                                I.path = d.string_format(y.GameTing.path, n), setTimeout((function() {
                                    v.getInstance().playEffect(I)
                                }), 100)
                            }
                    }
                }, o._showGangAnim = function(e, t) {
                    this.doGameCompFun("checkNeedGangAnim") && p.dispatch(I.VIEW_OUT_CARD_ANI_PLAY, e);
                    var n = d.clone(y.GameGang);
                    n.path = d.string_format(y.GameGang.path, t), v.getInstance().playEffect(n)
                }, o.onUpdateBuHuaPai = function(e, t) {
                    if (d.isNull(t)) this.log("GameDeskPrefabCtr.onUpdateBuHuaPai", "没有花牌数据");
                    else {
                        v.getInstance().playEffect(y.Get);
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
                    if (d.isNull(t)) this.log("GameDeskPrefabCtr.onTakeCard", "没有抓牌数据");
                    else {
                        v.getInstance().playEffect(y.Get);
                        var n = {
                            seatId: t.seatId,
                            gangCount: this._gangCount,
                            remian: t.remainCardNum,
                            card: t.card
                        };
                        this.log("GameDeskPrefabCtr.onTakeCard", n), this.nodeWall.onTakeCard(n), this.nodeHandCard.onTakeCard(n), this.nodeClock.onTakeCard(n)
                    }
                }, o.onOutCard = function(e, t) {
                    this.log("GameDeskPrefabCtr.onOutCard", t), d.isNull(t) || d.isNull(t.seatId) || d.isNull(t.opCard) ? this.log("GameDeskPrefabCtr.onOutCard", "出牌数据错误") : (v.getInstance().playEffect(y.Play), this.nodeHandCard.onOutCard(t), this.nodeOutCard.onOutCard(t), this.nodeClock.onOperationResult())
                }, o.onHideHandCard = function(e) {
                    this.nodeHandCard.hideHandCard(e)
                }, o.onOutCardRevert = function(e, t) {
                    this.log("GameDeskPrefabCtr.onOutCardRevert", t), d.isNull(t) || d.isNull(t.seatId) || d.isNull(t.opCard) ? this.log("GameDeskPrefabCtr.onOutCardRevert", "出牌数据错误") : (this.nodeHandCard.onOutCardRevert(t), this.nodeOutCard.onOutCardRevert(t))
                }, o.onPengGang = function(e, t, n) {
                    void 0 === n && (n = !1), d.isNull(t) || d.isNull(t.seatId) || d.isNull(t.cardSeatId) || d.isNull(t.opCard) ? this.log("GameDeskPrefabCtr.onPengGang", "碰杠数据错误") : 0 != t.cardSeatId ? (n && this._gangCount++, this.log("GameDeskPrefabCtr.onPengGang", t), this.nodeOutCard.onPengGang(t), this.nodeHandCard.onPengGang(t), this.nodeMeldCard.onPengGang(t), this.nodeClock.onPengGang(t)) : this.log("GameDeskPrefabCtr.onPengGang", "无效座位号")
                }, o.onChannelOperationResult = function(e) {
                    this.nodeOutCard.onChannelOperationResult(e), this.nodeHandCard.onChannelOperationResult(e), this.nodeMeldCard.onChannelOperationResult(e), this.nodeClock.onChannelOperationResult(e)
                }, o.onBaoTing = function(e, t) {
                    if (T.TingHide) {
                        if (d.isNull(t) || d.isNull(t.seatId) || d.isNull(t.opCard)) return void this.log("GameDeskPrefabCtr.onBaoTing", "报听数据错误");
                        this.log("GameDeskPrefabCtr.onBaoTing", t), this.nodeHandCard.onBaoTing(t), this.nodeClock.onPengGang(t)
                    }
                }, o.onHu = function(e, t) {
                    d.isNull(t) || d.isNull(t.seatId) || d.isNull(t.cardSeatId) || d.isNull(t.opCard) ? this.log("GameDeskPrefabCtr.onHu", "胡牌数据错误") : 0 != t.cardSeatId ? (this.log("GameDeskPrefabCtr.onHu", t), this.nodeMeldCard.onChannelOperationResult(t), this.nodeOutCard.onHu(t), this.nodeHandCard.onHu(t), this.nodeHuCard.onHu(t)) : this.log("GameDeskPrefabCtr.onHu", "无效座位号")
                }, o.onGameRealTimeSettle = function(e, t) {
                    this.nodeHandCard.onGameRealTimeSettle(t)
                }, o.onGameFinish = function(e) {
                    g.getInstance().reset()
                }, o.onGameOver = function(e, t) {
                    if (this.log("GameDeskPrefabCtr.onGameOver", t), d.isNull(t) || d.table_isEmpty(t.handCards)) this.log("GameDeskPrefabCtr.onGameOver", "结算数据错误");
                    else {
                        g.getInstance().reset(), this.nodeWall.onGameOver(t), this.nodeHandCard.onGameOver(t), this.nodeOutCard.onGameOver(t), this.nodeMeldCard.onGameOver(t), this.nodeHuCard.onGameOver(t), this.nodeClock.onGameOver(t);
                        var n = {
                            seatId: C.getInstance().mySeatId,
                            aniType: b.AnimType.GameOver
                        };
                        p.dispatch(I.VIEW_OUT_CARD_ANI_PLAY, n)
                    }
                }, o.onReconnect = function() {
                    var e = this;
                    this.resetView();
                    var t = {
                            bankSeatId: d.number_valueOf(C.getInstance().bankSeatId, -1),
                            dices: C.getInstance().dices,
                            remain: C.getInstance().getRemainCardsCount(),
                            gangCount: 0,
                            playerList: f.getInstance().playerList,
                            operationSeatId: g.getInstance().seatId,
                            operationTimePass: C.getInstance().timePass
                        },
                        n = O.getDirFromSeatId(t.bankSeatId);
                    n < 0 || n >= T.playerNum ? this.log("GameDeskPrefabCtr.onReconnect", "庄家座位非法", t.bankSeatId) : (this.nodeClock.onReconnect(t), this.nodeWall.onReconnect(t), d.table_isEmpty(t.playerList) ? this.log("GameDeskPrefabCtr.onReconnect", "玩家数据异常", t) : (this.log("GameDeskPrefabCtr.onReconnect", t), t.playerList.forEach((function(e, n, a) {
                        for (var i = 0; i < e.opGroups.length; i++) switch (e.opGroups[i].opCode) {
                            case S.OPE_AN_GANG:
                            case S.OPE_GANG:
                            case S.OPE_BU_GANG:
                            case S.OPE_HUA_GANG:
                                t.gangCount++
                        }
                    })), this._gangCount = t.gangCount, this.nodeHandCard.onReconnect(t), this.nodeOutCard.onReconnect(t), this.nodeMeldCard.onReconnect(t), this.nodeHuCard.onReconnect(t), this.nodeDice.onReconnect(), this.doGameCompFun("reconnectDesk", (function(t) {
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
                    var a;
                    if ((null == t || null == (a = t.seatIdList) ? void 0 : a.length) > 0) {
                        var i = t.seatIdList[0];
                        this.nodeClock.onUserOptions(i, E.WAIT_USER_GIVE_UP, n || 30)
                    }
                }, o.onGiveUpResult = function(e, t) {
                    1 == t.isGiveUp && (t.userId == c.User.getUserMid() && this.nodeClock.onCloseClock(), this.nodeHandCard.onGiveUpResult(t))
                }, o.onDingQueOptions = function() {
                    this.nodeClock.onMyOptions(E.DING_QUE), this.nodeDice.showGaiBan()
                }, o.onHuanSanZhangOptions = function() {
                    this.nodeClock.onMyOptions(E.HUAN_SAN_ZHANG), this.nodeDice.showGaiBan()
                }, o.viewUserMaiDuanMenOptions = function(e, t) {
                    this.nodeClock.onUserOptions(t.seatId, E.MAI_DUAN_MEN), this.nodeDice.showGaiBan()
                }, o.onUpdatePrivateRoomInfo = function() {
                    c.PrivateData.isTwoPlayerModule() && (this.nodeHandCard.updateUserDir(), this.nodeOutCard.updateUserDir(!0), this.nodeMeldCard.updateUserDir(!1), this.nodeHuCard.updateUserDir(), this.nodeClock.updateViewTimerDir(), this.updateUserHeadPos())
                }, o.onDestroy = function() {}, o.log = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    console.log(t)
                }, t
            }(m)).prototype, "nodeDesk", [H], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ae = t(te.prototype, "nodeWall", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ie = t(te.prototype, "nodeUser0", [F], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), oe = t(te.prototype, "nodeUser1", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), re = t(te.prototype, "nodeUser2", [J], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), se = t(te.prototype, "nodeUser3", [j], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ue = t(te.prototype, "nodeRoomInfo", [W], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), le = t(te.prototype, "nodeRemainInfo", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), de = t(te.prototype, "nodeOutCard", [X], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ce = t(te.prototype, "nodeHandCard", [Z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), he = t(te.prototype, "nodeMeldCard", [Y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), pe = t(te.prototype, "nodeHuCard", [Q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), me = t(te.prototype, "nodeClock", [q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), _e = t(te.prototype, "nodeDice", [K], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ge = t(te.prototype, "nodeLogo", [$], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ee = te)) || ee) || ee)), o._RF.pop()
        }
    }
}))