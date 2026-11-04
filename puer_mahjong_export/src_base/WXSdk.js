System.register("chunks:///_virtual/WXSdk.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./Logger.ts", "./Utils.ts", "./AppEvent.ts", "./EventManager.ts", "./WXSdkDefines.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d;
    return {
        setters: [function(e) {
            t = e.asyncToGenerator, i = e.createClass
        }, function(e) {
            n = e.cclegacy, a = e.sys, o = e.assetManager
        }, function(e) {
            r = e.ClientInfo
        }, function(e) {
            s = e.Logger
        }, function(e) {
            c = e.Utils
        }, function(e) {
            l = e.AppEvent
        }, function(e) {
            u = e.EventManager
        }, function(e) {
            d = e.WXSdk_VibrateShortType
        }],
        execute: function() {
            n._RF.push({}, "6ead3GznBRBsYvBTjITxdyr", "WXSdk", void 0), e("WXSdk", function() {
                function e() {
                    this.wxSdk = void 0, this.wxLib = void 0, this._sysInfo = void 0, this._sdkVersion = "0.0.0", this._realtimeLogManager = void 0, this._fileSystemManager = void 0, this._adRewardedVideo = null, this._adRewardListen = {
                        loadListen: Function = null,
                        closeListem: Function = null,
                        errorListen: Function = null
                    }, this.VideoCallFunc = {
                        onLoad: null,
                        onError: null,
                        onClickClose: null,
                        isReturn: !1,
                        isClick: !1
                    }, this.NeedPrivacyAuthorization = null, this._voIPSuccess = !1, this.errNum = 0, this.init(), console.log("[ wxSdk ]>>>>\n")
                }
                var n = e.prototype;
                return n.isInit = function() {
                    return null != this.wxSdk && null != this.wxSdk
                }, n.init = function() {
                    var e = this;
                    s.addWXLogListen((function(t) {
                        e.printLog(t)
                    })), a.platform == a.Platform.WECHAT_GAME && (this.wxSdk = wx, this.wxSdk && (this.wxLib = this.wxSdk.abyLibs, this._sdkVersion = this.getSDKVersion() || "0.0.0", this._sysInfo = this.getSystemInfoSync(), this._realtimeLogManager = this.getRealtimeLogManager(), this._fileSystemManager = this.getFileSystemManager(), this.wxSdk.onShow((function(t) {
                        console.log("分享---微信启动 分享参数onShow：", t), u.dispatch(l.SYS_APP_START, t), e.setKeepScreenOn(!0), e.wxSdk.onMemoryWarning(e._triggerGC)
                    })), this.wxSdk.onHide((function(t) {
                        e.wxSdk.offMemoryWarning(e._triggerGC)
                    })), this.listenEngineError()))
                }, n.listenEngineError = function() {
                    var e = this;
                    void 0 !== this.wxSdk && this.wxSdk.onError && this.wxSdk.onError((function(t) {
                        console.log("捕获引擎报错：", t), u.dispatch(l.REPORT_CLICK_EVENT, {
                            eventID: "errorId",
                            isFouce: !0,
                            body: t
                        }), 0 == r.DEBUG && 0 == e.errNum && (e.errNum++, e.restartMiniProgram({}))
                    }))
                }, n._triggerGC = function() {
                    console.log("内存告警，释放内存"), e.instance.notifyRestartGame("当前设备内存不足，重启游戏即可恢复正常，是否重启？")
                }, n.onCompassListen = function(e, t) {
                    "start" == e.tag ? e.listenChange ? this.wxSdk.onCompassChange((function(e) {
                        t && t(e)
                    })) : (console.log("启动罗盘监听"), this.wxSdk.startCompass((function(e) {
                        console.log("启动罗盘监听，监听成功", e)
                    }), (function(e) {
                        console.log("启动罗盘监听，监听失败", e)
                    }), (function(e) {
                        console.log("启动罗盘监听，监听返回", e)
                    }))) : "stop" == e.tag && this.wxSdk.stopCompass((function(e) {
                        console.log("停止罗盘数据，监听成功", e)
                    }), (function(e) {
                        console.log("停止罗盘数据，监听失败", e)
                    }), (function(e) {
                        console.log("停止罗盘数据，监听返回", e)
                    }))
                }, n.printLog = function(e) {
                    var t = this.getRealtimeLogManager();
                    t && t.info(e)
                }, n.getSDKVersion = function() {
                    if (this.wxSdk) return this.wxSdk.getSystemInfoSync().SDKVersion || null
                }, n.getSystemInfoSync = function() {
                    if (this.wxSdk) return this.wxSdk.getSystemInfoSync()
                }, n.getDeviceOrientation = function() {
                    if (this.wxSdk) return this.getSystemInfoSync().deviceOrientation
                }, n.getWindowInfo = function() {
                    if (!(this.compareSdkVersion("2.25.3", this._sdkVersion) > 0)) return this.wxSdk ? this.wxSdk.getWindowInfo() : void 0
                }, n.getSystemInfoAsync = function(e, t, i) {
                    void 0 === e && (e = null), void 0 === t && (t = null), void 0 === i && (i = null), this.wxSdk.getSystemInfoAsync({
                        success: e,
                        fail: t,
                        complete: i
                    })
                }, n.checkSession = function(e, t, i) {
                    void 0 === e && (e = null), void 0 === t && (t = null), void 0 === i && (i = null), this.wxSdk.checkSession({
                        success: e,
                        fail: t,
                        complete: i
                    })
                }, n.login = function(e, t, i, n) {
                    void 0 === e && (e = null), void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = null), this.wxSdk.login({
                        timeout: e,
                        success: t,
                        fail: i,
                        complete: n
                    })
                }, n.request = function(e, t, i, n, a, o, r, s, c, l) {
                    void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = null), void 0 === a && (a = null), void 0 === o && (o = null), void 0 === r && (r = 6e3), void 0 === s && (s = "GET"), void 0 === c && (c = "json"), void 0 === l && (l = "text"), this.wxSdk.request({
                        url: e,
                        data: a,
                        header: o,
                        timeout: r || 6e3,
                        method: s,
                        dataType: c,
                        responseType: l,
                        success: t,
                        fail: i,
                        complete: n
                    })
                }, n.openSetting = function(e, t, i, n) {
                    void 0 === e && (e = !1), void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = null), this.compareSdkVersion("2.10.3", this._sdkVersion) > 0 ? this.showModelNotKeep() : (console.log("openSetting"), this.wxSdk.openSetting({
                        withSubscriptions: e,
                        success: t,
                        fail: i,
                        complete: n
                    }))
                }, n.getPrivacySetting = function(e, t, i) {
                    void 0 === e && (e = null), void 0 === t && (t = null), void 0 === i && (i = null), this.compareSdkVersion("2.32.3", this._sdkVersion) > 0 ? i() : this.wxSdk.getPrivacySetting({
                        success: e,
                        fail: t,
                        complete: i
                    })
                }, n.getSetting = function(e, t, i, n) {
                    void 0 === e && (e = !1), void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = null), this.wxSdk.getSetting({
                        withSubscriptions: e,
                        success: t,
                        fail: i,
                        complete: n
                    })
                }, n.getUserInfo = function(e, t, i, n, a) {
                    void 0 === e && (e = !1), void 0 === t && (t = "en"), void 0 === i && (i = null), void 0 === n && (n = null), void 0 === a && (a = null), this.wxSdk.getUserInfo({
                        withCredentials: e,
                        lang: t,
                        success: i,
                        fail: n,
                        complete: a
                    })
                }, n.authorize = function(e, t, i, n) {
                    void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = null), this.wxSdk.authorize({
                        scope: e,
                        success: t,
                        fail: i,
                        complete: n
                    })
                }, n.createUserInfoButton = function(e) {
                    return 0 == this.isCanCreateUserInfoButton() ? (this.showModelNotKeep(), null) : this.wxSdk.createUserInfoButton(e)
                }, n.isCanCreateUserInfoButton = function() {
                    return !(this.compareSdkVersion("2.0.1", this._sdkVersion) > 0)
                }, n.onNeedPrivacyAuthorization = function(t, i) {
                    return void 0 === t && (t = null), void 0 === i && (i = null), !(this.compareSdkVersion("2.33.0", this._sdkVersion) > 0 || null == this.wxSdk.onNeedPrivacyAuthorization || (null != e.instance.NeedPrivacyAuthorization ? (console.log("wxSdk.onNeedPrivacyAuthorization", t), t && e.instance.NeedPrivacyAuthorization({
                        event: String(t)
                    }), i && i(t), 0) : (console.log("wxSdk.onNeedPrivacyAuthorization", t), this.wxSdk.onNeedPrivacyAuthorization((function(n) {
                        console.log("wxSdk.onNeedPrivacyAuthorization:resolve", t), e.instance.NeedPrivacyAuthorization = n, t && e.instance.NeedPrivacyAuthorization({
                            event: String(t)
                        }), i && i(t)
                    })), 0)))
                }, n.openPrivacyContract = function(e, t, i, n) {
                    return void 0 === e && (e = !1), void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = null), !(this.compareSdkVersion("2.33.0", this._sdkVersion) > 0) && (1 == e ? !!this.wxSdk && null != this.wxSdk.openPrivacyContract : (console.log("wxSdk:跳转至隐私协议页面==>"), void this.wxSdk.openPrivacyContract({
                        success: t,
                        fail: i,
                        complete: n
                    })))
                }, n.showModal = function(e) {
                    this.wxSdk.showModal(e)
                }, n.showToast = function(e) {
                    this.wxSdk.showToast(e)
                }, n.showLoading = function(e) {
                    this.wxSdk.showLoading(e)
                }, n.hideToast = function(e, t, i, n) {
                    void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = null), this.compareSdkVersion("2.22.1", this._sdkVersion) > 0 || this.wxSdk.hideToast({
                        noConflict: e,
                        success: t,
                        fail: i,
                        complete: n
                    })
                }, n.hideLoading = function(e, t, i, n) {
                    void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = null), this.compareSdkVersion("2.22.1", this._sdkVersion) > 0 || this.wxSdk.hideLoading({
                        noConflict: e,
                        success: t,
                        fail: i,
                        complete: n
                    })
                }, n.setClipboardData = function(e, t, i, n) {
                    void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = null), this.wxSdk.setClipboardData({
                        data: e,
                        success: t,
                        fail: i,
                        complete: n
                    })
                }, n.getClipboardData = function(e, t, i) {
                    void 0 === e && (e = null), void 0 === t && (t = null), void 0 === i && (i = null), this.wxSdk.getClipboardData({
                        success: e,
                        fail: t,
                        complete: i
                    })
                }, n.showShareMenu = function(e, t, i, n, a) {
                    void 0 === e && (e = !0), void 0 === i && (i = null), void 0 === n && (n = null), void 0 === a && (a = null), this.compareSdkVersion("2.11.3", this._sdkVersion) > 0 ? this.showModelNotKeep() : this.wxSdk.showShareMenu({
                        withShareTicket: e,
                        menus: t,
                        success: i,
                        fail: n,
                        complete: a
                    })
                }, n.shareAppMessage = function(e) {
                    this.wxSdk.shareAppMessage(e)
                }, n.onShareAppMessage = function(e) {
                    this.wxSdk && this.wxSdk.onShareAppMessage && this.wxSdk.onShareAppMessage((function() {
                        return e && e()
                    }))
                }, n.offShareAppMessage = function() {
                    this.wxSdk && this.wxSdk.offShareAppMessage && this.wxSdk.offShareAppMessage()
                }, n.onShareTimeline = function(e) {
                    this.wxSdk && null != this.wxSdk.onShareTimeline ? this.wxSdk && this.wxSdk.onShareTimeline && this.wxSdk.onShareTimeline((function() {
                        return e && e()
                    })) : console.warn("监听绑定分享朋友圈参数失败，无此函数")
                }, n.offShareTimeline = function() {
                    this.wxSdk && this.wxSdk.offShareTimeline && this.wxSdk.offShareTimeline()
                }, n.onShareMessageToFriend = function(e) {
                    this.wxSdk && null != this.wxSdk.onShareMessageToFriend ? this.wxSdk.onShareMessageToFriend((function(t) {
                        return e && e(t)
                    })) : console.warn("监听用户「分享到指定朋友」结果 失败，无此函数")
                }, n.openCustomerServiceConversation = function(e, t, i, n, a, o, r, s) {
                    void 0 === e && (e = ""), void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = null), void 0 === a && (a = !1), void 0 === o && (o = null), void 0 === r && (r = null), void 0 === s && (s = null), this.compareSdkVersion("2.0.3", this._sdkVersion) > 0 ? this.showModelNotKeep() : this.wxSdk.openCustomerServiceConversation({
                        sessionFrom: e,
                        success: t,
                        fail: i,
                        complete: n,
                        showMessageCard: a,
                        sendMessageTitle: o,
                        sendMessagePath: r,
                        sendMessageImg: s
                    })
                }, n.compareSdkVersion = function(e, t) {
                    if (e && t) {
                        for (var i = e.split("."), n = t.split("."), a = Math.max(i.length, n.length); i.length < a;) i.push("0");
                        for (; n.length < a;) n.push("0");
                        for (var o = 0; o < a; o++) {
                            var r = parseInt(i[o]),
                                s = parseInt(n[o]);
                            if (r > s) return 1;
                            if (r < s) return -1
                        }
                    }
                    return 0
                }, n.showModelNotKeep = function() {
                    this.showModal({
                        title: "提示",
                        content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
                    })
                }, n.connectSocket = function(e, t, i, n, a, o, r, s, c) {
                    if (void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = null), void 0 === o && (o = null), void 0 === s && (s = !1), void 0 === c && (c = !1), this.compareSdkVersion("1.9.6", this._sdkVersion) > 0) return this.showModelNotKeep(), null;
                    var l = {
                        url: e,
                        success: t,
                        fail: i,
                        complete: n,
                        timeout: o,
                        header: {
                            "Sec-WebSocket-Protocol": "chat"
                        },
                        tcpNoDelay: s,
                        perMessageDeflate: c
                    };
                    return this.wxSdk.connectSocket(l)
                }, n.closeSocket = function(e, t, i, n, a) {
                    return void 0 === e && (e = 1e3), void 0 === t && (t = ""), void 0 === i && (i = null), void 0 === n && (n = null), void 0 === a && (a = null), this.compareSdkVersion("1.9.6", this._sdkVersion) > 0 ? (this.showModelNotKeep(), null) : this.wxSdk.connectSocket({
                        code: e,
                        reason: t,
                        success: i,
                        fail: n,
                        complete: a
                    })
                }, n.requestMidasPayment = function(e, t, i, n) {
                    var a;
                    void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = null);
                    var o = {
                        mode: "game",
                        env: e.env || 0,
                        offerId: String(e.offerId),
                        currencyType: "CNY",
                        platform: "android",
                        buyQuantity: Number(e.buyQuantity),
                        zoneId: String(e.zoneId),
                        outTradeNo: e.outTradeNo,
                        success: t,
                        fail: i,
                        complete: n
                    };
                    console.log("请求参数"), console.log(o), null == (a = this.wxSdk) || a.requestMidasPayment(o)
                }, n.requestMidasPaymentGameItem = function(e, t, i, n) {
                    var a;
                    void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = null);
                    var o = {
                        signData: e.sign_data,
                        paySig: e.pay_sig,
                        signature: e.signature,
                        success: t,
                        fail: i,
                        complete: n
                    };
                    console.log("请求参数", o), null == (a = this.wxSdk) || a.requestMidasPaymentGameItem(o)
                }, n.checkIsSupportMidasPayment = function(e) {
                    var t;
                    if (null != (t = this._sysInfo) && t.system && this._sysInfo.system.replace("iOS ", "").split(".").map(Number)[0] >= 15) {
                        var i, n = "3.10.3";
                        if (this.compareSdkVersion(this._sdkVersion, n) >= 0 && (n = "8.0.68", this.compareSdkVersion(this._sysInfo.version, n) >= 0 && null != (i = this.wxSdk) && i.checkIsSupportMidasPayment)) return void this.wxSdk.checkIsSupportMidasPayment({
                            success: function(t) {
                                t.data.allow_pay ? e && e(!0) : e && e(!1)
                            },
                            fail: function(t) {
                                e && e(!1)
                            },
                            complete: function() {}
                        })
                    }
                    e && e(!1)
                }, n.getNetworkType = function(e, t, i) {
                    void 0 === e && (e = null), void 0 === t && (t = null), void 0 === i && (i = null), this.wxSdk.getNetworkType({
                        success: e,
                        fail: t,
                        complete: i
                    })
                }, n.onNetworkStatusChange = function(e) {
                    this.wxSdk.onNetworkStatusChange(e)
                }, n.setUserCloudStorage = function(e, t, i, n) {
                    if (void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = null), this.compareSdkVersion("1.9.92", this._sdkVersion) > 0) return this.showModelNotKeep(), null;
                    this.wxSdk.setUserCloudStorage({
                        KVDataList: e,
                        success: t,
                        fail: i,
                        complete: n
                    })
                }, n.getUserCloudStorage = function(e, t, i, n) {
                    if (void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = null), this.compareSdkVersion("1.9.92", this._sdkVersion) > 0) return this.showModelNotKeep(), null;
                    this.wxSdk.getUserCloudStorage({
                        keyList: e,
                        success: t,
                        fail: i,
                        complete: n
                    })
                }, n.getOpenDataContext = function() {
                    return this.compareSdkVersion("1.9.92", this._sdkVersion) > 0 ? (this.showModelNotKeep(), null) : this.wxSdk.getOpenDataContext()
                }, n.postMessage = function(e) {
                    var t = this.getOpenDataContext();
                    t && "object" == _typeof2(e) && t.postMessage(e)
                }, n.requestSubscribeMessage = function(e, t, i, n) {
                    if (void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = null), this.compareSdkVersion("2.4.4", this._sdkVersion) > 0) return console.log("error 请求【wx.requestSubscribeMessage】失败 版本不支持 当前版本" + this._sdkVersion), null;
                    this.wxSdk.requestSubscribeMessage({
                        tmplIds: e || [],
                        success: t,
                        fail: i,
                        complete: n
                    })
                }, n.vibrateShort = function(e, t, i, n) {
                    if (void 0 === e && (e = d.heavy), void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = null), this.compareSdkVersion("1.9.6", this._sdkVersion) > 0) return console.log("error 请求【wx.vibrateShort】失败 版本不支持 当前版本" + this._sdkVersion), null;
                    this.wxSdk.vibrateShort({
                        type: e,
                        success: t,
                        fail: i,
                        complete: n
                    })
                }, n.vibrateLong = function(e, t, i) {
                    if (void 0 === e && (e = null), void 0 === t && (t = null), void 0 === i && (i = null), this.compareSdkVersion("1.9.6", this._sdkVersion) > 0) return console.log("error 请求【wx.vibrateLong】失败 版本不支持 当前版本" + this._sdkVersion), null;
                    this.wxSdk.vibrateLong({
                        success: e,
                        fail: t,
                        complete: i
                    })
                }, n.getRealtimeLogManager = function() {
                    return this._realtimeLogManager ? this._realtimeLogManager : this.compareSdkVersion("2.14.4", this._sdkVersion) > 0 ? (console.log("error 请求【wx.getRealtimeLogManager 】失败 版本不支持 当前版本" + this._sdkVersion), this._realtimeLogManager = null, null) : (this._realtimeLogManager = this.wxSdk.getRealtimeLogManager(), this._realtimeLogManager)
                }, n.getFileSystemManager = function() {
                    return this._fileSystemManager ? this._fileSystemManager : this.wxSdk.getFileSystemManager ? (this._fileSystemManager = this.wxSdk.getFileSystemManager(), this._fileSystemManager) : null
                }, n.setEnableDebug = function(e, t, i, n) {
                    if (void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = null), this.compareSdkVersion("1.4.0", this._sdkVersion) > 0) return console.log("error 请求【wx.setEnableDebug 】失败 版本不支持 当前版本" + this._sdkVersion), null;
                    this.wxSdk.setEnableDebug({
                        enableDebug: e,
                        success: t,
                        fail: i,
                        complete: n
                    })
                }, n.downloadFile = function(e, t, i, n, a, o) {
                    void 0 === t && (t = 5e3), void 0 === i && (i = null), void 0 === n && (n = null), void 0 === a && (a = null), void 0 === o && (o = null), this.wxSdk.downloadFile({
                        url: e,
                        timeout: t,
                        filePath: i,
                        success: n,
                        fail: a,
                        complete: o
                    })
                }, n.createRewardedVideoAd = function(t, i) {
                    if (void 0 === i && (i = !1), this.compareSdkVersion("2.0.4", this._sdkVersion) > 0) return console.log("error 请求【wx.createRewardedVideoAd 】失败 版本不支持 当前版本" + this._sdkVersion), null;
                    i && this.compareSdkVersion("2.8.0", this._sdkVersion) > 0 && (this._adRewardedVideo.destroy(), this._adRewardedVideo = null), this._adRewardedVideo ? console.log("【广告】对象开始初始化时已经存在") : (console.log("【广告】对象开始初始化", t), this._adRewardedVideo = this.wxSdk.createRewardedVideoAd({
                        adUnitId: t
                    }), this._adRewardListen.loadListen = function(t) {
                        console.log("【广告】激励视频加载成功", t), e.instance.VideoCallFunc.onLoad && 0 == e.instance.VideoCallFunc.isReturn && (e.instance.VideoCallFunc.isReturn = !0, e.instance.VideoCallFunc.onLoad())
                    }, this._adRewardListen.errorListen = function(t) {
                        console.log("【广告】 激励视频加载失败", t), e.instance.VideoCallFunc.onError && 0 == e.instance.VideoCallFunc.isReturn && (e.instance.VideoCallFunc.isReturn = !0, e.instance.VideoCallFunc.onError())
                    }, this._adRewardListen.closeListem = function(t) {
                        t && t.isEnded || void 0 === t ? (console.log("【广告】用户点击关闭 正常播放结束", e.instance.VideoCallFunc), e.instance.VideoCallFunc.onClickClose && 0 == e.instance.VideoCallFunc.isClick && e.instance.VideoCallFunc.onClickClose(!0)) : (console.log("【广告】用户点击关闭 播放中途退出", e.instance.VideoCallFunc), e.instance.VideoCallFunc.onClickClose && 0 == e.instance.VideoCallFunc.isClick && e.instance.VideoCallFunc.onClickClose(!1)), e.instance.VideoCallFunc.isClick = !0
                    }, this._adRewardedVideo.onLoad(this._adRewardListen.loadListen), this._adRewardedVideo.onError(this._adRewardListen.errorListen), this._adRewardedVideo.onClose(this._adRewardListen.closeListem))
                }, n._addRewardedVideoAdListener = function(t, i, n) {
                    void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = null), this._adRewardedVideo ? (e.instance.VideoCallFunc.onLoad = t, e.instance.VideoCallFunc.onError = i, e.instance.VideoCallFunc.onClickClose = n, e.instance.VideoCallFunc.isReturn = !1, e.instance.VideoCallFunc.isClick = !1, this._adRewardedVideo.onLoad(this._adRewardListen.loadListen), this._adRewardedVideo.onError(this._adRewardListen.errorListen), this._adRewardedVideo.onClose(this._adRewardListen.closeListem)) : console.log("【广告】对象不存在")
                }, n.playRewardedVideoShow = function(e, t, i) {
                    var n = this;
                    if (void 0 === e && (e = null), void 0 === t && (t = null), void 0 === i && (i = null), !this._adRewardedVideo) return console.log("【广告】播放失败 未初始化"), void(t && t());
                    this.closeAdVideo(), this._addRewardedVideoAdListener(e, t, i);
                    try {
                        this._adRewardedVideo.show().catch((function(e) {
                            console.log("【广告】播放 err=", e), n._adRewardedVideo.load().then((function() {
                                return n._adRewardedVideo.show()
                            }))
                        }))
                    } catch (e) {}
                }, n.closeAdVideo = function() {
                    this._adRewardedVideo && (e.instance.VideoCallFunc.onLoad = null, e.instance.VideoCallFunc.onError = null, e.instance.VideoCallFunc.onClickClose = null, e.instance.VideoCallFunc.isReturn = !1, e.instance.VideoCallFunc.isClick = !1, this._adRewardedVideo.offLoad(this._adRewardListen.loadListen), this._adRewardedVideo.offError(this._adRewardListen.errorListen), this._adRewardedVideo.offClose(this._adRewardListen.closeListem))
                }, n.getLaunchOptionsSync = function() {
                    if (this.compareSdkVersion("2.1.2", this._sdkVersion) > 0) return console.log("error 请求【wx.getLaunchOptionsSync 】失败 版本不支持 当前版本" + this._sdkVersion), null;
                    if (this.wxSdk.getLaunchOptionsSync) {
                        var e = this.wxSdk.getLaunchOptionsSync();
                        return u.dispatch(l.SYS_APP_START, e), e
                    }
                    return null
                }, n.getEnterOptionsSync = function() {
                    return this.compareSdkVersion("2.13.2", this._sdkVersion) > 0 ? (console.log("error 请求【wx.getEnterOptionsSync 】失败 版本不支持 当前版本" + this._sdkVersion), null) : this.wxSdk.getEnterOptionsSync ? this.wxSdk.getEnterOptionsSync() : null
                }, n.setKeepScreenOn = function(e, t, i, n) {
                    if (void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = null), this.compareSdkVersion("1.4.0", this._sdkVersion) > 0) return console.log("error 请求【wx.setKeepScreenOn 】失败 版本不支持 当前版本" + this._sdkVersion), null;
                    this.wxSdk.setKeepScreenOn && this.wxSdk.setKeepScreenOn({
                        keepScreenOn: e,
                        success: t,
                        fail: i,
                        complete: n
                    })
                }, n.setMessageToFriendQuery = function(e) {
                    this.wxSdk && this.wxSdk.setMessageToFriendQuery && this.wxSdk.setMessageToFriendQuery(e)
                }, n.navigateToMiniProgram = function(e) {
                    this.wxSdk && this.wxSdk.navigateToMiniProgram && this.wxSdk.navigateToMiniProgram(e)
                }, n.getGameClubData = function(e) {
                    this.wxSdk && this.wxSdk.getGameClubData && this.wxSdk.getGameClubData(e)
                }, n.createGameClubButton = function(e) {
                    return this.wxSdk && this.wxSdk.createGameClubButton ? this.wxSdk.createGameClubButton(e) : null
                }, n.onShow = function(e) {
                    this.wxSdk.onShow(e)
                }, n.getMenuButtonBoundingClientRect = function() {
                    return this.compareSdkVersion("2.1.0", this._sdkVersion) > 0 ? (console.log("error 请求【wx.getMenuButtonBoundingClientRect 】失败 版本不支持 当前版本" + this._sdkVersion), null) : this.wxSdk.getMenuButtonBoundingClientRect()
                }, n.getRecorderManager = function() {
                    if (this.wxSdk) return this._sdkVersion && this.compareSdkVersion("1.6.0", this._sdkVersion) > 0 ? (console.log("error 请求【wx.getRecorderManager 】失败 版本不支持 当前版本" + this._sdkVersion), null) : this.wxSdk.getRecorderManager()
                }, n.createInnerAudioContext = function(e) {
                    return this.compareSdkVersion("1.6.0", this._sdkVersion) > 0 ? (console.log("error 请求【wx.createInnerAudioContext 】失败 版本不支持 当前版本" + this._sdkVersion), null) : this.wxSdk.createInnerAudioContext()
                }, n.uploadFile = function(e) {
                    return this.wxSdk.uploadFile(e)
                }, n.getTopMenuRect = function() {
                    var e = {
                        width: 88,
                        height: 32,
                        top: 15,
                        right: 100,
                        bottom: 0,
                        left: 0
                    };
                    if (this.wxSdk) try {
                        if ((e = this.wxSdk.getMenuButtonBoundingClientRect()) && "number" == typeof e.top && e.top > 0) return e
                    } catch (e) {
                        console.warn("首次获取胶囊信息失败", e)
                    }
                    return e
                }, n.updateShareMenu = function(e) {
                    return this.wxSdk.updateShareMenu(e)
                }, n.getGroupCloudStorage = function(e) {
                    return this.compareSdkVersion("1.9.92", this._sdkVersion) > 0 ? (console.log("error 请求【wx.getGroupCloudStorage 】失败 版本不支持 当前版本" + this._sdkVersion), null) : this.wxSdk.getGroupCloudStorage(e)
                }, n.onRequestSubscribeSystemMessage = function(e, t, i, n) {
                    this.wxSdk.requestSubscribeSystemMessage({
                        msgTypeList: e,
                        success: function(e) {
                            t(e)
                        },
                        fail: function(e) {
                            i(e)
                        },
                        complete: function(e) {
                            n(e)
                        }
                    })
                }, n.setStatusBarStyle = function(e, t, i, n) {
                    void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = null), this.wxSdk.setStatusBarStyle({
                        value: e,
                        success: t,
                        fail: i,
                        complete: n
                    })
                }, n.setDeviceOrientation = function(e, t, i, n) {
                    void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = null), this.compareSdkVersion("2.26.0", this._sdkVersion) > 0 ? t() : this.wxSdk.setDeviceOrientation({
                        value: e,
                        success: t,
                        fail: i,
                        complete: n
                    })
                }, n.onDeviceOrientationChange = function(e) {
                    this.wxSdk.onDeviceOrientationChange(e)
                }, n.onWindowResize = function(e) {
                    this.wxSdk.onWindowResize(e)
                }, n._checkWechatFile = function(e, t, i) {
                    e.access({
                        path: t,
                        success: function(e) {
                            i(!0)
                        },
                        fail: function() {
                            e.mkdir({
                                dirPath: t,
                                recursive: !0,
                                success: function(e) {
                                    console.log("文件文件目录创建成功：", t), i(!0)
                                },
                                fail: function(e) {
                                    console.log("文件文件目录创建失败：", t, e), i(!1)
                                }
                            })
                        }
                    })
                }, n.readWechatFile = function(e) {
                    if (this.wxSdk && null != e.dir && null != e.fileName) {
                        var t = this.wxSdk.getFileSystemManager(),
                            i = this.wxSdk.env.USER_DATA_PATH + e.dir;
                        this._checkWechatFile(t, i, (function() {
                            t.readFile({
                                filePath: i + "/" + e.fileName,
                                encoding: e.encoding || "utf8",
                                position: e.position || 0,
                                success: function(t) {
                                    console.log("读取微信文件成功：", t.data), e.callBacl && e.callBacl(!0, t.data)
                                },
                                fail: function(t) {
                                    console.error("读取微信文件失败：", t), e.callBacl && e.callBacl(!1, t)
                                }
                            })
                        }))
                    }
                }, n.appendWechatFile = function(e) {
                    if (this.wxSdk && null != e.dir && null != e.fileName && null != e.content) {
                        var t = this.wxSdk.getFileSystemManager(),
                            i = this.wxSdk.env.USER_DATA_PATH + e.dir;
                        this._checkWechatFile(t, i, (function() {
                            t.appendFile({
                                filePath: i + "/" + e.fileName,
                                data: e.content || "",
                                encoding: e.encoding || "utf8",
                                success: function(t) {
                                    console.log("写入微信文件成功：", t), e.callBacl && e.callBacl(!0, t.data)
                                },
                                fail: function(t) {
                                    console.error("写入微信文件失败：", t), e.callBacl && e.callBacl(!1, t)
                                }
                            })
                        }))
                    }
                }, n.writeWechatFile = function(e) {
                    if (this.wxSdk && null != e.dir && null != e.fileName && null != e.content) {
                        var t = this.wxSdk.getFileSystemManager(),
                            i = this.wxSdk.env.USER_DATA_PATH + +e.dir;
                        this._checkWechatFile(t, i, (function() {
                            t.writeFile({
                                filePath: i + "/" + e.fileName,
                                data: e.content || "",
                                encoding: e.encoding || "utf8",
                                position: e.pos || 0,
                                success: function(t) {
                                    console.log("写入微信文件成功：", t), e.callBacl && e.callBacl(!0, t.data)
                                },
                                fail: function(t) {
                                    console.error("写入微信文件失败：", t), e.callBacl && e.callBacl(!1, t)
                                }
                            })
                        }))
                    }
                }, n.rmdirWechatFile = function(e) {
                    this.wxSdk && null != e.dir && this.wxSdk.rmdir({
                        dirPath: this.wxSdk.env.USER_DATA_PATH + e.dir,
                        recursive: !0,
                        success: function(e) {
                            console.log("删除微信文件目录成功：", e)
                        }
                    })
                }, n.removeSavedWechatFile = function(e) {
                    this.wxSdk && null != e.filePath && this.wxSdk.removeSavedFile({
                        filePath: this.wxSdk.env.USER_DATA_PATH + e.filePath,
                        success: function(e) {
                            console.log("删除微信文件成功：", e)
                        }
                    })
                }, n.onInteractiveStorageModified = function(e) {
                    this.compareSdkVersion("2.9.0", this._sdkVersion) > 0 || this.wxSdk.onInteractiveStorageModified(e)
                }, n.offInteractiveStorageModified = function(e) {
                    this.compareSdkVersion("2.14.4", this._sdkVersion) > 0 || this.wxSdk.offInteractiveStorageModified(e)
                }, n.getUserInteractiveStorage = function(e) {
                    this.compareSdkVersion("2.7.7", this._sdkVersion) > 0 || this.wxSdk.getUserInteractiveStorage(e)
                }, n.restartMiniProgram = function(e) {
                    this.compareSdkVersion("2.22.1", this._sdkVersion) > 0 || (console.error("监听引擎报错---重启小游戏"), this.wxSdk.restartMiniProgram(e))
                }, n.onGameLiveStateChange = function(e) {
                    this.wxSdk && this.wxSdk.onGameLiveStateChange && this.wxSdk.onGameLiveStateChange((function(t) {
                        e(t.state)
                    }))
                }, n.onAddToFavorites = function(e) {
                    this.compareSdkVersion("2.10.3", this._sdkVersion) > 0 || this.wxSdk.onAddToFavorites(e)
                }, n.getBatteryInfo = function(e) {
                    if (this.wxSdk && this.wxSdk.getBatteryInfo) return this.wxSdk.getBatteryInfo(e)
                }, n.saveImageToPhotosAlbum = function(e, t, i, n) {
                    void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = null), this.wxSdk.saveImageToPhotosAlbum({
                        filePath: e,
                        success: function() {
                            t && t(e)
                        },
                        fail: function(e) {
                            i && i(e)
                        },
                        complete: function() {
                            n && n()
                        }
                    })
                }, n.resetTempStorage = function() {
                    var e = this.wxSdk;
                    if (e) {
                        var t = e.getFileSystemManager(),
                            i = e.env.USER_DATA_PATH + "/temp_unzip/";
                        try {
                            t.accessSync(i), console.log("内存不足清空临时目录--------------微信路径---文件目录, dir：", i), t.rmdirSync(i, !0)
                        } catch (e) {}
                    }
                }, n.notifyMemoryLow = function(e, i) {
                    void 0 === e && (e = null);
                    var n = this.wxSdk;
                    n && (console.log("内存不足提示弹窗--------------------"), n.showModal({
                        title: "温馨提示",
                        content: e || "是否清除缓存？",
                        showCancel: !1,
                        success: function(e) {
                            return t(_regeneratorRuntime2().mark((function t() {
                                var r, s, c;
                                return _regeneratorRuntime2().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (e.confirm) {
                                                if (console.log("内存不足提示弹窗--------------------1"), u.dispatch(l.SYS_STOP_PLAY_MUSIC), n.showLoading({
                                                        title: "正在处理中，请稍后..."
                                                    }), r = n.getFileSystemManager(), function(e) {
                                                        try {
                                                            r.accessSync(e), console.log("内存不足提示弹窗--------------微信路径---文件目录, dir：", e), r.rmdirSync(e, !0)
                                                        } catch (e) {}
                                                    }((s = n.env.USER_DATA_PATH) + "/temp_unzip/"), c = s + "/gamecaches/", i && i.length > 0) c = s + "/gamecaches/" + i + "/", console.log("内存不足提示弹窗--------------删除指定的目录---dirName=", c);
                                                else {
                                                    console.log("内存不足提示弹窗--------------删除所有的目录---dirName=", c);
                                                    try {
                                                        r.rmdirSync(c, !0)
                                                    } catch (e) {
                                                        console.error("删除失败", e)
                                                    }
                                                }
                                                o.releaseAll(), o.cacheManager.clearCache(), o.cacheManager.clearLRU();
                                                try {
                                                    a.localStorage.clear(), n.clearStorageSync()
                                                } catch (e) {}
                                                console.log("内存不足提示弹窗--------------------3"), "function" == typeof gc && gc(), n.triggerGC(), n.hideLoading(), setTimeout((function() {
                                                    n.restartMiniProgram({})
                                                }), 1e3)
                                            }
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        fail: function(e) {
                            n.exitMiniProgram({
                                success: function(e) {}
                            })
                        }
                    }))
                }, n.notifyRestartGame = function(e) {
                    var i = this.wxSdk;
                    i && i.showModal({
                        title: "温馨提示",
                        content: e || "是否重新启动？",
                        success: function(e) {
                            return t(_regeneratorRuntime2().mark((function t() {
                                return _regeneratorRuntime2().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            e.confirm && i.restartMiniProgram({});
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        fail: function(e) {
                            console.log("notifyMemoryLow fail", e)
                        }
                    })
                }, n.checkStorageMemory = function() {
                    if (this.wxSdk) {
                        var e = this.wxSdk.getStorageInfoSync();
                        e.currentSize > e.limitSize / 2 && this.wxSdk.clearStorageSync()
                    }
                }, n.exitMiniProgram = function() {
                    this.wxSdk && this.wxSdk.exitMiniProgram({
                        success: function(e) {}
                    })
                }, n.ChatSpeakersChanged = function(e) {
                    u.dispatch(l.VOICE_NOTIFY_SPEAKERS_CHANGED, e)
                }, n.joinVoIPChat = function(e) {
                    if (console.log("实时语音通话参数", e), this.compareSdkVersion("2.7.0", this._sdkVersion) > 0) return null;
                    var t = !!c.isNull(e.muteMicrophone) || e.muteMicrophone,
                        i = !c.isNull(e.muteEarphone) && e.muteEarphone,
                        n = this;
                    this.wxSdk.joinVoIPChat({
                        roomType: "voice",
                        signature: e.signature,
                        nonceStr: e.nonceStr,
                        timeStamp: e.timeStamp,
                        groupId: e.groupId,
                        forceCellularNetwork: !0,
                        muteConfig: {
                            muteMicrophone: t,
                            muteEarphone: i
                        },
                        success: function(e) {
                            n._voIPSuccess = !0, console.log("实时语音-----joinVoIPChat success", !0, e), u.dispatch(l.VOICE_JOIN_COMPLETE, !0, e), n._listenChatSpeakersChanged()
                        },
                        fail: function(e) {
                            n._voIPSuccess = !1, console.log("实时语音-----joinVoIPChat fail", e), u.dispatch(l.VOICE_JOIN_COMPLETE, !1, e)
                        }
                    })
                }, n._listenChatSpeakersChanged = function() {
                    this._voIPSuccess && (this.wxSdk.offVoIPChatSpeakersChanged(this.ChatSpeakersChanged), this.wxSdk.onVoIPChatSpeakersChanged(this.ChatSpeakersChanged))
                }, n.exitVoIPChat = function(e) {
                    this._voIPSuccess && (this.wxSdk.offVoIPChatSpeakersChanged(this.ChatSpeakersChanged), this.wxSdk.exitVoIPChat({
                        success: function(t) {
                            console.log("实时语音-----退出通话 success", t), e && e(!0, t)
                        },
                        fail: function(t) {
                            console.log("实时语音-----退出通话 fail", t), e && e(!1, t)
                        }
                    }))
                }, n.updateVoIPChatMuteConfig = function(e, t, i) {
                    if (this._voIPSuccess) {
                        var n = this;
                        this.wxSdk.updateVoIPChatMuteConfig({
                            muteConfig: {
                                muteMicrophone: e,
                                muteEarphone: t
                            },
                            success: function(e) {
                                console.log("实时语音---更新通话的静音设置 success", e), i && i(!0, e), n._listenChatSpeakersChanged()
                            },
                            fail: function(e) {
                                console.log("实时语音---更新通话的静音设置 fail", e), i && i(!1, e)
                            }
                        })
                    }
                }, n.createPageManager = function() {
                    return this.compareSdkVersion("3.11.2", this._sdkVersion) > 0 ? null : this.wxSdk && this.wxSdk.createPageManager ? this.wxSdk.createPageManager() : void 0
                }, i(e, null, [{
                    key: "instance",
                    get: function() {
                        return this._instance && null != this._instance || (this._instance = new e), this._instance.isInit() || this._instance.init(), this._instance
                    }
                }]), e
            }())._instance = null, n._RF.pop()
        }
    }
}))