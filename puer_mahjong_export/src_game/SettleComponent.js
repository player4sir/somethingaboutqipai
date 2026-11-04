System.register("chunks:///_virtual/SettleComponent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameBaseComponent.ts"], (function(e) {
    var t, n, i, a;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy, i = e._decorator
        }, function(e) {
            a = e.GameBaseComponent
        }],
        execute: function() {
            var o;
            n._RF.push({}, "7fa10lgtF5B37GML/dDrekW", "SettleComponent", void 0);
            var r = i.ccclass,
                s = (i.property, i.menu);
            e("SettleComponent", r("SettleComponent")(o = s("prefab/game/SettleComponent")(o = function(e) {
                function n() {
                    return e.apply(this, arguments) || this
                }
                return t(n, e), n.prototype.checkGameDaPaiXinId = function(e) {
                    return !(null == e || !e.paixingId || !["paixing100201", "paixing100301", "paixing900102", "paixing900701", "paixing100401", "paixing100501", "paixing100601", "paixing100104"].includes(null == e ? void 0 : e.paixingId))
                }, n
            }(a)) || o) || o), n._RF.pop()
        }
    }
}))