System.register("chunks:///_virtual/NodeCardCtr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./SpriteLoad.ts", "./BaseComponent.ts", "./RoomMgr6.ts", "./FXJRes3.ts", "./CardUtil3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f, C, E, S, A, I;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, u = e.SpriteAtlas, l = e.Vec3, d = e.Vec4, c = e.UIMeshRenderer, h = e.MeshRenderer, p = e.instantiate, m = e.Tween, _ = e.tween, g = e.Texture2D
        }, function(e) {
            f = e.Utils
        }, function(e) {
            C = e.default
        }, function(e) {
            E = e.BaseComponent
        }, function(e) {
            S = e.RoomMgr
        }, function(e) {
            A = e.FXJRes
        }, function(e) {
            I = e.CardUtil
        }],
        execute: function() {
            var G, y, v, P, T, b, O, R, M, N, U, D, L, B, w, k;
            e("CardTag", void 0), o._RF.push({}, "a833dTlj1xL7KKWrTqcH2ng", "NodeCardCtr", void 0);
            var H, x = r.ccclass,
                F = r.property,
                V = r.menu;
            ! function(e) {
                e[e.Default = 0] = "Default", e[e.HandCard = 1] = "HandCard"
            }(H || (H = e("CardTag", {})));
            e("NodeCardCtr", (G = x("NodeCardCtr"), y = V("prefab/subGame/mj/NodeCardCtr"), v = F({
                tooltip: "手牌模型节点",
                type: s
            }), P = F({
                tooltip: "手牌左上角位置的标签模板节点",
                type: s
            }), T = F({
                tooltip: "手牌左下角位置的标签模板节点",
                type: s
            }), b = F({
                tooltip: "手牌右上角标签模板节点",
                type: s
            }), O = F({
                tooltip: "手牌箭头模板节点",
                type: s
            }), R = F({
                tooltip: "拼图图集",
                type: u
            }), G(M = y((U = t((N = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "nodeCardMesh", U, i(t)), a(t, "nodeCardTabTemplate", D, i(t)), a(t, "notherNodeCardTabTemplate", L, i(t)), a(t, "topRightCardTabTemplate", B, i(t)), a(t, "nodeCardArrowTemplate", w, i(t)), a(t, "imgAtlas", k, i(t)), t.albedo = new l(1, 1, 1), t.cardColor = new d(1, 1, 1, 1), t.nodeCardTab = null, t.nodeCardArrow = null, t.byte = 0, t.rotationFromEuler = {
                        x: 0,
                        y: 0,
                        z: 0
                    }, t.opCode = 0, t.touchEnable = !0, t.colorFlag = 0, t.tabFlag = 0, t.tag = H.Default, t
                }
                n(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {}, o.onLoad = function() {}, o.start = function() {
                    this.byte > 0 && this.setCardByte(this.byte)
                }, o.addGameComp = function() {
                    null == this.node && (this.node = f.create_2DNode()), this.node.addComponent("MJGameComponent");
                    var e = this.node.getComponent("MJGameComponent");
                    return "function" == typeof e.setDelegate && e.setDelegate(this), e
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("MJGameComponent");
                    if (null == t && (t = this.addGameComp()), "function" == typeof t[e]) {
                        for (var n, a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) i[o - 1] = arguments[o];
                        return (n = t)[e].apply(n, i)
                    }
                }, o.setCardTag = function(e) {
                    this.tag = e
                }, o.getCardTag = function() {
                    return this.tag
                }, o.setMeldCardByte = function(e, t) {
                    this.opCode = t, this.setCardByte(e)
                }, o.getCardByte = function() {
                    return this.byte
                }, o.setRotationFromEuler = function(e) {
                    this.rotationFromEuler = e
                }, o.getRotationFromEuler = function() {
                    return this.rotationFromEuler
                }, o.setCardByte = function(e) {
                    f.isNull(e) && console.log("setCardByte 牌值异常", (new Error).stack), 0 != this.byte && this.byte == e || (this.resetColorFalg(), this.resetTabFalg(), this.doGameCompFun("resetHandCard", this.node)), this.byte = e;
                    var t = I.getCardTillingValue(e);
                    if (this.nodeCardMesh.getComponent(c)) try {
                        this.nodeCardMesh.getComponent(h).material.setProperty("tilingOffset", new d(.08, .16, t[0] / 10 + .01, t[1] / 5 + .02))
                    } catch (e) {
                        console.error('Error setting property "tilingOffset":', e)
                    } else this.nodeCardMesh.getComponent(h).setInstancedAttribute("a_tilingOffset", [1, 1, t[0] / 10, t[1] / 5]);
                    this.checkHandCard()
                }, o.setCardAlbedo = function(e) {
                    this.albedo = e, this.nodeCardMesh.getComponent(c) ? this.updateAlbedo(this.albedo) : this.nodeCardMesh.getComponent(h).setInstancedAttribute("a_colorScale", [1 - this.albedo.x, 1 - this.albedo.y, 1 - this.albedo.z, 0])
                }, o.setColor = function(e) {
                    void 0 === e && (e = null), e ? this.nodeCardMesh.getComponent(c) ? this.updateAlbedo(e) : this.nodeCardMesh.getComponent(h).setInstancedAttribute("a_colorScale", [1 - e.x, 1 - e.y, 1 - e.z, 1]) : this.nodeCardMesh.getComponent(c) ? this.updateAlbedo(this.albedo) : this.nodeCardMesh.getComponent(h).setInstancedAttribute("a_colorScale", [1 - this.albedo.x, 1 - this.albedo.y, 1 - this.albedo.z, 0])
                }, o.updateAlbedo = function(e) {
                    var t = this.nodeCardMesh.getComponent(h);
                    if (t) {
                        var n = t.material;
                        n && (this.cardColor.x = e.x, this.cardColor.y = e.y, this.cardColor.z = e.z, n.setProperty("albedo", this.cardColor))
                    }
                }, o.setBlack = function(e) {
                    this.setColorFlag(1, e), this.showColorFlag()
                }, o.setRed = function(e) {
                    this.setColorFlag(2, e), this.showColorFlag()
                }, o.setYellow = function(e) {
                    this.setColorFlag(4, e), this.showColorFlag()
                }, o.resetCard = function() {
                    this.rotationFromEuler = {
                        x: 0,
                        y: 0,
                        z: 0
                    }, this.resetColorFalg(), this.resetTabFalg(), this.setColor(), this.doGameCompFun("resetHandCard", this.node)
                }, o.setArrow = function(e, t, n) {
                    if (void 0 === t && (t = !1), void 0 === n && (n = !1), f.isNotNull(this.nodeCardArrowTemplate) && (f.isNotNull(this.nodeCardArrow) ? this.nodeCardArrow.active = e : e && (this.nodeCardArrow = p(this.nodeCardArrowTemplate), this.node.addChild(this.nodeCardArrow), this.nodeCardArrow.active = !0), m.stopAllByTarget(this.nodeCardArrow), e)) {
                        var a = this.nodeCardArrow.getComponent(C);
                        t ? a.setLocalLoad(A.Picture_Ting_Arrow_More.bundle, A.Picture_Ting_Arrow_More.path) : n ? a.setLocalLoad(A.Picture_Ting_Arrow_Big.bundle, A.Picture_Ting_Arrow_Big.path) : a.setLocalLoad(A.Picture_Ting_Arrow.bundle, A.Picture_Ting_Arrow.path), this.nodeCardArrow.setPosition(0, 80, 0), _(this.nodeCardArrow).by(.5, {
                            position: new l(0, 10, 0)
                        }).by(.5, {
                            position: new l(0, -10, 0)
                        }).union().repeatForever().start()
                    }
                }, o.getArrow = function() {
                    return !!f.isNotNull(this.nodeCardArrow) && this.nodeCardArrow.active
                }, o.checkHandCard = function() {
                    this.checkTabFlag(), this.showTabFlag(), this.updateSpecialCardTag()
                }, o.checkHandCardColor = function() {
                    this.doGameCompFun("checkHandCardColor", this)
                }, o.updateSpecialCardTag = function() {
                    f.isNotNull(this.notherNodeCardTabTemplate) && this.doGameCompFun("checkHandCard", this.node, this.notherNodeCardTabTemplate, this.byte)
                }, o.getTopRightCardTabTemplate = function() {
                    return {
                        node: this.node,
                        tempTag: this.topRightCardTabTemplate,
                        imgAtlas: this.imgAtlas
                    }
                }, o.getTopLeftCardTabTemplate = function() {
                    return {
                        node: this.node,
                        tempTag: this.nodeCardTabTemplate,
                        imgAtlas: this.imgAtlas
                    }
                }, o.checkLaizi = function() {
                    if (f.isNotNull(this.nodeCardTabTemplate)) {
                        var e = I.isLaiziCard(this.byte);
                        this.setTabFlag(1, e), this.setYellow(e)
                    }
                }, o.checkPao = function() {
                    if (f.isNotNull(this.nodeCardTabTemplate)) {
                        var e = I.isPaoCard(this.byte, S.getInstance().paoCardsMap);
                        this.setTabFlag(2, e)
                    }
                }, o.checkTabFlag = function() {
                    this.doGameCompFun("checkTabFlag", this) || (this.checkLaizi(), this.checkPao())
                }, o.setTouchEnable = function(e) {
                    this.touchEnable = e
                }, o.getTouchEnable = function() {
                    return this.touchEnable
                }, o.resetColorFalg = function() {
                    this.colorFlag = 0
                }, o.setColorFlag = function(e, t) {
                    t ? this.colorFlag |= e : this.colorFlag &= ~e
                }, o.showColorFlag = function() {
                    1 == (1 & this.colorFlag) ? this.setColor(new l(.2, .2, .2)) : 2 == (2 & this.colorFlag) ? this.setColor(new l(1, .25, .25)) : 4 == (4 & this.colorFlag) ? this.setColor(new l(1, .87, .42)) : this.setColor()
                }, o.resetTabFalg = function() {
                    this.doGameCompFun("resetTabFalg", this) || (this.tabFlag = 0)
                }, o.setTabFlag = function(e, t) {
                    t ? this.tabFlag |= e : this.tabFlag &= ~e
                }, o.showTabFlag = function() {
                    var e = this;
                    this.doGameCompFun("showTabFlag", this) || f.isNotNull(this.nodeCardTabTemplate) && (2 == (2 & this.tabFlag) ? this.getPreLoaderRes(A.Picture_Game_Card_Pao.bundle, A.Picture_Game_Card_Pao.path, g, (function(t) {
                        t && 2 == (2 & e.tabFlag) && (f.isNotNull(e.nodeCardTab) ? (e.nodeCardTab.getComponentInChildren(h).material.setProperty("albedoMap", t), e.nodeCardTab.active = !0) : (e.nodeCardTab = p(e.nodeCardTabTemplate), e.nodeCardTab.getComponentInChildren(h).material.setProperty("albedoMap", t), e.node.addChild(e.nodeCardTab), e.nodeCardTab.active = !0))
                    })) : 1 == (1 & this.tabFlag) ? this.getPreLoaderRes(A.Picture_Game_Card_Laizi.bundle, A.Picture_Game_Card_Laizi.path, g, (function(t) {
                        t && 1 == (1 & e.tabFlag) && (f.isNotNull(e.nodeCardTab) ? (e.nodeCardTab.getComponentInChildren(h).material.setProperty("albedoMap", t), e.nodeCardTab.active = !0) : (e.nodeCardTab = p(e.nodeCardTabTemplate), e.nodeCardTab.getComponentInChildren(h).material.setProperty("albedoMap", t), e.node.addChild(e.nodeCardTab), e.nodeCardTab.active = !0))
                    })) : f.isNotNull(this.nodeCardTab) && (this.nodeCardTab.active = !1))
                }, o.onDestroy = function() {
                    f.isNotNull(this.nodeCardArrow) && m.stopAllByTarget(this.nodeCardArrow)
                }, t
            }(E)).prototype, "nodeCardMesh", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), D = t(N.prototype, "nodeCardTabTemplate", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), L = t(N.prototype, "notherNodeCardTabTemplate", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), B = t(N.prototype, "topRightCardTabTemplate", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), w = t(N.prototype, "nodeCardArrowTemplate", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), k = t(N.prototype, "imgAtlas", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), M = N)) || M) || M)), o._RF.pop()
        }
    }
}))