System.register("chunks:///_virtual/SettleComponent4.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameBaseComponent3.ts"], (function(e) {
    var t, n, a, i;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy, a = e._decorator
        }, function(e) {
            i = e.GameBaseComponent
        }],
        execute: function() {
            var o;
            n._RF.push({}, "cc395zLzulHX5lWxYOO7RDR", "SettleComponent", void 0);
            var r = a.ccclass,
                s = (a.property, a.menu);
            e("SettleComponent", r("GuoBiaoMJSettleComponent")(o = s("prefab/subGame/mj/guobiaomj/SettleComponent")(o = function(e) {
                function n() {
                    return e.apply(this, arguments) || this
                }
                return t(n, e), n.prototype.checkGameDaPaiXinId = function(e) {
                    return !(null == e || !e.paixingId || !["paixing100301", "paixing101206", "paixing100304", "paixing501501", "paixing501701", "paixing501801", "paixing502001", "paixing502003", "paixing500911", "paixing501902", "paixing504202", "paixing504005", "paixing102612", "paixing503814", "paixing503815", "paixing503816", "paixing503817", "paixing504204", "paixing501508", "paixing500898", "paixing500899", "paixing101354", "paixing501509", "paixing501510", "paixing501511", "paixing101355", "paixing101009"].includes(null == e ? void 0 : e.paixingId))
                }, n
            }(i)) || o) || o), n._RF.pop()
        }
    }
}))