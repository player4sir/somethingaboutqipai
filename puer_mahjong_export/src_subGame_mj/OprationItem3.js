System.register("chunks:///_virtual/OprationItem3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./BaseComponent.ts", "./PlayerMgr6.ts", "./FXJConfig3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized, o = e.createForOfIteratorHelperLoose
        }, function(e) {
            r = e.cclegacy, s = e._decorator, u = e.Node, l = e.sp
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
            var m, _, g, f, C, E, S, A, I, G, y, v;
            r._RF.push({}, "035c2l24FpIPrehcE9IuXKP", "OprationItem", void 0);
            var P = s.ccclass,
                T = s.property,
                b = s.menu;
            e("OprationItem", (m = P("OprationItem"), _ = b("prefab/subGame/mj/OprationItem"), g = T(u), f = T(u), C = T(u), E = T(u), m(S = _((I = t((A = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "opration", I, i(t)), a(t, "player", G, i(t)), a(t, "player_xy", y, i(t)), a(t, "spineNode", v, i(t)), t.atlasCodeMap = new Map, t.isUsing = void 0, t._onAnimationComplete = void 0, t
                }
                n(t, e);
                var r = t.prototype;
                return r.onInitModuleEvent = function() {}, r.onLoad = function() {
                    var e = this;
                    this.spineNode.getComponent(l.Skeleton).setCompleteListener((function(t) {
                        e.node.active = !1, e.isUsing = !1, e._onAnimationComplete && e._onAnimationComplete()
                    }))
                }, r.addGameComp = function() {
                    null == this.node && (this.node = d.create_2DNode()), this.node.addComponent("MJGameComponent");
                    var e = this.node.getComponent("MJGameComponent");
                    return "function" == typeof e.setDelegate && e.setDelegate(this), e
                }, r.doGameCompFun = function(e) {
                    var t = this.node.getComponent("MJGameComponent");
                    if (null == t && (t = this.addGameComp()), "function" == typeof t[e]) {
                        for (var n, a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) i[o - 1] = arguments[o];
                        return (n = t)[e].apply(n, i), !0
                    }
                }, r.updateAtlasCodeMap = function() {
                    var e = this;
                    this.atlasCodeMap.set(p.OPE_PENG, "peng"), this.atlasCodeMap.set(p.OPE_QIANG_PENG, "peng"), this.atlasCodeMap.set(p.OPE_HU, "hu"), this.atlasCodeMap.set(p.OPE_RIGHT_CHI, "chi"), this.atlasCodeMap.set(p.OPE_MIDDLE_CHI, "chi"), this.atlasCodeMap.set(p.OPE_LEFT_CHI, "chi"), this.atlasCodeMap.set(p.OPE_ZI_MO, "zimo"), this.atlasCodeMap.set(p.OPE_AN_GANG, "gang"), this.atlasCodeMap.set(p.OPE_GANG, "gang"), this.atlasCodeMap.set(p.OPE_BU_GANG, "gang"), this.atlasCodeMap.set(p.OPE_LANG_QI, "langqi"), this.atlasCodeMap.set(p.OPE_MING_LOU, "ml"), this.atlasCodeMap.set(p.OPE_HUA_GANG, "bh"), this.atlasCodeMap.set(p.OPE_BAO_JIAO, "baoting"), this.atlasCodeMap.set(p.OPE_TING, "baoting"), this.atlasCodeMap.set(p.OPE_KOU_TING, "baoting");
                    var t = this.node.getComponent("MJGameComponent");
                    t ? (t.destroy(), this.scheduleOnce((function() {
                        e.doGameCompFun("updateAtlasCodeMap", e.atlasCodeMap)
                    }))) : this.doGameCompFun("updateAtlasCodeMap", this.atlasCodeMap), this.doGameCompFun("updateAtlasCodeMap", this.atlasCodeMap)
                }, r.getShowBtn = function(e) {
                    for (var t, n = o(this.atlasCodeMap); !(t = n()).done;) {
                        var a = t.value,
                            i = a[0],
                            r = a[1];
                        if (e == i) return r
                    }
                    return null
                }, r.updateItemProps = function(e, t) {
                    var n = h.getInstance().findPlayerWithUserId(e);
                    if (n) {
                        var a = n.gameUserInfo;
                        this.player_xy.active = 2 == a.sex, this.player.active = 2 != a.sex;
                        var i = this.getShowBtn(t);
                        if (!i) return void(this.node.active = !1);
                        this.node.active = !0, this.isUsing = !0;
                        var o = "px_" + i;
                        this.spineNode.getComponent(l.Skeleton).setAnimation(0, o, !1), this.doGameCompFun("playOprationResultEffect", t, e)
                    }
                }, r.setAnimationCompleteCallback = function(e) {
                    this._onAnimationComplete = e
                }, t
            }(c)).prototype, "opration", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), G = t(A.prototype, "player", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), y = t(A.prototype, "player_xy", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), v = t(A.prototype, "spineNode", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), S = A)) || S) || S)), r._RF.pop()
        }
    }
}))