System.register("chunks:///_virtual/PlayerMgr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./Utils.ts", "./GCache.ts", "./GameConstant.ts", "./Encrypto.ts", "./EventManager.ts", "./BaseCache.ts", "./Platform.ts", "./GSocket.ts", "./FXJConfig.ts", "./GameEvent.ts", "./MajiangUtil.ts", "./CardUtil.ts", "./RoomMgr.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m, C, I, A;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, n = e.createForOfIteratorHelperLoose
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            a = e.ClientInfo
        }, function(e) {
            o = e.Utils
        }, function(e) {
            r = e.GCache
        }, function(e) {
            s = e.GConstants
        }, function(e) {
            l = e.Encrypt
        }, function(e) {
            u = e.EventManager
        }, function(e) {
            d = e.BaseCache
        }, function(e) {
            c = e.Platform
        }, function(e) {
            h = e.GSocket
        }, function(e) {
            p = e.UserStatus, f = e.OPCode, _ = e.MahjongMap
        }, function(e) {
            g = e.GameEvent
        }, function(e) {
            m = e.MajiangUtil
        }, function(e) {
            C = e.CardUtil
        }, function(e) {
            I = e.RoomMgr, A = e.ROOM_DATA_TYPE
        }],
        execute: function() {
            i._RF.push({}, "2e88dNm8ctKM7GhUEgxZhag", "PlayerMgr", void 0), e("PlayerMgr", function(e) {
                function i(t) {
                    var n;
                    return void 0 === t && (t = ""), (n = e.call(this, t) || this).playerList = [], n.handOpGroup = null, n.myPlayerInfo = null, n.gangCount = 0, n.observers = [], n._reConMax = 2, n.addGameComp(), n
                }
                t(i, e), i.getInstance = function() {
                    return i.instance || (i.instance = new i), i.instance
                };
                var d = i.prototype;
                return d.addGameComp = function() {
                    this.addComponent("GameComponent");
                    var e = this.getComponent("GameComponent");
                    "function" == typeof e.setDelegate && e.setDelegate(this)
                }, d.doGameCompFun = function(e) {
                    var t = this.getComponent("GameComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                        return t[e].apply(t, i)
                    }
                }, d.addObserver = function(e) {
                    this.observers.push(e)
                }, d.removeObserver = function(e) {
                    var t = this.observers.indexOf(e); - 1 !== t && this.observers.splice(t, 1)
                }, d.setPlayerList = function(e) {
                    this.removeOtherPlayer(), this.parseUseInfo(e), this.checkRobotInfo(e), this.playerList = C.sortPlayersBySeatId(e, I.getInstance().mySeatId)
                }, d.resertPlayer = function() {
                    this.playerList = []
                }, d.updatePlayersLadderInfo = function(e) {
                    var t = this;
                    e.forEach((function(e) {
                        for (var n = 0; n < t.playerList.length; n++) {
                            var i = t.playerList[n];
                            if (e.uid === i.userId) {
                                void 0 !== e.ladderScore && null !== e.ladderScore && (i.gameUserInfo.ladderScore = e.ladderScore), i.gameUserInfo.ladderScoreChange = e.ladderScoreChange;
                                break
                            }
                        }
                    }))
                }, d.updatePlayersLevelInfo = function(e) {
                    var t = this;
                    e.forEach((function(e) {
                        for (var n = 0; n < t.playerList.length; n++) {
                            var i = t.playerList[n];
                            if (e.uid === i.userId) {
                                void 0 !== e.levelSystemScore && null !== e.levelSystemScore && (i.gameUserInfo.levelSystemScore = e.levelSystemScore);
                                break
                            }
                        }
                    }))
                }, d.onGameStart = function() {
                    var e, t = this;
                    this.resetOpCards(), null == (e = this.playerList) || e.forEach((function(e) {
                        e.status = p.NONE, t.resetUserHandCards(null == e ? void 0 : e.userId)
                    }))
                }, d.resetPlayerLadderInfo = function() {
                    for (var e = 0; e < this.playerList.length; e++) this.playerList[e].gameUserInfo.ladderScoreChange = null
                }, d.notifyObservers = function() {
                    for (var e, t = n(this.observers); !(e = t()).done;) e.value.updatePlayerList(this.playerList)
                }, d.onReceivePlayerReady = function(e) {}, d.resetUserHandCards = function(e) {
                    if (e) {
                        var t = i.getInstance().findPlayerWithUserId(e);
                        this._checkPlayer(t) && (t.handCards = [])
                    }
                }, d.updatePlayerHandCards = function(e, t) {
                    var n = i.getInstance().findPlayerWithUserId(t);
                    this._checkPlayer(n) && (n.handCards = I.getInstance().orderCards(e))
                }, d.updateMyhands = function(e) {
                    this.print("updateMyhands", e, this.dumpHands(e)), this.dumpMyHands("更新前的手牌：");
                    var t = i.getInstance().getMyPlayerInfo();
                    this._checkPlayer(t) && (t.handCards = I.getInstance().orderCards(e)), this.dumpMyHands("更新后的手牌：")
                }, d.getMyhands = function() {
                    var e = i.getInstance().getMyPlayerInfo();
                    return (null == e ? void 0 : e.handCards) || []
                }, d.checkUserIsMingLou = function(e) {
                    var t, n = !1,
                        i = this.findPlayerWithSeatId(e);
                    return (null == i ? void 0 : i.tingOpcode) == f.OPE_MING_LOU ? n = !0 : null == i || null == (t = i.opGroups) || t.forEach((function(e) {
                        e.opCode === f.OPE_MING_LOU && (n = !0)
                    })), n
                }, d.orderMyhands = function() {
                    var e = i.getInstance().getMyPlayerInfo(),
                        t = null == e ? void 0 : e.handCards;
                    (null == t ? void 0 : t.length) > 0 && (e.handCards = I.getInstance().orderCards(t))
                }, d.isAllHandsIsLaizi = function() {
                    var e = this.getMyhands();
                    if ((null == e ? void 0 : e.length) > 0) {
                        var t = 0;
                        return e.forEach((function(e) {
                            C.isLaiziCard(e) && (t += 1)
                        })), t == (null == e ? void 0 : e.length)
                    }
                    return !1
                }, d.resetMyhands = function() {
                    var e = i.getInstance().getMyPlayerInfo();
                    this._checkPlayer(e) && (e.handCards = [])
                }, d.getLastMyhands = function() {
                    var e = i.getInstance().getMyPlayerInfo();
                    return null == e ? void 0 : e.handCards[(null == e ? void 0 : e.handCards.length) - 1]
                }, d.includesMyhands = function(e) {
                    for (var t = i.getInstance().getMyPlayerInfo(), n = !1, a = 0; a < (null == t ? void 0 : t.handCards.length); a++) {
                        var o = t.handCards[a];
                        if (C.getMajiangValue(o) === C.getMajiangValue(e)) {
                            n = !0;
                            break
                        }
                    }
                    return n
                }, d.getHandCardByIndex = function(e) {
                    var t = i.getInstance().getMyPlayerInfo();
                    return null == t ? void 0 : t.handCards[e]
                }, d.dumpMyHands = function(e) {
                    if (void 0 === e && (e = ""), a.DEBUG) {
                        var t = i.getInstance().getMyPlayerInfo(),
                            n = [];
                        if (t && t.handCards)
                            for (var o = 0; o < t.handCards.length; o++) {
                                var r = C.getCardValue(t.handCards[o]);
                                n.push(_.get(r))
                            }
                        this.print(e + "dumpMyHands", n)
                    }
                }, d.dumpHands = function(e) {
                    if (!a.DEBUG) return "";
                    for (var t = [], n = 0; n < e.length; n++) {
                        var i = C.getCardValue(e[n]);
                        t.push(_.get(i))
                    }
                    return t
                }, d.updatePlayerCardsNum = function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = this.findPlayerWithSeatId(t + 1);
                        this._checkPlayer(n) && (n.cardCount = e[t])
                    }
                }, d.findOtherPlayer = function(e) {
                    return void 0 === e && (e = null), this.playerList.filter((function(t) {
                        return t.seatId != (e || I.getInstance().mySeatId)
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
                    return this.myPlayerInfo = this.findPlayerWithUserId(r.User.getUserMid()), this.myPlayerInfo ? this.myPlayerInfo : 0 == this._reConMax ? void c.restartMiniProgram() : (h.instance.closeConnect({}), void this._reConMax--)
                }, d.updateMyMoney = function(e) {
                    for (var t = 0; t < this.playerList.length; t++)
                        if (this.playerList[t].userId === r.User.getUserMid()) {
                            this.playerList[t].money = e;
                            break
                        }
                }, d.updateUsersMoney = function(e) {
                    for (var t = null, n = 0; n < this.playerList.length; n++) null != e[t = this.playerList[n].userId] && (this.playerList[n].money = e[t], u.dispatch(g.USER_UPDATE_PROPERTY, t))
                }, d.addPlayerList = function(e) {
                    var t = this;
                    if (e) {
                        if (this.parseUseInfo(e), Array.isArray(e)) {
                            var n, i = e.filter((function(e) {
                                return !t.playerList.some((function(t) {
                                    return t.userId === e.userId
                                }))
                            }));
                            this.checkRobotInfo(i), (n = this.playerList).push.apply(n, i)
                        } else this.playerList.some((function(t) {
                            return t.userId === e.userId
                        })) || (this.checkRobotInfo(e), this.playerList.push(e));
                        this.playerList = C.sortPlayersBySeatId(this.playerList, I.getInstance().mySeatId)
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
                            var i = t.initRobotInfo(n);
                            i && (e.gameUserInfo.robotInfo = i)
                        }
                    }
                    Array.isArray(e) ? e.forEach((function(e) {
                        n(e)
                    })) : n(e)
                }, d.getUserNick = function(e) {
                    var t, n, i = null == e ? void 0 : e.nickName;
                    return null != e && null != (t = e.robotInfo) && t.nick && (i = null == e || null == (n = e.robotInfo) ? void 0 : n.nick), i || ""
                }, d.getUserAvatar = function(e, t) {
                    var n;
                    void 0 === t && (t = !1);
                    var i, a = 1 == t ? null == e ? void 0 : e.avatar_b : null == e ? void 0 : e.avatar_s;
                    return null != e && null != (n = e.robotInfo) && n.url && (a = null == e || null == (i = e.robotInfo) ? void 0 : i.url), a || ""
                }, d.getUserHeadBox = function(e) {
                    return (null == e ? void 0 : e.userHeadBox) || ""
                }, d.getUserChatBox = function(e) {
                    return (null == e ? void 0 : e.userChatBox) || ""
                }, d.getUserClock = function(e) {
                    return null == e ? void 0 : e.userClock
                }, d.parseUseInfo = function(e) {
                    var t = this;
                    e && (Array.isArray(e) ? e.forEach((function(e) {
                        e.gameUserInfo = t.checkUserAvatarInfo(l.JsonDecode(null == e ? void 0 : e.strUserInfo), e.userId)
                    })) : e.gameUserInfo = this.checkUserAvatarInfo(l.JsonDecode(null == e ? void 0 : e.strUserInfo), e.userId))
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
                            userClock: null,
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
                        var i = r.User.getRobotInfo(t);
                        e.avatar_b = (null == i ? void 0 : i.icon) || "", e.avatar_s = (null == i ? void 0 : i.icon) || "", e.avatar_m = (null == i ? void 0 : i.icon) || "", e.ladderScore = (null == i ? void 0 : i.ladderScore) || o.number_valueOf(e.ladderScore), e.charm = (null == i ? void 0 : i.charmScore) || o.number_valueOf(e.charm), e.levelSystemScore = (null == i ? void 0 : i.levelScore) || o.number_valueOf(e.levelSystemScore)
                    }
                    return e
                }, d.deletePlayerList = function(e) {
                    Array.isArray(e) ? this.playerList = this.playerList.filter((function(t) {
                        return !e.some((function(e) {
                            return e.userId === t.userId
                        }))
                    })) : this.playerList = this.playerList.filter((function(t) {
                        return t.userId !== e.userId
                    })), this.playerList = C.sortPlayersBySeatId(this.playerList, I.getInstance().mySeatId)
                }, d.clear = function() {
                    this.playerList = []
                }, d.resetPlayerStatus = function() {
                    this.playerList.forEach((function(e, t, n) {
                        e.isReady = 0, e.isAi = 0
                    })), this.resetUserStatus()
                }, d.resetUserStatus = function() {
                    this.playerList.forEach((function(e, t, n) {
                        e.status = p.END
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
                        this._checkPlayer(n) && (n.money = e[t].money, r.SelectGame.isInMatchRoom() || r.SelectGame.isInPrivateRoom() || n.userId === r.User.getUserMid() && r.User.updateUserMoneyByID(0, n.money), u.dispatch(g.USER_UPDATE_PROPERTY, n.userId))
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
                            var n, i = this.findPlayerWithSeatId(t + 1);
                            this._checkPlayer(i) && (i.handCards = e.handCards[t].handCards, i.huCard = e.handCards[t].huCard, i.opGroups = e.handCards[t].opGroups, i.tingCard = e.handCards[t].tingCard, i.isUnTing = e.handCards[t].isUnTing, i.customData = e.handCards[t].customData)
                        }
                    }
                }, d.updateOpCards = function(e, t) {
                    var n = this.findPlayerWithSeatId(e);
                    this._checkPlayer(n) && n.opGroups.push(t)
                }, d.resetOpCards = function() {
                    this.playerList.forEach((function(e) {
                        e.opGroups = []
                    }))
                }, d.deletePlayerLeave = function(e) {
                    this.playerList = this.playerList.filter((function(t) {
                        return t.userId !== e
                    }))
                }, d.removeOtherPlayer = function() {
                    this.playerList = this.playerList.filter((function(e) {
                        return e.userId === r.User.getUserMid()
                    }))
                }, d.updatePlayerAiStatus = function(e, t) {
                    var n = this.findPlayerWithUserId(e);
                    this._checkPlayer(n) && (n.isAi = t)
                }, d.removeHandCard = function(e) {
                    (null == e ? void 0 : e.length) > 0 && (this.print("removeHandCard", e, this.dumpHands(e)), this.dumpMyHands("移除前的手牌："), m.deleteHasInList(this.getMyhands(), e), this.dumpMyHands("移除后的手牌："))
                }, d.removeOpGroupsCard = function(e, t) {
                    if ((null == t ? void 0 : t.length) > 0) {
                        var n, i = null == (n = this.myPlayerInfo) ? void 0 : n.opGroups;
                        (null == i ? void 0 : i.length) > 0 && i.forEach((function(n) {
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
                    if (I.getInstance().isMySelfSeat(e.seatId) && (null == e || null == (t = e.cards) ? void 0 : t.length) > 0) {
                        var n = this.getMyhands();
                        this.removeHandCard(null == e ? void 0 : e.cards), this.updateMyhands(n), I.getInstance().setGameInfoByTag(A.HUAN_SAN_ZHANG_CARD, {
                            seatId: e.seatId,
                            cards: null == e ? void 0 : e.cards
                        })
                    }
                }, d.onAllHuanSanZhang = function(e) {
                    var t;
                    if (I.getInstance().isMySelfSeat(e.seatId) && (null == e || null == (t = e.cards) ? void 0 : t.length) > 0) {
                        var n = this.getMyhands();
                        this.updateMyhands(n.concat(null == e ? void 0 : e.cards))
                    }
                }, d.updatePlayerCharmBySeatId = function(e, t) {
                    var n = this.findPlayerWithSeatId(e);
                    this._checkPlayer(n) && (n.gameUserInfo.charm = (n.gameUserInfo.charm || 0) + t)
                }, d.synGameRecord = function() {
                    var e;
                    null != (e = this.myPlayerInfo) && e.gameUserInfo && (this.myPlayerInfo.gameUserInfo.drawCount = o.number_valueOf(r.User.getGamePlayRecordByKey(r.SelectGame.getCurGameId(), s.UserGameRecodeKey.Draw)), this.myPlayerInfo.gameUserInfo.winCount = o.number_valueOf(r.User.getGamePlayRecordByKey(r.SelectGame.getCurGameId(), s.UserGameRecodeKey.Win)), this.myPlayerInfo.gameUserInfo.loseCount = o.number_valueOf(r.User.getGamePlayRecordByKey(r.SelectGame.getCurGameId(), s.UserGameRecodeKey.Lose)), this.myPlayerInfo.gameUserInfo.friendTotal = o.number_valueOf(r.User.getGamePlayRecordByKey(r.SelectGame.getCurGameId(), s.UserGameRecodeKey.FriendTotal)), this.myPlayerInfo.gameUserInfo.friendWin = o.number_valueOf(r.User.getGamePlayRecordByKey(r.SelectGame.getCurGameId(), s.UserGameRecodeKey.FriendWin)))
                }, i
            }(d)).instance = null, i._RF.pop()
        }
    }
}))