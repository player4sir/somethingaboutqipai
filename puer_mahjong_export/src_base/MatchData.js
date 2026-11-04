System.register("chunks:///_virtual/MatchData.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GameConstant.ts", "./Encrypto.ts", "./BaseCache.ts"], (function(e) {
    var t, i, n, a, o, r;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            n = e.Utils
        }, function(e) {
            a = e.GConstants
        }, function(e) {
            o = e.Encrypt
        }, function(e) {
            r = e.BaseCache
        }],
        execute: function() {
            i._RF.push({}, "5cda7z0omdLp4rcjsLDW5oE", "MatchData", void 0), e("MatchData", function(e) {
                function i(t) {
                    var i;
                    return (i = e.call(this, "MatchData") || this).__User = null, i._matchList = null, i._matchDetail = null, i._matchNotifyId = "", i._matchRecord = null, i._matchRecordList = null, i._matchRoom = null, i._matchNotify = null, i._matchScore = null, i._matchStage = null, i._matchStageDingJu = null, i._matchUserBaseScore = null, i._matchUserRank = null, i._matchUserStage = null, i._matchRound = null, i._matchAward = null, i._matchReconnect = null, i._matchTimeOut = null, i.__User = t, i.initData(), i
                }
                t(i, e);
                var r = i.prototype;
                return r.initData = function() {
                    this._matchList = [], this._matchDetail = {}, this._matchRecord = null, this._matchRecordList = [], this._matchRoom = null, this._matchScore = [], this._matchStage = null, this._matchStageDingJu = null, this._matchUserBaseScore = null, this._matchUserRank = null, this._matchUserStage = null, this._matchRound = null, this._matchAward = null, this._matchReconnect = null
                }, r.clearGameCache = function() {
                    this._matchScore = [], this._matchStage = null, this._matchStageDingJu = null, this._matchUserBaseScore = null, this._matchUserRank = null, this._matchUserStage = null, this._matchRound = null, this._matchAward = null, this._matchReconnect = null
                }, r.updateMatchList = function(e) {
                    var t = this;
                    this._matchList = [], n.table_isEmpty(null == e ? void 0 : e.list) || e.list.forEach((function(e, i, n) {
                        var o = t.analyseMatchData(e);
                        o.type == a.MatchType.FIXED_TIME_MATCH && 0 == o.isfhmatch && t._matchList.push(o)
                    })), n.string_isEmpty(null == e ? void 0 : e.tmpl_id) || (this._matchNotifyId = e.tmpl_id), console.log("updateMatchList", this._matchList)
                }, r.getMatchList = function(e) {
                    void 0 === e && (e = !1);
                    var t = [];
                    if (e) {
                        var i = this.__User.getServerTime();
                        this._matchList.forEach((function(e, n, a) {
                            e.stime > i && t.push(e)
                        }))
                    } else this._matchList.forEach((function(e, i, n) {
                        t.push(e)
                    }));
                    return t.sort((function(e, t) {
                        return e.stime == t.stime ? e.listSort > 0 && t.listSort > 0 ? e.listSort - t.listSort : t.listSort - e.listSort : e.stime - t.stime
                    })), t
                }, r.getMatchById = function(e) {
                    return this._matchList.filter((function(t) {
                        return t.id === e
                    }))[0]
                }, r.getMatchNotifyId = function() {
                    return this._matchNotifyId
                }, r.analyseMatchData = function(e) {
                    var t = {
                            id: 0,
                            configid: 0,
                            gameid: 0,
                            type: 0,
                            mname: "",
                            sname: "",
                            micon: "",
                            applynum: 0,
                            allapplynum: 0,
                            fee: [],
                            status: 0,
                            stime: 0,
                            etime: 0,
                            champion: "",
                            listSort: 0,
                            requestnum: 0,
                            allowwaittime: "",
                            isfhmatch: 0,
                            looptype: 0,
                            loopintervaltime: 0,
                            loopendtime: "",
                            firstbegintime: 0,
                            endtime: 0,
                            rewardUrl: "",
                            rewardDescribe: "",
                            isVideoMatch: 0,
                            threshold: 0,
                            thresholdType: 0
                        },
                        i = function(e) {
                            var t = [];
                            return e instanceof Array && e.forEach((function(e, i) {
                                var a = function(e) {
                                    var t = [];
                                    return e instanceof Array && e.forEach((function(e, i) {
                                        var a = {
                                            type: n.number_valueOf(e.type),
                                            num: n.number_valueOf(e.num),
                                            desc: String(e.desc)
                                        };
                                        a.num > 0 && t.push(a)
                                    })), t
                                }(e);
                                a.length > 0 && t.push(a)
                            })), t
                        };
                    for (var a in t)
                        if (n.isNotNull(e[a])) {
                            var o = _typeof2(t[a]);
                            "fee" == a ? t[a] = i(e[a]) : "number" == o ? t[a] = n.number_valueOf(e[a], t[a]) : "string" == o && (t[a] = String(e[a]))
                        } return t
                }, r.isSameMatch = function(e, t) {
                    return !(!e || !t || e.type != t.type) && (e.type == a.MatchType.FIXED_TIME_MATCH && e.configid == t.configid || e.type != a.MatchType.FIXED_TIME_MATCH && e.id == t.id)
                }, r.checkMatchTime = function(e) {
                    if (n.isNotNull(e))
                        for (var t = this.getMatchSignUpList(), i = 0; i < t.length; i++)
                            if (Math.abs(t[i].stime - e.stime) <= 1200) return !1;
                    return !0
                }, r.checkThreshold = function(e) {
                    if (n.isNotNull(e) && e.threshold > 0) {
                        var t = {
                            type: e.thresholdType,
                            num: e.threshold,
                            desc: ""
                        };
                        return this.checkThresholdFee(t, e.gameid)
                    }
                    return !0
                }, r.checkThresholdFee = function(e, t) {
                    if (n.isNotNull(e)) {
                        var i = e.type,
                            o = e.num;
                        if (i == a.ThresholdType.VIP) {
                            if (this.__User.MemberData.checkIsVip()) return !0
                        } else if (i == a.ThresholdType.LEVEL) {
                            var r = this.__User.LevelData.getMyLevelInfo();
                            if (!n.table_isEmpty(r) && o - 1 <= n.number_valueOf(r.my_level_id)) return !0
                        } else {
                            if (i != a.ThresholdType.LADDER_LEVEL) return this.checkFee(e);
                            var s = n.nullToDefault(this.__User.getGamePlayRecordByKey(t, a.UserGameRecodeKey.LadderScore), 0),
                                c = this.__User.LadderData.getLadderConfigByScore(s || 0, t);
                            if (o <= n.number_valueOf(null == c ? void 0 : c.segment)) return !0
                        }
                    }
                    return !1
                }, r.checkFeeList = function(e) {
                    if (n.isNotNull(e) && !n.table_isEmpty(e.fee)) {
                        var t = !1;
                        return n.table_isEmpty(e.fee[0]) || this.checkFeeItem(e.fee[0]) && (t = !0), t
                    }
                    return !0
                }, r.checkIsPropSginup = function(e) {
                    var t = !1;
                    if (n.isNotNull(e) && !n.table_isEmpty(e.fee) && !n.table_isEmpty(e.fee[0])) {
                        t = !0;
                        for (var i = e.fee[0], o = 0; o < i.length; o++) {
                            var r = i[o].type;
                            r != a.PropertyType.SILVER_COIN && r != a.PropertyType.GOLD_BAR && r != a.PropertyType.DIAMOND || (t = !1)
                        }
                    }
                    return t
                }, r.checkFeeItem = function(e) {
                    if (!n.table_isEmpty(e))
                        for (var t = 0; t < e.length; t++)
                            if (!this.checkFee(e[t])) return !1;
                    return !0
                }, r.checkFee = function(e) {
                    if (n.isNotNull(e)) {
                        var t = e.type,
                            i = e.num;
                        if (t == a.PropertyType.SILVER_COIN || t == a.PropertyType.GOLD_BAR || t == a.PropertyType.DIAMOND) {
                            if (i <= this.__User.getUserMoneyByID(t)) return !0
                        } else {
                            var o = this.__User.BackPack.getDataByBoxItemID(t);
                            if (n.isNotNull(o) && o.number >= i && 0 != o.number) return !0
                        }
                    }
                    return !1
                }, r.checkIsLoopMatch = function(e) {
                    return !!(n.isNotNull(e) && e.looptype > a.MatchLoopType.NOT && e.looptype < a.MatchLoopType.CUSTOM)
                }, r.updateMatchDetail = function(e, t) {
                    var i = this.analyseMatchDetail(e, t);
                    this._matchDetail[i.id] = i, console.log("updateMatchDetail", i)
                }, r.getMatchDetail = function(e) {
                    return this._matchDetail[e]
                }, r.analyseMatchDetail = function(e, t) {
                    var i = {
                            id: t,
                            award: [],
                            awardcount: 0,
                            awardsmap: {},
                            desc: "",
                            estimateduration: 0,
                            icon: {},
                            stage1flag: 0,
                            stage1name: "",
                            stagegrouplist: ""
                        },
                        a = function(e) {
                            var t = [];
                            return e instanceof Array && e.forEach((function(e, i) {
                                var a = {
                                    desc: String(e.desc),
                                    icon: String(e.icon),
                                    type: n.number_valueOf(e.type)
                                };
                                t.push(a)
                            })), t
                        },
                        o = function(e) {
                            var t = [];
                            return e instanceof Array && (e.forEach((function(e, i) {
                                var o = {
                                    sort: n.number_valueOf(e.sort),
                                    rank: String(e.rank),
                                    desc: String(e.desc),
                                    awardsList: a(e.awardsList)
                                };
                                t.push(o)
                            })), e.sort((function(e, t) {
                                return e.sort - t.sort
                            }))), t
                        },
                        r = function(e) {
                            var t = {};
                            if (e instanceof Object)
                                for (var i in e) t[String(i)] = String(e[i]);
                            return t
                        };
                    for (var s in i)
                        if (n.isNotNull(e[s])) {
                            var c = _typeof2(i[s]);
                            "number" == c ? i[s] = n.number_valueOf(e[s], i[s]) : "string" == c ? i[s] = String(e[s]) : "award" == s ? i[s] = o(e[s]) : ("awardsmap" == s || "icon" == s) && (i[s] = r(e[s]))
                        } return i
                }, r.getMatchSignUpList = function() {
                    var e = [],
                        t = this.__User.getServerTime();
                    return this._matchList.forEach((function(i, n, o) {
                        i.status != a.MatchStatus.HAVE_SIGN_UP && i.status != a.MatchStatus.SIGN_UP_AND_ALLOW_JOIN_IN && i.status != a.MatchStatus.SIGN_UP_BUT_HAVE_START || i.stime - t > 0 && e.push(i)
                    })), e.sort((function(e, t) {
                        return e.stime == t.stime ? e.listSort > 0 && t.listSort > 0 ? e.listSort - t.listSort : t.listSort - e.listSort : e.stime - t.stime
                    })), e
                }, r.updateMatchRecord = function(e) {
                    this._matchRecord = this.analyseMatchRecord(e), console.log("updateMatchRecord", this._matchRecord)
                }, r.getMatchRecord = function() {
                    return this._matchRecord
                }, r.updateMatchRecordList = function(e) {
                    if (n.isNotNull(e) && !n.table_isEmpty(e.list)) {
                        for (var t = [], i = 0; i < e.list.length && !(i >= 20); i++) {
                            var a = e.list[i];
                            t.push(this.analyseMatchRecordItem(a))
                        }
                        this._matchRecordList = t
                    }
                    console.log("updateMatchRecordList", this._matchRecordList)
                }, r.getMatchRecordList = function() {
                    return this._matchRecordList
                }, r.analyseMatchRecord = function(e) {
                    var t = {
                            champion_total: 0,
                            second_place_total: 0,
                            third_place_total: 0,
                            games_data: [],
                            awards_data: [],
                            games_total: 0,
                            awards_total: 0
                        },
                        i = function(e) {
                            var t = [];
                            return e instanceof Array && e.forEach((function(e, i) {
                                var a = {
                                    gameid: n.number_valueOf(e.gameid),
                                    play_total: n.number_valueOf(e.play_total),
                                    beat_total: n.number_valueOf(e.beat_total),
                                    awards_total: n.number_valueOf(e.awards_total)
                                };
                                t.push(a)
                            })), t
                        },
                        a = function(e) {
                            var t = n.table_verify(o.JsonDecode(e)),
                                i = [];
                            for (var a in t) {
                                var r = {
                                    type: n.number_valueOf(a),
                                    value: n.number_valueOf(t[a])
                                };
                                i.push(r)
                            }
                            return i.sort((function(e, t) {
                                return e.type - t.type
                            })), i
                        };
                    for (var r in t)
                        if (n.isNotNull(e[r])) {
                            var s = _typeof2(t[r]);
                            "awards_data" == r ? t[r] = a(String(e[r])) : "games_data" == r ? t[r] = i(e[r]) : "number" == s ? t[r] = n.number_valueOf(e[r], t[r]) : "string" == s && (t[r] = String(e[r]))
                        } return t
                }, r.analyseMatchRecordItem = function(e) {
                    var t = {
                            matchname: "",
                            rank: 0,
                            playtime: 0,
                            outtime: 0,
                            beattotal: 0,
                            eliminate: 0,
                            inmatchcount: 0,
                            rewards: []
                        },
                        i = function(e) {
                            var t = [];
                            return e instanceof Array && e.forEach((function(e, i) {
                                var a = {
                                    type: n.number_valueOf(e.type),
                                    value: n.number_valueOf(e.value),
                                    stage: n.number_valueOf(e.stage)
                                };
                                t.push(a)
                            })), t
                        };
                    for (var a in t)
                        if (n.isNotNull(e[a])) {
                            var o = _typeof2(t[a]);
                            "rewards" == a ? t[a] = i(e[a]) : "number" == o ? t[a] = n.number_valueOf(e[a], t[a]) : "string" == o && (t[a] = String(e[a]))
                        } return t
                }, r.setMatchRoom = function(e) {
                    this._matchRoom = e
                }, r.getMatchRoom = function() {
                    return this._matchRoom
                }, r.setMatchNotify = function(e) {
                    this._matchNotify = e
                }, r.getMatchNotify = function() {
                    return this._matchNotify
                }, r.updateMatchBasic = function(e) {
                    this._matchRoom = this.analyseMatchData(e), console.log("updateMatchBasic", this._matchRoom)
                }, r.updateMatchTimeOut = function(e) {
                    this._matchTimeOut = e
                }, r.getMatchTimeOut = function() {
                    return this._matchTimeOut
                }, r.updateMatchScore = function(e) {
                    this._matchScore = e
                }, r.getMatchScore = function() {
                    return this._matchScore
                }, r.updateMatchStage = function(e) {
                    this._matchStage = e
                }, r.getMatchStage = function() {
                    return this._matchStage
                }, r.updateMatchStageDingJu = function(e) {
                    this._matchStageDingJu = e, this._matchUserRank = e.rankInfo
                }, r.getMatchStageDingJu = function() {
                    return this._matchStageDingJu
                }, r.updateMatchUserBaseScore = function(e) {
                    this._matchUserBaseScore = e
                }, r.getMatchUserBaseScore = function() {
                    return this._matchUserBaseScore
                }, r.updateMatchUserRank = function(e) {
                    this._matchUserRank = e
                }, r.getMatchUserRank = function() {
                    return this._matchUserRank
                }, r.updateMatchUserStage = function(e) {
                    this._matchUserStage = e
                }, r.getMatchUserStage = function() {
                    return this._matchUserStage
                }, r.updateMatchRound = function(e) {
                    this._matchRound = e, n.isNotNull(this._matchUserRank) && (this._matchUserRank.rank = e.rank)
                }, r.getMatchRound = function() {
                    return this._matchRound
                }, r.updateMatchAward = function(e) {
                    if (this._matchAward = e, n.isNotNull(this._matchUserRank) && (this._matchUserRank.rank = e.rank), !n.table_isEmpty(e.awardInfo)) {
                        var t = [];
                        e.awardInfo.forEach((function(e) {
                            t.push({
                                boxItemID: e.type,
                                changeNum: e.value
                            })
                        })), this.__User.BackPack.updateBagDataByChangeData(t)
                    }
                }, r.getMatchAward = function() {
                    return this._matchAward
                }, r.updateMatchReconnect = function(e) {
                    this._matchReconnect = e
                }, r.getMatchReconnect = function() {
                    return this._matchReconnect
                }, r.getClosestMatchCanSiginup = function(e) {
                    var t = null;
                    return this._matchList.forEach((function(i, n, o) {
                        i.status == a.MatchStatus.NOT_SIGN_UP && i.type == e.type && i.gameid == e.gameid && i.type == a.MatchType.FIXED_TIME_MATCH && i.configid == e.configid && (t = i)
                    })), console.log("getClosestMatchCanSiginup", e, t), t
                }, i
            }(r)), i._RF.pop()
        }
    }
}))