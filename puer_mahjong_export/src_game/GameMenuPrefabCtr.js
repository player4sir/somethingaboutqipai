System.register("chunks:///_virtual/GameMenuPrefabCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameConfig.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./LocalStorage.ts", "./EventManager.ts", "./BaseComponent.ts", "./AppControler.ts", "./gameCommonRes.ts", "./OperationMgr.ts", "./OperationResultMgr.ts", "./PlayerMgr.ts", "./FXJEvent.ts", "./FXJRes.ts", "./FXJSound.ts", "./GameEvent.ts", "./GameRuleConfig.ts", "./NodeCardCtr.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m, C, I, A, E, v, y, S, P, T, G, O, R, N, b, D, L;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, l = e.Label, u = e.Tween, d = e.tween, c = e.instantiate, h = e.RichText
        }, function(e) {
            p = e.APPState
        }, function(e) {
            f = e.Utils
        }, function(e) {
            _ = e.GCache
        }, function(e) {
            g = e.AppEvent
        }, function(e) {
            m = e.StoreKey
        }, function(e) {
            C = e.LocalStorage
        }, function(e) {
            I = e.EventManager
        }, function(e) {
            A = e.BaseComponent
        }, function(e) {
            E = e.AppControler
        }, function(e) {
            v = e.GameCommonUuid
        }, function(e) {
            y = e.OperationMgr
        }, function(e) {
            S = e.OperationResultMgr
        }, function(e) {
            P = e.PlayerMgr
        }, function(e) {
            T = e.FXJEvent
        }, function(e) {
            G = e.FXJUIID
        }, function(e) {
            O = e.GameSound, R = e.FXJSound
        }, function(e) {
            N = e.GameEvent
        }, function(e) {
            b = e.GameRuleConfig, D = e.GameChatText
        }, function(e) {
            L = e.NodeCardCtr
        }],
        execute: function() {
            var M, U, w, B, H, F, k, V, x, W, z, Z, X, J, j, Y, Q, q, K, $, ee, te, ne, ie, ae, oe, re, se, le, ue;
            o._RF.push({}, "7a0cdqsdhVF0Z2DVIp6qRB6", "GameMenuPrefabCtr", void 0);
            var de = r.ccclass,
                ce = r.property,
                he = r.menu;
            e("GameMenuPrefabCtr", (M = de("GameMenuPrefabCtr"), U = he("prefab/game/GameMenuPrefabCtr"), w = ce({
                tooltip: "聊天按钮节点",
                type: s
            }), B = ce({
                tooltip: "胡牌提示按钮",
                type: s
            }), H = ce({
                tooltip: "听牌提示节点",
                type: s
            }), F = ce({
                tooltip: "胡牌条件按钮",
                type: s
            }), k = ce({
                tooltip: "听牌提示节点",
                type: s
            }), V = ce({
                tooltip: "听牌Item节点",
                type: s
            }), x = ce({
                tooltip: "听牌数量节点",
                type: l
            }), W = ce({
                tooltip: "时间节点",
                type: s
            }), z = ce({
                tooltip: "开始按钮节点",
                type: s
            }), Z = ce({
                tooltip: "换桌按钮节点",
                type: s
            }), X = ce({
                tooltip: "牌局流水按钮",
                type: s
            }), J = ce({
                tooltip: "认输充值操作按钮",
                type: s
            }), j = ce({
                tooltip: "充值倒计时",
                type: l
            }), M(Y = U((q = t((Q = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "btnChat", q, a(t)), i(t, "huTipBtn", K, a(t)), i(t, "nodeTing", $, a(t)), i(t, "btnTingLimit", ee, a(t)), i(t, "nodeTingView", te, a(t)), i(t, "nodeTingItem", ne, a(t)), i(t, "labelTingNum", ie, a(t)), i(t, "timeLayout", ae, a(t)), i(t, "btnStart", oe, a(t)), i(t, "btnChange", re, a(t)), i(t, "btnLiushui", se, a(t)), i(t, "NodeBankrupt", le, a(t)), i(t, "labelTimeOut", ue, a(t)), t._timeOut = 30, t._recordTime = 0, t._recordCountTime = 0, t._redDotView = {}, t
                }
                n(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {
                    this.addModelListener(g.NOTIFY_ROOM_LOGIN, this.onLoginSucc), this.addModelListener(g.NOTIFY_RECONNECT_SUCCESS, this.onReconnectSucc), this.addModelListener(g.GAME_LOGOUT, this.onLogout), this.addModelListener(N.VIEW_BROADCAST_PLAYER_ENTER, this.onPlayerInto), this.addModelListener(N.VIEW_BROADCAST_PLAYER_EXIT, this.onExitRoom), this.addModelListener(N.VIEW_BROADCAST_PLAYER_READY, this.onPlayerReady), this.addModelListener(g.VIEW_BROADCAST_GAME_START, this.onGameStart), this.addModelListener(g.VIEW_BROADCAST_GAME_OVER, this.onGameOver), this.addModelListener(N.EXITS_SETTLE_VIEW, this.onExitSettle), this.addModelListener(N.CHANGE_TABLE, this.onClickChangeTableBtn), this.addModelListener(T.NOTIFY_UPDATE_RED_DOT, this.refreshRedDot), this.addModelListener(N.NEXT_GAME_OPERATION, this.onReqReady), this.addModelListener(N.UPDATE_OPERATION_RESULT, this.onOperationResult), this.addModelListener(N.SHOW_TING_VIEW, this.onShowTingView), this.addModelListener(N.HIDE_TING_VIEW, this.onHideTingView), this.addModelListener(g.NOTIFY_CHANGETABLE_READY, this.onChangeTable), this.addModelListener(T.BROADCAST_REALTIME_HU_INFO, this.onGameRealTimeHuInfo), this.addModelListener(g.NOTIFY_BANKRUP_GIVEUP, this.onShowBankruptGift), this.addModelListener(g.SYS_SHOW_OR_HIDE, this.processApplicationActions), this.addModelListener(T.VIEW_BROADCAST_TO_WAIT_USER_GIVE_UP_RESULT, this.onUserGiveUpReslut)
                }, o.onLoad = function() {
                    this.getGameComp(), this.timeLayout.active = !1, this._updateStartBtnActive(!1, "onLoad"), this.updateChangeBtnActive(!1), this.huTipBtn.active = !1, this.nodeTing.active = !1, this.showTingBtn(!!b.TingLimitBtn), this.initData(), this.refreshRedDot(), _.User.LoginRoomState && this._updateBtns(), this._checkChatValid(!0), this._checkGameLiuShuiValid(), this.doGameCompFun("loadExtendMenu", this.node), this.showHuTipByFirstEnter()
                }, o.showTingBtn = function(e) {
                    _.SelectGame.isInPrivateRoom() || (this.btnTingLimit.active = e)
                }, o.getGameComp = function() {
                    null == this.node && (this.node = f.create_2DNode());
                    var e = this.node.getComponent("GameComponent");
                    return e || (this.node.addComponent("GameComponent"), "function" == typeof(e = this.node.getComponent("GameComponent")).setDelegate && e.setDelegate(this)), e
                }, o.doGameCompFun = function(e) {
                    var t = this.getGameComp();
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                        return t[e].apply(t, i)
                    }
                }, o.start = function() {}, o._updateChatStatus = function(e) {
                    _.SelectGame.isInMatchRoom() ? this.btnStart.active = !1 : this.btnStart.active = e
                }, o._updateStartBtnActive = function(e, t) {
                    this._updateChatStatus(e), console.log("开始游戏按钮状态：", e, t)
                }, o.updateChangeBtnActive = function(e) {
                    var t = this.doGameCompFun("checkCanChangeTable", e);
                    f.isNotNull(t) && (e = t), this.btnChange.active = e
                }, o.initData = function() {
                    this._redDotView = {}
                }, o.onReconnectSucc = function() {
                    this.timeLayout.active = !1, this._updateStartBtnActive(!1, "onReconnectSucc"), this.updateChangeBtnActive(!1), this._checkChatValid(!0)
                }, o.onLogout = function() {
                    this._checkCanShowMneus() && (this._updateStartBtnActive(!0, "onLogout"), this.updateChangeBtnActive(!0))
                }, o.onLoginSucc = function() {
                    this._updateBtns()
                }, o._updateBtns = function() {
                    var e, t;
                    _.SelectGame.isInMatchRoom() || _.SelectGame.isInPrivateRoom() || (P.getInstance().getMyPlayerInfo() ? null != (e = _.Desk) && e.isPlayIng() ? (this._updateStartBtnActive(!1, "_updateBtns"), this.updateChangeBtnActive(!1)) : (this._updateStartBtnActive(!P.getInstance().getMyPlayerInfo().isReady, "_updateBtns"), this.updateChangeBtnActive(!(null != (t = _.Desk) && t.isPlayIng()))) : console.log("找不到用户信息"))
                }, o.onPlayerInto = function(e, t) {
                    O.getInstance().playEffect(R.Comein), t == _.User.getUserMid() && this._checkChatValid(!0)
                }, o._checkGameLiuShuiValid = function() {
                    _.SelectGame.isNormalRoom() && this.doGameCompFun("isShowLiuShui") && (this.btnLiushui.active = !0)
                }, o._checkChatValid = function(e) {
                    _.SelectGame.isInMatchRoom() && (e = !1), this.btnChat.active = e
                }, o.onExitRoom = function(e, t) {
                    O.getInstance().playEffect(R.Leave)
                }, o.onClickChat = function(e) {
                    O.getInstance().playEffect(R.CommClick);
                    var t = {
                        chatConfig: D
                    };
                    _.SelectGame.isInPrivateRoom() ? E.getInstance().reportClickEvent("room_4") : E.getInstance().reportClickEvent("room_12"), I.dispatch(g.VIEW_UI_OPEN, v.GameLandScapeChat, t)
                }, o.onClickStart = function(e) {
                    var t;
                    O.getInstance().playEffect(R.CommClick), null != (t = _.Desk) && t.checkLevelValid() && I.dispatch(N.NEXT_GAME_OPERATION, {
                        isSeqReady: !0
                    })
                }, o.onPlayerReady = function(e, t) {
                    O.getInstance().playEffect(R.Ready), t && t == _.User.getUserMid() && this._updateStartBtnActive(!1, "onPlayerReady")
                }, o.onGameStart = function(e) {
                    O.getInstance().playEffect(R.Gamestart), this._updateStartBtnActive(!1, "onGameStart"), this.updateChangeBtnActive(!1), this.showTingBtn(!!b.TingLimitBtn)
                }, o.onGameOver = function(e) {
                    I.dispatch(g.VIEW_UI_CLOSE, v.GameLandScapeChat, "private"), _.PrivateData.clearChatHistoryData(), this.huTipBtn.active = !1, this.labelTimeOut.unscheduleAllCallbacks(), this.NodeBankrupt.active = !1
                }, o.onExitSettle = function(e) {
                    this._checkCanShowMneus() && (this._updateStartBtnActive(!0, "onExitSettle"), this.updateChangeBtnActive(!0))
                }, o._checkCanShowMneus = function() {
                    var e;
                    return !(_.SelectGame.isInMatchRoom() || _.SelectGame.isInPrivateRoom() || null != (e = _.Desk) && e.isPlayIng())
                }, o.refreshRedDot = function(e, t) {
                    if (void 0 === t && (t = null), null == t)
                        for (var n in this._redDotView) {
                            var i = this._redDotView[n].getChildByName("img_dot");
                            i && (i.active = _.RedDot.hasRedDot(n, n))
                        } else {
                            if (null == this._redDotView[t]) return;
                            var a = this._redDotView[t].getChildByName("img_dot");
                            a && (a.active = _.RedDot.hasRedDot(t, t))
                        }
                }, o.onReqReady = function() {}, o.onClickChangeTableBtn = function() {
                    P.getInstance().updatePlayerReadyStatus(_.User.getUserMid(), 0), O.getInstance().playEffect(R.CommClick), _.Desk.checkLevelValid() && (this._updateStartBtnActive(!0, "onClickChangeTableBtn"), I.dispatch(T.NET_REQ_GAME_CHANGE_DESK, !0))
                }, o.onClickTingLimit = function(e) {
                    I.dispatch(g.VIEW_UI_OPEN, G.GameHuRequirement)
                }, o.onClickTing = function(e) {
                    var t = this;
                    O.getInstance().playEffect(R.CommClick);
                    var n = S.getInstance().tingInfos;
                    f.table_isEmpty(n) || this.nodeTing.active || (this.showTingView(n), u.stopAllByTarget(this.nodeTing), d(this.nodeTing).delay(3).call((function() {
                        t.hideTingView()
                    })).start())
                }, o.onOperationResult = function() {
                    if (!this.doGameCompFun("hidTinTip")) {
                        var e = S.getInstance().tingInfos;
                        this.huTipBtn.active = !f.table_isEmpty(e), b.TingLimitBtn && this.showTingBtn(f.table_isEmpty(e))
                    }
                }, o.onShowTingView = function(e, t) {
                    var n = y.getInstance().tingInfosMap;
                    if (!f.table_isEmpty(n)) {
                        var i = n[t];
                        f.table_isEmpty(i) || this.showTingView(i.info)
                    }
                }, o.onHideTingView = function(e) {
                    this.hideTingView()
                }, o.showTingView = function(e) {
                    for (var t = this.nodeTingView.children, n = Math.max(t.length, e.length), i = 0, a = 0; a < n; a++)
                        if (t[a]) e[a] ? (i += e[a].remain, this.setTingItem(t[a], e[a]), t[a].active = !0) : t[a].active = !1;
                        else {
                            var o = c(this.nodeTingItem);
                            i += e[a].remain, this.setTingItem(o, e[a]), this.nodeTingView.addChild(o)
                        } this.labelTingNum.string = String(i), this.nodeTing.active = !0
                }, o.setTingItem = function(e, t) {
                    e.getChildByName("LabelBei").getComponent(h).string = f.string_format("<color=#E62832>{0}</color><color=#A06D4E>倍</color>", t.totalBei), e.getChildByName("LabelZhang").getComponent(h).string = f.string_format("<color=#E62832>{0}</color><color=#A06D4E>张</color>", t.remain), e.getComponentInChildren(L).setCardByte(t.card)
                }, o.hideTingView = function() {
                    this.nodeTing.active = !1
                }, o.onChangeTable = function() {
                    P.getInstance().updatePlayerReadyStatus(_.User.getUserMid(), 0)
                }, o.onGameRealTimeHuInfo = function(e, t) {
                    this.doGameCompFun("checkGameMenuByHuInfo", t)
                }, o.onUserGiveUpReslut = function(e, t) {
                    1 == t.isGiveUp && t.userId == _.User.getUserMid() && this.updateChangeBtnActive(!0)
                }, o.onClickLiushui = function() {
                    I.dispatch(g.VIEW_UI_OPEN, G.GameLiuShui)
                }, o.onShowBankruptGift = function(e, t, n) {
                    var i = this;
                    this.NodeBankrupt.active = t, this.labelTimeOut.unscheduleAllCallbacks(), t && (this._timeOut = n || 30, this.labelTimeOut.string = "(" + this._timeOut + "s)", this.labelTimeOut.schedule((function() {
                        i._refreshGiveUpTime()
                    }), 1, this._timeOut, 1))
                }, o._refreshGiveUpTime = function() {
                    if (this._timeOut--, this._timeOut <= 0) return console.log("破产礼包倒计时结束"), this.labelTimeOut.unscheduleAllCallbacks(), I.dispatch(g.NOTIFY_BANKRUPGIFT_COUNTDOWN_TIMEOUT), void(this.NodeBankrupt.active = !1);
                    console.log("破产礼包倒计时结束 _refreshGiveUpTime", this._timeOut), I.dispatch(g.NOTIFY_BANKRUPGIFT_COUNTDOWN, this._timeOut), this.labelTimeOut.string = "(" + this._timeOut + "s)"
                }, o.onClickBuyBankruptGift = function(e) {
                    I.dispatch(g.VIEW_UI_OPEN, G.GameBankruptGiftPrefab, {
                        time: this._timeOut
                    })
                }, o.onClickGiveUp = function(e) {
                    I.dispatch(g.NOTIFY_BANKRUPGIFT_IS_GIVEUP, 1)
                }, o.onDestroy = function() {
                    u.stopAllByTarget(this.nodeTing), I.dispatch(g.VIEW_UI_CLOSE, v.GameLandScapeChat)
                }, o.processApplicationActions = function(e, t) {
                    if (console.log("[gameMenu前后台事件]:" + (t == p.SHOW ? "前台" : "后台")), t == p.SHOW) {
                        if (this._recordTime && this._timeOut > 0) {
                            var n = f.time() - this._recordTime;
                            console.log("[gameMenu前后台事件]:time " + n), this._timeOut - n > 0 && (this._timeOut -= n, this.onShowBankruptGift(null, this.NodeBankrupt.active, this._timeOut), this._recordTime = 0)
                        }
                    } else t == p.HIDE && this._timeOut > 0 && (this._recordTime = f.time(), this._recordCountTime = this._timeOut, this.labelTimeOut.unscheduleAllCallbacks())
                }, o.showHuTipByFirstEnter = function() {
                    var e = this;
                    if (console.log("首次胡牌提示 GameRuleConfig['TingLimitBtn']", !!b.TingLimitBtn), !_.SelectGame.isInMatchRoom() && !_.SelectGame.isInPrivateRoom() && b.TingLimitBtn) {
                        var t, n = _.SelectGame.getCurRoomInfo();
                        t = f.isNotNull(n) && f.isNotNull(null == n ? void 0 : n.play_mode) ? null == n ? void 0 : n.play_mode : _.SelectGame.getDefaultPlayMode(_.SelectGame.getCurGameId());
                        var i = f.string_format(m.User_HuPai_First_Show_Status, _.User.getUserMid(), _.SelectGame.getCurGameId(), t),
                            a = C.get(i, 0);
                        console.log("首次胡牌提示 storeKey", i, a), 0 == a && (this.addSchedulerOnce(.5, (function() {
                            e.onClickTingLimit(null)
                        })), C.set(i, 1))
                    }
                }, t
            }(A)).prototype, "btnChat", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), K = t(Q.prototype, "huTipBtn", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), $ = t(Q.prototype, "nodeTing", [H], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ee = t(Q.prototype, "btnTingLimit", [F], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), te = t(Q.prototype, "nodeTingView", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ne = t(Q.prototype, "nodeTingItem", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ie = t(Q.prototype, "labelTingNum", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ae = t(Q.prototype, "timeLayout", [W], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), oe = t(Q.prototype, "btnStart", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), re = t(Q.prototype, "btnChange", [Z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), se = t(Q.prototype, "btnLiushui", [X], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), le = t(Q.prototype, "NodeBankrupt", [J], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ue = t(Q.prototype, "labelTimeOut", [j], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Y = Q)) || Y) || Y)), o._RF.pop()
        }
    }
}))