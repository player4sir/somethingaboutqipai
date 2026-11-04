System.register("chunks:///_virtual/NodeNormalAnimCtr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./AppEvent.ts", "./GameRes.ts", "./LayerManager.ts", "./ResLoader.ts", "./EventManager.ts", "./SpineAniUtils.ts", "./BaseComponent.ts", "./PlayerMgr6.ts", "./RoomMgr6.ts", "./FXJConstant3.ts", "./FXJEvent3.ts", "./FXJRes3.ts", "./FXJSound3.ts", "./GameRuleConfig4.ts", "./GameViewConfig5.ts", "./CardUtil3.ts", "./NodeUserCtr3.ts", "./mjNodeUserPrefabCtr.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f, C, E, S, A, I, G, y, v, P, T, b, O, R, M, N, U, D, L, B, w, k;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, u = e.SpriteAtlas, l = e.NodePool, d = e.SpriteFrame, c = e.instantiate, h = e.Sprite, p = e.tween, m = e.Vec3, _ = e.sp, g = e.UITransform, f = e.ImageAsset, C = e.Texture2D
        }, function(e) {
            E = e.Utils
        }, function(e) {
            S = e.AppEvent
        }, function(e) {
            A = e.GameRes
        }, function(e) {
            I = e.LayerManager
        }, function(e) {
            G = e.resLoader
        }, function(e) {
            y = e.EventManager
        }, function(e) {
            v = e.SpineAniUtils
        }, function(e) {
            P = e.BaseComponent
        }, function(e) {
            T = e.PlayerMgr
        }, function(e) {
            b = e.RoomMgr
        }, function(e) {
            O = e.FXJConstant
        }, function(e) {
            R = e.FXJEvent
        }, function(e) {
            M = e.FXJRes
        }, function(e) {
            N = e.GameSound, U = e.FXJSound
        }, function(e) {
            D = e.GameRuleConfig
        }, function(e) {
            L = e.GameViewConfig
        }, function(e) {
            B = e.CardUtil
        }, function(e) {
            w = e.NodeUserCtr
        }, function(e) {
            k = e.mjNodeUserPrefabCtr
        }],
        execute: function() {
            var H, x, F, V, J, j, W, z, X, Z, Y, Q, q, K, $, ee, te, ne;
            o._RF.push({}, "b882f/4uYdI6oOFfTizAU5j", "NodeNormalAnimCtr", void 0);
            var ae = r.ccclass,
                ie = r.property,
                oe = r.menu;
            e("NodeNormalAnimCtr", (H = ae("NodeNormalAnimCtr"), x = oe("prefab/subGame/mj/NodeNormalAnimCtr"), F = ie({
                tooltip: "玩家节点",
                type: w
            }), V = ie({
                tooltip: "互动道具",
                type: s
            }), J = ie({
                tooltip: "胡牌动画",
                type: s
            }), j = ie({
                tooltip: "结算动画",
                type: s
            }), W = ie({
                tooltip: "精灵动画层",
                type: s
            }), z = ie({
                tooltip: "动画精灵模板",
                type: s
            }), X = ie({
                tooltip: "动画资源",
                type: u
            }), H(Z = x((Q = t((Y = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "allUserNode", Q, i(t)), t.hudongAnimNodePool = new l, a(t, "hudongAnimNode", q, i(t)), a(t, "huAnimNode", K, i(t)), a(t, "settleAnimNode", $, i(t)), a(t, "spriteAnimNode", ee, i(t)), a(t, "spriteTemplate", te, i(t)), a(t, "spriteAtlas", ne, i(t)), t.commonAnimMap = new Map, t._anim_pos_config = [{
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
                    this.addModelListener(R.VIEW_DESK_ANI_PLAY, this.startPlayAnim), this.addModelListener(R.VIEW_OUT_CARD_ANI_PLAY, this.startPlayOutCardAnim), this.addModelListener(S.UPDATE_PRIVATE_ROOM_INFO, this.onUpdatePrivateRoomInfo)
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
                    null == this.node && (this.node = E.create_2DNode()), this.node.addComponent("MJGameComponent");
                    var e = this.node.getComponent("MJGameComponent");
                    "function" == typeof e.setDelegate && e.setDelegate(this)
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("MJGameComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
                        return t[e].apply(t, a)
                    }
                }, o.onUpdatePrivateRoomInfo = function(e, t) {
                    this.initAnimPos()
                }, o.startPlayAnim = function(e, t, n, a) {
                    switch (t) {
                        case O.AnimNormal.HudongProp:
                            this.__showHuDongDaoju(n);
                            break;
                        case O.AnimNormal.common:
                            this._showCommonSpine(n, a);
                            break;
                        case O.AnimNormal.picCommon:
                            this._showSpriteCommonAnim(n);
                            break;
                        case O.AnimNormal.Enter:
                            this._showEnterSpine(n)
                    }
                }, o._showSpriteCommonAnim = function(e) {
                    null != e && e.tag && (this.commonAnimMap.get(e.tag) ? this.commonAnimMap.get(e.tag).push(e) : this.commonAnimMap.set(e.tag, [e]), this.playSpriteAnim(e.tag))
                }, o.playSpriteAnim = function(e) {
                    var t, n = this;
                    if ((null == (t = this.commonAnimMap.get(e)) ? void 0 : t.length) > 0 && !this.spriteAnimNode.getChildByName(e)) {
                        var a, i = this.commonAnimMap.get(e).shift(),
                            o = {
                                x: 0,
                                y: 0
                            };
                        if (i.pos) o = i.pos;
                        else if (i.seatId) {
                            var r = B.calculatePlayerSeat(b.getInstance().mySeatId, i.seatId);
                            o = this._anim_pos_config[r]
                        }
                        "string" == typeof i.sprite ? a = this.spriteAtlas.getSpriteFrame(i.sprite) : i.sprite instanceof d && (a = i.sprite);
                        var s = i.tag;
                        if (a) {
                            var u = c(this.spriteTemplate);
                            u.name = s, u.active = !0;
                            var l = u.getComponent(h);
                            l.spriteFrame = a, l.sizeMode = h.SizeMode.RAW, this.spriteAnimNode.addChild(u), u.setPosition(o.x, o.y), u.setScale(.8, .8, 1), p(u).to(.2, {
                                scale: new m(1.2, 1.2, 1)
                            }).to(.2, {
                                scale: new m(.9, .9, 1)
                            }).to(.2, {
                                scale: new m(1, 1, 1)
                            }).delay(1.5).call((function() {
                                u.removeFromParent(), u.destroy(), n.playSpriteAnim(e)
                            })).start()
                        }
                    }
                }, o._showCommonSpine = function(e, t) {
                    var n = this;
                    if (void 0 === t && (t = null), t)
                        for (var a = 0; a < this.allUserNode.node.children.length; a++) {
                            var i = this.allUserNode.node.children[a];
                            i.getComponent(k).UID == t && (e.toPos = i.getPosition())
                        }
                    var o = e.resConf,
                        r = e.aniName;
                    v.loadSkeleDataInBundle(o.bundle, o.path, this, null, function(t, a) {
                        if (!t) {
                            var i = (null == e ? void 0 : e.parentNode) || n.node,
                                o = v.createSpineNode(i, a, null, 0, e.isLoop);
                            if (o.name = r, n.spriteAnimNode.addChild(o), i && i.isValid && null != o && o.isValid) {
                                o.setPosition(e.toPos || new m(0, 0, 0));
                                var s = o.getComponent(_.Skeleton);
                                return s.setCompleteListener((function(t) {
                                    e.eventId && y.dispatch(e.eventId), n.destoryChild(o)
                                })), void s.setAnimation(0, r, e.isLoop)
                            }
                            n.destoryChild(o)
                        }
                    }.bind(this))
                }, o._showEnterSpine = function(e, t) {
                    var n = this,
                        a = e.resConf,
                        i = e.aniName;
                    v.loadSkeleDataInBundle(a.bundle, a.path, this, null, function(t, a) {
                        if (!t) {
                            var o = (null == e ? void 0 : e.parentNode) || n.node,
                                r = v.createSpineNode(o, a, i, 0, e.isLoop);
                            if (r.name = i, o && o.isValid && null != r && r.isValid) return r.setPosition(e.toPos || new m(0, 0, 0)), r.setScale(e.scale || new m(1, 1, 1)), void r.getComponent(_.Skeleton).setCompleteListener((function(t) {
                                e.eventId && y.dispatch(e.eventId), n.destoryChild(r)
                            }));
                            n.destoryChild(r)
                        }
                    }.bind(this))
                }, o.__showHuDongDaoju = function(e) {
                    if (console.log("动画节点出现了:__showHuDongDaoju"), 0 != this.allUserNode.node.children.length) {
                        e = E.table_verify(e);
                        var t = O.HuDongPropConf.anim[E.number_valueOf(e.prop_id, -1)];
                        if (t) {
                            for (var n = null, a = null, i = null, o = 0; o < this.allUserNode.node.children.length; o++) {
                                var r = this.allUserNode.node.children[o],
                                    s = r.getComponent(k);
                                s.UID == e.uid && (n = r, s.PosID), s.UID == e.to_uid && (a = r, i = s.PosID)
                            }
                            if (n && a && n != a) {
                                var u = n.getPosition(),
                                    l = a.getPosition(),
                                    d = O.HuDongPropConf.direction[i],
                                    c = E.string_format(t.action, d),
                                    h = this,
                                    g = h.getHudongNode();
                                g.active = !0, g.setPosition(new m(u.x, u.y + 50, u.z)), h.node.addChild(g);
                                var f = g.getComponent(_.Skeleton);
                                v.loadSkeleDataInBundle(t.bundle.bundle, t.bundle.path, this, null, function(e, n) {
                                    if (!e && g && g.isValid) {
                                        var a = c;
                                        g.active = !0, f.skeletonData = n, f.setCompleteListener((function(e) {
                                            var t, n;
                                            console.log("动画---播放完成------2", null == (t = e.animation) ? void 0 : t.name), (null == (n = e.animation) ? void 0 : n.name) == a && (g.active = !1, h.hudongAnimNodePool.put(g), f.clearTracks())
                                        })), f.setAnimation(0, c, !1);
                                        var i = t.delay || 0;
                                        null != t.actions && t.actions.forEach((function(e) {
                                            f.addAnimation(0, e.ac, !1, i), i = i + e.delay || 0, a = e.ac
                                        })), t.action_end && (a = E.string_format(t.action_end, d), f.addAnimation(0, a, !1, i));
                                        var o = t.diff || {
                                            x: 0,
                                            y: 0
                                        };
                                        p(g).delay(t.delay || 0).to(t.time, {
                                            position: new m(l.x + o.x, l.y + 54 + o.y, l.z)
                                        }).call((function() {
                                            null != t.sound && N.getInstance().playEffect({
                                                bundle: A.InteractProp.bundle,
                                                path: E.string_format(A.InteractProp.path, t.sound)
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
                        case L.AnimType.GameStart:
                            var a = {
                                resConf: M.Spine_Start,
                                aniName: "DJKS",
                                parentNode: null,
                                trackIndex: 0,
                                isLoop: !1,
                                eventId: t.eventId
                            };
                            this._showCommonSpine(a);
                            break;
                        case L.AnimType.GameOver:
                            var i = {
                                resConf: M.Spine_Over,
                                aniName: "djjs",
                                parentNode: null,
                                trackIndex: 0,
                                isLoop: !1,
                                toPos: new m(0, 77, 0),
                                callStartFunc: function() {}
                            };
                            this._showCommonSpine(i);
                            break;
                        case L.AnimType.Hu:
                            var o = c(this.huAnimNode);
                            this.huAnimNode.parent.addChild(o);
                            var r = o.getComponent(_.Skeleton);
                            this.spriteAnimNode.addChild(o), o.active = !0;
                            var s = I.camera2D.screenToWorld(I.camera3D.worldToScreen(t.pos)),
                                u = this.node.getComponent(g).convertToNodeSpaceAR(s),
                                l = null;
                            l = this.addSchedulerOnce(1.2, (function() {
                                l = null, null != o && o.isValid && (o.removeFromParent(), o.destroy())
                            })), r.setCompleteListener((function() {
                                l && (n.stopSchedulerOnce(l), l = null), null != o && o.isValid && (o.removeFromParent(), o.destroy())
                            })), r.setAnimation(0, "hupai", !1), o.setPosition(u), N.getInstance().playEffect(U.GameHuAni);
                            break;
                        case L.AnimType.Hu2:
                            var d = c(this.huAnimNode);
                            this.huAnimNode.parent.addChild(d);
                            var f = d.getComponent(_.Skeleton);
                            this.spriteAnimNode.addChild(d), d.active = !0;
                            var C = I.camera2D.screenToWorld(I.camera3D.worldToScreen(t.pos)),
                                S = this.node.getComponent(g).convertToNodeSpaceAR(C);
                            f.setCompleteListener((function() {
                                null != d && d.isValid && (d.removeFromParent(), d.destroy())
                            })), f.setAnimation(0, "hupai2", !1), d.setPosition(S), N.getInstance().playEffect(U.GameDianPaoAni);
                            break;
                        case L.AnimType.Peng:
                            var A = c(this.huAnimNode);
                            this.huAnimNode.parent.addChild(A);
                            var G = A.getComponent(_.Skeleton);
                            this.spriteAnimNode.addChild(A), A.active = !0;
                            var v = I.camera2D.screenToWorld(I.camera3D.worldToScreen(t.pos)),
                                P = this.node.getComponent(g).convertToNodeSpaceAR(v);
                            G.setCompleteListener((function() {
                                null != A && A.isValid && (A.removeFromParent(), A.destroy())
                            })), G.setAnimation(0, "peng_yanwu", !1), A.setPosition(P);
                            break;
                        case L.AnimType.ChaJiao:
                            this.settleAnimNode.active = !0;
                            var O = "chajiao" + t.seatId;
                            this._settleAnimChild(O);
                            var R = c(this.spriteTemplate);
                            R.active = !0;
                            var w = R.getComponent(h);
                            w.spriteFrame = this.spriteAtlas.getSpriteFrame("chajiao"), w.sizeMode = h.SizeMode.RAW, R.name = O, this.settleAnimNode.addChild(R), R.setPosition(0, 80), p(R).to(.5, {
                                position: new m(0, 0)
                            }).delay(1).call((function() {
                                w.spriteFrame = null
                            })).delay(E.number_valueOf(t.delay)).call((function() {
                                R.active = !1, n._settleAnimChild(O), y.dispatch(t.eventId)
                            })).start(), N.getInstance().playEffect(U.Liuju);
                            break;
                        case L.AnimType.WuJiao:
                            if (this.settleAnimNode.active = !0, this.settleAnimNode.active) {
                                var k = B.calculatePlayerSeat(b.getInstance().mySeatId, t.seatId);
                                if (this._anim_pos_config[k]) {
                                    var H = "wujiao" + t.seatId;
                                    this._settleAnimChild(H);
                                    var x = c(this.spriteTemplate);
                                    x.active = !0;
                                    var F = x.getComponent(h);
                                    F.spriteFrame = this.spriteAtlas.getSpriteFrame("wujiao"), F.sizeMode = h.SizeMode.RAW, x.name = H, this.settleAnimNode.addChild(x), x.setPosition(this._anim_pos_config[k].x, this._anim_pos_config[k].y), x.setScale(.2, .2, 1), p(x).delay(1.5).to(.2, {
                                        scale: new m(1.2, 1.2, 1)
                                    }).to(.2, {
                                        scale: new m(.9, .9, 1)
                                    }).to(.2, {
                                        scale: new m(1, 1, 1)
                                    }).delay(1).call((function() {
                                        n._settleAnimChild(H)
                                    })).start()
                                }
                            }
                            break;
                        case L.AnimType.HuaZhu:
                            if (this.settleAnimNode.active = !0, this.settleAnimNode.active) {
                                var V = B.calculatePlayerSeat(b.getInstance().mySeatId, t.seatId);
                                if (this._anim_pos_config[V]) {
                                    var J = "huazhu" + t.seatId;
                                    this._settleAnimChild(J);
                                    var j = c(this.spriteTemplate);
                                    j.active = !0;
                                    var W = j.getComponent(h);
                                    W.spriteFrame = this.spriteAtlas.getSpriteFrame("huazhu"), W.sizeMode = h.SizeMode.RAW, j.name = J, this.settleAnimNode.addChild(j), j.setPosition(this._anim_pos_config[V].x, this._anim_pos_config[V].y), j.setScale(.2, .2, 1), p(j).delay(1.5).to(.2, {
                                        scale: new m(1.2, 1.2, 1)
                                    }).to(.2, {
                                        scale: new m(.9, .9, 1)
                                    }).to(.2, {
                                        scale: new m(1, 1, 1)
                                    }).delay(1).call((function() {
                                        n._settleAnimChild(J)
                                    })).start()
                                }
                            }
                            break;
                        case L.AnimType.GuanSi:
                            t.delay = 3, this._palySpecialAnim(t, "guansi");
                            break;
                        case L.AnimType.ZhuoJi:
                            this._palySpecialAnimZhuoji(t);
                            break;
                        case L.AnimType.HuangZhuang:
                            t.delay = 2, this._palySpecialAnim(t, "liuju"), N.getInstance().playEffect(U.Liuju);
                            break;
                        case L.AnimType.Gang:
                            if ("mg" == t.aniName) {
                                var z = {
                                    resConf: M.Spine_PaiXing_MG,
                                    aniName: "animation",
                                    parentNode: null,
                                    trackIndex: 0,
                                    isLoop: !1,
                                    eventId: t.eventId,
                                    toPos: new m(0, 0, 0)
                                };
                                this._showCommonSpine(z)
                            } else if ("ag" == t.aniName) {
                                var X = {
                                    resConf: M.Spine_PaiXing_AG,
                                    aniName: "animation",
                                    parentNode: null,
                                    trackIndex: 0,
                                    isLoop: !1,
                                    eventId: t.eventId,
                                    toPos: new m(0, 0, 0)
                                };
                                this._showCommonSpine(X)
                            }
                            break;
                        case L.AnimType.PaiXing:
                            var Z = D.GamePaiXingConfig[t.aniName];
                            if (E.isNotNull(Z)) {
                                if (E.isNotNull(Z.animSound)) {
                                    var Y = "xiaobo",
                                        Q = T.getInstance().findPlayerWithSeatId(t.seatId);
                                    E.isNotNull(Q) ? (2 == E.number_valueOf(Q.gameUserInfo.sex) && (Y = "xiaoya"), console.log("牌型", t.seatId, Y, Q.gameUserInfo.sex)) : console.log("牌型", t.seatId, Y, "玩家信息丢失");
                                    var q = E.clone(Z.animSound);
                                    q.path = E.string_format(Z.animSound.path, Y), N.getInstance().playEffect(q)
                                }
                                if (E.isNotNull(Z.anim)) {
                                    var K = {
                                        resConf: Z.anim,
                                        aniName: "animation",
                                        parentNode: null,
                                        trackIndex: 0,
                                        isLoop: !1,
                                        eventId: t.eventId,
                                        toPos: new m(0, 0, 0)
                                    };
                                    E.isNotNull(Z.animText) ? this.showPaiXingAnim(K, t) : this._showCommonSpine(K)
                                } else console.log("牌型配置动画缺失", t.aniName), t.eventId && y.dispatch(t.eventId)
                            } else console.log("牌型配置缺失", t.aniName), t.eventId && y.dispatch(t.eventId)
                    }
                }, o._palySpecialAnim = function(e, t) {
                    var n = this;
                    this.settleAnimNode.active = !0;
                    var a = t + e.seatId;
                    this._settleAnimChild(a);
                    var i = c(this.spriteTemplate);
                    i.active = !0;
                    var o = i.getComponent(h);
                    o.spriteFrame = this.spriteAtlas.getSpriteFrame(t), o.sizeMode = h.SizeMode.RAW, i.name = a, this.settleAnimNode.addChild(i), i.setPosition(0, 80), p(i).to(.5, {
                        position: new m(0, 0)
                    }).delay(e.delay).call((function() {
                        n._settleAnimChild(a), y.dispatch(e.eventId)
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
                    var n = D.GamePaiXingConfig[t.aniName];
                    if (null == n || !n.animText) return console.warn("动画配置错误:", t.aniName), void this.handleAnimError(e);
                    try {
                        G.load(n.animText.bundle, n.animText.path, f, this.onTextureLoaded.bind(this, e))
                    } catch (t) {
                        console.error("加载资源失败:", t), this.handleAnimError(e)
                    }
                }, o.onTextureLoaded = function(e, t, n) {
                    if (t || !n) return console.warn("加载贴图失败:", t), void this.handleAnimError(e);
                    try {
                        var a = this.createTexture(n);
                        this.loadSpineAnimation(e, a)
                    } catch (t) {
                        console.error("创建动画失败:", t), this.handleAnimError(e)
                    }
                }, o.createTexture = function(e) {
                    var t = new C;
                    return t.image = e, t
                }, o.loadSpineAnimation = function(e, t) {
                    var n = this;
                    v.loadSkeleDataInBundle(e.resConf.bundle, e.resConf.path, this, null, (function(a, i) {
                        return n.onSpineLoaded(a, i, e, t)
                    }))
                }, o.onSpineLoaded = function(e, t, n, a) {
                    if (e) return console.warn("加载spine失败:", e), void this.handleAnimError(n);
                    var i = (null == n ? void 0 : n.parentNode) || this.node;
                    if (null == i || !i.isValid) return console.warn("父节点无效"), void this.handleAnimError(n);
                    try {
                        this.removeSpriteAnimNodeChild("spineNodeAnim");
                        var o = this.createSpineNode(i, t, n, a);
                        o.name = "spineNodeAnim", this.spriteAnimNode.addChild(o), this.setupSpineAnimation(o, n)
                    } catch (e) {
                        console.error("创建spine节点失败:", e), this.handleAnimError(n)
                    }
                }, o.createSpineNode = function(e, t, n, a) {
                    var i = v.createSpineNode(e, t, n.aniName, 0, n.isLoop);
                    if (!i) throw new Error("创建spine节点失败");
                    i.setPosition(n.toPos || new m(0, 0, 0));
                    var o = i.getComponent(_.Skeleton);
                    return this.setSpineTexture(o, a), i
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
                            t.eventId && y.dispatch(t.eventId), n.removeSpriteAnimNodeChild("spineNodeAnim")
                        }), .5)
                    }))
                }, o.handleAnimError = function(e) {
                    null != e && e.eventId && y.dispatch(e.eventId)
                }, o.setRegion = function(e, t, n, a) {
                    if (null == e || !e.skeletonData) throw new Error("Invalid spine component");
                    var i = e.skeletonData.getRuntimeData(),
                        o = i.findSlotIndex(t);
                    if (-1 === o) throw new Error("Slot not found: " + t);
                    var r = i.findSkin("default");
                    if (!r) throw new Error("Default skin not found");
                    var s = r.getAttachment(o, n);
                    if (!s) throw new Error("Attachment not found: " + n);
                    var u = this.createRegion(a);
                    return s.region = u, s.setRegion(u), s.updateOffset(), e
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
            }(P)).prototype, "allUserNode", [F], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), q = t(Y.prototype, "hudongAnimNode", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), K = t(Y.prototype, "huAnimNode", [J], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), $ = t(Y.prototype, "settleAnimNode", [j], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), ee = t(Y.prototype, "spriteAnimNode", [W], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), te = t(Y.prototype, "spriteTemplate", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), ne = t(Y.prototype, "spriteAtlas", [X], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Z = Y)) || Z) || Z)), o._RF.pop()
        }
    }
}))