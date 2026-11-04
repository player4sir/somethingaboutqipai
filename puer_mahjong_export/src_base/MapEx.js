System.register("chunks:///_virtual/MapEx.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    var t, i;
    return {
        setters: [function(e) {
            t = e.createClass
        }, function(e) {
            i = e.cclegacy
        }],
        execute: function() {
            i._RF.push({}, "2fe59HDiidL/6XmCuoSnaWL", "MapEx", void 0), e("MapEx", function() {
                function e() {
                    this.keys = [], this.vals = []
                }
                var i = e.prototype;
                return i.set = function(e, t) {
                    var i = this.keys.indexOf(e);
                    i >= 0 ? this.vals[i] = t : (this.keys.push(e), this.vals.push(t))
                }, i.setToStartIndex = function(e, t) {
                    var i = this.keys.indexOf(e);
                    i >= 0 && (this.keys.splice(i, 1), this.vals.splice(i, 1)), this.keys.unshift(e), this.vals.unshift(t)
                }, i.forEach = function(e) {
                    var t = this;
                    this.keys.forEach((function(i, n) {
                        e(i, t.vals[n])
                    }))
                }, i.delete = function(e) {
                    var t = this.keys.indexOf(e);
                    if (t < 0) throw new Error("this key is not exist");
                    return this.keys.splice(t, 1), this.vals.splice(t, 1), !0
                }, i.has = function(e) {
                    var t = this.keys.indexOf(e);
                    return t < 0 ? null : this.vals[t]
                }, i.values = function() {
                    var e = this,
                        t = [];
                    return this.vals.forEach((function(i, n) {
                        t.push(e.vals[n])
                    })), t
                }, i.clear = function() {
                    this.keys = [], this.vals = []
                }, t(e, [{
                    key: "size",
                    get: function() {
                        return this.keys.length
                    }
                }]), e
            }()), i._RF.pop()
        }
    }
}))