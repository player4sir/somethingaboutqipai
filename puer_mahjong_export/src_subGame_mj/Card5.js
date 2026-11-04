System.register("chunks:///_virtual/Card5.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./BaseComponent.ts", "./NodeCardCtr3.ts", "./CardUtil3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, u = e.UITransform, l = e.Vec3, d = e.tween
        }, function(e) {
            c = e.Utils
        }, function(e) {
            h = e.BaseComponent
        }, function(e) {
            p = e.NodeCardCtr
        }, function(e) {
            m = e.CardUtil
        }],
        execute: function() {
            var _, g, f, C, E, S, A, I, G, y, v, P, T, b;
            e("NormalSize", void 0), o._RF.push({}, "9038dluCE1IKKvwMRWxQNgl", "Card", void 0);
            var O, R = r.ccclass,
                M = r.property,
                N = r.menu;
            ! function(e) {
                e[e.Width = 31] = "Width", e[e.Height = 44] = "Height"
            }(O || (O = e("NormalSize", {}))), e("Card", (_ = R("Card"), g = N("prefab/subGame/mj/Card"), f = M(s), C = M({
                tooltip: "手牌模板",
                type: s
            }), E = M({
                tooltip: "左上角的标记手牌模板",
                type: s
            }), S = M({
                tooltip: "左下角的标记手牌标记模板",
                type: s
            }), A = M({
                tooltip: "右上角的标记模板",
                type: s
            }), _(I = g((y = t((G = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "card", y, i(t)), a(t, "nodeCardTemplate", v, i(t)), a(t, "cardTabTemplate", P, i(t)), a(t, "otherCardTabTemplate", T, i(t)), a(t, "topRightTemplate", b, i(t)), t.otherCardTabTemplatePos = {
                        x: 8.24,
                        y: -7.152,
                        z: -3.328
                    }, t.topRightTemplatePos = {
                        x: -8.3744,
                        y: 6.208,
                        z: 4.3296
                    }, t.cardSize = {
                        w: 50,
                        h: 70
                    }, t.flipAnims = [], t._card_byte = 0, t
                }
                n(t, e);
                var o = t.prototype;
                return o.addGameComp = function() {
                    null == this.node && (this.node = c.create_2DNode()), this.node.addComponent("MJGameComponent");
                    var e = this.node.getComponent("MJGameComponent");
                    return "function" == typeof e.setDelegate && e.setDelegate(this), e
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("MJGameComponent");
                    if (null == t && (t = this.addGameComp()), "function" == typeof t[e]) {
                        for (var n, a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) i[o - 1] = arguments[o];
                        return (n = t)[e].apply(n, i), !0
                    }
                }, o.getCardTag = function() {
                    return this.nodeCardTemplate.getComponent(p).getCardTag()
                }, o.setCardTag = function(e) {
                    this.nodeCardTemplate.getComponent(p).setCardTag(e)
                }, o.setCardByte = function(e) {
                    this._card_byte = e, this.nodeCardTemplate.getComponent(p).setCardByte(e);
                    var t = m.isLaiziCard(e);
                    this.cardTabTemplate.active = t, this.doGameCompFun("checkCardTag", this, e)
                }, o.getTopRightCardTabTemplate = function() {
                    return this.topRightTemplate
                }, o.getTopLeftCardTabTemplate = function() {
                    return this.cardTabTemplate
                }, o.getBottomLeftCardTabTemplate = function() {
                    return this.otherCardTabTemplate
                }, o.getCardByte = function() {
                    return this._card_byte
                }, o.setCardSize = function(e, t, n) {
                    var a = e / O.Width * 1e3,
                        i = a / 1600;
                    this.nodeCardTemplate.getChildByName("majiangzi").setScale(a, a, a), this.cardTabTemplate.setScale(a, a, a), this.otherCardTabTemplate.setScale(a, a, a), this.otherCardTabTemplate.setPosition(this.otherCardTabTemplatePos.x * i, this.otherCardTabTemplatePos.y * i, this.otherCardTabTemplatePos.z * i), this.topRightTemplate.setScale(a, a, a), this.topRightTemplate.setPosition(this.topRightTemplatePos.x * i, this.topRightTemplatePos.y * i, this.topRightTemplatePos.z * i), this.card.getComponent(u).setContentSize(this.cardSize.w * i, this.cardSize.h * i)
                }, o.setCardAngle = function(e, t, n) {
                    this.card.setRotationFromEuler(e, t, n)
                }, o.setCardAlbedo = function(e, t, n) {
                    this.nodeCardTemplate.getComponent(p).setCardAlbedo(new l(e, t, n))
                }, o.setBlack = function(e) {
                    e ? this.setCardColor(new l(.2, .2, .2)) : this.setCardColor()
                }, o.setCardColor = function(e) {
                    void 0 === e && (e = null), this.nodeCardTemplate.getComponent(p).setColor(e)
                }, o.playFlipCardAnim = function() {
                    this.stopFlipCardAnim(), this.setCardAngle(0, 180, 0);
                    var e = d(this.card).to(.5, {
                        eulerAngles: new l(0, 0, 0)
                    }).start();
                    this.flipAnims.push(e)
                }, o.stopFlipCardAnim = function() {
                    this.flipAnims.forEach((function(e) {
                        return e.stop()
                    })), this.flipAnims = [], this.setCardAngle(0, 0, 0)
                }, o.onDestroy = function() {
                    this.stopFlipCardAnim(), e.prototype.onDestroy.call(this)
                }, t
            }(h)).prototype, "card", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), v = t(G.prototype, "nodeCardTemplate", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), P = t(G.prototype, "cardTabTemplate", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), T = t(G.prototype, "otherCardTabTemplate", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), b = t(G.prototype, "topRightTemplate", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), I = G)) || I) || I)), o._RF.pop()
        }
    }
}))