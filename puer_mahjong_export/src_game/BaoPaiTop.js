System.register("chunks:///_virtual/BaoPaiTop.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./EventManager.ts", "./BaseComponent.ts", "./RoomMgr.ts", "./FXJConstant.ts", "./GameEvent.ts", "./Card.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator
        }, function(e) {
            s = e.Utils
        }, function(e) {
            l = e.EventManager
        }, function(e) {
            u = e.BaseComponent
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
            var f, _, g, m, C, I, A;
            o._RF.push({}, "7a309YJMWNALoVUO5mWEBot", "BaoPaiTop", void 0);
            var E = r.ccclass,
                v = r.property;
            e("BaoPaiTop", (f = E("BaoPaiTop"), _ = v(p), g = v(p), f((I = t((C = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "leftCard", I, a(t)), i(t, "rightCard", A, a(t)), t
                }
                n(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {}, o.onLoad = function() {
                    this.rightCard.node.active = !1
                }, o.addGameComp = function() {
                    null == this.node && (this.node = s.create_2DNode()), this.node.addComponent("GameComponent");
                    var e = this.node.getComponent("GameComponent");
                    return "function" == typeof e.setDelegate && e.setDelegate(this), e
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("GameComponent");
                    if (null == t && (t = this.addGameComp()), "function" == typeof t[e]) {
                        for (var n, i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) a[o - 1] = arguments[o];
                        return (n = t)[e].apply(n, a)
                    }
                }, o.onHuanBao = function(e) {
                    void 0 === e && (e = null), -2 != e.showType ? (e.showType == c.BAOTYPE.FRONT ? (e.old_cards && e.old_cards.length > 0 && l.dispatch(h.HIDE_BAO_CARD, e), e.status == c.BAOSTATUS.KAN ? e.curSeat == d.getInstance().mySeatId && (this.updateBaoPaiCard(e.new_cards), l.dispatch(h.SHOW_BAO_CARD, e.new_cards)) : (l.dispatch(h.SHOW_BAO_CARD, e.new_cards), this.updateBaoPaiCard(e.new_cards))) : e.showType == c.BAOTYPE.BACK && this.leftCard.setCardAngle(0, 180, 0), this.doGameCompFun("updateBaoPaiCardResult", e)) : e.old_cards && e.old_cards.length > 0 && l.dispatch(h.HIDE_BAO_CARD, e)
                }, o.updateBaoPaiCard = function(e) {
                    var t = this.leftCard;
                    t.node.active = !0, t.setCardByte(e), t.playFlipCardAnim()
                }, o.start = function() {}, o.initView = function() {}, o.updateView = function() {}, o.onClickClose = function(e) {}, o.onDestroy = function() {}, t
            }(u)).prototype, "leftCard", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), A = t(C.prototype, "rightCard", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), m = C)) || m)), o._RF.pop()
        }
    }
}))