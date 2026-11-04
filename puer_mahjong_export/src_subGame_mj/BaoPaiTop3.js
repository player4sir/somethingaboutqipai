System.register("chunks:///_virtual/BaoPaiTop3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./EventManager.ts", "./BaseComponent.ts", "./RoomMgr6.ts", "./FXJConstant3.ts", "./GameEvent6.ts", "./Card5.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator
        }, function(e) {
            s = e.Utils
        }, function(e) {
            u = e.EventManager
        }, function(e) {
            l = e.BaseComponent
        }, function(e) {
            d = e.RoomMgr
        }, function(e) {
            c = e.FXJConstant
        }, function(e) {
            h = e.GameEvent
        }, function(e) {
            p = e.Card
        }],
        execute: function() {
            var m, _, g, f, C, E, S, A;
            o._RF.push({}, "d1b50SK0K9AXqnbYBlDloiW", "BaoPaiTop", void 0);
            var I = r.ccclass,
                G = r.property,
                y = r.menu;
            e("BaoPaiTop", (m = I("BaoPaiTop"), _ = y("prefab/subGame/mj/BaoPaiTop"), g = G(p), f = G(p), m(C = _((S = t((E = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "leftCard", S, i(t)), a(t, "rightCard", A, i(t)), t
                }
                n(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {}, o.onLoad = function() {
                    this.rightCard.node.active = !1
                }, o.addGameComp = function() {
                    null == this.node && (this.node = s.create_2DNode()), this.node.addComponent("MJGameComponent");
                    var e = this.node.getComponent("MJGameComponent");
                    return "function" == typeof e.setDelegate && e.setDelegate(this), e
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("MJGameComponent");
                    if (null == t && (t = this.addGameComp()), "function" == typeof t[e]) {
                        for (var n, a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) i[o - 1] = arguments[o];
                        return (n = t)[e].apply(n, i)
                    }
                }, o.onHuanBao = function(e) {
                    void 0 === e && (e = null), -2 != e.showType ? (e.showType == c.BAOTYPE.FRONT ? (e.old_cards && e.old_cards.length > 0 && u.dispatch(h.HIDE_BAO_CARD, e), e.status == c.BAOSTATUS.KAN ? e.curSeat == d.getInstance().mySeatId && (this.updateBaoPaiCard(e.new_cards), u.dispatch(h.SHOW_BAO_CARD, e.new_cards)) : (u.dispatch(h.SHOW_BAO_CARD, e.new_cards), this.updateBaoPaiCard(e.new_cards))) : e.showType == c.BAOTYPE.BACK && this.leftCard.setCardAngle(0, 180, 0), this.doGameCompFun("updateBaoPaiCardResult", e)) : e.old_cards && e.old_cards.length > 0 && u.dispatch(h.HIDE_BAO_CARD, e)
                }, o.updateBaoPaiCard = function(e) {
                    var t = this.leftCard;
                    t.node.active = !0, t.setCardByte(e), t.playFlipCardAnim()
                }, o.start = function() {}, o.initView = function() {}, o.updateView = function() {}, o.onClickClose = function(e) {}, o.onDestroy = function() {}, t
            }(l)).prototype, "leftCard", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), A = t(E.prototype, "rightCard", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), C = E)) || C) || C)), o._RF.pop()
        }
    }
}))