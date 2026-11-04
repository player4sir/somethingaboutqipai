System.register("chunks:///_virtual/DebugComponent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./GameConfig.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./Platform.ts", "./GSocket.ts", "./LocalStorage.ts", "./EventManager.ts", "./NetState.ts", "./BaseComponent.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f, m, g, E, v, T, R, P, y;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, c = e.ScrollView, l = e.Label, u = e.ToggleContainer, d = e.EditBox
        }, function(e) {
            _ = e.ClientInfo, h = e.GameNetType
        }, function(e) {
            p = e.GameConfig
        }, function(e) {
            f = e.Utils
        }, function(e) {
            m = e.GCache
        }, function(e) {
            g = e.AppEvent
        }, function(e) {
            E = e.Platform
        }, function(e) {
            v = e.GSocket
        }, function(e) {
            T = e.LocalStorage
        }, function(e) {
            R = e.EventManager
        }, function(e) {
            P = e.Network
        }, function(e) {
            y = e.BaseComponent
        }],
        execute: function() {
            var C, S, A, I, D, N, O, b, L, M, G, k, U, B, w, H, F, q, V, x, W;
            o._RF.push({}, "3f05bWc5Q9P4a4e/6cW4wK6", "DebugComponent", void 0);
            var Y = r.ccclass,
                j = r.property;
            e("DebugComponent", (C = Y("DebugComponent"), S = j({
                tooltip: "debug界面",
                type: s
            }), A = j({
                tooltip: "debug显示隐藏开关",
                type: s
            }), I = j({
                tooltip: "操作按钮的滚动容器",
                type: c
            }), D = j({
                tooltip: "弹框界面",
                type: s
            }), N = j({
                tooltip: "光照界面",
                type: s
            }), O = j({
                tooltip: "系统信息显示标签",
                type: l
            }), b = j({
                tooltip: "更新信息显示标签",
                type: l
            }), L = j({
                tooltip: "选服节点",
                type: s
            }), M = j({
                tooltip: "选服单选列表节点",
                type: u
            }), C((U = t((k = function(e) {
                function t() {
                    for (var t, i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, n(t, "nodeDebugView", U, a(t)), n(t, "nodeDebugSwitch", B, a(t)), n(t, "scrollowList", w, a(t)), n(t, "nodePopup", H, a(t)), n(t, "nodeLight", F, a(t)), n(t, "sysInfoLabel", q, a(t)), n(t, "updateInfoLabel", V, a(t)), n(t, "nodeChooseServer", x, a(t)), n(t, "toggleGroup", W, a(t)), t._handlerAutoCloseView = null, t
                }
                i(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {
                    this.addModelListener(g.LOGIN_GOTO_SHOW, this.updateAllInfo), this.addModelListener(g.LOGIN_SEND_SHOW, this.updateAllInfo), this.addModelListener(g.SYS_INFO_REFRESH, this.updateAllInfo), this.addModelListener(g.LOGIN_STATE_CHANGE, this.updateAllInfo), this.addModelListener(g.SYS_NET_CHANGE_STATE, this.updateLabelInfo), this.addModelListener(g.SYS_NET_CHANGE_NAME, this.updateLabelInfo), this.addModelListener(g.VIEW_GET_LIGHT_DATA_RESP, this.updateLightInfo)
                }, o.onLoad = function() {
                    this.initView()
                }, o.start = function() {}, o.initView = function() {
                    this.nodeDebugView.active = !0, this.nodeDebugSwitch.active = !0, this.scrollowList.node.active = !1, this.nodePopup.active = !1, this.updateAllInfoByInit(), this.sysInfoLabel.node.active = !0, this.updateInfoLabel.node.active = !0, this.nodeChooseServer.active = !1, this.toggleGroup.node.active = !0
                }, o.onClickShowOrHideSwitch = function(e) {
                    var t = !this.scrollowList.node.active;
                    this.scrollowList.node.active = !this.scrollowList.node.active, 1 == t ? (this.nodeChooseServer.active = !1, this.startAutoHideScrollow(), this.scrollowList.node.active = t, this.scrollowList.scrollToTop(0, !1)) : (this.stopScheduler(this._handlerAutoCloseView), this._handlerAutoCloseView = null, this.scrollowList.node.active = t), this.nodePopup.active = t, t && R.dispatch(g.VIEW_GET_LIGHT_DATA)
                }, o.updateAllInfoByInit = function() {
                    this.updateBaseLabelInfo(null, !0), this.updateLabelInfo()
                }, o.updateAllInfo = function() {
                    this.updateBaseLabelInfo(), this.updateLabelInfo()
                }, o.respSetUserInfo = function(e, t, i) {
                    0 == t.code ? i && 1 == i.logout_status && (this.print("请求了注销账号，注销成功", i), this.onClickExitLogin(null, !0)) : R.dispatch(g.SYS_TOAST_TIP, {
                        content: t.msg
                    })
                }, o.updateBaseLabelInfo = function(e, t) {
                    void 0 === t && (t = null);
                    var i = "服务器:";
                    !0 !== t && (i += p.instance.AppUrlConf.Name);
                    var n = "大厅版本:" + _.HallVer,
                        a = "应用版本:" + _.AppVer,
                        o = "支付方式:" + (0 == _.WX_PayEnv ? "正式" : "沙箱");
                    this.sysInfoLabel.string = "[-----BASE-----]\n" + i + "\n" + n + "\n" + a + "\n" + o
                }, o.updateLabelInfo = function(e) {
                    var t = "网络名称:" + P.getInstance().name,
                        i = "网络状态:" + P.getInstance().state,
                        n = "Socket:" + (1 == v.instance.isConnected() ? "已连接" : "未连接"),
                        a = "登录状态:" + (1 == this.getLoginState() ? "已登录" : "未登录");
                    this.updateInfoLabel.string = "[----UPDATE----]\n" + t + "\n" + i + "\n" + n + "\n" + a
                }, o.getLoginState = function() {
                    return !(!m || !m.User) && m.User.isLoginSuccesed()
                }, o.updateToggleGroup = function() {
                    _.CurrowServer == h.NET_TEST ? this.toggleGroup.toggleItems[0].isChecked = !0 : _.CurrowServer == h.NET_DEV ? this.toggleGroup.toggleItems[1].isChecked = !0 : _.CurrowServer == h.NET_ONLINE && (this.toggleGroup.toggleItems[2].isChecked = !0)
                }, o.startAutoHideScrollow = function() {
                    var e = this;
                    this.stopScheduler(this._handlerAutoCloseView), this._handlerAutoCloseView = this.addScheduler(28, (function() {
                        e.onClickShowOrHideSwitch()
                    }))
                }, o.onClickExitLogin = function(e, t) {
                    void 0 === t && (t = !1), m.User.cleanLastlocalLoginToken(), m.init(), v.instance.closeConnect(), R.dispatch(g.RECOMMEND_POP_CLEAN_QUENE), R.dispatch(g.LOGIN_GOTO_SHOW, {
                        state: "first_login"
                    }), 1 != t && this.onClickShowOrHideSwitch()
                }, o.onClickReconnect = function() {
                    v.instance.closeConnect({})
                }, o.onClickCopyOpenID = function(e) {
                    this.print("---复制OpenID---"), E.copyClipboard(E.PLogInfo.openId)
                }, o.onClickChangeServer = function(e) {
                    this.nodeChooseServer.active = !this.nodeChooseServer.active, 1 == this.nodeChooseServer.active && (this.updateToggleGroup(), this.startAutoHideScrollow())
                }, o.onClickToggle = function(e) {
                    var t = this,
                        i = _.CurrowServer;
                    this.toggleGroup.toggleItems[0].isChecked ? i = h.NET_TEST : this.toggleGroup.toggleItems[1].isChecked ? i = h.NET_DEV : this.toggleGroup.toggleItems[2].isChecked && (i = h.NET_ONLINE), _.CurrowServer != i && this.addSchedulerOnce(.5, (function() {
                        m.init(), v.instance.closeConnect(), m.User.cleanLastlocalLoginInfo(), T.clear(), _.CurrowServer = i, t.print("切换服务器---\x3e即将切换到：" + p.instance.AppUrlConf.Name), R.dispatch(g.SYS_CHANGE_EVN), R.dispatch(g.RECOMMEND_POP_CLEAN_QUENE), R.dispatch(g.LOGIN_GOTO_SHOW), t.onClickShowOrHideSwitch()
                    }))
                }, o.onClickLogOut = function(e) {
                    this.print("注销账号：" + p.instance.AppUrlConf.Name)
                }, o.onClickShowOrHideDebug = function(e) {
                    this.nodeDebugView.active = !this.nodeDebugView.active
                }, o.updateLightInfo = function(e, t) {
                    var i = this;
                    [{
                        text: "环境光强度",
                        value: t.ambientLum
                    }, {
                        text: "球面光强度",
                        value: t.sphereLum
                    }, {
                        text: "平行光强度",
                        value: t.directionalLum
                    }, {
                        text: "平行光角度",
                        value: t.directionalRotation
                    }].forEach((function(e, t, n) {
                        var a = i.nodeLight.getChildByName("EditBox" + t),
                            o = a.getComponent(d);
                        a.getChildByName("Label").getComponent(l).string = e.text, o.editingDidEnded[0].customEventData = String(t), o.string = e.value
                    }))
                }, o.onEditBoxDidEnded = function(e, t) {
                    var i, n = f.number_valueOf(t),
                        a = f.number_valueOf(e.string);
                    R.dispatch(g.VIEW_SET_LIGHT_DATA, ((i = {})[["ambientLum", "sphereLum", "directionalLum", "directionalRotation"][n]] = a, i))
                }, o.onPrivateEditBoxDidEnded = function(e, t) {
                    var i = e.string;
                    f.string_isEmpty(i) || R.dispatch(g.NET_REQ_PRIVATE_ROOM_INVITE, i, "getRoomInfo")
                }, o.onClickMatchBtn = function(e, t) {
                    R.dispatch(g.TEST_MATCH, t)
                }, o.onDestroy = function() {}, t
            }(y)).prototype, "nodeDebugView", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), B = t(k.prototype, "nodeDebugSwitch", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), w = t(k.prototype, "scrollowList", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), H = t(k.prototype, "nodePopup", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), F = t(k.prototype, "nodeLight", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), q = t(k.prototype, "sysInfoLabel", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), V = t(k.prototype, "updateInfoLabel", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), x = t(k.prototype, "nodeChooseServer", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), W = t(k.prototype, "toggleGroup", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), G = k)) || G)), o._RF.pop()
        }
    }
}))