System.register("chunks:///_virtual/Item3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseComponent.ts"], (function(e) {
    var t, n, a, i;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy, a = e._decorator
        }, function(e) {
            i = e.BaseComponent
        }],
        execute: function() {
            var o;
            n._RF.push({}, "d21bbpEGC5JI7EKxz0spQux", "Item", void 0);
            var r = a.ccclass,
                s = (a.property, a.menu);
            e("Item", r("Item")(o = s("prefab/subGame/mj/Item")(o = function(e) {
                function n() {
                    for (var t, n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
                    return (t = e.call.apply(e, [this].concat(a)) || this).index = 0, t
                }
                return t(n, e), n.prototype.onInitModuleEvent = function() {}, n
            }(i)) || o) || o), n._RF.pop()
        }
    }
}))