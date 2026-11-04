System.register("chunks:///_virtual/NodeCardCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./SpriteLoad.ts", "./BaseComponent.ts", "./RoomMgr.ts", "./FXJRes.ts", "./CardUtil.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m, C, I, A, E, v;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, l = e.SpriteAtlas, u = e.Vec3, d = e.Vec4, c = e.UIMeshRenderer, h = e.MeshRenderer, p = e.instantiate, f = e.Tween, _ = e.tween, g = e.Texture2D
        }, function(e) {
            m = e.Utils
        }, function(e) {
            C = e.default
        }, function(e) {
            I = e.BaseComponent
        }, function(e) {
            A = e.RoomMgr
        }, function(e) {
            E = e.FXJRes
        }, function(e) {
            v = e.CardUtil
        }],
        execute: function() {
            var y, S, P, T, G, O, R, N, b, D, L, M, U, w, B, H;
            e("CardTag", void 0), o._RF.push({}, "04179w8t55OcJMp9MIkyYwz", "NodeCardCtr", void 0);
            var F, k = r.ccclass,
                V = r.property,
                x = r.menu;
            ! function(e) {
                e[e.Default = 0] = "Default", e[e.HandCard = 1] = "HandCard"
            }(F || (F = e("CardTag", {})));
            e("NodeCardCtr", (y = k("NodeCardCtr"), S = x("prefab/game/NodeCardCtr"), P = V({
                tooltip: "手牌模型节点",
                type: s
            }), T = V({
                tooltip: "手牌左上角位置的标签模板节点",
                type: s
            }), G = V({
                tooltip: "手牌左下角位置的标签模板节点",
                type: s
            }), O = V({
                tooltip: "手牌右上角标签模板节点",
                type: s
            }), R = V({
                tooltip: "手牌箭头模板节点",
                type: s
            }), N = V({
                tooltip: "拼图图集",
                type: l
            }), y(b = S((L = t((D = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "nodeCardMesh", L, a(t)), i(t, "nodeCardTabTemplate", M, a(t)), i(t, "notherNodeCardTabTemplate", U, a(t)), i(t, "topRightCardTabTemplate", w, a(t)), i(t, "nodeCardArrowTemplate", B, a(t)), i(t, "imgAtlas", H, a(t)), t.albedo = new u(1, 1, 1), t.cardColor = new d(1, 1, 1, 1), t.nodeCardTab = null, t.nodeCardArrow = null, t.byte = 0, t.rotationFromEuler = {
                        x: 0,
                        y: 0,
                        z: 0
                    }, t.opCode = 0, t.touchEnable = !0, t.colorFlag = 0, t.tabFlag = 0, t.tag = F.Default, t
                }
                n(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {}, o.onLoad = function() {}, o.start = function() {
                    this.byte > 0 && this.setCardByte(this.byte)
                }, o.addGameComp = function() {
                    return null == this.node && (this.node = m.create_2DNode()), this.node.addComponent("GameComponent"), this.node.getComponent("GameComponent")
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("GameComponent");
                    if (null == t && (t = this.addGameComp()), "function" == typeof t[e]) {
                        for (var n, i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) a[o - 1] = arguments[o];
                        return (n = t)[e].apply(n, a)
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
                    m.isNull(e) && console.log("setCardByte 牌值异常", (new Error).stack), 0 != this.byte && this.byte == e || (this.resetColorFalg(), this.resetTabFalg(), this.doGameCompFun("resetHandCard", this.node)), this.byte = e;
                    var t = v.getCardTillingValue(e);
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
                    this.byte = 0, this.rotationFromEuler = {
                        x: 0,
                        y: 0,
                        z: 0
                    }, this.resetColorFalg(), this.resetTabFalg(), this.setColor(), this.doGameCompFun("resetHandCard", this.node)
                }, o.setArrow = function(e, t, n) {
                    if (void 0 === t && (t = !1), void 0 === n && (n = !1), m.isNotNull(this.nodeCardArrowTemplate) && (m.isNotNull(this.nodeCardArrow) ? this.nodeCardArrow.active = e : e && (this.nodeCardArrow = p(this.nodeCardArrowTemplate), this.node.addChild(this.nodeCardArrow), this.nodeCardArrow.active = !0), f.stopAllByTarget(this.nodeCardArrow), e)) {
                        var i = this.nodeCardArrow.getComponent(C);
                        t ? i.setLocalLoad(E.Picture_Ting_Arrow_More.bundle, E.Picture_Ting_Arrow_More.path) : n ? i.setLocalLoad(E.Picture_Ting_Arrow_Big.bundle, E.Picture_Ting_Arrow_Big.path) : i.setLocalLoad(E.Picture_Ting_Arrow.bundle, E.Picture_Ting_Arrow.path), this.nodeCardArrow.setPosition(0, 80, 0), _(this.nodeCardArrow).by(.5, {
                            position: new u(0, 10, 0)
                        }).by(.5, {
                            position: new u(0, -10, 0)
                        }).union().repeatForever().start()
                    }
                }, o.getArrow = function() {
                    return !!m.isNotNull(this.nodeCardArrow) && this.nodeCardArrow.active
                }, o.checkHandCard = function() {
                    this.checkTabFlag(), this.showTabFlag(), this.updateSpecialCardTag()
                }, o.checkHandCardColor = function() {
                    this.doGameCompFun("checkHandCardColor", this)
                }, o.updateSpecialCardTag = function() {
                    m.isNotNull(this.notherNodeCardTabTemplate) && this.doGameCompFun("checkHandCard", this.node, this.notherNodeCardTabTemplate, this.byte)
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
                    if (m.isNotNull(this.nodeCardTabTemplate)) {
                        var e = v.isLaiziCard(this.byte);
                        this.setTabFlag(1, e), this.setYellow(e)
                    }
                }, o.checkPao = function() {
                    if (m.isNotNull(this.nodeCardTabTemplate)) {
                        var e = v.isPaoCard(this.byte, A.getInstance().paoCardsMap);
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
                    1 == (1 & this.colorFlag) ? this.setColor(new u(.2, .2, .2)) : 2 == (2 & this.colorFlag) ? this.setColor(new u(1, .25, .25)) : 4 == (4 & this.colorFlag) ? this.setColor(new u(1, .87, .42)) : this.setColor()
                }, o.resetTabFalg = function() {
                    this.doGameCompFun("resetTabFalg", this) || (this.tabFlag = 0)
                }, o.setTabFlag = function(e, t) {
                    t ? this.tabFlag |= e : this.tabFlag &= ~e
                }, o.showTabFlag = function() {
                    var e = this;
                    this.doGameCompFun("showTabFlag", this) || m.isNotNull(this.nodeCardTabTemplate) && (2 == (2 & this.tabFlag) ? this.getPreLoaderRes(E.Picture_Game_Card_Pao.bundle, E.Picture_Game_Card_Pao.path, g, (function(t) {
                        t && 2 == (2 & e.tabFlag) && (m.isNotNull(e.nodeCardTab) ? (e.nodeCardTab.getComponentInChildren(h).material.setProperty("albedoMap", t), e.nodeCardTab.active = !0) : (e.nodeCardTab = p(e.nodeCardTabTemplate), e.nodeCardTab.getComponentInChildren(h).material.setProperty("albedoMap", t), e.node.addChild(e.nodeCardTab), e.nodeCardTab.active = !0))
                    })) : 1 == (1 & this.tabFlag) ? this.getPreLoaderRes(E.Picture_Game_Card_Laizi.bundle, E.Picture_Game_Card_Laizi.path, g, (function(t) {
                        t && 1 == (1 & e.tabFlag) && (m.isNotNull(e.nodeCardTab) ? (e.nodeCardTab.getComponentInChildren(h).material.setProperty("albedoMap", t), e.nodeCardTab.active = !0) : (e.nodeCardTab = p(e.nodeCardTabTemplate), e.nodeCardTab.getComponentInChildren(h).material.setProperty("albedoMap", t), e.node.addChild(e.nodeCardTab), e.nodeCardTab.active = !0))
                    })) : m.isNotNull(this.nodeCardTab) && (this.nodeCardTab.active = !1))
                }, o.onDestroy = function() {
                    m.isNotNull(this.nodeCardArrow) && f.stopAllByTarget(this.nodeCardArrow)
                }, t
            }(I)).prototype, "nodeCardMesh", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), M = t(D.prototype, "nodeCardTabTemplate", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), U = t(D.prototype, "notherNodeCardTabTemplate", [G], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), w = t(D.prototype, "topRightCardTabTemplate", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), B = t(D.prototype, "nodeCardArrowTemplate", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), H = t(D.prototype, "imgAtlas", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), b = D)) || b) || b)), o._RF.pop()
        }
    }
}))