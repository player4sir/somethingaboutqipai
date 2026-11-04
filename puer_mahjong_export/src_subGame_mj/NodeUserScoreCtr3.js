System.register("chunks:///_virtual/NodeUserScoreCtr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./BaseComponent.ts", "./SpriteLabel.ts", "./PlayerMgr6.ts", "./FXJEvent3.ts", "./FXJSound3.ts", "./GameEvent6.ts", "./GameRuleConfig4.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f, C, E, S, A;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, u = e.SpriteAtlas, l = e.Vec3, d = e.Sprite, c = e.UITransform
        }, function(e) {
            h = e.Utils
        }, function(e) {
            p = e.GCache
        }, function(e) {
            m = e.BaseComponent
        }, function(e) {
            _ = e.SpriteLabel
        }, function(e) {
            g = e.PlayerMgr
        }, function(e) {
            f = e.FXJEvent
        }, function(e) {
            C = e.FXJSound, E = e.GameSound
        }, function(e) {
            S = e.GameEvent
        }, function(e) {
            A = e.GameRuleConfig
        }],
        execute: function() {
            var I, G, y, v, P, T, b, O, R, M, N, U, D, L, B, w, k, H;
            o._RF.push({}, "a989f/BFWhLEpvCXGzJEZnx", "NodeUserScoreCtr", void 0);
            var x = r.ccclass,
                F = r.property,
                V = r.menu;
            e("NodeUserScoreCtr", (I = x("NodeUserScoreCtr"), G = V("prefab/subGame/mj/rule/NodeUserScoreCtr"), y = F({
                tooltip: "花节点",
                type: s
            }), v = F({
                tooltip: "花数",
                type: _
            }), P = F({
                tooltip: "下注节点",
                type: s
            }), T = F({
                tooltip: "下注数",
                type: _
            }), b = F({
                tooltip: "跑",
                type: s
            }), O = F({
                tooltip: "不跑",
                type: s
            }), R = F({
                tooltip: "图集",
                type: u
            }), I(M = G((U = t((N = function(e) {
                function t() {
                    for (var t, n, o = arguments.length, r = new Array(o), s = 0; s < o; s++) r[s] = arguments[s];
                    return n = e.call.apply(e, [this].concat(r)) || this, a(n, "nodeScoreHua", U, i(n)), a(n, "spriteLabelScoreHua", D, i(n)), a(n, "nodeScoreXiaZhu", L, i(n)), a(n, "spriteLabelScoreXiaZhu", B, i(n)), a(n, "nodePao", w, i(n)), a(n, "nodeBuPao", k, i(n)), n._seatId = 0, n._init = !1, a(n, "spriteAtlas", H, i(n)), n.event_defents = ((t = {})[S.VIEW_UPDATE_GANG_OPERATION_RESULT] = "updateViewHua", t[S.VIEW_BROADCAST_GAME_START] = "onGameStart", t[f.BROADCAST_GAME_OVER] = "onGameOver", t), n
                }
                n(t, e);
                var o = t.prototype;
                return o.onLoad = function() {
                    this.initView()
                }, o.start = function() {}, o.addGameComp = function() {
                    null == this.node && (this.node = h.create_2DNode()), this.node.addComponent("MJGameComponent");
                    var e = this.node.getComponent("MJGameComponent");
                    return "function" == typeof e.setDelegate && e.setDelegate(this), e
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("MJGameComponent");
                    if (null == t && (t = this.addGameComp()), "function" == typeof t[e]) {
                        for (var n, a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) i[o - 1] = arguments[o];
                        return (n = t)[e].apply(n, i)
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
                    else if (A.HasHuagang) {
                        this.nodeScoreHua.active = !0;
                        var e = p.Desk.getGangOperationResult(this._seatId);
                        h.isNotNull(e) ? this.spriteLabelScoreHua.string = h.string_format("x{0}", e.gangNum) : this.spriteLabelScoreHua.string = "x0"
                    } else this.nodeScoreHua.active = !1
                }, o.updateViewXiaZhuResult = function() {
                    if (!this.doGameCompFun("hideHeadXiaZhuInfo"))
                        if (this._seatId <= 0) this.nodeScoreXiaZhu.active = !1;
                        else {
                            if (!p.Desk.hasXiaZhu()) return this.print("没有下注过程"), void(this.nodeScoreXiaZhu.active = !1);
                            this.nodePao.scale = new l(1, 1, 1);
                            var e = p.Desk.getXiaZhuResult(this._seatId, -1);
                            if (h.isNotNull(e))
                                if (this.nodeScoreXiaZhu.active = !0, this.doGameCompFun("hasXiaZhu")) {
                                    if (this.showXiaZhuItems(e)) return;
                                    this._showXiaZhuInfo(e[0])
                                } else this._showPaoInfo(e[0]);
                            else this.nodeScoreXiaZhu.active = !1
                        }
                }, o._showXiaZhuInfo = function(e) {
                    var t = h.number_valueOf(null == e ? void 0 : e.option);
                    this.nodePao.active = !0, this.nodeBuPao.active = !1, this.spriteLabelScoreXiaZhu.node.active = !1, this.nodePao.scale = new l(.327, .327, 1), this.nodePao.getComponent(d).spriteFrame = t <= 1 ? this.spriteAtlas.spriteFrames.no_rate : this.spriteAtlas.spriteFrames[4 == t ? "four_rate" : "two_rate"], this._updateXizZhuSize()
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
                    if (this.nodePao.scale = new l(1, 1, 1), e.option && e.option > 0 ? (this.nodePao.active = !0, this.nodeBuPao.active = !1, this.spriteLabelScoreXiaZhu.node.active = !0, this.spriteLabelScoreXiaZhu.string = String(e.option)) : (this.nodePao.active = !1, this.nodeBuPao.active = !0, this.spriteLabelScoreXiaZhu.node.active = !1), 0 == e.option) {
                        var t = g.getInstance().findPlayerWithSeatId(e.seatId);
                        if (t) {
                            var n = "xiaobo";
                            2 == h.number_valueOf(t.gameUserInfo.sex) && (n = "xiaoya");
                            var a = h.clone(C.GameBuPao);
                            a.path = h.string_format(C.GameBuPao.path, n), E.getInstance().playEffect(a)
                        }
                    }
                }, o.onRestView = function() {
                    this.nodeScoreHua.active = !1, this.nodeScoreXiaZhu.active = !1, this.nodePao.active = !1, this.nodeBuPao.active = !1
                }, o.onOperationResult = function(e) {
                    (null == e ? void 0 : e.seatId) == this._seatId && this.showSpecialView(e)
                }, o.showSpecialView = function(e) {
                    this.doGameCompFun("showSpecialXiaZhuView", this.nodePao, this.spriteAtlas, e)
                }, o.onDestroy = function() {}, t
            }(m)).prototype, "nodeScoreHua", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), D = t(N.prototype, "spriteLabelScoreHua", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), L = t(N.prototype, "nodeScoreXiaZhu", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), B = t(N.prototype, "spriteLabelScoreXiaZhu", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), w = t(N.prototype, "nodePao", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), k = t(N.prototype, "nodeBuPao", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), H = t(N.prototype, "spriteAtlas", [R], {
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