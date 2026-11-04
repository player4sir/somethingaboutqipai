System.register("chunks:///_virtual/BugangBottom.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./EventManager.ts", "./BaseComponent.ts", "./RoomMgr.ts", "./FXJConfig.ts", "./FXJEvent.ts", "./FXJCmd.ts", "./Card.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node
        }, function(e) {
            l = e.Utils
        }, function(e) {
            u = e.GCache
        }, function(e) {
            d = e.EventManager
        }, function(e) {
            c = e.BaseComponent
        }, function(e) {
            h = e.RoomMgr
        }, function(e) {
            p = e.GameStatus
        }, function(e) {
            f = e.FXJEvent
        }, function(e) {
            _ = e.FXJCmdHead
        }, function(e) {
            g = e.Card
        }],
        execute: function() {
            var m, C, I, A, E, v, y;
            o._RF.push({}, "10dcbRbiXJOT4Kjrk6CCTu+", "BugangBottom", void 0);
            var S = r.ccclass,
                P = r.property;
            e("BugangBottom", (m = S("BugangBottom"), C = P(g), I = P(g), m((v = t((E = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "leftCard", v, a(t)), i(t, "rightCard", y, a(t)), t._handlerTimeUpdate = null, t
                }
                n(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {}, o.onLoad = function() {}, o.updateBuGangPai = function(e) {
                    var t = this,
                        n = [this.leftCard, this.rightCard],
                        i = e.cards;
                    n.forEach((function(e, n) {
                        e.node.off(s.EventType.TOUCH_END), n < i.length ? (e.node.active = !0, e.setCardByte(i[n]), e.node.on(s.EventType.TOUCH_END, (function(e) {
                            t.opClick(i[n])
                        }), t)) : e.node.active = !1
                    })), u.SelectGame.isInPrivateRoom() || this.startOperationTime()
                }, o.startOperationTime = function() {
                    this.stopSchedulerOnce(this._handlerTimeUpdate), this._handlerTimeUpdate = null;
                    var e = h.getInstance().getTimeOut(p.OPERATION);
                    this._handlerTimeUpdate = this.addSchedulerOnce(e, l.handler(this, this.resetView))
                }, o.resetView = function() {
                    this.node.active = !1, this.stopSchedulerOnce(this._handlerTimeUpdate), this._handlerTimeUpdate = null
                }, o.opClick = function(e) {
                    var t = {
                            card: e
                        },
                        n = {
                            cmd: _.C2S.USER_SELECT_FAN_GANG_PAI,
                            body: t
                        };
                    d.dispatch(f.NET_SEND_MSG, n), this.node.active = !1
                }, t
            }(c)).prototype, "leftCard", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), y = t(E.prototype, "rightCard", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), A = E)) || A)), o._RF.pop()
        }
    }
}))