System.register("chunks:///_virtual/SpriteLoad.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./ResLoader.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Sprite, c = e.Enum, l = e.Node, u = e.UITransform, d = e.ImageAsset, _ = e.Component
        }, function(e) {
            h = e.Utils
        }, function(e) {
            p = e.resLoader
        }],
        execute: function() {
            var f, m, g, E, v, T, R, P, y, C, S, A, I, D, N, O, b, L, M;
            o._RF.push({}, "99bdeuuXVxMiLPD/qMLrRdV", "SpriteLoad", void 0);
            var G, k = r.ccclass,
                U = r.property,
                B = r.menu,
                w = r.requireComponent;
            ! function(e) {
                e[e.LOCAL = 0] = "LOCAL", e[e.REMOTE = 1] = "REMOTE"
            }(G || (G = {})), e("default", (f = k("SpriteLoad"), m = w(s), g = B("gui/sprite/SpriteLoad"), E = U({
                tooltip: "设置要加载的模式 LOCAL:本地 REMOTE:远端",
                type: c(G),
                visible: function() {
                    return this.checkSpriteComp(), !0
                }
            }), v = U({
                tooltip: "远端图片地址Url",
                visible: function() {
                    return this.modelType === G.REMOTE
                }
            }), T = U({
                tooltip: "是否提前做预加载",
                visible: function() {
                    return this.modelType === G.REMOTE
                }
            }), R = U({
                tooltip: "分包包名,不填则默认为'resources'",
                visible: function() {
                    return this.modelType === G.LOCAL
                }
            }), P = U({
                tooltip: "相对包名的相对资源路径,不可为空,不带后缀",
                visible: function() {
                    return this.modelType === G.LOCAL
                }
            }), y = U({
                tooltip: "图片size按照宽度等比例自适应。fitWidth和fitHeight同时填写，则按照比例最小的适配"
            }), C = U({
                tooltip: "图片size按照宽度等比例自适应。fitWidth和fitHeight同时填写，则按照比例最小的适配"
            }), f(S = m(S = g((I = t((A = function(e) {
                function t(t) {
                    var i;
                    return i = e.call(this, t) || this, n(i, "modelType", I, a(i)), n(i, "remoteUrl", D, a(i)), n(i, "preLoadUrl", N, a(i)), n(i, "bundleName", O, a(i)), n(i, "resPath", b, a(i)), n(i, "fitWidth", L, a(i)), n(i, "fitHeight", M, a(i)), i._className = "SpriteLoad", i._isLoad = !1, i._uiHaveSprite = !0, i._isCanOnloadRevire = !1, i.callFunc = void 0, i.params = void 0, i._spriteFrameCache = {}, i.checkPreLoad(), i
                }
                i(t, e);
                var o = t.prototype;
                return o.start = function() {
                    this.node.once(l.EventType.NODE_DESTROYED, this.onNodeWillDestroy, this)
                }, o.onNodeWillDestroy = function() {
                    this._spriteFrameCache = {}, this._releaseNodeSpriteFrame()
                }, o.checkPreLoad = function() {
                    this._isCanOnloadRevire || (this._isCanOnloadRevire = !1, this.modelType === G.LOCAL ? h.string_isEmpty(this.bundleName) || h.string_isEmpty(this.resPath) || (this._isCanOnloadRevire = !0, this.setLocalLoad(this.bundleName, this.resPath)) : this.modelType === G.REMOTE && (h.string_isEmpty(this.remoteUrl) || (this._isCanOnloadRevire = !0)), this.modelType === G.REMOTE && this.preLoadUrl && this.setRemoteUrl(this.remoteUrl))
                }, o.checkSpriteComp = function() {
                    var e = this.node.getComponent(u);
                    e || ((e = this.node.addComponent(u)).width = 100, e.height = 100);
                    var t = this.node.getComponent(s);
                    return t || (t = this.node.addComponent(s)), t
                }, o.onLoad = function() {
                    this._isLoad = !0, this.updateView()
                }, o.setCompleteCallBack = function(e, t) {
                    this.callFunc = e, this.params = t
                }, o.setLocalLoad = function(e, t, i) {
                    var n = this;
                    void 0 === i && (i = null), h.string_isEmpty(e) || h.string_isEmpty(t) ? this.handleError("本地资源加载失败，bundle:" + e + " path:" + t, i, {
                        bundle: e,
                        path: t
                    }) : (this.modelType = G.LOCAL, this.bundleName = e, this.resPath = t, this.checkSpriteComp().spriteFrame = null, p.load(this.bundleName, this.resPath, d, (function(a, o) {
                        n.node && n.node.isValid && (a ? n.handleError("加载资源出错，bundle:" + e + " path:" + t, i, {
                            bundle: e,
                            path: t
                        }) : o ? n.bundleName == e && n.resPath == t ? (h.isNull(o._resource_) || h.isNotNull(o._resource_) && o._resource_ === n.resPath) && (n._isCanOnloadRevire = !0, n._initSpriteFrame(o, n.resPath), n._isLoad && n.updateView()) : n.handleError("资源已被修改，bundle:" + e + " path:" + t, i, {
                            bundle: e,
                            path: t
                        }) : n.handleError("资源未找到，bundle:" + e + " path:" + t, i, {
                            bundle: e,
                            path: t
                        }))
                    })))
                }, o.setRemoteUrl = function(e, t) {
                    var i = this;
                    void 0 === t && (t = null), h.string_isEmpty(e) ? this.handleError("加载Url出错 url不正确 url=" + e, t, e) : (this.modelType = G.REMOTE, e = p.transformOnlineServerUrl(e), this.remoteUrl = e, this.checkSpriteComp().spriteFrame = null, String(e).includes("http://") || String(e).includes("https://") ? p.loadRemote(e, {
                        ext: ".jpg"
                    }, (function(n, a) {
                        i.node && i.node.isValid && (n ? i.handleError("加载资源出错，url:" + e, t, e) : a ? (h.isNull(a._nativeUrl) || h.isNotNull(a._nativeUrl) && a._nativeUrl === e) && (i._isCanOnloadRevire = !0, i._initSpriteFrame(a, e), i._isLoad && i.updateView()) : i.handleError("资源未找到，url:" + e, t, e))
                    })) : this.handleError("加载Url出错 url不正确 url=" + e, t, e))
                }, o.updateView = function() {
                    if (this._isLoad && this._isCanOnloadRevire) {
                        var e = this.modelType === G.REMOTE ? this.remoteUrl : this.resPath;
                        this._updateSpriteframe(e, this.modelType === G.REMOTE ? 2 : 0), this.setAutoFitSize(this.fitWidth, this.fitHeight), this.callFunc && this.callFunc(this.params)
                    }
                }, o._initSpriteFrame = function(e, t) {
                    var i = this._spriteFrameCache[t];
                    return i || (i = {
                        sp: h.image_ImageAssetToSpriteFrame(e),
                        isFirst: !0
                    }, this._spriteFrameCache[t] = i), i.sp
                }, o._updateSpriteframe = function(e, t) {
                    var i = this.checkSpriteComp(),
                        n = this._spriteFrameCache[e];
                    null != n && n.sp && (!1 === this._uiHaveSprite && (i.sizeMode = t, i.type = 0), i.spriteFrame = n.sp)
                }, o.setAutoFitSize = function(e, t) {
                    var i;
                    if (void 0 === e && (e = null), void 0 === t && (t = null), this.fitWidth = e, this.fitHeight = t, e || t) {
                        var n = null == (i = this.getComponent(s)) ? void 0 : i.spriteFrame;
                        if (null != n && n.originalSize) {
                            var a = n.originalSize.width,
                                o = n.originalSize.height,
                                r = this.getComponent(u);
                            e && t ? a / o > e / t ? (r.width = e, r.height = o * e / a) : (r.width = a * t / o, r.height = t) : e ? t || (r.width = e, r.height = o * e / a) : (r.width = a * t / o, r.height = t)
                        }
                    }
                }, o._releaseNodeSpriteFrame = function() {
                    var e, t;
                    null != (e = this.node) && e.isValid && (null == (t = this.node.getComponents(s)) || t.forEach((function(e) {
                        e.isValid && (e.enabled = !1, e.spriteFrame = null)
                    })), console.log("释放节点精灵帧", this.node.name, this.node.uuid))
                }, o.handleError = function(e, t, i) {
                    t && t(i)
                }, t
            }(_)).prototype, "modelType", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return G.LOCAL
                }
            }), D = t(A.prototype, "remoteUrl", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }), N = t(A.prototype, "preLoadUrl", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0
                }
            }), O = t(A.prototype, "bundleName", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "resources"
                }
            }), b = t(A.prototype, "resPath", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }), L = t(A.prototype, "fitWidth", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), M = t(A.prototype, "fitHeight", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), S = A)) || S) || S) || S)), o._RF.pop()
        }
    }
}))