System.register("chunks:///_virtual/BaseCache.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./Utils.ts"], (function(e) {
    var t, i, n, a, o, r;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, i = e.createForOfIteratorHelperLoose
        }, function(e) {
            n = e.cclegacy, a = e.Node
        }, function(e) {
            o = e.Logger
        }, function(e) {
            r = e.Utils
        }],
        execute: function() {
            n._RF.push({}, "0b8cbTfDt9FSpiUwWDb2OiO", "BaseCache", void 0), e("BaseCache", function(e) {
                function n(t) {
                    var i;
                    return (i = e.call(this) || this)._className = "BaseCache", i._data = void 0, i.print = function() {
                        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        o.logCache.apply(o, [5, "【" + this._className + "】"].concat(t))
                    }, i._className = t || "BaseCache", o.logCache(5, "Cache: " + i._className + "初始化..."), i._data = {}, i
                }
                t(n, e);
                var a = n.prototype;
                return a.setData = function(e, t) {
                    return void 0 === e && (e = null), void 0 === t && (t = null), e && (this._data[e] = t), this._data[e]
                }, a.getData = function(e) {
                    return void 0 === e && (e = null), e && this._data[e] ? this._data[e] : null
                }, a.mergeArray = function(e, t) {
                    if (r.isNull(e) || r.isNull(t)) return null;
                    var n = new Set(e);
                    t = r.table_verify(t);
                    for (var a, o = {}, s = i(n); !(a = s()).done;) o[a.value] = null;
                    for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && n.has(c) && (o[c] = t[c]);
                    return o
                }, a.mergeArrayDefault = function(e, t) {
                    if (r.isNull(e)) return t;
                    if (r.isNull(t)) return e;
                    var i = {},
                        n = {},
                        a = {};
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var s = e[o];
                            i[o] = s, n[o] = !0
                        } for (var c in t = r.table_verify(t), e)
                        if (Object.prototype.hasOwnProperty.call(e, c)) {
                            var l = t[c];
                            n[c] && (null == l || null == l ? l = i[c] : "object" == _typeof2(l) && "[]" != JSON.stringify(l) && "{}" != JSON.stringify(l) && (l = "[]" == JSON.stringify(e[c]) || "{}" == JSON.stringify(e[c]) ? l : this.mergeArrayDefault(i[c], l)), a[c] = l)
                        } return a
                }, a.clear = function() {
                    o.logCache(5, "Cache:" + this._className + "清理数据...")
                }, n
            }(a)), n._RF.pop()
        }
    }
}))