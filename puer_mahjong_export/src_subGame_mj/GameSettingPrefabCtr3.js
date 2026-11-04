System.register("chunks:///_virtual/GameSettingPrefabCtr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./Utils.ts", "./AppEvent.ts", "./AppSound.ts", "./ReportConfig.ts", "./UIConfig.ts", "./AudioManager.ts", "./EventManager.ts", "./BaseComponent.ts", "./PopupController.ts", "./FXJSound3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f, C, E, S, A;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Label, u = e.Node, l = e.Toggle
        }, function(e) {
            d = e.ClientInfo
        }, function(e) {
            c = e.Utils
        }, function(e) {
            h = e.AppEvent
        }, function(e) {
            p = e.AppSound
        }, function(e) {
            m = e.ReportConfig
        }, function(e) {
            _ = e.UIID
        }, function(e) {
            g = e.AudioManager, f = e.LANG_TYPE
        }, function(e) {
            C = e.EventManager
        }, function(e) {
            E = e.BaseComponent
        }, function(e) {
            S = e.PopupController
        }, function(e) {
            A = e.GameSound
        }],
        execute: function() {
            var I, G, y, v, P, T, b, O, R, M, N, U, D, L, B, w;
            o._RF.push({}, "aef35Mdel1FN5LDM4grqrdt", "GameSettingPrefabCtr", void 0);
            var k = r.ccclass,
                H = r.property,
                x = r.menu;
            e("GameSettingPrefabCtr", (I = k("GameSettingPrefabCtr"), G = x("prefab/subGame/mj/GameSettingPrefabCtr"), y = H({
                tooltip: "当前版本信息",
                type: s
            }), v = H({
                tooltip: "音效开关按钮",
                type: u
            }), P = H({
                tooltip: "音乐开关按钮",
                type: u
            }), T = H({
                tooltip: "震动开关按钮",
                type: u
            }), b = H({
                tooltip: "方言开关按钮",
                type: u
            }), O = H({
                tooltip: "普通话开关按钮",
                type: u
            }), I(R = G((N = t((M = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "currentVersion", N, i(t)), a(t, "effectBtn", U, i(t)), a(t, "musicBtn", D, i(t)), a(t, "shockBtn", L, i(t)), a(t, "dialetBtn", B, i(t)), a(t, "mandarinBtn", w, i(t)), t.isEffect = !0, t.isMusic = !0, t.isShock = 1, t._langType = 0, t
                }
                n(t, e);
                var o = t.prototype;
                return o.onLoad = function() {
                    this.initView()
                }, o.start = function() {}, o.initView = function() {
                    this.isEffect = g.getInstance().getSwitchEffect(), this.isMusic = g.getInstance().getSwitchMusic(), this.isShock = c.number_valueOf(g.getInstance().getShakeSwitch()), console.log("StoreKey.SYS_Shock:初始化:", this.isShock), this.showSetView(), this.showVersion()
                }, o.showVersion = function() {
                    this.currentVersion.string = "当前版本:  v" + d.AppVer + "(" + String(d.HallVer) + ")"
                }, o.showSetView = function() {
                    var e = this;
                    console.log("StoreKey.SYS_Shock:渲染设置页面:", this.isShock);
                    var t = 1 == this.isShock;
                    this.scheduleOnce((function() {
                        e.effectBtn.getComponent(l).isChecked = e.isEffect, e.musicBtn.getComponent(l).isChecked = e.isMusic, e.shockBtn.getComponent(l).isChecked = t, e._langType = A.getInstance().getLangType(), e.dialetBtn.getComponent(l).isChecked = e._langType == f.DIALET, e.mandarinBtn.getComponent(l).isChecked = e._langType == f.MANDARIN
                    }))
                }, o.saveSetting = function() {
                    g.getInstance().setSwitchEffect(this.isEffect), g.getInstance().setSwitchMusic(this.isMusic), g.getInstance().setShakeSwitch(this.isShock), g.getInstance().save()
                }, o.onEffctClick = function(e) {
                    C.dispatch(h.SYS_PLAY_EFFECT, p.CommClick), 1 == e.target.getChildByName("Checkmark").active ? (console.log("点击事件响应===>>>>音效-关"), this.isEffect = !1) : (console.log("点击事件响应===>>>>音效-开"), this.isEffect = !0), this.saveSetting()
                }, o.onMusicClick = function(e) {
                    C.dispatch(h.SYS_PLAY_EFFECT, p.CommClick), 1 == e.target.getChildByName("Checkmark").active ? (console.log("点击事件响应===>>>>音乐-关"), this.isMusic = !1) : (console.log("点击事件响应===>>>>音乐-开"), this.isMusic = !0), this.saveSetting()
                }, o.onShockClick = function(e) {
                    C.dispatch(h.SYS_PLAY_EFFECT, p.CommClick), 1 == e.target.getChildByName("Checkmark").active ? (console.log("点击事件响应===>>>>震动-关"), this.isShock = 0) : (console.log("点击事件响应===>>>>震动-开"), this.isShock = 1), this.saveSetting()
                }, o.onLangClick = function(e, t) {
                    C.dispatch(h.SYS_PLAY_EFFECT, p.CommClick);
                    var n = e.target.getChildByName("Checkmark").active;
                    0 == t ? (this._langType = 1 == n ? f.MANDARIN : f.DIALET, this.mandarinBtn.getComponent(l).isChecked = this._langType == f.MANDARIN) : (this._langType = 1 == n ? f.DIALET : f.MANDARIN, this.dialetBtn.getComponent(l).isChecked = this._langType == f.DIALET), A.getInstance().setLangType(this._langType)
                }, o.onOpinionClick = function(e) {
                    console.log("点击事件响应===>>>>意见反馈"), C.dispatch(h.SYS_PLAY_EFFECT, p.CommClick), C.dispatch(h.REPORT_CLIENT_CLICK, {
                        eventID: m.setting_6
                    }), S.getInstance().onOpenView("", _.CustomerCarePrefab, {
                        from: "setting"
                    })
                }, o.onCloseClick = function(e) {
                    console.log("点击事件响应===>>>>关闭"), C.dispatch(h.SYS_PLAY_EFFECT, p.CommClick), this.node.destroy()
                }, o.onDestroy = function() {}, t
            }(E)).prototype, "currentVersion", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), U = t(M.prototype, "effectBtn", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), D = t(M.prototype, "musicBtn", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), L = t(M.prototype, "shockBtn", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), B = t(M.prototype, "dialetBtn", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), w = t(M.prototype, "mandarinBtn", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), R = M)) || R) || R)), o._RF.pop()
        }
    }
}))