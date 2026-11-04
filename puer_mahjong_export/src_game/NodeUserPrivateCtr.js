System.register("chunks:///_virtual/NodeUserPrivateCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GCache.ts", "./AppEvent.ts", "./BaseComponent.ts", "./PlayerMgr.ts", "./RoomMgr.ts", "./FXJRes.ts", "./GameEvent.ts", "./GameRuleConfig.ts", "./CardUtil.ts", "./NodeUserPrivatePrefabCtr.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy, i = e._decorator, a = e.Prefab, o = e.instantiate
        }, function(e) {
            r = e.GCache
        }, function(e) {
            s = e.AppEvent
        }, function(e) {
            l = e.BaseComponent
        }, function(e) {
            u = e.PlayerMgr
        }, function(e) {
            d = e.RoomMgr
        }, function(e) {
            c = e.FXJRes
        }, function(e) {
            h = e.GameEvent
        }, function(e) {
            p = e.GameRuleConfig
        }, function(e) {
            f = e.CardUtil
        }, function(e) {
            _ = e.NodeUserPrivatePrefabCtr
        }],
        execute: function() {
            var g;
            n._RF.push({}, "838c4VU/qNBSLNGrNwgy5qa", "NodeUserPrivateCtr", void 0);
            var m = i.ccclass,
                C = (i.property, i.menu);
            e("NodeUserPrivateCtr", m("NodeUserPrivateCtr")(g = C("prefab/game/NodeUserPrivateCtr")(g = function(e) {
                function n() {
                    for (var t, n, i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
                    return (n = e.call.apply(e, [this].concat(a)) || this).userNodes = [], n.event_defents = ((t = {})[h.VIEW_BROADCAST_PLAYER_ENTER] = "playerEnter", t[h.VIEW_BROADCAST_PLAYER_EXIT] = "palyerExit", t[h.VIEW_BROADCAST_PLAYER_READY] = "playerReady", t[h.INIT_GAMEINFO_POS] = {
                        call: "checkUser",
                        property: 1
                    }, t[s.UPDATE_PRIVATE_ROOM_INFO] = "onUpdatePrivateRoomInfo", t), n
                }
                t(n, e);
                var i = n.prototype;
                return i.onLoad = function() {
                    this.initView(), this.updateView()
                }, i.start = function() {}, i.initView = function() {
                    var e = this,
                        t = this;
                    this.getPreLoaderRes(c.Prefab_NodeUserPrivate.bundle, c.Prefab_NodeUserPrivate.path, a, (function(n) {
                        if (t.node && 0 != t.node.isValid) {
                            var i = !0;
                            u.getInstance().getMyPlayerInfo() && (i = 0 == u.getInstance().getMyPlayerInfo().isReady);
                            for (var a = 0; a < p.playerNum; a++) {
                                var r = o(n),
                                    s = r.getComponent(_);
                                r.active = 0 != a, e.node.addChild(r), s.initData(a), s.setChangeSeatEnable(i)
                            }
                            e.checkUser()
                        }
                    }))
                }, i.updateView = function() {}, i.checkUser = function() {
                    var e = this;
                    this.scheduleOnce((function() {
                        u.getInstance().playerList.forEach((function(t, n, i) {
                            var a = f.calculatePlayerSeat(d.getInstance().mySeatId, t.seatId);
                            e.node.children[a] && (e.node.children[a].active = !1)
                        }))
                    })), this.onUpdatePrivateRoomInfo()
                }, i.playerEnter = function(e, t) {
                    void 0 === t && (t = null);
                    var n = u.getInstance().findPlayerWithUserId(t);
                    if (n) {
                        var i = f.calculatePlayerSeat(d.getInstance().mySeatId, n.seatId);
                        this.node.children[i] && (this.node.children[i].active = !1), this.onUpdatePrivateRoomInfo()
                    }
                }, i.palyerExit = function(e, t) {
                    void 0 === t && (t = null);
                    var n = u.getInstance().findPlayerWithUserId(t);
                    if (n) {
                        var i = f.calculatePlayerSeat(d.getInstance().mySeatId, n.seatId);
                        this.node.children[i] && (this.node.children[i].active = !0, u.getInstance().getMyPlayerInfo() && this.node.children[i].getComponent(_).setChangeSeatEnable(0 == u.getInstance().getMyPlayerInfo().isReady))
                    }
                }, i.playerReady = function(e, t) {
                    void 0 === t && (t = null), t == r.User.getUserMid() && this.node.children.forEach((function(e, t, n) {
                        e && e.active && e.getComponent(_).setChangeSeatEnable(!1)
                    }))
                }, i.onUpdatePrivateRoomInfo = function() {
                    r.PrivateData.isTwoPlayerModule() && this.node.children.length > 0 && this.node.children.forEach((function(e, t, n) {
                        1 != t && 3 != t && 2 != u.getInstance().playerList.length || (e.active = !1)
                    }))
                }, i.onDestroy = function() {}, n
            }(l)) || g) || g), n._RF.pop()
        }
    }
}))