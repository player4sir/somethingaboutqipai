System.register("chunks:///_virtual/FXJPB.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseProtobuf.ts"], (function(e) {
    var t, n, i;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy
        }, function(e) {
            i = e.BaseProtobuf
        }],
        execute: function() {
            n._RF.push({}, "4fca0m8B95IuKrbkNHgnxXz", "FXJPB", void 0), e("FXJPB", function(e) {
                function n(t) {
                    return e.call(this, t + "包装与解析...") || this
                }
                t(n, e);
                var i = n.prototype;
                return i.encodeBody = function(t, n) {
                    return e.prototype.encodeBody.call(this, t, n)
                }, i.decodeBody = function(t, n) {
                    return e.prototype.decodeBody.call(this, t, n)
                }, n
            }(i)), n._RF.pop()
        }
    }
}))