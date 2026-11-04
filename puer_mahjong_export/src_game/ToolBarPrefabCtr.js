System.register("chunks:///_virtual/ToolBarPrefabCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameConfig.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./UIConfig.ts", "./EventManager.ts", "./JumpHelper.ts", "./BaseComponent.ts", "./PlayerMgr.ts", "./FXJEvent.ts", "./FXJRes.ts", "./FXJSound.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m, C, I, A, E;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node
        }, function(e) {
            l = e.GameSwitchConf
        }, function(e) {
            u = e.Utils
        }, function(e) {
            d = e.GCache
        }, function(e) {
            c = e.AppEvent
        }, function(e) {
            h = e.GConstants
        }, function(e) {
            p = e.UIID
        }, function(e) {
            f = e.EventManager
        }, function(e) {
            _ = e.JumpHelper
        }, function(e) {
            g = e.BaseComponent
        }, function(e) {
            m = e.PlayerMgr
        }, function(e) {
            C = e.FXJEvent
        }, function(e) {
            I = e.FXJUIID
        }, function(e) {
            A = e.GameSound, E = e.FXJSound
        }],
        execute: function() {
            var v, y, S, P, T, G, O, R, N, b, D, L;
            o._RF.push({}, "afbc8gbIzpIbZpTMkJEof91", "ToolBarPrefabCtr", void 0);
            var M = r.ccclass,
                U = r.property,
                w = r.menu;
            e("ToolBarPrefabCtr", (v = M("ToolBarPrefabCtr"), y = w("prefab/game/ToolBarPrefabCtr"), S = U({
                tooltip: "遮罩节点",
                type: s
            }), P = U({
                tooltip: "更多菜单",
                type: s
            }), T = U({
                tooltip: " 托管按钮",
                type: s
            }), G = U({
                tooltip: "商城按钮",
                type: s
            }), v(O = y((N = t((R = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "nodeMask", N, a(t)), i(t, "moreMenu", b, a(t)), i(t, "btnAI", D, a(t)), i(t, "btnShop", L, a(t)), t
                }
                n(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {}, o.onLoad = function() {
                    this.hideMaskNode()
                }, o.hideMaskNode = function() {
                    f.dispatch(C.VIEW_DESK_BTN_MENU_UPDATE, !1);
                    var e = this.node.parent.getChildByName("Mask");
                    e && (e.active = !1), this.updateMenus()
                }, o.updateMenus = function() {
                    var e;
                    d.SelectGame.isInPrivateRoom() ? this.btnAI.active = !1 : this.btnAI.active = null == (e = d.Desk) ? void 0 : e.isPlayIng(), l.ShopFlag || (this.btnShop.active = !1)
                }, o.start = function() {}, o.exitsSettleView = function() {}, o.onGameStart = function() {
                    d.SelectGame.isInPrivateRoom()
                }, o.onCloseClick = function(e) {
                    A.getInstance().playEffect(E.CommClick), this._hideMoreMenu()
                }, o.onTuoGuanClick = function(e) {
                    var t;
                    A.getInstance().playEffect(E.CommClick), f.dispatch(C.NET_REQ_GAME_USER_AI, !(null != (t = m.getInstance().getMyPlayerInfo()) && t.isAi)), this._hideMoreMenu()
                }, o.onSettingClick = function(e) {
                    A.getInstance().playEffect(E.CommClick), f.dispatch(C.VIEW_UI_OPEN, I.GameSettingPrefab, null, null, null, !0), this._hideMoreMenu()
                }, o.onClickMore = function(e) {
                    A.getInstance().playEffect(E.CommClick), this._hideMoreMenu()
                }, o.onClickRule = function() {
                    f.dispatch(C.VIEW_UI_OPEN, p.GameRuleDialog, {
                        scale: .85
                    }, null, null, !0), this._hideMoreMenu()
                }, o._hideMoreMenu = function() {
                    this.node.destroy()
                }, o.onClickExit = function() {
                    if (A.getInstance().playEffect(E.CommClick), d.SelectGame.isInPrivateRoom()) {
                        var e = d.PrivateData.getPrivateRoomInviteInfoKey();
                        u.string_isEmpty(e) || f.dispatch(C.NET_REQ_PRIVATE_ROOM_INVITE, e, "leave")
                    }
                    d.Desk.getRoomStates() !== h.GameRoomState.STATUS_EXITSUCCESS && d.User.LoginRoomState ? f.dispatch(C.NET_REQ_LOGOUT_IN_GAME) : f.dispatch(C.NET_REQ_LOGOUT_IN_GAME_FORCE), this._hideMoreMenu()
                }, o.onClickPiggyBank = function() {
                    f.dispatch(C.VIEW_UI_OPEN, p.PiggyBankPrefabH, null, null, null, !0), this._hideMoreMenu()
                }, o.onClickShop = function() {
                    var e = d.Desk.getRoomStates();
                    e >= 2 && e <= 4 ? f.dispatch(c.SYS_TOAST_TIP, {
                        content: "游戏准备后，不可再进入商城！"
                    }) : (_.getInstance().jumpToViewByCode(JSON.stringify({
                        cmd: "1008"
                    }), null, {
                        uiId: p.MallPrefabH,
                        uiArgs: null,
                        callbacks: null,
                        parent: null,
                        isClickSpanceClose: !0,
                        isAutoRecover: !1
                    }), this._hideMoreMenu())
                }, o.onDestroy = function() {
                    f.dispatch(C.VIEW_DESK_BTN_MENU_UPDATE, !0)
                }, t
            }(g)).prototype, "nodeMask", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), b = t(R.prototype, "moreMenu", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), D = t(R.prototype, "btnAI", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), L = t(R.prototype, "btnShop", [G], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), O = R)) || O) || O)), o._RF.pop()
        }
    }
}))