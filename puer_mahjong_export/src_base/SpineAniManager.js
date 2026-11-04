System.register("chunks:///_virtual/SpineAniManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./AppEvent.ts", "./LayerManager.ts", "./BaseController.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy, n = e._decorator, a = e.assetManager, o = e.sp, r = e.Vec3, s = e.error
        }, function(e) {
            c = e.Utils
        }, function(e) {
            l = e.AppEvent
        }, function(e) {
            u = e.LayerManager
        }, function(e) {
            d = e.BaseController
        }],
        execute: function() {
            var _, h;
            i._RF.push({}, "555e7qD2ydFI69nY7RPftFe", "SpineAniManager", void 0);
            var p = n.ccclass;
            e("SpineAniManager", p("SpineAniManager")(((h = function(e) {
                function i() {
                    for (var t, i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
                    return (t = e.call.apply(e, [this].concat(n)) || this)._skinAniMapping = {}, t
                }
                t(i, e), i.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new i("SpineAniManager")), this._instance
                }, i.init = function() {
                    this._instance && this._instance.clear(), this._instance = null, i.getInstance()
                };
                var n = i.prototype;
                return n.onInitModuleEvent = function() {
                    this.addModelListener(l.SYS_ANI_PLAY, this.startPlayAni), this.addModelListener(l.SYS_ANI_STOP, this.stopPlayAni)
                }, n.preLoadSkinAniDir = function(e, t, i, n) {
                    if (void 0 === i && (i = null), void 0 === n && (n = null), null != t && "" != t) {
                        var r = String(t).split("/"),
                            s = e;
                        r.length > 1 && (t = r[0], s = s + "|" + t);
                        var c = this;
                        a.loadBundle(e, (function(e, a) {
                            if (e) return c.print("加载包名出错", e), void(n && n(e, a));
                            a.preloadDir(t, o.SkeletonData, (function(e, t, n) {
                                i && i(e, t, n)
                            }), (function(e, t) {
                                if (e) return c.print(e), void(n && n(e, t));
                                for (var i = 0; i < t.length; i++)
                                    if (null != t[i]._name) {
                                        var a = t[i]._name,
                                            o = s + "|" + a;
                                        c._skinAniMapping[o] = t[i]
                                    } n && n(null, t)
                            }))
                        }))
                    }
                }, n.preLoadSkinAniDirList = function(e, t, i) {
                    if (void 0 === t && (t = null), void 0 === i && (i = null), e && !((null == e ? void 0 : e.length) <= 0))
                        for (var n = 0; n < e.length; n++) {
                            var a = e[n];
                            c.isNotNull(a.bundle, a.prefab) && this.preLoadSkinAniDir(a.bundle, a.prefab, t, i)
                        }
                }, n.startPlayAni = function(e, t) {
                    t && t.resConf && t.aniName && (null == t.isLoop && (t.isLoop = !1), null == t.isPremult && (t.isPremult = !1), null == t.toPos && (t.toPos = new r(0, 0, 0)), null == t.trackIndex && (t.trackIndex = 0), t.parentNode || (t.parentNode = u.AnimNode), this.setSpineAni(t.parentNode, t.resConf, t.trackIndex, t.aniName, t.isLoop, t.isPremult, t.skin, t.toPos, t.callStartFunc, t.callEndFunc, t.oneLoopEndcallFunc, t.processCallFunc, t.frameNum))
                }, n.stopPlayAni = function(e, t) {
                    if (t && t.resConf && t.aniName) {
                        var n = t.resConf.bundle + "|" + t.resConf.path + "|" + t.aniName,
                            a = this.getSpineNode(n);
                        a && 0 != a.isValid ? a.parent == t.parentNode && (1 == a.isValid && a.destroy(), i.AniNodeMap.set(n, null)) : i.AniNodeMap.set(n, null)
                    }
                }, n.getSpineNode = function(e) {
                    return e && null != e ? i.AniNodeMap.get(e) : null
                }, n.removeSpineNode = function(e) {
                    var t = null;
                    e && e.Anikey && (t = e.Anikey, 1 == (null == e ? void 0 : e.isValid) && e.destroy(), i.AniNodeMap.set(t, null))
                }, n.setSpineAni = function(e, t, n, a, l, u, d, _, h, p, f, m, g) {
                    void 0 === l && (l = !1), void 0 === u && (u = !1), void 0 === d && (d = null), void 0 === _ && (_ = null), void 0 === h && (h = null), void 0 === p && (p = null), void 0 === f && (f = null), void 0 === m && (m = null), void 0 === g && (g = null);
                    var E = t.bundle + "|" + t.path + "|" + a;
                    if (e && 0 != e.isValid) {
                        var v = e.getChildByName(E);
                        v && v.destroy();
                        var T = c.create_2DNode(E);
                        return T.addComponent(o.Skeleton), this.setAniData(T, t, n, a, l, u, d, h, p, f, m, g), _ && (T.position = new r(_.x, _.y, _.z)), e.addChild(T), T.Anikey = E, i.AniNodeMap.set(E, T), T
                    }
                    s("设置动画节点 节点不存在或已销毁 资源Key = " + E)
                }, n.setAniData = function(e, t, n, a, r, l, u, d, _, h, p, f) {
                    void 0 === u && (u = null), void 0 === d && (d = null), void 0 === _ && (_ = null), void 0 === h && (h = null), void 0 === p && (p = null), void 0 === f && (f = null);
                    var m = c.string_splitFileName(t.path),
                        g = String(t.path).split("/"),
                        E = t.bundle;
                    E = g.length > 1 ? E + "|" + g[0] + "|" + m : E + "|" + m;
                    var v = this._skinAniMapping[E],
                        T = this,
                        R = !1,
                        P = function() {
                            if (v = T._skinAniMapping[E]) {
                                if (e && 0 != e.isValid) {
                                    var c = e.getComponent(o.Skeleton);
                                    if (c.skeletonData = v, u && c.setSkin(u), c.setStartListener((function(e) {
                                            d && d(e, c)
                                        })), c.setEndListener((function(t) {
                                            i.getInstance().removeSpineNode(e), _ && 0 == R && (R = !0, _(t, c))
                                        })), c.setCompleteListener((function(t) {
                                            0 == r ? (i.getInstance().removeSpineNode(e), h && h(t, c), _ && 0 == R && (R = !0, _(t, c))) : h && h(t, c)
                                        })), c.setEventListener((function(e, t) {
                                            p && p(e, t, c)
                                        })), null != f && Number(f) > 0) {
                                        c.realUpdateAnimation || (c.realUpdateAnimation = c.updateAnimation);
                                        var m = 0,
                                            g = f;
                                        c.updateAnimation = function(e) {
                                            m + e < 1 / g ? m += e : (m = 0, c.realUpdateAnimation(e))
                                        }
                                    }
                                    c.premultipliedAlpha = l, c.setAnimation(n, a, r)
                                }
                            } else s('"SpineAniManager:骨骼动画加载失败 找不到该文件key = ' + E + " path = " + t.path)
                        };
                    v ? P() : (this.print("==============再次加载============"), this.preLoadSkinAniDir(t.bundle, t.path, null, (function() {
                        P()
                    })))
                }, i
            }(d))._instance = void 0, h.AniNodeMap = new Map, _ = h)) || _), i._RF.pop()
        }
    }
}))