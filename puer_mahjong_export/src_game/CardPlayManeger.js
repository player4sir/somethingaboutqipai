System.register("chunks:///_virtual/CardPlayManeger.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./LayerManager.ts", "./EventManager.ts", "./BaseComponent.ts", "./OperationMgr.ts", "./OperationResultMgr.ts", "./PlayerMgr.ts", "./RoomMgr.ts", "./FXJConfig.ts", "./FXJEvent.ts", "./GameEvent.ts", "./CardUtil.ts", "./NodeCardCtr.ts", "./MyPlayerCard.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m, C, I, A, E, v, y, S, P, T, G, O, R, N;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized, o = e.createForOfIteratorHelperLoose
        }, function(e) {
            r = e.cclegacy, s = e._decorator, l = e.Node, u = e.UITransform, d = e.Widget, c = e.Tween
        }, function(e) {
            h = e.Utils
        }, function(e) {
            p = e.GCache
        }, function(e) {
            f = e.AppEvent
        }, function(e) {
            _ = e.LayerManager
        }, function(e) {
            g = e.EventManager
        }, function(e) {
            m = e.BaseComponent
        }, function(e) {
            C = e.OperationMgr
        }, function(e) {
            I = e.OperationResultMgr
        }, function(e) {
            A = e.PlayerMgr
        }, function(e) {
            E = e.RoomMgr, v = e.ROOM_DATA_TYPE
        }, function(e) {
            y = e.OPCode, S = e.HuMap
        }, function(e) {
            P = e.FXJEvent
        }, function(e) {
            T = e.GameEvent, G = e.GameEventTag
        }, function(e) {
            O = e.CardUtil
        }, function(e) {
            R = e.NodeCardCtr
        }, function(e) {
            N = e.MyPlayerCard
        }],
        execute: function() {
            var b, D, L, M, U, w, B, H, F;
            r._RF.push({}, "a8830euEiJGB5xuwrztd7a9", "CardPlayManeger", void 0);
            var k = s.ccclass,
                V = s.property;
            e("CardPlayManeger", (b = k("CardPlayManeger"), D = V({
                tooltip: "手牌节点",
                type: l
            }), L = V({
                tooltip: "出牌节点",
                type: l
            }), M = V({
                tooltip: "捉鸡节点",
                type: l
            }), b((B = t((w = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "nodeCardView", B, a(t)), i(t, "nodeCardOutView", H, a(t)), i(t, "nodeCardZhuoJiView", F, a(t)), t._delayHandle = void 0, t._delay_callBack = void 0, t.pengArr = [y.OPE_PENG, y.OPE_QIANG_PENG], t.chiArr = [y.OPE_RIGHT_CHI, y.OPE_MIDDLE_CHI, y.OPE_LEFT_CHI], t._isOutCardPre = !1, t.out_card_pos = [{
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
                var r = t.prototype;
                return r.onInitModuleEvent = function() {
                    this.addModelListener(T.VIEW_UPDATE_BU_HUA_PAI, this.onUpdateBuHuaPai), this.addModelListener(T.SYN_USER_OPERATION, this.onPlayerStartOperation), this.addModelListener(T.VIEW_BROADCAST_DEAL_CARD, this.onDealCard), this.addModelListener(T.RECEIVE_DEAL_CARD, this.receiveDealCard, 1), this.addModelListener(T.VIEW_BROADCAST_GRAB_CARD, this.drawMyCard), this.addModelListener(T.VIEW_USER_OPERATION, this.onUserOperation), this.addModelListener(T.SEND_PLAYER_OPERATION, this.onSendPlayerOp), this.addModelListener(T.SEND_PLAYER_OPERATION_PRE, this.onPlayerOpResultPre), this.addModelListener(T.UPDATE_OPERATION_RESULT, this.onPlayerOpResult, 1), this.addModelListener(T.RESET_CARD_STATUS, this.resetCardStatus), this.addModelListener(f.VIEW_BROADCAST_GAME_OVER, this.onBroadcastGameOver), this.addModelListener(T.VIEW_UPDATE_USER_PAO_CARD, this.onBroadcastUpdateUserPaoCard), this.addModelListener(P.BROADCAST_FEN_ZHANG, this.onFenZhang), this.addModelListener(T.SEND_CHOSE_GROUPS, this.onChoseGroups), this.addModelListener(P.VIEW_BROADCAST_HUAN_SAN_ZHANG, this.onHuanSanZhangStart), this.addModelListener(P.VIEW_BROADCAST_ONE_HUAN_SAN_ZHANG_RESULT, this.onOneHuanSanZhangResult), this.addModelListener(P.VIEW_BROADCAST_HUAN_SAN_ZHANG_HANDCARD, this.onAllHuanSanZhangResult), this.addModelListener(P.VIEW_RESET_HUAN_SAN_ZHANG, this.onResetHuanSanZhang), this.addModelListener(T.VIEW_BROADCAST_ALL_DINGQUE_OPTIONS_RESULT, this.onAllDingQueOptionsResult), this.addModelListener(f.EVENT_GAME_OVER, this.onGameFinish), this.addModelListener(T.VIEW_UPDATE_XIA_ZHU_RESULT, this.updateViewXiaZhuResult), this.addModelListener(P.BROADCAST_REALTIME_HU_INFO, this.onUserHuInfo), this.addModelListener(T.VIEW_BROADCAST_DING_LAIZI, this.onResortHandCard), this.addModelListener(P.UPDATE_PRIVATE_SETTLE_INFO, this.onResortHandCard), this.addModelListener(T.VIEW_DESTROY_MY_HANDCARD_VIEW, this.removeAllModelListener), this.addModelListener(T.VIEW_GAME_GET_GRABCARD_VALUE, this.getDrawCard), this.addModelListener(T.VIEW_SHOW_HU_TIPS, this.onShowHuTips), this.addModelListener(T.VIEW_HIDE_HU_TIPS, this.onHideHuTips), this.addModelListener(f.UPDATE_PRIVATE_ROOM_INFO, this.onUpdatePrivateRoomInfo)
                }, r.onLoad = function() {
                    var e = this;
                    this.addGameComp(), this._hideCardOutView(), this.initOutCardPos(), p.Desk.registerListen(G.MELDCARDPOS, (function(t) {
                        e.updateHandCardPos(t)
                    }))
                }, r.initOutCardPos = function() {
                    var e = this;
                    this.doGameCompFun("getShowOutCardPos", (function(t) {
                        e.out_card_pos = t
                    }))
                }, r.addGameComp = function() {
                    null == this.node && (this.node = h.create_2DNode()), this.node.addComponent("GameComponent");
                    var e = this.node.getComponent("GameComponent");
                    "function" == typeof e.setDelegate && e.setDelegate(this)
                }, r.doGameCompFun = function(e) {
                    var t = this.node.getComponent("GameComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                        return t[e].apply(t, i)
                    }
                }, r.updateHandCardPos = function(e) {
                    var t = this;
                    console.log("手牌位置  开始刷新手牌的位置-----CardPlayManeger.updateHandCardPos ~ param:", e, "手牌节点初始化位置：", this.nodeCardView.getPosition().x), null == this._nodeCardViewPos && this._updateNodeCardViewDiff(0, "updateHandCardPos"), this.scheduleOnce((function() {
                        try {
                            t._resetHandCardViewPos(e)
                        } catch (e) {
                            console.error("Failed to reset hand card view position:", e)
                        }
                    }))
                }, r._resetHandCardViewPos = function(e) {
                    var t, n = this.nodeCardView.getComponent(N).getLastCardPos(e.opCode);
                    if (n && null != e && null != (t = e.pos) && t.x) {
                        var i = _.camera2D.screenToWorld(_.camera3D.worldToScreen(e.pos)),
                            a = this.nodeCardView.getComponent(u).convertToNodeSpaceAR(i);
                        null == this._nodeCardViewPos && (this._nodeCardViewPos = this.nodeCardView.getWorldPosition(i)), a.x -= this._nodeCardViewPos.x;
                        var o = this.nodeCardView.getComponent(u).convertToNodeSpaceAR(n);
                        if (console.log("手牌位置 麻将子节点位置：", a.x, "，手牌相对位置：", o.x, "，手牌初始位置：", n.x), o.x < a.x) return void this._updateNodeCardViewDiff(a.x - o.x)
                    }
                    this._updateNodeCardViewDiff(0, "updateHandCardPos")
                }, r._updateNodeCardViewDiff = function(e, t) {
                    void 0 === t && (t = "");
                    var n = this.nodeCardView.getComponent(d);
                    n.horizontalCenter = e, console.log("手牌-- 设置手牌节点偏移：", e, t), n.updateAlignment()
                }, r.onGameFinish = function() {
                    this._hideCardOutView()
                }, r.onBroadcastGameOver = function() {
                    this.nodeCardView.getComponent(N).node.active = !1, g.dispatch(T.HIDE_PICK_CARD), this._hideCardOutView()
                }, r.drawMyCard = function(e, t) {
                    var n, i;
                    if (t.userId == (null == (n = A.getInstance().getMyPlayerInfo()) ? void 0 : n.userId)) {
                        this.endDelayHandle(), A.getInstance().addHandCard([t.card]);
                        var a = this.nodeCardView.getComponent(N);
                        a.drawByte = t.card, console.log("自己抓牌 drawMyCard________________________", t.card, O.getMajiangValues([t.card])), a.drawCard(a.drawByte);
                        var o = A.getInstance().getMyhands(),
                            r = null == (i = A.getInstance().findPlayerWithSeatId(E.getInstance().mySeatId)) ? void 0 : i.opGroups;
                        this.doGameCompFun("checkHuRequirement", o, r)
                    }
                }, r.onUserOperation = function(e, t) {
                    var n = this.nodeCardView.getComponent(N);
                    n.showOutCardList(y.OPE_OUT_CARD), n.showTing(), this.doGameCompFun("isAllHandsIsLaizi")
                }, r.onDealCard = function(e, t) {
                    this._updateNodeCardViewDiff(0, "onDealCard");
                    var n = this.nodeCardView.getComponent(N),
                        i = 14 === t.cards.length;
                    n.addHandCards(t.cards, i, i, !1), n.node.active = !0, n.playShowCardAnim()
                }, r.receiveDealCard = function(e) {
                    this._updateNodeCardViewDiff(0, "receiveDealCard"), console.log("手牌-- 位置 ~ file: CardPlayManeger.ts:214 ~ CardPlayManeger ~ receiveDealCard ~ receiveDealCard: 重连刷新手牌", this.uuid);
                    var t = this.nodeCardView.getComponent(N);
                    t.node.active = !0, t.addHandCards(A.getInstance().getMyhands(), !1, !1, !0), this._hideCardOutView(), this._checkReconnectHuanSanZhang()
                }, r.isChiInRange = function(e) {
                    return e >= 1001 && e <= 1003
                }, r._hideCardOutView = function() {
                    this.nodeCardOutView.active = !1
                }, r.showOutCard = function(e, t) {
                    if (this.doGameCompFun("checkCanShowOutCard", e, t)) {
                        var n = O.calculatePlayerSeat(E.getInstance().mySeatId, e),
                            i = this.out_card_pos[n];
                        i && this.nodeCardOutView.setPosition(i.x, i.y), this.nodeCardOutView.name = "card_" + e, c.stopAllByTarget(this.nodeCardOutView), this.nodeCardOutView.active = !0, this.nodeCardOutView.getComponentInChildren(R).setCardByte(t)
                    } else this._hideCardOutView()
                }, r.onOutCardPre = function(e) {
                    var t = this;
                    this._isOutCardPre = !0;
                    var n = this.nodeCardView.getComponent(N),
                        i = (e.opCards, e.opCard),
                        a = n.playCardFromHandAnim(i, n.drawByte);
                    console.log("自己预出牌-------------", a), this._stopDelayHandle(), this._delay_callBack = function() {
                        console.log("自己预出牌完成"), t._stopDelayHandle(), n.refreshHandCardPre(), t._delay_callBack = null
                    }, this._delayHandle = this.addSchedulerOnce(a, (function() {
                        t._delay_callBack && t._delay_callBack()
                    }))
                }, r.onOutCard = function() {
                    var e = this;
                    console.log("自己出牌------------- isOutCard", this._isOutCardPre);
                    var t = this.nodeCardView.getComponent(N),
                        n = (I.getInstance().opCards, I.getInstance().opCard);
                    if (this._isOutCardPre) this._delay_callBack ? (console.log("自己出牌------------- 修改动画回调"), this._delay_callBack = function() {
                        console.log("自己出牌完成"), e._stopDelayHandle(), t.refreshHandCard(), e._delay_callBack = null
                    }) : (console.log("自己出牌 ------------- 刷新手牌"), t.refreshHandCard());
                    else {
                        var i = t.playCardFromHandAnim(n, t.drawByte);
                        console.log("自己出牌-------------", i), this._stopDelayHandle(), this._delay_callBack = function() {
                            console.log("自己出牌完成"), e._stopDelayHandle(), t.refreshHandCard(), e._delay_callBack = null
                        }, this._delayHandle = this.addSchedulerOnce(i, (function() {
                            e._delay_callBack && e._delay_callBack()
                        }))
                    }
                    this._isOutCardPre = !1
                }, r.onPengCard = function() {
                    var e = I.getInstance().opCards,
                        t = this.nodeCardView.getComponent(N);
                    t.stackAnim(!0, e), t.updateHandPositionAndName()
                }, r.onZhuiGangCard = function() {
                    var e = I.getInstance().opCards;
                    this.nodeCardView.getComponent(N).onRemoveCards(e)
                }, r.onQingTouAnGang = function() {
                    var e = I.getInstance().opCards;
                    this.nodeCardView.getComponent(N).stackAnim(!1, e)
                }, r.onGangCard = function() {
                    var e = I.getInstance().opCards;
                    this.nodeCardView.getComponent(N).stackAnim(!1, e)
                }, r.onAnGangCard = function() {
                    this.refreshOptionResult()
                }, r.refreshOptionResult = function() {
                    var e = I.getInstance().opCards,
                        t = this.nodeCardView.getComponent(N);
                    if (-1 !== e.indexOf(t.drawByte)) t.removeDrawCard(), t.stackAnim(!1, e);
                    else {
                        var n = C.getInstance().getIndexByCards(t.drawByte);
                        t.stackAnim(!1, e, t.drawByte, n)
                    }
                }, r.onBuGangCard = function() {
                    var e = this,
                        t = this.nodeCardView.getComponent(N),
                        n = I.getInstance().opCards,
                        i = I.getInstance().opCard,
                        a = t.playCardFromHandAnim(i, t.drawByte);
                    this._stopDelayHandle(), this._delay_callBack = function() {
                        e._stopDelayHandle(), console.log("自己补杠操作完成，刷新数据"), console.log("onBuGangCard_________补杠_______________", n, O.getMajiangValues(n)), t.refreshHandCard(), e._delay_callBack = null
                    }, this._delayHandle = this.addSchedulerOnce(a, (function() {
                        e._delay_callBack && e._delay_callBack()
                    }))
                }, r.onBuHuaCard = function() {
                    var e = this,
                        t = this.nodeCardView.getComponent(N);
                    t.stopShowCardAnim();
                    var n = I.getInstance().opCards,
                        i = I.getInstance().opCard;
                    console.log("onBuGangCard_________补花_______________", O.getMajiangValues([i]), O.getMajiangValues(n));
                    var a = t.playCardFromHandAnim(i, t.drawByte);
                    this._stopDelayHandle(), this._delay_callBack = function() {
                        e._stopDelayHandle(), console.log("自己补杠操作完成，刷新数据"), console.log("onBuGangCard_________补杠_______________", n, O.getMajiangValues(n)), t.refreshHandCard(), e._delay_callBack = null
                    }, this._delayHandle = this.addSchedulerOnce(a, (function() {
                        e._delay_callBack && e._delay_callBack()
                    }))
                }, r._stopDelayHandle = function() {
                    if (console.log("_stopDelayHandle--- 停止延时定时器"), this._delayHandle) return this.stopSchedulerOnce(this._delayHandle), this._delayHandle = null, !0
                }, r.onChiCard = function() {
                    var e = I.getInstance().opCards;
                    this.nodeCardView.getComponent(N).stackAnim(!0, e)
                }, r.onLangqiCard = function() {
                    var e = I.getInstance().opCards,
                        t = this.nodeCardView.getComponent(N);
                    if (this.print("onLangqiCard opCards", e), this.print("onLangqiCard myHand.drawByte", t.drawByte), h.isNotNull(t.drawByte)) {
                        var n = -1 !== e.indexOf(t.drawByte);
                        if (this.print("onLangqiCard isGrab", n), n) t.removeDrawCard(), t.stackAnim(!0, e);
                        else {
                            var i = C.getInstance().getIndexByCards(t.drawByte);
                            this.print("onLangqiCard stackAnim index", i), t.stackAnim(!0, e, t.drawByte, i)
                        }
                    } else t.stackAnim(!0, e)
                }, r.onMingLouCard = function() {
                    this._stopDelayHandle();
                    var e = I.getInstance().opCards,
                        t = this.nodeCardView.getComponent(N);
                    t.removeDrawCard(), t.stackAnim(!0, e)
                }, r.playerMySelfCard = function() {
                    var e = I.getInstance().opCode;
                    switch (e) {
                        case y.OPE_OUT_CARD:
                            this.onOutCard();
                            break;
                        case y.OPE_PENG:
                        case y.OPE_QIANG_PENG:
                            this._stopDelayHandle(), this.onPengCard();
                            break;
                        case y.OPE_AN_GANG:
                            this._stopDelayHandle(), this.onAnGangCard();
                            break;
                        case y.OPE_GANG:
                            this._stopDelayHandle(), this.onGangCard();
                            break;
                        case y.OPE_BU_GANG:
                            this._stopDelayHandle(), this.onBuGangCard();
                            break;
                        case y.OPE_LEFT_CHI:
                        case y.OPE_MIDDLE_CHI:
                        case y.OPE_RIGHT_CHI:
                            this._stopDelayHandle(), this.onChiCard();
                            break;
                        case y.OPE_LANG_QI:
                            this._stopDelayHandle(), this.onLangqiCard();
                            break;
                        case y.OPE_MING_LOU:
                            this.onMingLouCard();
                            break;
                        case y.OPE_HUA_GANG:
                            this.onBuHuaCard();
                            break;
                        default:
                            this.doGameCompFun("onCardPlayManegerPlayerMySelfCard", e)
                    }
                }, r.onAddHandCards = function(e) {
                    this._stopDelayHandle();
                    for (var t, n = this.nodeCardView.getComponent(N), i = o(e); !(t = i()).done;) {
                        var a = t.value;
                        n.addHandCardDirect(a)
                    }
                    n.updateHandPositionAndName()
                }, r.playerOtherCard = function() {
                    if (I.getInstance().opCode == y.OPE_OUT_CARD) {
                        var e = I.getInstance().opCard,
                            t = I.getInstance().seatId;
                        this.showOutCard(t, e)
                    }
                    this.doGameCompFun("onCardPlayManegerPlayerOtherCard")
                }, r.onPlayerStartOperation = function(e, t) {
                    var n;
                    if (console.log("onPlayerStartOperation", t), t && t.userId == p.User.getUserMid() && (this.endDelayHandle(), (null == (n = t.opGroups) ? void 0 : n.length) > 0)) {
                        for (var i = !1, a = 0; a < t.opGroups.length; a++)
                            if (S[t.opGroups[a].opCode]) {
                                i = !0;
                                break
                            } i && g.dispatch(T.VIEW_HIDE_HU_TIPS)
                    }
                }, r.endDelayHandle = function() {
                    console.log("stopDelayHandle---------------------1", this._delayHandle), this._stopDelayHandle() && (console.log("stopDelayHandle---------------------="), this._delay_callBack && (console.log("stopDelayHandle---------------------2"), this._delay_callBack(), this._delay_callBack = null))
                }, r.onSendPlayerOp = function(e, t, n) {
                    var i = t.opCode;
                    if (!0 === this.doGameCompFun("checkDiTing", i) || i == y.OPE_MING_LOU || i == y.OPE_TING || i == y.OPE_KA_TING || i == y.OPE_KOU_TING) {
                        if (y.OPE_TING && n && 0 == n.showTing) return;
                        this.nodeCardView.getComponent(N).showOutCardList(i)
                    }
                }, r.onChoseGroups = function(e) {
                    this.nodeCardView.getComponent(N).showOutCardList(y.OPE_TING)
                }, r.onPlayerOpResultPre = function(e, t) {
                    this._hideCardOutView(), t.opCode == y.OPE_OUT_CARD && this.onOutCardPre(t)
                }, r.onPlayerOpResult = function(e, t) {
                    this._hideCardOutView(), g.dispatch(T.UPDATE_USER_OPERATION_RESULT, t);
                    var n = this.nodeCardView.getComponent(N);
                    if (n.resetCardStatus(), I.getInstance().seatId === E.getInstance().mySeatId ? (this.playerMySelfCard(), g.dispatch(T.HIDE_PICK_CARD)) : (console.log("其他玩家操作", t), this.playerOtherCard()), g.dispatch(T.CLOSE_OPRATION_INFO, t.seatId, C.getInstance().checkMyChiPenGang(t.seatId)), n.hideTing(), I.getInstance().seatId === E.getInstance().mySeatId) this.doGameCompFun("isAllHandsIsLaizi");
                    else if (t.opCode == y.OPE_OUT_CARD) {
                        var i, a = A.getInstance().getMyhands(),
                            o = null == (i = A.getInstance().findPlayerWithSeatId(E.getInstance().mySeatId)) ? void 0 : i.opGroups,
                            r = t.opCard;
                        this.doGameCompFun("checkHuRequirement", a, o, r)
                    }
                }, r.resetCardStatus = function() {
                    this.nodeCardView.getComponent(N).resetCardStatus()
                }, r.onBroadcastUpdateUserPaoCard = function(e) {
                    this.nodeCardView.getComponent(N).udpatePaoCard()
                }, r.onFenZhang = function(e, t) {
                    var n = O.getDirFromSeatId(E.getInstance().mySeatId),
                        i = t.cards[n];
                    if (console.log("自己分牌 onFenZhang_______________________", i, O.getMajiangValues([i])), i) {
                        this.endDelayHandle(), A.getInstance().addHandCard([i]);
                        var a = this.nodeCardView.getComponent(N);
                        a.drawByte = i, a.drawCard(a.drawByte)
                    }
                }, r.onUpdateBuHuaPai = function(e, t) {
                    if (t.seatId == E.getInstance().mySeatId) {
                        this.print("onUpdateBuHuaPai", t), this.endDelayHandle(), A.getInstance().dumpMyHands();
                        var n = A.getInstance().getMyhands(),
                            i = 14 === n.length,
                            a = this.nodeCardView.getComponent(N);
                        if (i && a.changeDrawCard(n[n.length - 1]), this.print("isPlayAnimShow", a.isPlayAnimShow), !a.isPlayAnimShow) {
                            var o = A.getInstance().getMyhands();
                            if (o.length >= 14) {
                                var r = o.pop(),
                                    s = O.sortFeiXiaoJiCards(o);
                                s.push(r), A.getInstance().updateMyhands(s)
                            } else {
                                var l = O.sortFeiXiaoJiCards(o);
                                A.getInstance().updateMyhands(l)
                            }
                            a.addHandCards(A.getInstance().getMyhands(), i, i, !0, !1)
                        }
                    }
                }, r._checkReconnectHuanSanZhang = function() {
                    var e, t, n = E.getInstance().getGameInfoByTag(v.HUAN_SAN_ZHANG_STATUS);
                    if ((null == n || null == (e = n.cards) ? void 0 : e.length) > 0 && (null == n || null == (t = n.status) ? void 0 : t.length) > 0)
                        for (var i = n.status, a = 0; a < i.length; a++)
                            if (a + 1 == E.getInstance().mySeatId) {
                                var o = {
                                    seatId: a + 1,
                                    cards: null == n ? void 0 : n.cards
                                };
                                0 == i[a] ? this.onHuanSanZhangStart(null, o) : 1 == i[a] && (E.getInstance().setGameInfoByTag(v.HUAN_SAN_ZHANG_CARD, o), this.onOneHuanSanZhangResult(null, o));
                                break
                            }
                }, r.onHuanSanZhangStart = function(e, t) {
                    var n = this.nodeCardView.getComponent(N);
                    n.isHuanSanZhang(!0), E.getInstance().setGameInfoByTag(v.HUAN_SAN_ZHANG_CARD, t), n.onHuanSanZhangStart(t.cards)
                }, r.onOneHuanSanZhangResult = function(e, t) {
                    if (t.seatId == E.getInstance().mySeatId) {
                        var n = this.nodeCardView.getComponent(N);
                        n.addHandCards(A.getInstance().getMyhands(), !1, !1, !0), n.isHuanSanZhang(!1)
                    }
                }, r.onAllHuanSanZhangResult = function(e, t) {
                    var n = this.nodeCardView.getComponent(N);
                    n.addHandCards(A.getInstance().getMyhands(), !1, !1, !0), n.isHuanSanZhang(!1), E.getInstance().setGameInfoByTag(v.HUAN_SAN_ZHANG_CARD, null)
                }, r.onResetHuanSanZhang = function() {
                    this.nodeCardView.getComponent(N).resetSelectedNode(!1), E.getInstance().setGameInfoByTag(v.HUAN_SAN_ZHANG_CARD, null)
                }, r.onAllDingQueOptionsResult = function() {
                    this.onResortHandCard()
                }, r.onResortHandCard = function() {
                    this.nodeCardView.getComponent(N).sortHandCards()
                }, r.updateViewXiaZhuResult = function(e, t) {
                    E.getInstance().hasAllXiaZhuFinish(t.xiaZhuType) && this.onResortHandCard()
                }, r.onUserHuInfo = function(e, t) {
                    var n = this;
                    null == t || t.forEach((function(e) {
                        if (h.isNotNull(e.seatId) && E.getInstance().isMySelfSeat(e.seatId)) {
                            var t = n.nodeCardView.getComponent(N),
                                i = t.removeDrawCard();
                            if (i) A.getInstance().removeHandCard([i]);
                            else {
                                var a = A.getInstance().findPlayerWithSeatId(e.seatId);
                                console.log("玩家胡牌了 抓牌为空", null == a ? void 0 : a.huCard), null != a && a.huCard && (A.getInstance().removeHandCard([a.huCard]), t.onRemoveCards([a.huCard]))
                            }
                        }
                    }))
                }, r.getDrawCard = function() {
                    return this.nodeCardView.getComponent(N).getDrawCard()
                }, r.resetView = function() {
                    console.log("CardPlayManeger.resetView"), this.nodeCardView.getComponent(N).resetView()
                }, r.onShowHuTips = function(e, t) {
                    this.print("onShowHuTips", t), g.dispatch(f.VIEW_UPDATE_GAME_HU_TIPS, t)
                }, r.onHideHuTips = function(e) {
                    g.dispatch(f.VIEW_UPDATE_GAME_HU_TIPS)
                }, r.onUpdatePrivateRoomInfo = function(e, t) {
                    this.initOutCardPos()
                }, r.onDestroy = function() {
                    var e;
                    null == (e = p.Desk) || e.unRegisterListen(G.MELDCARDPOS)
                }, t
            }(m)).prototype, "nodeCardView", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), H = t(w.prototype, "nodeCardOutView", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), F = t(w.prototype, "nodeCardZhuoJiView", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), U = w)) || U)), r._RF.pop()
        }
    }
}))