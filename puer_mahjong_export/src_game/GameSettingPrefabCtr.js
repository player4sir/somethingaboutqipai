System.register("chunks:///_virtual/GameSettingPrefabCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./Utils.ts", "./AppEvent.ts", "./AppSound.ts", "./ReportConfig.ts", "./UIConfig.ts", "./AudioManager.ts", "./EventManager.ts", "./BaseComponent.ts", "./PopupController.ts", "./FXJSound.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m, C, I, A, E;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Label, l = e.Node, u = e.Toggle
        }, function(e) {
            d = e.ClientInfo
        }, function(e) {
            c = e.Utils
        }, function(e) {
            h = e.AppEvent
        }, function(e) {
            p = e.AppSound
        }, function(e) {
            f = e.ReportConfig
        }, function(e) {
            _ = e.UIID
        }, function(e) {
            g = e.AudioManager, m = e.LANG_TYPE
        }, function(e) {
            C = e.EventManager
        }, function(e) {
            I = e.BaseComponent
        }, function(e) {
            A = e.PopupController
        }, function(e) {
            E = e.GameSound
        }],
        execute: function() {
            var v, y, S, P, T, G, O, R, N, b, D, L, M, U, w, B;
            o._RF.push({}, "97291GF1sFDqbVLRFDzJE1r", "GameSettingPrefabCtr", void 0);
            var H = r.ccclass,
                F = r.property,
                k = r.menu;
            e("GameSettingPrefabCtr", (v = H("GameSettingPrefabCtr"), y = k("prefab/game/GameSettingPrefabCtr"), S = F({
                tooltip: "当前版本信息",
                type: s
            }), P = F({
                tooltip: "音效开关按钮",
                type: l
            }), T = F({
                tooltip: "音乐开关按钮",
                type: l
            }), G = F({
                tooltip: "震动开关按钮",
                type: l
            }), O = F({
                tooltip: "方言开关按钮",
                type: l
            }), R = F({
                tooltip: "普通话开关按钮",
                type: l
            }), v(N = y((D = t((b = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "currentVersion", D, a(t)), i(t, "effectBtn", L, a(t)), i(t, "musicBtn", M, a(t)), i(t, "shockBtn", U, a(t)), i(t, "dialetBtn", w, a(t)), i(t, "mandarinBtn", B, a(t)), t.isEffect = !0, t.isMusic = !0, t.isShock = 1, t._langType = 0, t
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
                        e.effectBtn.getComponent(u).isChecked = e.isEffect, e.musicBtn.getComponent(u).isChecked = e.isMusic, e.shockBtn.getComponent(u).isChecked = t, e._langType = E.getInstance().getLangType(), e.dialetBtn.getComponent(u).isChecked = e._langType == m.DIALET, e.mandarinBtn.getComponent(u).isChecked = e._langType == m.MANDARIN
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
                    0 == t ? (this._langType = 1 == n ? m.MANDARIN : m.DIALET, this.mandarinBtn.getComponent(u).isChecked = this._langType == m.MANDARIN) : (this._langType = 1 == n ? m.DIALET : m.MANDARIN, this.dialetBtn.getComponent(u).isChecked = this._langType == m.DIALET), E.getInstance().setLangType(this._langType)
                }, o.onOpinionClick = function(e) {
                    console.log("点击事件响应===>>>>意见反馈"), C.dispatch(h.SYS_PLAY_EFFECT, p.CommClick), C.dispatch(h.REPORT_CLIENT_CLICK, {
                        eventID: f.setting_6
                    }), A.getInstance().onOpenView("", _.CustomerCarePrefab, {
                        from: "setting"
                    })
                }, o.onCloseClick = function(e) {
                    console.log("点击事件响应===>>>>关闭"), C.dispatch(h.SYS_PLAY_EFFECT, p.CommClick), this.node.destroy()
                }, o.onDestroy = function() {}, t
            }(I)).prototype, "currentVersion", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), L = t(b.prototype, "effectBtn", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), M = t(b.prototype, "musicBtn", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), U = t(b.prototype, "shockBtn", [G], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), w = t(b.prototype, "dialetBtn", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), B = t(b.prototype, "mandarinBtn", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), N = b)) || N) || N)), o._RF.pop()
        }
    }
}))