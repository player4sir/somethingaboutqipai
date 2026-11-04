System.register("chunks:///_virtual/PropsConf.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./Utils.ts", "./AppEvent.ts", "./GameConstant.ts", "./LocalStorage.ts", "./Encrypto.ts", "./EventManager.ts", "./HttpRequest.ts", "./BaseCache.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            n = e.ClientInfo
        }, function(e) {
            a = e.Utils
        }, function(e) {
            o = e.AppEvent
        }, function(e) {
            r = e.GConstants, s = e.StoreKey
        }, function(e) {
            c = e.LocalStorage
        }, function(e) {
            l = e.Encrypt
        }, function(e) {
            u = e.EventManager
        }, function(e) {
            d = e.HttpRequest
        }, function(e) {
            _ = e.BaseCache
        }],
        execute: function() {
            i._RF.push({}, "5a0eaA4IHhD85ccylER310K", "PropsConf", void 0), e("PropsConf", function(e) {
                function i(t) {
                    var i, n;
                    return (n = e.call(this, "PropsConf") || this).__User = null, n._PropsUrlConf = {}, n._BaseProps = {}, n._UnionProps = {}, n.sGoodsMap = ((i = {})[r.UserPropsType.TYPE_VIP_KICK] = 36, i[r.UserPropsType.TYPE_MATCHCARD_LOW] = 25, i[r.UserPropsType.TYPE_BUQIANCARD] = 26, i), n.__User = t, n
                }
                t(i, e);
                var _ = i.prototype;
                return _.setPropsBaseUrlConf = function(e) {
                    console.log("打印相关:", e), this._PropsUrlConf = e
                }, _.getPropsBaseUrlConf = function() {
                    return this._PropsUrlConf
                }, _.downloadAndSavePropsConf = function(e, t, i) {
                    if (void 0 === i && (i = 0), i >= 3) console.warn("downloadAndSavePropsConf:" + e, "请求失败 3次都失败 不再请求");
                    else if (console.log("测试加载图片配置:", t), -1 != [s.PROPS_BASE_CONF, s.PROPS_UNION_CONF].indexOf(t) && !a.string_isEmpty(t)) {
                        var r = t + "_" + n.CurrowServer,
                            _ = new d,
                            h = this;
                        _.get(e, (function(n) {
                            if (n) {
                                var d = c.get(r, ""),
                                    _ = 0;
                                if (!a.string_isEmpty(d)) {
                                    var p = l.JsonDecode(d);
                                    _ = a.number_valueOf(p.GoodsBase.timestamp, 0)
                                }
                                var f = l.JsonDecode(n);
                                if (a.table_isEmpty(f)) return;
                                var m = a.number_valueOf(f.GoodsBase.timestamp, 0);
                                m > 0 && m > _ && (c.set(r, n), t == s.PROPS_BASE_CONF ? (h._BaseProps = f, u.dispatch(o.NET_GET_PROPS_CONF, s.PROPS_BASE_CONF)) : t == s.PROPS_UNION_CONF && (h._UnionProps = f, u.dispatch(o.NET_GET_PROPS_CONF, s.PROPS_UNION_CONF)))
                            } else h.downloadAndSavePropsConf(e, t, i + 1)
                        }), (function(n) {
                            console.log("http get error", n, t), h.downloadAndSavePropsConf(e, t, i + 1)
                        }))
                    }
                }, _.getIconPre = function() {
                    return this._PropsUrlConf.icon_pre
                }, _.getPropIconUrlByID = function(e) {
                    return e = a.number_valueOf(e), e = this.sGoodsMap[e] || e, this.getIconPre() + e % 10 + "/" + e + ".png"
                }, _.getPropsConfTime = function(e) {
                    console.log("测试加载图片配置时间");
                    var t = 0;
                    if (-1 != [s.PROPS_BASE_CONF, s.PROPS_UNION_CONF].indexOf(e)) {
                        var i = c.get(e + "_" + n.CurrowServer, ""),
                            o = l.JsonDecode(i);
                        a.table_isEmpty(o) || (t = a.number_valueOf(o.GoodsBase.timestamp, 0))
                    }
                    return t
                }, _.initDataByLocal = function() {
                    this.getBaseProps(), this.getUnionProps()
                }, _.getBaseProps = function() {
                    var e = s.PROPS_BASE_CONF + "_" + n.CurrowServer;
                    if (a.table_isEmpty(this._BaseProps)) {
                        var t = c.get(e),
                            i = l.JsonDecode(t);
                        this._BaseProps = a.table_verify(i)
                    }
                    return a.table_isEmpty(this._BaseProps) && (this._BaseProps = {}), this._BaseProps
                }, _.getUnionProps = function() {
                    var e = s.PROPS_UNION_CONF + "_" + n.CurrowServer;
                    if (a.table_isEmpty(this._UnionProps)) {
                        var t = c.get(e),
                            i = l.JsonDecode(t);
                        this._UnionProps = i
                    }
                    return a.table_isEmpty(this._UnionProps) && (this._UnionProps = {}), this._UnionProps
                }, _.getPropsInfoById = function(e) {
                    e = a.number_valueOf(e), e = this.sGoodsMap[e] || e;
                    var t = this.getBaseProps();
                    if (a.table_isEmpty(t.GoodsBase)) return {};
                    var i = t.GoodsBase.list;
                    if (a.table_isEmpty(i)) return {};
                    if (Object.prototype.hasOwnProperty.call(i, e)) return i[e].item_type = e, i[e];
                    var n = this.getUnionProps();
                    if (a.table_isEmpty(n.GoodsBase)) return {};
                    var o = n.GoodsBase.list;
                    return a.table_isEmpty(o) ? {} : Object.prototype.hasOwnProperty.call(o, e) ? (o[e].item_type = e, o[e]) : {}
                }, i
            }(_)), i._RF.pop()
        }
    }
}))