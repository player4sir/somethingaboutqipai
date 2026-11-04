System.register("chunks:///_virtual/PlayerOutCards.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseComponent.ts", "./CardConfigs.ts"], (function(e) {
    var t, n, i, a, o, r;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy, i = e._decorator, a = e.Vec3
        }, function(e) {
            o = e.BaseComponent
        }, function(e) {
            r = e.MjSize
        }],
        execute: function() {
            var s;
            n._RF.push({}, "92a5dYnfORF9a/7OJzbfzmh", "PlayerOutCards", void 0);
            var l = i.ccclass;
            i.property, e("PlayerOutCards", l("PlayerOutCards")(s = function(e) {
                function n() {
                    for (var t, n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                    return (t = e.call.apply(e, [this].concat(i)) || this)._mjList = [], t
                }
                t(n, e);
                var i = n.prototype;
                return i.onInitModuleEvent = function() {}, i.onLoad = function() {}, i.start = function() {}, i.getOutCardPosInfo = function(e) {
                    var t = Math.floor(e / 12),
                        n = (e -= 12 * t) % 6;
                    return {
                        row: Math.floor(e / 6),
                        column: n,
                        height: t
                    }
                }, i.getOutCardPos = function() {
                    var e = this.getOutCardPosInfo(this._mjList.length);
                    return new a(r.width / 2 + e.column * r.width, r.length / 2 + e.height * r.length, 0)
                }, i.pushCard = function(e) {}, i.pushCardToList = function(e) {
                    this._mjList.push(e)
                }, i.resetView = function() {
                    this.node.destroyAllChildren(), this._mjList = []
                }, n
            }(o)) || s), n._RF.pop()
        }
    }
}))