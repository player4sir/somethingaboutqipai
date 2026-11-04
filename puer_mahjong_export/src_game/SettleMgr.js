System.register("chunks:///_virtual/SettleMgr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./EventManager.ts", "./BaseCache.ts", "./FXJConfig.ts", "./FXJConstant.ts", "./FXJEvent.ts", "./FXJRes.ts", "./GameEvent.ts", "./GameRuleConfig.ts", "./GameSettleConfig.ts", "./GameViewConfig.ts", "./CardUtil.ts", "./PlayerMgr.ts", "./RoomMgr.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m, C, I, A, E, v, y, S, P, T, G;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, n = e.extends
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            a = e.Utils
        }, function(e) {
            o = e.GCache
        }, function(e) {
            r = e.AppEvent
        }, function(e) {
            s = e.GAMETYPE, l = e.GConstants
        }, function(e) {
            u = e.EventManager
        }, function(e) {
            d = e.BaseCache
        }, function(e) {
            c = e.settleNameConfig, h = e.HuMap, p = e.UserStatus, f = e.OPCode, _ = e.settleHideFanNodeConfig
        }, function(e) {
            g = e.FXJConstant
        }, function(e) {
            m = e.FXJEvent
        }, function(e) {
            C = e.FXJRes
        }, function(e) {
            I = e.GameEvent
        }, function(e) {
            A = e.GameRuleConfig, E = e.GamePaiXingConfig
        }, function(e) {
            v = e.GameSettleConfig
        }, function(e) {
            y = e.GameViewConfig
        }, function(e) {
            S = e.CardUtil
        }, function(e) {
            P = e.PlayerMgr
        }, function(e) {
            T = e.RoomMgr, G = e.ROOM_DATA_TYPE
        }],
        execute: function() {
            i._RF.push({}, "1d3112vndxCYrH6v8qWw5aG", "SettleMgr", void 0);
            var O = e("SettleTypeConfig", {
                HuangZhuang: "huang_zhuang",
                CommonHu: "common_hu",
                ZiMo: "zi_mo",
                GangSettle: "gang_settle",
                QiangGangHu: "qiang_gang_hu",
                DouDiZhu: "dou_di_zhu",
                HuangZhuangMoney: "huang_zhuang_qian"
            });
            e("SettleMgr", function(e) {
                function i(t) {
                    var n;
                    return void 0 === t && (t = ""), (n = e.call(this, t) || this).settleType = "", n.isShowGameOver = 0, n.isBaoSanJia = !1, n.jiesuanCustomData = "", n.settleModel = null, n.settleWinPlayersSeatID = [], n.settleBankSeatID = 0, n.settleShowItems = [], n.daPaixing = void 0, n.playerList = [], n.liuShuiListData = [], n.setleViewData = null, n.maimaData = null, n._lostAdConfig = {}, n.detailList = new Map, n._getDoudizhuSeat = function() {
                        if (this.settleModel && this.settleModel.moneyItemList)
                            for (var e = this.settleModel.moneyItemList, t = 0; t < e.length; t++) {
                                var n = e[t].p2pMoney;
                                if (n)
                                    for (var i = 0; i < n.length; i++)
                                        if (n[i] < 0) return i + 1
                            }
                    }, n.addGameComp(), n
                }
                t(i, e), i.getInstance = function() {
                    return i.instance || (i.instance = new i), i.instance
                };
                var d = i.prototype;
                return d.addGameComp = function() {
                    this.addComponent("SettleComponent");
                    var e = this.getComponent("SettleComponent");
                    "function" == typeof e.setDelegate && e.setDelegate(this), this.addComponent("GameComponent")
                }, d.doGameSettleCompFun = function(e) {
                    var t = this.getComponent("SettleComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                        return t[e].apply(t, i)
                    }
                }, d.doGameCompFun = function(e) {
                    var t = this.getComponent("GameComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                        return t[e].apply(t, i)
                    }
                }, d.onGameStart = function() {
                    this.setMaimaData(null), this.setSetleViewData(null), this.detailList.clear()
                }, d.onReconnect = function() {
                    this.setMaimaData(null), this.setSetleViewData(null)
                }, d.onShowHandCards = function() {
                    var e = this;
                    this.playerList = [], P.getInstance().playerList.forEach((function(t) {
                        e.playerList.push(t)
                    }))
                }, d.findPlayerWithUserId = function(e) {
                    return this.playerList.filter((function(t) {
                        return t.userId === e
                    }))[0]
                }, d.findPlayerWithSeatId = function(e) {
                    return this.playerList.filter((function(t) {
                        return t.seatId === e
                    }))[0]
                }, d.getPlayerList = function() {
                    return this.playerList
                }, d.clearPlayerList = function() {
                    this.playerList = [], this.resetLiuShuiListData()
                }, d.updatePlayersLadderInfo = function(e) {
                    var t = this;
                    e.forEach((function(e) {
                        for (var n = 0; n < t.playerList.length; n++) {
                            var i = t.playerList[n];
                            if (e.uid == i.userId) {
                                void 0 !== e.ladderScore && null !== e.ladderScore && (i.gameUserInfo.ladderScore = e.ladderScore), i.gameUserInfo.ladderScoreChange = e.ladderScoreChange;
                                break
                            }
                        }
                    })), this.playerList.forEach((function(e) {
                        if (void 0 === e.gameUserInfo.ladderScoreChange || null === e.gameUserInfo.ladderScoreChange) {
                            var n, i, a = null == (n = (t.settleModel.totalInfo || [])[e.seatId - 1]) ? void 0 : n.winMoney;
                            i = a ? 0 == a ? 0 : a > 0 ? o.LadderData.getLadderWinScore(o.SelectGame.getCurGameId()) : 0 - o.LadderData.getLadderLoseScore(o.SelectGame.getCurGameId()) : 0, e.gameUserInfo.ladderScoreChange = i, e.gameUserInfo.ladderScore = Math.max((e.gameUserInfo.ladderScore || 0) + i, 0)
                        }
                    }))
                }, d.onReceiveSettleInfo = function(e, t) {
                    if (void 0 === t && (t = !1), this.doGameSettleCompFun("onReceiveSettleInfo", e), this._updateSettleInfo(e), 1 === this.isShowGameOver)
                        if (this.updatePlayersRecordInfo(), this.checkSettleDetail(e), this.settleType === O.HuangZhuang)
                            if (this.doGameSettleCompFun("checkHuangZhuang", e), this.checkChaJiao()) {
                                if (this.resetLiuShuiListData(), this.doGameSettleCompFun("checkLiuShui", e), !this.doGameSettleCompFun("doChaJiao", this.settleModel)) {
                                    var n = 0;
                                    this.settleModel.totalInfo.forEach((function(e, t, i) {
                                        if (0 != e.isYouJiao) {
                                            n = 1.5;
                                            var a = {
                                                seatId: e.seatId,
                                                aniType: y.AnimType.WuJiao
                                            };
                                            u.dispatch(m.VIEW_OUT_CARD_ANI_PLAY, a)
                                        }
                                    }));
                                    var i = {
                                        seatId: T.getInstance().mySeatId,
                                        aniType: y.AnimType.ChaJiao,
                                        eventId: I.SHOW_SETTLE_VIEW,
                                        delay: n
                                    };
                                    u.dispatch(m.VIEW_OUT_CARD_ANI_PLAY, i)
                                }
                            } else if (this.checkGuanSi()) {
                        var a = {
                            seatId: T.getInstance().mySeatId,
                            aniType: y.AnimType.GuanSi,
                            eventId: I.SHOW_SETTLE_VIEW
                        };
                        u.dispatch(m.VIEW_OUT_CARD_ANI_PLAY, a)
                    } else if (this.settleType === O.HuangZhuang) {
                        var o = {
                            seatId: T.getInstance().mySeatId,
                            aniType: y.AnimType.HuangZhuang,
                            eventId: I.SHOW_SETTLE_VIEW
                        };
                        u.dispatch(m.VIEW_OUT_CARD_ANI_PLAY, o)
                    } else u.dispatch(I.SHOW_SETTLE_VIEW);
                    else {
                        if ((A.GameType | s.Common) == s.Common) {
                            var r = this.checkPaiXing(this.settleWinPlayersSeatID[0]),
                                l = {
                                    seatId: this.settleWinPlayersSeatID[0],
                                    aniType: y.AnimType.PaiXing,
                                    aniName: r,
                                    eventId: I.SHOW_SETTLE_VIEW
                                };
                            this.setSetleViewData({
                                tag: "showOutCardAniPlay",
                                data: l,
                                eventId: m.VIEW_OUT_CARD_ANI_PLAY
                            })
                        } else this.setSetleViewData({
                            tag: "showOutCardAniPlay",
                            data: {},
                            eventId: I.SHOW_SETTLE_VIEW
                        });
                        u.dispatch(I.BROADCAST_OPEN_SETTLE_VIEW, {
                            tag: "showOutCardAniPlay"
                        })
                    } else this.settleType === O.DouDiZhu ? this._showDoudizhuAnim() : this.settleType === O.GangSettle ? this._checkGangSettle(e) : this.settleType === O.CommonHu || this.settleType === O.QiangGangHu ? (this._checkCommonHuSettle(e, t), t || this._showPaiXingAnim(this.settleWinPlayersSeatID[0])) : this.settleType === O.ZiMo ? (this._checkZiMoSettle(e, t), t || this._showPaiXingAnim(this.settleWinPlayersSeatID[0])) : this.doGameSettleCompFun("checkLiuShui", e) || t && null == this.settleType && this.parseHuInfo(e, t);
                    this.doGameSettleCompFun("checkSmallBetBigWinRule", e)
                }, d.checkSettleDetail = function(e) {
                    this.detailList.clear();
                    var t = new Map,
                        n = e.settleModel.totalInfo,
                        i = e.settleModel.moneyItemList;
                    i && n && (i.forEach((function(e) {
                        var i;
                        if (null != (i = e.p2pMoney) && i.length) {
                            var a = "";
                            a = 0 != e.opcode ? v.CheckItemList[e.name] || c[e.opcode] : v.CheckItemList[e.name] || c[e.name], e.p2pMoney.forEach((function(i, o) {
                                if (0 !== i) {
                                    var r = e.p2pMoney.filter((function(e) {
                                        return 0 == e
                                    }));
                                    if (!(r && r.length >= e.p2pMoney.length - 1)) {
                                        var s = n[o].userId,
                                            l = n[o].seatId,
                                            u = [];
                                        e.p2pMoney.forEach((function(e, t) {
                                            if (t !== o && (i > 0 ? e < 0 : e > 0)) {
                                                var a = n[t].seatId;
                                                u.push(S.calculatePlayerPosition(l, a))
                                            }
                                        })), 3 == u.length && (u = ["三家"]);
                                        var d = a;
                                        a && ((a = a.endsWith("x") ? a.slice(0, -1) : a).includes("胡") && i < 0 ? d = "被胡了" : a.includes("自摸") && i < 0 ? d = "被自摸" : a.includes("查叫") && i < 0 && (d = "被查叫"));
                                        var c = {
                                            title: d,
                                            money: i,
                                            winnerDirs: u
                                        };
                                        t.has(s) ? t.get(s).unshift(c) : t.set(s, [c])
                                    }
                                }
                            }))
                        }
                    })), console.log("结算liushuiList", t), this.setDetailList(t))
                }, d._showPaiXingAnim = function(e) {
                    if ((A.GameType | s.Common) != s.Common && !a.isNull(e)) {
                        var t = this.checkPaiXing(e),
                            n = {
                                seatId: e,
                                aniType: y.AnimType.PaiXing,
                                aniName: t
                            };
                        u.dispatch(m.VIEW_OUT_CARD_ANI_PLAY, n)
                    }
                }, d._checkGangSettle = function(e) {
                    var t, n, i, a, o = this;
                    this.doGameSettleCompFun("checkGangSettle", e) || (null == e || null == (t = e.settleModel) || null == (n = t.moneyItemList) ? void 0 : n.length) > 0 && ((null == e || null == (i = e.settleModel) ? void 0 : i.moneyItemList).forEach((function(t) {
                        var n;
                        null == t.name || "onceGang" != t.name && "gang" != t.name || o.updatePlayersSettleMoney(t.p2pMoney, null == e || null == (n = e.settleModel) ? void 0 : n.totalInfo)
                    })), this.synPlayersMoney(null == e || null == (a = e.settleModel) ? void 0 : a.totalInfo), this.parseLiuShuiData())
                }, d._checkCommonHuSettle = function(e, t) {
                    void 0 === t && (t = !1), this.doGameSettleCompFun("checkCommonHuSettle", e) || this.parseHuInfo(e, t)
                }, d.parseHuInfo = function(e, t) {
                    var n, i, a = this;
                    if (void 0 === t && (t = !1), (null == e || null == (n = e.settleModel) || null == (i = n.moneyItemList) ? void 0 : i.length) > 0) {
                        var o, r, s = null == e || null == (o = e.settleModel) ? void 0 : o.moneyItemList;
                        t || s.forEach((function(t) {
                            var n;
                            a.updatePlayersSettleMoney(t.p2pMoney, null == e || null == (n = e.settleModel) ? void 0 : n.totalInfo)
                        })), this.synPlayersMoney(null == e || null == (r = e.settleModel) ? void 0 : r.totalInfo), this._checkHuInfo(s), this.parseLiuShuiData()
                    }
                }, d._checkHuInfo = function(e) {
                    if (A.GameType == s.XUEZHAN) {
                        var t = [],
                            n = !1,
                            i = 0;
                        null == e || e.forEach((function(e) {
                            h[e.opcode] && (P.getInstance().updatePlayerStatus(e.winSeatId, p.HU), i = 0, e.winSeatId == T.getInstance().mySeatId && (n = !0), e.fanExtendInfo.forEach((function(e) {
                                var t;
                                (null == (t = e.fanInfo) ? void 0 : t.length) > 0 && (i = e.totalFan)
                            })), t.push({
                                seatId: e.winSeatId,
                                totalFan: i
                            }))
                        })), (t = t.filter((function(e, n) {
                            return n === t.indexOf(e)
                        }))).length > 0 && (T.getInstance().setGameInfoByTag(G.RECONNECT_HU_INFO, t), u.dispatch(m.BROADCAST_REALTIME_HU_INFO, t)), n && o.SelectGame.isNormalRoom() && u.dispatch(r.GAME_ROOM_STATE_CHANGE, l.GameRoomState.STATUS_GAMEOVER)
                    }
                }, d._checkZiMoSettle = function(e, t) {
                    void 0 === t && (t = !1), this.doGameSettleCompFun("checkZiMoSettle", e) || this.parseHuInfo(e, t)
                }, d.updatePlayersSettleMoney = function(e, t) {
                    var n = [];
                    null == e || e.forEach((function(e, i) {
                        var a = i + 1;
                        (null == t ? void 0 : t.length) > 0 && t[i] && (a = t[i].seatId), null == n[a] || null == n[a] ? n[a] = e : n[a] += e
                    })), n.length > 0 && u.dispatch(m.BROADCAST_SETTLE_MONEY, n)
                }, d.synPlayersMoney = function(e) {
                    var t = [];
                    null == e || e.forEach((function(e) {
                        t[e.seatId - 1] = e.nMoney
                    })), t.length > 0 && (P.getInstance().updatePlayerMoney(t), P.getInstance().playerList.forEach((function(e) {
                        u.dispatch(I.USER_UPDATE_PROPERTY, e.userId)
                    })))
                }, d.updatePlayersRecordInfo = function() {
                    var e = this,
                        t = o.SelectGame.isNormalRoom(),
                        n = o.SelectGame.isInPrivateRoom(),
                        i = o.SelectGame.isInMatchRoom();
                    P.getInstance().playerList.forEach((function(a) {
                        var r = e.getTotalInfoByUId(null == a ? void 0 : a.userId);
                        if (r) {
                            var s = r.winMoney > 0 ? 1 : r.winMoney < 0 ? -1 : 0;
                            if (i || (s > 0 ? a.gameUserInfo.winCount += 1 : 0 == s ? a.gameUserInfo.drawCount += 1 : s < 0 && (a.gameUserInfo.loseCount += 1)), n && (++a.gameUserInfo.friendTotal, s >= 0 && ++a.gameUserInfo.friendWin), a.userId == o.User.getUserMid()) {
                                o.User.updateGamePlayRecordByKey(o.SelectGame.getCurGameId(), l.UserGameRecodeKey.Win, a.gameUserInfo.winCount), o.User.updateGamePlayRecordByKey(o.SelectGame.getCurGameId(), l.UserGameRecodeKey.Lose, a.gameUserInfo.loseCount), o.User.updateGamePlayRecordByKey(o.SelectGame.getCurGameId(), l.UserGameRecodeKey.Draw, a.gameUserInfo.drawCount);
                                var u = o.User.getGamePlayInfoRecord(o.SelectGame.getCurGameId());
                                t ? (u[l.UserGameRecodeKey.SilverTotal] += 1, u[l.UserGameRecodeKey.TodayTotal] += 1, s >= 0 && (u[l.UserGameRecodeKey.SilverWin] += 1, u[l.UserGameRecodeKey.TodayWin] += 1)) : n && (u[l.UserGameRecodeKey.FriendTotal] += 1, s >= 0 && (u[l.UserGameRecodeKey.FriendWin] += 1))
                            }
                        }
                    }))
                }, d._updateSettleInfo = function(e) {
                    var t;
                    this.settleType = e.settleType, this.isShowGameOver = e.isShowGameOver, this.isBaoSanJia = e.isBaoSanJia, this.jiesuanCustomData = e.jiesuanCustomData, this.settleModel = e.settleModel, this.daPaixing = {}, this.settleWinPlayersSeatID = [], this.settleBankSeatID = T.getInstance().bankSeatId, this._parseSettleItemData(), o.SelectGame.isNormalRoom() && o.User.updateUserMoneyByID(0, null == (t = this.getTotalInfoBySeatId(T.getInstance().mySeatId)) ? void 0 : t.nMoney)
                }, d._parseSettleItemData = function() {
                    var e, t, n = null == (e = this.settleModel) ? void 0 : e.moneyItemList;
                    this.settleShowItems = [];
                    for (var i = 0; i < A.playerNum; i++) this.settleShowItems[i] = [];
                    if (null != (t = this.settleModel) && t.totalInfo)
                        for (var a = 0; a < this.settleModel.totalInfo.length; a++) this.settleModel.totalInfo[a].seatId = a + 1;
                    !n || n.length <= 0 || (this._parseSettleItemFanData(), this._parseSettleItemMoneyData())
                }, d._parseSettleItemMoneyData = function() {
                    for (var e, t = null == (e = this.settleModel) ? void 0 : e.moneyItemList, n = 0; n < t.length; n++) {
                        var i = t[n];
                        if (i.name !== v.SettleMoneyType.Fan)
                            for (var a = 0; a < i.p2pMoney.length; a++)
                                if (0 !== i.p2pMoney[a]) {
                                    var o = {
                                        name: i.name,
                                        isFan: !1,
                                        type: null,
                                        num: i.p2pMoney[a],
                                        paixingId: null,
                                        isBigAnim: null,
                                        isTitle: null
                                    };
                                    this.settleShowItems[a].push(o)
                                }
                    }
                }, d._parseSettleItemFanData = function() {
                    for (var e = this, t = [], n = 0; n < this.settleModel.moneyItemList.length; n++) this.settleModel.moneyItemList[n].name == v.SettleMoneyType.Fan && t.push(this.settleModel.moneyItemList[n]);
                    t.forEach((function(t) {
                        t.winSeatId && e.settleWinPlayersSeatID.push(t.winSeatId);
                        for (var n = function(n) {
                                var i = t.fanExtendInfo[n];
                                i.fanInfo.length > 0 && i.fanInfo.forEach((function(a) {
                                    var o = a.fanName;
                                    "龙抓背" == a.fanName && (o = "龙爪背"), "特殊总番" == a.fanName && (o = "花");
                                    var r = {
                                        name: o,
                                        isFan: !0,
                                        type: a.type,
                                        num: Number(a.fan),
                                        paixingId: a.paixingId,
                                        isBigAnim: a.isBigAnim,
                                        isTitle: a.isTitle
                                    };
                                    e.settleShowItems[n].push(r), e._checkDaPaixing(a, i.totalFan, t.winSeatId, t.winSeatId !== n + 1)
                                }))
                            }, i = 0; i < t.fanExtendInfo.length; i++) n(i)
                    }))
                }, d.checkGameDaPaiXinId = function(e) {
                    var t = Number(e.fan),
                        n = this.doGameSettleCompFun("checkGameDaPaiXinId", e);
                    return null != n ? n : !!(A.SettleDaPaixingNum && t >= A.SettleDaPaixingNum && e.type < 3) || void 0
                }, d._checkDaPaixing = function(e, t, n, i) {
                    var a, o = Number(e.fan);
                    this.checkGameDaPaiXinId(e) && (i ? null != (a = this.daPaixing[n]) && a.isExtra ? (this.daPaixing[n].totalFan < t && (this.daPaixing[n].isExtra = !0, this.daPaixing[n].totalFan = t), this.daPaixing[n].fan < o && (this.daPaixing[n].isExtra = !0, this.daPaixing[n].name = e.fanName, this.daPaixing[n].num = o, this.daPaixing[n].type = e.type)) : this.daPaixing[n] = {
                        isExtra: !0,
                        isFan: !0,
                        name: e.fanName,
                        num: o,
                        totalFan: t,
                        type: e.type
                    } : this.daPaixing[n] || (this.daPaixing[n] = {
                        isExtra: !1,
                        isFan: !0
                    }))
                }, d.getSettleShowItemBySeat = function(e) {
                    return null != e && this.settleShowItems[e - 1] || []
                }, d.getSettledItemsBySeat = function(e) {
                    if (void 0 !== e && this.settleShowItems && Array.isArray(this.settleShowItems)) {
                        var t = e - 1,
                            i = this.settleShowItems[t] || [],
                            a = {};
                        return i.forEach((function(e) {
                            a[e.name] ? a[e.name].num += e.num : a[e.name] = n({}, e)
                        })), Object.values(a)
                    }
                    return []
                }, d.getPlayerIsWinBySeatID = function(e) {
                    for (var t = 0; t < this.settleWinPlayersSeatID.length; t++)
                        if (this.settleWinPlayersSeatID[t] === e) return !0;
                    return !1
                }, d.filterCPGCards = function(e) {
                    var t = this.doGameCompFun("filterCPGCards", e) || [];
                    return t.length > 0 || null != e && e.forEach((function(e) {
                        switch (e.opCode) {
                            case f.OPE_RIGHT_CHI:
                            case f.OPE_MIDDLE_CHI:
                            case f.OPE_LEFT_CHI:
                            case f.OPE_PENG:
                            case f.OPE_QIANG_PENG:
                            case f.OPE_GANG:
                            case f.OPE_BU_GANG:
                            case f.OPE_AN_GANG:
                            case f.OPE_QIANG_GANG:
                            case f.OPE_LANG_QI:
                            case f.OPE_MING_LOU:
                            case f.OPE_MING_LV:
                            case f.OPE_QIANG_TOU_ZHI_GANG:
                            case f.OPE_QIANG_TOU_AN_GANG:
                                var n = [];
                                e.opCards.forEach((function(e) {
                                    n.push(e)
                                })), t.push(n)
                        }
                    })), t
                }, d.getTotalInfoBySeatId = function(e) {
                    var t, n, i;
                    if ((null == (t = this.settleModel) || null == (n = t.totalInfo) ? void 0 : n.length) > 0) return null == (i = this.settleModel) ? void 0 : i.totalInfo[e - 1]
                }, d.getTotalInfoByUId = function(e) {
                    var t = null;
                    return this.settleModel.totalInfo.forEach((function(n) {
                        n.userId == e && (t = n)
                    })), t
                }, d.checkChaJiao = function() {
                    var e = this.doGameCompFun("checkChaJiao", this.settleModel, this.settleType === O.HuangZhuang);
                    if (!a.isNull(e)) return e;
                    for (var t = this.settleModel.totalInfo, n = 0; n < t.length; n++)
                        if (a.isNotNull(t[n]) && 1 == a.number_valueOf(t[n].isYouJiao)) return console.log("checkChaJiao", "true", t[n].isYouJiao), !0;
                    return console.log("checkChaJiao", "false"), !1
                }, d.checkGuanSi = function() {
                    for (var e = this.settleModel.moneyItemList, t = 0; t < e.length; t++)
                        if (a.isNotNull(e[t].name) && "guan_si" == e[t].name) return console.log("checkGuanSi", "true"), !0;
                    return console.log("checkGuanSi", "false"), !1
                }, d.checkBaoSanJia = function(e) {
                    if (this.isBaoSanJia) {
                        for (var t = -1, n = this.settleModel.moneyItemList, i = 0; i < n.length; i++) t = n[i].paoSeatId;
                        return t == e
                    }
                    return !1
                }, d.checkPaiXing = function(e) {
                    var t = this.getSettleShowItemBySeat(e);
                    if ((t = t.filter((function(e) {
                            return e.isFan
                        }))).length > 0) {
                        t = t.sort((function(e, t) {
                            return t.num - e.num
                        })), console.log("checkPaiXing", t);
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            if (a.isNotNull(E[i.paixingId])) return console.log("checkPaiXing paixingId ", i.paixingId), i.paixingId
                        }
                    }
                    return ""
                }, d._showDoudizhuAnim = function() {
                    var e, t = this._getDoudizhuSeat(),
                        n = null == (e = P.getInstance().findPlayerWithSeatId(t)) ? void 0 : e.userId,
                        i = {
                            resConf: C.Spine_ddz,
                            aniName: "animation",
                            trackIndex: 0,
                            isLoop: !1
                        };
                    u.dispatch(m.VIEW_DESK_ANI_PLAY, g.AnimNormal.common, i, n)
                }, d.clear = function() {
                    this.liuShuiListData = []
                }, d.getLostAdConfig = function() {
                    return this._lostAdConfig
                }, d.updateLostAdConfig = function(e) {
                    this._lostAdConfig = e
                }, d.parseLiuShuiData = function() {
                    var e = this;
                    if ((null == A.GameType || A.GameType == s.XUEZHAN) && 1 != this.isShowGameOver) {
                        var t, n, i = this.dealSettleData(a.clone(this.settleModel)),
                            o = T.getInstance().mySeatId,
                            r = o - 1;
                        (null == i || null == (t = i.moneyItemList) ? void 0 : t.length) > 0 && (null == i || null == (n = i.moneyItemList) || n.forEach((function(t) {
                            var n;
                            if ((null == t || null == (n = t.p2pMoney) ? void 0 : n.length) > 0) {
                                var i = a.number_valueOf(null == t ? void 0 : t.p2pMoney[r]),
                                    s = e._getPlayerSeatId(null == t ? void 0 : t.p2pMoney, !0);
                                if (null != t.opcode && 0 != i) {
                                    h[t.opcode] && console.log("parseLiuShuiData", h[t.opcode]);
                                    var l = {
                                        money: i,
                                        name: "",
                                        fanInfo: [],
                                        fan: [],
                                        totalFan: "",
                                        totalBei: ""
                                    };
                                    if (i > 0 ? !t.name || "fan" != t.name && "cha_jiao" != t.name && "hua_zhu" != t.name ? l.name = "我" : l.name = "我对" + S.calculatePlayerPosition(o, s + 1) : 0 != i && (l.name = "被", null == t || t.p2pMoney.forEach((function(e, t) {
                                            e > 0 && (l.name += S.calculatePlayerPosition(o, t + 1) + " ")
                                        }))), 0 != t.opcode ? l.name += c[t.opcode] : l.name += c[t.name], e._checkIsShowFanOrBei(t)) {
                                        var u, d = "0",
                                            p = "0",
                                            f = e._getPlayerSeatId(null == t ? void 0 : t.p2pMoney, !1);
                                        if ((null == t || null == (u = t.fanExtendInfo) ? void 0 : u.length) > 0 && null != (null == t ? void 0 : t.fanExtendInfo[f])) {
                                            var _ = t.fanExtendInfo[f];
                                            if (_ && _.fanInfo) {
                                                var g = a.number_valueOf(_.totalFanStr || _.totalFan);
                                                _.fengDingFan && _.fengDingFan > 0 && g > _.fengDingFan ? (d = _.fengDingFan + "", p = _.fengDingFan + "") : (d = g + "", p = g + "");
                                                for (var m = 0; m < _.fanInfo.length; m++) {
                                                    var C = _.fanInfo[m].time;
                                                    null != C && C > 1 ? l.fanInfo.push(_.fanInfo[m].fanName + " X" + C) : l.fanInfo.push(_.fanInfo[m].fanName), l.fan.push(_.fanInfo[m].fan)
                                                }
                                                d += "倍", p += "倍"
                                            }
                                        }
                                        l.totalBei = p, l.totalFan = d
                                    }
                                    e.liuShuiListData.unshift(l)
                                }
                            }
                        })))
                    }
                }, d.dealSettleData = function(e) {
                    var t;
                    if ((null == e || null == (t = e.moneyItemList) ? void 0 : t.length) > 0) {
                        for (var n = [], i = e.moneyItemList, o = i.length, r = null, s = 0; s < o; s++) {
                            var l, u;
                            if ((r = i[s]) && r.name && (null == (l = r) || null == (u = l.p2pMoney) ? void 0 : u.length) > 0 && ("fan" === r.name || "cha_jiao" === r.name || "hua_zhu" === r.name)) {
                                for (var d = r.p2pMoney, c = this._getPlayerSeatId(d, !1), h = 0; h < d.length; h++)
                                    if (d[h] < 0) {
                                        var p, f = a.clone(r);
                                        f.p2pMoney[c] = -1 * d[h];
                                        for (var _ = 0; _ < f.p2pMoney.length; _++) _ != h && _ != c && (f.p2pMoney[_] = 0);
                                        if (f.fanExtendInfo && f.fanExtendInfo[h] && (null == (p = f.fanExtendInfo[h].fanInfo) ? void 0 : p.length) > 0)
                                            for (var g = f.fanExtendInfo[h].fanInfo, m = 0; m < g.length; m++)(f.fanExtendInfo[c].fanInfo || []).push(g[m]);
                                        if (f.fanExtendInfo)
                                            for (var C = 0; C < f.fanExtendInfo.length; C++) C != c && f.fanExtendInfo[C] && f.fanExtendInfo[C].fanInfo && (f.fanExtendInfo[C].fanInfo = []);
                                        n.push(f)
                                    }
                            } else n.push(r)
                        }
                        e.moneyItemList = n
                    }
                    return e
                }, d._checkIsShowFanOrBei = function(e) {
                    return !(0 != e.opcode && _[e.opcode] || e.name && _[e.name])
                }, d._getPlayerSeatId = function(e, t) {
                    for (var n = null == e ? void 0 : e.length, i = 0; i < n; i++)
                        if (t) {
                            if (e[i] < 0) return i
                        } else if (e[i] > 0) return i
                }, d.addLiuShuiListData = function(e) {
                    this.liuShuiListData.unshift(e)
                }, d.getLiuShuiListData = function() {
                    return this.liuShuiListData
                }, d.resetLiuShuiListData = function() {
                    this.liuShuiListData = []
                }, d.onLoginRoom = function() {
                    this.resetLiuShuiListData()
                }, d.setSetleViewData = function(e) {
                    this.setleViewData = e
                }, d.getSetleViewData = function() {
                    return this.setleViewData
                }, d.setMaimaData = function(e) {
                    this.maimaData = e
                }, d.getMaimaData = function() {
                    return this.maimaData
                }, d.getSettleModel = function() {
                    return this.settleModel
                }, d.getDetailList = function() {
                    return this.detailList
                }, d.setDetailList = function(e) {
                    this.detailList = e
                }, i
            }(d)).instance = null, i._RF.pop()
        }
    }
}))