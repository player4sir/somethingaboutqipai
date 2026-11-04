System.register("chunks:///_virtual/settle.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./GameRes.ts", "./SpriteLoad.ts", "./DelegateComponent.ts", "./EventManager.ts", "./BaseComponent.ts", "./Platform.ts", "./AppControler.ts", "./gameCommonRes.ts", "./RoomMgr.ts", "./SettleMgr.ts", "./FXJEvent.ts", "./FXJRes.ts", "./FXJSound.ts", "./GameEvent.ts", "./GameRuleConfig.ts", "./SettleItem.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m, C, I, A, E, v, y, S, P, T, G, O, R, N, b, D, L;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.SpriteAtlas, l = e.Node, u = e.Sprite
        }, function(e) {
            d = e.ClientInfo
        }, function(e) {
            c = e.Utils
        }, function(e) {
            h = e.GCache
        }, function(e) {
            p = e.AppEvent
        }, function(e) {
            f = e.GAMETYPE
        }, function(e) {
            _ = e.GamePackage, g = e.GameRes
        }, function(e) {
            m = e.default
        }, function(e) {
            C = e.DelegateComponent
        }, function(e) {
            I = e.EventManager
        }, function(e) {
            A = e.BaseComponent
        }, function(e) {
            E = e.Platform
        }, function(e) {
            v = e.AppControler
        }, function(e) {
            y = e.GameCommonUuid
        }, function(e) {
            S = e.RoomMgr
        }, function(e) {
            P = e.SettleMgr, T = e.SettleTypeConfig
        }, function(e) {
            G = e.FXJEvent
        }, function(e) {
            O = e.FXJUIID
        }, function(e) {
            R = e.GameSound, N = e.FXJSound
        }, function(e) {
            b = e.GameEvent
        }, function(e) {
            D = e.GameRuleConfig
        }, function(e) {
            L = e.SettleItem
        }],
        execute: function() {
            var M, U, w, B, H, F, k, V, x, W, z, Z, X, J, j, Y, Q, q, K, $, ee, te, ne, ie, ae, oe, re, se, le;
            e({
                Gender: void 0,
                VictoryStatus: void 0
            }), o._RF.push({}, "6ed80FH5gBHSpWBDqW9JZXO", "settle", void 0);
            var ue, de, ce = r.ccclass,
                he = r.property;
            ! function(e) {
                e.Male = "xiaobo", e.Female = "xiaoya"
            }(ue || (ue = e("Gender", {}))),
            function(e) {
                e.Win = "win", e.Fail = "fail"
            }(de || (de = e("VictoryStatus", {}))), e("settle", (M = ce("settle"), U = he(s), w = he(l), B = he(l), H = he(l), F = he(l), k = he(m), V = he(u), x = he(l), W = he(l), z = he({
                tooltip: "截屏按钮",
                type: l
            }), Z = he({
                tooltip: "长按按钮",
                type: l
            }), X = he(l), J = he({
                tooltip: "以小博大提示",
                type: l
            }), M((Q = t((Y = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "atlas", Q, a(t)), i(t, "btnBack", q, a(t)), i(t, "btnAD", K, a(t)), i(t, "btnShare", $, a(t)), i(t, "mask", ee, a(t)), i(t, "bg", te, a(t)), i(t, "title_bg", ne, a(t)), i(t, "btnAgain", ie, a(t)), i(t, "btnChange", ae, a(t)), i(t, "btnAlbum", oe, a(t)), i(t, "btnLongPress", re, a(t)), i(t, "itemNode", se, a(t)), i(t, "roiTips", le, a(t)), t._moneyResKey = {
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
                    this.addModelListener(p.NOTIFY_DISMISS_GAME, this._onCloseView), this.addModelListener(p.VIEW_BROADCAST_GAME_START, this._onCloseView), this.addModelListener(p.NOTIFY_ROOM_LOGIN, this._onCloseView), this.addModelListener(p.NET_AD_GAMEOVER_REWARD, this.onGetADWard), this.addModelListener(p.LADDER_SCORE_CHANGE, this.onUpdateLadderInfo)
                }, o.onLoad = function() {
                    if (I.dispatch(p.VIEW_SET_LIGHT_DATA, {
                            directionalLum: 16e4
                        }), I.dispatch(p.VIEW_SET_LIGHT_DATA, {
                            directionalRotation: 15
                        }), I.dispatch(G.VIEW_DESK_BTN_MENU_UPDATE, !1, "settle"), this.checkPrivareLastRound(), this.updateView(), E.isOHOS(!0)) {
                        this.btnShare.active = !1;
                        var e = this.btnShare.parent.getChildByName("btnAlbum");
                        e && (e.active = !1)
                    }
                }, o.addGameComp = function() {
                    null == this.node && (this.node = c.create_2DNode()), this.node.addComponent("GameComponent");
                    var e = this.node.getComponent("GameComponent");
                    return "function" == typeof e.setDelegate && e.setDelegate(this), e
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("GameComponent");
                    if (t || (t = this.addGameComp()), "function" == typeof t[e]) {
                        for (var n, i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) a[o - 1] = arguments[o];
                        return (n = t)[e].apply(n, a)
                    }
                }, o.checkIsWin = function(e) {
                    null != D.GameType && D.GameType == f.XUEZHAN && (e.bWin = e.winMoney > 0 ? 1 : -1)
                }, o.updateView = function() {
                    var e = this;
                    this.roiTips.active = h.SelectGame.isNormalRoom(), this.btnLongPress.on(l.EventType.TOUCH_START, this.onTouchStart, this), this.btnLongPress.on(l.EventType.TOUCH_END, this.onTouchEnd, this), this.btnLongPress.on(l.EventType.TOUCH_CANCEL, this.onTouchCancel, this), I.dispatch(p.VIEW_UI_CLOSE, y.GameLandScapeChat);
                    var t = P.getInstance().getTotalInfoBySeatId(S.getInstance().mySeatId);
                    if (!c.isNull(t)) {
                        this.checkIsWin(t);
                        var n = -1 !== t.bWin;
                        if (P.getInstance().settleType == T.HuangZhuang) this.title_bg.spriteFrame = this.atlas.getSpriteFrame("tittleHuangZhuang");
                        else {
                            n && R.getInstance().playEffect(N.Win);
                            var i = n ? "tittleWin" : "tittleLose";
                            this.title_bg.spriteFrame = this.atlas.getSpriteFrame(i)
                        }
                        var a = n ? "settleWinBg" : "settleLoseBg";
                        this.bg.setLocalLoad(_.GAME_REMOTE, "module/settle/image/" + a);
                        var o = P.getInstance().getPlayerList();
                        null == o || o.forEach((function(n) {
                            var i = e.itemNode.getChildByName("settleItem" + n.seatId);
                            i.getComponent(L).updateDataBySeatID(n.seatId, -1 !== t.bWin), i.active = !0
                        })), this._checkAd(n), this.btnBack.active = !1, this.scheduleOnce((function() {
                            e.btnBack.active = !0
                        }), 2), console.log("延迟显示返回按钮")
                    }
                }, o.onUpdateLadderInfo = function() {
                    var e = this,
                        t = P.getInstance().getPlayerList();
                    null == t || t.forEach((function(t) {
                        var n = e.itemNode.getChildByName("settleItem" + t.seatId);
                        n && n.isValid && n.getComponent(L).updateLadderInfo()
                    }))
                }, o._checkAd = function(e) {}, o.checkPrivareLastRound = function() {
                    h.SelectGame.isInPrivateRoom() && (h.PrivateData.getPrivateRoundFinish() && (this.btnAgain.active = !1), this.btnChange.active = !1)
                }, o.onClickAlbum = function() {
                    I.dispatch(p.VIEW_SCREENSHOT_TO_ALBUM)
                }, o.onClickShare = function() {
                    h.SelectGame.isInPrivateRoom() ? v.getInstance().reportClickEvent("room_10") : v.getInstance().reportClickEvent("room_17");
                    var e = {
                        title: d.deviceInfo.shareTitle,
                        imageUrl: g.AppCommon_Share_Friend_Comm.path
                    };
                    I.dispatch(p.EVENT_REQ_WXIN_SHARE, e)
                }, o.onClickVedio = function(e, t) {
                    E.playerAdVideo(c.handler(this, this.__doCallBackWatchADs), t)
                }, o.__doCallBackWatchADs = function(e, t) {
                    1 == e ? I.dispatch(p.REQ_AD_GAMEOVER_REWARD, JSON.parse(t)) : I.dispatch(p.SYS_TOAST_TIP, {
                        content: "广告观看失败，请重稍后再试~"
                    })
                }, o.onClickChangeTable = function() {
                    h.Desk.checkLevelValid(!0) && I.dispatch(b.CHANGE_TABLE), this._onCloseView()
                }, o.onCreateNextGame = function() {
                    R.getInstance().playEffect(N.CommClick);
                    var e = this.node.getComponent(C);
                    e ? I.dispatch(b.EXITS_SETTLE_VIEW, e.getParams()) : I.dispatch(b.EXITS_SETTLE_VIEW, null), h.Desk.checkLevelValid(!0) && I.dispatch(b.NEXT_GAME_OPERATION, {
                        isSeqReady: !0
                    }), I.dispatch(G.GAME_CLOSE_POPUP, O.GameSettlePrefab)
                }, o.onCloseGame = function() {
                    I.dispatch(G.GAME_CLOSE_POPUP, O.GameSettlePrefab), R.getInstance().playEffect(N.CommClick);
                    var e = this.node.getComponent(C);
                    e ? I.dispatch(b.EXITS_SETTLE_VIEW, e.getParams()) : I.dispatch(b.EXITS_SETTLE_VIEW, null)
                }, o._onCloseView = function(e, t) {
                    void 0 === t && (t = null), R.getInstance().playEffect(N.CommClick), null != t && "loginSucc" == t.tag || I.dispatch(b.EXITS_SETTLE_VIEW, null), I.dispatch(G.GAME_CLOSE_POPUP, O.GameSettlePrefab)
                }, o.onGetADWard = function(e, t, n, i) {
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
                    I.dispatch(G.VIEW_DESK_BTN_MENU_UPDATE, !0, "settle"), I.dispatch(p.VIEW_SET_LIGHT_DATA, {
                        directionalLum: 2e5
                    }), I.dispatch(p.VIEW_SET_LIGHT_DATA, {
                        directionalRotation: -15
                    }), h.SelectGame.isInMatchRoom() || h.SelectGame.isInPrivateRoom() || (h.BankrupData.isMineBankrupt() && I.dispatch(p.VIEW_SHOW_BANKRUPT), h.Activity.hasPiggyBankConfig() || I.dispatch(p.NET_REQ_PIGGY_BANK_CONFIG))
                }, t
            }(A)).prototype, "atlas", [U], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), q = t(Y.prototype, "btnBack", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), K = t(Y.prototype, "btnAD", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), $ = t(Y.prototype, "btnShare", [H], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ee = t(Y.prototype, "mask", [F], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), te = t(Y.prototype, "bg", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ne = t(Y.prototype, "title_bg", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ie = t(Y.prototype, "btnAgain", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ae = t(Y.prototype, "btnChange", [W], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), oe = t(Y.prototype, "btnAlbum", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), re = t(Y.prototype, "btnLongPress", [Z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), se = t(Y.prototype, "itemNode", [X], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), le = t(Y.prototype, "roiTips", [J], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), j = Y)) || j)), o._RF.pop()
        }
    }
}))