System.register("chunks:///_virtual/BugangBottom3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./EventManager.ts", "./BaseComponent.ts", "./RoomMgr6.ts", "./FXJConfig3.ts", "./FXJEvent3.ts", "./FXJCmd3.ts", "./Card5.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node
        }, function(e) {
            u = e.Utils
        }, function(e) {
            l = e.GCache
        }, function(e) {
            d = e.EventManager
        }, function(e) {
            c = e.BaseComponent
        }, function(e) {
            h = e.RoomMgr
        }, function(e) {
            p = e.GameStatus
        }, function(e) {
            m = e.FXJEvent
        }, function(e) {
            _ = e.FXJCmdHead
        }, function(e) {
            g = e.Card
        }],
        execute: function() {
            var f, C, E, S, A, I, G, y;
            o._RF.push({}, "55f6bDwhNFCirZCAlumrOuQ", "BugangBottom", void 0);
            var v = r.ccclass,
                P = r.property,
                T = r.menu;
            e("BugangBottom", (f = v("BugangBottom"), C = T("prefab/subGame/mj/BugangBottom"), E = P(g), S = P(g), f(A = C((G = t((I = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "leftCard", G, i(t)), a(t, "rightCard", y, i(t)), t._handlerTimeUpdate = null, t
                }
                n(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {}, o.onLoad = function() {}, o.updateBuGangPai = function(e) {
                    var t = this,
                        n = [this.leftCard, this.rightCard],
                        a = e.cards;
                    n.forEach((function(e, n) {
                        e.node.off(s.EventType.TOUCH_END), n < a.length ? (e.node.active = !0, e.setCardByte(a[n]), e.node.on(s.EventType.TOUCH_END, (function(e) {
                            t.opClick(a[n])
                        }), t)) : e.node.active = !1
                    })), l.SelectGame.isInPrivateRoom() || this.startOperationTime()
                }, o.startOperationTime = function() {
                    this.stopSchedulerOnce(this._handlerTimeUpdate), this._handlerTimeUpdate = null;
                    var e = h.getInstance().getTimeOut(p.OPERATION);
                    this._handlerTimeUpdate = this.addSchedulerOnce(e, u.handler(this, this.resetView))
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
                    d.dispatch(m.NET_SEND_MSG, n), this.node.active = !1
                }, t
            }(c)).prototype, "leftCard", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), y = t(I.prototype, "rightCard", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), A = I)) || A) || A)), o._RF.pop()
        }
    }
}))