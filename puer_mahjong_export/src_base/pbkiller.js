System.register("chunks:///_virtual/pbkiller.ts", ["cc"], (function(e) {
    var t, i, n, a, o, r, s;
    return {
        setters: [function(e) {
            t = e.cclegacy, i = e.resources, n = e.path, a = e.Asset, o = e.TextAsset, r = e.JsonAsset, s = e.sys
        }],
        execute: function() {
            t._RF.push({}, "a9e92g1OFFMZbJ0jksWxK1Q", "pbkiller", void 0);
            var c = dcodeIO.ProtoBuf,
                l = dcodeIO.Long,
                u = dcodeIO.ByteBuffer;
            c.Util.IS_NODE = !1, c.Util.fetch = function(e) {
                var t = i.get(n.mainFileName(e), a);
                return t instanceof o ? t.text : t instanceof r ? t.json : t
            }, c.Util.mainFileName = function(e) {
                if (e) {
                    var t = e.lastIndexOf(".");
                    if (-1 !== t) return e.substring(0, t)
                }
                return e
            };
            var d = c.loadProto.bind(c);
            c.loadProto = function(e, t, i) {
                try {
                    "string" == typeof e ? d(e, t, i) : e.text && d(e.text, t, i)
                } catch (e) {
                    console.warn(i + ": protobuf syntax error")
                }
            }, c.loadJsonFile = function(e, t, n) {
                if (t && "object" == _typeof2(t) ? (n = t, t = null) : t && "function" == typeof t || (t = null), t) return c.Util.fetch("string" == typeof e ? e : e.root + "/" + e.file, (function(i) {
                    if (null !== i) try {
                        t(null, c.loadJson(JSON.parse(i), n, e))
                    } catch (e) {
                        t(e)
                    } else t(Error("Failed to fetch file"))
                }));
                var o, s = "object" == _typeof2(e) ? e.root + "/" + e.file : e;
                if (c.preloaded) {
                    var l = i.get(s, a);
                    o = l instanceof r ? l.json : console.text
                } else {
                    var u = c.Util.fetch(s);
                    u && (o = JSON.parse(u))
                }
                return o ? c.loadJson(o, n, e) : null
            };
            var _ = e("pbkiller", {
                ProtoBuf: c,
                Long: l,
                ByteBuffer: u,
                Map: c.Map,
                root: "proto",
                urls: [],
                preload: function(e, t) {
                    void 0 === e && (e = null), void 0 === t && (t = null), i.loadDir(_.root, (function(t, i, n) {
                        e && e(t, i, n)
                    }), (function(e, i) {
                        c.preloaded = !e, _.urls = i, t && t(e, i)
                    }))
                },
                loadFromFile: function(e, t) {
                    if (!s.isNative && s.platform !== s.Platform.WECHAT_GAME || c.preloaded) {
                        "string" == typeof e && (e = [e]);
                        var i = c.newBuilder();
                        return i.importRoot = _.root, e.forEach((function(e) {
                            e.startsWith(_.root) || (e = n.join(_.root, e));
                            var t = n.extname(e),
                                a = n.mainFileName(e);
                            ".proto" === t ? c.loadProtoFile(a, i) : console.log("nonsupport file extname, only support 'proto'")
                        })), i.build(t)
                    }
                    console.error("原生或微信小游戏上，需要先调用preload函数")
                },
                loadAll: function(e) {
                    void 0 === e && (e = ""), (_.root.endsWith("/") || _.root.endsWith("\\")) && (_.root = _.root.substr(0, _.root.length - 1));
                    var t = [];
                    return this.urls.forEach((function(e) {
                        e instanceof o && t.push(i.getAssetInfo(e._uuid).path + ".proto")
                    })), this.loadFromFile(t, e)
                }
            });
            t._RF.pop()
        }
    }
}))