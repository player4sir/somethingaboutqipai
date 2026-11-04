System.register("chunks:///_virtual/Carditem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventManager.ts", "./BaseComponent.ts", "./OperationMgr.ts", "./GameEvent.ts", "./Card.ts", "./Item.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m, C;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Prefab, l = e.Node, u = e.UITransform, d = e.Layout, c = e.Sprite, h = e.instantiate
        }, function(e) {
            p = e.EventManager
        }, function(e) {
            f = e.BaseComponent
        }, function(e) {
            _ = e.OperationMgr
        }, function(e) {
            g = e.GameEvent
        }, function(e) {
            m = e.Card
        }, function(e) {
            C = e.Item
        }],
        execute: function() {
            var I, A, E, v, y, S, P, T, G, O, R, N, b;
            o._RF.push({}, "a5b47HaIfNPsaX4/AAoJYJ+", "Carditem", void 0);
            var D = r.ccclass,
                L = r.property;
            e("Carditem", (I = D("Carditem"), A = L({
                tooltip: "手牌预制体",
                type: s
            }), E = L(s), v = L(l), y = L(l), S = L(l), I((G = t((T = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "CardPrefab", G, a(t)), i(t, "itemPrefab", O, a(t)), i(t, "scrollView", R, a(t)), i(t, "content", N, a(t)), i(t, "nodeTips", b, a(t)), t
                }
                n(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {}, o.updateCardItemProp = function(e, t, n) {
                    var i = this;
                    void 0 === n && (n = null), this.content.destroyAllChildren();
                    for (var a = [], o = 0; o < e.length; o++)
                        for (var r = e[o], s = _.getInstance().getOprationCardList(r.code), c = 0; c < s.length; c++) {
                            var p = _.getInstance().getOprationListNumber(r.code, c);
                            a.push({
                                code: r.code,
                                cards: p,
                                index: c
                            })
                        }
                    a.sort((function(e, t) {
                        return t.cards.length - e.cards.length
                    }));
                    var f = [],
                        g = [];
                    a.forEach((function(e) {
                        var t = e.cards,
                            n = e.code,
                            i = e.index;
                        t.length > 7 ? f.push([{
                            code: n,
                            cards: t,
                            index: i,
                            isPair: !1
                        }]) : g[g.length - 1] && g[g.length - 1].length < 2 ? g[g.length - 1].push({
                            code: n,
                            cards: t,
                            index: i,
                            isPair: !0
                        }) : g.push([{
                            code: n,
                            cards: t,
                            index: i,
                            isPair: !0
                        }])
                    })), f = f.concat(g);
                    for (var I = 700, A = 0; A < f.length; A++) {
                        var E = f[A],
                            v = new l,
                            y = v.addComponent(u);
                        y.width = I, y.height = 85;
                        for (var S = function(e) {
                                var t = E[e],
                                    a = t.code,
                                    o = t.index,
                                    r = t.cards,
                                    s = h(i.itemPrefab);
                                s.destroyAllChildren(), r.forEach((function(e) {
                                    var t = h(i.CardPrefab);
                                    t.getComponent(m).setCardByte(e), t.getComponent(m).setCardSize(52, 85), s.addChild(t)
                                })), s.getComponent(C).index = o, s.off(l.EventType.TOUCH_END), s.on(l.EventType.TOUCH_END, (function(e) {
                                    var t = e.target.getComponent(C).index;
                                    n ? n(a, t) : i.opClick(a, t)
                                }), i);
                                var d = 52 * r.length;
                                if (s.getComponent(u).width = d, t.isPair) {
                                    var c = d / 2 + 20;
                                    s.setPosition(0 == e ? -c : c, 0)
                                } else s.setPosition(0, 0);
                                v.addChild(s), I = Math.max(I, d)
                            }, P = 0; P < E.length; P++) S(P);
                        this.content.addChild(v)
                    }
                    var T = this.content.getComponent(d);
                    T.updateLayout();
                    var G = this.content.getComponent(u);
                    G.height = 85 * f.length + T.spacingY * (f.length - 1) + T.paddingTop + T.paddingBottom, G.width = I;
                    var O = this.scrollView.getComponent(u),
                        R = this.node.getComponent(u);
                    G.height > t ? (O.height = t, O.width = G.width, R.height = t) : (O.height = G.height, O.width = G.width, R.height = G.height)
                }, o.updateSelCardItem = function(e, t, n, i) {
                    var a = this;
                    void 0 === n && (n = null);
                    var o = [];
                    this.content.destroyAllChildren();
                    for (var r = [], s = 0; s < e.length; s++) {
                        var p = e[s].cards;
                        r.push({
                            code: null,
                            cards: p,
                            index: s
                        })
                    }
                    r.sort((function(e, t) {
                        return t.cards.length - e.cards.length
                    }));
                    var f = [],
                        _ = [];
                    r.forEach((function(e) {
                        var t = e.cards,
                            n = e.code,
                            i = e.index;
                        t.length > 7 ? f.push([{
                            code: n,
                            cards: t,
                            index: i,
                            isPair: !1
                        }]) : _[_.length - 1] && _[_.length - 1].length < 2 ? _[_.length - 1].push({
                            code: n,
                            cards: t,
                            index: i,
                            isPair: !0
                        }) : _.push([{
                            code: n,
                            cards: t,
                            index: i,
                            isPair: !0
                        }])
                    })), f = f.concat(_);
                    for (var g = 700, I = 0; I < f.length; I++) {
                        var A = f[I],
                            E = new l,
                            v = E.addComponent(u);
                        v.width = g, v.height = 85;
                        for (var y = function(e) {
                                var t = A[e],
                                    i = (t.code, t.index),
                                    r = t.cards,
                                    s = h(a.itemPrefab);
                                s.destroyAllChildren(), o[i] = !1, r.forEach((function(e) {
                                    var t = h(a.CardPrefab);
                                    t.getComponent(m).setCardByte(e), t.getComponent(m).setCardSize(52, 85), t.getComponent(m).setBlack(!0), s.addChild(t)
                                })), s.getComponent(C).index = i, s.off(l.EventType.TOUCH_END), s.on(l.EventType.TOUCH_END, (function(e) {
                                    e.target.getComponent(C).index, o[i] = !o[i], e.target.children.forEach((function(e) {
                                        e.getComponent(m).setBlack(!o[i])
                                    })), n(o)
                                }), a);
                                var d = 52 * r.length;
                                if (s.getComponent(u).width = d, t.isPair) {
                                    var c = d / 2 + 20;
                                    s.setPosition(0 == e ? -c : c, 0)
                                } else s.setPosition(0, 0);
                                E.addChild(s), g = Math.max(g, d)
                            }, S = 0; S < A.length; S++) y(S);
                        this.content.addChild(E)
                    }
                    var P = this.content.getComponent(d);
                    P.updateLayout();
                    var T = this.content.getComponent(u);
                    T.height = 85 * f.length + P.spacingY * (f.length - 1) + P.paddingTop + P.paddingBottom, T.width = g;
                    var G = this.scrollView.getComponent(u),
                        O = this.node.getComponent(u);
                    T.height > t ? (G.height = t, G.width = T.width, O.height = t) : (G.height = T.height, G.width = T.width, O.height = T.height), null != i && (this.nodeTips.getComponent(c).spriteFrame = i, this.nodeTips.active = !0, this.nodeTips.setPosition(0, G.height + 20))
                }, o.opClick = function(e, t) {
                    var n = {
                        opCard: _.getInstance().getPassNumber(),
                        opCode: e,
                        opCards: _.getInstance().getOprationListNumber(e, t),
                        seatId: _.getInstance().seatId,
                        userId: _.getInstance().userId
                    };
                    n.extra = _.getInstance().getOprationListExtra(e, t), p.dispatch(g.SEND_PLAYER_OPERATION, n), p.dispatch(g.CLOSE_OPRATION_INFO)
                }, t
            }(f)).prototype, "CardPrefab", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), O = t(T.prototype, "itemPrefab", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), R = t(T.prototype, "scrollView", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), N = t(T.prototype, "content", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), b = t(T.prototype, "nodeTips", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), P = T)) || P)), o._RF.pop()
        }
    }
}))