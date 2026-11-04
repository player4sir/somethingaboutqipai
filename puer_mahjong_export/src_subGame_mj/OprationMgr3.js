System.register("chunks:///_virtual/OprationMgr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./BaseComponent.ts", "./RoomMgr6.ts", "./FXJConfig3.ts", "./GameEvent6.ts", "./CardUtil3.ts", "./OprationItem3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Layout, u = e.instantiate, l = e.isValid
        }, function(e) {
            d = e.Utils
        }, function(e) {
            c = e.BaseComponent
        }, function(e) {
            h = e.RoomMgr
        }, function(e) {
            p = e.OPCode
        }, function(e) {
            m = e.GameEvent
        }, function(e) {
            _ = e.CardUtil
        }, function(e) {
            g = e.OprationItem
        }],
        execute: function() {
            var f, C, E, S, A, I;
            o._RF.push({}, "ebb34PrEDJP8IL2y3redP4V", "OprationMgr", void 0);
            var G = r.ccclass,
                y = r.property,
                v = r.menu;
            e("OprationMgr", (f = G("OprationMgr"), C = v("prefab/subGame/mj/OprationMgr"), E = y(s), f(S = C((I = t((A = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "opmgrItem", I, i(t)), t._handlerTimeUpdate = null, t.coordinateList = [], t
                }
                n(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {
                    this.addModelListener(m.UPDATE_USER_OPERATION_RESULT, this.updateUserOperationResult)
                }, o.onLoad = function() {
                    var e = this;
                    this.addGameComp(), this.opmgrItem.node.active = !1, this.coordinateList = [{
                        x: 21.979,
                        y: -132.443
                    }, {
                        x: 352.788,
                        y: 85.391
                    }, {
                        x: 22.299,
                        y: 256.069
                    }, {
                        x: -344.469,
                        y: 84.486
                    }], this.opmgrItem.getComponent(g).updateAtlasCodeMap(), this.doGameCompFun("getOprationAnimPos", (function(t) {
                        e.coordinateList = t
                    }))
                }, o.addGameComp = function() {
                    null == this.node && (this.node = d.create_2DNode()), this.node.addComponent("MJGameComponent");
                    var e = this.node.getComponent("MJGameComponent");
                    "function" == typeof e.setDelegate && e.setDelegate(this)
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("MJGameComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
                        return t[e].apply(t, a)
                    }
                }, o.updateUserOperationResult = function(e, t) {
                    if (t.opCode !== p.OPE_OUT_CARD) {
                        var n = _.calculatePlayerSeat(h.getInstance().mySeatId, t.seatId),
                            a = this.coordinateList[n],
                            i = this.opmgrItem.getComponent(g);
                        if (i.isUsing) {
                            var o = u(this.opmgrItem.node);
                            this.opmgrItem.node.parent.addChild(o), o.setPosition(a.x, a.y);
                            var r = o.getComponent(g);
                            r.updateAtlasCodeMap(), r.updateItemProps(t.userId, t.opCode), r.scheduleOnce((function() {
                                l(o, !0) && (o.removeFromParent(), o.destroy())
                            }), 1.1), r.setAnimationCompleteCallback((function() {
                                l(o, !0) && (o.removeFromParent(), o.destroy())
                            }))
                        } else this.opmgrItem.node.setPosition(a.x, a.y), i.updateItemProps(t.userId, t.opCode), this.startOperationTime()
                    }
                }, o.startOperationTime = function() {
                    this.stopSchedulerOnce(this._handlerTimeUpdate), this._handlerTimeUpdate = null, this._handlerTimeUpdate = this.addSchedulerOnce(1.1, d.handler(this, this.resetView))
                }, o.resetView = function() {
                    this.opmgrItem.node.active = !1, this.opmgrItem.getComponent(g).isUsing = !1
                }, o.start = function() {}, t
            }(c)).prototype, "opmgrItem", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), S = A)) || S) || S)), o._RF.pop()
        }
    }
}))