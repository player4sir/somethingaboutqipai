System.register("chunks:///_virtual/GameHandCardPrefabCtr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseComponent.ts", "./GameEvent6.ts", "./CardPlayManeger3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node
        }, function(e) {
            u = e.BaseComponent
        }, function(e) {
            l = e.GameEvent
        }, function(e) {
            d = e.CardPlayManeger
        }],
        execute: function() {
            var c, h, p, m, _, g;
            o._RF.push({}, "0745dA9FCBJ2orZzcDzBp9+", "GameHandCardPrefabCtr", void 0);
            var f = r.ccclass,
                C = r.property,
                E = r.menu;
            e("GameHandCardPrefabCtr", (c = f("GameHandCardPrefabCtr"), h = E("prefab/subGame/mj/GameHandCardPrefabCtr"), p = C({
                tooltip: "cardZone",
                type: s
            }), c(m = h((g = t((_ = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "cardZone", g, i(t)), t
                }
                n(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {
                    this.addModelListener(l.CLEAN_HAND_CARD, this.cleanHandCard), this.addModelListener(l.PRIVATE_PLAY_AGAIN, this.cleanHandCard)
                }, o.cleanHandCard = function() {
                    this.cardZone.getComponent(d).resetView()
                }, o.onLoad = function() {
                    this.initView()
                }, o.initView = function() {}, t
            }(u)).prototype, "cardZone", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), m = _)) || m) || m)), o._RF.pop()
        }
    }
}))