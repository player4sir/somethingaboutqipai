System.register("chunks:///_virtual/ZhuoJi3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./BaseComponent.ts", "./GameEvent6.ts", "./Card5.ts"], (function(e) {
var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _;
return {
    setters: [function(e) {
        t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
    }, function(e) {
        o = e.cclegacy, r = e._decorator, s = e.Node, u = e.Prefab, l = e.instantiate, d = e.Vec3, c = e.tween
    }, function(e) {
        h = e.Utils
    }, function(e) {
        p = e.BaseComponent
    }, function(e) {
        m = e.GameEvent
    }, function(e) {
        _ = e.Card
    }],
    execute: function() {
        var g, f, C, E, S, A, I, G;
        o._RF.push({}, "89d4aX93LlAZ6fUzn5i4C5v", "ZhuoJi", void 0);
        var y = r.ccclass,
            v = r.property,
            P = r.menu;
        e("ZhuoJi", (g = y("ZhuoJi"), f = P("prefab/subGame/mj/ZhuoJi"), C = v({
            tooltip: "捉鸡翻牌节点",
            type: s
        }), E = v(u), g(S = f((I = t((A = function(e) {
            function t() {
                for (var t, n, o = arguments.length, r = new Array(o), s = 0; s < o; s++) r[s] = arguments[s];
                return n = e.call.apply(e, [this].concat(r)) || this, a(n, "nodeFanCard", I, i(n)), a(n, "cardPrefab", G, i(n)), n.event_defents = ((t = {})[m.SHOW_SETTLE_VIEW] = "showSettleView", t[m.SHOW_FAN_CARD] = "showFanCard", t[m.HIDE_FAN_CARD] = "hideFanCard", t[m.VIEW_BROADCAST_PLAYING_JI_TYPE] = "broadcastPlayingJiType", t[m.VIEW_BROADCAST_ZHUO_JI] = "broadcastZhuoJi", t), n
            }
            n(t, e);
            var o = t.prototype;
            return o.addGameComp = function() {
                null == this.node && (this.node = h.create_2DNode()), this.node.addComponent("MJGameComponent");
                var e = this.node.getComponent("MJGameComponent");
                return "function" == typeof e.setDelegate && e.setDelegate(this), e
            }, o.doGameCompFun = function(e) {
                var t = this.node.getComponent("MJGameComponent");
                if (null == t && (t = this.addGameComp()), "function" == typeof t[e]) {
                    for (var n, a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) i[o - 1] = arguments[o];
                    return (n = t)[e].apply(n, i)
                }
            }, o.onLoad = function() {}, o.start = function() {}, o.resetView = function() {
                this.nodeFanCard.destroyAllChildren(), this.nodeFanCard.parent.active = !1
            }, o.showSettleView = function(e) {
                this.resetView()
            }, o.showFanCard = function(e, t, n) {
                var a = this;
                this.print("showFanCard", t), this.nodeFanCard.parent.active = !0, this.nodeFanCard.destroyAllChildren(), t.forEach((function(e, t, i) {
                    var o = l(a.cardPrefab);
                    o.getComponent(_).setCardByte(e), o.getComponent(_).setCardSize(70, 100), o.eulerAngles = new d(100, 0, 0), a.nodeFanCard.addChild(o);
                    var r = n[t] || 0;
                    c(o).delay(1.2 * r).to(1, {
                        eulerAngles: new d(0, 0, 0)
                    }, {
                        easing: "backOut"
                    }).start()
                }))
            }, o.hideFanCard = function(e) {
                this.print("hideFanCard"), this.nodeFanCard.destroyAllChildren(), this.nodeFanCard.parent.active = !1
            }, o.broadcastPlayingJiType = function(e, t) {
                this.doGameCompFun("showPlayingJiType", t)
            }, o.broadcastZhuoJi = function(e, t) {}, o.onDestroy = function() {}, t
        }(p)).prototype, "nodeFanCard", [C], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), G = t(A.prototype, "cardPrefab", [E], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), S = A)) || S) || S)), o._RF.pop()
    }
}
})), e = "virtual:///prerequisite-imports/subGame_mj", t = "chunks:///_virtual/subGame_mj", System.register(e, [t], (function(e, t) {
return {
    setters: [function(t) {
        var n = {};
        for (var a in t) "default" !== a && "__esModule" !== a && (n[a] = t[a]);
        e(n)
    }],
    execute: function() {}
}
}));
});
require("subpackages/subGame_mj/game.js")