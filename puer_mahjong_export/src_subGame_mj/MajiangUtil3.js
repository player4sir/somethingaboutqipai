System.register("chunks:///_virtual/MajiangUtil3.ts", ["cc", "./Utils.ts"], (function(e) {
    var t, n;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }, function(e) {
            n = e.Utils
        }],
        execute: function() {
            t._RF.push({}, "ac15dkbveFNxoPKI2LhFJ4M", "MajiangUtil", void 0), e("MajiangUtil", function() {
                function e() {}
                return e.deleteHasInList = function(e, t) {
                    e && n.isNotNull(t) && function() {
                        for (var n = e.length; n--;) t.some((function(t) {
                            return e[n] === t
                        })) && e.splice(n, 1)
                    }()
                }, e.swapElements = function(e, t, n) {
                    var a = [e[n], e[t]];
                    e[t] = a[0], e[n] = a[1]
                }, e
            }()), t._RF.pop()
        }
    }
}))