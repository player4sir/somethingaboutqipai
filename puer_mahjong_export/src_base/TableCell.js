System.register("chunks:///_virtual/TableCell.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    var t, i, n, a, o, r, s;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, i = e.createClass
        }, function(e) {
            n = e.cclegacy, a = e._decorator, o = e.UITransform, r = e.Vec2, s = e.Component
        }],
        execute: function() {
            var c;
            n._RF.push({}, "35fe1SeZ9lEaJzzI57k3iOx", "TableCell", void 0);
            var l = a.ccclass;
            e("TableCell", l("TableCell")(c = function(e) {
                function n() {
                    for (var t, i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
                    return (t = e.call.apply(e, [this].concat(n)) || this)._index = -1, t.delegate = null, t._data = null, t
                }
                t(n, e);
                var a = n.prototype;
                return a.getCellSize = function(e) {
                    var t = this.node.getComponent(o).contentSize;
                    return new r(t.width, t.height)
                }, a.updateData = function(e, t) {
                    this._data = e
                }, a.resetCell = function() {}, i(n, [{
                    key: "index",
                    get: function() {
                        return this._index
                    },
                    set: function(e) {
                        this._index = e
                    }
                }]), n
            }(s)) || c), n._RF.pop()
        }
    }
}))