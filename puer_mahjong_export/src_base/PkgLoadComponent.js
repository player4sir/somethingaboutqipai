System.register("chunks:///_virtual/PkgLoadComponent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SubGameConfig.ts", "./GCache.ts", "./AppEvent.ts", "./AppSound.ts", "./EventManager.ts", "./BaseComponent.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f, m;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, c = e.ProgressBar, l = e.Label, u = e.Vec3
        }, function(e) {
            d = e.SubGameConfig
        }, function(e) {
            _ = e.GCache
        }, function(e) {
            h = e.AppEvent
        }, function(e) {
            p = e.AppSound
        }, function(e) {
            f = e.EventManager
        }, function(e) {
            m = e.BaseComponent
        }],
        execute: function() {
            var g, E, v, T, R, P, y, C, S, A, I, D, N, O, b, L, M, G, k, U, B, w, H, F, q, V, x, W, Y, j, K;
            o._RF.push({}, "1e2b0snP+dKNr7ObuB89vez", "PkgLoadComponent", void 0);
            var Q = r.ccclass,
                J = r.property;
            e("PkgLoadComponent", (g = Q("PkgLoadComponent"), E = J({
                tooltip: "一类加载父节点",
                type: s
            }), v = J({
                tooltip: "二类加载父节点",
                type: s
            }), T = J({
                tooltip: "进度条组件",
                type: c
            }), R = J({
                tooltip: "进度条Bar节点",
                type: s
            }), P = J({
                tooltip: "进度条动画节点",
                type: s
            }), y = J({
                tooltip: "进度条动画结束节点",
                type: s
            }), C = J({
                tooltip: "提示文本Label",
                type: l
            }), S = J({
                tooltip: "提示进度文本Label",
                type: l
            }), A = J({
                tooltip: "进度条组件",
                type: c
            }), I = J({
                tooltip: "进度条Bar节点",
                type: s
            }), D = J({
                tooltip: "进度条动画节点",
                type: s
            }), N = J({
                tooltip: "进度条动画结束节点",
                type: s
            }), O = J({
                tooltip: "提示文本节点",
                type: l
            }), b = J({
                tooltip: "提示进度文本Label",
                type: l
            }), g((G = t((M = function(e) {
                function t() {
                    for (var t, i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, n(t, "normalParentNode", G, a(t)), n(t, "gameParentNode", k, a(t)), n(t, "normalProgressNode", U, a(t)), n(t, "normalProgressBarNode", B, a(t)), n(t, "normalProgressAniNode", w, a(t)), n(t, "normalAniEndNode", H, a(t)), n(t, "normalTipLabel", F, a(t)), n(t, "normalProgressLbl", q, a(t)), n(t, "gameProgressNode", V, a(t)), n(t, "gameProgressBarNode", x, a(t)), n(t, "gameProgressAniNode", W, a(t)), n(t, "gameAniEndNode", Y, a(t)), n(t, "gameTipLabel", j, a(t)), n(t, "gameTipProgress", K, a(t)), t._initAniPosNormal = null, t._initAniPosGame = null, t._allWidthNormal = 0, t._allWidthGame = 0, t._chooseType = null, t._isCanClickCancle = !1, t._isLoad = !1, t._currowLoadTask = null, t._isInitPos = !1, t.TIMEOIUT = 60, t
                }
                i(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {
                    this.addModelListener(h.SYS_PACKAGE_LOAD_SHOW, this.updateLoading), this.addModelListener(h.SYS_PACKAGE_LOAD_TASK_CANCLE_SURE, this.onCallbackCancle)
                }, o.onLoad = function() {
                    this._isLoad, this.node.active = !1
                }, o.start = function() {}, o.initSetPos = function() {
                    1 != this._isInitPos && (this._initAniPosNormal = new u(this.normalProgressAniNode.position.x, this.normalProgressAniNode.position.y, this.normalProgressAniNode.position.z), this._allWidthNormal = this.normalAniEndNode.position.x - this.normalProgressAniNode.position.x, this._initAniPosGame = new u(this.gameProgressAniNode.position.x, this.gameProgressAniNode.position.y, this.gameProgressAniNode.position.z), this._allWidthGame = this.gameAniEndNode.position.x - this.gameProgressAniNode.position.x, this._isInitPos = !0)
                }, o.setTaskID = function(e) {
                    this._chooseType = e, this._isLoad && this.initUI(e)
                }, o.initUI = function(e) {
                    void 0 === e && (e = null), this.gameParentNode.children.forEach((function(e, t) {
                        "cancelNode" != e.name ? e.active = !0 : e.active = !1
                    })), this.normalParentNode.children.forEach((function(e, t) {
                        e.active = !0
                    })), null != e ? (this.checkIsReconn(e), this.gameParentNode.active = d.isGameTask(e), this.normalParentNode.active = !d.isGameTask(e)) : (this.gameParentNode.active = !1, this.normalParentNode.active = !1)
                }, o.initLoading = function(e) {
                    var t;
                    this.initSetPos(), this._currowLoadTask = e, d.isGameTask(e) ? (this.checkIsReconn(e), this.gameProgressNode.progress = 0, this.gameProgressAniNode.position = new u(this._initAniPosGame.x, this._initAniPosGame.y, this._initAniPosGame.z)) : (this.normalProgressNode.progress = 0, this.normalProgressAniNode.position = new u(this._initAniPosNormal.x, this._initAniPosNormal.y, this._initAniPosNormal.z)), this.initUI(e), null != (t = this.node) && t.isValid && (this.node.active = !0), f.dispatch(h.SYS_CLOSE_NETLOADING)
                }, o.checkIsReconn = function(e) {
                    if (d.isGameTask(e)) {
                        var t = this.gameParentNode.getChildByName("cancelNode");
                        if (_ && _.SelectGame) {
                            var i = _.SelectGame.getIntoRoomData();
                            i && 1 == i.isReconn ? (t.active = !1, this.addTimeOut()) : t.active = !0
                        } else t.active = !0
                    }
                }, o.updateLoading = function(e, t, i) {
                    if (null == this._currowLoadTask && (this.initLoading(i), this._isCanClickCancle = !0), t <= 0 ? t = 0 : t >= 100 && (t = 100, this._isCanClickCancle = !1, this._currowLoadTask = null), d.isGameTask(i)) {
                        var n = this._allWidthGame * t / 100;
                        this.gameProgressNode.progress = t / 100, this.gameProgressAniNode.position = new u(this._initAniPosGame.x + n, this._initAniPosGame.y, this._initAniPosGame.x), this.gameTipProgress.string = "(" + Math.floor(t) + "%)"
                    } else {
                        var a = this._allWidthNormal * t / 100;
                        this.normalProgressNode.progress = t / 100, this.normalProgressAniNode.position = new u(this._initAniPosNormal.x + a, this._initAniPosNormal.y, this._initAniPosNormal.x), this.normalProgressLbl.string = "(" + Math.floor(t) + "%)"
                    }
                }, o.addTimeOut = function() {
                    var e = this;
                    console.log("启动加载超时处理"), this.removeTimeOut(), this.scheduleOnce((function() {
                        console.log("执行加载超时处理"), e.onClickCancle(null)
                    }), this.TIMEOIUT)
                }, o.removeTimeOut = function() {
                    console.log("关闭加载超时处理"), this.unscheduleAllCallbacks()
                }, o.onClickCancle = function(e) {
                    this.removeTimeOut(), 0 != this._isCanClickCancle && (console.log("点击了取消=====>"), f.dispatch(h.SYS_PLAY_EFFECT, p.CommClick), f.dispatch(h.SYS_PACKAGE_LOAD_TASK_CANCLE, this._currowLoadTask))
                }, o.onCallbackCancle = function(e, t) {
                    this._isCanClickCancle = !1, this._currowLoadTask = null, this.node.active = !1
                }, o.onDestroy = function() {
                    this.removeTimeOut()
                }, t
            }(m)).prototype, "normalParentNode", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), k = t(M.prototype, "gameParentNode", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), U = t(M.prototype, "normalProgressNode", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), B = t(M.prototype, "normalProgressBarNode", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), w = t(M.prototype, "normalProgressAniNode", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), H = t(M.prototype, "normalAniEndNode", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), F = t(M.prototype, "normalTipLabel", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), q = t(M.prototype, "normalProgressLbl", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), V = t(M.prototype, "gameProgressNode", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), x = t(M.prototype, "gameProgressBarNode", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), W = t(M.prototype, "gameProgressAniNode", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Y = t(M.prototype, "gameAniEndNode", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), j = t(M.prototype, "gameTipLabel", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), K = t(M.prototype, "gameTipProgress", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), L = M)) || L)), o._RF.pop()
        }
    }
}))