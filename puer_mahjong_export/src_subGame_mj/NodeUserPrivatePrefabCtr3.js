System.register("chunks:///_virtual/NodeUserPrivatePrefabCtr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./LayerManager.ts", "./EventManager.ts", "./BaseComponent.ts", "./GlobalCmd.ts", "./PlayerMgr6.ts", "./RoomMgr6.ts", "./GameEvent6.ts", "./CardUtil3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f, C, E, S;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, u = e.UITransform, l = e.Button
        }, function(e) {
            d = e.Utils
        }, function(e) {
            c = e.GCache
        }, function(e) {
            h = e.AppEvent
        }, function(e) {
            p = e.LayerManager
        }, function(e) {
            m = e.EventManager
        }, function(e) {
            _ = e.BaseComponent
        }, function(e) {
            g = e.GlobalCmdHead
        }, function(e) {
            f = e.PlayerMgr
        }, function(e) {
            C = e.RoomMgr
        }, function(e) {
            E = e.GameEvent
        }, function(e) {
            S = e.CardUtil
        }],
        execute: function() {
            var A, I, G, y, v, P, T, b;
            o._RF.push({}, "b0db0DS0u1Meqk7jtwOs88U", "NodeUserPrivatePrefabCtr", void 0);
            var O = r.ccclass,
                R = r.property,
                M = r.menu;
            e("NodeUserPrivatePrefabCtr", (A = O("NodeUserPrivatePrefabCtr"), I = M("prefab/subGame/mj/NodeUserPrivatePrefabCtr"), G = R({
                tooltip: "换座节点",
                type: s
            }), y = R({
                tooltip: "换座按钮",
                type: s
            }), A(v = I((T = t((P = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "nodeHeadBg", T, i(t)), a(t, "nodeInvite", b, i(t)), t._seatId = -1, t
                }
                n(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {
                    this.addModelListener(E.INIT_GAMEINFO_POS, this.onInitUserPos)
                }, o.onLoad = function() {
                    this.initView(), this.onInitUserPos()
                }, o.start = function() {}, o.initData = function(e) {
                    this._seatId = e, this.updateView()
                }, o.initView = function() {}, o.onInitUserPos = function() {
                    var e = this;
                    this.scheduleOnce((function() {
                        e.updateView()
                    }))
                }, o.updateView = function() {
                    if (!(this._seatId < 0)) {
                        var e = this.node.getParent();
                        if (!d.isNull(e)) {
                            var t = c.GameInfo.getUserPosByPosId(this._seatId);
                            if (null != t && !d.table_isEmpty(t)) {
                                var n = p.camera2D.screenToWorld(p.camera3D.worldToScreen(t)),
                                    a = this.node.parent.getComponent(u).convertToNodeSpaceAR(n);
                                0 == a.x && 0 == a.y && 0 == a.z || (this.node.active = !0, this.nodeInvite.active = !0, console.log("nodeUser---private----use_pos", this._seatId, t, n, a, this.node.getPosition()), this.node.position = a, f.getInstance().findPlayerWithSeatId(this.getServerId()) && (this.node.active = !1), c.PrivateData.isTwoPlayerModule() && 2 == f.getInstance().playerList.length && (this.node.active = !1))
                            }
                        }
                    }
                }, o.setChangeSeatEnable = function(e) {
                    e && c.PrivateData.isTwoPlayerModule() && (this.nodeHeadBg.getChildByName("lab").active = !1, this.nodeHeadBg.getComponent(l).interactable = !1), this.nodeHeadBg.active = e
                }, o.getServerId = function() {
                    return S.calculatePlayerSeatByDifference(C.getInstance().mySeatId, this._seatId)
                }, o.onClickInvite = function(e, t) {
                    m.dispatch(E.PRIVATE_INVITE)
                }, o.onClickChangeSeat = function(e, t) {
                    var n = this.nodeHeadBg.getComponent(l);
                    n.interactable = !1, n.scheduleOnce((function() {
                        n.interactable = !0
                    }), 1);
                    var a = f.getInstance().getMyPlayerInfo();
                    if (null != a) {
                        var i = {
                                sUid: c.User.getUserMid(),
                                sSeatId: S.getDirFromSeatId(a.seatId),
                                tUid: 0,
                                tSeatId: S.getDirFromSeatId(S.calculatePlayerSeatByDifference(C.getInstance().mySeatId, this._seatId))
                            },
                            o = {
                                cmd: g.CLIENT_APPLY_JIFEN_ROOM_CHANGE_SEAT,
                                body: i
                            };
                        m.dispatch(h.NET_SEND_MSG, o)
                    } else console.log("onClickChangeSeat", "玩家数据丢失")
                }, o.onDestroy = function() {
                    console.log("onDestroy", this._seatId)
                }, t
            }(_)).prototype, "nodeHeadBg", [G], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), b = t(P.prototype, "nodeInvite", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), v = P)) || v) || v)), o._RF.pop()
        }
    }
}))