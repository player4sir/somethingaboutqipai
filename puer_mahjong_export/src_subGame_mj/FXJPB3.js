System.register("chunks:///_virtual/FXJPB3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseProtobuf.ts"], (function(e) {
    var t, n, a;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy
        }, function(e) {
            a = e.BaseProtobuf
        }],
        execute: function() {
            n._RF.push({}, "bbc52Ru56NDqq2grBgCTVa0", "FXJPB", void 0), e("FXJPB", function(e) {
                function n(t) {
                    return e.call(this, t + "包装与解析...") || this
                }
                t(n, e);
                var a = n.prototype;
                return a.encodeBody = function(t, n) {
                    return e.prototype.encodeBody.call(this, t, n)
                }, a.decodeBody = function(t, n) {
                    return e.prototype.decodeBody.call(this, t, n)
                }, n
            }(a)), n._RF.pop()
        }
    }
}))