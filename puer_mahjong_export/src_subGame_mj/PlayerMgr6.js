System.register("chunks:///_virtual/PlayerMgr6.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./Utils.ts", "./GCache.ts", "./GameConstant.ts", "./Encrypto.ts", "./EventManager.ts", "./BaseCache.ts", "./FXJConfig3.ts", "./GameEvent6.ts", "./MajiangUtil3.ts", "./CardUtil3.ts", "./RoomMgr6.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, n = e.createForOfIteratorHelperLoose
        }, function(e) {
            a = e.cclegacy
        }, function(e) {
            i = e.ClientInfo
        }, function(e) {
            o = e.Utils
        }, function(e) {
            r = e.GCache
        }, function(e) {
            s = e.GConstants
        }, function(e) {
            u = e.Encrypt
        }, function(e) {
            l = e.EventManager
        }, function(e) {
            d = e.BaseCache
        }, function(e) {
            c = e.UserStatus, h = e.MahjongMap
        }, function(e) {
            p = e.GameEvent
        }, function(e) {
            m = e.MajiangUtil
        }, function(e) {
            _ = e.CardUtil
        }, function(e) {
            g = e.RoomMgr, f = e.ROOM_DATA_TYPE
        }],
        execute: function() {
            a._RF.push({}, "2b1c8QExVBMz5nAhhpD54Dt", "PlayerMgr", void 0), e("PlayerMgr", function(e) {
                function a(t) {
                    var n;
                    return void 0 === t && (t = ""), (n = e.call(this, t) || this).playerList = [], n.handOpGroup = null, n.myPlayerInfo = null, n.gangCount = 0, n.observers = [], n.addGameComp(), n
                }
                t(a, e), a.getInstance = function() {
                    return a.instance || (a.instance = new a), a.instance
                };
                var d = a.prototype;
                return d.addGameComp = function() {
                    this.addComponent("MJGameComponent");
                    var e = this.getComponent("MJGameComponent");
                    "function" == typeof e.setDelegate && e.setDelegate(this)
                }, d.doGameCompFun = function(e) {
                    var t = this.getComponent("MJGameComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
                        return t[e].apply(t, a)
                    }
                }, d.addObserver = function(e) {
                    this.observers.push(e)
                }, d.removeObserver = function(e) {
                    var t = this.observers.indexOf(e); - 1 !== t && this.observers.splice(t, 1)
                }, d.setPlayerList = function(e) {
                    var t;
                    (null != (t = null == e ? void 0 : e.length) ? t : 0) > 0 && (this.parseUseInfo(e), this.checkRobotInfo(e), this.playerList = _.sortPlayersBySeatId(e, g.getInstance().mySeatId))
                }, d.updatePlayersLadderInfo = function(e) {
                    var t = this;
                    e.forEach((function(e) {
                        for (var n = 0; n < t.playerList.length; n++) {
                            var a = t.playerList[n];
                            if (e.uid === a.userId) {
                                void 0 !== e.ladderScore && null !== e.ladderScore && (a.gameUserInfo.ladderScore = e.ladderScore), a.gameUserInfo.ladderScoreChange = e.ladderScoreChange;
                                break
                            }
                        }
                    }))
                }, d.updatePlayersLevelInfo = function(e) {
                    var t = this;
                    e.forEach((function(e) {
                        for (var n = 0; n < t.playerList.length; n++) {
                            var a = t.playerList[n];
                            if (e.uid === a.userId) {
                                void 0 !== e.levelSystemScore && null !== e.levelSystemScore && (a.gameUserInfo.levelSystemScore = e.levelSystemScore);
                                break
                            }
                        }
                    }))
                }, d.onGameStart = function() {
                    var e, t = this;
                    this.resetOpCards(), null == (e = this.playerList) || e.forEach((function(e) {
                        e.status = c.NONE, t.resetUserHandCards(null == e ? void 0 : e.userId)
                    }))
                }, d.resetPlayerLadderInfo = function() {
                    for (var e = 0; e < this.playerList.length; e++) this.playerList[e].gameUserInfo.ladderScoreChange = null
                }, d.notifyObservers = function() {
                    for (var e, t = n(this.observers); !(e = t()).done;) e.value.updatePlayerList(this.playerList)
                }, d.onReceivePlayerReady = function(e) {}, d.resetUserHandCards = function(e) {
                    if (e) {
                        var t = a.getInstance().findPlayerWithUserId(e);
                        this._checkPlayer(t) && (t.handCards = [])
                    }
                }, d.updatePlayerHandCards = function(e, t) {
                    var n = a.getInstance().findPlayerWithUserId(t);
                    this._checkPlayer(n) && (n.handCards = g.getInstance().orderCards(e))
                }, d.updateMyhands = function(e) {
                    this.print("updateMyhands", e, this.dumpHands(e)), this.dumpMyHands("更新前的手牌：");
                    var t = a.getInstance().getMyPlayerInfo();
                    this._checkPlayer(t) && (t.handCards = g.getInstance().orderCards(e)), this.dumpMyHands("更新后的手牌：")
                }, d.getMyhands = function() {
                    var e = a.getInstance().getMyPlayerInfo();
                    return (null == e ? void 0 : e.handCards) || []
                }, d.orderMyhands = function() {
                    var e = a.getInstance().getMyPlayerInfo(),
                        t = null == e ? void 0 : e.handCards;
                    (null == t ? void 0 : t.length) > 0 && (e.handCards = g.getInstance().orderCards(t))
                }, d.isAllHandsIsLaizi = function() {
                    var e = this.getMyhands();
                    if ((null == e ? void 0 : e.length) > 0) {
                        var t = 0;
                        return e.forEach((function(e) {
                            _.isLaiziCard(e) && (t += 1)
                        })), t == (null == e ? void 0 : e.length)
                    }
                    return !1
                }, d.resetMyhands = function() {
                    var e = a.getInstance().getMyPlayerInfo();
                    this._checkPlayer(e) && (e.handCards = [])
                }, d.getLastMyhands = function() {
                    var e = a.getInstance().getMyPlayerInfo();
                    return null == e ? void 0 : e.handCards[(null == e ? void 0 : e.handCards.length) - 1]
                }, d.includesMyhands = function(e) {
                    for (var t = a.getInstance().getMyPlayerInfo(), n = !1, i = 0; i < (null == t ? void 0 : t.handCards.length); i++) {
                        var o = t.handCards[i];
                        if (_.getMajiangValue(o) === _.getMajiangValue(e)) {
                            n = !0;
                            break
                        }
                    }
                    return n
                }, d.getHandCardByIndex = function(e) {
                    var t = a.getInstance().getMyPlayerInfo();
                    return null == t ? void 0 : t.handCards[e]
                }, d.dumpMyHands = function(e) {
                    if (void 0 === e && (e = ""), i.DEBUG) {
                        var t = a.getInstance().getMyPlayerInfo(),
                            n = [];
                        if (t && t.handCards)
                            for (var o = 0; o < t.handCards.length; o++) {
                                var r = _.getCardValue(t.handCards[o]);
                                n.push(h.get(r))
                            }
                        this.print(e + "dumpMyHands", n)
                    }
                }, d.dumpHands = function(e) {
                    if (!i.DEBUG) return "";
                    for (var t = [], n = 0; n < e.length; n++) {
                        var a = _.getCardValue(e[n]);
                        t.push(h.get(a))
                    }
                    return t
                }, d.updatePlayerCardsNum = function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = this.findPlayerWithSeatId(t + 1);
                        this._checkPlayer(n) && (n.cardCount = e[t])
                    }
                }, d.findOtherPlayer = function(e) {
                    return void 0 === e && (e = null), this.playerList.filter((function(t) {
                        return t.seatId != (e || g.getInstance().mySeatId)
                    }))
                }, d.findPlayerWithUserId = function(e) {
                    return this.playerList.filter((function(t) {
                        return t.userId === e
                    }))[0]
                }, d.findPlayerWithSeatId = function(e) {
                    return this.playerList.filter((function(t) {
                        return t.seatId === e
                    }))[0]
                }, d.getMyPlayerInfo = function() {
                    return this.myPlayerInfo = this.findPlayerWithUserId(r.User.getUserMid()), this.myPlayerInfo
                }, d.updateMyMoney = function(e) {
                    for (var t = 0; t < this.playerList.length; t++)
                        if (this.playerList[t].userId === r.User.getUserMid()) {
                            this.playerList[t].money = e;
                            break
                        }
                }, d.updateUsersMoney = function(e) {
                    for (var t = null, n = 0; n < this.playerList.length; n++) null != e[t = this.playerList[n].userId] && (this.playerList[n].money = e[t], l.dispatch(p.USER_UPDATE_PROPERTY, t))
                }, d.addPlayerList = function(e) {
                    var t = this;
                    if (e) {
                        if (this.parseUseInfo(e), this.checkRobotInfo(e), Array.isArray(e)) e.forEach((function(e) {
                            var n = t.playerList.findIndex((function(t) {
                                return t.userId === e.userId
                            })); - 1 !== n ? t.playerList[n] = e : t.playerList.push(e)
                        }));
                        else {
                            var n = this.playerList.findIndex((function(t) {
                                return t.userId === e.userId
                            })); - 1 !== n ? this.playerList[n] = e : this.playerList.push(e)
                        }
                        this.playerList = _.sortPlayersBySeatId(this.playerList, g.getInstance().mySeatId)
                    }
                }, d.initRobotInfo = function(e) {
                    if ((e = o.number_valueOf(e)) > 9e6 && e < 1e7) {
                        var t = r.User.getRobotInfo(e);
                        if (t) return {
                            nick: t.nick,
                            url: t.icon,
                            userId: t.mid,
                            cid: t.cid
                        }
                    }
                }, d.checkRobotInfo = function(e) {
                    var t = this;

                    function n(e) {
                        var n = null == e ? void 0 : e.userId;
                        if (n && null != e && e.gameUserInfo) {
                            var a = t.initRobotInfo(n);
                            a && (e.gameUserInfo.robotInfo = a)
                        }
                    }
                    Array.isArray(e) ? e.forEach((function(e) {
                        n(e)
                    })) : n(e)
                }, d.getUserNick = function(e) {
                    var t, n, a = null == e ? void 0 : e.nickName;
                    return null != e && null != (t = e.robotInfo) && t.nick && (a = null == e || null == (n = e.robotInfo) ? void 0 : n.nick), a || ""
                }, d.getUserAvatar = function(e, t) {
                    var n;
                    void 0 === t && (t = !1);
                    var a, i = 1 == t ? null == e ? void 0 : e.avatar_b : null == e ? void 0 : e.avatar_s;
                    return null != e && null != (n = e.robotInfo) && n.url && (i = null == e || null == (a = e.robotInfo) ? void 0 : a.url), i || ""
                }, d.getUserHeadBox = function(e) {
                    return (null == e ? void 0 : e.userHeadBox) || ""
                }, d.getUserChatBox = function(e) {
                    return (null == e ? void 0 : e.userChatBox) || ""
                }, d.getUserClock = function(e) {
                    return null == e ? void 0 : e.userClock
                }, d.parseUseInfo = function(e) {
                    var t = this;
                    e && (Array.isArray(e) ? e.forEach((function(e) {
                        e.gameUserInfo = t.checkUserAvatarInfo(u.JsonDecode(null == e ? void 0 : e.strUserInfo), e.userId)
                    })) : e.gameUserInfo = this.checkUserAvatarInfo(u.JsonDecode(null == e ? void 0 : e.strUserInfo), e.userId))
                }, d.checkUserAvatarInfo = function(e, t) {
                    var n;
                    if (e || (e = {
                            appid: 0,
                            avatar_b: "",
                            avatar_m: "",
                            avatar_s: "",
                            cid: 0,
                            city: "",
                            crystal: 0,
                            diamond: 0,
                            drawCount: 0,
                            exp: 0,
                            gold: 0,
                            headBox: "",
                            userHeadBox: "",
                            userChatBox: "",
                            userEnterAnim: 0,
                            ladderScore: 0,
                            level: "",
                            loseCount: 0,
                            m_identity: 0,
                            money: 0,
                            nickName: "",
                            sex: 0,
                            userId: t,
                            winCount: 0
                        }), "miniGame" == (null == (n = e) ? void 0 : n.platform));
                    else {
                        var a = r.User.getRobotInfo(t);
                        e.avatar_b = (null == a ? void 0 : a.icon) || "", e.avatar_s = (null == a ? void 0 : a.icon) || "", e.avatar_m = (null == a ? void 0 : a.icon) || "", e.ladderScore = (null == a ? void 0 : a.ladderScore) || o.number_valueOf(e.ladderScore), e.charm = (null == a ? void 0 : a.charmScore) || o.number_valueOf(e.charm), e.levelSystemScore = (null == a ? void 0 : a.levelScore) || o.number_valueOf(e.levelSystemScore)
                    }
                    return e
                }, d.clear = function() {
                    this.playerList = []
                }, d.resetPlayerStatus = function() {
                    this.playerList.forEach((function(e, t, n) {
                        e.isReady = 0, e.isAi = 0
                    })), this.resetUserStatus()
                }, d.resetUserStatus = function() {
                    this.playerList.forEach((function(e, t, n) {
                        e.status = c.END
                    }))
                }, d.updatePlayerStatus = function(e, t) {
                    var n = this.findPlayerWithSeatId(e);
                    n && (n.status = t)
                }, d._checkPlayer = function(e) {
                    return null != e
                }, d.getPlayerReadyStatus = function(e) {
                    var t = this.findPlayerWithUserId(e);
                    return this._checkPlayer(t) ? t.isReady : 0
                }, d.updatePlayerReadyStatus = function(e, t) {
                    var n = this.findPlayerWithUserId(e);
                    this._checkPlayer(n) && (n.isReady = t)
                }, d.updatePlayerMoney = function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = this.findPlayerWithSeatId(t + 1);
                        this._checkPlayer(n) && (n.money = e[t], r.SelectGame.isInMatchRoom() || r.SelectGame.isInPrivateRoom() || n.userId === r.User.getUserMid() && r.User.updateUserMoneyByID(0, n.money))
                    }
                }, d.updatePlayerMoneyByUserId = function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = this.findPlayerWithUserId(e[t].userId);
                        this._checkPlayer(n) && (n.money = e[t].money, r.SelectGame.isInMatchRoom() || r.SelectGame.isInPrivateRoom() || n.userId === r.User.getUserMid() && r.User.updateUserMoneyByID(0, n.money), l.dispatch(p.USER_UPDATE_PROPERTY, n.userId))
                    }
                }, d.onGameGrabCard = function(e) {
                    var t = this.findPlayerWithUserId(e.userId);
                    this._checkPlayer(t) && (this._updateOutCards(e), this.doGameCompFun("onGameGrabCard", e))
                }, d._updateOutCards = function(e) {
                    var t = this.findPlayerWithUserId(e.userId);
                    if (this._checkPlayer(t)) {
                        var n = {
                            card: e.card,
                            status: 0
                        };
                        t.outCards.push(n)
                    }
                }, d.updateHandCards = function(e) {
                    if (!this.doGameCompFun("checkUpdateHandCards", e)) {
                        this.print("updateHandCards", e);
                        for (var t = 0; t < (null == (n = e.handCards) ? void 0 : n.length); t++) {
                            var n, a = this.findPlayerWithSeatId(t + 1);
                            this._checkPlayer(a) && (a.handCards = e.handCards[t].handCards, a.huCard = e.handCards[t].huCard, a.opGroups = e.handCards[t].opGroups, a.tingCard = e.handCards[t].tingCard, a.isUnTing = e.handCards[t].isUnTing, a.customData = e.handCards[t].customData)
                        }
                    }
                }, d.updateOpCards = function(e, t) {
                    var n = this.findPlayerWithSeatId(e);
                    this._checkPlayer(n) && n.opGroups.push(t)
                }, d.resetOpCards = function() {
                    this.playerList.forEach((function(e) {
                        e.opGroups = []
                    }))
                }, d.updatePlayerAiStatus = function(e, t) {
                    var n = this.findPlayerWithUserId(e);
                    this._checkPlayer(n) && (n.isAi = t)
                }, d.removeHandCard = function(e) {
                    (null == e ? void 0 : e.length) > 0 && (this.print("removeHandCard", e, this.dumpHands(e)), this.dumpMyHands("移除前的手牌："), m.deleteHasInList(this.getMyhands(), e), this.dumpMyHands("移除后的手牌："))
                }, d.removeOpGroupsCard = function(e, t) {
                    if ((null == t ? void 0 : t.length) > 0) {
                        var n, a = null == (n = this.myPlayerInfo) ? void 0 : n.opGroups;
                        (null == a ? void 0 : a.length) > 0 && a.forEach((function(n) {
                            n.opCode == e && m.deleteHasInList(n.opCards, t)
                        }))
                    }
                }, d.addHandCard = function(e) {
                    this.print("addHandCard", e, this.dumpHands(e)), this.removeHandCard(e);
                    var t = this.getMyhands();
                    this.updateMyhands(t.concat(e))
                }, d.changeHandCard = function(e, t) {
                    this.print("changeHandCard", this.dumpHands(e), this.dumpHands(t)), this.dumpMyHands("修改前的手牌：");
                    var n = this.getMyhands();
                    this.removeHandCard(e), this.removeHandCard(t), this.updateMyhands(n.concat(t)), this.dumpMyHands("修改后的手牌：")
                }, d.onOneHuanSanZhang = function(e) {
                    var t;
                    if (g.getInstance().isMySelfSeat(e.seatId) && (null == e || null == (t = e.cards) ? void 0 : t.length) > 0) {
                        var n = this.getMyhands();
                        this.removeHandCard(null == e ? void 0 : e.cards), this.updateMyhands(n), g.getInstance().setGameInfoByTag(f.HUAN_SAN_ZHANG_CARD, {
                            seatId: e.seatId,
                            cards: null == e ? void 0 : e.cards
                        })
                    }
                }, d.onAllHuanSanZhang = function(e) {
                    var t;
                    if (g.getInstance().isMySelfSeat(e.seatId) && (null == e || null == (t = e.cards) ? void 0 : t.length) > 0) {
                        var n = this.getMyhands();
                        this.updateMyhands(n.concat(null == e ? void 0 : e.cards))
                    }
                }, d.updatePlayerCharmBySeatId = function(e, t) {
                    var n = this.findPlayerWithSeatId(e);
                    this._checkPlayer(n) && (n.gameUserInfo.charm = (n.gameUserInfo.charm || 0) + t)
                }, d.synGameRecord = function() {
                    var e;
                    null != (e = this.myPlayerInfo) && e.gameUserInfo && (this.myPlayerInfo.gameUserInfo.drawCount = o.number_valueOf(r.User.getGamePlayRecordByKey(r.SelectGame.getCurGameId(), s.UserGameRecodeKey.Draw)), this.myPlayerInfo.gameUserInfo.winCount = o.number_valueOf(r.User.getGamePlayRecordByKey(r.SelectGame.getCurGameId(), s.UserGameRecodeKey.Win)), this.myPlayerInfo.gameUserInfo.loseCount = o.number_valueOf(r.User.getGamePlayRecordByKey(r.SelectGame.getCurGameId(), s.UserGameRecodeKey.Lose)), this.myPlayerInfo.gameUserInfo.friendTotal = o.number_valueOf(r.User.getGamePlayRecordByKey(r.SelectGame.getCurGameId(), s.UserGameRecodeKey.FriendTotal)), this.myPlayerInfo.gameUserInfo.friendWin = o.number_valueOf(r.User.getGamePlayRecordByKey(r.SelectGame.getCurGameId(), s.UserGameRecodeKey.FriendWin)))
                }, a
            }(d)).instance = null, a._RF.pop()
        }
    }
}))