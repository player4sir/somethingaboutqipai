System.register("chunks:///_virtual/BankerMgr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseCache.ts"], (function(e) {
    var t, n, i;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy
        }, function(e) {
            i = e.BaseCache
        }],
        execute: function() {
            n._RF.push({}, "3d6b1jCtTlJjINqQyKSvEfu", "BankerMgr", void 0), e("BankerMgr", function(e) {
                function n(t) {
                    var n;
                    return void 0 === t && (t = ""), (n = e.call(this, t) || this).bankerInfo = null, n
                }
                t(n, e), n.getInstance = function() {
                    return n.instance || (n.instance = new n), n.instance
                };
                var i = n.prototype;
                return i.updateRoomInfo = function(e) {
                    this.bankerInfo = e
                }, i.clear = function() {
                    this.bankerInfo = null
                }, n
            }(i)).instance = null, n._RF.pop()
        }
    }
}))