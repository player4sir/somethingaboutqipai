System.register("chunks:///_virtual/NodeUserPrivateCtr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./BaseComponent.ts", "./PlayerMgr6.ts", "./RoomMgr6.ts", "./FXJRes3.ts", "./GameEvent6.ts", "./GameRuleConfig4.ts", "./CardUtil3.ts", "./NodeUserPrivatePrefabCtr3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy, a = e._decorator, i = e.Prefab, o = e.instantiate
        }, function(e) {
            r = e.Utils
        }, function(e) {
            s = e.GCache
        }, function(e) {
            u = e.AppEvent
        }, function(e) {
            l = e.BaseComponent
        }, function(e) {
            d = e.PlayerMgr
        }, function(e) {
            c = e.RoomMgr
        }, function(e) {
            h = e.FXJRes
        }, function(e) {
            p = e.GameEvent
        }, function(e) {
            m = e.GameRuleConfig
        }, function(e) {
            _ = e.CardUtil
        }, function(e) {
            g = e.NodeUserPrivatePrefabCtr
        }],
        execute: function() {
            var f;
            n._RF.push({}, "58387Z6unhLBaAfV/cSZ0mU", "NodeUserPrivateCtr", void 0);
            var C = a.ccclass,
                E = (a.property, a.menu);
            e("NodeUserPrivateCtr", C("NodeUserPrivateCtr")(f = E("prefab/subGame/mj/NodeUserPrivateCtr")(f = function(e) {
                function n() {
                    for (var t, n, a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
                    return (n = e.call.apply(e, [this].concat(i)) || this).userNodes = [], n.event_defents = ((t = {})[p.VIEW_BROADCAST_PLAYER_ENTER] = "playerEnter", t[p.VIEW_BROADCAST_PLAYER_EXIT] = "palyerExit", t[p.VIEW_BROADCAST_PLAYER_READY] = "playerReady", t[p.INIT_GAMEINFO_POS] = {
                        call: "checkUser",
                        property: 1
                    }, t[u.UPDATE_PRIVATE_ROOM_INFO] = "onUpdatePrivateRoomInfo", t), n
                }
                t(n, e);
                var a = n.prototype;
                return a.onLoad = function() {
                    this.initView(), this.updateView()
                }, a.start = function() {}, a.addGameComp = function() {
                    null == this.node && (this.node = r.create_2DNode()), this.node.addComponent("MJGameComponent");
                    var e = this.node.getComponent("MJGameComponent");
                    return "function" == typeof e.setDelegate && e.setDelegate(this), this.doGameCompFun("initExtGame"), e
                }, a.doGameCompFun = function(e) {
                    var t = this.node.getComponent("MJGameComponent");
                    if (null == t && (t = this.addGameComp()), "function" == typeof t[e]) {
                        for (var n, a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) i[o - 1] = arguments[o];
                        return (n = t)[e].apply(n, i)
                    }
                }, a.initView = function() {
                    var e = this,
                        t = this;
                    this.getPreLoaderRes(h.Prefab_NodeUserPrivate.bundle, h.Prefab_NodeUserPrivate.path, i, (function(n) {
                        if (t.node && 0 != t.node.isValid) {
                            var a = !0;
                            d.getInstance().getMyPlayerInfo() && (a = 0 == d.getInstance().getMyPlayerInfo().isReady);
                            for (var i = 0; i < m.playerNum; i++) {
                                var r = o(n),
                                    s = r.getComponent(g);
                                r.active = 0 != i, e.node.addChild(r), s.initData(i), s.setChangeSeatEnable(a)
                            }
                            e.checkUser()
                        }
                    }))
                }, a.updateView = function() {}, a.checkUser = function() {
                    var e = this;
                    this.scheduleOnce((function() {
                        d.getInstance().playerList.forEach((function(t, n, a) {
                            var i = _.calculatePlayerSeat(c.getInstance().mySeatId, t.seatId);
                            e.node.children[i] && (e.node.children[i].active = !1)
                        }))
                    })), this.onUpdatePrivateRoomInfo()
                }, a.playerEnter = function(e, t) {
                    void 0 === t && (t = null);
                    var n = d.getInstance().findPlayerWithUserId(t);
                    if (n) {
                        var a = _.calculatePlayerSeat(c.getInstance().mySeatId, n.seatId);
                        this.node.children[a] && (this.node.children[a].active = !1), this.onUpdatePrivateRoomInfo()
                    }
                }, a.palyerExit = function(e, t) {
                    void 0 === t && (t = null);
                    var n = d.getInstance().findPlayerWithUserId(t);
                    if (n) {
                        var a = this.doGameCompFun("getRelativeLocalDir", n.seatId);
                        this.node.children[a] && (this.node.children[a].active = !0, d.getInstance().getMyPlayerInfo() && this.node.children[a].getComponent(g).setChangeSeatEnable(0 == d.getInstance().getMyPlayerInfo().isReady))
                    }
                }, a.playerReady = function(e, t) {
                    void 0 === t && (t = null), t == s.User.getUserMid() && this.node.children.forEach((function(e, t, n) {
                        e && e.active && e.getComponent(g).setChangeSeatEnable(!1)
                    }))
                }, a.onUpdatePrivateRoomInfo = function() {
                    s.PrivateData.isTwoPlayerModule() && this.node.children.length > 0 && this.node.children.forEach((function(e, t, n) {
                        1 != t && 3 != t && 2 != d.getInstance().playerList.length || (e.active = !1)
                    }))
                }, a.onDestroy = function() {}, n
            }(l)) || f) || f), n._RF.pop()
        }
    }
}))