System.register("chunks:///_virtual/GlobalPB.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseProtobuf.ts"], (function(e) {
    var t, i, n;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            n = e.BaseProtobuf
        }],
        execute: function() {
            i._RF.push({}, "f4509nIl7JJFYHV8D+272KW", "GlobalPB", void 0), e("GlobalPB", function(e) {
                function i(t) {
                    return e.call(this, t + "包装与解析...") || this
                }
                t(i, e);
                var n = i.prototype;
                return n.encodeBody = function(t, i) {
                    return e.prototype.encodeBody.call(this, t, i)
                }, n.decodeBody = function(t, i) {
                    return e.prototype.decodeBody.call(this, t, i)
                }, i
            }(n)), i._RF.pop()
        }
    }
}))