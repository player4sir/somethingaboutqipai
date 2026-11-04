System.register("chunks:///_virtual/MajiangUtil.ts", ["cc", "./Utils.ts"], (function(e) {
    var t, n;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }, function(e) {
            n = e.Utils
        }],
        execute: function() {
            t._RF.push({}, "2b37eS3ox5III8Vw9kL5Jxh", "MajiangUtil", void 0), e("MajiangUtil", function() {
                function e() {}
                return e.deleteHasInList = function(e, t) {
                    e && n.isNotNull(t) && function() {
                        for (var n = e.length; n--;) t.some((function(t) {
                            return e[n] === t
                        })) && e.splice(n, 1)
                    }()
                }, e.swapElements = function(e, t, n) {
                    var i = [e[n], e[t]];
                    e[t] = i[0], e[n] = i[1]
                }, e
            }()), t._RF.pop()
        }
    }
}))