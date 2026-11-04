System.register("chunks:///_virtual/SettleMgr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./EventManager.ts", "./BaseCache.ts", "./FXJConfig3.ts", "./FXJConstant3.ts", "./FXJEvent3.ts", "./FXJRes3.ts", "./GameEvent6.ts", "./GameRuleConfig4.ts", "./GameSettleConfig5.ts", "./GameViewConfig5.ts", "./CardUtil3.ts", "./PlayerMgr6.ts", "./RoomMgr6.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f, C, E, S, A, I, G, y, v, P;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, n = e.extends
        }, function(e) {
            a = e.cclegacy
        }, function(e) {
            i = e.Utils
        }, function(e) {
            o = e.GCache
        }, function(e) {
            r = e.AppEvent
        }, function(e) {
            s = e.GAMETYPE, u = e.GConstants
        }, function(e) {
            l = e.EventManager
        }, function(e) {
            d = e.BaseCache
        }, function(e) {
            c = e.settleNameConfig, h = e.HuMap, p = e.UserStatus, m = e.OPCode, _ = e.settleHideFanNodeConfig
        }, function(e) {
            g = e.FXJConstant
        }, function(e) {
            f = e.FXJEvent
        }, function(e) {
            C = e.FXJRes
        }, function(e) {
            E = e.GameEvent
        }, function(e) {
            S = e.GameRuleConfig
        }, function(e) {
            A = e.GameSettleConfig
        }, function(e) {
            I = e.GameViewConfig
        }, function(e) {
            G = e.CardUtil
        }, function(e) {
            y = e.PlayerMgr
        }, function(e) {
            v = e.RoomMgr, P = e.ROOM_DATA_TYPE
        }],
        execute: function() {
            a._RF.push({}, "1e780BMQs1DJJBc54NBGNjm", "SettleMgr", void 0);
            var T = e("SettleTypeConfig", {
                HuangZhuang: "huang_zhuang",
                CommonHu: "common_hu",
                ZiMo: "zi_mo",
                GangSettle: "gang_settle",
                QiangGangHu: "qiang_gang_hu",
                DouDiZhu: "dou_di_zhu",
                HuangZhuangMoney: "huang_zhuang_qian"
            });
            e("SettleMgr", function(e) {
                function a(t) {
                    var n;
                    return void 0 === t && (t = ""), (n = e.call(this, t) || this).settleType = "", n.isShowGameOver = 0, n.isBaoSanJia = !1, n.jiesuanCustomData = "", n.settleModel = null, n.settleWinPlayersSeatID = [], n.settleBankSeatID = 0, n.settleShowItems = [], n.daPaixing = void 0, n.playerList = [], n.liuShuiListData = [], n.setleViewData = null, n.maimaData = null, n._lostAdConfig = {}, n.detailList = new Map, n._getDoudizhuSeat = function() {
                        if (this.settleModel && this.settleModel.moneyItemList)
                            for (var e = this.settleModel.moneyItemList, t = 0; t < e.length; t++) {
                                var n = e[t].p2pMoney;
                                if (n)
                                    for (var a = 0; a < n.length; a++)
                                        if (n[a] < 0) return a + 1
                            }
                    }, n.addGameComp(), n
                }
                t(a, e), a.getInstance = function() {
                    return a.instance || (a.instance = new a), a.instance
                };
                var d = a.prototype;
                return d.addGameComp = function() {
                    this.addComponent("MJSettleComponent");
                    var e = this.getComponent("MJSettleComponent");
                    "function" == typeof e.setDelegate && e.setDelegate(this), this.addComponent("MJGameComponent");
                    var t = this.getComponent("MJGameComponent");
                    "function" == typeof t.setDelegate && t.setDelegate(this)
                }, d.doGameSettleCompFun = function(e) {
                    var t = this.getComponent("MJSettleComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
                        return t[e].apply(t, a)
                    }
                }, d.doGameCompFun = function(e) {
                    var t = this.getComponent("MJSettleComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
                        return t[e].apply(t, a)
                    }
                }, d.onGameStart = function() {
                    this.setMaimaData(null), this.setSetleViewData(null), this.detailList.clear()
                }, d.onReconnect = function() {
                    this.setMaimaData(null), this.setSetleViewData(null)
                }, d.onShowHandCards = function() {
                    var e = this;
                    this.playerList = [], y.getInstance().playerList.forEach((function(t) {
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
                            var a = t.playerList[n];
                            if (e.uid == a.userId) {
                                void 0 !== e.ladderScore && null !== e.ladderScore && (a.gameUserInfo.ladderScore = e.ladderScore), a.gameUserInfo.ladderScoreChange = e.ladderScoreChange;
                                break
                            }
                        }
                    })), this.playerList.forEach((function(e) {
                        if (void 0 === e.gameUserInfo.ladderScoreChange || null === e.gameUserInfo.ladderScoreChange) {
                            var n, a, i = null == (n = (t.settleModel.totalInfo || [])[e.seatId - 1]) ? void 0 : n.winMoney;
                            a = i ? 0 == i ? 0 : i > 0 ? o.LadderData.getLadderWinScore(o.SelectGame.getCurGameId()) : 0 - o.LadderData.getLadderLoseScore(o.SelectGame.getCurGameId()) : 0, e.gameUserInfo.ladderScoreChange = a, e.gameUserInfo.ladderScore = Math.max((e.gameUserInfo.ladderScore || 0) + a, 0)
                        }
                    }))
                }, d.onReceiveSettleInfo = function(e, t) {
                    if (void 0 === t && (t = !1), this.doGameSettleCompFun("onReceiveSettleInfo", e), this._updateSettleInfo(e), 1 === this.isShowGameOver)
                        if (this.updatePlayersRecordInfo(), this.checkSettleDetail(e), this.settleType === T.HuangZhuang)
                            if (this.doGameSettleCompFun("checkHuangZhuang", e), this.checkChaJiao()) {
                                if (this.resetLiuShuiListData(), this.doGameSettleCompFun("checkLiuShui", e), !this.doGameSettleCompFun("doChaJiao", this.settleModel)) {
                                    var n = 0;
                                    this.settleModel.totalInfo.forEach((function(e, t, a) {
                                        if (0 != e.isYouJiao) {
                                            n = 1.5;
                                            var i = {
                                                seatId: e.seatId,
                                                aniType: I.AnimType.WuJiao
                                            };
                                            l.dispatch(f.VIEW_OUT_CARD_ANI_PLAY, i)
                                        }
                                    }));
                                    var a = {
                                        seatId: v.getInstance().mySeatId,
                                        aniType: I.AnimType.ChaJiao,
                                        eventId: E.SHOW_SETTLE_VIEW,
                                        delay: n
                                    };
                                    l.dispatch(f.VIEW_OUT_CARD_ANI_PLAY, a)
                                }
                            } else if (this.checkGuanSi()) {
                        var i = {
                            seatId: v.getInstance().mySeatId,
                            aniType: I.AnimType.GuanSi,
                            eventId: E.SHOW_SETTLE_VIEW
                        };
                        l.dispatch(f.VIEW_OUT_CARD_ANI_PLAY, i)
                    } else if (this.settleType === T.HuangZhuang) {
                        var o = {
                            seatId: v.getInstance().mySeatId,
                            aniType: I.AnimType.HuangZhuang,
                            eventId: E.SHOW_SETTLE_VIEW
                        };
                        l.dispatch(f.VIEW_OUT_CARD_ANI_PLAY, o)
                    } else l.dispatch(E.SHOW_SETTLE_VIEW);
                    else {
                        if ((S.GameType | s.Common) == s.Common) {
                            var r = this.checkPaiXing(this.settleWinPlayersSeatID[0]),
                                u = {
                                    seatId: this.settleWinPlayersSeatID[0],
                                    aniType: I.AnimType.PaiXing,
                                    aniName: r,
                                    eventId: E.SHOW_SETTLE_VIEW
                                };
                            this.setSetleViewData({
                                tag: "showOutCardAniPlay",
                                data: u,
                                eventId: f.VIEW_OUT_CARD_ANI_PLAY
                            })
                        } else this.setSetleViewData({
                            tag: "showOutCardAniPlay",
                            data: {},
                            eventId: E.SHOW_SETTLE_VIEW
                        });
                        l.dispatch(E.BROADCAST_OPEN_SETTLE_VIEW, {
                            tag: "showOutCardAniPlay"
                        })
                    } else this.settleType === T.DouDiZhu ? this._showDoudizhuAnim() : this.settleType === T.GangSettle ? this._checkGangSettle(e) : this.settleType === T.CommonHu || this.settleType === T.QiangGangHu ? (this._checkCommonHuSettle(e, t), t || this._showPaiXingAnim(this.settleWinPlayersSeatID[0])) : this.settleType === T.ZiMo ? (this._checkZiMoSettle(e, t), t || this._showPaiXingAnim(this.settleWinPlayersSeatID[0])) : this.doGameSettleCompFun("checkLiuShui", e) || t && null == this.settleType && this.parseHuInfo(e, t);
                    this.doGameSettleCompFun("checkSmallBetBigWinRule", e)
                }, d.checkSettleDetail = function(e) {
                    this.detailList.clear();
                    var t = new Map,
                        n = e.settleModel.totalInfo,
                        a = e.settleModel.moneyItemList;
                    a && n && (a.forEach((function(e) {
                        var a;
                        if (null != (a = e.p2pMoney) && a.length) {
                            var i = "";
                            i = 0 != e.opcode ? A.CheckItemList[e.name] || c[e.opcode] : A.CheckItemList[e.name] || c[e.name], e.p2pMoney.forEach((function(a, o) {
                                if (0 !== a) {
                                    var r = e.p2pMoney.filter((function(e) {
                                        return 0 == e
                                    }));
                                    if (!(r && r.length >= e.p2pMoney.length - 1)) {
                                        var s = n[o].userId,
                                            u = n[o].seatId,
                                            l = [];
                                        e.p2pMoney.forEach((function(e, t) {
                                            if (t !== o && (a > 0 ? e < 0 : e > 0)) {
                                                var i = n[t].seatId;
                                                l.push(G.calculatePlayerPosition(u, i))
                                            }
                                        })), l.length == S.playerNum - 1 && (l = ["三家"]);
                                        var d = i;
                                        i && ((i = i.endsWith("x") ? i.slice(0, -1) : i).includes("胡") && a < 0 ? d = "被胡了" : i.includes("自摸") && a < 0 ? d = "被自摸" : i.includes("查叫") && a < 0 && (d = "被查叫"));
                                        var c = {
                                            title: d,
                                            money: a,
                                            winnerDirs: l
                                        };
                                        t.has(s) ? t.get(s).unshift(c) : t.set(s, [c])
                                    }
                                }
                            }))
                        }
                    })), console.log("结算liushuiList", t), this.setDetailList(t))
                }, d._showPaiXingAnim = function(e) {
                    if ((S.GameType | s.Common) != s.Common && !i.isNull(e)) {
                        var t = this.checkPaiXing(e),
                            n = {
                                seatId: e,
                                aniType: I.AnimType.PaiXing,
                                aniName: t
                            };
                        l.dispatch(f.VIEW_OUT_CARD_ANI_PLAY, n)
                    }
                }, d._checkGangSettle = function(e) {
                    var t, n, a, i, o = this;
                    this.doGameSettleCompFun("checkGangSettle", e) || (null == e || null == (t = e.settleModel) || null == (n = t.moneyItemList) ? void 0 : n.length) > 0 && ((null == e || null == (a = e.settleModel) ? void 0 : a.moneyItemList).forEach((function(t) {
                        var n;
                        null == t.name || "onceGang" != t.name && "gang" != t.name || o.updatePlayersSettleMoney(t.p2pMoney, null == e || null == (n = e.settleModel) ? void 0 : n.totalInfo)
                    })), this.synPlayersMoney(null == e || null == (i = e.settleModel) ? void 0 : i.totalInfo), this.parseLiuShuiData())
                }, d._checkCommonHuSettle = function(e, t) {
                    void 0 === t && (t = !1), this.doGameSettleCompFun("checkCommonHuSettle", e) || this.parseHuInfo(e, t)
                }, d.parseHuInfo = function(e, t) {
                    var n, a, i = this;
                    if (void 0 === t && (t = !1), (null == e || null == (n = e.settleModel) || null == (a = n.moneyItemList) ? void 0 : a.length) > 0) {
                        var o, r, s = null == e || null == (o = e.settleModel) ? void 0 : o.moneyItemList;
                        t || s.forEach((function(t) {
                            var n;
                            i.updatePlayersSettleMoney(t.p2pMoney, null == e || null == (n = e.settleModel) ? void 0 : n.totalInfo)
                        })), this.synPlayersMoney(null == e || null == (r = e.settleModel) ? void 0 : r.totalInfo), this._checkHuInfo(s), this.parseLiuShuiData()
                    }
                }, d._checkHuInfo = function(e) {
                    if (S.GameType == s.XUEZHAN) {
                        var t = [],
                            n = !1,
                            a = 0;
                        null == e || e.forEach((function(e) {
                            h[e.opcode] && (y.getInstance().updatePlayerStatus(e.winSeatId, p.HU), a = 0, e.winSeatId == v.getInstance().mySeatId && (n = !0), e.fanExtendInfo.forEach((function(e) {
                                var t;
                                (null == (t = e.fanInfo) ? void 0 : t.length) > 0 && (a = e.totalFan)
                            })), t.push({
                                seatId: e.winSeatId,
                                totalFan: a
                            }))
                        })), (t = t.filter((function(e, n) {
                            return n === t.indexOf(e)
                        }))).length > 0 && (v.getInstance().setGameInfoByTag(P.RECONNECT_HU_INFO, t), l.dispatch(f.BROADCAST_REALTIME_HU_INFO, t)), n && o.SelectGame.isNormalRoom() && l.dispatch(r.GAME_ROOM_STATE_CHANGE, u.GameRoomState.STATUS_GAMEOVER)
                    }
                }, d._checkZiMoSettle = function(e, t) {
                    void 0 === t && (t = !1), this.doGameSettleCompFun("checkZiMoSettle", e) || this.parseHuInfo(e, t)
                }, d.updatePlayersSettleMoney = function(e, t) {
                    var n = [];
                    null == e || e.forEach((function(e, a) {
                        var i = a + 1;
                        (null == t ? void 0 : t.length) > 0 && t[a] && (i = t[a].seatId), null == n[i] || null == n[i] ? n[i] = e : n[i] += e
                    })), n.length > 0 && l.dispatch(f.BROADCAST_SETTLE_MONEY, n)
                }, d.synPlayersMoney = function(e) {
                    var t = [];
                    null == e || e.forEach((function(e) {
                        t[e.seatId - 1] = e.nMoney
                    })), t.length > 0 && (y.getInstance().updatePlayerMoney(t), y.getInstance().playerList.forEach((function(e) {
                        l.dispatch(E.USER_UPDATE_PROPERTY, e.userId)
                    })))
                }, d.updatePlayersRecordInfo = function() {
                    var e = this,
                        t = o.SelectGame.isNormalRoom(),
                        n = o.SelectGame.isInPrivateRoom(),
                        a = o.SelectGame.isInMatchRoom();
                    y.getInstance().playerList.forEach((function(i) {
                        var r = e.getTotalInfoByUId(null == i ? void 0 : i.userId);
                        if (r) {
                            var s = r.winMoney > 0 ? 1 : r.winMoney < 0 ? -1 : 0;
                            if (a || (s > 0 ? i.gameUserInfo.winCount += 1 : 0 == s ? i.gameUserInfo.drawCount += 1 : s < 0 && (i.gameUserInfo.loseCount += 1)), n && (++i.gameUserInfo.friendTotal, s >= 0 && ++i.gameUserInfo.friendWin), i.userId == o.User.getUserMid()) {
                                o.User.updateGamePlayRecordByKey(o.SelectGame.getCurGameId(), u.UserGameRecodeKey.Win, i.gameUserInfo.winCount), o.User.updateGamePlayRecordByKey(o.SelectGame.getCurGameId(), u.UserGameRecodeKey.Lose, i.gameUserInfo.loseCount), o.User.updateGamePlayRecordByKey(o.SelectGame.getCurGameId(), u.UserGameRecodeKey.Draw, i.gameUserInfo.drawCount);
                                var l = o.User.getGamePlayInfoRecord(o.SelectGame.getCurGameId());
                                t ? (l[u.UserGameRecodeKey.SilverTotal] += 1, l[u.UserGameRecodeKey.TodayTotal] += 1, s >= 0 && (l[u.UserGameRecodeKey.SilverWin] += 1, l[u.UserGameRecodeKey.TodayWin] += 1)) : n && (l[u.UserGameRecodeKey.FriendTotal] += 1, s >= 0 && (l[u.UserGameRecodeKey.FriendWin] += 1))
                            }
                        }
                    }))
                }, d._updateSettleInfo = function(e) {
                    var t;
                    this.settleType = e.settleType, this.isShowGameOver = e.isShowGameOver, this.isBaoSanJia = e.isBaoSanJia, this.jiesuanCustomData = e.jiesuanCustomData, this.settleModel = e.settleModel, this.daPaixing = {}, this.settleWinPlayersSeatID = [], this.settleBankSeatID = v.getInstance().bankSeatId, this._parseSettleItemData(), o.SelectGame.isNormalRoom() && o.User.updateUserMoneyByID(0, null == (t = this.getTotalInfoBySeatId(v.getInstance().mySeatId)) ? void 0 : t.nMoney)
                }, d._parseSettleItemData = function() {
                    var e, t, n = null == (e = this.settleModel) ? void 0 : e.moneyItemList;
                    this.settleShowItems = [];
                    for (var a = 0; a < S.playerNum; a++) this.settleShowItems[a] = [];
                    if (null != (t = this.settleModel) && t.totalInfo)
                        for (var i = 0; i < this.settleModel.totalInfo.length; i++) this.settleModel.totalInfo[i].seatId = i + 1;
                    !n || n.length <= 0 || (this._parseSettleItemFanData(), this._parseSettleItemMoneyData())
                }, d._parseSettleItemMoneyData = function() {
                    for (var e, t = null == (e = this.settleModel) ? void 0 : e.moneyItemList, n = 0; n < t.length; n++) {
                        var a = t[n];
                        if (a.name !== A.SettleMoneyType.Fan)
                            for (var i = 0; i < a.p2pMoney.length; i++)
                                if (0 !== a.p2pMoney[i]) {
                                    var o = {
                                        name: a.name,
                                        isFan: !1,
                                        type: null,
                                        num: a.p2pMoney[i],
                                        paixingId: null,
                                        isBigAnim: null,
                                        isTitle: null
                                    };
                                    this.settleShowItems[i].push(o)
                                }
                    }
                }, d._parseSettleItemFanData = function() {
                    for (var e = this, t = [], n = 0; n < this.settleModel.moneyItemList.length; n++) this.settleModel.moneyItemList[n].name == A.SettleMoneyType.Fan && t.push(this.settleModel.moneyItemList[n]);
                    t.forEach((function(t) {
                        t.winSeatId && e.settleWinPlayersSeatID.push(t.winSeatId);
                        for (var n = function(n) {
                                var a = t.fanExtendInfo[n];
                                a.fanInfo.length > 0 && a.fanInfo.forEach((function(i) {
                                    var o = i.fanName;
                                    "龙抓背" == i.fanName && (o = "龙爪背"), "特殊总番" == i.fanName && (o = "花");
                                    var r = {
                                        name: o,
                                        isFan: !0,
                                        type: i.type,
                                        num: Number(i.fan),
                                        paixingId: i.paixingId,
                                        isBigAnim: i.isBigAnim,
                                        isTitle: i.isTitle
                                    };
                                    e.settleShowItems[n].push(r), e._checkDaPaixing(i, a.totalFan, t.winSeatId, t.winSeatId !== n + 1)
                                }))
                            }, a = 0; a < t.fanExtendInfo.length; a++) n(a)
                    }))
                }, d.checkGameDaPaiXinId = function(e) {
                    var t = Number(e.fan),
                        n = this.doGameSettleCompFun("checkGameDaPaiXinId", e);
                    return null != n ? n : !!(S.SettleDaPaixingNum && t >= S.SettleDaPaixingNum && e.type < 3) || void 0
                }, d._checkDaPaixing = function(e, t, n, a) {
                    var i, o = Number(e.fan);
                    this.checkGameDaPaiXinId(e) && (a ? null != (i = this.daPaixing[n]) && i.isExtra ? (this.daPaixing[n].totalFan < t && (this.daPaixing[n].isExtra = !0, this.daPaixing[n].totalFan = t), this.daPaixing[n].fan < o && (this.daPaixing[n].isExtra = !0, this.daPaixing[n].name = e.fanName, this.daPaixing[n].num = o, this.daPaixing[n].type = e.type)) : this.daPaixing[n] = {
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
                            a = this.settleShowItems[t] || [],
                            i = {};
                        return a.forEach((function(e) {
                            i[e.name] ? i[e.name].num += e.num : i[e.name] = n({}, e)
                        })), Object.values(i)
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
                            case m.OPE_RIGHT_CHI:
                            case m.OPE_MIDDLE_CHI:
                            case m.OPE_LEFT_CHI:
                            case m.OPE_PENG:
                            case m.OPE_QIANG_PENG:
                            case m.OPE_GANG:
                            case m.OPE_BU_GANG:
                            case m.OPE_AN_GANG:
                            case m.OPE_QIANG_GANG:
                            case m.OPE_LANG_QI:
                            case m.OPE_MING_LOU:
                            case m.OPE_MING_LV:
                            case m.OPE_QIANG_TOU_ZHI_GANG:
                            case m.OPE_QIANG_TOU_AN_GANG:
                                var n = [];
                                e.opCards.forEach((function(e) {
                                    n.push(e)
                                })), t.push(n)
                        }
                    })), t
                }, d.getTotalInfoBySeatId = function(e) {
                    var t, n, a;
                    if ((null == (t = this.settleModel) || null == (n = t.totalInfo) ? void 0 : n.length) > 0) return null == (a = this.settleModel) ? void 0 : a.totalInfo[e - 1]
                }, d.getTotalInfoByUId = function(e) {
                    var t = null;
                    return this.settleModel.totalInfo.forEach((function(n) {
                        n.userId == e && (t = n)
                    })), t
                }, d.checkChaJiao = function() {
                    var e = this.doGameCompFun("checkChaJiao", this.settleModel, this.settleType === T.HuangZhuang);
                    if (!i.isNull(e)) return e;
                    for (var t = this.settleModel.totalInfo, n = 0; n < t.length; n++)
                        if (i.isNotNull(t[n]) && 1 == i.number_valueOf(t[n].isYouJiao)) return console.log("checkChaJiao", "true", t[n].isYouJiao), !0;
                    return console.log("checkChaJiao", "false"), !1
                }, d.checkGuanSi = function() {
                    for (var e = this.settleModel.moneyItemList, t = 0; t < e.length; t++)
                        if (i.isNotNull(e[t].name) && "guan_si" == e[t].name) return console.log("checkGuanSi", "true"), !0;
                    return console.log("checkGuanSi", "false"), !1
                }, d.checkBaoSanJia = function(e) {
                    if (this.isBaoSanJia) {
                        for (var t = -1, n = this.settleModel.moneyItemList, a = 0; a < n.length; a++) t = n[a].paoSeatId;
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
                            var a = t[n];
                            if (i.isNotNull(S.GamePaiXingConfig[a.paixingId])) return console.log("checkPaiXing paixingId ", a.paixingId), a.paixingId
                        }
                    }
                    return ""
                }, d._showDoudizhuAnim = function() {
                    var e, t = this._getDoudizhuSeat(),
                        n = null == (e = y.getInstance().findPlayerWithSeatId(t)) ? void 0 : e.userId,
                        a = {
                            resConf: C.Spine_ddz,
                            aniName: "animation",
                            trackIndex: 0,
                            isLoop: !1
                        };
                    l.dispatch(f.VIEW_DESK_ANI_PLAY, g.AnimNormal.common, a, n)
                }, d.clear = function() {
                    this.liuShuiListData = []
                }, d.getLostAdConfig = function() {
                    return this._lostAdConfig
                }, d.updateLostAdConfig = function(e) {
                    this._lostAdConfig = e
                }, d.parseLiuShuiData = function() {
                    var e = this;
                    if ((null == S.GameType || S.GameType == s.XUEZHAN) && 1 != this.isShowGameOver) {
                        var t, n, a = this.dealSettleData(i.clone(this.settleModel)),
                            o = v.getInstance().mySeatId,
                            r = o - 1;
                        (null == a || null == (t = a.moneyItemList) ? void 0 : t.length) > 0 && (null == a || null == (n = a.moneyItemList) || n.forEach((function(t) {
                            var n;
                            if ((null == t || null == (n = t.p2pMoney) ? void 0 : n.length) > 0) {
                                var a = i.number_valueOf(null == t ? void 0 : t.p2pMoney[r]),
                                    s = e._getPlayerSeatId(null == t ? void 0 : t.p2pMoney, !0);
                                if (null != t.opcode && 0 != a) {
                                    h[t.opcode] && console.log("parseLiuShuiData", h[t.opcode]);
                                    var u = {
                                        money: a,
                                        name: "",
                                        fanInfo: [],
                                        fan: [],
                                        totalFan: "",
                                        totalBei: ""
                                    };
                                    if (a > 0 ? !t.name || "fan" != t.name && "cha_jiao" != t.name && "hua_zhu" != t.name ? u.name = "我" : u.name = "我对" + G.calculatePlayerPosition(o, s + 1) : 0 != a && (u.name = "被", null == t || t.p2pMoney.forEach((function(e, t) {
                                            e > 0 && (u.name += G.calculatePlayerPosition(o, t + 1) + " ")
                                        }))), 0 != t.opcode ? u.name += c[t.opcode] : u.name += c[t.name], e._checkIsShowFanOrBei(t)) {
                                        var l, d = "0",
                                            p = "0",
                                            m = e._getPlayerSeatId(null == t ? void 0 : t.p2pMoney, !1);
                                        if ((null == t || null == (l = t.fanExtendInfo) ? void 0 : l.length) > 0 && null != (null == t ? void 0 : t.fanExtendInfo[m])) {
                                            var _ = t.fanExtendInfo[m];
                                            if (_ && _.fanInfo) {
                                                var g = i.number_valueOf(_.totalFanStr || _.totalFan);
                                                _.fengDingFan && _.fengDingFan > 0 && g > _.fengDingFan ? (d = _.fengDingFan + "", p = _.fengDingFan + "") : (d = g + "", p = g + "");
                                                for (var f = 0; f < _.fanInfo.length; f++) {
                                                    var C = _.fanInfo[f].time;
                                                    null != C && C > 1 ? u.fanInfo.push(_.fanInfo[f].fanName + " X" + C) : u.fanInfo.push(_.fanInfo[f].fanName), u.fan.push(_.fanInfo[f].fan)
                                                }
                                                d += "倍", p += "倍"
                                            }
                                        }
                                        u.totalBei = p, u.totalFan = d
                                    }
                                    e.liuShuiListData.unshift(u)
                                }
                            }
                        })))
                    }
                }, d.dealSettleData = function(e) {
                    var t;
                    if ((null == e || null == (t = e.moneyItemList) ? void 0 : t.length) > 0) {
                        for (var n = [], a = e.moneyItemList, o = a.length, r = null, s = 0; s < o; s++) {
                            var u, l;
                            if ((r = a[s]) && r.name && (null == (u = r) || null == (l = u.p2pMoney) ? void 0 : l.length) > 0 && ("fan" === r.name || "cha_jiao" === r.name || "hua_zhu" === r.name)) {
                                for (var d = r.p2pMoney, c = this._getPlayerSeatId(d, !1), h = 0; h < d.length; h++)
                                    if (d[h] < 0) {
                                        var p, m = i.clone(r);
                                        m.p2pMoney[c] = -1 * d[h];
                                        for (var _ = 0; _ < m.p2pMoney.length; _++) _ != h && _ != c && (m.p2pMoney[_] = 0);
                                        if (m.fanExtendInfo && m.fanExtendInfo[h] && (null == (p = m.fanExtendInfo[h].fanInfo) ? void 0 : p.length) > 0)
                                            for (var g = m.fanExtendInfo[h].fanInfo, f = 0; f < g.length; f++)(m.fanExtendInfo[c].fanInfo || []).push(g[f]);
                                        if (m.fanExtendInfo)
                                            for (var C = 0; C < m.fanExtendInfo.length; C++) C != c && m.fanExtendInfo[C] && m.fanExtendInfo[C].fanInfo && (m.fanExtendInfo[C].fanInfo = []);
                                        n.push(m)
                                    }
                            } else n.push(r)
                        }
                        e.moneyItemList = n
                    }
                    return e
                }, d._checkIsShowFanOrBei = function(e) {
                    return !(0 != e.opcode && _[e.opcode] || e.name && _[e.name])
                }, d._getPlayerSeatId = function(e, t) {
                    for (var n = null == e ? void 0 : e.length, a = 0; a < n; a++)
                        if (t) {
                            if (e[a] < 0) return a
                        } else if (e[a] > 0) return a
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
                }, a
            }(d)).instance = null, a._RF.pop()
        }
    }
}))