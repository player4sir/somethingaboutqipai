System.register("chunks:///_virtual/ToolBarPrefabCtr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./GameConfig.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./UIConfig.ts", "./EventManager.ts", "./JumpHelper.ts", "./BaseComponent.ts", "./PlayerMgr6.ts", "./FXJEvent3.ts", "./FXJRes3.ts", "./FXJSound3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f, C, E, S, A, I;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node
        }, function(e) {
            u = e.ClientInfo
        }, function(e) {
            l = e.GameSwitchConf
        }, function(e) {
            d = e.Utils
        }, function(e) {
            c = e.GCache
        }, function(e) {
            h = e.AppEvent
        }, function(e) {
            p = e.GConstants
        }, function(e) {
            m = e.UIID
        }, function(e) {
            _ = e.EventManager
        }, function(e) {
            g = e.JumpHelper
        }, function(e) {
            f = e.BaseComponent
        }, function(e) {
            C = e.PlayerMgr
        }, function(e) {
            E = e.FXJEvent
        }, function(e) {
            S = e.FXJUIID
        }, function(e) {
            A = e.GameSound, I = e.FXJSound
        }],
        execute: function() {
            var G, y, v, P, T, b, O, R, M, N, U, D;
            o._RF.push({}, "93debCYrCtJpplV1QqBnlUN", "ToolBarPrefabCtr", void 0);
            var L = r.ccclass,
                B = r.property,
                w = r.menu;
            e("ToolBarPrefabCtr", (G = L("ToolBarPrefabCtr"), y = w("prefab/subGame/mj/ToolBarPrefabCtr"), v = B({
                tooltip: "遮罩节点",
                type: s
            }), P = B({
                tooltip: "更多菜单",
                type: s
            }), T = B({
                tooltip: " 托管按钮",
                type: s
            }), b = B({
                tooltip: "商城按钮",
                type: s
            }), G(O = y((M = t((R = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "nodeMask", M, i(t)), a(t, "moreMenu", N, i(t)), a(t, "btnAI", U, i(t)), a(t, "btnShop", D, i(t)), t
                }
                n(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {}, o.onLoad = function() {
                    this.hideMaskNode()
                }, o.hideMaskNode = function() {
                    _.dispatch(E.VIEW_DESK_BTN_MENU_UPDATE, !1);
                    var e = this.node.parent.getChildByName("Mask");
                    e && (e.active = !1), this.updateMenus()
                }, o.updateMenus = function() {
                    var e;
                    c.SelectGame.isInPrivateRoom() ? this.btnAI.active = !1 : this.btnAI.active = null == (e = c.Desk) ? void 0 : e.isPlayIng(), l.ShopFlag || (this.btnShop.active = !1)
                }, o.start = function() {}, o.exitsSettleView = function() {}, o.onGameStart = function() {
                    c.SelectGame.isInPrivateRoom()
                }, o.onCloseClick = function(e) {
                    A.getInstance().playEffect(I.CommClick), this._hideMoreMenu()
                }, o.onTuoGuanClick = function(e) {
                    A.getInstance().playEffect(I.CommClick), _.dispatch(E.NET_REQ_GAME_USER_AI, !C.getInstance().getMyPlayerInfo().isAi), this._hideMoreMenu()
                }, o.onSettingClick = function(e) {
                    A.getInstance().playEffect(I.CommClick), _.dispatch(E.VIEW_UI_OPEN, S.GameSettingPrefab, null, null, null, !0), this._hideMoreMenu()
                }, o.onClickMore = function(e) {
                    A.getInstance().playEffect(I.CommClick), this._hideMoreMenu()
                }, o.onClickRule = function() {
                    _.dispatch(E.VIEW_UI_OPEN, m.GameRuleDialog, {
                        scale: .85
                    }, null, null, !0), this._hideMoreMenu()
                }, o._hideMoreMenu = function() {
                    this.node.destroy()
                }, o.onClickExit = function() {
                    if (A.getInstance().playEffect(I.CommClick), c.SelectGame.isInPrivateRoom()) {
                        var e = c.PrivateData.getPrivateRoomInviteInfoKey();
                        d.string_isEmpty(e) || _.dispatch(E.NET_REQ_PRIVATE_ROOM_INVITE, e, "leave")
                    }
                    c.Desk.getRoomStates() !== p.GameRoomState.STATUS_EXITSUCCESS && c.User.LoginRoomState ? _.dispatch(E.NET_REQ_LOGOUT_IN_GAME) : _.dispatch(E.NET_REQ_LOGOUT_IN_GAME_FORCE), this._hideMoreMenu()
                }, o.onClickPiggyBank = function() {
                    m.PiggyBankPrefabH ? _.dispatch(E.VIEW_UI_OPEN, m.PiggyBankPrefabH, null, null, null, !0) : _.dispatch(E.VIEW_UI_OPEN, m.PiggyBankPrefab, null, null, null, !0), this._hideMoreMenu()
                }, o.onClickShop = function() {
                    var e = c.Desk.getRoomStates();
                    e >= 2 && e <= 4 ? _.dispatch(h.SYS_TOAST_TIP, {
                        content: "游戏准备后，不可再进入商城！"
                    }) : (g.getInstance().jumpToViewByCode(JSON.stringify({
                        cmd: "1008"
                    }), null, {
                        uiId: "landscape" == u.Orientation ? m.MallPrefab : m.MallPrefabH,
                        uiArgs: null,
                        callbacks: null,
                        parent: null,
                        isClickSpanceClose: !0,
                        isAutoRecover: !1
                    }), this._hideMoreMenu())
                }, o.onDestroy = function() {
                    _.dispatch(E.VIEW_DESK_BTN_MENU_UPDATE, !0)
                }, t
            }(f)).prototype, "nodeMask", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), N = t(R.prototype, "moreMenu", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), U = t(R.prototype, "btnAI", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), D = t(R.prototype, "btnShop", [b], {
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