System.register("chunks:///_virtual/GameCharmAnimCtr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./LocalStorage.ts", "./BaseComponent.ts", "./SpriteLabel.ts", "./PlayerMgr6.ts", "./mjNodeUserPrefabCtr.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f, C, E, S, A;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, u = e.v3, l = e.instantiate, d = e.tween, c = e.UIOpacity
        }, function(e) {
            h = e.ClientInfo
        }, function(e) {
            p = e.GCache
        }, function(e) {
            m = e.AppEvent
        }, function(e) {
            _ = e.StoreKey, g = e.GConstants
        }, function(e) {
            f = e.LocalStorage
        }, function(e) {
            C = e.BaseComponent
        }, function(e) {
            E = e.SpriteLabel
        }, function(e) {
            S = e.PlayerMgr
        }, function(e) {
            A = e.mjNodeUserPrefabCtr
        }],
        execute: function() {
            var I, G, y, v, P, T, b, O;
            o._RF.push({}, "50785rq3tNFA63ygEeUoQB5", "GameCharmAnimCtr", void 0);
            var R = r.ccclass,
                M = r.property,
                N = r.menu;
            e("GameCharmAnimCtr", (I = R("GameCharmAnimCtr"), G = N("prefab/subGame/mj/GameCharmAnimCtr"), y = M({
                tooltip: "魅力值克隆节点",
                type: s
            }), v = M({
                tooltip: "魅力值动画节点",
                type: s
            }), I(P = G((b = t((T = function(e) {
                function t() {
                    for (var t, n, o = arguments.length, r = new Array(o), s = 0; s < o; s++) r[s] = arguments[s];
                    return n = e.call.apply(e, [this].concat(r)) || this, a(n, "charmCloneItem", b, i(n)), a(n, "charmAnimNode", O, i(n)), n._pos = {
                        0: u(80, 50, 0),
                        1: u(-80, 50, 0),
                        2: u(-80, 50, 0),
                        3: u(80, 50, 0)
                    }, n.event_defents = ((t = {})[m.EVENT_SHOW_CHARM_CHANGE] = "showCharmChange", t), n
                }
                n(t, e);
                var o = t.prototype;
                return o.onLoad = function() {}, o.showCharmChange = function(e, t) {
                    var n = this,
                        a = this.node.parent.getComponent(A);
                    this.updatePos(a.PosID);
                    var i = a.getSeatId(),
                        o = 0;
                    if (t.formSeatId == i) o = t.formCharmNum;
                    else {
                        if (t.toSeatId != i) return;
                        o = t.toCharmNum
                    }
                    if (0 != o) {
                        var r = l(this.charmCloneItem);
                        r.getChildByName("numNode").getComponent(E).string = o > 0 ? "+" + o : "-" + (0 - o), this.charmAnimNode.addChild(r), r.active = !0, d(r).by(1, {
                            position: u(0, 40, 0)
                        }, {
                            onUpdate: function(e, t) {
                                r.getComponent(c).opacity = 255 * (1 - t)
                            }
                        }).call((function() {
                            r.destroy()
                        })).start(), this.addSchedulerOnce(.02 * i, (function() {
                            n.recordCharmChange(i, o)
                        }))
                    }
                }, o.recordCharmChange = function(e, t) {
                    var n = S.getInstance().findPlayerWithSeatId(e);
                    if (n) {
                        var a = f.get(_.USER_CHARM_INFO, null);
                        (a = a ? JSON.parse(a) : {})[n.userId] = (a[n.userId] || n.gameUserInfo.charm || 0) + t, f.set(_.USER_CHARM_INFO, a), n.userId == p.User.getUserMid() && h.deviceInfo.GameIds.forEach((function(e) {
                            var n = p.User.getGamePlayRecordByKey(e, g.UserGameRecodeKey.Charm);
                            p.User.updateGamePlayRecordByKey(e, g.UserGameRecodeKey.Charm, n + t)
                        }))
                    }
                }, o.updatePos = function(e) {
                    this.node.position = this._pos[e] || u(80, 50, 0)
                }, o.onDestroy = function() {}, t
            }(C)).prototype, "charmCloneItem", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), O = t(T.prototype, "charmAnimNode", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), P = T)) || P) || P)), o._RF.pop()
        }
    }
}))