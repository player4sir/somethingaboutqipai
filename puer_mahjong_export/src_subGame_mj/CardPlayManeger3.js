System.register("chunks:///_virtual/CardPlayManeger3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AppEvent.ts", "./Utils.ts", "./GCache.ts", "./LayerManager.ts", "./EventManager.ts", "./BaseComponent.ts", "./OperationMgr3.ts", "./OperationResultMgr3.ts", "./PlayerMgr6.ts", "./RoomMgr6.ts", "./FXJConfig3.ts", "./FXJEvent3.ts", "./GameEvent6.ts", "./CardUtil3.ts", "./NodeCardCtr3.ts", "./MyPlayerCard3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f, C, E, S, A, I, G, y, v, P, T, b;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, u = e.UITransform, l = e.Widget, d = e.Tween
        }, function(e) {
            c = e.AppEvent
        }, function(e) {
            h = e.Utils
        }, function(e) {
            p = e.GCache
        }, function(e) {
            m = e.LayerManager
        }, function(e) {
            _ = e.EventManager
        }, function(e) {
            g = e.BaseComponent
        }, function(e) {
            f = e.OperationMgr
        }, function(e) {
            C = e.OperationResultMgr
        }, function(e) {
            E = e.PlayerMgr
        }, function(e) {
            S = e.RoomMgr, A = e.ROOM_DATA_TYPE
        }, function(e) {
            I = e.OPCode
        }, function(e) {
            G = e.FXJEvent
        }, function(e) {
            y = e.GameEvent, v = e.GameEventTag
        }, function(e) {
            P = e.CardUtil
        }, function(e) {
            T = e.NodeCardCtr
        }, function(e) {
            b = e.MyPlayerCard
        }],
        execute: function() {
            var O, R, M, N, U, D, L, B, w, k;
            o._RF.push({}, "ab53aTpQh9D9bpva8MNvBww", "CardPlayManeger", void 0);
            var H = r.ccclass,
                x = r.property,
                F = r.menu;
            e("CardPlayManeger", (O = H("CardPlayManeger"), R = F("prefab/subGame/mj/CardPlayManeger"), M = x({
                tooltip: "手牌节点",
                type: s
            }), N = x({
                tooltip: "出牌节点",
                type: s
            }), U = x({
                tooltip: "捉鸡节点",
                type: s
            }), O(D = R((B = t((L = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "nodeCardView", B, i(t)), a(t, "nodeCardOutView", w, i(t)), a(t, "nodeCardZhuoJiView", k, i(t)), t._delayHandle = void 0, t._delay_callBack = void 0, t.pengArr = [I.OPE_PENG, I.OPE_QIANG_PENG], t.chiArr = [I.OPE_RIGHT_CHI, I.OPE_MIDDLE_CHI, I.OPE_LEFT_CHI], t._isOutCardPre = !1, t.out_card_pos = [{
                        x: 0,
                        y: 0
                    }, {
                        x: 280,
                        y: 70
                    }, {
                        x: 0,
                        y: 240
                    }, {
                        x: -280,
                        y: 70
                    }], t._nodeCardViewPos = null, t
                }
                n(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {
                    this.addModelListener(y.VIEW_UPDATE_BU_HUA_PAI, this.onUpdateBuHuaPai), this.addModelListener(y.SYN_USER_OPERATION, this.onPlayerStartOperation), this.addModelListener(y.VIEW_BROADCAST_DEAL_CARD, this.onDealCard), this.addModelListener(y.RECEIVE_DEAL_CARD, this.receiveDealCard, 1), this.addModelListener(y.VIEW_BROADCAST_GRAB_CARD, this.drawMyCard), this.addModelListener(y.VIEW_USER_OPERATION, this.onUserOperation), this.addModelListener(y.SEND_PLAYER_OPERATION, this.onSendPlayerOp), this.addModelListener(y.SEND_PLAYER_OPERATION_PRE, this.onPlayerOpResultPre), this.addModelListener(y.UPDATE_OPERATION_RESULT, this.onPlayerOpResult, 1), this.addModelListener(y.RESET_CARD_STATUS, this.resetCardStatus), this.addModelListener(y.VIEW_BROADCAST_GAME_OVER, this.onBroadcastGameOver), this.addModelListener(y.VIEW_UPDATE_USER_PAO_CARD, this.onBroadcastUpdateUserPaoCard), this.addModelListener(G.BROADCAST_FEN_ZHANG, this.onFenZhang), this.addModelListener(y.SEND_CHOSE_GROUPS, this.onChoseGroups), this.addModelListener(G.VIEW_BROADCAST_HUAN_SAN_ZHANG, this.onHuanSanZhangStart), this.addModelListener(G.VIEW_BROADCAST_ONE_HUAN_SAN_ZHANG_RESULT, this.onOneHuanSanZhangResult), this.addModelListener(G.VIEW_BROADCAST_HUAN_SAN_ZHANG_HANDCARD, this.onAllHuanSanZhangResult), this.addModelListener(G.VIEW_RESET_HUAN_SAN_ZHANG, this.onResetHuanSanZhang), this.addModelListener(y.VIEW_BROADCAST_ALL_DINGQUE_OPTIONS_RESULT, this.onAllDingQueOptionsResult), this.addModelListener(c.EVENT_GAME_OVER, this.onGameFinish), this.addModelListener(y.VIEW_UPDATE_XIA_ZHU_RESULT, this.updateViewXiaZhuResult), this.addModelListener(G.BROADCAST_REALTIME_HU_INFO, this.onUserHuInfo), this.addModelListener(y.VIEW_BROADCAST_DING_LAIZI, this.onResortHandCard), this.addModelListener(G.UPDATE_PRIVATE_SETTLE_INFO, this.onResortHandCard), this.addModelListener(y.VIEW_DESTROY_MY_HANDCARD_VIEW, this.removeAllModelListener), this.addModelListener(y.VIEW_GAME_GET_GRABCARD_VALUE, this.getDrawCard), this.addModelListener(c.UPDATE_PRIVATE_ROOM_INFO, this.onUpdatePrivateRoomInfo)
                }, o.onLoad = function() {
                    var e = this;
                    this.addGameComp(), this._hideCardOutView(), this.initOutCardPos(), p.Desk.registerListen(v.MELDCARDPOS, (function(t) {
                        e.updateHandCardPos(t)
                    }))
                }, o.initOutCardPos = function() {
                    var e = this;
                    this.doGameCompFun("getShowOutCardPos", (function(t) {
                        e.out_card_pos = t
                    }))
                }, o.addGameComp = function() {
                    null == this.node && (this.node = h.create_2DNode()), this.node.addComponent("MJGameComponent");
                    var e = this.node.getComponent("MJGameComponent");
                    "function" == typeof e.setDelegate && e.setDelegate(this)
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("MJGameComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
                        return t[e].apply(t, a)
                    }
                }, o.updateHandCardPos = function(e) {
                    var t = this;
                    console.log("手牌位置  开始刷新手牌的位置-----CardPlayManeger.updateHandCardPos ~ param:", e, "手牌节点初始化位置：", this.nodeCardView.getPosition().x), null == this._nodeCardViewPos && this._updateNodeCardViewDiff(0, "updateHandCardPos"), this.scheduleOnce((function() {
                        try {
                            t._resetHandCardViewPos(e)
                        } catch (e) {
                            console.error("Failed to reset hand card view position:", e)
                        }
                    }))
                }, o._resetHandCardViewPos = function(e) {
                    var t, n = this.nodeCardView.getComponent(b).getLastCardPos(e.opCode);
                    if (n && null != e && null != (t = e.pos) && t.x) {
                        var a = m.camera2D.screenToWorld(m.camera3D.worldToScreen(e.pos)),
                            i = this.nodeCardView.getComponent(u).convertToNodeSpaceAR(a);
                        null == this._nodeCardViewPos && (this._nodeCardViewPos = this.nodeCardView.getWorldPosition(a)), i.x -= this._nodeCardViewPos.x;
                        var o = this.nodeCardView.getComponent(u).convertToNodeSpaceAR(n);
                        if (console.log("手牌位置 麻将子节点位置：", i.x, "，手牌相对位置：", o.x, "，手牌初始位置：", n.x), o.x < i.x) return void this._updateNodeCardViewDiff(i.x - o.x)
                    }
                    this._updateNodeCardViewDiff(0, "updateHandCardPos")
                }, o._updateNodeCardViewDiff = function(e, t) {
                    void 0 === t && (t = "");
                    var n = this.nodeCardView.getComponent(l);
                    n.horizontalCenter = e, console.log("手牌-- 设置手牌节点偏移：", e, t), n.updateAlignment()
                }, o.onGameFinish = function() {
                    this._hideCardOutView()
                }, o.onBroadcastGameOver = function() {
                    this.nodeCardView.getComponent(b).node.active = !1, _.dispatch(y.HIDE_PICK_CARD), this._hideCardOutView()
                }, o.drawMyCard = function(e, t) {
                    if (t.userId == E.getInstance().getMyPlayerInfo().userId) {
                        this.endDelayHandle(), E.getInstance().addHandCard([t.card]);
                        var n = this.nodeCardView.getComponent(b);
                        n.drawByte = t.card, console.log("自己抓牌 drawMyCard________________________", t.card, P.getMajiangValues([t.card])), n.drawCard(n.drawByte)
                    }
                }, o.onUserOperation = function(e, t) {
                    var n = this.nodeCardView.getComponent(b);
                    n.showOutCardList(I.OPE_OUT_CARD), n.showTing(), this.doGameCompFun("isAllHandsIsLaizi")
                }, o.onDealCard = function(e, t) {
                    this._updateNodeCardViewDiff(0, "onDealCard");
                    var n = this.nodeCardView.getComponent(b),
                        a = 14 === t.cards.length;
                    n.addHandCards(t.cards, a, a, !1), n.node.active = !0, n.playShowCardAnim()
                }, o.receiveDealCard = function(e) {
                    this._updateNodeCardViewDiff(0, "receiveDealCard"), console.log("手牌-- 位置 ~ file: CardPlayManeger.ts:214 ~ CardPlayManeger ~ receiveDealCard ~ receiveDealCard: 重连刷新手牌", this.uuid);
                    var t = this.nodeCardView.getComponent(b);
                    t.node.active = !0, t.addHandCards(E.getInstance().getMyhands(), !1, !1, !0), this._hideCardOutView(), this._checkReconnectHuanSanZhang()
                }, o.isChiInRange = function(e) {
                    return e >= 1001 && e <= 1003
                }, o._hideCardOutView = function() {
                    this.nodeCardOutView.active = !1
                }, o.showOutCard = function(e, t) {
                    var n = P.calculatePlayerSeat(S.getInstance().mySeatId, e),
                        a = this.out_card_pos[n];
                    a && this.nodeCardOutView.setPosition(a.x, a.y), this.nodeCardOutView.name = "card_" + e, d.stopAllByTarget(this.nodeCardOutView), this.nodeCardOutView.active = !0, this.nodeCardOutView.getComponentInChildren(T).setCardByte(t)
                }, o.onOutCardPre = function(e) {
                    var t = this;
                    this._isOutCardPre = !0;
                    var n = this.nodeCardView.getComponent(b),
                        a = (e.opCards, e.opCard),
                        i = n.playCardFromHandAnim(a, n.drawByte);
                    console.log("自己预出牌-------------", i), this._stopDelayHandle(), this._delay_callBack = function() {
                        console.log("自己预出牌完成"), t._stopDelayHandle(), n.refreshHandCardPre(), t._delay_callBack = null
                    }, this._delayHandle = this.addSchedulerOnce(i, (function() {
                        t._delay_callBack && t._delay_callBack()
                    }))
                }, o.onOutCard = function() {
                    var e = this;
                    console.log("自己出牌------------- isOutCard", this._isOutCardPre);
                    var t = this.nodeCardView.getComponent(b),
                        n = (C.getInstance().opCards, C.getInstance().opCard);
                    if (this._isOutCardPre) this._delay_callBack ? (console.log("自己出牌------------- 修改动画回调"), this._delay_callBack = function() {
                        console.log("自己出牌完成"), e._stopDelayHandle(), t.refreshHandCard(), e._delay_callBack = null
                    }) : (console.log("自己出牌 ------------- 刷新手牌"), t.refreshHandCard());
                    else {
                        var a = t.playCardFromHandAnim(n, t.drawByte);
                        console.log("自己出牌-------------", a), this._stopDelayHandle(), this._delay_callBack = function() {
                            console.log("自己出牌完成"), e._stopDelayHandle(), t.refreshHandCard(), e._delay_callBack = null
                        }, this._delayHandle = this.addSchedulerOnce(a, (function() {
                            e._delay_callBack && e._delay_callBack()
                        }))
                    }
                    this._isOutCardPre = !1
                }, o.onPengCard = function() {
                    var e = C.getInstance().opCards,
                        t = this.nodeCardView.getComponent(b);
                    t.stackAnim(!0, e), t.updateHandPositionAndName()
                }, o.onZhuiGangCard = function() {
                    var e = C.getInstance().opCards;
                    this.nodeCardView.getComponent(b).onRemoveCards(e)
                }, o.onQingTouAnGang = function() {
                    var e = C.getInstance().opCards;
                    this.nodeCardView.getComponent(b).stackAnim(!1, e)
                }, o.onGangCard = function() {
                    var e = C.getInstance().opCards;
                    this.nodeCardView.getComponent(b).stackAnim(!1, e)
                }, o.onAnGangCard = function() {
                    this.refreshOptionResult()
                }, o.refreshOptionResult = function() {
                    var e = C.getInstance().opCards,
                        t = this.nodeCardView.getComponent(b);
                    if (-1 !== e.indexOf(t.drawByte)) t.removeDrawCard(), t.stackAnim(!1, e);
                    else {
                        var n = f.getInstance().getIndexByCards(t.drawByte);
                        t.stackAnim(!1, e, t.drawByte, n)
                    }
                }, o.onBuGangCard = function() {
                    var e = this,
                        t = this.nodeCardView.getComponent(b),
                        n = C.getInstance().opCards,
                        a = C.getInstance().opCard,
                        i = t.playCardFromHandAnim(a, t.drawByte);
                    this._stopDelayHandle(), this._delay_callBack = function() {
                        e._stopDelayHandle(), console.log("自己补杠操作完成，刷新数据"), console.log("onBuGangCard_________补杠_______________", n, P.getMajiangValues(n)), t.refreshHandCard(), e._delay_callBack = null
                    }, this._delayHandle = this.addSchedulerOnce(i, (function() {
                        e._delay_callBack && e._delay_callBack()
                    }))
                }, o.onBuHuaCard = function() {
                    var e = this,
                        t = this.nodeCardView.getComponent(b),
                        n = C.getInstance().opCards,
                        a = C.getInstance().opCard;
                    console.log("onBuGangCard_________补花_______________", P.getMajiangValues([a]), P.getMajiangValues(n));
                    var i = t.playCardFromHandAnim(a, t.drawByte);
                    this._stopDelayHandle(), this._delay_callBack = function() {
                        e._stopDelayHandle(), console.log("自己补杠操作完成，刷新数据"), console.log("onBuGangCard_________补杠_______________", n, P.getMajiangValues(n)), t.refreshHandCard(), e._delay_callBack = null
                    }, this._delayHandle = this.addSchedulerOnce(i, (function() {
                        e._delay_callBack && e._delay_callBack()
                    }))
                }, o._stopDelayHandle = function() {
                    if (console.log("_stopDelayHandle--- 停止延时定时器"), this._delayHandle) return this.stopSchedulerOnce(this._delayHandle), this._delayHandle = null, !0
                }, o.onChiCard = function() {
                    var e = C.getInstance().opCards;
                    this.nodeCardView.getComponent(b).stackAnim(!0, e)
                }, o.onLangqiCard = function() {
                    var e = C.getInstance().opCards,
                        t = this.nodeCardView.getComponent(b);
                    if (this.print("onLangqiCard opCards", e), this.print("onLangqiCard myHand.drawByte", t.drawByte), h.isNotNull(t.drawByte)) {
                        var n = -1 !== e.indexOf(t.drawByte);
                        if (this.print("onLangqiCard isGrab", n), n) t.removeDrawCard(), t.stackAnim(!0, e);
                        else {
                            var a = f.getInstance().getIndexByCards(t.drawByte);
                            this.print("onLangqiCard stackAnim index", a), t.stackAnim(!0, e, t.drawByte, a)
                        }
                    } else t.stackAnim(!0, e)
                }, o.onMingLouCard = function() {
                    this._stopDelayHandle();
                    var e = C.getInstance().opCards,
                        t = this.nodeCardView.getComponent(b);
                    t.removeDrawCard(), t.stackAnim(!0, e)
                }, o.playerMySelfCard = function() {
                    var e = C.getInstance().opCode;
                    switch (e) {
                        case I.OPE_OUT_CARD:
                            this.onOutCard();
                            break;
                        case I.OPE_PENG:
                        case I.OPE_QIANG_PENG:
                            this._stopDelayHandle(), this.onPengCard();
                            break;
                        case I.OPE_AN_GANG:
                            this._stopDelayHandle(), this.onAnGangCard();
                            break;
                        case I.OPE_GANG:
                            this._stopDelayHandle(), this.onGangCard();
                            break;
                        case I.OPE_BU_GANG:
                            this._stopDelayHandle(), this.onBuGangCard();
                            break;
                        case I.OPE_LEFT_CHI:
                        case I.OPE_MIDDLE_CHI:
                        case I.OPE_RIGHT_CHI:
                            this._stopDelayHandle(), this.onChiCard();
                            break;
                        case I.OPE_LANG_QI:
                            this._stopDelayHandle(), this.onLangqiCard();
                            break;
                        case I.OPE_MING_LOU:
                            this.onMingLouCard();
                            break;
                        case I.OPE_HUA_GANG:
                            this.onBuHuaCard();
                            break;
                        default:
                            this.doGameCompFun("onCardPlayManegerPlayerMySelfCard", e)
                    }
                }, o.playerOtherCard = function() {
                    if (C.getInstance().opCode == I.OPE_OUT_CARD) {
                        var e = C.getInstance().opCard,
                            t = C.getInstance().seatId;
                        this.showOutCard(t, e)
                    }
                }, o.onPlayerStartOperation = function(e, t) {
                    console.log("onPlayerStartOperation", t), t && t.userId == p.User.getUserMid() && this.endDelayHandle()
                }, o.endDelayHandle = function() {
                    console.log("stopDelayHandle---------------------1", this._delayHandle), this._stopDelayHandle() && (console.log("stopDelayHandle---------------------="), this._delay_callBack && (console.log("stopDelayHandle---------------------2"), this._delay_callBack(), this._delay_callBack = null))
                }, o.onSendPlayerOp = function(e, t, n) {
                    var a = t.opCode;
                    if (!0 === this.doGameCompFun("checkDiTing", a) || a == I.OPE_MING_LOU || a == I.OPE_TING || a == I.OPE_KA_TING || a == I.OPE_KOU_TING) {
                        if (I.OPE_TING && n && 0 == n.showTing) return;
                        this.nodeCardView.getComponent(b).showOutCardList(a)
                    }
                }, o.onChoseGroups = function(e) {
                    this.nodeCardView.getComponent(b).showOutCardList(I.OPE_TING)
                }, o.onPlayerOpResultPre = function(e, t) {
                    this._hideCardOutView(), t.opCode == I.OPE_OUT_CARD && this.onOutCardPre(t)
                }, o.onPlayerOpResult = function(e, t) {
                    this._hideCardOutView(), _.dispatch(y.UPDATE_USER_OPERATION_RESULT, t);
                    var n = this.nodeCardView.getComponent(b);
                    n.resetCardStatus(), C.getInstance().seatId === S.getInstance().mySeatId ? (this.playerMySelfCard(), _.dispatch(y.HIDE_PICK_CARD)) : (console.log("其他玩家操作", t), this.playerOtherCard()), _.dispatch(y.CLOSE_OPRATION_INFO, t.seatId, f.getInstance().checkMyChiPenGang(t.seatId)), n.hideTing(), C.getInstance().seatId === S.getInstance().mySeatId && this.doGameCompFun("isAllHandsIsLaizi")
                }, o.resetCardStatus = function() {
                    this.nodeCardView.getComponent(b).resetCardStatus()
                }, o.onBroadcastUpdateUserPaoCard = function(e) {
                    this.nodeCardView.getComponent(b).udpatePaoCard()
                }, o.onFenZhang = function(e, t) {
                    var n = P.getDirFromSeatId(S.getInstance().mySeatId),
                        a = t.cards[n];
                    if (console.log("自己分牌 onFenZhang_______________________", a, P.getMajiangValues([a])), a) {
                        this.endDelayHandle(), E.getInstance().addHandCard([a]);
                        var i = this.nodeCardView.getComponent(b);
                        i.drawByte = a, i.drawCard(i.drawByte)
                    }
                }, o.onUpdateBuHuaPai = function(e, t) {
                    if (t.seatId == S.getInstance().mySeatId) {
                        this.print("onUpdateBuHuaPai", t), this.endDelayHandle(), E.getInstance().dumpMyHands();
                        var n = E.getInstance().getMyhands(),
                            a = 14 === n.length,
                            i = this.nodeCardView.getComponent(b);
                        if (a && i.changeDrawCard(n[n.length - 1]), this.print("isPlayAnimShow", i.isPlayAnimShow), !i.isPlayAnimShow) {
                            var o = E.getInstance().getMyhands();
                            if (o.length >= 14) {
                                var r = o.pop(),
                                    s = P.sortFeiXiaoJiCards(o);
                                s.push(r), E.getInstance().updateMyhands(s)
                            } else {
                                var u = P.sortFeiXiaoJiCards(o);
                                E.getInstance().updateMyhands(u)
                            }
                            i.addHandCards(E.getInstance().getMyhands(), a, a, !0)
                        }
                    }
                }, o._checkReconnectHuanSanZhang = function() {
                    var e, t, n = S.getInstance().getGameInfoByTag(A.HUAN_SAN_ZHANG_STATUS);
                    if ((null == n || null == (e = n.cards) ? void 0 : e.length) > 0 && (null == n || null == (t = n.status) ? void 0 : t.length) > 0)
                        for (var a = n.status, i = 0; i < a.length; i++)
                            if (i + 1 == S.getInstance().mySeatId) {
                                var o = {
                                    seatId: i + 1,
                                    cards: null == n ? void 0 : n.cards
                                };
                                0 == a[i] ? this.onHuanSanZhangStart(null, o) : 1 == a[i] && (S.getInstance().setGameInfoByTag(A.HUAN_SAN_ZHANG_CARD, o), this.onOneHuanSanZhangResult(null, o));
                                break
                            }
                }, o.onHuanSanZhangStart = function(e, t) {
                    var n = this.nodeCardView.getComponent(b);
                    n.isHuanSanZhang(!0), S.getInstance().setGameInfoByTag(A.HUAN_SAN_ZHANG_CARD, t), n.onHuanSanZhangStart(t.cards)
                }, o.onOneHuanSanZhangResult = function(e, t) {
                    if (t.seatId == S.getInstance().mySeatId) {
                        var n = this.nodeCardView.getComponent(b);
                        n.addHandCards(E.getInstance().getMyhands(), !1, !1, !0), n.isHuanSanZhang(!1)
                    }
                }, o.onAllHuanSanZhangResult = function(e, t) {
                    var n = this.nodeCardView.getComponent(b);
                    n.addHandCards(E.getInstance().getMyhands(), !1, !1, !0), n.isHuanSanZhang(!1), S.getInstance().setGameInfoByTag(A.HUAN_SAN_ZHANG_CARD, null)
                }, o.onResetHuanSanZhang = function() {
                    this.nodeCardView.getComponent(b).resetSelectedNode(!1), S.getInstance().setGameInfoByTag(A.HUAN_SAN_ZHANG_CARD, null)
                }, o.onAllDingQueOptionsResult = function() {
                    this.onResortHandCard()
                }, o.onResortHandCard = function() {
                    this.nodeCardView.getComponent(b).sortHandCards()
                }, o.updateViewXiaZhuResult = function(e, t) {
                    S.getInstance().hasAllXiaZhuFinish(t.xiaZhuType) && this.onResortHandCard()
                }, o.onUserHuInfo = function(e, t) {
                    var n = this;
                    null == t || t.forEach((function(e) {
                        if (h.isNotNull(e.seatId) && S.getInstance().isMySelfSeat(e.seatId)) {
                            var t = n.nodeCardView.getComponent(b),
                                a = t.removeDrawCard();
                            if (a) E.getInstance().removeHandCard([a]);
                            else {
                                var i = E.getInstance().findPlayerWithSeatId(e.seatId);
                                console.log("玩家胡牌了 抓牌为空", null == i ? void 0 : i.huCard), null != i && i.huCard && (E.getInstance().removeHandCard([i.huCard]), t.onRemoveCards([i.huCard]))
                            }
                        }
                    }))
                }, o.getDrawCard = function() {
                    return this.nodeCardView.getComponent(b).getDrawCard()
                }, o.resetView = function() {
                    console.log("CardPlayManeger.resetView"), this.nodeCardView.getComponent(b).resetView()
                }, o.onUpdatePrivateRoomInfo = function(e, t) {
                    this.initOutCardPos()
                }, o.onDestroy = function() {
                    var e;
                    null == (e = p.Desk) || e.unRegisterListen(v.MELDCARDPOS)
                }, t
            }(g)).prototype, "nodeCardView", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), w = t(L.prototype, "nodeCardOutView", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), k = t(L.prototype, "nodeCardZhuoJiView", [U], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), D = L)) || D) || D)), o._RF.pop()
        }
    }
}))