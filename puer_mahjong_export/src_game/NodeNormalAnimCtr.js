System.register("chunks:///_virtual/NodeNormalAnimCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./AppEvent.ts", "./GameRes.ts", "./LayerManager.ts", "./ResLoader.ts", "./EventManager.ts", "./SpineAniUtils.ts", "./BaseComponent.ts", "./PlayerMgr.ts", "./RoomMgr.ts", "./FXJConstant.ts", "./FXJEvent.ts", "./FXJRes.ts", "./FXJSound.ts", "./GameRuleConfig.ts", "./GameViewConfig.ts", "./CardUtil.ts", "./NodeUserCtr.ts", "./NodeUserPrefabCtr.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m, C, I, A, E, v, y, S, P, T, G, O, R, N, b, D, L, M, U, w, B, H;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, l = e.SpriteAtlas, u = e.NodePool, d = e.SpriteFrame, c = e.instantiate, h = e.Sprite, p = e.tween, f = e.Vec3, _ = e.sp, g = e.UITransform, m = e.ImageAsset, C = e.Texture2D
        }, function(e) {
            I = e.Utils
        }, function(e) {
            A = e.AppEvent
        }, function(e) {
            E = e.GameRes
        }, function(e) {
            v = e.LayerManager
        }, function(e) {
            y = e.resLoader
        }, function(e) {
            S = e.EventManager
        }, function(e) {
            P = e.SpineAniUtils
        }, function(e) {
            T = e.BaseComponent
        }, function(e) {
            G = e.PlayerMgr
        }, function(e) {
            O = e.RoomMgr
        }, function(e) {
            R = e.FXJConstant
        }, function(e) {
            N = e.FXJEvent
        }, function(e) {
            b = e.FXJRes
        }, function(e) {
            D = e.GameSound, L = e.FXJSound
        }, function(e) {
            M = e.GamePaiXingConfig
        }, function(e) {
            U = e.GameViewConfig
        }, function(e) {
            w = e.CardUtil
        }, function(e) {
            B = e.NodeUserCtr
        }, function(e) {
            H = e.NodeUserPrefabCtr
        }],
        execute: function() {
            var F, k, V, x, W, z, Z, X, J, j, Y, Q, q, K, $, ee, te, ne;
            o._RF.push({}, "c21b4qO1ulIGoGleCuwiiS1", "NodeNormalAnimCtr", void 0);
            var ie = r.ccclass,
                ae = r.property,
                oe = r.menu;
            e("NodeNormalAnimCtr", (F = ie("NodeNormalAnimCtr"), k = oe("prefab/game/NodeNormalAnimCtr"), V = ae({
                tooltip: "玩家节点",
                type: B
            }), x = ae({
                tooltip: "互动道具",
                type: s
            }), W = ae({
                tooltip: "胡牌动画",
                type: s
            }), z = ae({
                tooltip: "结算动画",
                type: s
            }), Z = ae({
                tooltip: "精灵动画层",
                type: s
            }), X = ae({
                tooltip: "动画精灵模板",
                type: s
            }), J = ae({
                tooltip: "动画资源",
                type: l
            }), F(j = k((Q = t((Y = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "allUserNode", Q, a(t)), t.hudongAnimNodePool = new u, i(t, "hudongAnimNode", q, a(t)), i(t, "huAnimNode", K, a(t)), i(t, "settleAnimNode", $, a(t)), i(t, "spriteAnimNode", ee, a(t)), i(t, "spriteTemplate", te, a(t)), i(t, "spriteAtlas", ne, a(t)), t.commonAnimMap = new Map, t._anim_pos_config = [{
                        x: 0,
                        y: -90
                    }, {
                        x: 180,
                        y: 50
                    }, {
                        x: 0,
                        y: 200
                    }, {
                        x: -180,
                        y: 50
                    }], t
                }
                n(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {
                    this.addModelListener(N.VIEW_DESK_ANI_PLAY, this.startPlayAnim), this.addModelListener(N.VIEW_OUT_CARD_ANI_PLAY, this.startPlayOutCardAnim), this.addModelListener(A.UPDATE_PRIVATE_ROOM_INFO, this.onUpdatePrivateRoomInfo)
                }, o.onLoad = function() {
                    console.log("动画节点出现了"), this.addGameComp(), this.node.active = !0, this.spriteTemplate.active = !1, this.hudongAnimNodePool.put(this.hudongAnimNode)
                }, o.start = function() {
                    this.initAnimPos()
                }, o.initAnimPos = function() {
                    var e = this;
                    this.doGameCompFun("getPaiXinAnimPos", (function(t) {
                        e._anim_pos_config = t
                    }))
                }, o.addGameComp = function() {
                    null == this.node && (this.node = I.create_2DNode()), this.node.addComponent("GameComponent")
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("GameComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                        return t[e].apply(t, i)
                    }
                }, o.onUpdatePrivateRoomInfo = function(e, t) {
                    this.initAnimPos()
                }, o.startPlayAnim = function(e, t, n, i) {
                    switch (t) {
                        case R.AnimNormal.HudongProp:
                            this.__showHuDongDaoju(n);
                            break;
                        case R.AnimNormal.common:
                            this._showCommonSpine(n, i);
                            break;
                        case R.AnimNormal.picCommon:
                            this._showSpriteCommonAnim(n);
                            break;
                        case R.AnimNormal.Enter:
                            this._showEnterSpine(n)
                    }
                }, o._showSpriteCommonAnim = function(e) {
                    null != e && e.tag && (this.commonAnimMap.get(e.tag) ? this.commonAnimMap.get(e.tag).push(e) : this.commonAnimMap.set(e.tag, [e]), this.playSpriteAnim(e.tag))
                }, o.playSpriteAnim = function(e) {
                    var t, n = this;
                    if ((null == (t = this.commonAnimMap.get(e)) ? void 0 : t.length) > 0 && !this.spriteAnimNode.getChildByName(e)) {
                        var i, a = this.commonAnimMap.get(e).shift(),
                            o = {
                                x: 0,
                                y: 0
                            };
                        if (a.pos) o = a.pos;
                        else if (a.seatId) {
                            var r = w.calculatePlayerSeat(O.getInstance().mySeatId, a.seatId);
                            o = this._anim_pos_config[r]
                        }
                        "string" == typeof a.sprite ? i = this.spriteAtlas.getSpriteFrame(a.sprite) : a.sprite instanceof d && (i = a.sprite);
                        var s = a.tag;
                        if (i) {
                            var l = c(this.spriteTemplate);
                            l.name = s, l.active = !0;
                            var u = l.getComponent(h);
                            u.spriteFrame = i, u.sizeMode = h.SizeMode.RAW, this.spriteAnimNode.addChild(l), l.setPosition(o.x, o.y), l.setScale(.8, .8, 1), p(l).to(.2, {
                                scale: new f(1.2, 1.2, 1)
                            }).to(.2, {
                                scale: new f(.9, .9, 1)
                            }).to(.2, {
                                scale: new f(1, 1, 1)
                            }).delay(1.5).call((function() {
                                l.removeFromParent(), l.destroy(), n.playSpriteAnim(e)
                            })).start()
                        }
                    }
                }, o._showCommonSpine = function(e, t) {
                    var n = this;
                    if (void 0 === t && (t = null), t)
                        for (var i = 0; i < this.allUserNode.node.children.length; i++) {
                            var a = this.allUserNode.node.children[i];
                            a.getComponent(H).UID == t && (e.toPos = a.getPosition())
                        }
                    var o = e.resConf,
                        r = e.aniName;
                    P.loadSkeleDataInBundle(o.bundle, o.path, this, null, function(t, i) {
                        if (!t) {
                            var a = (null == e ? void 0 : e.parentNode) || n.node,
                                o = P.createSpineNode(a, i, r, 0, e.isLoop);
                            if (o.name = r, n.spriteAnimNode.addChild(o), a && a.isValid && null != o && o.isValid) return o.setPosition(e.toPos || new f(0, 0, 0)), void o.getComponent(_.Skeleton).setCompleteListener((function(t) {
                                e.eventId && S.dispatch(e.eventId), n.destoryChild(o)
                            }));
                            n.destoryChild(o)
                        }
                    }.bind(this))
                }, o._showEnterSpine = function(e, t) {
                    var n = this,
                        i = e.resConf,
                        a = e.aniName;
                    P.loadSkeleDataInBundle(i.bundle, i.path, this, null, function(t, i) {
                        if (!t) {
                            var o = (null == e ? void 0 : e.parentNode) || n.node,
                                r = P.createSpineNode(o, i, a, 0, e.isLoop);
                            if (r.name = a, o && o.isValid && null != r && r.isValid) return r.setPosition(e.toPos || new f(0, 0, 0)), r.setScale(e.scale || new f(1, 1, 1)), void r.getComponent(_.Skeleton).setCompleteListener((function(t) {
                                e.eventId && S.dispatch(e.eventId), n.destoryChild(r)
                            }));
                            n.destoryChild(r)
                        }
                    }.bind(this))
                }, o.__showHuDongDaoju = function(e) {
                    if (console.log("动画节点出现了:__showHuDongDaoju"), 0 != this.allUserNode.node.children.length) {
                        e = I.table_verify(e);
                        var t = R.HuDongPropConf.anim[I.number_valueOf(e.prop_id, -1)];
                        if (t) {
                            for (var n = null, i = null, a = null, o = 0; o < this.allUserNode.node.children.length; o++) {
                                var r = this.allUserNode.node.children[o],
                                    s = r.getComponent(H);
                                s.UID == e.uid && (n = r, s.getUserLocalPos()), s.UID == e.to_uid && (i = r, a = s.getUserLocalPos())
                            }
                            if (n && i && n != i) {
                                var l = n.getPosition(),
                                    u = i.getPosition(),
                                    d = R.HuDongPropConf.direction[a],
                                    c = I.string_format(t.action, d),
                                    h = this,
                                    g = h.getHudongNode();
                                g.active = !0, g.setPosition(new f(l.x, l.y + 50, l.z)), h.node.addChild(g);
                                var m = g.getComponent(_.Skeleton);
                                P.loadSkeleDataInBundle(t.bundle.bundle, t.bundle.path, this, null, function(e, n) {
                                    if (!e && g && g.isValid) {
                                        var i = c;
                                        g.active = !0, m.skeletonData = n, m.setCompleteListener((function(e) {
                                            var t, n;
                                            console.log("动画---播放完成------2", null == (t = e.animation) ? void 0 : t.name), (null == (n = e.animation) ? void 0 : n.name) == i && (g.active = !1, h.hudongAnimNodePool.put(g), m.clearTracks())
                                        })), m.setAnimation(0, c, !1);
                                        var a = t.delay || 0;
                                        null != t.actions && t.actions.forEach((function(e) {
                                            m.addAnimation(0, e.ac, !1, a), a = a + e.delay || 0, i = e.ac
                                        })), t.action_end && (i = I.string_format(t.action_end, d), m.addAnimation(0, i, !1, a));
                                        var o = t.diff || {
                                            x: 0,
                                            y: 0
                                        };
                                        p(g).delay(t.delay || 0).to(t.time, {
                                            position: new f(u.x + o.x, u.y + 54 + o.y, u.z)
                                        }).call((function() {
                                            null != t.sound && D.getInstance().playEffect({
                                                bundle: E.InteractProp.bundle,
                                                path: I.string_format(E.InteractProp.path, t.sound)
                                            })
                                        })).start()
                                    }
                                }.bind(this))
                            }
                        }
                    }
                }, o.getHudongNode = function() {
                    var e = this.hudongAnimNodePool.get();
                    return e || (e = c(this.hudongAnimNode)), e
                }, o.startPlayOutCardAnim = function(e, t) {
                    var n = this;
                    switch (console.log("startPlayOutCardAnim", t), t.aniType) {
                        case U.AnimType.GameStart:
                            var i = {
                                resConf: b.Spine_Start,
                                aniName: "DJKS",
                                parentNode: null,
                                trackIndex: 0,
                                isLoop: !1,
                                eventId: t.eventId
                            };
                            this._showCommonSpine(i);
                            break;
                        case U.AnimType.GameOver:
                            var a = {
                                resConf: b.Spine_Over,
                                aniName: "djjs",
                                parentNode: null,
                                trackIndex: 0,
                                isLoop: !1,
                                toPos: new f(0, 77, 0),
                                callStartFunc: function() {}
                            };
                            this._showCommonSpine(a);
                            break;
                        case U.AnimType.Hu:
                            var o = c(this.huAnimNode);
                            this.huAnimNode.parent.addChild(o);
                            var r = o.getComponent(_.Skeleton);
                            this.spriteAnimNode.addChild(o), o.active = !0;
                            var s = v.camera2D.screenToWorld(v.camera3D.worldToScreen(t.pos)),
                                l = this.node.getComponent(g).convertToNodeSpaceAR(s);
                            r.setAnimation(0, "hupai", !1), o.setPosition(l), D.getInstance().playEffect(L.GameHuAni);
                            var u = null;
                            u = this.addSchedulerOnce(1.2, (function() {
                                u = null, null != o && o.isValid && (o.removeFromParent(), o.destroy())
                            })), r.setCompleteListener((function() {
                                u && (n.stopSchedulerOnce(u), u = null), null != o && o.isValid && (o.removeFromParent(), o.destroy())
                            }));
                            break;
                        case U.AnimType.Hu2:
                            var d = c(this.huAnimNode);
                            this.huAnimNode.parent.addChild(d);
                            var m = d.getComponent(_.Skeleton);
                            this.spriteAnimNode.addChild(d), d.active = !0;
                            var C = v.camera2D.screenToWorld(v.camera3D.worldToScreen(t.pos)),
                                A = this.node.getComponent(g).convertToNodeSpaceAR(C);
                            m.setAnimation(0, "hupai2", !1), d.setPosition(A), D.getInstance().playEffect(L.GameDianPaoAni), m.setCompleteListener((function() {
                                null != d && d.isValid && (d.removeFromParent(), d.destroy())
                            }));
                            break;
                        case U.AnimType.Peng:
                            var E = c(this.huAnimNode);
                            this.huAnimNode.parent.addChild(E);
                            var y = E.getComponent(_.Skeleton);
                            this.spriteAnimNode.addChild(E), E.active = !0;
                            var P = v.camera2D.screenToWorld(v.camera3D.worldToScreen(t.pos)),
                                T = this.node.getComponent(g).convertToNodeSpaceAR(P);
                            y.setAnimation(0, "peng_yanwu", !1), E.setPosition(T), y.setCompleteListener((function() {
                                null != E && E.isValid && (E.removeFromParent(), E.destroy())
                            }));
                            break;
                        case U.AnimType.ChaJiao:
                            this.settleAnimNode.active = !0;
                            var R = "chajiao" + t.seatId;
                            this._settleAnimChild(R);
                            var N = c(this.spriteTemplate);
                            N.active = !0;
                            var B = N.getComponent(h);
                            B.spriteFrame = this.spriteAtlas.getSpriteFrame("chajiao"), B.sizeMode = h.SizeMode.RAW, N.name = R, this.settleAnimNode.addChild(N), N.setPosition(0, 80), p(N).to(.5, {
                                position: new f(0, 0)
                            }).delay(1).call((function() {
                                B.spriteFrame = null
                            })).delay(I.number_valueOf(t.delay)).call((function() {
                                N.active = !1, n._settleAnimChild(R), S.dispatch(t.eventId)
                            })).start(), D.getInstance().playEffect(L.Liuju);
                            break;
                        case U.AnimType.WuJiao:
                            if (this.settleAnimNode.active = !0, this.settleAnimNode.active) {
                                var H = w.calculatePlayerSeat(O.getInstance().mySeatId, t.seatId);
                                if (this._anim_pos_config[H]) {
                                    var F = "wujiao" + t.seatId;
                                    this._settleAnimChild(F);
                                    var k = c(this.spriteTemplate);
                                    k.active = !0;
                                    var V = k.getComponent(h);
                                    V.spriteFrame = this.spriteAtlas.getSpriteFrame("wujiao"), V.sizeMode = h.SizeMode.RAW, k.name = F, this.settleAnimNode.addChild(k), k.setPosition(this._anim_pos_config[H].x, this._anim_pos_config[H].y), k.setScale(.2, .2, 1), p(k).delay(1.5).to(.2, {
                                        scale: new f(1.2, 1.2, 1)
                                    }).to(.2, {
                                        scale: new f(.9, .9, 1)
                                    }).to(.2, {
                                        scale: new f(1, 1, 1)
                                    }).delay(1).call((function() {
                                        n._settleAnimChild(F)
                                    })).start()
                                }
                            }
                            break;
                        case U.AnimType.HuaZhu:
                            if (this.settleAnimNode.active = !0, this.settleAnimNode.active) {
                                var x = w.calculatePlayerSeat(O.getInstance().mySeatId, t.seatId);
                                if (this._anim_pos_config[x]) {
                                    var W = "huazhu" + t.seatId;
                                    this._settleAnimChild(W);
                                    var z = c(this.spriteTemplate);
                                    z.active = !0;
                                    var Z = z.getComponent(h);
                                    Z.spriteFrame = this.spriteAtlas.getSpriteFrame("huazhu"), Z.sizeMode = h.SizeMode.RAW, z.name = W, this.settleAnimNode.addChild(z), z.setPosition(this._anim_pos_config[x].x, this._anim_pos_config[x].y), z.setScale(.2, .2, 1), p(z).delay(1.5).to(.2, {
                                        scale: new f(1.2, 1.2, 1)
                                    }).to(.2, {
                                        scale: new f(.9, .9, 1)
                                    }).to(.2, {
                                        scale: new f(1, 1, 1)
                                    }).delay(1).call((function() {
                                        n._settleAnimChild(W)
                                    })).start()
                                }
                            }
                            break;
                        case U.AnimType.GuanSi:
                            t.delay = 3, this._palySpecialAnim(t, "guansi");
                            break;
                        case U.AnimType.ZhuoJi:
                            this._palySpecialAnimZhuoji(t);
                            break;
                        case U.AnimType.HuangZhuang:
                            t.delay = 2, this._palySpecialAnim(t, "liuju"), D.getInstance().playEffect(L.Liuju);
                            break;
                        case U.AnimType.Gang:
                            if ("mg" == t.aniName) {
                                var X = {
                                    resConf: b.Spine_PaiXing_MG,
                                    aniName: "animation",
                                    parentNode: null,
                                    trackIndex: 0,
                                    isLoop: !1,
                                    eventId: t.eventId,
                                    toPos: new f(0, 0, 0)
                                };
                                this._showCommonSpine(X)
                            } else if ("ag" == t.aniName) {
                                var J = {
                                    resConf: b.Spine_PaiXing_AG,
                                    aniName: "animation",
                                    parentNode: null,
                                    trackIndex: 0,
                                    isLoop: !1,
                                    eventId: t.eventId,
                                    toPos: new f(0, 0, 0)
                                };
                                this._showCommonSpine(J)
                            }
                            break;
                        case U.AnimType.PaiXing:
                            var j = M[t.aniName];
                            if (I.isNotNull(j)) {
                                if (I.isNotNull(j.animSound)) {
                                    var Y = "xiaobo",
                                        Q = G.getInstance().findPlayerWithSeatId(t.seatId);
                                    I.isNotNull(Q) ? (2 == I.number_valueOf(Q.gameUserInfo.sex) && (Y = "xiaoya"), console.log("牌型", t.seatId, Y, Q.gameUserInfo.sex)) : console.log("牌型", t.seatId, Y, "玩家信息丢失");
                                    var q = I.clone(j.animSound);
                                    q.path = I.string_format(j.animSound.path, Y), D.getInstance().playEffect(q)
                                }
                                if (I.isNotNull(j.anim)) {
                                    var K = {
                                        resConf: j.anim,
                                        aniName: "animation",
                                        parentNode: null,
                                        trackIndex: 0,
                                        isLoop: !1,
                                        eventId: t.eventId,
                                        toPos: new f(0, 0, 0)
                                    };
                                    I.isNotNull(j.animText) ? this.showPaiXingAnim(K, t) : this._showCommonSpine(K)
                                } else console.log("牌型配置动画缺失", t.aniName), t.eventId && S.dispatch(t.eventId)
                            } else console.log("牌型配置缺失", t.aniName), t.eventId && S.dispatch(t.eventId)
                    }
                }, o._palySpecialAnim = function(e, t) {
                    var n = this;
                    this.settleAnimNode.active = !0;
                    var i = t + e.seatId;
                    this._settleAnimChild(i);
                    var a = c(this.spriteTemplate);
                    a.active = !0;
                    var o = a.getComponent(h);
                    o.spriteFrame = this.spriteAtlas.getSpriteFrame(t), o.sizeMode = h.SizeMode.RAW, a.name = i, this.settleAnimNode.addChild(a), a.setPosition(0, 80), p(a).to(.5, {
                        position: new f(0, 0)
                    }).delay(e.delay).call((function() {
                        n._settleAnimChild(i), S.dispatch(e.eventId)
                    })).start()
                }, o._settleAnimChild = function(e) {
                    var t = this.settleAnimNode.getChildByName(e);
                    t && t.isValid && (t.removeFromParent(), t.destroy())
                }, o._palySpecialAnimZhuoji = function(e) {
                    this.doGameCompFun("showZhuojiAnim", this.settleAnimNode, this.spriteTemplate, this.spriteAtlas, e)
                }, o.removeSpriteAnimNodeChild = function(e) {
                    var t = this.spriteAnimNode.getChildByName(e);
                    t && t.isValid && (t.removeFromParent(), t.destroy())
                }, o.destoryChild = function(e) {
                    null != e && e.isValid && (e.removeFromParent(), e.destroy())
                }, o.showPaiXingAnim = function(e, t) {
                    if (!e || !t || !t.aniName) return console.warn("参数错误:", e, t), void this.handleAnimError(e);
                    var n = M[t.aniName];
                    if (null == n || !n.animText) return console.warn("动画配置错误:", t.aniName), void this.handleAnimError(e);
                    try {
                        y.load(n.animText.bundle, n.animText.path, m, this.onTextureLoaded.bind(this, e))
                    } catch (t) {
                        console.error("加载资源失败:", t), this.handleAnimError(e)
                    }
                }, o.onTextureLoaded = function(e, t, n) {
                    if (t || !n) return console.warn("加载贴图失败:", t), void this.handleAnimError(e);
                    try {
                        var i = this.createTexture(n);
                        this.loadSpineAnimation(e, i)
                    } catch (t) {
                        console.error("创建动画失败:", t), this.handleAnimError(e)
                    }
                }, o.createTexture = function(e) {
                    var t = new C;
                    return t.image = e, t
                }, o.loadSpineAnimation = function(e, t) {
                    var n = this;
                    P.loadSkeleDataInBundle(e.resConf.bundle, e.resConf.path, this, null, (function(i, a) {
                        return n.onSpineLoaded(i, a, e, t)
                    }))
                }, o.onSpineLoaded = function(e, t, n, i) {
                    if (e) return console.warn("加载spine失败:", e), void this.handleAnimError(n);
                    var a = (null == n ? void 0 : n.parentNode) || this.node;
                    if (null == a || !a.isValid) return console.warn("父节点无效"), void this.handleAnimError(n);
                    try {
                        this.removeSpriteAnimNodeChild("spineNodeAnim");
                        var o = this.createSpineNode(a, t, n, i);
                        o.name = "spineNodeAnim", this.spriteAnimNode.addChild(o), this.setupSpineAnimation(o, n)
                    } catch (e) {
                        console.error("创建spine节点失败:", e), this.handleAnimError(n)
                    }
                }, o.createSpineNode = function(e, t, n, i) {
                    var a = P.createSpineNode(e, t, n.aniName, 0, n.isLoop);
                    if (!a) throw new Error("创建spine节点失败");
                    a.setPosition(n.toPos || new f(0, 0, 0));
                    var o = a.getComponent(_.Skeleton);
                    return this.setSpineTexture(o, i), a
                }, o.setSpineTexture = function(e, t) {
                    try {
                        this.setRegion(e, "text", "text_qgh", t), this.setRegion(e, "text2", "text_qgh", t)
                    } catch (e) {
                        console.warn("设置贴图失败:", e)
                    }
                }, o.setupSpineAnimation = function(e, t) {
                    var n = this;
                    e.getComponent(_.Skeleton).setCompleteListener((function(e) {
                        n.scheduleOnce((function() {
                            t.eventId && S.dispatch(t.eventId), n.removeSpriteAnimNodeChild("spineNodeAnim")
                        }), .5)
                    }))
                }, o.handleAnimError = function(e) {
                    null != e && e.eventId && S.dispatch(e.eventId)
                }, o.setRegion = function(e, t, n, i) {
                    if (null == e || !e.skeletonData) throw new Error("Invalid spine component");
                    var a = e.skeletonData.getRuntimeData(),
                        o = a.findSlotIndex(t);
                    if (-1 === o) throw new Error("Slot not found: " + t);
                    var r = a.findSkin("default");
                    if (!r) throw new Error("Default skin not found");
                    var s = r.getAttachment(o, n);
                    if (!s) throw new Error("Attachment not found: " + n);
                    var l = this.createRegion(i);
                    return s.region = l, s.setRegion(l), s.updateOffset(), e
                }, o.createRegion = function(e) {
                    if (!e || !e.width || !e.height) throw new Error("Invalid texture");
                    try {
                        var t = this.createSkeletonTexture(e),
                            n = this.createTexturePage(e, t);
                        return this.createTextureRegion(e, n)
                    } catch (e) {
                        throw console.error("[createRegion] Failed to create region:", e), e
                    }
                }, o.createSkeletonTexture = function(e) {
                    var t = new _.SkeletonTexture({
                        width: e.width,
                        height: e.height
                    });
                    return t.setRealTexture(e), t
                }, o.createTexturePage = function(e, t) {
                    var n = new _.spine.TextureAtlasPage;
                    return n.name = e.name || "unnamed", n.uWrap = _.spine.TextureWrap.ClampToEdge, n.vWrap = _.spine.TextureWrap.ClampToEdge, n.texture = t, n.width = e.width, n.height = e.height, n.texture.setWraps(n.uWrap, n.vWrap), n
                }, o.createTextureRegion = function(e, t) {
                    var n = new _.spine.TextureAtlasRegion;
                    return n.page = t, n.width = e.width, n.height = e.height, n.originalWidth = e.width, n.originalHeight = e.height, n.rotate = !1, n.u = 0, n.v = 0, n.u2 = 1, n.v2 = 1, n.texture = t.texture, n
                }, o.onDestroy = function() {
                    var e;
                    null != (e = this.settleAnimNode) && e.isValid && this.settleAnimNode.destroyAllChildren(), this.hudongAnimNodePool.clear()
                }, t
            }(T)).prototype, "allUserNode", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), q = t(Y.prototype, "hudongAnimNode", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), K = t(Y.prototype, "huAnimNode", [W], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), $ = t(Y.prototype, "settleAnimNode", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), ee = t(Y.prototype, "spriteAnimNode", [Z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), te = t(Y.prototype, "spriteTemplate", [X], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), ne = t(Y.prototype, "spriteAtlas", [J], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), j = Y)) || j) || j)), o._RF.pop()
        }
    }
}))