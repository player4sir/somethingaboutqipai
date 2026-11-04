System.register("chunks:///_virtual/GifRenderLoad.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./ResLoader.ts", "./gif.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f, m;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Enum, c = e.UITransform, l = e.Sprite, u = e.Component, d = e.SpriteFrame, _ = e.ImageAsset
        }, function(e) {
            h = e.Utils
        }, function(e) {
            p = e.resLoader
        }, function(e) {
            f = e.decompressFrames, m = e.parseGIF
        }],
        execute: function() {
            var g, E, v, T, R, P, y, C, S, A, I, D, N, O;
            o._RF.push({}, "e4d47dUGtREWJV9ywGpO6Am", "GifRenderLoad", void 0);
            var b, L = r.ccclass,
                M = r.property,
                G = r.menu;
            ! function(e) {
                e[e.LOCAL = 0] = "LOCAL", e[e.REMOTE = 1] = "REMOTE"
            }(b || (b = {}));
            var k = {};
            e("GifRenderLoad", (g = L("GifRenderLoad"), E = G("gui/sprite/GifRenderLoad"), v = M({
                tooltip: "设置要加载的模式 LOCAL:本地 REMOTE:远端",
                type: s(b),
                visible: function() {
                    return !0
                }
            }), T = M({
                tooltip: "远端图片地址Url",
                visible: function() {
                    return this.modelType == b.REMOTE
                }
            }), R = M({
                tooltip: "是否提前做预加载",
                visible: function() {
                    return this.modelType == b.REMOTE
                }
            }), P = M({
                tooltip: "分包包名,不填则默认为'resources'",
                visible: function() {
                    return this.modelType == b.LOCAL
                }
            }), y = M({
                tooltip: "相对包名的相对资源路径,不可为空,不带后缀",
                visible: function() {
                    return this.modelType == b.LOCAL
                }
            }), g(C = E((A = t((S = function(e) {
                function t(t) {
                    var i;
                    return i = e.call(this, t) || this, n(i, "modelType", A, a(i)), n(i, "remoteUrl", I, a(i)), n(i, "preLoadUrl", D, a(i)), n(i, "bundleName", N, a(i)), n(i, "resPath", O, a(i)), i._className = "GifRenderLoad", i._showSprite = null, i._realLoadSprite = null, i._isLoad = !1, i._uiHaveSprite = !0, i._isCanOnloadRevire = !1, i._mainCavas = null, i._tmpCavas = null, i._mainCtx = null, i._tmpCtx = null, i.checkPreLoad(), i
                }
                i(t, e);
                var o = t.prototype;
                return o.checkPreLoad = function() {
                    1 != this._isCanOnloadRevire && (this._isCanOnloadRevire = !1, this.modelType == b.LOCAL ? 0 == h.string_isEmpty(this.bundleName) && 0 == h.string_isEmpty(this.resPath) && (this._isCanOnloadRevire = !0, this.setLocalLoad(this.bundleName, this.resPath)) : this.modelType == b.REMOTE && 0 == h.string_isEmpty(this.remoteUrl) && (this._isCanOnloadRevire = !0), this.modelType == b.REMOTE && 1 == this.preLoadUrl && this.setRemoteUrl(this.remoteUrl))
                }, o.checkSpriteComp = function() {
                    var e = this.node.getComponent(c);
                    e || ((e = this.node.addComponent(c)).width = 100, e.height = 100);
                    var t = this.node.getComponent(l);
                    return t ? 1 == this._uiHaveSprite && null == t.spriteFrame && (t.spriteFrame = null) : ((t = this.node.addComponent(l)).spriteFrame = null, t.sizeMode = 0, t.type = 0, this._uiHaveSprite = !1), t
                }, o.onLoad = function() {
                    this.checkPreLoad(), this._mainCavas = this.__createCanvas(), this._tmpCavas = this.__createCanvas(), this._mainCavas ? (this._mainCtx = this._mainCavas.getContext("2d"), this._tmpCtx = this._tmpCavas.getContext("2d"), this._isLoad = !0, this.updateView()) : console.error(this._className + " 初始化画布出错 ")
                }, o.start = function() {}, o.setLocalLoad = function(e, t) {
                    if (null != e && "" != e || null != t && "" != t)
                        if (h.string_isEmpty(e) || h.string_isEmpty(e)) console.error(this._className + " 本地资源加载失败，bundle:" + e + " path:" + t);
                        else {
                            this.modelType = b.LOCAL;
                            var i = this;
                            this.bundleName = e, this.resPath = t;
                            var n = this.resPath.replace(/\.(?:gif|png|jpg|webp|jpeg)$/i, "");
                            p.loadBundle(this.bundleName, (function(e, a) {
                                if (e) return console.log(e), void console.error(i._className + " 加载本地包出错，bundle:" + a);
                                a.load(n, (function(e, n) {
                                    if (e) return console.log(e), void console.error(i._className + " 加载本地文件出错，bundle:" + a + " path:" + t + ",realPath");
                                    i._realLoadSprite = n, i._getArrayBufferFromUrl(i.resPath, n.nativeUrl), 1 == i._isLoad && (i._isCanOnloadRevire = !0, i.updateView())
                                }))
                            }))
                        }
                }, o.setRemoteUrl = function(e) {
                    if (null != e && "" != e) {
                        this.modelType = b.REMOTE;
                        var t = this;
                        this.remoteUrl = e, String(e).includes("http://") || String(e).includes("https://") ? p.loadRemote(e, (function(i, n) {
                            i ? console.error(t._className + " 加载远端资源出错，url:" + e) : n && (t._realLoadSprite = n, t._getArrayBufferFromUrl(t.remoteUrl, n.nativeUrl), 1 == t._isLoad && (t._isCanOnloadRevire = !0, t.updateView()))
                        })) : console.error(this._className + "加载Url出错 url不正确 url=" + e)
                    }
                }, o.updateView = function() {
                    if (0 != this._isLoad && 1 == this._isCanOnloadRevire)
                        if (this.clear(), this.modelType == b.REMOTE) {
                            if (!this._realLoadSprite) return void this.setRemoteUrl(this.remoteUrl);
                            if (!k[this.remoteUrl]) return void this._getArrayBufferFromUrl(this.remoteUrl, this._realLoadSprite.nativeUrl);
                            this._showSprite = this.checkSpriteComp(), 0 == this._uiHaveSprite && (this._showSprite.sizeMode = 2, this._showSprite.type = 0), this._startDraw(k[this.remoteUrl])
                        } else {
                            if (!this._realLoadSprite) return void this.setLocalLoad(this.bundleName, this.resPath);
                            if (!k[this.resPath]) return void this._getArrayBufferFromUrl(this.resPath, this._realLoadSprite.nativeUrl);
                            this._showSprite = this.checkSpriteComp(), 0 == this._uiHaveSprite && (this._showSprite.sizeMode = 0, this._showSprite.type = 0), this._startDraw(k[this.resPath])
                        }
                }, o.__createCanvas = function() {
                    return globalThis.tt && globalThis.tt.createCanvas ? globalThis.tt.createCanvas() : globalThis.wx && globalThis.wx.createCanvas ? globalThis.wx.createCanvas() : document && document.createElement ? document.createElement("canvas") : null
                }, o._getArrayBufferFromUrl = function(e, t) {
                    if (!k[e]) {
                        var i = this,
                            n = new XMLHttpRequest;
                        n.open("GET", t, !0), n.responseType = "arraybuffer", n.onreadystatechange = function() {
                            if (4 === n.readyState) {
                                if (!n.response) return void console.warn(i._className + " getArrayBuffer读取数据为空");
                                if (k[e]) return;
                                var a = [];
                                try {
                                    a = f(m(n.response), !0)
                                } catch (e) {
                                    return void console.error(i._className + " getArrayBuffer: read gif frame error", e)
                                }
                                if (0 === a.length) return void console.warn(i._className + " getArrayBuffer读取frames长度为空");
                                k[e] = {
                                    url: t,
                                    refs: [],
                                    frames: a
                                }, n.abort(), 1 == i._isLoad && i.updateView()
                            }
                        }, n.onerror = function(e) {
                            console.error(i._className + " getArrayBuffer错误")
                        }, n.send(null), n.timeout = 1e5, n.ontimeout = function(t) {
                            k[e] = null, console.error(i._className + " getArrayBuffer超时")
                        }
                    }
                }, o._startDraw = function(e) {
                    if (e) {
                        var t = !0,
                            i = 0,
                            n = null;
                        this._mainCavas.width = e.frames[0].dims.width, this._mainCavas.height = e.frames[0].dims.height, e.refs.indexOf(this.uuid) < 0 && e.refs.push(this.uuid);
                        var a = this,
                            o = null;
                        (o = function() {
                            if (a._showSprite && a.node && 0 != a.node.isValid) {
                                var r = e,
                                    s = r.frames[i],
                                    c = Date.now();
                                1 == t && (a._mainCtx.clearRect(0, 0, 9999, 9999), t = !1);
                                var l = s.dims;
                                n && l.width === n.width && l.height === n.height || (a._tmpCavas.width = l.width, a._tmpCavas.height = l.height, n = a._mainCtx.createImageData(l.width, l.height)), n.data.set(s.patch), a._tmpCtx.putImageData(n, 0, 0), a._mainCtx.drawImage(a._tmpCavas, l.left, l.top), ++i >= r.frames.length && (i = 0), 2 === s.disposalType && (t = !0), a._showSprite.spriteFrame = d.createWithImage(new _(a._mainCavas));
                                var u = Date.now() - c;
                                a.scheduleOnce((function() {
                                    o()
                                }), Math.max(0, Math.floor(s.delay - u)) / 1e3)
                            }
                        })()
                    }
                }, o.clear = function() {
                    this.unscheduleAllCallbacks(), this._showSprite = this.checkSpriteComp(), this._showSprite.spriteFrame = null
                }, t
            }(u)).prototype, "modelType", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return b.LOCAL
                }
            }), I = t(S.prototype, "remoteUrl", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }), D = t(S.prototype, "preLoadUrl", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0
                }
            }), N = t(S.prototype, "bundleName", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "resources"
                }
            }), O = t(S.prototype, "resPath", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }), C = S)) || C) || C)), o._RF.pop()
        }
    }
}))