System.register("chunks:///_virtual/OprationMgr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./BaseComponent.ts", "./RoomMgr.ts", "./FXJConfig.ts", "./GameEvent.ts", "./CardUtil.ts", "./OprationItem.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Layout, l = e.instantiate, u = e.isValid
        }, function(e) {
            d = e.Utils
        }, function(e) {
            c = e.BaseComponent
        }, function(e) {
            h = e.RoomMgr
        }, function(e) {
            p = e.OPCode
        }, function(e) {
            f = e.GameEvent
        }, function(e) {
            _ = e.CardUtil
        }, function(e) {
            g = e.OprationItem
        }],
        execute: function() {
            var m, C, I, A, E;
            o._RF.push({}, "15743r9b2lLybTVGo3oqRbR", "OprationMgr", void 0);
            var v = r.ccclass,
                y = r.property;
            e("OprationMgr", (m = v("OprationMgr"), C = y(s), m((E = t((A = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "opmgrItem", E, a(t)), t._handlerTimeUpdate = null, t.coordinateList = [], t
                }
                n(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {
                    this.addModelListener(f.UPDATE_USER_OPERATION_RESULT, this.updateUserOperationResult)
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
                    null == this.node && (this.node = d.create_2DNode()), this.node.addComponent("GameComponent")
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("GameComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                        return t[e].apply(t, i)
                    }
                }, o.updateUserOperationResult = function(e, t) {
                    if (t.opCode !== p.OPE_OUT_CARD) {
                        var n = _.calculatePlayerSeat(h.getInstance().mySeatId, t.seatId),
                            i = this.coordinateList[n],
                            a = this.opmgrItem.getComponent(g);
                        if (a.isUsing) {
                            var o = l(this.opmgrItem.node);
                            this.opmgrItem.node.parent.addChild(o), o.setPosition(i.x, i.y);
                            var r = o.getComponent(g);
                            r.updateAtlasCodeMap(), r.updateItemProps(t.userId, t.opCode), r.scheduleOnce((function() {
                                u(o, !0) && (o.removeFromParent(), o.destroy())
                            }), 1.1), r.setAnimationCompleteCallback((function() {
                                u(o, !0) && (o.removeFromParent(), o.destroy())
                            }))
                        } else this.opmgrItem.node.setPosition(i.x, i.y), a.updateItemProps(t.userId, t.opCode), this.startOperationTime()
                    }
                }, o.startOperationTime = function() {
                    this.stopSchedulerOnce(this._handlerTimeUpdate), this._handlerTimeUpdate = null, this._handlerTimeUpdate = this.addSchedulerOnce(1.1, d.handler(this, this.resetView))
                }, o.resetView = function() {
                    this.opmgrItem.node.active = !1, this.opmgrItem.getComponent(g).isUsing = !1
                }, o.start = function() {}, t
            }(c)).prototype, "opmgrItem", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), I = A)) || I)), o._RF.pop()
        }
    }
}))