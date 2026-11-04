System.register("chunks:///_virtual/GameComponent5.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameBaseComponent3.ts"], (function(e) {
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
            n._RF.push({}, "764dd6BSHBDS6V1pMpc0fcc", "GameComponent", void 0);
            var r = a.ccclass,
                s = (a.property, a.menu);
            e("GameComponent", r("GuoBiaoMJGameComponent")(o = s("prefab/subGame/mj/guobiaomj/GameComponent")(o = function(e) {
                function n() {
                    return e.apply(this, arguments) || this
                }
                return t(n, e), n.prototype.getGameShareTitle = function() {
                    return "经典国标麻将，炫出你的麻将技巧吧！"
                }, n
            }(i)) || o) || o), n._RF.pop()
        }
    }
}))