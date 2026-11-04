System.register("chunks:///_virtual/OprationItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./BaseComponent.ts", "./PlayerMgr.ts", "./FXJConfig.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized, o = e.createForOfIteratorHelperLoose
        }, function(e) {
            r = e.cclegacy, s = e._decorator, l = e.Node, u = e.sp
        }, function(e) {
            d = e.Utils
        }, function(e) {
            c = e.BaseComponent
        }, function(e) {
            h = e.PlayerMgr
        }, function(e) {
            p = e.OPCode
        }],
        execute: function() {
            var f, _, g, m, C, I, A, E, v, y, S;
            r._RF.push({}, "f0718o8AetNwJapEec5j7qp", "OprationItem", void 0);
            var P = s.ccclass,
                T = s.property;
            e("OprationItem", (f = P("OprationItem"), _ = T(l), g = T(l), m = T(l), C = T(l), f((E = t((A = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "opration", E, a(t)), i(t, "player", v, a(t)), i(t, "player_xy", y, a(t)), i(t, "spineNode", S, a(t)), t.atlasCodeMap = new Map, t.isUsing = void 0, t._onAnimationComplete = void 0, t
                }
                n(t, e);
                var r = t.prototype;
                return r.onInitModuleEvent = function() {}, r.onLoad = function() {
                    var e = this;
                    this.spineNode.getComponent(u.Skeleton).setCompleteListener((function(t) {
                        e.node.active = !1, e.isUsing = !1, e._onAnimationComplete && e._onAnimationComplete()
                    }))
                }, r.addGameComp = function() {
                    return null == this.node && (this.node = d.create_2DNode()), this.node.addComponent("GameComponent"), this.node.getComponent("GameComponent")
                }, r.doGameCompFun = function(e) {
                    var t = this.node.getComponent("GameComponent");
                    if (null == t && (t = this.addGameComp()), "function" == typeof t[e]) {
                        for (var n, i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) a[o - 1] = arguments[o];
                        return (n = t)[e].apply(n, a), !0
                    }
                }, r.updateAtlasCodeMap = function() {
                    var e = this;
                    this.atlasCodeMap.set(p.OPE_PENG, "peng"), this.atlasCodeMap.set(p.OPE_QIANG_PENG, "peng"), this.atlasCodeMap.set(p.OPE_HU, "hu"), this.atlasCodeMap.set(p.OPE_RIGHT_CHI, "chi"), this.atlasCodeMap.set(p.OPE_MIDDLE_CHI, "chi"), this.atlasCodeMap.set(p.OPE_LEFT_CHI, "chi"), this.atlasCodeMap.set(p.OPE_ZI_MO, "zimo"), this.atlasCodeMap.set(p.OPE_AN_GANG, "gang"), this.atlasCodeMap.set(p.OPE_GANG, "gang"), this.atlasCodeMap.set(p.OPE_BU_GANG, "gang"), this.atlasCodeMap.set(p.OPE_LANG_QI, "langqi"), this.atlasCodeMap.set(p.OPE_MING_LOU, "ml"), this.atlasCodeMap.set(p.OPE_HUA_GANG, "bh"), this.atlasCodeMap.set(p.OPE_BAO_JIAO, "baoting"), this.atlasCodeMap.set(p.OPE_TING, "baoting"), this.atlasCodeMap.set(p.OPE_KOU_TING, "baoting");
                    var t = this.node.getComponent("GameComponent");
                    t ? (t.destroy(), this.scheduleOnce((function() {
                        e.doGameCompFun("updateAtlasCodeMap", e.atlasCodeMap)
                    }))) : this.doGameCompFun("updateAtlasCodeMap", this.atlasCodeMap)
                }, r.getShowBtn = function(e) {
                    for (var t, n = o(this.atlasCodeMap); !(t = n()).done;) {
                        var i = t.value,
                            a = i[0],
                            r = i[1];
                        if (e == a) return r
                    }
                    return null
                }, r.updateItemProps = function(e, t) {
                    var n = h.getInstance().findPlayerWithUserId(e);
                    if (n) {
                        var i = n.gameUserInfo;
                        this.player_xy.active = 2 == i.sex, this.player.active = 2 != i.sex;
                        var a = this.getShowBtn(t);
                        if (!a) return void(this.node.active = !1);
                        this.node.active = !0, this.isUsing = !0;
                        var o = "px_" + a;
                        this.spineNode.getComponent(u.Skeleton).setAnimation(0, o, !1), this.doGameCompFun("playOprationResultEffect", t, e)
                    }
                }, r.setAnimationCompleteCallback = function(e) {
                    this._onAnimationComplete = e
                }, t
            }(c)).prototype, "opration", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), v = t(A.prototype, "player", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), y = t(A.prototype, "player_xy", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), S = t(A.prototype, "spineNode", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), I = A)) || I)), r._RF.pop()
        }
    }
}))