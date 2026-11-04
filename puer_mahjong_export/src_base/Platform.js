System.register("chunks:///_virtual/Platform.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AppCustomConfig.ts", "./ClientInfo.ts", "./GameConfig.ts", "./GameTxt.ts", "./Logger.ts", "./Utils.ts", "./AppEvent.ts", "./GameConstant.ts", "./GameRes.ts", "./Encrypto.ts", "./LocalStorage.ts", "./EventManager.ts", "./HttpRequest.ts", "./WXSdk.ts", "./WXSdkDefines.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f, m, g, E, v, T, R, P, y;
    return {
        setters: [function(e) {
            t = e.createClass
        }, function(e) {
            i = e.cclegacy, n = e.sys, a = e.error, o = e.screen, r = e.view
        }, function(e) {
            s = e.AppCustomConfig
        }, function(e) {
            c = e.ClientInfo
        }, function(e) {
            l = e.GameConfig
        }, function(e) {
            u = e.GameTxt
        }, function(e) {
            d = e.Logger
        }, function(e) {
            _ = e.Utils
        }, function(e) {
            h = e.AppEvent
        }, function(e) {
            p = e.GConstants, f = e.StoreKey
        }, function(e) {
            m = e.GameRes
        }, function(e) {
            g = e.Encrypt
        }, function(e) {
            E = e.LocalStorage
        }, function(e) {
            v = e.EventManager
        }, function(e) {
            T = e.HttpRequest
        }, function(e) {
            R = e.WXSdk
        }, function(e) {
            P = e.WXSdk_AuthSetting, y = e.WXSdk_VibrateShortType
        }],
        execute: function() {
            i._RF.push({}, "6075cZw3U9LPKfYAhrfGROo", "Platform", void 0);
            var C = function() {
                function e() {
                    this._orientation = void 0, this._currowPlatForm = n.platform, this._DeviceID = "", this._SystemInfo = null, this._platformVer = "", this._SDKVer = "", this._platFormClient = null, this._Guid = null, this._Machineid = null, this._MachineModel = null, this._PhoneModel = null, this._IMSI = null, this._ICCID = null, this._IMEI = null, this._PhoneCardType = -1, this._NetWorkType = -1, this._NetWorkSignal = 3, this.CustomShareFriendsInfo = null, this.CustomSharePYQInfo = null, this.WxLoginCode = null, this.WxAuthSettingUserInfo = 0, this.WxAuthSettingFriends = 0, this.WxAuthSettingClub = 0, this.WxAuthSettingRecord = 0, this.WxWritePhotosAlbum = 0, this.WxAuthSettingSubscriptions = null, this.WxAuthSettingButton = null, this.WxAuthSettingButtonParam = null, this.WxAuthSettingInfo = void 0, this.WxUserInfo = null, this.rawData = null, this.PLogInfo = {
                        access_token: null,
                        openId: null,
                        userinfo: null
                    }, this.AppLaunchOptions = {}, this.AppEnterOptions = {}, this.settingCallback = null, this._liveStateHandler = null, this.targetOrientation = "", this.devieTimer = null, this._isSupportIOSPay = null, this._IOSPayFailNum = 0, this._session_key = null, this._reportNum = 0, this.updateTimer = void 0, d.logPlatform("***************************************"), d.logPlatform("\\\\\\\\\\\\\\平台初始化\\\\\\\\\\\\\\\\"), d.logPlatform("当前平台:\n      " + this._currowPlatForm), d.logPlatform("系统信息:\n"), this.dump(), d.logPlatform("\\\\\\\\\\\\\\平台初始化\\\\\\\\\\\\\\\\"), d.logPlatform("***************************************"), s.initCustomConfig(this.isIOS()), this._listenDeviceOrientationChange(), this.checkIsSupportMidasPayment(), this.lestenEngineError(), this.initWxPlugin()
                }
                var i = e.prototype;
                return i.lestenEngineError = function() {
                    var e = window,
                        t = this;

                    function i(e) {
                        0 == t._reportNum && (console.error("[Global Error]", e), S.isWXPlatform() && S.restartMiniProgram({})), t._reportNum++
                    }
                    e.__errorHandler = function(e, t, n, a) {
                        i({
                            type: "cocos",
                            name: e,
                            line: t,
                            msg: n,
                            stack: a
                        })
                    }, e.onerror = function(e, t, n, a, o) {
                        i({
                            type: "window",
                            message: e,
                            source: t,
                            lineno: n,
                            colno: a,
                            stack: null == o ? void 0 : o.stack
                        })
                    }
                }, i.initBase = function() {
                    switch (this._currowPlatForm) {
                        case n.Platform.WECHAT_GAME:
                            this.SystemInfo, this.Lang, this.PlatFormVersion, this.SDKVersion, this.ClientPlatform, d.logPlatform("输出系统信息：====>"), d.table(this._SystemInfo), d.logPlatform(this._SystemInfo), 1 != c.DEBUG || !this.isWXPlatform() || 1 != this.isAndroid() && 1 != this.isIOS() || R.instance.setEnableDebug(c.DEBUG), R.instance.onShareAppMessage(_.handler(this, this.getShareFriendFunc)), R.instance.onShareTimeline(_.handler(this, this.getSharePYQFunc)), R.instance.onShareMessageToFriend(_.handler(this, this.getShareMessageToFriend)), R.instance.onAddToFavorites(_.handler(this, this.onAddToFavorites)), R.instance.showShareMenu(!0, ["shareAppMessage", "shareTimeline"]), R.instance.setKeepScreenOn(!0);
                        case n.Platform.DESKTOP_BROWSER:
                            this.SystemInfo, this.Lang, this.PlatFormVersion, this.SDKVersion, this.ClientPlatform;
                        default:
                            this.SystemInfo
                    }
                    this.DeviceID, this.getLaunchOptionsSync(), this._initClientInfo(), this.onGameLiveStateChange()
                }, i._initClientInfo = function() {
                    c.deviceInfo.platformVer = this._platformVer, c.deviceInfo.machineid = this._Machineid, c.deviceInfo.machineModel = this._MachineModel, c.deviceInfo.phoneModel = this._PhoneModel, c.deviceInfo.guid = this._Guid, c.deviceInfo.IMSI = this._IMSI, c.deviceInfo.ICCID = this._ICCID, c.deviceInfo.IMEI = this._IMEI, c.deviceInfo.phoneCardType = this._PhoneCardType, c.deviceInfo.netWorkType = this.NetWorkType, c.deviceInfo.isIOS = this.isIOS()
                }, i._initDeviceID = function() {
                    var e = _.string_format("platform:{0} platformVer:{1} sdkVer:{2}", this._currowPlatForm, this._platformVer, this._SDKVer);
                    this._DeviceID = g.base64_encode(e) + "_", E.set("DeviceID", this._DeviceID)
                }, i.dump = function() {
                    n.dump()
                }, i.openURL = function(e) {
                    n.openURL(e)
                }, i.isWXPlatform = function() {
                    return this._currowPlatForm == n.Platform.WECHAT_GAME
                }, i.isAndroid = function() {
                    return "android" == this.ClientPlatform
                }, i.isWindows = function() {
                    return "windows" == this.ClientPlatform
                }, i.isMac = function() {
                    return "mac" == this.ClientPlatform
                }, i.isIOS = function() {
                    return "ios" == this.ClientPlatform
                }, i.isOHOS = function(e) {
                    return !1
                }, i.isCanPay = function() {
                    return !0
                }, i.updateNetWorkType = function(e, t) {
                    switch (void 0 === e && (e = null), void 0 === t && (t = null), this._currowPlatForm) {
                        case n.Platform.WECHAT_GAME:
                            var i = this;
                            R.instance.getNetworkType((function(n) {
                                if (d.logPlatform("net----getNetworkType（网络状态，信号强度）的返回", n), n) {
                                    if (n.networkType) switch (String(n.networkType).toUpperCase()) {
                                        case "WIFI":
                                            i._NetWorkType = 1;
                                            break;
                                        case "2G":
                                            i._NetWorkType = 2;
                                            break;
                                        case "3G":
                                            i._NetWorkType = 3;
                                            break;
                                        case "4G":
                                            i._NetWorkType = 4;
                                            break;
                                        case "5G":
                                            i._NetWorkType = 5;
                                        case "UNKNOWN":
                                            i._NetWorkType = 6;
                                            break;
                                        case "NONE":
                                            d.logPlatform("net---- 网络离线"), t && t(!1);
                                            break;
                                        default:
                                            i._NetWorkType = -1
                                    }
                                    n.signalStrength && (i._NetWorkSignal = n.signalStrength), e && e()
                                }
                            }));
                            break;
                        default:
                            this._NetWorkType = 6, e && e()
                    }
                    return this._NetWorkType
                }, i.checkWxAuthSettingButtonVisible = function() {
                    return S.WxAuthSettingButton
                }, i.reqPlatformLoginInfo = function(e) {
                    switch (d.logPlatform("获取平台用户信息:>>>"), this._currowPlatForm) {
                        case n.Platform.WECHAT_GAME:
                            1 == S.WxAuthSettingUserInfo ? S.getOpenIDAndAccestToken((function(e) {
                                e ? S.getUserInfo((function() {
                                    S.updateWxAuthSettingButtonVisible(), S.PLogInfo = {
                                        access_token: e.access_token,
                                        openId: e.openid,
                                        userinfo: S.WxUserInfo
                                    }, d.logPlatform("平台登录信息：>>>", S.PLogInfo), v.dispatch(h.LOGIN_PLATFORM_SUCCESS, S.PLogInfo)
                                })) : (S.WxLoginCode = null, v.dispatch(h.LOGIN_PLATFORM_FAIL, p.LoginStateCode.platform_fail_wx_code2session_error))
                            })) : S.getOpenIDAndAccestToken((function(e) {
                                e ? (S.updateWxAuthSettingButtonVisible(), S.PLogInfo = {
                                    access_token: e.access_token,
                                    openId: e.openid,
                                    userinfo: S.WxUserInfo
                                }, d.logPlatform("平台登录信息：>>>", S.PLogInfo), v.dispatch(h.LOGIN_PLATFORM_SUCCESS, S.PLogInfo)) : (S.WxLoginCode = null, v.dispatch(h.LOGIN_PLATFORM_FAIL, p.LoginStateCode.platform_fail_wx_code2session_error))
                            }));
                            break;
                        case n.Platform.DESKTOP_BROWSER:
                        default:
                            v.dispatch(h.LOGIN_PLATFORM_FAIL, p.LoginStateCode.platform_fail_wx_logincode)
                    }
                }, i.getLoginCode = function(e) {
                    var t = this;
                    void 0 === e && (e = null), d.logPlatform("getLoginCode", S.WxLoginCode), null == S.WxLoginCode ? R.instance.login(5e3, (function(t) {
                        d.logPlatform("成功获取登录凭证 code = " + t.code), t.code ? (S.WxLoginCode = t.code, e({
                            code: S.WxLoginCode
                        })) : e(null)
                    }), (function() {
                        d.logPlatform("获取登录凭证失败"), e(null)
                    })) : R.instance.checkSession((function() {
                        d.logPlatform("Success:登录凭证未失效 Code = " + S.WxLoginCode), e({
                            code: S.WxLoginCode,
                            isvalid: !0
                        })
                    }), (function() {
                        d.logPlatform("Fail:登录凭证已失效 即将请求登录"), S.WxLoginCode = null, t.getLoginCode(e)
                    }))
                }, i.updateWXLoginCode = function(e) {
                    return void 0 === e && (e = null), !!this.isWXPlatform() && (d.logPlatform("updateWXLoginCode:更新微信的login code凭证：目前:>>" + S.WxLoginCode), S.getLoginCode((function(t) {
                        e && e(t)
                    })), !0)
                }, i.getOpenIDAndAccestToken = function(e) {
                    void 0 === e && (e = null), d.logPlatform("getOpenIDAndAccestToken", S.WxLoginCode), S.getLoginCode((function(t) {
                        if (t && t.code)
                            if (S.WxLoginCode = t.code, 1 == t.isvalid && null != S.PLogInfo.access_token) {
                                var i = {
                                    openid: S.PLogInfo.openId,
                                    access_token: S.PLogInfo.access_token
                                };
                                d.logPlatform("OpenID 和 AccessToken有效，直接返回 openID=" + i.openid + " access_token=" + i.access_token), e(i)
                            } else {
                                var n = {
                                    action: "core.getMiniConfig",
                                    code: S.WxLoginCode,
                                    appid: c.PlatFormAppID
                                };
                                (new T).post(l.instance.AppUrlConf.Web, JSON.stringify(n), (function(t) {
                                    var i = null,
                                        n = null;
                                    if (t && 200 == t.code && t.result) {
                                        t.result.session && (i = _.nullToDefault(t.result.session.openid, null), S._session_key = _.nullToDefault(t.result.session.session_key, null)), t.result.token && (n = _.nullToDefault(t.result.token.access_token, null));
                                        var a, o = t.result.miniad;
                                        o && (c.updateADInfo(o), (null == (a = o.ad_account_id) ? void 0 : a.length) > 0 && S.initAdVideo(c.deviceInfo.adunitId, !0), v.dispatch(h.EVENT_REINIT_REPORT_SDK))
                                    }
                                    if (i && n) {
                                        var r = {
                                            openid: i,
                                            access_token: n
                                        };
                                        d.logPlatform("Success:获取OpenID 和 AccessToken成功 openID=" + r.openid + " access_token=" + r.access_token), e(r)
                                    } else d.logPlatform("Fail:获取OpenID 和 AccessToken失败"), e(null)
                                }), (function(t) {
                                    d.logPlatform("Fail:获取OpenID 和 AccessToken失败", t), e(null)
                                }), "json")
                            }
                        else v.dispatch(h.LOGIN_PLATFORM_FAIL, p.LoginStateCode.platform_fail_wx_logincode)
                    }))
                }, i.updateReFreshAccessToken = function(e) {
                    void 0 === e && (e = null), 0 != this.isWXPlatform() ? (S.WxLoginCode = null, S.getOpenIDAndAccestToken((function(t) {
                        t && (S.PLogInfo = {
                            access_token: t.access_token,
                            openId: t.openid,
                            userinfo: S.WxUserInfo
                        }), e && e(null != t), v.dispatch(h.LOGIN_WX_ACCESS_UPDATE, null != t, S.PLogInfo)
                    }))) : e && e(null)
                }, i.getUserInfo = function(e) {
                    void 0 === e && (e = null);
                    var t = S.SystemInfo;
                    R.instance.getUserInfo(!0, t.language, (function(i) {
                        d.logPlatform("getUserInfo:获取用户信息成功"), d.dump(i);
                        var n = {
                            avatarUrl: _.nullToDefault(i.userInfo.avatarUrl, ""),
                            city: _.nullToDefault(i.userInfo.city, ""),
                            country: _.nullToDefault(i.userInfo.country, ""),
                            gender: _.nullToDefault(i.userInfo.gender, 0),
                            language: _.nullToDefault(i.userInfo.language, t.language),
                            nickName: _.nullToDefault(i.userInfo.nickName, ""),
                            province: _.nullToDefault(i.userInfo.province, "")
                        };
                        S.WxUserInfo = n, S.rawData = {
                            nickName: n.nickName,
                            gender: n.gender,
                            language: n.language,
                            city: n.city,
                            province: n.province,
                            country: n.country,
                            avatarUrl: n.avatarUrl
                        }, d.logPlatform("getUserInfo:输出用户信息："), d.logPlatform(S.WxUserInfo), e(i)
                    }), (function() {
                        var i = {
                            avatarUrl: "",
                            city: "",
                            country: "",
                            gender: 0,
                            language: t.language,
                            nickName: "",
                            province: ""
                        };
                        d.logPlatform("getUserInfo:获取用户信息失败"), S.WxUserInfo = i, e(null)
                    }))
                }, i.onSyncWXUserInfo = function(e) {
                    void 0 === e && (e = null), this.isWXPlatform() && this._checkUserAuth({
                        title: "",
                        content: "获取最新信息需微信授权,您是否确定?",
                        scope: P.userInfo,
                        authName: "WxAuthSettingUserInfo",
                        callBack: function() {
                            S.getUserInfo((function() {
                                e && e()
                            }))
                        }
                    })
                }, i._checkUserAuth = function(e) {
                    function t() {
                        S._queryAuth(e.scope, e.authName, (function() {
                            e.callBack && e.callBack()
                        }), (function() {
                            e.failCallBack && e.failCallBack()
                        }))
                    }
                    e.content ? (console.log("查询用户授权状态----------- ", e.scope, S[e.authName], S[e.authName]), 0 == S[e.authName] ? R.instance.showModal({
                        title: e.title || "",
                        content: e.content,
                        success: function(i) {
                            i.confirm ? t() : e.failCallBack && e.failCallBack()
                        },
                        fail: function() {
                            e.failCallBack && e.failCallBack()
                        }
                    }) : t()) : t()
                }, i._queryAuth = function(e, t, i, n) {
                    void 0 === i && (i = null), void 0 === n && (n = null), R.instance.getSetting(!1, (function(a) {
                        console.log("查询用户授权状态", e, t, S[t], a.authSetting), S.updateWxAuthSettingInfo(a.authSetting), 0 == S[t] ? (console.log("查询用户授权状态-----------1---未授权"), R.instance.authorize(e, (function() {
                            console.log("查询用户授权状态-----------2---用户已经授权"), i && i()
                        }), (function() {
                            console.log("查询用户授权状态-----------用户拒绝授权"), n && n()
                        }))) : 1 == S[t] ? i && i() : (console.log("查询用户授权状态-----------3---拒绝了授权，跳转设置页面手动授权", e, t, S[t]), S.openSetting(!1, (function() {
                            R.instance.getSetting(!1, (function(a) {
                                console.log("查询用户授权状态-----------关闭设置页面后，查询授权状态", e, t, S[t], a.authSetting), S.updateWxAuthSettingInfo(a.authSetting), 1 == S[t] ? i && i() : (console.log("查询用户授权状态-----------关闭设置页面后，查询授权状态---拒绝了授权"), n && n())
                            }), (function() {
                                console.log("查询用户授权状态-----------关闭设置页面后，查询授权状态----查询授权状态失败"), n && n()
                            }))
                        })))
                    }), (function(e) {
                        console.log("查询用户授权状态失败", e), n && n()
                    }))
                }, i.updateWxAuthSettingButtonVisible = function(e, t) {
                    void 0 === e && (e = null), void 0 === t && (t = !1), 0 == e ? S.WxAuthSettingButton && S.WxAuthSettingButton.hide && S.WxAuthSettingButton.hide() : 1 == e ? (console.log("test----显示登录授权按钮"), t && S.removeWxLoginBtn(), S.WxAuthSettingButton && S.WxAuthSettingButton.show ? (console.log("test----显示登录授权按钮------------1"), S.WxAuthSettingButton.show()) : R.instance.isCanCreateUserInfoButton() && (console.log("test----显示登录授权按钮------------2"), S.createrAuthSettingButton_WX())) : S.removeWxLoginBtn()
                }, i.removeWxLoginBtn = function() {
                    S.WxAuthSettingButton && S.WxAuthSettingButton.destroy && S.WxAuthSettingButton.destroy(), S.WxAuthSettingButton = null
                }, i.createrAuthSettingButton_WX = function() {
                    var e, t, i;
                    if (this.isWXPlatform() && this.WxAuthSettingButtonParam) return S.removeWxLoginBtn(), S.WxAuthSettingButton = null, d.logPlatform("创建授权按钮", S.WxAuthSettingButtonParam), S.WxAuthSettingButton = (e = S.SystemInfo, t = {
                        left: S.WxAuthSettingButtonParam.pos.x,
                        top: S.WxAuthSettingButtonParam.pos.y,
                        width: S.WxAuthSettingButtonParam.size.width,
                        height: S.WxAuthSettingButtonParam.size.height,
                        backgroundColor: null,
                        color: null,
                        borderColor: null,
                        textAlign: "center",
                        fontSize: 20,
                        borderWidth: 0,
                        borderRadius: 0,
                        lineHeight: S.WxAuthSettingButtonParam.size.height
                    }, (i = R.instance.createUserInfoButton({
                        type: "image",
                        image: S.WxAuthSettingButtonParam.img,
                        style: t,
                        withCredentials: null == S.WxAuthSettingButtonParam.withCredentials || S.WxAuthSettingButtonParam.withCredentials
                    })) ? (i.onTap((function(t) {
                        if (v.dispatch(h.REPORT_CLICK_EVENT, {
                                eventID: "event_12"
                            }), v.dispatch(h.REPORT_USER_INTERACTION, {
                                eventID: "event_5"
                            }), d.logPlatform("=====授权按钮:点击返回=====", t), t && t.userInfo) {
                            if (!S.WxAuthSettingButton || 1 == S.WxAuthSettingButton.isDelay) return;
                            S.WxAuthSettingButton.isDelay = !0, setTimeout((function() {
                                S.WxAuthSettingButton && (S.WxAuthSettingButton.isDelay = !1)
                            }), 2500), d.logPlatform("=====授权按钮:用户授权成功=====获取到用户信息"), d.logPlatform(t);
                            var i = {
                                avatarUrl: _.nullToDefault(t.userInfo.avatarUrl, ""),
                                city: _.nullToDefault(t.userInfo.city, ""),
                                country: _.nullToDefault(t.userInfo.country, ""),
                                gender: _.nullToDefault(t.userInfo.gender, 0),
                                language: _.nullToDefault(t.userInfo.language, e.language),
                                nickName: _.nullToDefault(t.userInfo.nickName, ""),
                                province: _.nullToDefault(t.userInfo.province, "")
                            };
                            S.WxUserInfo = i, S.WxAuthSettingUserInfo = 1, v.dispatch(h.PLATFORM_AUTHSETTING_UPDATE)
                        } else {
                            var n = {
                                avatarUrl: "",
                                city: "",
                                country: "",
                                gender: 0,
                                language: e.language,
                                nickName: "",
                                province: ""
                            };
                            S.WxUserInfo = n, S.WxAuthSettingUserInfo = -1, v.dispatch(h.PLATFORM_AUTHSETTING_UPDATE)
                        }
                    })), i.show(), i) : null), v.dispatch(h.PLATFORM_AUTHSETTING_UPDATE, S.WxAuthSettingButton), S.WxAuthSettingButton
                }, i.notifySettingCallback = function(e) {
                    this.settingCallback && this.settingCallback(e), this.settingCallback = null
                }, i.getSetting = function(e) {
                    switch (void 0 === e && (e = null), d.logPlatform("getSetting:获取授权信息"), this._currowPlatForm) {
                        case n.Platform.WECHAT_GAME:
                            this.settingCallback = e, setTimeout((function() {
                                S.notifySettingCallback(null)
                            }), 2e3), R.instance.getSetting(!0, (function(e) {
                                console.log("getSetting:获取授权信息成功", e), S.updateWxAuthSettingInfo(e.authSetting), S.WxAuthSettingSubscriptions = e.subscriptionsSetting || {}, S.notifySettingCallback(null)
                            }), (function() {
                                d.logPlatform("getSetting:获取授权信息失败"), S.notifySettingCallback(null)
                            }));
                            break;
                        default:
                            e()
                    }
                }, i.getPrivacySetting = function(e) {
                    switch (void 0 === e && (e = null), d.logPlatform("获取隐私弹窗授权"), this._currowPlatForm) {
                        case n.Platform.WECHAT_GAME:
                            R.instance.getPrivacySetting((function(e) {
                                if (d.logPlatform("获取隐私弹窗授权成功", e), e && null != e.needAuthorization) {
                                    var t = 1 == e.needAuthorization;
                                    E.set(f.LOGIN_LAST_CHECK_AGREE, !t)
                                } else E.set(f.LOGIN_LAST_CHECK_AGREE, !1)
                            }), (function() {
                                d.logPlatform("获取隐私弹窗授权失败"), E.set(f.LOGIN_LAST_CHECK_AGREE, !1)
                            }), (function() {
                                e()
                            }));
                            break;
                        default:
                            e()
                    }
                }, i.onNeedPrivacyAuthorization_WX = function(e, t) {
                    switch (void 0 === e && (e = null), void 0 === t && (t = null), d.logPlatform("启动隐私授权上报"), this._currowPlatForm) {
                        case n.Platform.WECHAT_GAME:
                            R.instance.onNeedPrivacyAuthorization(e, t)
                    }
                }, i.checkPrivacyContract = function() {
                    return this._currowPlatForm == n.Platform.WECHAT_GAME && R.instance.openPrivacyContract(!0)
                }, i.openPrivacyContract_WX = function(e) {
                    void 0 === e && (e = null), d.logPlatform("打开隐私保护指引");
                    var t = !1,
                        i = function(i) {
                            e && 0 == t && (e(i), t = !0)
                        };
                    switch (this._currowPlatForm) {
                        case n.Platform.WECHAT_GAME:
                            R.instance.openPrivacyContract(!1, (function() {
                                i(!0)
                            }), (function() {
                                i(!1)
                            }))
                    }
                }, i.openCustomerServiceConversation = function(e, t) {
                    void 0 === e && (e = {}), void 0 === t && (t = null);
                    var i = !1,
                        a = 1500;
                    null != e.delay && (a = Number(e.delay)), d.logPlatform("点击了联系客服", a);
                    var o = function(n, o) {
                        t && 0 == i && (0 == Number(a) ? t(n, e) : setTimeout((function() {
                            t(n, e)
                        }), a)), i = !0
                    };
                    switch (this._currowPlatForm) {
                        case n.Platform.WECHAT_GAME:
                            R.instance.openCustomerServiceConversation(e.sessionFrom, (function(e) {
                                console.log("客服成功回调", e), o(!0)
                            }), (function(e) {
                                console.log("客服失败回调", e), o(!1)
                            }), (function(e) {
                                console.log("客服回调", e)
                            }), e.showMessageCard, e.sendMessageTitle, e.sendMessagePath, e.sendMessageImg);
                            break;
                        default:
                            o(!0)
                    }
                }, i.setCustomShareInfo = function(e, t) {
                    void 0 === e && (e = null), void 0 === t && (t = null), S.CustomShareFriendsInfo = e, S.CustomSharePYQInfo = t
                }, i.getShareFriendFunc = function() {
                    if (d.logPlatform("点击了分享给朋友"), v.dispatch(h.NET_REQ_REPORT_TX_GD_SDK, p.TXGDActionType.SHARE, {
                            target: "APP_MESSAGE"
                        }), S.CustomShareFriendsInfo) {
                        var e = _.clone(S.CustomShareFriendsInfo);
                        return S.CustomShareFriendsInfo = null, e
                    }
                    var t = {};
                    return t.title = u.share_wx_friends_txt, t.imageUrl = m.AppCommon_Share_Friend_Comm.path, t
                }, i.getSharePYQFunc = function() {
                    if (d.logPlatform("点击了分享到朋友圈"), S.CustomSharePYQInfo) {
                        var e = _.clone(S.CustomSharePYQInfo);
                        return S.CustomSharePYQInfo = null, e
                    }
                    v.dispatch(h.NET_REQ_REPORT_TX_GD_SDK, p.TXGDActionType.SHARE, {
                        target: "TIME_LINE"
                    });
                    var t = {};
                    return t.title = u.share_wx_friends_txt, t.imageUrl = m.AppCommon_Share_Friend_Comm.path, t
                }, i.getShareMessageToFriend = function(e) {
                    void 0 === e && (e = {}), d.logPlatform("用户分享到了指定好友", e);
                    var t = !0;
                    e && 1 == e.success || (t = !1), t && (v.dispatch(h.NET_REQ_SHARE_REWARD), v.dispatch(h.NET_REQ_NEW_SHARE_REPORT), v.dispatch(h.NET_REQ_REPORT_TX_GD_SDK, p.TXGDActionType.SHARE, {
                        target: "APP_MESSAGE"
                    }))
                }, i.shareWXFriends = function(e, t, i) {
                    void 0 === e && (e = null), void 0 === t && (t = null), void 0 === i && (i = null), 0 != this.isWXPlatform() ? (console.log("分享好友2222"), v.dispatch(h.NET_REQ_SHARE_REWARD), v.dispatch(h.NET_REQ_NEW_SHARE_REPORT), v.dispatch(h.NET_REQ_REPORT_TX_GD_SDK, p.TXGDActionType.SHARE, {
                        target: "APP_MESSAGE"
                    }), R.instance.shareAppMessage(e || this.getShareFriendFunc()), t && setTimeout((function() {
                        t(i)
                    }), 1500)) : t && t(i)
                }, i.shareAppMessage = function(e) {
                    void 0 === e && (e = null), R.instance.shareAppMessage(e || this.getShareFriendFunc())
                }, i.copyClipboard = function(e, t) {
                    if (e) switch (e = String(e), this._currowPlatForm) {
                        case n.Platform.WECHAT_GAME:
                            d.logPlatform("调用复制"), R.instance.setClipboardData(e, (function(i) {
                                t && t(e)
                            }), (function(e) {
                                d.logPlatform("复制失败:", e), t && t(null)
                            }));
                            break;
                        case n.Platform.DESKTOP_BROWSER:
                            var i = function(i) {
                                i.clipboardData.setData("text/plain", e), i.preventDefault(), v.dispatch(h.SYS_TOAST_TIP, {
                                    content: u.copySuccess
                                }), t && t(e)
                            };
                            document.addEventListener("copy", i), document.execCommand("copy"), document.removeEventListener("copy", i);
                            break;
                        default:
                            t && t(null)
                    }
                }, i.connectSocket = function(e, t, i, a, o, r, s) {
                    if (void 0 === t && (t = "arraybuffer"), void 0 === i && (i = null), void 0 === a && (a = null), void 0 === o && (o = null), void 0 === r && (r = null), void 0 === s && (s = null), d.logPlatform("创建websocket:>>>url:" + e), this._currowPlatForm == n.Platform.WECHAT_GAME) return R.instance.connectSocket(e, i, a, o, r, s);
                    var c = new WebSocket(e);
                    return c ? (c.binaryType = t || "arraybuffer", i && i()) : a && a(), c
                }, i.closeSocket = function(e, t, i) {
                    void 0 === t && (t = 1e3), void 0 === i && (i = ""), this._currowPlatForm == n.Platform.WECHAT_GAME ? e && e.close ? e.close({
                        code: t,
                        reason: i
                    }) : R.instance.closeSocket(t, i) : e && e.close ? e.close(t, i) : a("关闭websocket失败 缺少websocket句柄")
                }, i.getPaySignData = function() {
                    return this.rawData
                }, i.reqSendPay = function(e) {
                    var t = {
                            respCode: p.AppPayResult.UNINE,
                            req: e,
                            msg: null
                        },
                        i = e.callback;
                    if (_.isNull(e) || _.isNull(e.num) || _.isNull(e.zoneId) || 0 == this.isCanPay()) return i && i(t), void d.logPlatform(this.ClientPlatform + " 支付失败， body=" + e);
                    e.offerId = c.WX_PayOfferId, e.env = c.WX_PayEnv, e.buyQuantity = e.num, R.instance.requestMidasPayment(e, (function(e) {
                        d.logPlatform("微信支付******支付成功***********", e), t.respCode = p.AppPayResult.SUCCESS, t.msg = e, i && i(t), v.dispatch(h.OTHER_PAY_RESULT, t)
                    }), (function(e) {
                        d.logPlatform("微信支付******支付失败***********", e), t.respCode = p.AppPayResult.FAIL, t.msg = e;
                        var n = _.number_valueOf(e.errCode);
                        S.isIOS() && [-1, -15005, 701001].includes(n) && (S._IOSPayFailNum++, (S._IOSPayFailNum > 2 || 701001 == n) && (S._isSupportIOSPay = !1)), i && i(t), v.dispatch(h.OTHER_PAY_RESULT, t)
                    }))
                }, i.getIsSupportIOSPay = function() {
                    return !!this.isWXPlatform() && this._isSupportIOSPay
                }, i.setIsSupportIOSPay = function(e) {
                    return this._isSupportIOSPay = e
                }, i.checkIsSupportMidasPayment = function() {
                    var e = this;
                    this.isWXPlatform() && (this.isIOS() ? R.instance.checkIsSupportMidasPayment((function(t) {
                        e._isSupportIOSPay = t
                    })) : this._isSupportIOSPay = !0)
                }, i.regWxNetWorkCallback = function(e) {
                    0 != this.isWXPlatform() && R.instance.onNetworkStatusChange(e)
                }, i.reqPlatformFriendInteraction = function(e) {
                    void 0 === e && (e = null), d.logPlatform("获取平台朋友圈授权信息:>>>");
                    var t, i = function(t) {
                        d.logPlatform("获取平台朋友圈授权信息:>>>授权结果:" + String(t)), e && "function" == typeof e && e(t)
                    };
                    switch (this._currowPlatForm) {
                        case n.Platform.WECHAT_GAME:
                            if (1 != S.WxAuthSettingFriends) return t = i, void R.instance.authorize(P.WxFriendInteraction, (function() {
                                d.logPlatform("授权成功"), S.WxAuthSettingFriends = 1, t(!0)
                            }), (function() {
                                d.logPlatform("授权失败"), S.WxAuthSettingFriends = -1, t(!1)
                            }));
                            i(!0);
                        case n.Platform.DESKTOP_BROWSER:
                    }
                }, i.reqPlatformGameClubData = function(e) {
                    void 0 === e && (e = null), d.logPlatform("获取平台游戏圈授权信息:>>>");
                    var t, i = function(t) {
                        d.logPlatform("获取平台游戏圈授权信息:>>>授权结果:" + String(t)), e && "function" == typeof e && e(t)
                    };
                    switch (this._currowPlatForm) {
                        case n.Platform.WECHAT_GAME:
                            if (1 != S.WxAuthSettingClub) return t = i, void R.instance.authorize(P.WxGameClubData, (function() {
                                d.logPlatform("游戏圈授权成功"), S.WxAuthSettingClub = 1, t(!0)
                            }), (function() {
                                d.logPlatform("游戏圈授权失败"), S.WxAuthSettingClub = -1, t(!1)
                            }));
                            i(!0);
                        case n.Platform.DESKTOP_BROWSER:
                    }
                }, i.setPlatformCloudStorage = function(e, t) {
                    if (void 0 === t && (t = null), d.logPlatform("设置平台云数据:key>>>", e), 1 == S.WxAuthSettingFriends) {
                        var i = [],
                            a = function(e) {
                                d.logPlatform("设置平台云数据:>>>结果", e), t && "function" == typeof t && t(e)
                            };
                        switch (this._currowPlatForm) {
                            case n.Platform.WECHAT_GAME:
                                for (var o = [], r = 0; r < e.length; r++) {
                                    var s = {
                                        key: String(e[r].key),
                                        value: String(e[r].value)
                                    };
                                    o.push(s), i.push(s.key)
                                }
                                R.instance.setUserCloudStorage(o, (function(e) {
                                    d.logPlatform("setUserCloudStorage 设置平台云数据", o, e), a(!0)
                                }), (function() {
                                    d.logPlatform("setUserCloudStorage 设置平台云数据 失败", o), a(!1)
                                }));
                                break;
                            case n.Platform.DESKTOP_BROWSER:
                        }
                    } else t && t(!1)
                }, i.getPlatformCloudStorage = function(e, t) {
                    if (void 0 === t && (t = null), d.logPlatform("获取平台云数据:key>>>", e), 1 == S.WxAuthSettingFriends) {
                        var i = function(e) {
                            d.logPlatform("获取平台云数据:>>>结果", e), t && "function" == typeof t && t(e)
                        };
                        switch (this._currowPlatForm) {
                            case n.Platform.WECHAT_GAME:
                                R.instance.getUserCloudStorage(e, (function(e) {
                                    d.logPlatform("setUserCloudStorage 获取平台云数据", e), i(e)
                                }), (function() {
                                    d.logPlatform("reqFriendKVList 获取平台云数据 失败", e), i(null)
                                }));
                                break;
                            case n.Platform.DESKTOP_BROWSER:
                        }
                    } else t && t(null)
                }, i.postMessage = function(e) {
                    switch (this._currowPlatForm) {
                        case n.Platform.WECHAT_GAME:
                            R.instance.postMessage(e);
                            break;
                        case n.Platform.DESKTOP_BROWSER:
                    }
                }, i.vibrate = function(e, t, i) {
                    void 0 === e && (e = !1), void 0 === t && (t = null), void 0 === i && (i = null);
                    var a = function(e) {
                            i && i(e)
                        },
                        o = E.get(f.SYS_Shock, 1);
                    if (console.log("震动==>", e, t, o), 0 != o) switch (this._currowPlatForm) {
                        case n.Platform.WECHAT_GAME:
                            console.log("调用微信震动接口"), 1 == e ? (console.log("调用微信震动接口vibrateLong"), R.instance.vibrateLong((function(e) {
                                console.log("请求长时间震动成功：", e), a(e)
                            }), (function(e) {
                                console.log("请求长时间震动失败：", e), a(e)
                            }))) : (console.log("调用微信震动接口vibrateShort"), t = t || y.heavy, R.instance.vibrateShort(t, (function(e) {
                                console.log("请求短时间震动成功：", t, e), a(e)
                            }), (function(e) {
                                console.log("请求短时间震动失败：", t, e), a(e)
                            })));
                            break;
                        case n.Platform.DESKTOP_BROWSER:
                    }
                }, i.initAdVideo = function(e, t) {
                    if (void 0 === t && (t = !1), e && e.length > 0) switch (console.log("[广告]---initAdVideo初始化", e), this._currowPlatForm) {
                        case n.Platform.WECHAT_GAME:
                            R.instance.createRewardedVideoAd(e, t);
                            break;
                        case n.Platform.DESKTOP_BROWSER:
                    }
                }, i.playerAdVideo = function(e, t) {
                    void 0 === e && (e = null), void 0 === t && (t = null);
                    var i = "";
                    switch (this._currowPlatForm) {
                        case n.Platform.WECHAT_GAME:
                            v.dispatch(h.SYS_SHOW_NETLOADING, 15), R.instance.playRewardedVideoShow((function() {
                                console.log("[广告]播放----------开始"), v.dispatch(h.SYS_CLOSE_NETLOADING), "close" != i && (i = "open", v.dispatch(h.SYS_REWARD_VEDIO_STATUS, "open"))
                            }), (function() {
                                console.log("[广告]播放----------失败"), v.dispatch(h.SYS_CLOSE_NETLOADING), v.dispatch(h.SYS_TOAST_TIP, {
                                    content: "激励视频广告调起失败，请重试！"
                                }), e && e(!1, t)
                            }), (function(n) {
                                console.log("[广告]播放----------结束", n), v.dispatch(h.SYS_CLOSE_NETLOADING), e && e(1 == n, t), i = "close", v.dispatch(h.SYS_REWARD_VEDIO_STATUS, "close"), setTimeout((function() {
                                    1 == n && v.dispatch(h.NET_REQ_NEW_VDIEO_REPORT, t)
                                }), 500)
                            }));
                            break;
                        case n.Platform.DESKTOP_BROWSER:
                            e && e(!0, t);
                            break;
                        default:
                            e && e(!1, t)
                    }
                }, i.closeAdVideo = function() {
                    switch (console.log("[广告]--- 销毁激励视频广告实例。"), this._currowPlatForm) {
                        case n.Platform.WECHAT_GAME:
                            v.dispatch(h.SYS_CLOSE_NETLOADING), R.instance.closeAdVideo()
                    }
                }, i.downloadFile = function(e, t) {
                    void 0 === t && (t = null), d.logPlatform("文件下载");
                    var i = !1,
                        a = function(n) {
                            if (t && 0 == i) {
                                i = !0;
                                var a = {
                                    url: e,
                                    code: n ? n.statusCode : -1,
                                    filePath: n ? n.tempFilePath : null
                                };
                                console.log("文件下载 是否成功" + (200 === a.code) + " 所有参数:", n), t(a)
                            }
                        };
                    switch (this._currowPlatForm) {
                        case n.Platform.WECHAT_GAME:
                            R.instance.downloadFile(e, null, null, a, a, null);
                            break;
                        case n.Platform.DESKTOP_BROWSER:
                    }
                }, i.getLaunchOptionsSync = function() {
                    switch (this._currowPlatForm) {
                        case n.Platform.WECHAT_GAME:
                            var e = R.instance.getLaunchOptionsSync();
                            this.AppLaunchOptions = _.table_verify(e);
                            break;
                        default:
                            this.AppLaunchOptions = {}
                    }
                    return console.log("获取小游戏冷启动时的参数==>", this.AppLaunchOptions), this.AppLaunchOptions
                }, i.getEnterOptionsSync = function() {
                    var e = {};
                    switch (this._currowPlatForm) {
                        case n.Platform.WECHAT_GAME:
                            var t = R.instance.getEnterOptionsSync();
                            e = _.table_verify(t)
                    }
                    return console.log("获取小游戏启动/显示时的参数==>", e), e
                }, i.setMessageToFriendQuery = function(e) {
                    console.log("设置定向分享数据:Object>>>", e), R.instance.setMessageToFriendQuery(e)
                }, i.navigateToMiniProgram = function(e) {
                    console.log("打开消息数据:Object>>>", e), R.instance.navigateToMiniProgram(e)
                }, i.onShow = function(e) {
                    console.log("监听小游戏回到前台的事件"), R.instance.onShow(e)
                }, i.openSetting = function(e, t) {
                    var i = this;
                    switch (void 0 === e && (e = !1), void 0 === t && (t = null), this._currowPlatForm) {
                        case n.Platform.WECHAT_GAME:
                            console.log("WXSdk.instance.openSetting"), R.instance.openSetting(e, (function(e) {
                                console.log("success", e), i.copyValueToSubscriptionsSetting(e.subscriptionsSetting), t && t(e)
                            }), (function(e) {
                                console.log("fail", e), console.log(e)
                            }))
                    }
                }, i.getMenuButtonBoundingClientRect = function() {
                    switch (this._currowPlatForm) {
                        case n.Platform.WECHAT_GAME:
                            return R.instance.getMenuButtonBoundingClientRect()
                    }
                }, i.getRecorderManager = function() {
                    return R.instance.getRecorderManager()
                }, i.showLoading = function(e) {
                    return R.instance.showLoading(e)
                }, i.hideLoading = function(e, t, i, n) {
                    return void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = null), R.instance.hideLoading(e, t, i, n)
                }, i.reqPlatformRecordInteraction = function(e) {
                    void 0 === e && (e = null), d.logPlatform("获取录音授权信息:>>>");
                    var t, i = function(t) {
                        d.logPlatform("获取录音授权信息:>>>授权结果:" + String(t)), e && "function" == typeof e && e(t)
                    };
                    switch (this._currowPlatForm) {
                        case n.Platform.WECHAT_GAME:
                            if (1 != S.WxAuthSettingRecord) return t = i, console.log("显示授权弹窗"), void R.instance.authorize(P.WxRecordInteraction, (function() {
                                d.logPlatform("授权成功"), S.WxAuthSettingRecord = 1, t(!0)
                            }), (function() {
                                d.logPlatform("授权失败"), S.WxAuthSettingRecord = -1, t(!1)
                            }));
                            i(!0);
                        case n.Platform.DESKTOP_BROWSER:
                    }
                }, i.createInnerAudioContext = function(e) {
                    return R.instance.createInnerAudioContext(e)
                }, i.request = function(e, t, i, n, a, o, r, s, c, l) {
                    void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = null), void 0 === a && (a = null), void 0 === o && (o = null), void 0 === r && (r = 6e3), void 0 === s && (s = "GET"), void 0 === c && (c = "json"), void 0 === l && (l = "text"), R.instance.request(e, i, n, a, t, o, r, s, c, l)
                }, i.uploadFile = function(e) {
                    return R.instance.uploadFile(e)
                }, i.getTopMenuRect = function() {
                    return n.platform == n.Platform.WECHAT_GAME ? R.instance.getTopMenuRect() : {
                        width: 88,
                        height: 32,
                        top: n.platform == n.Platform.DESKTOP_BROWSER ? 0 : 49,
                        bottom: 0,
                        right: 100,
                        left: 0
                    }
                }, i.getFileSystemManager = function() {
                    return R.instance.getFileSystemManager()
                }, i.showShareMenu = function(e, t, i, n, a) {
                    return void 0 === e && (e = !0), void 0 === i && (i = null), void 0 === n && (n = null), void 0 === a && (a = null), R.instance.showShareMenu(e, t, i, n, a)
                }, i.updateShareMenu = function(e) {
                    return R.instance.updateShareMenu(e)
                }, i.getGroupCloudStorage = function(e) {
                    return R.instance.getGroupCloudStorage(e)
                }, i.requestSubscribeMessage = function(e, t, i) {
                    switch (void 0 === t && (t = null), void 0 === i && (i = null), this._currowPlatForm) {
                        case n.Platform.WECHAT_GAME:
                            R.instance.requestSubscribeMessage(e, (function(e) {
                                for (var i in console.log("requestSubscribeMessage", e), S.WxAuthSettingSubscriptions = S.WxAuthSettingSubscriptions || {}, S.WxAuthSettingSubscriptions.itemSettings = S.WxAuthSettingSubscriptions.itemSettings || {}, e) "errMsg" !== i && Object.prototype.hasOwnProperty.call(e, i) && (S.WxAuthSettingSubscriptions.itemSettings[i] = e[i]);
                                t && t(e)
                            }), (function(e) {
                                console.log("requestSubscribeMessage", e), t && i(e)
                            }))
                    }
                }, i.copyValueToSubscriptionsSetting = function(e) {
                    console.log("copyValueToSubscriptionsSetting", e, S.WxAuthSettingSubscriptions), _.table_isEmpty(e) || (_.table_isEmpty(S.WxAuthSettingSubscriptions) ? S.WxAuthSettingSubscriptions = _.table_verify(e) : (null === e.mainSwitch && void 0 === e.mainSwitch || (S.WxAuthSettingSubscriptions.mainSwitch = e.mainSwitch), Object.assign(S.WxAuthSettingSubscriptions.itemSettings, e.itemSettings)))
                }, i.onRequestSubscribeSystemMessage = function(e, t, i, n) {
                    R.instance.onRequestSubscribeSystemMessage(e, t, i, n)
                }, i.updateWxAuthSettingInfo = function(e) {
                    null == e[P.userInfo] ? S.WxAuthSettingUserInfo = 0 : e[P.userInfo] ? (S.WxAuthSettingUserInfo = 1, v.dispatch(h.REPORT_USER_INTERACTION, {
                        eventID: "event_6"
                    })) : (v.dispatch(h.REPORT_USER_INTERACTION, {
                        eventID: "event_7"
                    }), S.WxAuthSettingUserInfo = -1), null == e[P.WxFriendInteraction] ? S.WxAuthSettingFriends = 0 : e[P.WxFriendInteraction] ? S.WxAuthSettingFriends = 1 : S.WxAuthSettingFriends = -1, null == e[P.WxRecordInteraction] ? S.WxAuthSettingRecord = 0 : e[P.WxRecordInteraction] ? S.WxAuthSettingRecord = 1 : S.WxAuthSettingRecord = -1, null == e[P.writePhotosAlbum] ? S.WxWritePhotosAlbum = 0 : e[P.writePhotosAlbum] ? S.WxWritePhotosAlbum = 1 : S.WxWritePhotosAlbum = -1
                }, i.setStatusBarStyle = function(e, t, i, a) {
                    switch (void 0 === t && (t = null), void 0 === i && (i = null), void 0 === a && (a = null), this._currowPlatForm) {
                        case n.Platform.WECHAT_GAME:
                            R.instance.setStatusBarStyle(e, t, i, a)
                    }
                }, i.clearDeviceTimer = function() {
                    this.devieTimer && (clearInterval(this.devieTimer), this.devieTimer = null)
                }, i.setDeviceOrientation = function(e, t, i, a) {
                    var o = this;
                    if (void 0 === t && (t = null), void 0 === i && (i = null), void 0 === a && (a = null), this._orientation != e) {
                        if (this.targetOrientation === e) return t && t(), void console.log("屏幕切换-------setDeviceOrientation----目标方向和实际方向一致");
                        switch (this.clearDeviceTimer(), this.targetOrientation = e, this._currowPlatForm) {
                            case n.Platform.WECHAT_GAME:
                                console.log("屏幕切换-------setDeviceOrientation----开始切换，当前：" + this._orientation + ", 目标：" + e);
                                var r = 0;
                                this.devieTimer = setInterval((function() {
                                    r++, o.getDeviceOrientation() === e ? (o.clearDeviceTimer(), o._orientation = e, o._refreshMiniGameInfo(), console.log("屏幕切换------setDeviceOrientation-------屏幕已经切换了，停止定时器")) : r >= 50 && (o.clearDeviceTimer(), o.getDeviceOrientation() === e && (o.targetOrientation = null, console.log("屏幕切换-----setDeviceOrientation--------切换成功停止轮询定时器，", e), o.onUpdteSystemInfo("setDeviceOrientation timer")), console.log("屏幕切换------setDeviceOrientation-------切换超时，停止定时器", e), t && t())
                                }), 50), R.instance.setDeviceOrientation(e, (function() {
                                    console.log("屏幕切换-------setDeviceOrientation------已经通知微信进行切换，", e), t && t(), o._SystemInfo.platform.toUpperCase() == n.OS.OHOS && o.updateScreen()
                                }), i, a);
                                break;
                            default:
                                this._orientation = e, t && t(), a && a()
                        }
                    } else t && t()
                }, i.getWxSDK = function() {
                    return R.instance
                }, i.getDeviceOrientation = function() {
                    return R.instance ? R.instance.getDeviceOrientation() : this._orientation
                }, i._listenDeviceOrientationChange = function() {
                    var e = this;
                    switch (this._currowPlatForm) {
                        case n.Platform.WECHAT_GAME:
                            R.instance.onDeviceOrientationChange((function(t) {
                                console.log("屏幕切换----------onDeviceOrientationChange监听结果：", t.value + ", target=" + e.targetOrientation), e.targetOrientation && (null == t ? void 0 : t.value) === e.targetOrientation && (e.clearDeviceTimer(), e.targetOrientation = null, e._orientation = t.value, e.onUpdteSystemInfo("_listenDeviceOrientationChange"))
                            })), R.instance.onWindowResize((function(t) {
                                console.log("屏幕切换-------onWindowResize---屏幕适配---窗口大小发生变化：", " windowWidth=" + ((null == t ? void 0 : t.windowWidth) || "") + ", windowHeight=" + ((null == t ? void 0 : t.windowHeight) || "") + ",屏幕参数---width=" + o.windowSize.width + ", height=" + o.windowSize.height), e.targetOrientation && e.getDeviceOrientation() !== e.targetOrientation ? e.setDeviceOrientation(e.targetOrientation) : t && t.windowWidth && t.windowHeight && (o.windowSize.width == t.windowWidth && o.windowSize.height == t.windowHeight || e.onUpdteSystemInfo("_listenDeviceOrientationChange"))
                            }))
                    }
                }, i.clearUpdateTimer = function() {
                    this.updateTimer && (clearInterval(this.updateTimer), this.updateTimer = null)
                }, i.onUpdteSystemInfo = function(e) {
                    var t = this;
                    console.log("屏幕切换-------------onUpdteSystemInfo-----", e, this._currowPlatForm, this._SystemInfo.platform), "windows" == this._SystemInfo.platform ? this.updateScreen(!0) : (this.clearUpdateTimer(), this._refreshMiniGameInfo(), this.updateTimer = setTimeout((function() {
                        t.updateTimer = null, t._SystemInfo = R.instance.getSystemInfoSync();
                        var e = t._SystemInfo.pixelRatio;
                        t._SystemInfo.screenWidth * e != o.windowSize.width && (console.log("屏幕切换-----------------屏幕大小和实际大小不一致，强制刷新引擎"), t._refreshMiniGameInfo()), console.log("屏幕切换----------onUpdteSystemInfo---结束，重新获取屏幕信息", "screenWidth=" + t._SystemInfo.screenWidth * e + ",screenHeight=" + t._SystemInfo.screenHeight * e + ",windowWidth=" + t._SystemInfo.windowWidth * e + ",windowHeight=" + t._SystemInfo.windowHeight * e + ",deviceOrientation=" + t._SystemInfo.deviceOrientation + ",\n                    屏幕参数---width=" + o.windowSize.width + ", height=" + o.windowSize.height), t._notify()
                    }), 500))
                }, i.updateScreen = function(e) {
                    var t = this;
                    void 0 === e && (e = !1), this.clearUpdateTimer();
                    var i = 0,
                        n = !1,
                        a = o.windowSize.width,
                        r = o.windowSize.height;
                    console.log("屏幕切换-------updateScreen------", a, r), this.updateTimer = setInterval((function() {
                        i++, t._refreshMiniGameInfo();
                        var s = o.windowSize.width,
                            c = o.windowSize.height;
                        if (e && (a != s || r != c)) return console.log("屏幕切换-------updateScreen------屏幕大小发生了变化"), t.clearUpdateTimer(), t.clearDeviceTimer(), t.targetOrientation = null, void t._notify();
                        t.targetOrientation && -1 !== t.targetOrientation.indexOf("landscape") ? (s > c && n && (console.log("屏幕切换-------updateScreen------屏幕已经是横屏了"), setTimeout((function() {
                            t._notify()
                        })), t.clearUpdateTimer(), t.clearDeviceTimer(), t._orientation = t.targetOrientation, t.targetOrientation = null), n = s > c) : t.targetOrientation && -1 !== t.targetOrientation.indexOf("portrait") && (s < c && n && (console.log("屏幕切换-------updateScreen------屏幕已经是竖屏了"), setTimeout((function() {
                            t._notify()
                        })), t.clearUpdateTimer(), t.clearDeviceTimer(), t._orientation = t.targetOrientation, t.targetOrientation = null), n = s < c), i >= 60 && (t.clearUpdateTimer(), t.clearDeviceTimer(), t.targetOrientation = null)
                    }), 50)
                }, i.getScreenSize = function() {
                    return {
                        width: o.windowSize.width,
                        height: o.windowSize.height
                    }
                }, i._notify = function() {
                    var e = v.dispatch(h.DEVICE_ORIENTATION_CHANGE, !0);
                    console.log("屏幕切换--------_notify-----结束，广播通知刷新分辨率结果：", e)
                }, i._refreshMiniGameInfo = function() {
                    if (this._currowPlatForm == n.Platform.WECHAT_GAME) {
                        var e, t;
                        this._SystemInfo = null == o || null == (e = o.minigame) ? void 0 : e.refreshSystemInfo(), null == o || null == (t = o.screenAdapter) || t.emit("window-resize");
                        var i = this._SystemInfo.pixelRatio;
                        console.log("屏幕切换-------_refreshMiniGameInfo------刷新引擎接口", "screenWidth=" + this._SystemInfo.screenWidth * i + ",screenHeight=" + this._SystemInfo.screenHeight * i + ",windowWidth=" + this._SystemInfo.windowWidth * i + ",windowHeight=" + this._SystemInfo.windowHeight * i + ",deviceOrientation=" + this._SystemInfo.deviceOrientation + ",\n                , 屏幕参数---width=" + o.windowSize.width + ", height=" + o.windowSize.height)
                    }
                }, i.readWechatFile = function(e) {
                    R.instance.readWechatFile(e)
                }, i.writeWechatFile = function(e) {
                    R.instance.writeWechatFile(e)
                }, i.appendWechatFile = function(e) {
                    R.instance.appendWechatFile(e)
                }, i.rmdirWechatFile = function(e) {
                    R.instance.rmdirWechatFile(e)
                }, i.removeSavedWechatFile = function(e) {
                    R.instance.removeSavedWechatFile(e)
                }, i.setUserTraceId = function(e) {
                    E.set(f.USER_TRACE_ID, e)
                }, i.getUserTraceId = function() {
                    return E.get(f.USER_TRACE_ID, null)
                }, i.onInteractiveStorageModified = function(e) {
                    switch (this._currowPlatForm) {
                        case n.Platform.WECHAT_GAME:
                            R.instance.onInteractiveStorageModified(e)
                    }
                }, i.offInteractiveStorageModified = function(e) {
                    switch (this._currowPlatForm) {
                        case n.Platform.WECHAT_GAME:
                            R.instance.offInteractiveStorageModified(e)
                    }
                }, i.getUserInteractiveStorage = function(e) {
                    switch (this._currowPlatForm) {
                        case n.Platform.WECHAT_GAME:
                            R.instance.getUserInteractiveStorage(e)
                    }
                }, i.getGameClubData = function(e) {
                    console.log("获取游戏圈数据:Object>>>", e), R.instance.getGameClubData(e)
                }, i.createGameClubButton = function(e) {
                    return console.log("创建游戏圈按钮createGameClubButton:Object>>>", e), R.instance.createGameClubButton(e)
                }, i.onCompassListen = function(e, t) {
                    if (void 0 === t && (t = null), this.isAndroid() || this.isIOS()) switch (this._currowPlatForm) {
                        case n.Platform.WECHAT_GAME:
                            R.instance.onCompassListen(e, t)
                    }
                }, i.restartMiniProgram = function(e) {
                    switch (void 0 === e && (e = {}), this._currowPlatForm) {
                        case n.Platform.WECHAT_GAME:
                            R.instance.restartMiniProgram(e);
                        case n.Platform.MOBILE_BROWSER:
                        case n.Platform.DESKTOP_BROWSER:
                            window.location.reload()
                    }
                }, i.onGameLiveStateChange = function() {
                    var e = this;
                    switch (this._currowPlatForm) {
                        case n.Platform.WECHAT_GAME:
                            R.instance.onGameLiveStateChange((function(t) {
                                console.log("******直播状态回调*****", t), "start" == t ? (console.log("******直播开始*****"), e._startLive()) : "end" == t && (console.log("******直播结束*****"), e._stopLive())
                            }));
                        case n.Platform.MOBILE_BROWSER:
                        case n.Platform.DESKTOP_BROWSER:
                    }
                }, i._startListenLiveState = function() {
                    var e = this;
                    this._currowPlatForm == n.Platform.WECHAT_GAME && (console.log("直播每隔10s查询一次直播状态------------1"), this._stopListenLiveState(), this._liveStateHandler = setTimeout((function() {
                        v.dispatch(h.NOTICE_LIVE_STATE, {
                            tag: "updateTime",
                            time: _.time()
                        }), console.log("直播每隔10s查询一次直播状态------------2"), e._startListenLiveState()
                    }), 1e4))
                }, i._startLive = function() {
                    this._startListenLiveState(), v.dispatch(h.NOTICE_LIVE_STATE, {
                        tag: "start",
                        time: _.time()
                    })
                }, i._stopLive = function() {
                    this._stopListenLiveState(), v.dispatch(h.NOTICE_LIVE_STATE, {
                        tag: "end",
                        time: _.time()
                    })
                }, i._stopListenLiveState = function() {
                    this._liveStateHandler && (clearTimeout(this._liveStateHandler), this._liveStateHandler = null)
                }, i.onAddToFavorites = function() {
                    console.log("收藏游戏"), v.dispatch(h.NET_REQ_REPORT_TX_GD_SDK, p.TXGDActionType.ADD_TO_WISHLIST, {
                        type: "default"
                    })
                }, i.getBatteryInfo = function(e) {
                    return R.instance.getBatteryInfo(e)
                }, i.saveToAlbum = function(e) {
                    var t;
                    S.isWXPlatform() && (console.log("截图--------------Platform.WxWritePhotosAlbum=", S.WxWritePhotosAlbum), null != (t = window.canvas) && t.toTempFilePath && this._checkUserAuth({
                        title: "",
                        content: "我们需要访问您的相册权限,您是否确定?",
                        scope: P.writePhotosAlbum,
                        authName: "WxWritePhotosAlbum",
                        callBack: function() {
                            window.canvas.toTempFilePath({
                                x: e.x,
                                y: e.y,
                                width: e.width,
                                height: e.height,
                                destWidth: e.destWidth,
                                destHeight: e.destHeight,
                                fileType: "jpg",
                                quality: .8,
                                success: function(t) {
                                    console.log("截图--------------saveImageToPhotosAlbum------res=", t), R.instance.saveImageToPhotosAlbum(t.tempFilePath, e.successCallBack, e.failCallBack, e.completeCallBack)
                                },
                                fail: function(t) {
                                    console.log("截图--------------saveImageToPhotosAlbum------fail=", t), e.failCallBack && e.failCallBack()
                                }
                            })
                        },
                        failCallBack: function() {
                            e.failCallBack && e.failCallBack()
                        }
                    }))
                }, i.getScreenSafeAreaRect = function() {
                    var e = R.instance.getWindowInfo(),
                        t = 0;
                    if (null != e && e.safeArea) {
                        var i = e.safeArea.left,
                            n = e.safeArea.top,
                            a = o.devicePixelRatio,
                            s = r.getScaleX(),
                            c = r.getScaleY();
                        n > 0 && 0 == i ? t = n * a / s : 0 == n && i > 0 && (t = i * a / c)
                    }
                    return {
                        x: t
                    }
                }, i.notifyMemoryLow = function(e, t) {
                    R.instance.notifyMemoryLow(e, t)
                }, i.resetTempStorage = function() {
                    R.instance.resetTempStorage()
                }, i.notifyRestartGame = function(e) {
                    R.instance.notifyRestartGame(e)
                }, i.getWxObj = function() {
                    return R.instance.wxSdk
                }, i.exitMiniProgram = function() {
                    R.instance.exitMiniProgram()
                }, i.checkStorageMemory = function() {
                    R.instance.checkStorageMemory()
                }, i.joinVoIPChat = function(e) {
                    console.log("实时语音------joinVoIPChat--", S.WxAuthSettingRecord), this.isWXPlatform() && this._checkUserAuth({
                        title: null,
                        content: null,
                        scope: P.WxRecordInteraction,
                        authName: "WxAuthSettingRecord",
                        callBack: function() {
                            R.instance.joinVoIPChat(e)
                        }
                    })
                }, i.exitVoIPChat = function(e) {
                    this.isWXPlatform() && R.instance.exitVoIPChat(e)
                }, i.updateVoIPChatMuteConfig = function(e, t, i) {
                    this.isWXPlatform() && R.instance.updateVoIPChatMuteConfig(e, t, i)
                }, i.createPageManager = function() {
                    return R.instance.createPageManager()
                }, i.initWxPlugin = function() {}, t(e, [{
                    key: "orientation",
                    get: function() {
                        switch (this._currowPlatForm) {
                            case n.Platform.WECHAT_GAME:
                                return this._orientation || this.SystemInfo, this._orientation;
                            default:
                                var e = r.getVisibleSize();
                                return e.width > e.height ? "landscape" : "portrait"
                        }
                    }
                }, {
                    key: "DeviceID",
                    get: function() {
                        return this._initDeviceID(), this._DeviceID
                    }
                }, {
                    key: "Lang",
                    get: function() {
                        switch (this._currowPlatForm) {
                            case n.Platform.WECHAT_GAME:
                                return this.SystemInfo, this._SystemInfo ? this._SystemInfo.language : null;
                            case n.Platform.DESKTOP_BROWSER:
                                return n.language
                        }
                        return null
                    }
                }, {
                    key: "windowHeight",
                    get: function() {
                        switch (this._currowPlatForm) {
                            case n.Platform.WECHAT_GAME:
                                return this.SystemInfo, this._SystemInfo ? this._SystemInfo.windowHeight : null
                        }
                        return null
                    }
                }, {
                    key: "windowWidth",
                    get: function() {
                        switch (this._currowPlatForm) {
                            case n.Platform.WECHAT_GAME:
                                return this.SystemInfo, this._SystemInfo ? this._SystemInfo.windowWidth : null
                        }
                        return null
                    }
                }, {
                    key: "PlatFormVersion",
                    get: function() {
                        switch (this._currowPlatForm) {
                            case n.Platform.WECHAT_GAME:
                                return this._platformVer || (this.SystemInfo, this._SystemInfo && (this._platformVer = this._SystemInfo.version)), this._platformVer;
                            case n.Platform.DESKTOP_BROWSER:
                                return this._platformVer = n.browserVersion, this._platformVer;
                            default:
                                this._platformVer = ""
                        }
                        return this._platformVer
                    }
                }, {
                    key: "SDKVersion",
                    get: function() {
                        switch (this._currowPlatForm) {
                            case n.Platform.WECHAT_GAME:
                                return this._SDKVer || (this.SystemInfo, this._SystemInfo && (this._SDKVer = this._SystemInfo.SDKVersion)), this._SDKVer;
                            case n.Platform.DESKTOP_BROWSER:
                                return this._SDKVer = "", this._SDKVer;
                            default:
                                this._SDKVer = ""
                        }
                        return this._SDKVer
                    }
                }, {
                    key: "ClientPlatform",
                    get: function() {
                        switch (this._currowPlatForm) {
                            case n.Platform.WECHAT_GAME:
                                return this._platFormClient || (this.SystemInfo, this._SystemInfo && (this._platFormClient = this._SystemInfo.platform)), this._platFormClient;
                            case n.Platform.DESKTOP_BROWSER:
                                return this._platFormClient = "windows", this._platFormClient;
                            default:
                                this._platFormClient = null
                        }
                        return this._platFormClient
                    }
                }, {
                    key: "NetWorkType",
                    get: function() {
                        return this._NetWorkType
                    }
                }, {
                    key: "SystemInfo",
                    get: function() {
                        var e = this,
                            t = function() {
                                e._Guid = "", e._Machineid = "", e._MachineModel = "", e._PhoneModel = "", e._IMSI = "", e._ICCID = "", e._IMEI = "", e._PhoneCardType = -1, e._NetWorkType = -1
                            };
                        switch (this._currowPlatForm) {
                            case n.Platform.WECHAT_GAME:
                                if (!this._SystemInfo && R) {
                                    var i = R.instance.getSystemInfoSync();
                                    this._SystemInfo = i, this._orientation = i.deviceOrientation
                                }
                                return t(), this.updateNetWorkType, this._SystemInfo;
                            case n.Platform.DESKTOP_BROWSER:
                                return t(), n;
                            default:
                                t()
                        }
                        return null
                    }
                }], [{
                    key: "instance",
                    get: function() {
                        return this._instance && null != this._instance || (this._instance = new e), this._instance
                    }
                }]), e
            }();
            C._instance = null;
            var S = e("Platform", C.instance);
            i._RF.pop()
        }
    }
}))