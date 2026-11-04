System.register("chunks:///_virtual/NodePoolCache.ts", ["cc"], (function(e) {
    var t;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }],
        execute: function() {
            t._RF.push({}, "ef79eFr46ZLl4Jr55P7UYIe", "NodePoolCache", void 0), e("NodePoolCache", function() {
                function e() {
                    this.nodeCache = void 0, this.nodeCache = {}
                }
                var t = e.prototype;
                return t.get = function(e) {
                    return this.nodeCache[e] && this.nodeCache[e].length > 0 ? this.nodeCache[e].shift() : null
                }, t.add = function(e, t) {
                    this.nodeCache[e] || (this.nodeCache[e] = []), this.nodeCache[e].push(t)
                }, t.release = function(e) {
                    this.nodeCache[e] && (this.nodeCache[e] = [])
                }, e
            }()), t._RF.pop()
        }
    }
}))