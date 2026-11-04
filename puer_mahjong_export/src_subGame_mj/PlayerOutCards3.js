System.register("chunks:///_virtual/PlayerOutCards3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseComponent.ts", "./CardConfigs3.ts"], (function(e) {
    var t, n, a, i, o, r;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy, a = e._decorator, i = e.Vec3
        }, function(e) {
            o = e.BaseComponent
        }, function(e) {
            r = e.MjSize
        }],
        execute: function() {
            var s;
            n._RF.push({}, "ae04fxcljdCF6C2WQV4GD3i", "PlayerOutCards", void 0);
            var u = a.ccclass,
                l = (a.property, a.menu);
            e("PlayerOutCards", u("PlayerOutCards")(s = l("prefab/subGame/mj/PlayerOutCards")(s = function(e) {
                function n() {
                    for (var t, n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
                    return (t = e.call.apply(e, [this].concat(a)) || this)._mjList = [], t
                }
                t(n, e);
                var a = n.prototype;
                return a.onInitModuleEvent = function() {}, a.onLoad = function() {}, a.start = function() {}, a.getOutCardPosInfo = function(e) {
                    var t = Math.floor(e / 12),
                        n = (e -= 12 * t) % 6;
                    return {
                        row: Math.floor(e / 6),
                        column: n,
                        height: t
                    }
                }, a.getOutCardPos = function() {
                    var e = this.getOutCardPosInfo(this._mjList.length);
                    return new i(r.width / 2 + e.column * r.width, r.length / 2 + e.height * r.length, 0)
                }, a.pushCard = function(e) {}, a.pushCardToList = function(e) {
                    this._mjList.push(e)
                }, a.resetView = function() {
                    this.node.destroyAllChildren(), this._mjList = []
                }, n
            }(o)) || s) || s), n._RF.pop()
        }
    }
}))