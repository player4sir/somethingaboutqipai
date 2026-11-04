System.register("chunks:///_virtual/GameHandCardPrefabCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseComponent.ts", "./GameEvent.ts", "./CardPlayManeger.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node
        }, function(e) {
            l = e.BaseComponent
        }, function(e) {
            u = e.GameEvent
        }, function(e) {
            d = e.CardPlayManeger
        }],
        execute: function() {
            var c, h, p, f, _, g;
            o._RF.push({}, "41ef5FPNS1MZKSNcDxQBOjP", "GameHandCardPrefabCtr", void 0);
            var m = r.ccclass,
                C = r.property,
                I = r.menu;
            e("GameHandCardPrefabCtr", (c = m("GameHandCardPrefabCtr"), h = I("prefab/game/GameDeskPrefabCtr"), p = C({
                tooltip: "cardZone",
                type: s
            }), c(f = h((g = t((_ = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "cardZone", g, a(t)), t
                }
                n(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {
                    this.addModelListener(u.CLEAN_HAND_CARD, this.cleanHandCard), this.addModelListener(u.PRIVATE_PLAY_AGAIN, this.cleanHandCard)
                }, o.cleanHandCard = function() {
                    this.cardZone.getComponent(d).resetView()
                }, o.onLoad = function() {
                    this.initView()
                }, o.initView = function() {}, t
            }(l)).prototype, "cardZone", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), f = _)) || f) || f)), o._RF.pop()
        }
    }
}))