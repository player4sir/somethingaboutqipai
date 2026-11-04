System.register("chunks:///_virtual/SpriteLabel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f, m;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, a = e.assertThisInitialized, o = e.createClass
        }, function(e) {
            r = e.cclegacy, s = e._decorator, c = e.UITransform, l = e.Layout, u = e.SpriteAtlas, d = e.CCString, _ = e.Vec3, h = e.Node, p = e.Layers, f = e.Sprite, m = e.Component
        }],
        execute: function() {
            var g, E, v, T, R, P, y, C, S, A, I;
            r._RF.push({}, "ec40fQDU/BLpY3VjA7E423h", "SpriteLabel", void 0);
            var D = s.ccclass,
                N = s.property,
                O = s.menu,
                b = s.requireComponent;
            e("SpriteLabel", (g = D("SpriteLabel"), E = b([c, l]), v = O("prefab/framework/vc/SpriteLabel"), T = N(u), R = N(d), P = N(u), y = N(d), g(C = E(C = v((A = t((S = function(e) {
                function t() {
                    for (var t, i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, n(t, "_spriteAtlas", A, a(t)), n(t, "_string", I, a(t)), t._stringArr = [], t._isUpdatePos = !1, t._posDiff = 0, t._diff = null, t._endChar = null, t._scale = new _(1, 1, 1), t
                }
                i(t, e);
                var r = t.prototype;
                return r.setString = function(e, t, i) {
                    void 0 === t && (t = null), void 0 === i && (i = null), this._string = e, this._diff = t, this._endChar = i, this.updateView()
                }, r.setString2 = function(e, t, i) {
                    void 0 === t && (t = !1), void 0 === i && (i = 0), this._string = e, this._isUpdatePos = t, this._posDiff = i, this.updateView()
                }, r.setStringArr = function(e, t, i) {
                    void 0 === t && (t = null), void 0 === i && (i = null), this._stringArr = e, this._diff = t, this._endChar = i, this.updateViewByArr()
                }, r.setStringScale = function(e, t) {
                    void 0 === t && (t = 1), this._string = e, this._scale.x = t, this._scale.y = t, this._scale.z = t, this.updateView()
                }, r.onLoad = function() {}, r.resetView = function() {
                    this.node.destroyAllChildren()
                }, r.updateViewByArr = function() {
                    var e;
                    this.resetView(), null != this._spriteAtlas && 0 != (null == (e = this._stringArr) ? void 0 : e.length) && this.createSpriteNode(this._stringArr)
                }, r.updateView = function() {
                    var e;
                    (null == (e = this._stringArr) ? void 0 : e.length) > 0 || (this.resetView(), null != this._spriteAtlas && "" != this._string && this.createSpriteNode(this._string.split("")))
                }, r.createSpriteNode = function(e) {
                    var t = this,
                        i = 0,
                        n = null;
                    e.forEach((function(e) {
                        t._diff && (e = t._diff + e), n = t._createNode(e), t.node.addChild(n), t._isUpdatePos && (n.setPosition(i, 0, 0), i = n.getComponent(c).width + i + t._posDiff)
                    })), this._endChar && (n = this._createNode(this._endChar), this.node.addChild(n), this._isUpdatePos && n.setPosition(i, 0, 0))
                }, r._createNode = function(e) {
                    var t = this._spriteAtlas.getSpriteFrame(e),
                        i = new h("num");
                    i.layer = p.Enum.UI_2D;
                    var n = this.node.getComponent(c);
                    return i.addComponent(c).setAnchorPoint(n.anchorPoint.x, n.anchorPoint.y), i.addComponent(f).spriteFrame = t, 1 != this._scale.x && (i.scale = this._scale), i
                }, r.start = function() {
                    this.updateView()
                }, r.onDestroy = function() {}, o(t, [{
                    key: "spriteAtlas",
                    get: function() {
                        return this._spriteAtlas
                    },
                    set: function(e) {
                        this._spriteAtlas = e, this.updateView()
                    }
                }, {
                    key: "string",
                    get: function() {
                        return this._string
                    },
                    set: function(e) {
                        this._string = e, this.updateView()
                    }
                }]), t
            }(m)).prototype, "_spriteAtlas", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), I = t(S.prototype, "_string", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }), t(S.prototype, "spriteAtlas", [P], Object.getOwnPropertyDescriptor(S.prototype, "spriteAtlas"), S.prototype), t(S.prototype, "string", [y], Object.getOwnPropertyDescriptor(S.prototype, "string"), S.prototype), C = S)) || C) || C) || C)), r._RF.pop()
        }
    }
}))