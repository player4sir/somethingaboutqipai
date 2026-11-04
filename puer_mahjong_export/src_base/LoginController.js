System.register("chunks:///_virtual/LoginController.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./GameConfig.ts", "./GameTxt.ts", "./Logger.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./UIConfig.ts", "./Encrypto.ts", "./InterfaceDefines.ts", "./LayerManager.ts", "./LocalStorage.ts", "./EventManager.ts", "./PkgLoaderManager.ts", "./BaseController.ts", "./Platform.ts", "./GlobalCmd.ts", "./GSocket.ts", "./AppControler.ts", "./PopupController.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f, m, g, E, v, T, R, P, y, C, S, A, I;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            n = e.ClientInfo
        }, function(e) {
            a = e.GameConfig, o = e.SystemConf
        }, function(e) {
            r = e.GameTxt
        }, function(e) {
            s = e.Logger
        }, function(e) {
            c = e.Utils
        }, function(e) {
            l = e.GCache
        }, function(e) {
            u = e.AppEvent
        }, function(e) {
            d = e.GConstants, _ = e.StoreKey, h = e.POPUSCENE
        }, function(e) {
            p = e.UIID, f = e.UIConfigData
        }, function(e) {
            m = e.Encrypt
        }, function(e) {
            g = e.inf_GameSceneType
        }, function(e) {
            E = e.LayerManager
        }, function(e) {
            v = e.LocalStorage
        }, function(e) {
            T = e.EventManager
        }, function(e) {
            R = e.PkgLoaderManager
        }, function(e) {
            P = e.BaseController
        }, function(e) {
            y = e.Platform
        }, function(e) {
            C = e.GlobalCmdHeadPHP
        }, function(e) {
            S = e.GSocket
        }, function(e) {
            A = e.AppControler
        }, function(e) {
            I = e.PopupController
        }],
        execute: function() {
            i._RF.push({}, "c5046IeEphAEqKa6TrSQpyW", "LoginController", void 0), e("LoginController", function(e) {
                function i(t) {
                    var i, n;
                    return (n = e.call(this, t) || this)._viewLoginParam = null, n._reqloginInfo = null, n._reqLoginNum = 0, n._reqLoginMaxNum = 3, n._loginHandler = null, n._hasLogined = !1, n.event_defents = ((i = {})[u.NET_GOTO_START_LOGIN] = "startLogin", i[u.LOGIN_GOTO_SHOW] = "showLoginView", i[u.NET_REQ_USER_LOGIN_YOUKE] = "reqYoukeLogin", i[u.NET_FORWARD_USER_LOGIN_CORE] = "respNetLoginCore", i[u.NET_REQ_PHP_TIMEOUT] = "respHttpTimeOut", i[u.NET_RECEIVE_LOGIN_SUCCESS] = "respNetLoginSuccess", i[u.NET_RECEIVE_MULTI_DEVICE_LOGIN] = "respNetLoginMultiDevice", i[u.NET_RECEIVE_SERVER_KICK_OUT] = "onServerKickOut", i[u.NET_RECEIVE_PHP_KICK_OUT] = "onPhpKickOut", i[u.NET_RECEIVE_KEEP_ALIVE] = "respNetKeepAlive", i[u.LOGIN_STATE_CHANGE] = "receiveLoginStateChange", i[u.SYS_START_CONNECT] = "onStartConnect", i[u.VIEW_RESET_LOGIN_STATUS] = "onRestLoginStatus", i), n.registerListeners(), n
                }
                t(i, e), i.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new i("LoginController")), this._instance
                }, i.init = function() {
                    this._instance && this._instance.clear(), this._instance = null, i.getInstance()
                };
                var P = i.prototype;
                return P.onStartConnect = function() {
                    this.startLoginTimeOut(15)
                }, P.onRestLoginStatus = function() {
                    this._hasLogined = !1, l.BankrupData.clear(), l.SelectGame.clear()
                }, P.startLogin = function(e, t, i) {
                    if (void 0 === t && (t = null), void 0 === i && (i = !1), console.log("startLogin---开始登录", i), this._stoploginHandler(), t && (this._viewLoginParam = t), this._reqLoginNum >= this._reqLoginMaxNum) this._resetFirstLogin(), this.showLoginView(), T.dispatch(u.NET_RECEIVE_LOGIN_FAIL);
                    else {
                        var n = null;
                        this._viewLoginParam && this._viewLoginParam.access_token && this._viewLoginParam.openId && (n = d.UserLoginType.WechatLogin), this.autoLogin(n)
                    }
                }, P.autoLogin = function(e) {
                    if (void 0 === e && (e = null), S.instance.isConnected()) switch (e || l.User.getLastlocalLoginType()) {
                        case d.UserLoginType.BoyaaPassportLogin:
                            this.startByaccLogin();
                            break;
                        case d.UserLoginType.WechatLogin:
                            this.startWeiXinLogin();
                            break;
                        default:
                            this.reqYoukeLogin()
                    } else {
                        var t = a.instance.AppUrlConf.Socket;
                        T.dispatch(u.NET_START_CONNECT, t)
                    }
                }, P.startByaccLogin = function() {
                    var e = l.User.getLastlocalLoginInfo();
                    if (e) {
                        var t, i, n, a, o = l.User.getLastlocalByacc();
                        if (!c.string_isEmpty(o)) {
                            t = o;
                            var r = l.User.checkIsExsitAccountInfo(t),
                                s = (r[0], r[1], r[2]);
                            switch (i = s.loginPsd, n = s.bid || e.bid, a = s.access_token || l.User.getLastlocalToken(), c.string_isEmpty(t) || c.string_isEmpty(i) ? c.string_isEmpty(t) || c.string_isEmpty(n) || c.string_isEmpty(a) ? 3 : 2 : 1) {
                                case 1:
                                    this._boyaaPassportLogin(t, i, n, a);
                                    break;
                                case 2:
                                    this._boyaaPassportBidTokenLogin(t, i, n, a);
                                    break;
                                case 3:
                                default:
                                    this.reqYoukeLogin()
                            }
                        }
                    }
                }, P._boyaaPassportLogin = function(e, t, i, n, a, o) {
                    void 0 === e && (e = null), void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = null), void 0 === a && (a = null), void 0 === o && (o = null);
                    var r = d.UserLoginType.BoyaaPassportLogin,
                        s = d.UserUType.BoyaaPassport,
                        c = {
                            phone: e,
                            pwd: t,
                            flag: 0
                        },
                        l = {
                            bid: i,
                            accesstoken: n
                        };
                    l.bid = i, l.accesstoken = n, this.reqCoreGameLogin(null, r, s, c, l, a, o)
                }, P._boyaaPassportBidTokenLogin = function(e, t, i, n) {
                    void 0 === e && (e = null), void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = null);
                    var a = d.UserLoginType.BoyaaPassportLogin,
                        o = d.UserUType.BoyaaPassport,
                        r = {
                            phone: e,
                            pwd: t,
                            flag: 0
                        },
                        s = {
                            bid: i,
                            accesstoken: n
                        };
                    s.bid = i, s.accesstoken = n, this.reqCoreGameLogin(null, a, o, r, s)
                }, P.startWeiXinLogin = function() {
                    if (console.log("startWeiXinLogin--微信登录", this._viewLoginParam), this._viewLoginParam && this._viewLoginParam.access_token && this._viewLoginParam.openId) {
                        var e = d.UserLoginType.WechatLogin,
                            t = d.UserUType.Guest,
                            i = {
                                access_token: this._viewLoginParam.access_token
                            },
                            n = {
                                openId: this._viewLoginParam.openId,
                                userInfo: this._viewLoginParam.userinfo
                            };
                        l.User.setLoginState(d.UserLoginState.Logining), this.reqCoreGameLogin(null, e, t, i, n)
                    }
                }, P.reqCoreGameLogin = function(e, t, i, n, a, o, r) {
                    void 0 === n && (n = null), void 0 === a && (a = null), void 0 === o && (o = null), void 0 === r && (r = null), this.print("接到消息 开始造登录数据===>");
                    var s = c.time(),
                        u = this._getLoginDefaultParam();
                    o && (u.reg_type = o), u.login_type = t, u.utype = i, u.access_token = l.User.getLastLoginValueByKey("token", ""), u.mid = l.User.getLastLoginValueByKey("mid", ""), r && (u.verify_code = r);
                    var d = c.table_verify(n);
                    for (var _ in d)
                        if (Object.prototype.hasOwnProperty.call(d, _)) {
                            var h = d[_];
                            h && (u[_] = h)
                        } u.nick = l.User.getRandomNick(u.guid || "");
                    var p = this.getDefaultExtramParam();
                    p.timestamp = s;
                    var f = c.table_verify(a);
                    for (var g in f)
                        if (Object.prototype.hasOwnProperty.call(f, g)) {
                            var E = f[g];
                            E && (p[g] = E)
                        } var v = c.nullToDefault(l.WxShareData.getWXActivityShareQuery(), {});
                    console.log("shareData", v), p = Object.assign(p, v), console.log("extParam_data", p), u.param = m.JsonEncode2(p), this._reqloginInfo = u, this.print("登录Core 造数据:", u), this.sendCoreGameLogin(u)
                }, P.sendCoreGameLogin = function(e, t) {
                    void 0 === t && (t = null), this._reqLoginNum = this._reqLoginNum + 1;
                    var i = {
                        cmd: t = t || C.PHP_CORE_LOGIN,
                        body: e,
                        timeout: 15e3
                    };
                    this.dump(i, "================sendCoreGameLogin======================"), T.dispatch(u.NET_SEND_MSG, i), this.startLoginTimeOut(), this._hasLogined || T.dispatch(u.SYS_SHOW_NETLOADING)
                }, P.startLoginTimeOut = function(e) {
                    void 0 === e && (e = 6), this._stoploginHandler(), this._loginHandler = this.addSchedulerOnce(e, this.loginTimeOut)
                }, P.reqYoukeLogin = function() {
                    if (console.log("reqYoukeLogin--游客登录"), this._viewLoginParam && this._viewLoginParam.access_token) {
                        var e = d.UserLoginType.Notoken,
                            t = d.UserUType.Guest,
                            i = l.User.getLastLoginValueByKey("uType"),
                            n = null;
                        if (i == d.UserUType.Guest) {
                            var a = l.User.getLastLoginValueByKey("token");
                            a && "" != a ? e = d.UserLoginType.Token : n = {
                                guid: this._viewLoginParam.access_token
                            }
                        } else null == i && (n = {
                            guid: this._viewLoginParam.access_token
                        });
                        l.User.setLoginState(d.UserLoginState.Logining), this.reqCoreGameLogin(null, e, t, n)
                    }
                }, P._stoploginHandler = function() {
                    this._loginHandler && (T.dispatch(u.SYS_CLOSE_NETLOADING), this.stopSchedulerOnce(this._loginHandler), this._loginHandler = null)
                }, P.loginTimeOut = function() {
                    console.log("loginTimeOut---登录接口请求超时"), T.dispatch(u.SYS_CLOSE_NETLOADING), this.showLoginView(null, {
                        state: "timeout"
                    }), A.getInstance().showToast("登录请求超时，可切换网络后重新登录"), T.dispatch(u.NET_RECEIVE_LOGIN_FAIL)
                }, P.respHttpTimeOut = function(e, t, i, n) {
                    console.log("php接口请求超时----respHttpTimeOut,respData=", i), this._stoploginHandler(), t && i && null != i.cmd && (i.cmd = C.PHP_CORE_LOGIN) && (this.showLoginView(null, {
                        state: "timeout"
                    }), T.dispatch(u.NET_RECEIVE_LOGIN_FAIL))
                }, P.respNetLoginCore = function(e, t, i, o) {
                    if (this._stoploginHandler(), console.log("登录结果===>" + t, i), console.log("respNetLoginCore", i, o), t) {
                        var s = i;
                        if (!s || c.isNull(s.game) || c.isNull(s.user) || c.isNull(s.account)) this.dump(i), console.error("登录数据有误 字段有空数据"), t = !1;
                        else {
                            n.RegionId = s.user.region;
                            var d = {
                                serverConf: a.instance.AppUrlConf
                            };
                            l.User.onloadLoginSuccessParams(s.user, s.game, s.account, d), l.DecorationData.updateDecorationLogin(s.primp), t = !0
                        }
                    }
                    if (1 == t) {
                        if (this.receiveLoginSuccess(), 2 != i.user.silver_delivery && 3 != i.user.silver_delivery || T.dispatch(u.SYS_TOAST_TIP, {
                                content: r["large_delivery_tip_" + i.user.silver_delivery]
                            }), 1 == i.user.gannianshou_join_team) {
                            var h = c.string_format(_.Activity_Nian_Beast_Invite, l.User.getUserMid());
                            v.set(h, "1")
                        }
                    } else this.receiveLoginFail(i);
                    T.dispatch(u.NET_HEART_BEAT_ONLOADING, t)
                }, P.receiveLoginSuccess = function() {
                    if (this._viewLoginParam && null != c.string_isEmpty(this._viewLoginParam.openId)) {
                        var e = l.User.getUserMid();
                        e = c.string_format(_.LOGIN_USER_OPENID, e), console.log("当前用户openId", this._viewLoginParam.openId), v.set(e, this._viewLoginParam.openId)
                    }
                    l.User.setLoginState(d.UserLoginState.LoginSuccess), T.dispatch(u.SYS_CLOSE_NETLOADING), this._reqLoginNum = 0
                }, P.receiveLoginFail = function(e) {
                    var t, i, n, a = this;
                    l.User.setLoginState(d.UserLoginState.LoginFailed), this.dump(e, "[Login Fail]登录失败了,是否需要自动重新请求登录 " + (this._reqLoginNum < this._reqLoginMaxNum));
                    var o = e ? e.errorType : null;
                    switch (o) {
                        case d.UserLoginFailCode.ERR_MOVE_SERVER:
                            this.print("receiveLoginFail: 登录失败>>>>server迁服");
                            break;
                        case d.UserLoginFailCode.ERR_STOP_SERVER:
                            this.print("receiveLoginFail: 登录失败>>>>计划性停服"), l.User.setLoginState(d.UserLoginState.ServerStop);
                            break;
                        case d.UserLoginFailCode.ERR_VerifyCode_ERROR:
                            this.print("receiveLoginFail: 登录失败>>>>验证码错误");
                            break;
                        case d.UserLoginFailCode.ERR_REG_IDIOM_ERROR:
                            this.print("receiveLoginFail: 登录失败>>>>注册__需要成语验证码");
                            break;
                        case d.UserLoginFailCode.ERR_REG_PHONENUMBER_ERROR:
                            this.print("receiveLoginFail: 登录失败>>>>注册__需要手机号码注册");
                            break;
                        case d.UserLoginFailCode.ERR_LOGIN_BINDPHONE_ERROR:
                            this.print("receiveLoginFail: 登录失败>>>>需要绑定手机后登录");
                            break;
                        case d.UserLoginFailCode.ERR_DISABLE_ACCOUNT:
                            return this.print("receiveLoginFail: 登录失败>>>>被封号"), void this._showFengHaoDialog({
                                tips: "您的账号已被禁用，请联系客服",
                                mid: null == e || null == (t = e.extraInfo) ? void 0 : t.mid,
                                desc: null == e || null == (i = e.extraInfo) ? void 0 : i.desc,
                                time: null == e || null == (n = e.extraInfo) ? void 0 : n.time,
                                buttonsMap: [{
                                    label: d.BtnConf.Label_Confirm,
                                    click: function() {
                                        I.getInstance().onCloseView("", p.NoticeDialog), T.dispatch(u.NET_RECEIVE_LOGIN_FAIL)
                                    }
                                }, {
                                    label: "联系客服",
                                    click: function() {
                                        T.dispatch(u.LOGIN_OPEN_KEFU)
                                    }
                                }]
                            });
                        default:
                            if (this._reqLoginNum < this._reqLoginMaxNum) {
                                var r = m.JsonDecode(this._reqloginInfo.param);
                                if (r.timestamp = c.time(), this._reqloginInfo.param = m.JsonEncode2(r), this._reqloginInfo && this._reqloginInfo.login_type == d.UserLoginType.WechatLogin) return void y.updateReFreshAccessToken((function(e) {
                                    if (1 == e && y.PLogInfo) return a._reqloginInfo.access_token = y.PLogInfo.access_token, void a.sendCoreGameLogin(a._reqloginInfo);
                                    a._reqloginInfo = null, a._resetFirstLogin(), T.dispatch(u.SYS_CLOSE_NETLOADING), a.showLoginView(), T.dispatch(u.SYS_TOAST_TIP, {
                                        content: "Fail:用户信息获取异常，请重新登录"
                                    }), T.dispatch(u.NET_RECEIVE_LOGIN_FAIL)
                                }));
                                this.sendCoreGameLogin(this._reqloginInfo)
                            } else this._reqloginInfo = null, T.dispatch(u.SYS_CLOSE_NETLOADING), S.instance.closeConnect(), this.showLoginView(), T.dispatch(u.NET_RECEIVE_LOGIN_FAIL), this.print("receiveLoginFail: 登录失败>>>>" + o), e && e.errorTips && "" != e.errorTips && T.dispatch(u.SYS_TOAST_TIP, {
                                content: e.errorTips
                            })
                    }
                }, P._showFengHaoDialog = function(e) {
                    var t = [];
                    c.string_isEmpty(null == e ? void 0 : e.tips) || t.push((null == e ? void 0 : e.tips) + "：0755-86166169"), c.string_isEmpty(null == e ? void 0 : e.mid) || t.push("\n游戏编号：" + (null == e ? void 0 : e.mid)), c.string_isEmpty(null == e ? void 0 : e.desc) || t.push("封号原因：" + (null == e ? void 0 : e.desc));
                    var i = c.number_valueOf(null == e ? void 0 : e.time);
                    i > 1 ? t.push("解封时间：" + c.timeParse(i)) : 1 == i && t.push("永久封号");
                    var n = {
                        title: "温馨提示",
                        txt_desc: t.join("\n"),
                        notshowClose: !0,
                        alignLeftTop: !0,
                        ignore_close: !0,
                        buttonsMap: e.buttonsMap,
                        closeCallback: function() {
                            T.dispatch(u.NET_RECEIVE_LOGIN_FAIL)
                        }
                    };
                    I.getInstance().onOpenView("", p.NoticeDialog, n)
                }, P.respNetLoginSuccess = function(e, t, i) {
                    if (l.User.isLoginSuccesed()) {
                        s.logModel("广播:登录成功 开启会话保活 即将跳转==>"), this.print("respNetLoginSuccess", this._reqloginInfo), this.print(t), l.User.setLoginState(d.UserLoginState.LoginSuccess), S.instance.startKeepAlive(!0), l.User.updateLoginSuccessCount(), this._reqCommSuccessQuene();
                        var n = 0,
                            a = 0,
                            o = 0;
                        1 == t.ret && (n = c.number_valueOf(t.roomId), a = c.number_valueOf(t.gameType), n > 0 && (o = c.number_valueOf(t.roomLevel)));
                        var r = t.matchInfo,
                            _ = 0;
                        c.table_isEmpty(r) || (_ = c.number_valueOf(r.matchId), a = c.number_valueOf(r.gameId), o = 500);
                        var h = t.onlookerInfo;
                        c.table_isEmpty(h) || c.number_valueOf(h.gameId), T.dispatch(u.APP_LOGIN_SUCCESS), this._checkLoginJumpModule(a, n, o, _), this._hasLogined = !0
                    }
                }, P._checkLoginJumpModule = function(e, t, i, a) {
                    if (void 0 === e && (e = null), void 0 === t && (t = null), void 0 === i && (i = null), void 0 === a && (a = null), null != a && a > 0 && null != e && e > 0) {
                        n.deviceInfo.isMJCollection && (T.dispatch(u.NET_REQ_GAME_LEVEL_ROOM_TAB, e), T.dispatch(u.NET_REQ_GAME_PLAY_INFO, e)), l.Desk && (l.Desk.setCurGameID(e), l.Desk.setCurTableID(t), l.Desk.setCurLevelID(i)), this.print("****************在比赛中 重连进入************");
                        var o = {
                            GameID: e,
                            Level: i,
                            TableID: t,
                            MatchID: a,
                            isReconn: !0,
                            Scene: g.Match
                        };
                        return l.SelectGame.intoGameData = o, l.WxShareData.resetXShareQuery(), void T.dispatch(u.GAME_GOTO_SHOW)
                    }
                    if (null != e && e > 0 && null != t && t > 0) {
                        n.deviceInfo.isMJCollection && (T.dispatch(u.NET_REQ_GAME_LEVEL_ROOM_TAB, e), T.dispatch(u.NET_REQ_GAME_PLAY_INFO, e)), l.Desk && (l.Desk.setCurGameID(e), l.Desk.setCurTableID(t), l.Desk.setCurLevelID(i)), this.print("****************在游戏中 重连进入************");
                        var r = {
                            GameID: e,
                            Level: i,
                            TableID: t,
                            isReconn: !0
                        };
                        return l.SelectGame.intoGameData = r, l.SelectGame.isInPrivateRoom() && (l.SelectGame.intoGameData.Scene = g.Private), l.WxShareData.resetXShareQuery(), void T.dispatch(u.GAME_GOTO_SHOW)
                    }
                    if (l.User.IsRoom) return l.SelectGame.intoGameData.isReconn = !0, l.SelectGame.isInPrivateRoom() && (l.SelectGame.intoGameData.Scene = g.Private), l.WxShareData.resetXShareQuery(), void T.dispatch(u.GAME_GOTO_SHOW);
                    this.print("登录成功，跳转大厅"), A.getInstance().reportClickEvent("event_15"), T.dispatch(u.HALL_GOTO_SHOW, !1, h.LOGIN)
                }, P.respNetLoginMultiDevice = function(e, t) {
                    this.print("广播:异地登录"), l.User.setLoginState(d.UserLoginState.MultiDeviceLogin), l.User.cleanLastlocalLoginToken();
                    var i = {
                        title: "异地登录",
                        alignLeftTop: !1,
                        notshowClose: !0,
                        txt_desc: r.remote_login,
                        dec_fontSize: 28,
                        buttonsMap: [{
                            label: d.BtnConf.Label_Confirm,
                            click: function() {
                                T.dispatch(u.RECOMMEND_POP_CLEAN_QUENE), T.dispatch(u.LOGIN_GOTO_SHOW)
                            }
                        }]
                    };
                    I.getInstance().onOpenView("", p.SysPopWindow, i), this._resetFirstLogin()
                }, P.onServerKickOut = function(e, t) {
                    l.User.setLoginState(d.UserLoginState.Kicked), l.User.cleanLastlocalLoginToken();
                    var i = {
                        title: "温馨提示",
                        alignLeftTop: !1,
                        notshowClose: !0,
                        txt_desc: "您已被踢出房间，请重新登录",
                        dec_fontSize: 28,
                        buttonsMap: [{
                            label: d.BtnConf.Label_Confirm,
                            click: function() {
                                T.dispatch(u.RECOMMEND_POP_CLEAN_QUENE), T.dispatch(u.LOGIN_GOTO_SHOW)
                            }
                        }]
                    };
                    I.getInstance().onOpenView("", p.SysPopWindow, i), this._resetFirstLogin()
                }, P.onPhpKickOut = function(e, t) {
                    l.User.setLoginState(d.UserLoginState.PhpKickout), l.User.cleanLastlocalLoginToken(), this._resetFirstLogin();
                    var i = [];
                    if (c.string_isEmpty(null == t ? void 0 : t.msg) ? i.push("您已离线，请重新登录") : i.push("" + (null == t ? void 0 : t.msg)), c.number_valueOf(null == t ? void 0 : t.errorType) != d.UserLoginFailCode.ERR_DISABLE_ACCOUNT) {
                        var n = {
                            title: "温馨提示",
                            alignLeftTop: !1,
                            notshowClose: !0,
                            txt_desc: i.join("\n"),
                            dec_fontSize: 28,
                            buttonsMap: [{
                                label: d.BtnConf.Label_Confirm,
                                click: function() {
                                    T.dispatch(u.RECOMMEND_POP_CLEAN_QUENE), T.dispatch(u.LOGIN_GOTO_SHOW)
                                }
                            }]
                        };
                        I.getInstance().onOpenView("", p.SysPopWindow, n)
                    } else {
                        var a, o, r;
                        this._showFengHaoDialog({
                            tips: "您的账号已被禁用，请联系客服",
                            mid: null == t || null == (a = t.extendInfo) ? void 0 : a.mid,
                            desc: null == t || null == (o = t.extendInfo) ? void 0 : o.desc,
                            time: null == t || null == (r = t.extendInfo) ? void 0 : r.time,
                            buttonsMap: [{
                                label: d.BtnConf.Label_Confirm,
                                click: function() {
                                    T.dispatch(u.RECOMMEND_POP_CLEAN_QUENE), T.dispatch(u.LOGIN_GOTO_SHOW)
                                }
                            }]
                        })
                    }
                }, P.respNetKeepAlive = function(e, t, i, n) {
                    1 == t && i.ssid && l.User.updateDataUserKey("ssid", i.ssid)
                }, P.receiveLoginStateChange = function(e, t) {}, P._reqCommSuccessQuene = function() {
                    if (T.dispatch(u.NET_REQ_USER_LOGIN_CORE_INIT), 1 != this._hasLogined) {
                        var e = n.deviceInfo.GameIds;
                        n.deviceInfo.isMJCollection ? (e = l.SelectGame.checkSupportGameList(n.deviceInfo.GameIds), T.dispatch(u.NET_REQ_HALL_AREA_GAME_CONFIG)) : (n.deviceInfo.GameIds.forEach((function(e) {
                            T.dispatch(u.NET_REQ_GAME_LEVEL_ROOM_TAB, e)
                        })), n.deviceInfo.GameIds.forEach((function(e) {
                            T.dispatch(u.NET_REQ_GAME_PLAY_INFO, e)
                        }))), T.dispatch(u.EVENT_REQUEST_GAME_RULE_CONFIG, e), T.dispatch(u.NET_REQ_HALL_GAME_CONFIG), T.dispatch(u.NET_REQ_VIP_MEMBER_CONFIG), T.dispatch(u.NET_REQ_MATCH_LIST), T.dispatch(u.NET_REQ_PRIVATE_ROOM_CONFIG), T.dispatch(u.NET_REQ_SHARE_CONFIG), T.dispatch(u.NET_CMD_REQ_USER_BACKPACK), T.dispatch(u.NET_REQ_LEVEL_MODEL_CONFIG), T.dispatch(u.NET_REQ_PROPS_INFO), T.dispatch(u.NET_REQ_BANKRUPT_CONFIG), T.dispatch(u.NET_CMD_REQ_LADDER_CONFIG, {
                            gameId: n.deviceInfo.CurrentGameID
                        }), T.dispatch(u.NET_CMD_ACT_ENTER), T.dispatch(u.NET_REQ_DECORATION_USER_INFO), this._reqShopInfo(), T.dispatch(u.NET_REQ_CONFIG, {
                            cmd: C.PHP_GET_NOTICE_CONFIG,
                            param: {}
                        }), T.dispatch(u.NET_REQ_CONFIG, {
                            cmd: C.PHP_GAME_ACTIVITY_SWITCH,
                            param: {}
                        }), T.dispatch(u.NET_REQ_CONFIG, {
                            cmd: C.PHP_INTERACTIVE_PROP_CONFIG,
                            param: {}
                        }), T.dispatch(u.NET_REQ_CONFIG, {
                            cmd: C.PHP_AD_ISSHWO,
                            param: {}
                        }), T.dispatch(u.REQ_DIAMOND_SHOP_CONFIG, {
                            cmd: C.PHP_DIAMOND_DMDINIT,
                            param: {}
                        }), T.dispatch(u.NET_REQ_CONFIG, {
                            cmd: C.PHP_VIP_CONF,
                            param: {}
                        }), T.dispatch(u.NET_REQ_CONFIG, {
                            cmd: C.PHP_ACTIVITY_PIGGYBANK_CONFIG,
                            param: {}
                        }), T.dispatch(u.NET_REQ_CONFIG, {
                            cmd: C.PHP_HALL_SQUARE,
                            param: {}
                        }), T.dispatch(u.NET_REQ_CONFIG, {
                            cmd: C.PHP_NEW_MOREGAME_CONFIG,
                            param: {}
                        }), T.dispatch(u.NET_REQ_CONFIG, {
                            cmd: C.PHP_GET_LEVEL_SYSTEM_CONFIG,
                            param: {}
                        })
                    }
                }, P._reqShopInfo = function() {
                    T.dispatch(u.NET_REQ_GOODS_INFO_BATCH, {
                        reset: !0
                    })
                }, P.showLoginView = function(e, t) {
                    var i = this;
                    void 0 === t && (t = null), a.instance.FPS = 30;
                    var n = !1;
                    if (console.log("登录-------------1"), t && ("first_login" == t.state ? (n = !0, l.User.setLoginState(d.UserLoginState.None)) : "reconnect_fail" != t.state && "timeout" != t.state || l.User.setLoginState(d.UserLoginState.Offline)), l.User.getLoginState() == d.UserLoginState.LoginSuccess) return console.log("登录-------------2"), void E.clear(f[p.LoginPrefab].layer);
                    var o = this,
                        r = y.orientation;
                    l.User.updateIsRoom(!1), y.setDeviceOrientation("portrait", (function() {
                        i.print("显示登录界面，屏幕切换结束，屏幕切换为竖屏------场景从" + r + "到" + y.orientation), E.has(p.LoginPrefab) || E.isLoading(p.LoginPrefab) ? (console.log("登录-------------6"), E.clearOther(f[p.LoginPrefab].layer, !0), o._checkServerChange(n), T.dispatch(u.LOGIN_SEND_SHOW, t)) : (l.User.setLoginState(d.UserLoginState.Offline), E.clearOther(null, !0), R.getInstance().isLoaded(d.PkgLoaderTaskList.Login) ? (console.log("登录-------------4"), o._jumpToLoginScene(n, t)) : T.dispatch(u.SYS_PACKAGE_LOAD, d.PkgLoaderTaskList.Login, (function() {
                            console.log("登录-------------5"), o._jumpToLoginScene(n, t)
                        }), (function(e) {
                            console.log("登录加载失败-------------")
                        }))), T.dispatch(u.SYS_INFO_REFRESH)
                    }))
                }, P._jumpToLoginScene = function(e, t) {
                    void 0 === t && (t = null), l.User.setLoginState(d.UserLoginState.Offline), this._checkServerChange(e), T.dispatch(u.SYS_APP_LIFE, d.AppRunLife.Login_Will_Open), I.getInstance().onOpenView("", p.LoginPrefab, null, {
                        onAdded: function() {
                            console.log("登录-------------8"), T.dispatch(u.VIEW_UI_MAIN_UPDATE, p.LoginPrefab), T.dispatch(u.SYS_APP_LIFE, d.AppRunLife.Login_Opened), l.User.getLoginState() != d.UserLoginState.LoginSuccess ? (E.clearOther(f[p.LoginPrefab].layer, !0), T.dispatch(u.LOGIN_SEND_SHOW, t)) : E.clear(f[p.LoginPrefab].layer)
                        },
                        onRemoved: function() {
                            console.log("登录-------------9"), T.dispatch(u.SYS_APP_LIFE, d.AppRunLife.Login_Closed)
                        }
                    })
                }, P._checkServerChange = function(e) {
                    var t = v.get(_.SYS_ClientVer, n.AppVer),
                        i = l.User.getLastlocalLoginServerConf(),
                        o = a.instance.AppUrlConf;
                    if (i) {
                        var r = String(t) == String(n.AppVer),
                            s = !1;
                        for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && i[c] != o[c] && (s = !0);
                        return 0 == r && 1 == s ? (console.warn("---【版本号不一致且服务器地址不一致，重置本地所有数据存储】---"), console.log("当前版本:" + n.AppVer + " 上个版本:" + t), v.clear(), void v.set(_.SYS_ClientVer, n.AppVer)) : 1 == s ? (console.warn("---【服务器地址有切换 ，重置本地所有数据存储】---"), v.clear(), void v.set(_.SYS_ClientVer, n.AppVer)) : void 0
                    }
                    v.set(_.SYS_ClientVer, n.AppVer)
                }, P._resetFirstLogin = function() {
                    this._reqLoginNum = 0, y.isWXPlatform() && y.WxLoginCode && y.updateWXLoginCode()
                }, P._getLoginDefaultParam = function(e) {
                    return void 0 === e && (e = ""), {
                        api_ver: 2,
                        channel_id: n.ChannelId,
                        channelKey: n.ChannelKey,
                        mac: n.MachineId,
                        machine_type: n.MachineModel,
                        os: n.SysVer,
                        resolution: o.DEV_SIZE.width + "*" + o.DEV_SIZE.height,
                        imsi: n.IMSI,
                        operator: n.PhoneCardType,
                        net: n.NetWorkType,
                        guid: n.Guid,
                        ssaid: n.SSAID,
                        appid: n.PlatFormAppID,
                        nick: n.PhoneModel,
                        version: n.AppVer,
                        hall_version: n.HallVer,
                        login_type: 1,
                        utype: 1,
                        sex: 0,
                        phone: e || "",
                        access_token: "",
                        pwd: "",
                        verify_code: -1,
                        verify_msg: "",
                        verify_word: "",
                        param: "",
                        mid: ""
                    }
                }, P.getDefaultExtramParam = function() {
                    return {
                        iccid: n.ICCID,
                        imei: n.IMEI,
                        imsi: n.IMSI,
                        timestamp: c.time(),
                        safecode: n.SignDeviceId,
                        safecode_mac: n.SignMacAddress,
                        safecode_guid: n.SignGuid,
                        factoryid: n.FactoryId,
                        update_site_realtime: 1,
                        bundleId: n.BundleId
                    }
                }, i
            }(P))._instance = null, i._RF.pop()
        }
    }
}))