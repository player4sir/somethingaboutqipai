System.register("chunks:///_virtual/HttpRequest.ts", ["cc", "./Encrypto.ts"], (function(e) {
    var t, i, n;
    return {
        setters: [function(e) {
            t = e.cclegacy, i = e.warn
        }, function(e) {
            n = e.Encrypt
        }],
        execute: function() {
            e({
                HttpEvent: void 0,
                ResponseType: void 0
            }), t._RF.push({}, "806e5t8UetFy4spn89dnuan", "HttpRequest", void 0);
            var a, o, r = {},
                s = {};
            ! function(e) {
                e.NO_NETWORK = "http_request_no_network", e.UNKNOWN_ERROR = "http_request_unknown_error", e.TIMEOUT = "http_request_timout"
            }(a || (a = e("HttpEvent", {}))),
            function(e) {
                e.Default = "", e.ArrayBuffer = "arraybuffer", e.Blob = "blob", e.Document = "document", e.Json = "json", e.Text = "text"
            }(o || (o = e("ResponseType", {}))), e("HttpRequest", function() {
                function e() {
                    this.server = "http://192.168.1.150/", this.timeout = 1e4
                }
                var t = e.prototype;
                return t.get = function(e, t, i) {
                    return this.sendRequest(e, null, !1, t, i)
                }, t.getWithParams = function(e, t, i, n) {
                    return this.sendRequest(e, t, !1, i, n)
                }, t.getByArraybuffer = function(e, t, i) {
                    return this.sendRequest(e, null, !1, t, i, "arraybuffer", !1)
                }, t.getWithParamsByArraybuffer = function(e, t, i, n) {
                    return this.sendRequest(e, t, !1, i, n, "arraybuffer", !1)
                }, t.post = function(e, t, i, n, a) {
                    return this.sendRequest(e, t, !0, i, n, a)
                }, t.abort = function(e) {
                    void 0 === e && (e = "");
                    var t;
                    t = e && 0 == e.toLocaleLowerCase().indexOf("http") ? e : this.server + e;
                    var i = r[t];
                    i && i.abort()
                }, t.getParamString = function(e) {
                    if ("string" == typeof e) return e;
                    if ("object" != _typeof2(e)) return e;
                    var t = "";
                    for (var i in e) {
                        var n = e[i];
                        if (n instanceof Object)
                            for (var a in n) t += a + "=" + n[a] + "&";
                        else t += i + "=" + n + "&"
                    }
                    return t.substr(0, t.length - 1)
                }, t.sendRequest = function(e, t, c, l, u, d, _, h) {
                    var p = this;
                    if (void 0 === _ && (_ = !0), void 0 === h && (h = this.timeout), null != e && "" != e) {
                        var f, m, g;
                        if (f = 0 == e.toLocaleLowerCase().indexOf("http") ? e : this.server + e, t ? (g = this.getParamString(t), m = f.indexOf("?") > -1 ? f + "&" + g : f + "?" + g) : m = f, null == r[m] || s[m] != g) {
                            var E = new XMLHttpRequest;
                            d && (E.responseType = d), r[m] = E, s[m] = g;
                            var v = {};
                            v.url = f, v.params = t, c ? ("string" != typeof t && (t = JSON.stringify(t)), E.open("POST", f)) : E.open("GET", m), E.setRequestHeader("Content-Type", "application/json;charset=utf-8"), E.setRequestHeader("Access-Control-Allow-Origin", "*"), E.setRequestHeader("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"), E.setRequestHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
                            var T = !1,
                                R = function(e, t) {
                                    void 0 === t && (t = null), 1 != T && (T = !0, null == e ? l && l(t, v) : u && u(v, t))
                                };
                            return _ && (E.timeout = h, E.ontimeout = function(e) {
                                p.deleteCache(m), R(a.TIMEOUT)
                            }), E.onloadend = function(e) {
                                500 == E.status && (p.deleteCache(m), R(a.NO_NETWORK))
                            }, E.onerror = function(e) {
                                p.deleteCache(m);
                                var t;
                                t = 0 == E.readyState || 1 == E.readyState || 0 == E.status ? a.NO_NETWORK : a.UNKNOWN_ERROR, R(t)
                            }, E.onreadystatechange = function(e) {
                                if (4 == E.readyState)
                                    if (p.deleteCache(m), 200 == E.status) switch (d) {
                                        case o.ArrayBuffer:
                                            var t = E.response,
                                                i = new Uint8Array(t);
                                            R(null, i);
                                            break;
                                        case o.Json:
                                            var r = E.response;
                                            if ("string" == typeof E.response) try {
                                                r = n.JsonDecode(E.response)
                                            } catch (e) {
                                                r = null, console.log("数据解析出错 非json格式")
                                            }
                                            R(null, r);
                                            break;
                                        default:
                                            R(null, E.response)
                                    } else R(a.UNKNOWN_ERROR, E.response)
                            }, c ? null == t || "" == t ? E.send() : E.send(t) : E.send(), m
                        }
                        i("地址【" + f + "】已正在请求中，不能重复请求")
                    } else console.log("请求地址不能为空")
                }, t.deleteCache = function(e) {
                    delete r[e], delete s[e]
                }, e
            }()), t._RF.pop()
        }
    }
}))