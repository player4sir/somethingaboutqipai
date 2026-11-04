System.register("chunks:///_virtual/GameMenuPrefabCtr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameConfig.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./UIConfig.ts", "./LocalStorage.ts", "./EventManager.ts", "./BaseComponent.ts", "./AppControler.ts", "./gameCommonRes.ts", "./OperationMgr3.ts", "./OperationResultMgr3.ts", "./PlayerMgr6.ts", "./FXJConstant3.ts", "./FXJEvent3.ts", "./FXJRes3.ts", "./FXJSound3.ts", "./GameEvent6.ts", "./GameRuleConfig4.ts", "./NodeCardCtr3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f, C, E, S, A, I, G, y, v, P, T, b, O, R, M, N, U, D;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, u = e.Label, l = e.Tween, d = e.tween, c = e.instantiate, h = e.RichText
        }, function(e) {
            p = e.APPState
        }, function(e) {
            m = e.Utils
        }, function(e) {
            _ = e.GCache
        }, function(e) {
            g = e.AppEvent
        }, function(e) {
            f = e.StoreKey
        }, function(e) {
            C = e.UIID
        }, function(e) {
            E = e.LocalStorage
        }, function(e) {
            S = e.EventManager
        }, function(e) {
            A = e.BaseComponent
        }, function(e) {
            I = e.AppControler
        }, function(e) {
            G = e.GameCommonUuid
        }, function(e) {
            y = e.OperationMgr
        }, function(e) {
            v = e.OperationResultMgr
        }, function(e) {
            P = e.PlayerMgr
        }, function(e) {
            T = e.FXJConstant
        }, function(e) {
            b = e.FXJEvent
        }, function(e) {
            O = e.FXJUIID
        }, function(e) {
            R = e.GameSound, M = e.FXJSound
        }, function(e) {
            N = e.GameEvent
        }, function(e) {
            U = e.GameRuleConfig
        }, function(e) {
            D = e.NodeCardCtr
        }],
        execute: function() {
            var L, B, w, k, H, x, F, V, J, j, W, z, X, Z, Y, Q, q, K, $, ee, te, ne, ae, ie, oe, re, se, ue, le, de;
            o._RF.push({}, "33188jcvJZKgrgPo5tgUmGF", "GameMenuPrefabCtr", void 0);
            var ce = r.ccclass,
                he = r.property,
                pe = r.menu;
            e("GameMenuPrefabCtr", (L = ce("GameMenuPrefabCtr"), B = pe("prefab/subGame/mj/GameMenuPrefabCtr"), w = he({
                tooltip: "聊天按钮节点",
                type: s
            }), k = he({
                tooltip: "胡牌提示",
                type: s
            }), H = he({
                tooltip: "听牌提示节点",
                type: s
            }), x = he({
                tooltip: "胡牌条件",
                type: s
            }), F = he({
                tooltip: "听牌提示节点",
                type: s
            }), V = he({
                tooltip: "听牌Item节点",
                type: s
            }), J = he({
                tooltip: "听牌数量节点",
                type: u
            }), j = he({
                tooltip: "时间节点",
                type: s
            }), W = he({
                tooltip: "开始按钮节点",
                type: s
            }), z = he({
                tooltip: "换桌按钮节点",
                type: s
            }), X = he({
                tooltip: "牌局流水按钮",
                type: s
            }), Z = he({
                tooltip: "认输充值操作按钮",
                type: s
            }), Y = he({
                tooltip: "充值倒计时",
                type: u
            }), L(Q = B((K = t((q = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "btnChat", K, i(t)), a(t, "btnTing", $, i(t)), a(t, "nodeTing", ee, i(t)), a(t, "btnTingLimit", te, i(t)), a(t, "nodeTingView", ne, i(t)), a(t, "nodeTingItem", ae, i(t)), a(t, "labelTingNum", ie, i(t)), a(t, "timeLayout", oe, i(t)), a(t, "btnStart", re, i(t)), a(t, "btnChange", se, i(t)), a(t, "btnLiushui", ue, i(t)), a(t, "NodeBankrupt", le, i(t)), a(t, "labelTimeOut", de, i(t)), t._timeOut = 30, t._timeHandler = null, t._recordTime = 0, t._recordCountTime = 0, t._redDotView = {}, t
                }
                n(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {
                    this.addModelListener(g.NOTIFY_ROOM_LOGIN, this.onLoginSucc), this.addModelListener(g.NOTIFY_RECONNECT_SUCCESS, this.onReconnectSucc), this.addModelListener(g.GAME_LOGOUT, this.onLogout), this.addModelListener(N.VIEW_BROADCAST_PLAYER_ENTER, this.onPlayerInto), this.addModelListener(N.VIEW_BROADCAST_PLAYER_EXIT, this.onExitRoom), this.addModelListener(N.VIEW_BROADCAST_PLAYER_READY, this.onPlayerReady), this.addModelListener(N.VIEW_BROADCAST_GAME_START, this.onGameStart), this.addModelListener(N.VIEW_BROADCAST_GAME_OVER, this.onGameOver), this.addModelListener(N.EXITS_SETTLE_VIEW, this.onExitSettle), this.addModelListener(N.CHANGE_TABLE, this.onClickChangeTableBtn), this.addModelListener(b.NOTIFY_UPDATE_RED_DOT, this.refreshRedDot), this.addModelListener(N.NEXT_GAME_OPERATION, this.onReqReady), this.addModelListener(N.UPDATE_OPERATION_RESULT, this.onOperationResult), this.addModelListener(N.SHOW_TING_VIEW, this.onShowTingView), this.addModelListener(N.HIDE_TING_VIEW, this.onHideTingView), this.addModelListener(b.NOTIFY_CHANGETABLE_READY, this.onChangeTable), this.addModelListener(b.BROADCAST_REALTIME_HU_INFO, this.onGameRealTimeHuInfo), this.addModelListener(g.NOTIFY_BANKRUP_GIVEUP, this.onShowBankruptGift), this.addModelListener(g.SYS_SHOW_OR_HIDE, this.processApplicationActions), this.addModelListener(b.VIEW_BROADCAST_TO_WAIT_USER_GIVE_UP_RESULT, this.onUserGiveUpReslut)
                }, o.onLoad = function() {
                    this.getGameComp(), this.timeLayout.active = !1, this._updateStartBtnActive(!1, "onLoad"), this.updateChangeBtnActive(!1), this.btnTing.active = !1, this.nodeTing.active = !1, this.showTingBtn(!!U.TingLimitBtn), this.initData(), this.refreshRedDot(), _.User.LoginRoomState && this._updateBtns(), this._checkChatValid(!0), this._checkGameLiuShuiValid(), this.doGameCompFun("loadExtendMenu", this.node), this.showHuTipByFirstEnter()
                }, o.showTingBtn = function(e) {
                    _.SelectGame.isInPrivateRoom() || (this.btnTingLimit.active = e)
                }, o.getGameComp = function() {
                    null == this.node && (this.node = m.create_2DNode());
                    var e = this.node.getComponent("MJGameComponent");
                    return e || (this.node.addComponent("MJGameComponent"), "function" == typeof(e = this.node.getComponent("MJGameComponent")).setDelegate && e.setDelegate(this)), e
                }, o.doGameCompFun = function(e) {
                    var t = this.getGameComp();
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
                        return t[e].apply(t, a)
                    }
                }, o.start = function() {}, o._updateChatStatus = function(e) {
                    _.SelectGame.isInMatchRoom() ? this.btnStart.active = !1 : this.btnStart.active = e
                }, o._updateStartBtnActive = function(e, t) {
                    this._updateChatStatus(e), console.log("开始游戏按钮状态：", e, t)
                }, o.updateChangeBtnActive = function(e) {
                    var t = this.doGameCompFun("checkCanChangeTable", e);
                    m.isNotNull(t) && (e = t), this.btnChange.active = e
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
                    R.getInstance().playEffect(M.Comein), t == _.User.getUserMid() && this._checkChatValid(!0)
                }, o._checkGameLiuShuiValid = function() {
                    _.SelectGame.isNormalRoom() && this.doGameCompFun("isShowLiuShui") && (this.btnLiushui.active = !0)
                }, o._checkChatValid = function(e) {
                    _.SelectGame.isInMatchRoom() && (e = !1), this.btnChat.active = e
                }, o.onExitRoom = function(e, t) {
                    R.getInstance().playEffect(M.Leave)
                }, o.onClickChat = function(e) {
                    R.getInstance().playEffect(M.CommClick);
                    var t = {
                        chatConfig: T.ChatText
                    };
                    _.SelectGame.isInPrivateRoom() ? I.getInstance().reportClickEvent("room_4") : I.getInstance().reportClickEvent("room_12"), S.dispatch(g.VIEW_UI_OPEN, G.GameLandScapeChat, t)
                }, o.onClickStart = function(e) {
                    var t;
                    R.getInstance().playEffect(M.CommClick), null != (t = _.Desk) && t.checkLevelValid() && S.dispatch(N.NEXT_GAME_OPERATION, {
                        isSeqReady: !0
                    })
                }, o.onPlayerReady = function(e, t) {
                    R.getInstance().playEffect(M.Ready), t && t == _.User.getUserMid() && this._updateStartBtnActive(!1, "onPlayerReady")
                }, o.onGameStart = function(e) {
                    R.getInstance().playEffect(M.Gamestart), this._updateStartBtnActive(!1, "onGameStart"), this.updateChangeBtnActive(!1), this.showTingBtn(!!U.TingLimitBtn)
                }, o.onGameOver = function(e) {
                    S.dispatch(g.VIEW_UI_CLOSE, G.GameLandScapeChat, "private"), _.PrivateData.clearChatHistoryData(), this.btnTing.active = !1, clearInterval(this._timeHandler), this._timeHandler = null, this.NodeBankrupt.active = !1
                }, o.onExitSettle = function(e) {
                    this._checkCanShowMneus() && (this._updateStartBtnActive(!0, "onExitSettle"), this.updateChangeBtnActive(!0))
                }, o._checkCanShowMneus = function() {
                    var e;
                    return !(_.SelectGame.isInMatchRoom() || _.SelectGame.isInPrivateRoom() || null != (e = _.Desk) && e.isPlayIng())
                }, o.refreshRedDot = function(e, t) {
                    if (void 0 === t && (t = null), null == t)
                        for (var n in this._redDotView) {
                            var a = this._redDotView[n].getChildByName("img_dot");
                            a && (a.active = _.RedDot.hasRedDot(n, n))
                        } else {
                            if (null == this._redDotView[t]) return;
                            var i = this._redDotView[t].getChildByName("img_dot");
                            i && (i.active = _.RedDot.hasRedDot(t, t))
                        }
                }, o.onReqReady = function() {}, o.onClickChangeTableBtn = function() {
                    P.getInstance().updatePlayerReadyStatus(_.User.getUserMid(), 0), R.getInstance().playEffect(M.CommClick), _.Desk.checkLevelValid() && (this._updateStartBtnActive(!0, "onClickChangeTableBtn"), S.dispatch(b.NET_REQ_GAME_CHANGE_DESK, !0))
                }, o.onClickTingLimit = function(e) {
                    S.dispatch(g.VIEW_UI_OPEN, O.GameHuRequirement)
                }, o.onClickTing = function(e) {
                    var t = this;
                    R.getInstance().playEffect(M.CommClick);
                    var n = v.getInstance().tingInfos;
                    m.table_isEmpty(n) || this.nodeTing.active || (this.showTingView(n), l.stopAllByTarget(this.nodeTing), d(this.nodeTing).delay(3).call((function() {
                        t.hideTingView()
                    })).start())
                }, o.onOperationResult = function() {
                    if (!this.doGameCompFun("hidTinTip")) {
                        var e = v.getInstance().tingInfos;
                        this.btnTing.active = !m.table_isEmpty(e), U.TingLimitBtn && this.showTingBtn(m.table_isEmpty(e))
                    }
                }, o.onShowTingView = function(e, t) {
                    this.print("onShowTingView", t);
                    var n = y.getInstance().tingInfosMap;
                    if (!m.table_isEmpty(n)) {
                        var a = n[t];
                        m.table_isEmpty(a) || this.showTingView(a.info)
                    }
                }, o.onHideTingView = function(e) {
                    this.hideTingView()
                }, o.showTingView = function(e) {
                    this.print("showTingView", e);
                    for (var t = this.nodeTingView.children, n = Math.max(t.length, e.length), a = 0, i = 0; i < n; i++)
                        if (t[i]) e[i] ? (a += e[i].remain, this.setTingItem(t[i], e[i]), t[i].active = !0) : t[i].active = !1;
                        else {
                            var o = c(this.nodeTingItem);
                            a += e[i].remain, this.setTingItem(o, e[i]), this.nodeTingView.addChild(o)
                        } this.labelTingNum.string = String(a), this.nodeTing.active = !0
                }, o.setTingItem = function(e, t) {
                    this.print("setTingItem", t), e.getChildByName("LabelBei").getComponent(h).string = m.string_format("<color=#E62832>{0}</color><color=#A06D4E>倍</color>", t.totalBei), e.getChildByName("LabelZhang").getComponent(h).string = m.string_format("<color=#E62832>{0}</color><color=#A06D4E>张</color>", t.remain), e.getComponentInChildren(D).setCardByte(t.card)
                }, o.hideTingView = function() {
                    this.nodeTing.active = !1
                }, o.onChangeTable = function() {
                    P.getInstance().updatePlayerReadyStatus(_.User.getUserMid(), 0)
                }, o.onGameRealTimeHuInfo = function(e, t) {
                    this.doGameCompFun("checkGameMenuByHuInfo", t)
                }, o.onUserGiveUpReslut = function(e, t) {
                    1 == t.isGiveUp && t.userId == _.User.getUserMid() && this.updateChangeBtnActive(!0)
                }, o.onClickLiushui = function() {
                    S.dispatch(g.VIEW_UI_OPEN, O.GameLiuShui)
                }, o.onShowBankruptGift = function(e, t, n) {
                    var a = this;
                    this.NodeBankrupt.active = t, this.labelTimeOut.unscheduleAllCallbacks(), t && (this._timeOut = n || 30, this.labelTimeOut.string = "(" + this._timeOut + "s)", this.labelTimeOut.schedule((function() {
                        a._refreshGiveUpTime()
                    }), 1, this._timeOut, 1))
                }, o._refreshGiveUpTime = function() {
                    if (this._timeOut--, this._timeOut <= 0) return console.log("破产礼包倒计时结束"), this.labelTimeOut.unscheduleAllCallbacks(), S.dispatch(g.NOTIFY_BANKRUPGIFT_COUNTDOWN_TIMEOUT), void(this.NodeBankrupt.active = !1);
                    console.log("破产礼包倒计时结束 _refreshGiveUpTime", this._timeOut), S.dispatch(N.NOTIFY_BANKRUPGIFT_COUNTDOWN, this._timeOut), this.labelTimeOut.string = "(" + this._timeOut + "s)"
                }, o.onClickBuyBankruptGift = function(e) {
                    S.dispatch(g.VIEW_UI_OPEN, C.GameBankruptGiftPrefab, {
                        time: this._timeOut
                    })
                }, o.onClickGiveUp = function(e) {
                    S.dispatch(g.NOTIFY_BANKRUPGIFT_IS_GIVEUP, 1)
                }, o.onDestroy = function() {
                    l.stopAllByTarget(this.nodeTing), S.dispatch(g.VIEW_UI_CLOSE, G.GameLandScapeChat), clearInterval(this._timeHandler), this._timeHandler = null
                }, o.processApplicationActions = function(e, t) {
                    if (console.log("[gameMenu前后台事件]:" + (t == p.SHOW ? "前台" : "后台")), t == p.SHOW) {
                        if (this._recordTime) {
                            var n = m.time() - this._recordTime;
                            if (console.log("[gameMenu前后台事件]:time " + n), n > 0) {
                                var a = this._recordCountTime - this._timeOut;
                                if (console.log("[gameMenu前后台事件]:_disTime " + a), n - 1 > a) {
                                    var i = this._timeOut - (n - 1 - a);
                                    this._timeOut = i > 0 ? i : 0, this._recordTime = 0
                                }
                            }
                        }
                    } else t == p.HIDE && this._timeHandler && (this._recordTime = m.time(), this._recordCountTime = this._timeOut)
                }, o.showHuTipByFirstEnter = function() {
                    var e = this;
                    if (console.log("首次胡牌提示 GameRuleConfig['TingLimitBtn']", !!U.TingLimitBtn), !_.SelectGame.isInMatchRoom() && !_.SelectGame.isInPrivateRoom() && U.TingLimitBtn) {
                        var t, n = _.SelectGame.getCurRoomInfo();
                        t = m.isNotNull(n) && m.isNotNull(null == n ? void 0 : n.play_mode) ? null == n ? void 0 : n.play_mode : _.SelectGame.getDefaultPlayMode(_.SelectGame.getCurGameId());
                        var a = m.string_format(f.User_HuPai_First_Show_Status, _.User.getUserMid(), _.SelectGame.getCurGameId(), t),
                            i = E.get(a, 0);
                        console.log("首次胡牌提示 storeKey", a, i), 0 == i && (this.addSchedulerOnce(.5, (function() {
                            e.onClickTingLimit(null)
                        })), E.set(a, 1))
                    }
                }, t
            }(A)).prototype, "btnChat", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), $ = t(q.prototype, "btnTing", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ee = t(q.prototype, "nodeTing", [H], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), te = t(q.prototype, "btnTingLimit", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ne = t(q.prototype, "nodeTingView", [F], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ae = t(q.prototype, "nodeTingItem", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ie = t(q.prototype, "labelTingNum", [J], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), oe = t(q.prototype, "timeLayout", [j], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), re = t(q.prototype, "btnStart", [W], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), se = t(q.prototype, "btnChange", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ue = t(q.prototype, "btnLiushui", [X], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), le = t(q.prototype, "NodeBankrupt", [Z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), de = t(q.prototype, "labelTimeOut", [Y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Q = q)) || Q) || Q)), o._RF.pop()
        }
    }
}))