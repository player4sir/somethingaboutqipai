System.register("chunks:///_virtual/MatchController.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./UIConfig.ts", "./InterfaceDefines.ts", "./EventManager.ts", "./BaseController.ts", "./Platform.ts", "./GlobalCmd.ts", "./MatchStateMechine.ts", "./PopupController.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f, m;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            n = e.Utils
        }, function(e) {
            a = e.GCache
        }, function(e) {
            o = e.AppEvent
        }, function(e) {
            r = e.GConstants
        }, function(e) {
            s = e.UIID
        }, function(e) {
            c = e.inf_GameSceneType
        }, function(e) {
            l = e.EventManager
        }, function(e) {
            u = e.BaseController
        }, function(e) {
            d = e.Platform
        }, function(e) {
            _ = e.GlobalCmdHeadPHP, h = e.GlobalCmdHead
        }, function(e) {
            p = e.MatchStateMechine, f = e.MatchStateAction
        }, function(e) {
            m = e.PopupController
        }],
        execute: function() {
            i._RF.push({}, "3f276nlAuVBn7rtSs0cBSk/", "MatchController", void 0), e("MatchController", function(e) {
                function i(t) {
                    var i, n;
                    return (n = e.call(this, t) || this)._matchDataSignUp = null, n._matchDataNotify = null, n._matchDataUnSignUp = null, n._matchReconnect = !1, n.event_defents = ((i = {})[o.NET_REQ_MATCH_LIST] = "reqMatchList", i[o.NET_RESP_MATCH_LIST] = "respMatchList", i[o.NET_REQ_MATCH_DETAIL] = "reqMatchDetail", i[o.NET_RESP_MATCH_DETAIL] = "respMatchDetail", i[o.NET_REQ_MATCH_BASIC] = "reqMatchBasic", i[o.NET_RESP_MATCH_BASIC] = "respMatchBasic", i[o.NET_REQ_MATCH_RECORD] = "reqMatchRecord", i[o.NET_RESP_MATCH_RECORD] = "respMatchRecord", i[o.NET_REQ_MATCH_RECORD_LIST] = "reqMatchRecordList", i[o.NET_RESP_MATCH_RECORD_LIST] = "respMatchRecordList", i[o.NET_REQ_MATCH_SIGNUP] = "reqMatchSignUp", i[o.NET_RESP_MATCH_SIGNUP] = "respMatchSignUp", i[o.NET_RESP_MATCH_SIGNUP_ENTER] = "respMatchSignUpEnter", i[o.NET_RESP_MATCH_SIGNUP_FAIL] = "respMatchSignUpFail", i[o.BROADCAST_MATCH_ENTER] = "broadcastMatchEnter", i[o.NET_REQ_MATCH_UNSIGNUP] = "reqMatchUnSignUp", i[o.NET_RESP_MATCH_UNSIGNUP] = "respMatchUnSignUp", i[o.NET_RESP_MATCH_UNSIGNUP_FAIL] = "respMatchUnSignUpFail", i[o.NET_REQ_MATCH_UPDATE_PEOPLE] = "reqMatchUpdatePeople", i[o.NET_RESP_MATCH_UPDATE_PEOPLE] = "respMatchUpdatePeople", i[o.BROADCAST_MATCH_START_TIMEOUT] = "broadcastMatchStartTimeout", i[o.BROADCAST_MATCH_START] = "broadcastMatchStart", i[o.BROADCAST_MATCH_SCORE] = "broadcastMatchScore", i[o.BROADCAST_MATCH_STAGE] = "broadcastMatchStage", i[o.BROADCAST_MATCH_DINGJU_STAGE] = "broadcastDingJuMatchStage", i[o.BROADCAST_MATCH_USER_BASE_SCORE] = "broadcastMatchUserBaseScore", i[o.BROADCAST_MATCH_USER_RANK] = "broadcastMatchUserRank", i[o.BROADCAST_MATCH_USER_STAGE] = "broadcastMatchUserStage", i[o.BROADCAST_MATCH_WAIT_TABLE] = "broadcastMatchWaitTable", i[o.BROADCAST_MATCH_ROUND_OVER] = "broadcastMatchRoundOver", i[o.BROADCAST_MATCH_ROUND_OVER_PROMOTION] = "broadcastMatchRoundOverPromotion", i[o.BROADCAST_MATCH_CONTINUE] = "broadcastMatchContinue", i[o.BROADCAST_MATCH_OVER] = "broadcastMatchOver", i[o.BROADCAST_MATCH_AWARD] = "broadcastMatchAward", i[o.BROADCAST_MATCH_RECONNECT] = "broadcastMatchReconnect", i[o.SHOW_MATCH_NOTIFY] = "showMatchNotify", i[o.EXIT_MATCH_HALL] = "exitMatchHall", i[o.TEST_MATCH] = "test", i), n._matchUpdateTimeList = [], n._matchUpdateTimeMap = {}, n._matchUpdateTimehandler = null, n.registerListeners(), n
                }
                t(i, e), i.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new i("MatchController")), this._instance
                }, i.init = function() {
                    this._instance && this._instance.clear(), this._instance = null, i.getInstance()
                };
                var u = i.prototype;
                return u.updateMatchTimeList = function() {
                    var e = this,
                        t = a.MatchData.getMatchList();
                    this.stopScheduler(this._matchUpdateTimehandler), this._matchUpdateTimeList = [], this._matchUpdateTimeMap = {};
                    var i = a.User.getServerTime();
                    this.print("比赛列表 serverTime", i), t.forEach((function(t, n, s) {
                        if (e.print("比赛列表 比赛数据", t.mname, t.stime), t.type == r.MatchType.FIXED_TIME_MATCH && (t.stime > i ? (e.addMatchTimeListItem(t.stime + 2, o.UPDATE_MATCH_LIST, null), e.addMatchTimeListItem(t.stime + 3, o.NET_REQ_MATCH_LIST, null)) : a.MatchData.checkIsLoopMatch(t) && (e.print("比赛定时器启动 循环赛定时请求", t), e.addMatchTimeListItem(t.stime + 60, o.NET_REQ_MATCH_LIST, null)), t.status == r.MatchStatus.HAVE_SIGN_UP)) {
                            var c = t.stime - 600;
                            c > i && e.addMatchTimeListItem(c, o.NOTIFY_MATCH_TIPS, t)
                        }
                    })), this._matchUpdateTimeList.sort((function(e, t) {
                        return t - e
                    })), this.print("比赛定时器启动", this._matchUpdateTimeList), this._matchUpdateTimehandler = this.addScheduler(1, (function() {
                        if (e._matchUpdateTimeList.length > 0) {
                            for (var t = a.User.getServerTime(), i = {}, n = e._matchUpdateTimeList.length - 1; n >= 0; n--) {
                                var o = e._matchUpdateTimeList[n];
                                if (o <= t) {
                                    for (var r in e._matchUpdateTimeMap[o]) i[r] ? i[r] = i[r].concat(e._matchUpdateTimeMap[o][r]) : i[r] = e._matchUpdateTimeMap[o][r];
                                    e._matchUpdateTimeList.pop(), e._matchUpdateTimeMap[o] = null
                                }
                            }
                            for (var s in i) {
                                e.print("比赛定时器触发事件", s, i[s]);
                                var c = !1;
                                if (i[s])
                                    for (var u = 0; u < i[s].length; u++) i[s][u] ? (e.print("比赛定时器处理有参事件", s, i[s][u]), l.dispatch(s, i[s][u])) : c = !0;
                                c && (e.print("赛定时器处理无参事件", s), l.dispatch(s))
                            }
                        }
                    }))
                }, u.addMatchTimeListItem = function(e, t, i) {
                    var n;
                    this._matchUpdateTimeMap[e] ? this._matchUpdateTimeMap[e][t] ? this._matchUpdateTimeMap[e][t].push(i) : this._matchUpdateTimeMap[e][t] = [i] : (this._matchUpdateTimeMap[e] = ((n = {})[t] = [i], n), this._matchUpdateTimeList.push(e))
                }, u.removeMatchTimeListItemByEvent = function(e) {
                    if (this._matchUpdateTimeList.length > 0)
                        for (var t = this._matchUpdateTimeList.length - 1; t >= 0; t--) {
                            var i = this._matchUpdateTimeList[t],
                                n = this._matchUpdateTimeMap[i];
                            n[e] && (n[e] = null)
                        }
                }, u.exitMatchHall = function(e) {
                    this.removeMatchTimeListItemByEvent(o.NET_REQ_MATCH_LIST)
                }, u.showMatchNotify = function(e, t) {
                    this.print("showMatchNotify", t);
                    var i = n.number_valueOf(t, 0);
                    i > 0 && this.reqMatchBasic("", i, "hall")
                }, u.reqMatchList = function(e) {
                    var t = {
                        cmd: _.PHP_REQUEST_MATCH_LIST,
                        body: {
                            ids: {}
                        }
                    };
                    this.print("请求比赛列表", t), l.dispatch(o.NET_SEND_MSG, t)
                }, u.respMatchList = function(e, t, i, r) {
                    this.print("请求比赛列表返回", i, t, r), t && n.isNotNull(i) && (a.MatchData.updateMatchList(i), this.updateMatchTimeList(), l.dispatch(o.UPDATE_MATCH_LIST))
                }, u.reqMatchDetail = function(e, t, i) {
                    if (void 0 === i && (i = 0), !n.isNull(t)) {
                        var a = i > 0 ? 1 : 0,
                            r = {
                                cmd: _.PHP_REQUEST_MATCH_DETAIL,
                                body: {
                                    matchid: t,
                                    matchstatus: a,
                                    groupId: i
                                }
                            };
                        this.print("请求比赛详情", r), l.dispatch(o.NET_SEND_MSG, r)
                    }
                }, u.respMatchDetail = function(e, t, i, r) {
                    this.print("请求比赛详情返回", i, t, r), t && n.isNotNull(i) && n.isNotNull(r) && n.isNotNull(r.matchid) && (a.MatchData.updateMatchDetail(i, r.matchid), l.dispatch(o.UPDATE_MATCH_DETAIL))
                }, u.reqMatchBasic = function(e, t, i) {
                    if (!n.isNull(t)) {
                        var a = {
                            cmd: _.PHP_REQUEST_MATCH_BASIC,
                            body: {
                                matchid: t,
                                scene: i
                            }
                        };
                        this.print("比赛基本数据", a), l.dispatch(o.NET_SEND_MSG, a)
                    }
                }, u.respMatchBasic = function(e, t, i, r) {
                    if (this.print("请求比赛基本数据返回", i, t, r), t && n.isNotNull(r) && n.isNotNull(i))
                        if ("hall" == (null == r ? void 0 : r.scene)) {
                            a.MatchData.updateMatchBasic(i);
                            var c = a.MatchData.getMatchRoom(),
                                u = c.stime - a.User.getServerTime(),
                                d = Math.max(u, 0),
                                _ = Math.floor(d % 3600 / 60),
                                h = n.string_format("<color=#808080>您报名的比赛将于</color><color=#FF3434> {0} </color><color=#808080>分钟后开赛。</color>", _);
                            m.getInstance().onOpenView("", s.MatchHallTipsPrefab, {
                                type: 1,
                                title: "温馨提示",
                                data: h,
                                callback: function(e) {
                                    "confirm" == e && l.dispatch(o.NET_REQ_MATCH_SIGNUP, c)
                                }
                            }, null, null, !0)
                        } else "reconnect" == (null == r ? void 0 : r.scene) && (a.MatchData.updateMatchBasic(i), l.dispatch(o.UPDATE_MATCH_BASIC), this.onMatchReconnnect())
                }, u.reqMatchRecord = function(e) {
                    var t = {
                        cmd: _.PHP_MATCH_RECORD_STATISTICS,
                        body: {
                            mid: a.User.getUserMid()
                        }
                    };
                    this.print("请求比赛战绩", t), l.dispatch(o.NET_SEND_MSG, t)
                }, u.respMatchRecord = function(e, t, i, r) {
                    this.print("请求比赛战绩返回", i, t, r), t && n.isNotNull(i) && (a.MatchData.updateMatchRecord(i), l.dispatch(o.UPDATE_MATCH_RECORD))
                }, u.reqMatchRecordList = function(e) {
                    var t = {
                        cmd: _.PHP_MATCH_RECORD_MATCH_LIST,
                        body: {
                            page: 1
                        }
                    };
                    this.print("请求比赛战绩列表", t), l.dispatch(o.NET_SEND_MSG, t)
                }, u.respMatchRecordList = function(e, t, i, r) {
                    this.print("请求比赛战绩列表返回", i, t, r), t && n.isNotNull(i) && (a.MatchData.updateMatchRecordList(i), l.dispatch(o.UPDATE_MATCH_RECORD_LIST))
                }, u.reqMatchSignUp = function(e, t) {
                    if (this.print("请求比赛报名", t), !n.isNull(t)) {
                        var i = {
                            cmd: h.MATCH_DINGJU_RQUEST_SIGHUP,
                            body: {
                                mid: a.User.getUserMid(),
                                userInfo: a.User.getUserLoginInfoByIntoGame(t.gameid),
                                id: t.id
                            }
                        };
                        if (l.dispatch(o.NET_SEND_MSG, i), this._matchDataSignUp = t, this._matchDataSignUp.status == r.MatchStatus.NOT_SIGN_UP && d.isWXPlatform()) {
                            this._matchDataNotify = this._matchDataSignUp;
                            var s = a.MatchData.getMatchNotifyId();
                            d.requestSubscribeMessage([s], this.onSuccessSubscribeMessage.bind(this), this.onFailSubscribeMessage.bind(this))
                        }
                    }
                }, u.respMatchSignUp = function(e, t) {
                    if (this.print("请求比赛报名成功", t), !n.table_isEmpty(t.userInfo)) {
                        var i = n.number_valueOf(t.userInfo.money, -1),
                            c = (n.number_valueOf(t.userInfo.diamond, -1), n.number_valueOf(t.userInfo.silver, -1));
                        i >= 0 && a.User.updateUserMoneyByID(r.PropertyType.SILVER_COIN, i), c >= 0 && a.User.updateUserMoneyByID(r.PropertyType.GOLD_BAR, c)
                    }
                    if (n.isNotNull(this._matchDataSignUp))
                        if (this._matchDataSignUp.status = r.MatchStatus.HAVE_SIGN_UP, this._matchDataSignUp.applynum = this._matchDataSignUp.applynum + 1, this._matchDataSignUp.allapplynum = this._matchDataSignUp.allapplynum + 1, this.print("报名比赛成功 ", this._matchDataSignUp), l.dispatch(o.UPDATE_MATCH_SIGNUP, this._matchDataSignUp), this._matchReconnect) a.User.IsRoom && this.reqMatchUnSignUp("", this._matchDataSignUp);
                        else if (this._matchDataSignUp.type == r.MatchType.FIXED_TIME_MATCH) {
                        var u = n.string_format("<color=#808080>您报名的比赛将于</color><color=#FF3434> {0} </color><color=#808080>开赛，请准时来参赛。</color>", n.timeParse(this._matchDataSignUp.stime, "{1}月{2}日\n{3}:{4}", !0));
                        m.getInstance().onOpenView("", s.MatchHallTipsPrefab, {
                            type: 1,
                            title: "报名成功",
                            data: u
                        }, null, null, !0)
                    }
                    this._matchDataSignUp = null
                }, u.onSuccessSubscribeMessage = function(e) {
                    this.print("订阅比赛消息成功", e);
                    var t = e[a.MatchData.getMatchNotifyId()];
                    "accept" == t ? n.isNotNull(this._matchDataNotify) && l.dispatch(o.NET_REQ_APPIONTMENT_SUB, 5, this._matchDataNotify.id, this._matchDataNotify.stime) : "reject" == t ? l.dispatch(o.SYS_TOAST_TIP, {
                        content: "请点击右上角‘···’图标，进入设置界面，打开订阅消息的接收通知"
                    }) : l.dispatch(o.SYS_TOAST_TIP, {
                        content: "订阅失败"
                    }), this._matchDataNotify = null
                }, u.onFailSubscribeMessage = function(e) {
                    this.print("订阅比赛消息失败", e), this._matchDataNotify = null
                }, u.respMatchSignUpEnter = function(e, t) {
                    if (this.print("请求比赛报名成功 进入等待", t), !n.table_isEmpty(t.userInfo)) {
                        var i = n.number_valueOf(t.userInfo.money, -1),
                            s = (n.number_valueOf(t.userInfo.diamond, -1), n.number_valueOf(t.userInfo.silver, -1));
                        i >= 0 && a.User.updateUserMoneyByID(r.PropertyType.SILVER_COIN, i), s >= 0 && a.User.updateUserMoneyByID(r.PropertyType.GOLD_BAR, s)
                    }
                    if (t.type > 0) {
                        var u = [],
                            d = a.BackPack.getDataByBoxItemID(t.type);
                        d ? u.push({
                            boxItemID: t.type,
                            changeNum: t.num - d.number
                        }) : u.push({
                            boxItemID: t.type,
                            changeNum: t.num
                        }), a.BackPack.updateBagDataByChangeData(u)
                    }
                    n.isNotNull(this._matchDataSignUp) && (this._matchDataSignUp.status = r.MatchStatus.SIGN_UP_AND_ALLOW_JOIN_IN, l.dispatch(o.UPDATE_MATCH_SIGNUP, this._matchDataSignUp), this._matchReconnect ? a.User.IsRoom && this.reqMatchUnSignUp("", this._matchDataSignUp) : a.User.IsRoom ? (a.MatchData.setMatchRoom(this._matchDataSignUp), this.onMatchReset()) : (a.MatchData.setMatchRoom(this._matchDataSignUp), p.instance.init(), p.instance.execute(f.MatchLoad), a.SelectGame.checkIntoMatchRoom(this._matchDataSignUp.gameid, this._matchDataSignUp, c.Match))), this._matchDataSignUp = null
                }, u.respMatchSignUpFail = function(e, t) {
                    this.print("请求比赛报名失败", t), this._matchDataSignUp = null;
                    var i = t.errorType,
                        a = t.errorMsg;
                    this._matchReconnect ? (i == r.MatchSignUpError.ALREADY_SIGN_UP ? (p.instance.init(), p.instance.execute(f.MatchLoad)) : l.dispatch(o.NET_REQ_LOGOUT_IN_GAME_FORCE), this._matchReconnect = !1) : n.string_isEmpty(a) ? i == r.MatchSignUpError.FATAL_ERROR ? l.dispatch(o.SYS_TOAST_TIP, {
                        content: "服务器信息获取失败"
                    }) : i == r.MatchSignUpError.MATCH_NOT_EXSITS ? l.dispatch(o.SYS_TOAST_TIP, {
                        content: "比赛信息获取失败，请重试"
                    }) : i == r.MatchSignUpError.NOT_ENOUGH_ENTRY_FEE ? l.dispatch(o.SYS_TOAST_TIP, {
                        content: "老板，赚够钱再来吧！土豪请随意充值~"
                    }) : i == r.MatchSignUpError.MATH_IS_PLAYING ? l.dispatch(o.SYS_TOAST_TIP, {
                        content: "老板，比赛都快结束了你才来！"
                    }) : i == r.MatchSignUpError.ALREADY_SIGN_UP || (i == r.MatchSignUpError.NOT_REACH_TIME ? l.dispatch(o.SYS_TOAST_TIP, {
                        content: "老板，时间未到,稍安勿躁~"
                    }) : i == r.MatchSignUpError.SIGN_UP_ERROR || i == r.MatchSignUpError.MATCH_OVER_MAX_USER && l.dispatch(o.SYS_TOAST_TIP, {
                        content: "老板，比赛太火爆了，已经没有位置了！下场请您提前光临！"
                    })) : l.dispatch(o.SYS_TOAST_TIP, {
                        content: a
                    })
                }, u.broadcastMatchEnter = function(e, t) {
                    if (this.print("广播比赛进入", t), !n.table_isEmpty(t)) {
                        var i = a.MatchData.getMatchById(t.id);
                        if (!n.table_isEmpty(i))
                            if (i.status = r.MatchStatus.SIGN_UP_AND_ALLOW_JOIN_IN, a.User.IsRoom) l.dispatch(o.NOTIFY_MATCH_TIPS, i);
                            else {
                                var c = n.string_format("<color=#808080>您报名的比赛将于</color><color=#FF3434> {0} </color><color=#808080>分钟后开赛。</color>", t.min || 5);
                                m.getInstance().onOpenView("", s.MatchHallTipsPrefab, {
                                    type: 1,
                                    title: "温馨提示",
                                    data: c,
                                    callback: function(e) {
                                        "confirm" == e && l.dispatch(o.NET_REQ_MATCH_SIGNUP, i)
                                    }
                                }, null, null, !0), l.dispatch(o.UPDATE_BROADCAST_MATCH_ENTER, i)
                            }
                    }
                }, u.reqMatchUnSignUp = function(e, t) {
                    if (this.print("请求比赛退赛", t), !n.isNull(t)) {
                        var i = {
                            cmd: h.MATCH_DINGJU_MATCH_WITHDRAW_REQUEST,
                            body: {
                                id: t.id
                            }
                        };
                        l.dispatch(o.NET_SEND_MSG, i), this._matchDataUnSignUp = t
                    }
                }, u.respMatchUnSignUp = function(e, t) {
                    if (this.print("请求比赛退赛成功", t), !n.table_isEmpty(t.userInfo)) {
                        var i = n.number_valueOf(t.userInfo.money, -1),
                            s = (n.number_valueOf(t.userInfo.diamond, -1), n.number_valueOf(t.userInfo.silver, -1));
                        i >= 0 && a.User.updateUserMoneyByID(r.PropertyType.SILVER_COIN, i), s >= 0 && a.User.updateUserMoneyByID(r.PropertyType.GOLD_BAR, s)
                    }
                    if (1 == t.hasProp) {
                        var c = [],
                            u = a.BackPack.getDataByBoxItemID(t.type);
                        u ? c.push({
                            boxItemID: t.type,
                            changeNum: t.num - u.number
                        }) : c.push({
                            boxItemID: t.type,
                            changeNum: t.num
                        }), a.BackPack.updateBagDataByChangeData(c)
                    }
                    n.isNotNull(this._matchDataUnSignUp) ? this._matchReconnect ? (l.dispatch(o.NET_REQ_LOGOUT_IN_GAME_FORCE), this._matchReconnect = !1) : (this._matchDataUnSignUp.status = r.MatchStatus.NOT_SIGN_UP, this._matchDataUnSignUp.applynum = Math.max(this._matchDataUnSignUp.applynum - 1, 0), this._matchDataUnSignUp.allapplynum = Math.max(this._matchDataUnSignUp.allapplynum - 1, 0), l.dispatch(o.UPDATE_MATCH_UNSIGNUP, this._matchDataUnSignUp)) : this.reqMatchList(), this._matchDataUnSignUp = null
                }, u.respMatchUnSignUpFail = function(e, t) {
                    this.print("请求比赛退赛失败", t), this._matchDataUnSignUp = null, this._matchReconnect = !1;
                    var i = t.errorType;
                    i == r.MatchUnSignUpError.MATCH_PLAYING ? l.dispatch(o.SYS_TOAST_TIP, {
                        content: "游戏已经开始，退赛失败!"
                    }) : i == r.MatchUnSignUpError.MATCH_UNSIGNUP ? l.dispatch(o.SYS_TOAST_TIP, {
                        content: "您未报名或已经被淘汰，退赛失败!"
                    }) : i == r.MatchUnSignUpError.MATCH_UNKNOW ? l.dispatch(o.SYS_TOAST_TIP, {
                        content: "退赛失败!"
                    }) : i == r.MatchUnSignUpError.USER_NOT_EXSITS ? a.User.IsRoom && l.dispatch(o.NET_REQ_LOGOUT_IN_GAME_FORCE) : i == r.MatchUnSignUpError.MATCH_START ? l.dispatch(o.SYS_TOAST_TIP, {
                        content: "比赛即将开始，不允许退赛"
                    }) : l.dispatch(o.SYS_TOAST_TIP, {
                        content: "退赛失败"
                    })
                }, u.reqMatchUpdatePeople = function(e, t) {
                    if (this.print("请求比赛实时报名人数", t), !n.isNull(t)) {
                        var i = {
                            cmd: h.MATCH_DINGJU_MATCH_UPDATEPEOPLE_REQUEST,
                            body: {
                                mid: a.User.getUserMid(),
                                id: t.id
                            }
                        };
                        l.dispatch(o.NET_SEND_MSG, i)
                    }
                }, u.respMatchUpdatePeople = function(e, t) {
                    this.print("回复比赛实时报名人数", t);
                    var i = a.MatchData.getMatchRoom();
                    n.table_isEmpty(i) || (i.allapplynum = t.playerNum, i.requestnum = t.playerNumRequest, l.dispatch(o.UPDATE_MATCH_UPDATE_PEOPLE, i), l.dispatch(o.UPDATE_MATCH_GAME_INFO))
                }, u.broadcastMatchStartTimeout = function(e, t) {
                    if (this.print("广播比赛开始超时", t), !n.table_isEmpty(t.userInfo)) {
                        var i = n.number_valueOf(t.userInfo.money, -1),
                            s = (n.number_valueOf(t.userInfo.diamond, -1), n.number_valueOf(t.userInfo.silver, -1));
                        i >= 0 && a.User.updateUserMoneyByID(r.PropertyType.SILVER_COIN, i), s >= 0 && a.User.updateUserMoneyByID(r.PropertyType.GOLD_BAR, s)
                    }
                    a.MatchData.updateMatchTimeOut(t), a.User.IsRoom && l.dispatch(o.UPDATE_MATCH_START_TIMEOUT)
                }, u.broadcastMatchStart = function(e) {
                    this.print("广播比赛开始"), p.instance.execute(f.MatchStart);
                    var t = a.MatchData.getMatchRoom();
                    l.dispatch(o.NET_REQ_MATCH_UPDATE_PEOPLE, t)
                }, u.broadcastMatchScore = function(e, t) {
                    this.print("广播比赛积分信息", t), a.MatchData.updateMatchScore(t), l.dispatch(o.UPDATE_MATCH_SCORE_INFO, t)
                }, u.broadcastMatchStage = function(e, t) {
                    this.print("广播比赛阶段信息", t), a.MatchData.updateMatchStage(t), l.dispatch(o.UPDATE_MATCH_GAME_INFO)
                }, u.broadcastDingJuMatchStage = function(e, t) {
                    this.print("广播比赛定局阶段信息", t), a.MatchData.updateMatchStageDingJu(t), l.dispatch(o.UPDATE_MATCH_GAME_INFO)
                }, u.broadcastMatchUserBaseScore = function(e, t) {
                    this.print("广播比赛当前底分", t), a.MatchData.updateMatchUserBaseScore(t), l.dispatch(o.UPDATE_MATCH_GAME_INFO)
                }, u.broadcastMatchUserRank = function(e, t) {
                    this.print("广播比赛当前排名", t), a.MatchData.updateMatchUserRank(t), l.dispatch(o.UPDATE_MATCH_GAME_INFO)
                }, u.broadcastMatchUserStage = function(e, t) {
                    this.print("广播比赛当前阶段", t), a.MatchData.updateMatchUserStage(t), l.dispatch(o.UPDATE_MATCH_GAME_INFO)
                }, u.broadcastMatchWaitTable = function(e) {
                    this.print("广播比赛配桌"), l.dispatch(o.UPDATE_MATCH_WAIT_TABLE, !0)
                }, u.broadcastMatchRoundOver = function(e, t) {
                    this.print("广播比赛轮结束", t), a.MatchData.updateMatchRound(t), l.dispatch(o.UPDATE_MATCH_GAME_INFO), p.instance.execute(f.MatchWait)
                }, u.broadcastMatchRoundOverPromotion = function(e, t) {
                    this.print("广播比赛轮结束晋级", t), a.MatchData.updateMatchRound(t), l.dispatch(o.UPDATE_MATCH_GAME_INFO), p.instance.execute(f.MatchWait)
                }, u.broadcastMatchContinue = function(e) {
                    this.print("广播比赛继续"), p.instance.execute(f.MatchContinue)
                }, u.broadcastMatchOver = function(e) {
                    this.print("广播比赛结束"), p.instance.execute(f.MatchEnd)
                }, u.broadcastMatchAward = function(e, t) {
                    this.print("广播比赛发奖", t), a.MatchData.updateMatchAward(t), l.dispatch(o.UPDATE_MATCH_GAME_INFO), p.instance.execute(f.MatchEnd), p.instance.execute(f.MatchSettle)
                }, u.broadcastMatchReconnect = function(e, t) {
                    this.print("广播比赛重连", t), this._matchReconnect = !1, a.MatchData.updateMatchReconnect(t), p.instance.init(), p.instance.execute(f.MatchLoad), p.instance.execute(f.MatchStart)
                }, u.onViewLoad = function() {
                    this.print("onViewLoad");
                    var e = a.SelectGame.intoGameData;
                    e.isReconn ? (this._matchReconnect = !0, this.reqMatchBasic("", e.MatchID, "reconnect"), this.reqMatchDetail("", e.MatchID)) : this.reqMatchDetail("", e.MatchID), p.instance.reconnect()
                }, u.onClearGameCache = function() {
                    p.instance.clear(), a.MatchData.clearGameCache()
                }, u.onMatchReset = function() {
                    p.instance.execute(f.MatchReset);
                    var e = a.MatchData.getMatchRoom();
                    this.reqMatchBasic("", e.id, "1"), this.reqMatchDetail("", e.id), a.MatchData.clearGameCache(), p.instance.execute(f.MatchLoad)
                }, u.onMatchReconnnect = function() {
                    this.print("onMatchReonnnect");
                    var e = a.MatchData.getMatchRoom();
                    if (n.table_isEmpty(e)) l.dispatch(o.NET_REQ_LOGOUT_IN_GAME_FORCE), this._matchReconnect = !1;
                    else {
                        this.reqMatchUpdatePeople("", e);
                        var t = a.SelectGame.intoGameData;
                        this.print("onMatchReconnnectSignUp intoGameData ", t), t.TableID, this.reqMatchSignUp("", e)
                    }
                }, u.test = function(e, t) {
                    "room" == t ? this.testMatchRoom() : "notify" == t && this.testMatchNotify()
                }, u.testMatchNotify = function() {
                    var e = a.MatchData.getMatchList();
                    e.length > 0 && l.dispatch(o.NOTIFY_MATCH_TIPS, e[0])
                }, u.testMatchRoom = function() {
                    this.broadcastMatchStart(""), this.broadcastMatchStage("", {
                        stageInfo: [{
                            name: "打立出局",
                            number: 12,
                            rounds: [0]
                        }, {
                            name: "半决赛",
                            number: 4,
                            rounds: [1]
                        }, {
                            name: "决赛",
                            number: 1,
                            rounds: [2]
                        }],
                        daliInfo: {
                            weedoutNum: 20,
                            promotionNum: 20
                        },
                        roundInfo: [{
                            number: 16
                        }, {
                            number: 16
                        }, {
                            number: 12
                        }, {
                            number: 8
                        }, {
                            number: 4
                        }, {
                            number: 1
                        }]
                    }), this.broadcastMatchRoundOver("", {
                        stage: 2,
                        stageName: 3,
                        notFinishTable: 2,
                        rank: 4,
                        rankList: [],
                        roundIndex: 2,
                        playerNum: 28,
                        roundNum: 6,
                        roundInfo: [{
                            number: 16
                        }, {
                            number: 16
                        }, {
                            number: 12
                        }, {
                            number: 8
                        }, {
                            number: 4
                        }, {
                            number: 1
                        }]
                    })
                }, i
            }(u))._instance = null, i._RF.pop()
        }
    }
}))