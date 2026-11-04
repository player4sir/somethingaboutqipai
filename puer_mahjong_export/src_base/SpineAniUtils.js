System.register("chunks:///_virtual/SpineAniUtils.ts", ["cc", "./Utils.ts", "./LayerManager.ts"], (function(e) {
    var t, i, n, a, o, r, s;
    return {
        setters: [function(e) {
            t = e.cclegacy, i = e._decorator, n = e.js, a = e.assetManager, o = e.sp
        }, function(e) {
            r = e.Utils
        }, function(e) {
            s = e.LayerManager
        }],
        execute: function() {
            var c, l;
            t._RF.push({}, "5d265DWArBGN5BKVoQgJ+Vd", "SpineAniUtils", void 0);
            var u = i.ccclass;
            e("SpineAniUtils", u("SpineAniUtils")(((l = function() {
                function e() {}
                return e.loadSkeleDataInBundle = function(e, t, i, n, r) {
                    if (void 0 === n && (n = null), void 0 === r && (r = null), t) {
                        var s = function(e) {
                            e.load(t, o.SkeletonData, (function(e, t, i) {
                                n && n(e, t, i)
                            }), (function(e, t) {
                                var n = null;
                                e && (console.log(e), n = e);
                                var a = !0;
                                i && (i.isValid || (a = !1)), a && r && r(n, t)
                            }))
                        };
                        if (a.bundles.has(e)) {
                            var c, l = a.bundles.get(e),
                                u = null == (c = l.getInfoWithPath(t, o.SkeletonData)) ? void 0 : c.uuid;
                            if (a.assets.has(u)) {
                                var d = a.assets.get(u);
                                r && r(null, d)
                            } else s(l)
                        } else a.loadBundle(e, (function(e, t) {
                            if (e) return console.log("加载包名出错", e), void(r && r(e, t));
                            s(t)
                        }))
                    }
                }, e.createSpineNode = function(e, t, i, n, a, c, l) {
                    if (void 0 === e && (e = null), void 0 === i && (i = null), void 0 === n && (n = 0), void 0 === a && (a = !1), void 0 === c && (c = !1), void 0 === l && (l = null), (e = e || s.AnimNode) && e.isValid) {
                        var u = r.create_2DNode(i);
                        e.addChild(u), u.addComponent(o.Skeleton);
                        var d = u.getComponent(o.Skeleton);
                        return d.skeletonData = t, d.premultipliedAlpha = c, l && d.setSkin(l), i && (n = n || 0, d.setAnimation(n, i, a)), u
                    }
                }, e
            }()).callBackCache = n.createMap(!0), c = l)) || c), t._RF.pop()
        }
    }
}))