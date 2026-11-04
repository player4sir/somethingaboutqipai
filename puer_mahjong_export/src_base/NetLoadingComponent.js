System.register("chunks:///_virtual/NetLoadingComponent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./DelegateComponent.ts", "./EventManager.ts", "./BaseComponent.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, c = e.sp, l = e.Label
        }, function(e) {
            u = e.DelegateComponent
        }, function(e) {
            d = e.EventManager
        }, function(e) {
            _ = e.BaseComponent
        }],
        execute: function() {
            var h, p, f, m, g, E, v, T, R, P, y, C;
            o._RF.push({}, "d1a6fhGz09KFarc5/aRpN7w", "NetLoadingComponent", void 0);
            var S = r.ccclass,
                A = r.property,
                I = r.menu;
            e("NetLoadingComponent", (h = S("NetLoadingComponent"), p = I("vc/NetLoadingComponent"), f = A({
                tooltip: "spine动画加载节点",
                type: s
            }), m = A({
                tooltip: "spine动画加载节点",
                type: c.Skeleton
            }), g = A({
                tooltip: "文字提示layer",
                type: s
            }), E = A({
                tooltip: "提示文案",
                type: l
            }), h(v = p((R = t((T = function(e) {
                function t() {
                    for (var t, i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, n(t, "spineAniNode", R, a(t)), n(t, "spineAniSkeleton", P, a(t)), n(t, "tipsLayer", y, a(t)), n(t, "tipsLab", C, a(t)), t._countTime = 15, t._extParam = {}, t.skinName = "loading_big", t
                }
                i(t, e);
                var o = t.prototype;
                return o.onLoad = function() {
                    this.getParamData(), this.setSpineAni(0, this.skinName, !0), this.startCountDown()
                }, o.getParamData = function() {
                    var e = null;
                    if (e = this.node.getComponent(u)) {
                        var t = e.getParams();
                        t && (null != t.time && (this._countTime = t.time), t.param && t.param.skinName && (this.skinName = t.param.skinName), this._extParam = t.param || {})
                    }
                }, o.start = function() {
                    var e = this;
                    if (this._extParam && this._extParam.showType && this._extParam.showTips) {
                        this.spineAniSkeleton.node.active = !1, this.tipsLayer.active = !0, this.tipsLab.node.active = !0;
                        var t = this._countTime;
                        this.tipsLab.string = this._extParam.showTips + "(" + t + ")", this.tipsLab.schedule((function() {
                            --t <= 0 ? e.tipsLab.unscheduleAllCallbacks() : e.tipsLab.string = e._extParam.showTips + "(" + t + ")"
                        }), 1)
                    }
                }, o.startCountDown = function() {
                    var e = this,
                        t = this;
                    this._countTime > 0 && this.addSchedulerOnce(this._countTime, (function() {
                        t.node && 1 == t.node.isValid && (e._extParam && e._extParam.eventId && d.dispatch(e._extParam.eventId), t.node.destroy())
                    }))
                }, o.setSpineAni = function(e, t, i) {
                    this.spineAniSkeleton.setAnimation(e, t, i)
                }, o.onDestroy = function() {}, t
            }(_)).prototype, "spineAniNode", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), P = t(T.prototype, "spineAniSkeleton", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), y = t(T.prototype, "tipsLayer", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), C = t(T.prototype, "tipsLab", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), v = T)) || v) || v)), o._RF.pop()
        }
    }
}))