System.register("chunks:///_virtual/NodeUserPrivatePrefabCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./LayerManager.ts", "./EventManager.ts", "./BaseComponent.ts", "./GlobalCmd.ts", "./PlayerMgr.ts", "./RoomMgr.ts", "./GameEvent.ts", "./CardUtil.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m, C, I, A;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, l = e.UITransform, u = e.Button
        }, function(e) {
            d = e.Utils
        }, function(e) {
            c = e.GCache
        }, function(e) {
            h = e.AppEvent
        }, function(e) {
            p = e.LayerManager
        }, function(e) {
            f = e.EventManager
        }, function(e) {
            _ = e.BaseComponent
        }, function(e) {
            g = e.GlobalCmdHead
        }, function(e) {
            m = e.PlayerMgr
        }, function(e) {
            C = e.RoomMgr
        }, function(e) {
            I = e.GameEvent
        }, function(e) {
            A = e.CardUtil
        }],
        execute: function() {
            var E, v, y, S, P, T, G, O;
            o._RF.push({}, "2897fx0gOxKv6AmB/s80RCF", "NodeUserPrivatePrefabCtr", void 0);
            var R = r.ccclass,
                N = r.property,
                b = r.menu;
            e("NodeUserPrivatePrefabCtr", (E = R("NodeUserPrivatePrefabCtr"), v = b("prefab/game/NodeUserPrivatePrefabCtr"), y = N({
                tooltip: "换座节点",
                type: s
            }), S = N({
                tooltip: "邀请按钮",
                type: s
            }), E(P = v((G = t((T = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "nodeHeadBg", G, a(t)), i(t, "nodeInvite", O, a(t)), t._seatId = -1, t
                }
                n(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {
                    this.addModelListener(I.INIT_GAMEINFO_POS, this.onInitUserPos)
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
                                    i = this.node.parent.getComponent(l).convertToNodeSpaceAR(n);
                                0 == i.x && 0 == i.y && 0 == i.z || (this.node.active = !0, this.nodeInvite.active = !0, console.log("nodeUser---private----use_pos", this._seatId, t, n, i, this.node.getPosition()), this.node.position = i, m.getInstance().findPlayerWithSeatId(this.getServerId()) && (this.node.active = !1), c.PrivateData.isTwoPlayerModule() && 2 == m.getInstance().playerList.length && (this.node.active = !1))
                            }
                        }
                    }
                }, o.setChangeSeatEnable = function(e) {
                    e && c.PrivateData.isTwoPlayerModule() && (this.nodeHeadBg.getChildByName("lab").active = !1, this.nodeHeadBg.getComponent(u).interactable = !1), this.nodeHeadBg.active = e
                }, o.getServerId = function() {
                    return A.calculatePlayerSeatByDifference(C.getInstance().mySeatId, this._seatId)
                }, o.onClickInvite = function(e, t) {
                    f.dispatch(I.PRIVATE_INVITE)
                }, o.onClickChangeSeat = function(e, t) {
                    var n = this.nodeHeadBg.getComponent(u);
                    n.interactable = !1, n.scheduleOnce((function() {
                        n.interactable = !0
                    }), 1);
                    var i = m.getInstance().getMyPlayerInfo();
                    if (null != i) {
                        var a = {
                                sUid: c.User.getUserMid(),
                                sSeatId: A.getDirFromSeatId(i.seatId),
                                tUid: 0,
                                tSeatId: A.getDirFromSeatId(A.calculatePlayerSeatByDifference(C.getInstance().mySeatId, this._seatId))
                            },
                            o = {
                                cmd: g.CLIENT_APPLY_JIFEN_ROOM_CHANGE_SEAT,
                                body: a
                            };
                        f.dispatch(h.NET_SEND_MSG, o)
                    } else console.log("onClickChangeSeat", "玩家数据丢失")
                }, o.onDestroy = function() {
                    console.log("onDestroy", this._seatId)
                }, t
            }(_)).prototype, "nodeHeadBg", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), O = t(T.prototype, "nodeInvite", [S], {
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