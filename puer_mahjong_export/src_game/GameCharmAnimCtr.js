System.register("chunks:///_virtual/GameCharmAnimCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./LocalStorage.ts", "./BaseComponent.ts", "./SpriteLabel.ts", "./PlayerMgr.ts", "./NodeUserPrefabCtr.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m, C, I, A, E;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, l = e.v3, u = e.instantiate, d = e.tween, c = e.UIOpacity
        }, function(e) {
            h = e.ClientInfo
        }, function(e) {
            p = e.GCache
        }, function(e) {
            f = e.AppEvent
        }, function(e) {
            _ = e.StoreKey, g = e.GConstants
        }, function(e) {
            m = e.LocalStorage
        }, function(e) {
            C = e.BaseComponent
        }, function(e) {
            I = e.SpriteLabel
        }, function(e) {
            A = e.PlayerMgr
        }, function(e) {
            E = e.NodeUserPrefabCtr
        }],
        execute: function() {
            var v, y, S, P, T, G, O, R;
            o._RF.push({}, "05a60eNOMdClKYbGhOf+rj2", "GameCharmAnimCtr", void 0);
            var N = r.ccclass,
                b = r.property,
                D = r.menu;
            e("GameCharmAnimCtr", (v = N("GameCharmAnimCtr"), y = D("prefab/game/GameCharmAnimCtr"), S = b({
                tooltip: "魅力值克隆节点",
                type: s
            }), P = b({
                tooltip: "魅力值动画节点",
                type: s
            }), v(T = y((O = t((G = function(e) {
                function t() {
                    for (var t, n, o = arguments.length, r = new Array(o), s = 0; s < o; s++) r[s] = arguments[s];
                    return n = e.call.apply(e, [this].concat(r)) || this, i(n, "charmCloneItem", O, a(n)), i(n, "charmAnimNode", R, a(n)), n._pos = {
                        0: l(80, 50, 0),
                        1: l(-80, 50, 0),
                        2: l(-80, 50, 0),
                        3: l(80, 50, 0)
                    }, n.event_defents = ((t = {})[f.EVENT_SHOW_CHARM_CHANGE] = "showCharmChange", t), n
                }
                n(t, e);
                var o = t.prototype;
                return o.onLoad = function() {}, o.showCharmChange = function(e, t) {
                    var n = this,
                        i = this.node.parent.getComponent(E);
                    this.updatePos(i.PosID);
                    var a = i.getSeatId(),
                        o = 0;
                    if (t.formSeatId == a) o = t.formCharmNum;
                    else {
                        if (t.toSeatId != a) return;
                        o = t.toCharmNum
                    }
                    if (0 != o) {
                        var r = u(this.charmCloneItem);
                        r.getChildByName("numNode").getComponent(I).string = o > 0 ? "+" + o : "-" + (0 - o), this.charmAnimNode.addChild(r), r.active = !0, d(r).by(1, {
                            position: l(0, 40, 0)
                        }, {
                            onUpdate: function(e, t) {
                                r.getComponent(c).opacity = 255 * (1 - t)
                            }
                        }).call((function() {
                            r.destroy()
                        })).start(), this.addSchedulerOnce(.02 * a, (function() {
                            n.recordCharmChange(a, o)
                        }))
                    }
                }, o.recordCharmChange = function(e, t) {
                    var n = A.getInstance().findPlayerWithSeatId(e);
                    if (n) {
                        var i = m.get(_.USER_CHARM_INFO, null);
                        (i = i ? JSON.parse(i) : {})[n.userId] = (i[n.userId] || n.gameUserInfo.charm || 0) + t, m.set(_.USER_CHARM_INFO, i), n.userId == p.User.getUserMid() && h.deviceInfo.GameIds.forEach((function(e) {
                            var n = p.User.getGamePlayRecordByKey(e, g.UserGameRecodeKey.Charm);
                            p.User.updateGamePlayRecordByKey(e, g.UserGameRecodeKey.Charm, n + t)
                        }))
                    }
                }, o.updatePos = function(e) {
                    this.node.position = this._pos[e] || l(80, 50, 0)
                }, o.onDestroy = function() {}, t
            }(C)).prototype, "charmCloneItem", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), R = t(G.prototype, "charmAnimNode", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), T = G)) || T) || T)), o._RF.pop()
        }
    }
}))