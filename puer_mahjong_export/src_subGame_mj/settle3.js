System.register("chunks:///_virtual/settle3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./SpriteLoad.ts", "./DelegateComponent.ts", "./EventManager.ts", "./BaseComponent.ts", "./Platform.ts", "./AppControler.ts", "./gameCommonRes.ts", "./SubGameConfig.ts", "./RoomMgr6.ts", "./SettleMgr3.ts", "./FXJEvent3.ts", "./FXJRes3.ts", "./FXJSound3.ts", "./GameEvent6.ts", "./GameRuleConfig4.ts", "./SettleItem3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f, C, E, S, A, I, G, y, v, P, T, b, O, R, M, N;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.SpriteAtlas, u = e.Node, l = e.Sprite
        }, function(e) {
            d = e.Utils
        }, function(e) {
            c = e.GCache
        }, function(e) {
            h = e.AppEvent
        }, function(e) {
            p = e.GAMETYPE
        }, function(e) {
            m = e.default
        }, function(e) {
            _ = e.DelegateComponent
        }, function(e) {
            g = e.EventManager
        }, function(e) {
            f = e.BaseComponent
        }, function(e) {
            C = e.Platform
        }, function(e) {
            E = e.AppControler
        }, function(e) {
            S = e.GameCommonUuid
        }, function(e) {
            A = e.SubGameConfig
        }, function(e) {
            I = e.RoomMgr
        }, function(e) {
            G = e.SettleMgr, y = e.SettleTypeConfig
        }, function(e) {
            v = e.FXJEvent
        }, function(e) {
            P = e.FXJRes, T = e.FXJUIID
        }, function(e) {
            b = e.GameSound, O = e.FXJSound
        }, function(e) {
            R = e.GameEvent
        }, function(e) {
            M = e.GameRuleConfig
        }, function(e) {
            N = e.SettleItem
        }],
        execute: function() {
            var U, D, L, B, w, k, H, x, F, V, J, j, W, z, X, Z, Y, Q, q, K, $, ee, te, ne, ae, ie, oe, re, se, ue;
            e({
                Gender: void 0,
                VictoryStatus: void 0
            }), o._RF.push({}, "62b84dMzz5M3pM2Rleneg/w", "settle", void 0);
            var le, de, ce = r.ccclass,
                he = r.property,
                pe = r.menu;
            ! function(e) {
                e.Male = "xiaobo", e.Female = "xiaoya"
            }(le || (le = e("Gender", {}))),
            function(e) {
                e.Win = "win", e.Fail = "fail"
            }(de || (de = e("VictoryStatus", {}))), e("settle", (U = ce("settle"), D = pe("prefab/subGame/mj/settle"), L = he(s), B = he(u), w = he(u), k = he(u), H = he(u), x = he(m), F = he(l), V = he(u), J = he(u), j = he({
                tooltip: "截屏按钮",
                type: u
            }), W = he({
                tooltip: "长按按钮",
                type: u
            }), z = he({
                tooltip: "以小博大提示",
                type: u
            }), X = he(u), U(Z = D((Q = t((Y = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "atlas", Q, i(t)), a(t, "btnBack", q, i(t)), a(t, "btnAD", K, i(t)), a(t, "btnShare", $, i(t)), a(t, "mask", ee, i(t)), a(t, "bg", te, i(t)), a(t, "title_bg", ne, i(t)), a(t, "btnAgain", ae, i(t)), a(t, "btnChange", ie, i(t)), a(t, "btnAlbum", oe, i(t)), a(t, "btnLongPress", re, i(t)), a(t, "roiTips", se, i(t)), a(t, "itemNode", ue, i(t)), t._moneyResKey = {
                        "+": "+",
                        "-": "-",
                        ".": ".",
                        "分": "fen",
                        "万": "wan",
                        "亿": "yi",
                        0: "0",
                        1: "1",
                        2: "2",
                        3: "3",
                        4: "4",
                        5: "5",
                        6: "6",
                        7: "7",
                        8: "8",
                        9: "9"
                    }, t.titleMap = new Map, t
                }
                n(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {
                    this.addModelListener(h.NOTIFY_DISMISS_GAME, this._onCloseView), this.addModelListener(R.VIEW_BROADCAST_GAME_START, this._onCloseView), this.addModelListener(h.NOTIFY_ROOM_LOGIN, this._onCloseView), this.addModelListener(h.NET_AD_GAMEOVER_REWARD, this.onGetADWard), this.addModelListener(h.LADDER_SCORE_CHANGE, this.onUpdateLadderInfo)
                }, o.onLoad = function() {
                    g.dispatch(h.VIEW_SET_LIGHT_DATA, {
                        directionalLum: 16e4
                    }), g.dispatch(h.VIEW_SET_LIGHT_DATA, {
                        directionalRotation: 15
                    }), g.dispatch(v.VIEW_DESK_BTN_MENU_UPDATE, !1, "settle")
                }, o.start = function() {
                    this.checkPrivareLastRound(), this.updateView(), C.isOHOS(!0) && (this.btnShare.active = !1, this.btnAlbum.active = !1)
                }, o.addGameComp = function() {
                    null == this.node && (this.node = d.create_2DNode()), this.node.addComponent("MJGameComponent");
                    var e = this.node.getComponent("MJGameComponent");
                    return "function" == typeof e.setDelegate && e.setDelegate(this), e
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("MJGameComponent");
                    if (t || (t = this.addGameComp()), "function" == typeof t[e]) {
                        for (var n, a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) i[o - 1] = arguments[o];
                        return (n = t)[e].apply(n, i)
                    }
                }, o.checkIsWin = function(e) {
                    null != M.GameType && M.GameType == p.XUEZHAN && (e.bWin = e.winMoney > 0 ? 1 : -1)
                }, o.updateView = function() {
                    var e = this;
                    this.roiTips.active = c.SelectGame.isNormalRoom(), this.btnLongPress.on(u.EventType.TOUCH_START, this.onTouchStart, this), this.btnLongPress.on(u.EventType.TOUCH_END, this.onTouchEnd, this), this.btnLongPress.on(u.EventType.TOUCH_CANCEL, this.onTouchCancel, this), g.dispatch(h.VIEW_UI_CLOSE, S.GameLandScapeChat);
                    var t = G.getInstance().getTotalInfoBySeatId(I.getInstance().mySeatId);
                    if (!d.isNull(t)) {
                        this.checkIsWin(t);
                        var n = -1 !== t.bWin;
                        if (G.getInstance().settleType == y.HuangZhuang) this.title_bg.spriteFrame = this.atlas.getSpriteFrame("tittleHuangZhuang");
                        else {
                            n && b.getInstance().playEffect(O.Win);
                            var a = n ? "tittleWin" : "tittleLose";
                            this.title_bg.spriteFrame = this.atlas.getSpriteFrame(a)
                        }
                        var i = n ? "settleWinBg" : "settleLoseBg";
                        this.bg.setLocalLoad(A.SubGamePackage.SUBGAME_MJ_REMOTE, "module/settle/image/" + i);
                        var o = G.getInstance().getPlayerList();
                        null == o || o.forEach((function(n) {
                            var a = e.itemNode.getChildByName("settleItem" + n.seatId);
                            a.getComponent(N).updateDataBySeatID(n.seatId, -1 !== t.bWin), a.active = !0
                        })), this._checkAd(n), this.btnBack.active = !1, this.scheduleOnce((function() {
                            e.btnBack.active = !0
                        }), 2)
                    }
                }, o.onUpdateLadderInfo = function() {
                    var e = this,
                        t = G.getInstance().getPlayerList();
                    null == t || t.forEach((function(t) {
                        var n = e.itemNode.getChildByName("settleItem" + t.seatId);
                        n && n.isValid && n.getComponent(N).updateLadderInfo()
                    }))
                }, o._checkAd = function(e) {}, o.checkPrivareLastRound = function() {
                    c.SelectGame.isInPrivateRoom() && (c.PrivateData.getPrivateRoundFinish() && (this.btnAgain.active = !1), this.btnChange.active = !1)
                }, o.onClickAlbum = function() {
                    g.dispatch(h.VIEW_SCREENSHOT_TO_ALBUM)
                }, o.onClickShare = function() {
                    c.SelectGame.isInPrivateRoom() ? E.getInstance().reportClickEvent("room_10") : E.getInstance().reportClickEvent("room_17");
                    var e = {
                        title: this.doGameCompFun("getGameShareTitle") || "这游戏最近大家都在玩，快来试试~",
                        imageUrl: P.AppCommon_Share_Friend_Comm.path
                    };
                    g.dispatch(h.EVENT_REQ_WXIN_SHARE, e)
                }, o.onClickVedio = function(e, t) {
                    C.playerAdVideo(d.handler(this, this.__doCallBackWatchADs), t)
                }, o.__doCallBackWatchADs = function(e, t) {
                    1 == e ? g.dispatch(h.REQ_AD_GAMEOVER_REWARD, JSON.parse(t)) : g.dispatch(h.SYS_TOAST_TIP, {
                        content: "看广告失败了，请稍后再尝试哦~"
                    })
                }, o.onClickChangeTable = function() {
                    c.Desk.checkLevelValid(!0) && g.dispatch(R.CHANGE_TABLE), this._onCloseView()
                }, o.onCreateNextGame = function() {
                    b.getInstance().playEffect(O.CommClick);
                    var e = this.node.getComponent(_);
                    e ? g.dispatch(R.EXITS_SETTLE_VIEW, e.getParams()) : g.dispatch(R.EXITS_SETTLE_VIEW, null), c.Desk.checkLevelValid(!0) && g.dispatch(R.NEXT_GAME_OPERATION, {
                        isSeqReady: !0
                    }), g.dispatch(v.GAME_CLOSE_POPUP, T.GameSettlePrefab)
                }, o.onCloseGame = function() {
                    g.dispatch(v.GAME_CLOSE_POPUP, T.GameSettlePrefab), b.getInstance().playEffect(O.CommClick);
                    var e = this.node.getComponent(_);
                    e ? g.dispatch(R.EXITS_SETTLE_VIEW, e.getParams()) : g.dispatch(R.EXITS_SETTLE_VIEW, null)
                }, o._onCloseView = function(e, t) {
                    void 0 === t && (t = null), b.getInstance().playEffect(O.CommClick), null != t && "loginSucc" == t.tag || g.dispatch(R.EXITS_SETTLE_VIEW, null), g.dispatch(v.GAME_CLOSE_POPUP, T.GameSettlePrefab)
                }, o.onGetADWard = function(e, t, n, a) {
                    t && this._onCloseView()
                }, o.onTouchStart = function(e) {
                    this.contentVisible(!1)
                }, o.onTouchEnd = function(e) {
                    this.contentVisible(!0)
                }, o.onTouchCancel = function(e) {
                    this.contentVisible(!0)
                }, o.contentVisible = function(e) {
                    var t;
                    this.node.getChildByName("bg").active = e, this.node.getChildByName("btnBack").active = e, null != (t = this.node.parent) && t.getChildByName("Mask") && (this.node.parent.getChildByName("Mask").active = e)
                }, o.onDestroy = function() {
                    g.dispatch(v.VIEW_DESK_BTN_MENU_UPDATE, !0, "settle"), g.dispatch(h.VIEW_SET_LIGHT_DATA, {
                        directionalLum: 2e5
                    }), g.dispatch(h.VIEW_SET_LIGHT_DATA, {
                        directionalRotation: -15
                    }), c.SelectGame.isInMatchRoom() || c.SelectGame.isInPrivateRoom() || (c.BankrupData.isMineBankrupt() && g.dispatch(h.VIEW_SHOW_BANKRUPT), c.Activity.hasPiggyBankConfig() || g.dispatch(h.NET_REQ_PIGGY_BANK_CONFIG))
                }, t
            }(f)).prototype, "atlas", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), q = t(Y.prototype, "btnBack", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), K = t(Y.prototype, "btnAD", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), $ = t(Y.prototype, "btnShare", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ee = t(Y.prototype, "mask", [H], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), te = t(Y.prototype, "bg", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ne = t(Y.prototype, "title_bg", [F], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ae = t(Y.prototype, "btnAgain", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ie = t(Y.prototype, "btnChange", [J], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), oe = t(Y.prototype, "btnAlbum", [j], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), re = t(Y.prototype, "btnLongPress", [W], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), se = t(Y.prototype, "roiTips", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ue = t(Y.prototype, "itemNode", [X], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Z = Y)) || Z) || Z)), o._RF.pop()
        }
    }
}))