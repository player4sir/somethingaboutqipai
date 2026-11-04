System.register("chunks:///_virtual/ResLoader.ts", ["cc", "./GameConfig.ts", "./Utils.ts"], (function(e) {
    var t, i, n, a, o, r, s;
    return {
        setters: [function(e) {
            t = e.cclegacy, i = e.assetManager, n = e.js, a = e.Asset, o = e.resources
        }, function(e) {
            r = e.GameConfig
        }, function(e) {
            s = e.Utils
        }],
        execute: function() {
            t._RF.push({}, "1a2e4jFffpHrYjrpxbnC760", "ResLoader", void 0), e("resLoader", new(function() {
                function e() {}
                var t = e.prototype;
                return t.setMaxRetryCount = function(e) {
                    null != e && (i.downloader.maxRetryCount = e)
                }, t.setRetryInterval = function(e) {
                    null != e && (i.downloader.retryInterval = e)
                }, t.setMaxConcurrency = function(e) {
                    null != e && (i.downloader.maxConcurrency = e)
                }, t.setMaxRequestsPerFrame = function(e) {
                    null != e && (i.downloader.maxRequestsPerFrame = e)
                }, t.transformOnlineServerUrl = function(e) {
                    return s.string_isHttp(e) && r.instance.isOnlineServer() && (e = String(e).replace("http://", "https://"), e = String(e).replace("HTTP://", "https://"), e = String(e).replace("uchead.static.17c.cn", "dfqppic.266.com")), e
                }, t.getRemoteCache = function(e) {
                    return e = this.transformOnlineServerUrl(e), i.assets.get(e)
                }, t.releaseCache = function(e) {
                    e && (e = this.transformOnlineServerUrl(e), i.assets.remove(e))
                }, t.parseLoadResArgs = function(e, t, i, o) {
                    var r = e,
                        s = t,
                        c = i,
                        l = o;
                    if (void 0 === o) {
                        var u = n.isChildClassOf(t, a);
                        i ? (l = i, u && (c = null)) : void 0 !== i || u || (l = t, c = null, s = null), void 0 === i || u || (c = t, s = null)
                    }
                    return {
                        paths: r,
                        type: s,
                        onProgress: c,
                        onComplete: l
                    }
                }, t.preload = function(e, t, i, n, a) {
                    var o = null;
                    "string" == typeof t || t instanceof Array ? (o = this.parseLoadResArgs(t, i, n, a)).bundle = e : o = this.parseLoadResArgs(e, t, i, n), this.preloadBundleByArgs(o)
                }, t.preloadBundleByArgs = function(e) {
                    var t = this;
                    if (e.bundle)
                        if (i.bundles.has(e.bundle)) {
                            console.log("分包---------preloadBundleByArgs---资源已经加载成了", e.bundle);
                            var n = i.bundles.get(e.bundle);
                            this.preloadByBundleAndArgs(n, e)
                        } else i.loadBundle(e.bundle, (function(i, n) {
                            i ? (console.log("分包---------preloadBundleByArgs---预加载bundle出错", i, e.bundle), i.message = s.joinStr(i.message, ", load bundle failed:" + e.bundle), null == e || e.onComplete(i, null)) : (console.log("分包---------preloadBundleByArgs---预加载bundle成功", e.bundle), t.preloadByBundleAndArgs(n, e))
                        }));
                    else this.preloadByBundleAndArgs(o, e), console.log("分包---------preloadBundleByArgs---预加载bundle出错", "请检查分包是否正确")
                }, t.preloadByBundleAndArgs = function(e, t) {
                    t.dir ? e.preloadDir(t.paths, t.type, t.onProgress, t.onComplete) : (t.paths, e.preload(t.paths, t.type, t.onProgress, t.onComplete))
                }, t.load = function(e, t, i, n, a) {
                    var o = null;
                    "string" == typeof t || t instanceof Array ? (o = this.parseLoadResArgs(t, i, n, a)).bundle = e : o = this.parseLoadResArgs(e, t, i, n), this.loadByArgs(o)
                }, t.loadDir = function(e, t, i, n, a) {
                    var o = null;
                    "string" == typeof t ? (o = this.parseLoadResArgs(t, i, n, a)).bundle = e : o = this.parseLoadResArgs(e, t, i, n), o.dir = o.paths, this.loadByArgs(o)
                }, t.loadByArgs = function(e) {
                    var t = this;
                    if (e.bundle)
                        if (i.bundles.has(e.bundle)) {
                            var n = i.bundles.get(e.bundle);
                            this.loadByBundleAndArgs(n, e)
                        } else i.loadBundle(e.bundle, (function(i, n) {
                            i ? (console.log("分包---------loadByArgs---加载bundle出错", e.bundle, i), i.message = s.joinStr(i.message, ", load bundle failed: [" + e.bundle + "]"), null == e || e.onComplete(i, null)) : t.loadByBundleAndArgs(n, e)
                        }));
                    else this.loadByBundleAndArgs(o, e)
                }, t.loadByBundleAndArgs = function(e, t) {
                    if (t.dir) e.loadDir(t.paths, t.type, t.onProgress, t.onComplete);
                    else if ("string" == typeof t.paths) {
                        var n = !1;
                        if (i.assets.has(t.paths)) {
                            var a = i.assets.get(t.paths);
                            a instanceof t.type && (t.onComplete(null, a), n = !0)
                        }
                        n || e.load(t.paths, t.type, t.onProgress, (function(e, i) {
                            e && (e.message = s.joinStr(e.message, ", load prefab failed: [" + (t.bundle || "") + "]_" + t.paths)), t.onComplete(e, i)
                        }))
                    } else e.load(t.paths, t.type, t.onProgress, (function(e, i) {
                        e && (e.message = s.joinStr(e.message, ", load prefab failed: [" + (t.bundle || "") + "]_" + t.paths)), t.onComplete(e, i)
                    }))
                }, t.loadRemote = function(e, t, n) {
                    e = this.transformOnlineServerUrl(e), n ? i.assets.has(e) ? n(null, i.assets.get(e)) : i.loadRemote(e, t, n) : i.loadRemote(e, t)
                }, t.loadBundle = function(e, t, n, a) {
                    if (void 0 === t && (t = null), e) {
                        var o = {
                            version: n,
                            scriptAsyncLoading: a
                        };
                        i.loadBundle(e, o, (function(i, n) {
                            i && (i.message = s.joinStr(i.message, ", load bundle failed: [" + e + "]"), console.log("分包---loadBundle 下载失败---")), t && t(i, n)
                        }))
                    } else t("bundle is null", null)
                }, t.release = function(e, t) {
                    if (void 0 === t && (t = "resources"), e) {
                        var n = i.getBundle(t);
                        null == n || n.release(e)
                    }
                }, t.releaseList = function(e, t) {
                    if (void 0 === t && (t = "resources"), e && e.length > 0)
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            this.release(n, t)
                        }
                }, t.releaseDir = function(e, t) {
                    void 0 === t && (t = "resources");
                    var n = i.getBundle(t),
                        a = null == n ? void 0 : n.getDirWithPath(e);
                    null == a || a.map((function(e) {
                        var t = i.assets.get(e.uuid);
                        i.releaseAsset(t)
                    })), "" == e && "resources" != t && n && i.removeBundle(n)
                }, t.get = function(e, t, n) {
                    void 0 === n && (n = "resources");
                    var a = i.getBundle(n);
                    return a && a.get ? a.get(e, t) : null
                }, t.dump = function() {
                    i.assets.forEach((function(e, t) {})), console.log("当前资源总数:" + i.assets.count)
                }, e
            }())), t._RF.pop()
        }
    }
}))