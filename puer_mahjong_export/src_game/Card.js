System.register("chunks:///_virtual/Card.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./BaseComponent.ts", "./NodeCardCtr.ts", "./CardUtil.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, l = e.UITransform, u = e.Vec3, d = e.tween
        }, function(e) {
            c = e.Utils
        }, function(e) {
            h = e.BaseComponent
        }, function(e) {
            p = e.NodeCardCtr
        }, function(e) {
            f = e.CardUtil
        }],
        execute: function() {
            var _, g, m, C, I, A, E, v, y, S, P, T, G;
            e("NormalSize", void 0), o._RF.push({}, "dd90aFKDOFFh7sLY3Sj8eZr", "Card", void 0);
            var O, R = r.ccclass,
                N = r.property;
            ! function(e) {
                e[e.Width = 31] = "Width", e[e.Height = 44] = "Height"
            }(O || (O = e("NormalSize", {}))), e("Card", (_ = R("Card"), g = N(s), m = N({
                tooltip: "手牌模板",
                type: s
            }), C = N({
                tooltip: "左上角的标记手牌模板",
                type: s
            }), I = N({
                tooltip: "左下角的标记手牌标记模板",
                type: s
            }), A = N({
                tooltip: "右上角的标记模板",
                type: s
            }), _((y = t((v = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "card", y, a(t)), i(t, "nodeCardTemplate", S, a(t)), i(t, "cardTabTemplate", P, a(t)), i(t, "otherCardTabTemplate", T, a(t)), i(t, "topRightTemplate", G, a(t)), t.otherCardTabTemplatePos = {
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
                    return null == this.node && (this.node = c.create_2DNode()), this.node.addComponent("GameComponent"), this.node.getComponent("GameComponent")
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("GameComponent");
                    if (null == t && (t = this.addGameComp()), "function" == typeof t[e]) {
                        for (var n, i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) a[o - 1] = arguments[o];
                        return (n = t)[e].apply(n, a), !0
                    }
                }, o.getCardTag = function() {
                    return this.nodeCardTemplate.getComponent(p).getCardTag()
                }, o.setCardTag = function(e) {
                    this.nodeCardTemplate.getComponent(p).setCardTag(e)
                }, o.setCardByte = function(e) {
                    this._card_byte = e, this.nodeCardTemplate.getComponent(p).setCardByte(e);
                    var t = f.isLaiziCard(e);
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
                    var i = e / O.Width * 1e3,
                        a = i / 1600;
                    this.nodeCardTemplate.getChildByName("majiangzi").setScale(i, i, i), this.cardTabTemplate.setScale(i, i, i), this.otherCardTabTemplate.setScale(i, i, i), this.otherCardTabTemplate.setPosition(this.otherCardTabTemplatePos.x * a, this.otherCardTabTemplatePos.y * a, this.otherCardTabTemplatePos.z * a), this.topRightTemplate.setScale(i, i, i), this.topRightTemplate.setPosition(this.topRightTemplatePos.x * a, this.topRightTemplatePos.y * a, this.topRightTemplatePos.z * a), this.card.getComponent(l).setContentSize(this.cardSize.w * a, this.cardSize.h * a)
                }, o.setCardAngle = function(e, t, n) {
                    this.card.setRotationFromEuler(e, t, n)
                }, o.setCardAlbedo = function(e, t, n) {
                    this.nodeCardTemplate.getComponent(p).setCardAlbedo(new u(e, t, n))
                }, o.setBlack = function(e) {
                    e ? this.setCardColor(new u(.2, .2, .2)) : this.setCardColor()
                }, o.setCardColor = function(e) {
                    void 0 === e && (e = null), this.nodeCardTemplate.getComponent(p).setColor(e)
                }, o.playFlipCardAnim = function() {
                    this.stopFlipCardAnim(), this.setCardAngle(0, 180, 0);
                    var e = d(this.card).to(.5, {
                        eulerAngles: new u(0, 0, 0)
                    }).start();
                    this.flipAnims.push(e)
                }, o.stopFlipCardAnim = function() {
                    this.flipAnims.forEach((function(e) {
                        return e.stop()
                    })), this.flipAnims = [], this.setCardAngle(0, 0, 0)
                }, o.onDestroy = function() {
                    this.stopFlipCardAnim(), e.prototype.onDestroy.call(this)
                }, t
            }(h)).prototype, "card", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), S = t(v.prototype, "nodeCardTemplate", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), P = t(v.prototype, "cardTabTemplate", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), T = t(v.prototype, "otherCardTabTemplate", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), G = t(v.prototype, "topRightTemplate", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), E = v)) || E)), o._RF.pop()
        }
    }
}))