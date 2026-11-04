System.register("chunks:///_virtual/User.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./Logger.ts", "./Utils.ts", "./AppEvent.ts", "./GameConstant.ts", "./GameRes.ts", "./ReportConfig.ts", "./UserInfo.ts", "./Encrypto.ts", "./LocalStorage.ts", "./EventManager.ts", "./BaseCache.ts", "./GameInfo.ts", "./Platform.ts", "./Activity.ts", "./BackPack.ts", "./BankrupData.ts", "./DecorationData.ts", "./exchangeShop.ts", "./SquareData.ts", "./LadderData.ts", "./LevelData.ts", "./MailInfo.ts", "./MatchData.ts", "./MemberData.ts", "./NoticePup.ts", "./PrivateData.ts", "./PropsConf.ts", "./RankData.ts", "./RecommendPop.ts", "./RedDot.ts", "./SelectGame.ts", "./ShareInfo.ts", "./ShopInfo.ts", "./SubContext.ts", "./WatchMessage.ts", "./WxShareData.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f, m, g, E, v, T, R, P, y, C, S, A, I, D, N, O, b, L, M, G, k, U, B, w, H, F, q, V, x;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, i = e.createClass
        }, function(e) {
            n = e.cclegacy
        }, function(e) {
            a = e.ClientInfo
        }, function(e) {
            o = e.Logger
        }, function(e) {
            r = e.Utils
        }, function(e) {
            s = e.AppEvent
        }, function(e) {
            c = e.GConstants, l = e.StoreKey, u = e.CloundKey
        }, function(e) {
            d = e.GameRes
        }, function(e) {
            _ = e.ReportConfig
        }, function(e) {
            h = e.getRandomNick, p = e.getUserInfo
        }, function(e) {
            f = e.Encrypt
        }, function(e) {
            m = e.LocalStorage
        }, function(e) {
            g = e.EventManager
        }, function(e) {
            E = e.BaseCache
        }, function(e) {
            v = e.GameInfo
        }, function(e) {
            T = e.Platform
        }, function(e) {
            R = e.Activity
        }, function(e) {
            P = e.BackPack
        }, function(e) {
            y = e.BankrupData
        }, function(e) {
            C = e.DecorationData
        }, function(e) {
            S = e.ExchangeShop
        }, function(e) {
            A = e.SquareData
        }, function(e) {
            I = e.LadderData
        }, function(e) {
            D = e.LevelData
        }, function(e) {
            N = e.MailInfo
        }, function(e) {
            O = e.MatchData
        }, function(e) {
            b = e.MemberData
        }, function(e) {
            L = e.NoticePup
        }, function(e) {
            M = e.PrivateData
        }, function(e) {
            G = e.PropsConf
        }, function(e) {
            k = e.RankData
        }, function(e) {
            U = e.RecommendPop
        }, function(e) {
            B = e.RedDot
        }, function(e) {
            w = e.SelectGame
        }, function(e) {
            H = e.ShareInfo
        }, function(e) {
            F = e.ShopInfo
        }, function(e) {
            q = e.SubContext
        }, function(e) {
            V = e.WatchMessage
        }, function(e) {
            x = e.WxShareData
        }],
        execute: function() {
            n._RF.push({}, "6813cBGxvlBNY29sAnSqXu8", "User", void 0), e("User", function(e) {
                function n() {
                    var t;
                    return (t = e.call(this, "User") || this).__activity = null, t.__recommendPop = null, t.__bankrupData = null, t.__shopInfo = null, t.__mailInfo = null, t.__watchMessage = null, t.__selectGame = null, t.__shareInfo = null, t.__backPack = null, t.__propsConf = null, t.__redDot = null, t.__matchData = null, t.__privateData = null, t.__wxShareData = null, t.__ladderData = null, t.__subContext = null, t._exchangeShop = null, t._gameInfo = null, t.__levelData = null, t.__memberData = null, t.__noticePup = null, t.__decorationData = null, t._loginState = 0, t._loginRoomState = !1, t._userInfo = {}, t._propertyInfo = {}, t._historyLoginInfo = null, t._lastlocalLoginInfo = null, t._loginSuccessCountArray = null, t._levelExpConfig = null, t._propsInfo = {}, t._vipInfo = {}, t._vipConfigData = null, t._vipProtectCount = 0, t._vipProtectUseCount = 0, t._vipProtectTotalCount = 0, t._gamePlayInfoRecord = {}, t._loginSuccessTime = null, t._todayEventData = null, t._clickedRecordData = null, t.showFriend_scene = "hall", t.__rankData = void 0, t.__squareData = void 0, t._loginHistory = {}, t._isInRoom = !1, t._serverTime = 0, t._diffTime = 0, t._isReportTXGD = !1, t._isFirstLogin = !0, t.init(), t.initSubClass(), t
                }
                t(n, e);
                var E = n.prototype;
                return E.initSubClass = function() {
                    this.print(">>>>初始化附加类<<<<"), this.__recommendPop = new U(this), this.__shopInfo = new F(this), this.__mailInfo = new N(this), this.__watchMessage = new V(this), this.__selectGame = new w(this), this.__shareInfo = new H(this), this.__activity = new R(this), this.__bankrupData = new y(this), this.__redDot = new B(this), this.__backPack = new P(this), this.__propsConf = new G(this), this.__matchData = new O(this), this.__privateData = new M(this), this.__wxShareData = new x(this), this.__subContext = new q(this), this.__ladderData = new I(this), this.__rankData = new k(this), this.__squareData = new A(this), this._exchangeShop = new S(this), this.__levelData = new D(this), this.__memberData = new b(this), this.__noticePup = new L(this), this._gameInfo = new v(this), this.__decorationData = new C(this)
                }, E.init = function() {
                    this.getLastlocalLoginInfo()
                }, E.onloadLoginSuccessParams = function(e, t, i, n) {
                    void 0 === n && (n = {}), e = r.table_verify(e), t = r.table_verify(t), i = r.table_verify(i), e.mid = Number(r.nullToDefault(e.mid, -1)), e.guid = r.nullToDefault(e.guid, ""), e.appid = Number(r.nullToDefault(e.appid, -1)), e.province = e.province, e.region = e.region, e.nick = r.nullToDefault(e.nick, ""), e.status = Number(r.nullToDefault(e.status, -1)), e.lastlogin = Number(e.lastlogin), e.sex = Number(r.nullToDefault(e.sex, 1)), e.join = Number(e.join), e.ssid = r.nullToDefault(e.ssid, ""), e.city = r.nullToDefault(e.city, ""), e.platformid = r.nullToDefault(e.platformid, ""), e.bagvol = e.bagvol, e.cid = e.cid, e.friend_des = e.friend_des, e.silverCrystalFlag = e.silverCrystalFlag, e.is_guide_by = e.is_guide_by, e.age = Number(r.nullToDefault(e.age, 0)), e.is_real_name_auth = e.is_real_name_auth || !1, e.vipLevel = Number(r.nullToDefault(e.vipLevel, 0)), e.vipPrivileges = e.vipPrivileges, e.isFirstLogin = 0 == Number(r.nullToDefault(e.isFirstLogin, 0)), e.avatar_auditing = Number(r.nullToDefault(e.avatar_auditing, -1)), e.byacc = e.byacc, e.headBox = r.nullToDefault(e.hdIcon, ""), e.hometown = e.hometown, e.avatar_s = r.nullToDefault(e.avatar_s, ""), e.avatar_m = r.nullToDefault(e.avatar_m, ""), e.avatar_b = r.nullToDefault(e.avatar_b, ""), e.avatar_auditing = Number(r.nullToDefault(e.avatar_auditing, -1)), e.avatar_audit = r.nullToDefault(e.avatar_audit, ""), e.joinRoomCode = String(r.nullToDefault(e.joinRoomCode, "0")), t.exp = r.nullToDefault(Number(t.exp), 0), t.money = r.nullToDefault(Number(t.money), 0), t.totalmoney = r.nullToDefault(Number(t.totalmoney), 0), t.safebox = r.nullToDefault(Number(t.safebox), 0), t.crystal = r.nullToDefault(Number(t.crystal), 0), t.crystalsafebox = r.nullToDefault(Number(t.crystalsafebox), 0), t.jyb = r.nullToDefault(Number(t.jyb), 0), t.silver = Number(t.silver), i.access_token = r.nullToDefault(i.access_token, ""), i.bid = i.bid, i.login_type = Number(i.login_type), i.guid = r.nullToDefault(i.guid, "").toString().trim(), i.register = Number(i.register), i.utype = Number(i.utype), this.saveCurLoginInfo(e, t, i, n), o.dump(e), o.dump(t), o.dump(i), o.dump(n), this.updateLoginHistory(), this.reportQuery(), i.openId && g.dispatch(s.EVENT_SET_SDK_OPENID, i.openId), this.tXAdReport();
                    var a = {
                        type: c.PropertyType.SILVER_COIN,
                        num: t.money
                    };
                    g.dispatch(s.USER_UPDATE_PROPERTY, a)
                }, E.reportQuery = function() {
                    var e = T.getEnterOptionsSync(),
                        t = e.query;
                    if (e && t && (t.qz_gdt || t.gdt_vid || t.click_id || t.channel) && !this._isReportTXGD) {
                        var i = this.getUserMid();
                        console.log("腾讯广告ReportConfig.user_login_data", {
                            userId: i,
                            _query: t,
                            appVer: a.AppVer,
                            isRegisterToday: this.isRegisterToday(),
                            CurrentDayLoginTimes: this.getCurrentDayLoginTimes(),
                            isFirstLoginCurrow: this.isFirstLoginCurrow()
                        }), g.dispatch(s.REPORT_CLIENT_CLICK, {
                            eventID: _.user_login_data,
                            body: {
                                userId: i,
                                _query: t,
                                appVer: a.AppVer,
                                isRegisterToday: this.isRegisterToday(),
                                currentDayLoginTimes: this.getCurrentDayLoginTimes(),
                                isFirstLoginCurrow: this.isFirstLoginCurrow()
                            },
                            isFouce: !0
                        })
                    }
                }, E.tXAdReport = function() {
                    if (!this._isReportTXGD) {
                        this._isReportTXGD = !0;
                        var e = !1,
                            t = "",
                            i = T.getEnterOptionsSync(),
                            n = i.query;
                        if (i && n && (n.qz_gdt || n.gdt_vid || n.click_id || n.channel)) t = n.qz_gdt || n.gdt_vid || n.click_id || n.channel, T.setUserTraceId(t), e = !0;
                        else {
                            var a = T.getUserTraceId();
                            a && (t = a, e = !0)
                        }
                        g.dispatch(s.REPORT_CLIENT_CLICK, {
                            eventID: _.txgg_report_90022,
                            body: {
                                isADUser: e,
                                _query: n,
                                traceId: t,
                                isRegisterToday: this.isRegisterToday(),
                                currentDayLoginTimes: this.getCurrentDayLoginTimes(),
                                isFirstLoginCurrow: this.isFirstLoginCurrow()
                            },
                            isFouce: !0
                        });
                        var o = this.getUserMid(),
                            u = r.string_format(l.USER_LOGIN_LAST_TIME, o),
                            d = m.get(u, null);
                        if (d || (d = this.getDataUser("lastlogin", null)), this.isRegisterToday() && 1 == this.getCurrentDayLoginTimes()) setTimeout((function() {
                            e && (g.dispatch(s.REPORT_CLIENT_CLICK, {
                                eventID: _.user_register,
                                body: {
                                    userId: o,
                                    _query: n,
                                    traceId: t
                                },
                                isFouce: !0
                            }), g.dispatch(s.NET_REQ_REPORT_TX_GD, c.TXGDActionType.REGISTER)), g.dispatch(s.NET_REQ_REPORT_TX_GD_SDK, c.TXGDActionType.REGISTER)
                        }), 500), setTimeout((function() {
                            e && (g.dispatch(s.REPORT_CLIENT_CLICK, {
                                eventID: _.user_create_role,
                                body: {
                                    userId: o,
                                    _query: n,
                                    traceId: t
                                },
                                isFouce: !0
                            }), g.dispatch(s.NET_REQ_REPORT_TX_GD, c.TXGDActionType.CREATE_ROLE)), g.dispatch(s.NET_REQ_REPORT_TX_GD_SDK, c.TXGDActionType.CREATE_ROLE)
                        }), 1e3);
                        else if (d) {
                            var h = r.time();
                            if (h - d > 2592e3 && 1 == this.getCurrentDayLoginTimes()) setTimeout((function() {
                                e && (g.dispatch(s.REPORT_CLIENT_CLICK, {
                                    eventID: _.user_re_active,
                                    body: {
                                        userId: o,
                                        lastLoginTime: d,
                                        currentTime: h
                                    },
                                    isFouce: !0
                                }), g.dispatch(s.NET_REQ_REPORT_TX_GD, c.TXGDActionType.RE_ACTIVE)), g.dispatch(s.NET_REQ_REPORT_TX_GD_SDK, c.TXGDActionType.RE_ACTIVE)
                            }), 500);
                            else {
                                var p = this.getDataUser("join", 0),
                                    f = new Date,
                                    E = new Date(f);
                                E.setDate(f.getDate() - 1), r.time_isSampleDay(1e3 * p, E.getTime()) && 1 == this.getCurrentDayLoginTimes() && setTimeout((function() {
                                    e && (g.dispatch(s.REPORT_CLIENT_CLICK, {
                                        eventID: _.user_one_day_leave,
                                        body: {
                                            userId: o
                                        },
                                        isFouce: !0
                                    }), g.dispatch(s.NET_REQ_REPORT_TX_GD, c.TXGDActionType.ONE_DAY_LEAVE)), g.dispatch(s.NET_REQ_REPORT_TX_GD_SDK, c.TXGDActionType.ONE_DAY_LEAVE)
                                }), 500)
                            }
                        }
                    }
                }, E.updateLoginHistory = function() {
                    var e = r.timeToDataArray(r.timeEx()),
                        t = r.string_format("{0}_{1}_{2}", e.year, e.month, e.day);
                    this.getUserLoginHistoryList(), this._loginHistory[t] ? this._loginHistory[t]++ : this._loginHistory[t] = 1, this.setUserLoginHistoryList(), console.log("this._loginHistory", this._loginHistory)
                }, E.setLoginState = function(e) {
                    var t = this._loginState;
                    this._loginState = e, e == c.UserLoginState.LoginSuccess && t != c.UserLoginState.LoginSuccess && (this.updateLastLoginTime(), this._todayEventData = null, this.LoginRoomState = !1, this.updateLocalDataByLoginSuccess(), g.dispatch(s.LOGIN_STATE_CHANGE, this._loginState)), t == c.UserLoginState.LoginSuccess && e != c.UserLoginState.LoginSuccess && (this._loginSuccessTime = null, this.LoginRoomState = !1, g.dispatch(s.LOGIN_STATE_CHANGE, this._loginState))
                }, E.updateLocalDataByLoginSuccess = function() {
                    var e = m.get(l.SYS_ClientVer, a.AppVer);
                    0 == (String(e) == String(a.AppVer)) || this.RecommendPop.reloadLocalData(), this.SelectGame.initHallGameConfigByLocal(), this.PropsConf.initDataByLocal(), this.MailInfo.getDataByLocal(), this.RedDot.reloadLocalData(), this.DecorationData.getDataByLocal()
                }, E.setTodayLocalRecord = function(e, t) {
                    if (void 0 === t && (t = null), r.string_isEmpty(e)) return !1;
                    var i = String(this.getUserMid()),
                        n = r.string_format(l.USER_TODAY_EVENT, i);
                    if (!this._todayEventData) {
                        var a = m.get(n, null);
                        a = f.JsonDecode(a), a = r.table_verify(a), this._todayEventData = a
                    }
                    return e = String(e), this._todayEventData[e] = t, this.print("更新用户今日事件==> key:", e, t, this._todayEventData), m.set(n, f.JsonEncode2(this._todayEventData)), !0
                }, E.getTodayLocalRecord = function(e, t) {
                    if (void 0 === t && (t = null), r.string_isEmpty(e)) return null;
                    if (!this._todayEventData) {
                        var i = String(this.getUserMid()),
                            n = r.string_format(l.USER_TODAY_EVENT, i),
                            a = m.get(n, null);
                        a = f.JsonDecode(a), a = r.table_verify(a), this._todayEventData = a
                    }
                    return e = String(e), console.log("获取用户今日事件==>", e, this._todayEventData[e]), null != this._todayEventData[e] ? this._todayEventData[e] : t
                }, E.updateLastLoginTime = function() {
                    this._loginSuccessTime = r.time();
                    var e = r.string_format(l.USER_LOGIN_LAST_TIME, this.getUserMid()),
                        t = m.get(e, null);
                    null != t && 0 != r.time_isSampleDay(this._loginSuccessTime, t) || this.cleanTodayLocalRecord(), m.set(e, this._loginSuccessTime)
                }, E.cleanTodayLocalRecord = function() {
                    var e = String(this.getUserMid()),
                        t = r.string_format(l.USER_TODAY_EVENT, e);
                    m.set(t, null), this._todayEventData = null, console.log("清除今日记录结果", m.get(t))
                }, E.updateClickRecord = function(e) {
                    if (r.string_isEmpty(e)) return !1;
                    var t = String(this.getUserMid()),
                        i = r.string_format(l.USER_CLICKED_RECORD, t);
                    if (!this._clickedRecordData) {
                        var n = m.get(i, null);
                        n = f.JsonDecode(n), n = r.table_verify(n), this._clickedRecordData = n
                    }
                    return e = String(e), this._clickedRecordData[e] = r.number_valueOf(this._clickedRecordData[e], 0) + 1, this.print("更新用户点击操作次数==> key:", e, this._clickedRecordData[e], this._clickedRecordData), m.set(i, f.JsonEncode2(this._clickedRecordData)), !0
                }, E.getClickRecord = function(e) {
                    if (r.string_isEmpty(e)) return null;
                    if (!this._clickedRecordData) {
                        var t = String(this.getUserMid()),
                            i = r.string_format(l.USER_CLICKED_RECORD, t),
                            n = m.get(i, null);
                        n = f.JsonDecode(n), n = r.table_verify(n), this._clickedRecordData = n
                    }
                    return e = String(e), console.log("获取用户点击操作次数==>", e, this._clickedRecordData[e]), r.number_valueOf(this._clickedRecordData[e], 0)
                }, E.getLoginState = function() {
                    return this._loginState
                }, E.isLoginSuccesed = function() {
                    return this._loginState == c.UserLoginState.LoginSuccess
                }, E.isLogining = function() {
                    return this._loginState == c.UserLoginState.Logining
                }, E.saveCurLoginInfo = function(e, t, i, n) {
                    void 0 === n && (n = {}), this.setData("user", e), this.setData("game", t), this.setData("account", i);
                    var o = {
                        imsi: a.IMSI,
                        mid: e.mid,
                        guid: e.guid,
                        byacc: e.byacc,
                        nick: e.nick,
                        sex: e.sex,
                        uType: i.uType,
                        token: i.access_token,
                        bid: i.bid,
                        phoneNum: i.phone,
                        loginType: i.login_type,
                        registerTime: e.join
                    };
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && null == o[r] && (o[r] = n[r]);
                    this.saveLastlocalLoginInfo(o), o.uType == c.UserUType.BoyaaPassport && this.addAccountInfo(e.byacc, null, i.bid, i.access_token)
                }, E.getDataUser = function(e, t) {
                    if (void 0 === e && (e = null), void 0 === t && (t = null), e) {
                        var i = this.getData("user");
                        if (i && null != i[e] && null != i[e]) return i[e]
                    }
                    return t
                }, E.setDataUser = function(e, t) {
                    if (void 0 === e && (e = null), void 0 === t && (t = null), e) {
                        var i = this.getData("user");
                        i && (i[e] = t)
                    }
                }, E.getDataGame = function(e, t) {
                    if (void 0 === e && (e = null), e) {
                        var i = this.getData("game");
                        if (i && null != i[e] && null != i[e]) return i[e]
                    }
                    return null
                }, E.getDataAccount = function(e, t) {
                    if (void 0 === e && (e = null), e) {
                        var i = this.getData("account");
                        if (null != i[e] && null != i[e]) return i[e]
                    }
                    return null
                }, E.updateDataUserKey = function(e, t) {
                    if (void 0 === e && (e = null), void 0 === t && (t = null), e) {
                        var i = this.getData("user");
                        i && null != i[e] && null != i[e] && (i[e] = t, this.setData("user", i))
                    }
                }, E.getLoginSuccessTime = function() {
                    return this._loginSuccessTime
                }, E.updateDataGameKey = function(e, t) {
                    if (void 0 === e && (e = null), void 0 === t && (t = null), e) {
                        var i = this.getData("game");
                        i && null != i[e] && null != i[e] && (i[e] = t, this.setData("game", i))
                    }
                }, E.updateDataAccountKey = function(e, t) {
                    if (void 0 === e && (e = null), void 0 === t && (t = null), e) {
                        var i = this.getData("account");
                        i && null != i[e] && null != i[e] && (i[e] = t, this.setData("account", i))
                    }
                }, E.saveLastlocalLoginInfo = function(e) {
                    var t = f.JsonEncode2(e);
                    "" == t ? m.remove(l.LOGIN_LAST_INFO) : m.set(l.LOGIN_LAST_INFO, t), this._lastlocalLoginInfo = null
                }, E.cleanLastlocalLoginInfo = function() {
                    m.set(l.LOGIN_LAST_INFO, null), this._lastlocalLoginInfo = null
                }, E.cleanLastlocalLoginToken = function() {
                    this._lastlocalLoginInfo && (this._lastlocalLoginInfo.token = null, this.saveLastlocalLoginInfo(this._lastlocalLoginInfo)), this._lastlocalLoginInfo = null
                }, E.getLastlocalLoginInfo = function() {
                    if (!this._lastlocalLoginInfo) {
                        var e = m.get(l.LOGIN_LAST_INFO, null);
                        "string" == typeof e && e.length ? (this._lastlocalLoginInfo = f.JsonDecode(e), this._isFirstLogin = !1) : this._isFirstLogin = !0
                    }
                    return this._lastlocalLoginInfo
                }, E.getIsFirstLogin = function() {
                    return this._isFirstLogin
                }, E.getLastLoginValueByKey = function(e, t) {
                    return void 0 === t && (t = null), e && this._lastlocalLoginInfo && this._lastlocalLoginInfo[e] || t
                }, E.getLastlocalLoginType = function() {
                    return this._lastlocalLoginInfo && this._lastlocalLoginInfo.loginType || c.UserLoginType.NONE
                }, E.getLastlocalLoginToken = function() {
                    return this._lastlocalLoginInfo ? this._lastlocalLoginInfo.token : null
                }, E.getLastlocalLoginServerConf = function() {
                    return this._lastlocalLoginInfo ? this._lastlocalLoginInfo.serverConf : null
                }, E.getLastlocalByacc = function() {
                    return this._lastlocalLoginInfo && this._lastlocalLoginInfo.byacc || null
                }, E.getLastlocalToken = function() {
                    return this._lastlocalLoginInfo && this._lastlocalLoginInfo.token || null
                }, E.getLastlocalMid = function() {
                    return this._lastlocalLoginInfo && this._lastlocalLoginInfo.mid || null
                }, E.getRandomNick = function(e) {
                    return 0 == e.length ? this._lastlocalLoginInfo && this._lastlocalLoginInfo.nick || h() : this._lastlocalLoginInfo && e == this._lastlocalLoginInfo.guid ? this._lastlocalLoginInfo.nick : h()
                }, E.getUserInfoProp = function(e) {
                    return void 0 === e && (e = null), e ? r.isNull(this._userInfo[e]) ? null : this._userInfo[e] : this._userInfo
                }, E.setIdentity = function(e) {
                    void 0 === e && (e = 0), this.setData("Identity", e)
                }, E.getIdentity = function() {
                    return r.number_valueOf(this.getData("Identity"), 0)
                }, E.getIsPayUser = function() {
                    var e = this.getIdentity();
                    return e == c.UserIdentity.Rmb || e == c.UserIdentity.RmbAndVip
                }, E.getUserMid = function(e) {
                    return void 0 === e && (e = null), this.getDataUser("mid", e)
                }, E.getUserCid = function(e) {
                    return void 0 === e && (e = null), this.getDataUser("cid", this.getDataUser("mid", e))
                }, E.getUserAppID = function(e) {
                    return void 0 === e && (e = null), this.getDataUser("appid", e)
                }, E.getUserGuid = function(e) {
                    return void 0 === e && (e = null), this.getDataUser("guid", e)
                }, E.getUserName = function(e) {
                    void 0 === e && (e = null);
                    var t = this.getDataUser("nick", e);
                    return r.string_subNameString(t, 6, 10)
                }, E.getUserSex = function(e) {
                    return void 0 === e && (e = null), this.getDataUser("sex", e)
                }, E.getUserCity = function(e) {
                    return void 0 === e && (e = null), this.getDataUser("city", e)
                }, E.getUserHeadArray = function(e) {
                    return void 0 === e && (e = null), {
                        s: this.getDataUser("avatar_s", e),
                        m: this.getDataUser("avatar_m", e),
                        b: this.getDataUser("avatar_b", e)
                    }
                }, E.getUserHeadBox = function(e) {
                    return void 0 === e && (e = null), this.getDataUser("headBox", e)
                }, E.getUserJoinRoomCode = function(e) {
                    return void 0 === e && (e = null), this.getDataUser("joinRoomCode", e)
                }, E.setUserJoinRoomCode = function(e) {
                    void 0 === e && (e = null), this.setDataUser("joinRoomCode", e)
                }, E.getUserDiamond = function(e) {
                    return void 0 === e && (e = null), this.getDataGame("jyb", null == e ? 0 : e)
                }, E.getUserCrystal = function(e) {
                    return void 0 === e && (e = null), this.getDataGame("crystal", null == e ? 0 : e)
                }, E.getUserCrystalSafeBox = function(e) {
                    return void 0 === e && (e = null), this.getDataGame("crystalsafebox", null == e ? 0 : e)
                }, E.getUserSilver = function(e) {
                    void 0 === e && (e = null);
                    var t = this.getDataGame("money", null == e ? 0 : e);
                    return this.print("获取总银币==>", t), t
                }, E.getUserGameSilver = function(e) {
                    return void 0 === e && (e = null), this.getUserSilver(e)
                }, E.getUserGameExp = function(e) {
                    return void 0 === e && (e = null), this.getDataGame("exp", null == e ? 0 : e)
                }, E.getUserMoneyByID = function(e, t) {
                    return void 0 === e && (e = 0), void 0 === t && (t = !1), e = r.number_valueOf(e), this.print("根据货币类型 获取用户身上的money===>moneyID=", e), 0 == e ? t ? Math.max(this.getUserSilver(), 0) : Math.max(this.getUserGameSilver(), 0) : e == c.PropertyType.GOLD_BAR ? t ? this.getUserCrystal() + this.getUserCrystalSafeBox() : this.getUserCrystal() : e == c.PropertyType.DIAMOND ? this.getUserDiamond() : 0
                }, E.updateUserMoneyByID = function(e, t, i) {
                    if (void 0 === e && (e = 0), !r.isNull(t)) {
                        var n = null,
                            a = null;
                        if (e == c.PropertyType.SILVER_COIN) n = this.getDataGame("money", 0), this.updateDataGameKey("money", t), a = this.getDataGame("money", n), this.__bankrupData.checkBankrupt(), this.__selectGame.updateMoney();
                        else if (e == c.PropertyType.GOLD_BAR) n = this.getDataGame("crystal", 0), this.updateDataGameKey("crystal", t), a = this.getDataGame("crystal", n);
                        else {
                            if (e != c.PropertyType.DIAMOND) return;
                            n = this.getDataGame("jyb", 0), this.updateDataGameKey("jyb", t), a = this.getDataGame("jyb", n)
                        }
                        if (null != n && n != a) {
                            this.print(">>>资产有变更 货币类型:" + e + " 变更前:" + n + " 变更后:" + a);
                            var o = {
                                type: e,
                                num: a,
                                mid: this.getUserMid()
                            };
                            g.dispatch(s.USER_UPDATE_PROPERTY, o)
                        }
                    }
                }, E.isFirstLoginToday = function() {
                    if (1 == this.getLoginSuccessCount(this.getUserMid())) {
                        if (this.isRegisterToday()) return !0;
                        var e = this.getDataUser("lastlogin", null),
                            t = r.time();
                        return r.time_isSampleDay(e, t)
                    }
                    return !1
                }, E.isFirstLoginCurrow = function() {
                    var e = this.getUserMid();
                    return !(!this.isFirstLoginToday() || r.string_isEmpty(e)) && 1 == this.getLoginSuccessCount(e)
                }, E.isRegisterToday = function() {
                    var e = this.getDataUser("join", null),
                        t = r.time();
                    return !r.isNull(e) && r.time_isSampleDay(e, t)
                }, E.getAccountHistory = function() {
                    return this._historyLoginInfo || (this._historyLoginInfo = m.get(l.LOGIN_USER_HISTORY, null), this._historyLoginInfo && (this._historyLoginInfo = f.JsonDecode(this._historyLoginInfo))), this._historyLoginInfo || {}
                }, E.updateAccountHistory = function(e) {
                    if (!r.string_isEmpty(e)) {
                        var t = f.JsonEncode2(e);
                        return t && m.set(l.LOGIN_USER_HISTORY, t), this.getAccountHistory()
                    }
                }, E.addAccountInfo = function(e, t, i, n) {
                    if (!r.string_isEmpty(e)) {
                        for (var a = this.getAccountHistory(), o = 0; o < a.length; o++) {
                            var s = a[o];
                            if (s && s.loginAccount == e) {
                                a.splice(o, 0);
                                break
                            }
                        }
                        var c = {
                            loginAccount: e,
                            loginPsd: t,
                            access_token: n
                        };
                        a.unshift(c), this.updateAccountHistory(a)
                    }
                }, E.checkIsExsitAccountInfo = function(e) {
                    for (var t = this.getAccountHistory(), i = !1, n = null, a = {}, o = 0; o < t.length; o++) {
                        var r = t[n];
                        if (r.loginAccount && r.loginAccount == e) {
                            i = !0, n = o, a = r;
                            break
                        }
                    }
                    return [i, n, a]
                }, E.updateLoginSuccessCount = function() {
                    var e = this.getUserMid();
                    if (r.string_isEmpty(e)) return null;
                    var t = this.getLoginSuccessCount(e);
                    this._loginSuccessCountArray[e] = t + 1;
                    var i = f.JsonEncode2(this._loginSuccessCountArray);
                    return r.string_isEmpty(i) ? (i = null, null) : (this.print("更新登录次数成功的记录 ==>new = " + this._loginSuccessCountArray[e]), m.set(l.LOGIN_SUCCESS_COUNT, i), this._loginSuccessCountArray[e])
                }, E.updateLevelExpConfig = function(e) {
                    if (!r.isNull(e)) {
                        var t = ["exp", "name", "level"];
                        this._levelExpConfig = [];
                        var i = new Map;
                        for (var n in e)
                            if (Object.prototype.hasOwnProperty.call(e, n)) {
                                var a = e[n];
                                a && (a = this.mergeArray(t, a)), a && i.set(n, a)
                            } if (i.size > 0) {
                            var o = Array.from(i);
                            o.sort((function(e, t) {
                                return e[0] - t[0]
                            }));
                            for (var s = 0; s < o.length; s++) o[s][1].level = o[s][0], this._levelExpConfig.push(o[s][1])
                        }
                        return this._levelExpConfig
                    }
                }, E.getLevelExpConfig = function() {
                    return this._levelExpConfig
                }, E.getLevelByExp = function(e, t) {
                    if (void 0 === t && (t = 0), !this._levelExpConfig) return t;
                    e = r.number_valueOf(e);
                    for (var i = null, n = 0; n < this._levelExpConfig.length; n++) {
                        var a = this._levelExpConfig[n];
                        if (a && 0 == r.isNull(a.exp)) {
                            if (r.number_valueOf(a.exp) > e) {
                                this._levelExpConfig[n - 1] && (i = this._levelExpConfig[n - 1].level);
                                break
                            }
                            if (r.number_valueOf(a.exp) == e) {
                                i = this._levelExpConfig[n].level;
                                break
                            }
                        }
                    }
                    if (!i) {
                        var o = this._levelExpConfig[this._levelExpConfig.length - 1];
                        r.number_valueOf(o.exp < e) && (i = o.level)
                    }
                    return i
                }, E.updatePropsInfo = function(e) {
                    if (!r.isNull(e)) {
                        var t = {},
                            i = null;
                        for (var n in e = r.table_verify(e))
                            if (Object.prototype.hasOwnProperty.call(e, n)) {
                                var a = {
                                    type: r.number_valueOf(e[n].propsType, -1),
                                    expires: r.number_valueOf(e[n].expires, 0),
                                    allowTimes: r.number_valueOf(e[n].allow_times, 0),
                                    updateTime: r.time()
                                };
                                a.type == c.UserPropsType.TYPE_VIP && (i = a), t[a.type] = a
                            } this.setVipInfo(i), this._propsInfo = t
                    }
                }, E.getPropsInfo = function() {
                    return this._propsInfo || {}
                }, E.getPropsInfoByType = function(e) {
                    return r.isNull(e) ? null : this._propsInfo[e] || null
                }, E.getPropsNumInfoByType = function(e) {
                    var t = this.getPropsInfoByType(e),
                        i = 0;
                    if (t) {
                        if (this.isExpireProps(e)) return 0;
                        i = t.allowTimes
                    }
                    return i
                }, E.isExpireProps = function(e) {
                    var t = this.getPropsInfoByType(e);
                    return !t || !(t.expires <= 0) && r.time() - t.updateTime >= t.expires
                }, E.setVipInfo = function(e) {
                    if (r.table_isEmpty(e)) this.setIdentity(c.UserIdentity.Normal);
                    else if ((null == e ? void 0 : e.type) == c.UserPropsType.TYPE_VIP) {
                        var t = this.getIsPayUser();
                        this.setVipTime(e.expires), t ? this.setIdentity(c.UserIdentity.RmbAndVip) : this.setIdentity(c.UserIdentity.Vip)
                    }
                }, E.setVipTime = function(e) {
                    var t = r.number_valueOf(e);
                    this.setData("vipTime", t)
                }, E.getLoginSuccessCount = function(e) {
                    if (!this._loginSuccessCountArray || !this._loginSuccessCountArray[e]) {
                        var t = m.get(l.LOGIN_SUCCESS_COUNT, null);
                        t && (t = f.JsonDecode(t)), this._loginSuccessCountArray = r.table_verify(t)
                    }
                    var i = 0;
                    return r.isNull(this._loginSuccessCountArray[e]) || (i = this._loginSuccessCountArray[e], i = Number(i)), this.print("登录成功的次数===>" + i), i
                }, E.calTakeOutHowMuchMoney = function(e, t, i, n) {
                    var a = 2 * e - i;
                    return a = Math.min(a, n - i), -1 != t && (a = Math.min(a, t - i - 1)), a
                }, E.getUserLoginInfoByIntoGame = function(e) {
                    if (e = r.number_valueOf(e, null), r.isNull(e)) return null;
                    var t = this.getUserHeadArray(),
                        i = {
                            platform: "miniGame",
                            userId: this.getUserMid(0),
                            cid: this.getUserCid(0),
                            nickName: this.getUserName(""),
                            sex: this.getUserSex(1),
                            city: this.getUserCity(""),
                            gold: this.getUserGameSilver(0),
                            money: this.getUserGameSilver(0),
                            diamond: this.getUserDiamond(0),
                            crystal: this.getUserCrystal(),
                            m_identity: this.getIdentity(),
                            avatar_s: t.s || "",
                            avatar_m: t.m || "",
                            avatar_b: t.b || "",
                            headBox: this.getUserHeadBox(""),
                            userHeadBox: this.DecorationData.getUserHeadBox(),
                            userChatBox: this.DecorationData.getUserChatBox(),
                            userEnterAnim: this.DecorationData.getUserEnterAnim(),
                            userClock: this.DecorationData.getUserClock(),
                            userHandCard: this.DecorationData.getUserHandCard(),
                            level: this.getLevelByExp(this.getUserGameExp(0), 0),
                            exp: this.getUserGameExp(0),
                            loseCount: r.nullToDefault(this.getGamePlayRecordByKey(e, c.UserGameRecodeKey.Lose), 0),
                            winCount: r.nullToDefault(this.getGamePlayRecordByKey(e, c.UserGameRecodeKey.Win), 0),
                            drawCount: r.nullToDefault(this.getGamePlayRecordByKey(e, c.UserGameRecodeKey.Draw), 0),
                            ladderScore: r.nullToDefault(this.getGamePlayRecordByKey(e, c.UserGameRecodeKey.LadderScore), 0),
                            friendTotal: r.nullToDefault(this.getGamePlayRecordByKey(e, c.UserGameRecodeKey.FriendTotal), -1),
                            friendWin: r.nullToDefault(this.getGamePlayRecordByKey(e, c.UserGameRecodeKey.FriendWin), -1),
                            appid: this.getUserAppID(),
                            vipLevel: r.nullToDefault(this.getUserCurrentVipLevel(), -1),
                            ladderRank: this.getGamePlayRecordByKey(this.__selectGame.getCurGameId(), c.UserGameRecodeKey.CurrentRank) || 0,
                            subVersion: this.__selectGame.getGameVersionByGameID(e),
                            charm: r.nullToDefault(this.getGamePlayRecordByKey(e, c.UserGameRecodeKey.Charm), 0),
                            levelSystemScore: r.nullToDefault(this.__levelData.getMyLevelInfo().my_expr, 0),
                            isVip: r.nullToDefault(this.__memberData.checkIsVip(), !1),
                            switch: 1,
                            openId: this.getDataAccount("openId")
                        },
                        n = m.get(l.USER_CHARM_INFO, null);
                    if (n) {
                        n = JSON.parse(n);
                        var a = Number(n[this.getUserMid(0)]);
                        i.charm = i.charm >= a ? i.charm : a
                    }
                    return i
                }, E.syncGamePlayRecord = function(e, t) {
                    if (e = this.checkGameId(e), r.isNull(e)) return null;
                    var i = this.mergeArrayDefault({
                        silver_total: 0,
                        silver_win: 0,
                        friend_total: 0,
                        friend_win: 0,
                        today_total: 0,
                        today_win: 0,
                        wintimes: 0,
                        losetimes: 0,
                        drawtimes: 0,
                        winmax: 0,
                        points: 0,
                        group: "",
                        eloscore: 0,
                        current_rank: 0,
                        history_rank: 0,
                        history_eloscore: 0,
                        season_name: "",
                        stime: 0,
                        etime: 0,
                        last_eloscore: 0,
                        charm: 0,
                        levelSystemScore: 0,
                        isVip: !1,
                        playrecords_game_ids: [],
                        prirecords_game_ids: []
                    }, t);
                    return i && (this._gamePlayInfoRecord[e] = i), this._gamePlayInfoRecord[e]
                }, E.getGamePlayInfoRecord = function(e) {
                    return e = this.checkGameId(e), this._gamePlayInfoRecord[e] || this.syncGamePlayRecord(e, null), this._gamePlayInfoRecord[e]
                }, E.getGamePlayInfoRecordData = function(e) {
                    return e = this.checkGameId(e), this._gamePlayInfoRecord[e]
                }, E.getGamePlayRecordByKey = function(e, t) {
                    return void 0 === t && (t = null), e = this.checkGameId(e), r.isNull(e) || r.isNull(this._gamePlayInfoRecord[e]) ? null : r.isNull(t) ? this._gamePlayInfoRecord[e] : this._gamePlayInfoRecord[e][t]
                }, E.updateGamePlayRecordByKey = function(e, t, i) {
                    if (void 0 === t && (t = null), void 0 === i && (i = null), e = this.checkGameId(e), r.isNull(e)) return null;
                    if (r.isNull(this._gamePlayInfoRecord[e])) return null;
                    if (null !== i) this._gamePlayInfoRecord[e][t] = i;
                    else {
                        var n = this._gamePlayInfoRecord[e][t];
                        "number" == typeof n && (this._gamePlayInfoRecord[e][t] = n + 1)
                    }
                    return this._gamePlayInfoRecord[e][t]
                }, E.getCloudStorageSaveList = function(e) {
                    var t = this;
                    void 0 === e && (e = null);
                    var i = this.getUserInfoProp("picture_frame");
                    T.downloadFile(i, (function(n) {
                        i = 200 === n.code ? n.filePath : "";
                        var a = [{
                            key: u.USER_LOGIN_TIME,
                            value: t.getLoginSuccessTime()
                        }, {
                            key: u.USER_HEAD_FRAME,
                            value: i
                        }, {
                            key: u.USER_UID,
                            value: t.getUserMid()
                        }];
                        e && e(a)
                    }))
                }, E.getCloudStorageKeys = function() {
                    return [u.USER_LOGIN_TIME, u.USER_HEAD_FRAME, u.USER_UID]
                }, E.getCloudStorageParam = function() {
                    var e = r.string_format(l.LOGIN_USER_OPENID, this.getUserMid()),
                        t = m.get(e, "");
                    console.log("当前用户的openid", t);
                    var i = {};
                    return r.table_verify(this.__shareInfo.ShareConfig.friend) && (this.__shareInfo.getShareConfigByType(c.ShareSceneConf.friend), i = {
                        title: this.__shareInfo.getFriendsShareText(),
                        imageUrl: d.AppCommon_Share_Friend_Comm.path
                    }), console.log("邀请好友分享的数据", i), {
                        maxFriends: 100,
                        myopenID: t,
                        keyList: this.getCloudStorageKeys(),
                        shareOptions: i
                    }
                }, E.getCurrentDayLoginTimes = function() {
                    var e = r.timeToDataArray(r.timeEx()),
                        t = r.string_format("{0}_{1}_{2}", e.year, e.month, e.day);
                    return this._loginHistory[t] || 0
                }, E.setUserLoginHistoryList = function() {
                    var e = String(this.getUserMid()),
                        t = r.string_format(l.USER_LOGIN_HISTORY_List, e);
                    m.set(t, this._loginHistory)
                }, E.getUserLoginHistoryList = function() {
                    var e = String(this.getUserMid()),
                        t = r.string_format(l.USER_LOGIN_HISTORY_List, e);
                    try {
                        var i = m.get(t, "");
                        this._loginHistory = r.table_verify(f.JsonDecode(i))
                    } catch (e) {}
                }, E.setCompleteTaskReqData = function(e) {
                    if (!e) return !1;
                    var t = r.string_format(l.USER_VISITOR_COMPLETE_TASK, this.getUserMid());
                    m.set(t, e)
                }, E.getCompleteTaskReqData = function() {
                    var e = r.string_format(l.USER_VISITOR_COMPLETE_TASK, this.getUserMid());
                    return m.get(e, 0)
                }, E.delCompleteTaskReqData = function() {
                    var e = r.string_format(l.USER_VISITOR_COMPLETE_TASK, this.getUserMid());
                    return m.remove(e), !0
                }, E.updateIsRoom = function(e) {
                    this._isInRoom = e
                }, E.isInRoom = function() {
                    return this._isInRoom
                }, E.getDataBrokenMoney = function() {
                    return r.number_valueOf(this.getData("BrokenMoney"), 0)
                }, E.setDataBrokenMoney = function(e) {
                    void 0 === e && (e = 0), this.setData("BrokenMoney", e)
                }, E.setServerTime = function(e) {
                    this._serverTime = e;
                    var t = r.time();
                    this._diffTime = e - t
                }, E.getServerTime = function() {
                    return r.time() + this._diffTime
                }, E.setVipConfigData = function(e) {
                    if (!r.table_isEmpty(null == e ? void 0 : e.cfg)) {
                        var t = e.cfg;
                        t.hasRedDot = !1;
                        for (var i = -2, n = -1, a = [], o = t.list.length - 1, c = 0; c <= o; c++) {
                            var l, u, d = t.list[c];
                            if (d.index = c, -2 == i && (d.score > t.myscore ? (i = c - 1, n = c) : t.list[o].score <= t.myscore && (i = o, n = -1)), d.privilege) {
                                var _ = {},
                                    h = {};
                                t.list[c - 1] && (h = t.list[c - 1].privilegeObj);
                                for (var p = 0; p < d.privilege.length; p++) {
                                    var f = d.privilege[p];
                                    _[f.type] = f.num, -1 == a.indexOf(f.type) && (a.push(f.type), d.level > 1 && (f.isNew = !0)), Number(h[f.type]) < Number(f.num) && (f.isIncrease = !0, f.increaseNum = f.num - h[f.type])
                                }
                                d.privilegeObj = _
                            }
                            1 != (null == d || null == (l = d.level_gift) ? void 0 : l.status) && 1 != (null == d || null == (u = d.day_gift) ? void 0 : u.status) || (t.hasRedDot = !0)
                        }
                        t.currentIndex = i, t.nextIndex = n, this._vipConfigData = t, console.log("this._vipConfigData", this._vipConfigData), g.dispatch(s.EVENT_UPDATE_VIP_CONFIG)
                    }
                }, E.getVipConfigData = function() {
                    return this._vipConfigData
                }, E.getUserCurrentVipLevel = function() {
                    return r.table_isEmpty(this._vipConfigData) || -1 == this._vipConfigData.currentIndex ? 0 : this._vipConfigData.list[this._vipConfigData.currentIndex].level
                }, E.getUserCurrentVipLevelByScore = function(e) {
                    if (void 0 === e && (e = 0), r.table_isEmpty(this._vipConfigData)) return "0";
                    var t = 0;
                    return this._vipConfigData.list.forEach((function(i) {
                        e > i.score && (t = i.level)
                    })), String(t)
                }, E.getUserCurrentVipPrivilege = function(e) {
                    if (r.table_isEmpty(this._vipConfigData) || -1 == this._vipConfigData.currentIndex) return null;
                    var t = this._vipConfigData.list[this._vipConfigData.currentIndex].privilegeObj;
                    return e ? t[e] : t
                }, E.setVipProtectionCount = function(e, t, i) {
                    this._vipProtectCount = e, this._vipProtectUseCount = t, this._vipProtectTotalCount = i, console.log("setVipProtectionCount", this._vipProtectCount, this._vipProtectUseCount, this._vipProtectTotalCount)
                }, E.getVipProtectionCount = function() {
                    return this._vipProtectCount
                }, E.getVipProtectionUseCount = function() {
                    return this._vipProtectUseCount
                }, E.getVipProtectionTotalCount = function() {
                    return this._vipProtectTotalCount
                }, E.getRobotInfo = function(e) {
                    return p(e)
                }, E.checkGameId = function(e) {
                    return 1 == a.deviceInfo.isMJCollection ? a.CurrentGameID : r.number_valueOf(e, null)
                }, E.checkSupportGameIds = function(e) {
                    return this.SelectGame.checkSupportGameList(e)
                }, i(n, [{
                    key: "RecommendPop",
                    get: function() {
                        return this.__recommendPop
                    }
                }, {
                    key: "ShopInfo",
                    get: function() {
                        return this.__shopInfo
                    }
                }, {
                    key: "Activity",
                    get: function() {
                        return this.__activity
                    }
                }, {
                    key: "BankrupData",
                    get: function() {
                        return this.__bankrupData
                    }
                }, {
                    key: "MailInfo",
                    get: function() {
                        return this.__mailInfo
                    }
                }, {
                    key: "WatchMessage",
                    get: function() {
                        return this.__watchMessage
                    }
                }, {
                    key: "SelectGame",
                    get: function() {
                        return this.__selectGame
                    }
                }, {
                    key: "RedDot",
                    get: function() {
                        return this.__redDot
                    }
                }, {
                    key: "ShareInfo",
                    get: function() {
                        return this.__shareInfo
                    }
                }, {
                    key: "BackPack",
                    get: function() {
                        return this.__backPack
                    }
                }, {
                    key: "PropsConf",
                    get: function() {
                        return this.__propsConf
                    }
                }, {
                    key: "MatchData",
                    get: function() {
                        return this.__matchData
                    }
                }, {
                    key: "PrivateData",
                    get: function() {
                        return this.__privateData
                    }
                }, {
                    key: "WxShareData",
                    get: function() {
                        return this.__wxShareData
                    }
                }, {
                    key: "LadderData",
                    get: function() {
                        return this.__ladderData
                    }
                }, {
                    key: "RankData",
                    get: function() {
                        return this.__rankData
                    }
                }, {
                    key: "SquareData",
                    get: function() {
                        return this.__squareData
                    }
                }, {
                    key: "ExchangeShop",
                    get: function() {
                        return this._exchangeShop
                    }
                }, {
                    key: "GameInfo",
                    get: function() {
                        return this._gameInfo
                    }
                }, {
                    key: "SubContext",
                    get: function() {
                        return this.__subContext
                    }
                }, {
                    key: "LevelData",
                    get: function() {
                        return this.__levelData
                    }
                }, {
                    key: "MemberData",
                    get: function() {
                        return this.__memberData
                    }
                }, {
                    key: "noticePup",
                    get: function() {
                        return this.__noticePup
                    }
                }, {
                    key: "DecorationData",
                    get: function() {
                        return this.__decorationData
                    }
                }, {
                    key: "LoginRoomState",
                    get: function() {
                        return this._loginRoomState
                    },
                    set: function(e) {
                        this._loginRoomState = e || !1
                    }
                }, {
                    key: "ShowFriendScene",
                    get: function() {
                        return this.showFriend_scene
                    },
                    set: function(e) {
                        this.showFriend_scene = e
                    }
                }, {
                    key: "IsRoom",
                    get: function() {
                        return this._isInRoom
                    }
                }]), n
            }(E)), n._RF.pop()
        }
    }
}))