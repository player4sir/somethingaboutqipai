System.register("chunks:///_virtual/NetInterface.ts", ["cc"], (function(e) {
    var t;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }],
        execute: function() {
            t._RF.push({}, "d9f8b+CV69FyKwnUdCjOtad", "NetInterface", void 0), e("DefStringProtocol", function() {
                function e() {
                    this.PacketSize = 0
                }
                var t = e.prototype;
                return t.getHeadlen = function() {
                    return 0
                }, t.getHearbeatPackage = function() {
                    return null
                }, t.getPackageLen = function(e) {
                    return e.toString().length
                }, t.checkRequestPackage = function(e) {
                    return !0
                }, t.checkResponsePackage = function(e) {
                    return !0
                }, t.handlerResponsePackage = function(e) {
                    return null
                }, t.handlerRequestPackage = function(e) {
                    return !0
                }, t.isLittleEndian = function() {
                    return !1
                }, e
            }()), t._RF.pop()
        }
    }
}))