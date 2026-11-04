System.register("chunks:///_virtual/NodeUserScoreCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./BaseComponent.ts", "./SpriteLabel.ts", "./PlayerMgr.ts", "./FXJEvent.ts", "./FXJSound.ts", "./GameEvent.ts", "./GameRuleConfig.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m, C, I, A, E, v;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, l = e.SpriteAtlas, u = e.Vec3, d = e.Sprite, c = e.UITransform
        }, function(e) {
            h = e.Utils
        }, function(e) {
            p = e.GCache
        }, function(e) {
            f = e.AppEvent
        }, function(e) {
            _ = e.BaseComponent
        }, function(e) {
            g = e.SpriteLabel
        }, function(e) {
            m = e.PlayerMgr
        }, function(e) {
            C = e.FXJEvent
        }, function(e) {
            I = e.FXJSound, A = e.GameSound
        }, function(e) {
            E = e.GameEvent
        }, function(e) {
            v = e.GameRuleConfig
        }],
        execute: function() {
            var y, S, P, T, G, O, R, N, b, D, L, M, U, w, B, H, F, k;
            o._RF.push({}, "b78e64DBblNd6aGgXYhVHUf", "NodeUserScoreCtr", void 0);
            var V = r.ccclass,
                x = r.property,
                W = r.menu;
            e("NodeUserScoreCtr", (y = V("NodeUserScoreCtr"), S = W("prefab/game/rule/NodeUserScoreCtr"), P = x({
                tooltip: "花节点",
                type: s
            }), T = x({
                tooltip: "花数",
                type: g
            }), G = x({
                tooltip: "下注节点",
                type: s
            }), O = x({
                tooltip: "下注数",
                type: g
            }), R = x({
                tooltip: "跑",
                type: s
            }), N = x({
                tooltip: "不跑",
                type: s
            }), b = x({
                tooltip: "图集",
                type: l
            }), y(D = S((M = t((L = function(e) {
                function t() {
                    for (var t, n, o = arguments.length, r = new Array(o), s = 0; s < o; s++) r[s] = arguments[s];
                    return n = e.call.apply(e, [this].concat(r)) || this, i(n, "nodeScoreHua", M, a(n)), i(n, "spriteLabelScoreHua", U, a(n)), i(n, "nodeScoreXiaZhu", w, a(n)), i(n, "spriteLabelScoreXiaZhu", B, a(n)), i(n, "nodePao", H, a(n)), i(n, "nodeBuPao", F, a(n)), n._seatId = 0, n._init = !1, i(n, "spriteAtlas", k, a(n)), n.event_defents = ((t = {})[E.VIEW_UPDATE_GANG_OPERATION_RESULT] = "updateViewHua", t[f.VIEW_BROADCAST_GAME_START] = "onGameStart", t[C.BROADCAST_GAME_OVER] = "onGameOver", t), n
                }
                n(t, e);
                var o = t.prototype;
                return o.onLoad = function() {
                    this.initView()
                }, o.start = function() {}, o.addGameComp = function() {
                    null == this.node && (this.node = h.create_2DNode()), this.node.addComponent("GameComponent");
                    var e = this.node.getComponent("GameComponent");
                    return "function" == typeof e.setDelegate && e.setDelegate(this), e
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("GameComponent");
                    if (null == t && (t = this.addGameComp()), "function" == typeof t[e]) {
                        for (var n, i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) a[o - 1] = arguments[o];
                        return (n = t)[e].apply(n, a)
                    }
                }, o.setSeatId = function(e) {
                    this._seatId = e, this._init
                }, o.onGameStart = function() {
                    this.updateView()
                }, o.onGameOver = function() {}, o.initView = function() {
                    this.nodeScoreHua.active = !1, this.nodeScoreXiaZhu.active = !1, this.nodePao.active = !1, this.nodeBuPao.active = !1, this._init = !0
                }, o.updateView = function() {
                    this.updateViewHua(), this.updateViewXiaZhuResult()
                }, o.updateViewHua = function() {
                    if (this._seatId <= 0) this.nodeScoreHua.active = !1;
                    else if (v.HasHuagang) {
                        this.nodeScoreHua.active = !0;
                        var e = p.Desk.getGangOperationResult(this._seatId);
                        h.isNotNull(e) ? this.spriteLabelScoreHua.string = h.string_format("x{0}", e.gangNum) : this.spriteLabelScoreHua.string = "x0"
                    } else this.nodeScoreHua.active = !1
                }, o.updateViewXiaZhuResult = function() {
                    if (!this.doGameCompFun("hideHeadXiaZhuInfo"))
                        if (this._seatId <= 0) this.nodeScoreXiaZhu.active = !1;
                        else {
                            if (!p.Desk.hasXiaZhu()) return this.print("没有下注过程"), void(this.nodeScoreXiaZhu.active = !1);
                            this.nodePao.scale = new u(1, 1, 1);
                            var e = p.Desk.getXiaZhuResult(this._seatId, -1);
                            if (null != e && e.length)
                                if (this.nodeScoreXiaZhu.active = !0, this.doGameCompFun("hasXiaZhu")) {
                                    if (this.showXiaZhuItems(e)) return;
                                    this._showXiaZhuInfo(e[0])
                                } else this._showPaoInfo(e[0]);
                            else this.nodeScoreXiaZhu.active = !1
                        }
                }, o._showXiaZhuInfo = function(e) {
                    var t = h.number_valueOf(null == e ? void 0 : e.option);
                    this.nodePao.active = !0, this.nodeBuPao.active = !1, this.spriteLabelScoreXiaZhu.node.active = !1, this.nodePao.scale = new u(.327, .327, 1), this.nodePao.getComponent(d).spriteFrame = t <= 1 ? this.spriteAtlas.spriteFrames.no_rate : this.spriteAtlas.spriteFrames[4 == t ? "four_rate" : "two_rate"], this._updateXizZhuSize()
                }, o.showXiaZhuItems = function(e) {
                    var t = this.doGameCompFun("showXiaZhuItems", this.nodePao, this.spriteAtlas, e);
                    return t && (this.nodePao.active = !0, this.nodeBuPao.active = !1, this.spriteLabelScoreXiaZhu.node.active = !1), this._updateXizZhuSize(), t
                }, o._updateXizZhuSize = function() {
                    var e = this.nodePao.scale,
                        t = this.nodePao.getComponent(c).contentSize,
                        n = {
                            width: t.width * e.x,
                            height: t.height * e.y
                        };
                    this.nodeScoreXiaZhu.getComponent(c).setContentSize(n.width, n.height)
                }, o._showPaoInfo = function(e) {
                    this.nodePao.scale = new u(1, 1, 1), e.option && e.option > 0 ? (this.nodePao.active = !0, this.nodeBuPao.active = !1, this.spriteLabelScoreXiaZhu.node.active = !0, this.spriteLabelScoreXiaZhu.string = String(e.option)) : (this.nodePao.active = !1, this.nodeBuPao.active = !0, this.spriteLabelScoreXiaZhu.node.active = !1)
                }, o.operatoinEffect = function(e) {
                    var t = m.getInstance().findPlayerWithSeatId(e.seatId);
                    if (t) {
                        var n = "xiaobo";
                        if (2 == h.number_valueOf(t.gameUserInfo.sex) && (n = "xiaoya"), 0 == e.option) {
                            var i = h.clone(I.GameBuPao);
                            i.path = h.string_format(I.GameBuPao.path, n), A.getInstance().playEffect(i)
                        } else {
                            var a, o = h.clone(I.GamePao);
                            null != (a = I.GamePao.path) && a.length && (o.path = h.string_format(I.GamePao.path, n), A.getInstance().playEffect(o))
                        }
                    }
                }, o.onRestView = function() {
                    this.nodeScoreHua.active = !1, this.nodeScoreXiaZhu.active = !1, this.nodePao.active = !1, this.nodeBuPao.active = !1
                }, o.onOperationResult = function(e) {
                    (null == e ? void 0 : e.seatId) == this._seatId && this.showSpecialView(e)
                }, o.showSpecialView = function(e) {
                    this.doGameCompFun("showSpecialXiaZhuView", this.nodePao, this.spriteAtlas, e)
                }, o.onDestroy = function() {}, t
            }(_)).prototype, "nodeScoreHua", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), U = t(L.prototype, "spriteLabelScoreHua", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), w = t(L.prototype, "nodeScoreXiaZhu", [G], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), B = t(L.prototype, "spriteLabelScoreXiaZhu", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), H = t(L.prototype, "nodePao", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), F = t(L.prototype, "nodeBuPao", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), k = t(L.prototype, "spriteAtlas", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), D = L)) || D) || D)), o._RF.pop()
        }
    }
}))