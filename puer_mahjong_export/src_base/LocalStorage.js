System.register("chunks:///_virtual/LocalStorage.ts", ["cc", "./Md5.ts"], (function(e) {
    var t, i, n;
    return {
        setters: [function(e) {
            t = e.cclegacy, i = e.sys
        }, function(e) {
            n = e.Md5
        }],
        execute: function() {
            var a;
            e("LocalStorage", void 0), t._RF.push({}, "2151aAnO4pP7LGA0o4fnH5q", "LocalStorage", void 0),
                function(e) {
                    var t = -1;

                    function a(e) {
                        null != e ? (e = n(e = t + "_" + e), i.localStorage.removeItem(e)) : console.error("[" + e + "]存储的key不能为空")
                    }
                    e.init = function(e, t) {
                        n(e), n(t)
                    }, e.setUser = function(e) {
                        t = e
                    }, e.set = function(e, o) {
                        var r = t + "_" + e;
                        if (null != r) {
                            if (r = n(r), null == o) return console.log("[" + e + "]存储的值为空，则直接移除该存储"), void a(e);
                            if ("function" != typeof o) {
                                if ("object" == _typeof2(o)) try {
                                    o = JSON.stringify(o)
                                } catch (t) {
                                    return void console.error("[" + e + "]解析失败，str = " + o)
                                } else "number" == typeof o && (o += "");
                                try {
                                    i.localStorage.setItem(r, o)
                                } catch (e) {}
                            } else console.error("[" + e + "]储存的值不能为方法")
                        } else console.error("[" + e + "]存储的key不能为空")
                    }, e.get = function(e, a) {
                        var o;
                        if ("function" == typeof(null == i || null == (o = i.localStorage) ? void 0 : o.getItem)) {
                            if (null != e) {
                                var r = t + "_" + e;
                                r = n(r);
                                var s = i.localStorage.getItem(r);
                                if ("null" != s && "undefined" != s || (s = null), null == a || "string" == typeof a) return s;
                                if (null === s) return a;
                                if ("number" == typeof a) return Number(s) || 0;
                                if ("boolean" == typeof a) return "true" == String(s);
                                if ("object" == _typeof2(a)) try {
                                    return JSON.parse(s)
                                } catch (t) {
                                    return console.error("[" + e + "]解析数据失败,str=" + s), a
                                }
                                return s
                            }
                            console.error("[" + e + "]存储的key不能为空")
                        }
                    }, e.remove = a, e.clear = function() {
                        i.localStorage.clear()
                    }
                }(a || (a = e("LocalStorage", {}))), a.init("Creator", "3.62"), a.setUser("FXJ"), t._RF.pop()
        }
    }
}))