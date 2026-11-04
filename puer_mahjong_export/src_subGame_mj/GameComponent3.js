System.register("chunks:///_virtual/GameComponent3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./RoomMgr6.ts", "./GameBaseComponent3.ts", "./mjNodeUserPrefabCtr.ts", "./CardUtil3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy, a = e._decorator
        }, function(e) {
            i = e.Utils
        }, function(e) {
            o = e.GCache
        }, function(e) {
            r = e.RoomMgr
        }, function(e) {
            s = e.GameBaseComponent
        }, function(e) {
            u = e.mjNodeUserPrefabCtr
        }, function(e) {
            l = e.CardUtil
        }],
        execute: function() {
            var d;
            n._RF.push({}, "5ca47Yn5vhJ4LH9P1UujT6H", "GameComponent", void 0);
            var c = a.ccclass,
                h = (a.property, a.menu);
            e("GameComponent", c("YnXueZhanMJGameComponent")(d = h("prefab/subGame/mj/ynxuezhanmj/GameComponent")(d = function(e) {
                function n() {
                    return e.apply(this, arguments) || this
                }
                t(n, e);
                var a = n.prototype;
                return a.checkNeedGangAnim = function() {
                    return !0
                }, a.isShowLiuShui = function() {
                    return !0
                }, a.checkHuListInfo = function(e, t) {
                    if (!i.string_isEmpty(null == e ? void 0 : e.huInfoList)) {
                        var n = l.getDirFromSeatId(e.seatId),
                            a = e.huCard;
                        i.isNotNull(a) && a > 0 && t({
                            dir: n,
                            card: a
                        })
                    }
                    return !0
                }, a.checkGameMenuByHuInfo = function(e) {
                    if (o.SelectGame.isNormalRoom() && (null == e ? void 0 : e.length) > 0)
                        for (var t = 0; t < e.length; t++)
                            if (r.getInstance().isMySelfSeat(e[t].seatId)) {
                                this.callDelegateFunc("updateChangeBtnActive", !0);
                                break
                            }
                }, a.onGameSceneRealTimeHuInfo = function(e) {
                    if (o.SelectGame.isNormalRoom() && (null == e ? void 0 : e.length) > 0)
                        for (var t = 0; t < e.length; t++)
                            if (r.getInstance().isMySelfSeat(e[t].seatId)) {
                                this.callDelegateFunc("onGameOver");
                                break
                            }
                }, a.onNodeHandCardSettle = function(e) {
                    var t = this;
                    e.forEach((function(e) {
                        var n = l.getDirFromSeatId(e.seatId);
                        t.callDelegateFunc("onCoverHandCard", n)
                    }))
                }, a.onNodeUserGameRealTimeHuInfo = function(e, t) {
                    if ((null == t ? void 0 : t.length) > 0)
                        for (var n = 0; n < e.length; n++) {
                            var a = e[n];
                            if (a && a.isValid)
                                for (var i = a.getComponent(u), o = 0; o < t.length; o++)
                                    if (i && i.getSeatId() === t[o].seatId) {
                                        i.onUpdateOptionTips({
                                            tag: "hu",
                                            huNum: t[o].totalFan
                                        });
                                        break
                                    }
                        }
                }, a.checkHuPaiTrunCard = function() {
                    return !0
                }, a.getGameShareTitle = function() {
                    return "缺一门才叫血战！刮风下雨，查叫定输赢，来？"
                }, n
            }(s)) || d) || d), n._RF.pop()
        }
    }
}))