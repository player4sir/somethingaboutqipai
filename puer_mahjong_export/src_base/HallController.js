System.register("chunks:///_virtual/HallController.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./GameConfig.ts", "./GameTxt.ts", "./Utils.ts", "./SubGameConfig.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./UIConfig.ts", "./Encrypto.ts", "./InterfaceDefines.ts", "./LayerManager.ts", "./EventManager.ts", "./PkgLoaderManager.ts", "./NetState.ts", "./BaseController.ts", "./Platform.ts", "./GSocket.ts", "./GlobalCmd.ts", "./AppControler.ts", "./PopupController.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f, m, g, E, v, T, R, P, y, C, S, A, I, D, N, O, b, L;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, i = e.asyncToGenerator, n = e.assertThisInitialized, a = e.createForOfIteratorHelperLoose
        }, function(e) {
            o = e.cclegacy, r = e.view, s = e.director, c = e.assetManager
        }, function(e) {
            l = e.ClientInfo
        }, function(e) {
            u = e.GameSwitchConf
        }, function(e) {
            d = e.GameTxt
        }, function(e) {
            _ = e.Utils
        }, function(e) {
            h = e.SubGameConfig
        }, function(e) {
            p = e.GCache
        }, function(e) {
            f = e.AppEvent
        }, function(e) {
            m = e.GConstants, g = e.StoreKey
        }, function(e) {
            E = e.UIID, v = e.UIConfigData
        }, function(e) {
            T = e.Encrypt
        }, function(e) {
            R = e.inf_GameSceneType
        }, function(e) {
            P = e.LayerManager
        }, function(e) {
            y = e.EventManager
        }, function(e) {
            C = e.PkgLoaderManager
        }, function(e) {
            S = e.Network
        }, function(e) {
            A = e.BaseController
        }, function(e) {
            I = e.Platform
        }, function(e) {
            D = e.GSocket
        }, function(e) {
            N = e.GlobalCmdHeadPHP, O = e.GlobalCmdHead
        }, function(e) {
            b = e.AppControler
        }, function(e) {
            L = e.PopupController
        }],
        execute: function() {
            o._RF.push({}, "96785nFOnRAxLBUmLZT/U35", "HallController", void 0), e("HallController", function(e) {
                function o(t) {
                    var i, a;
                    return (a = e.call(this, t) || this)._handlerTimeOutIntoGame = null, a.hasGetConfig = !1, a.tempData = null, a._teamHandle = null, a.event_defents = ((i = {})[f.SYS_PACKAGE_LOAD_TASK_CANCLE_SURE] = "onCancelDownLoadBundle", i[f.SYS_CHANGE_EVN] = "onChangeEvn", i[f.HALL_GOTO_SHOW] = "showHall", i[f.NET_REQ_USER_LOGIN_CORE_INIT] = "reqLoginCoreInit", i[f.NET_FORWARD_USER_LOGIN_CORE_INIT] = "respLoginCoreInit", i[f.NET_REQ_SET_USERINFO] = "reqSetUserInfo", i[f.NET_FORWARD_SET_USERINFO] = "respSetUserInfo", i[f.NET_REQ_LEVEL_MODEL_CONFIG] = "reqLevelModelConfig", i[f.NET_FORWARD_LEVEL_MODEL_CONFIG] = "respLevelModelConfig", i[f.NET_REQ_PROPS_INFO] = "reqPropsInfo", i[f.NET_FORWARD_PROPS_INFO] = "respPropsInfo", i[f.NET_REQ_HALL_GAME_CONFIG] = "reqHallGameConfig", i[f.NET_FORWARD_HALL_GAME_CONFIG] = "respHallGameConfig", i[f.NET_FORWARD_HALL_GAME_CONFIG_SORT] = "respHallGameSortConfig", i[f.NET_REQ_HALL_AREA_GAME_CONFIG] = "reqHallAreaGameConfig", i[f.NET_RESP_HALL_AREA_GAME_CONFIG] = "respHallAreaGameConfig", i[f.NET_REQ_ONLINE_PERSON] = "reqOnlinePerson", i[f.NET_FORWARD_ONLINE_PERSON] = "respOnlinePerson", i[f.NET_REQ_GAME_LEVEL_ROOM_TAB] = "reqGameLeaveRoom", i[f.NET_FORWARD_GAME_LEVEL_ROOM_TAB] = "respGameLeaveRoom", i[f.NET_RESP_GOODS_BASE] = "respGoodsBase", i[f.LOAD_CALL_BACK] = "onLoadedCallBack", i[f.APP_NOTIFY_LINK_DATA] = "onCheckLinkData", i[f.UPDATE_MODULE_GIFT] = "onUpdateModuleGift", i[f.NET_CMD_ACT_ENTER] = "requestActivityEnterConfig", i[f.NET_CMD_RESP_ACT_ENTER] = "respActivityEnterConfig", i[f.NET_REQ_EXCHANGE] = "onReqExchange", i[f.NET_RESP_EXCHANGE] = "onRespExchange", i[f.NET_REQ_VIP_MEMBER_CONFIG] = "reqVipMemberConfig", i[f.NET_RESP_VIP_MEMBER_CONFIG] = "respVipMemberConfig", i[f.EVENT_REQUEST_GAME_RULE_CONFIG] = "reqGameRuleConfig", i[f.NET_RESP_GAME_RULE_CONFIG] = "respGameRuleConfig", i[f.NET_REQ_TEAM_OPERATE] = "requestGameTeamOperate", i[f.NET_RECEIVE_TEAM_OPERATE] = "onReceiveTeamOperate", i[f.NET_RECEIVE_TEAM_MATCH] = "onTeamMatch", i[f.NET_REQ_TEAM_OPERATE_UPDATE_MONEY] = "onTeamUpdateMoney", i), a.engineReportTime = 0, a.teamReq = null, a.registerListeners(), s.on("spriteFrame_texture_null", a.onEngineErrorMsg, n(a)), s.on("spine_error", a.onSpineErrorMsg, n(a)), a
                }
                t(o, e), o.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new o("HallController")), this._instance
                }, o.init = function() {
                    this._instance && this._instance.clear(), this._instance = null, o.getInstance()
                };
                var A = o.prototype;
                return A.onCancelDownLoadBundle = function(e, t, n) {
                    if (h.isGameTask(t)) return new Promise(i(_regeneratorRuntime2().mark((function e(t, i) {
                        var o, r, s;
                        return _regeneratorRuntime2().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = null == (o = I.getWxSDK()) ? void 0 : o.wxSdk, s = null == r ? void 0 : r.getFileSystemManager(), r && s || (console.warn("微信 SDK 或文件系统不可用"), n = null, t()), e.next = 4,
                                        function() {
                                            var e, t;
                                            if ((null == (e = n) || null == (t = e.prefab) ? void 0 : t.length) > 0)
                                                for (var i, o = a(n.prefab); !(i = o()).done;) {
                                                    var r = i.value;
                                                    if (h.isGameRemote(r.bundle)) {
                                                        var s = c.getBundle(r.bundle);
                                                        s && (s.releaseAll(), c.removeBundle(s))
                                                    }
                                                }
                                            n = null
                                        }();
                                case 4:
                                    t();
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))))
                }, A.onEngineErrorMsg = function(e, t) {
                    _.time() - this.engineReportTime > 5 && (this.engineReportTime = _.time(), b.getInstance().reportClickEvent("errorId", {
                        name: null == e ? void 0 : e.name,
                        uuid: null == e ? void 0 : e.uuid,
                        err: t
                    }, !0))
                }, A.onSpineErrorMsg = function(e, t) {
                    _.time() - this.engineReportTime > 5 && (this.engineReportTime = _.time(), b.getInstance().reportClickEvent("errorId", {
                        tag: "spine",
                        name: null == e ? void 0 : e.name,
                        uuid: null == e ? void 0 : e.uuid,
                        err: t
                    }, !0))
                }, A.onChangeEvn = function() {
                    this.hasGetConfig = !1
                }, A.showHall = function(e, t, i) {
                    if (void 0 === t && (t = !1), b.getInstance().updateWxLoginBtn(!1), console.log("showHall", e, t), p.User.isLoginSuccesed()) {
                        var n = this;
                        C.getInstance().isLoaded(m.PkgLoaderTaskList.Hall) ? n._jumpToHall(t) : y.dispatch(f.SYS_PACKAGE_LOAD, m.PkgLoaderTaskList.Hall, (function() {
                            n._jumpToHall(t)
                        })), p.noticePup.updateCurScene(i)
                    } else this.relogin()
                }, A._jumpToHall = function(e) {
                    var t = this;
                    if (void 0 === e && (e = !1), 0 != p.User.isLoginSuccesed()) {
                        var i = this,
                            n = I.orientation;
                        p.User.updateIsRoom(!1), I.setDeviceOrientation("portrait", (function() {
                            if (t.print("大厅屏幕切换为竖屏------场景从" + n + "到" + I.orientation), P.has(E.HallPrefab) || 1 == P.isLoading(E.HallPrefab)) i._checkHallModuleJump(null, e);
                            else {
                                y.dispatch(f.SYS_APP_LIFE, m.AppRunLife.Hall_Will_Open), P.clearOther(v[E.HallPrefab].layer), P.clear(v[E.HallPrefab].layer);
                                var a = i._getJumpModuleName(e);
                                a.ignoreRelease = !0, L.getInstance().onOpenView("", E.HallPrefab, a, {
                                    onAdded: function() {
                                        y.dispatch(f.VIEW_UI_MAIN_UPDATE, E.HallPrefab), y.dispatch(f.SYS_APP_LIFE, m.AppRunLife.Hall_Opened), L.getInstance().onCloseView("", E.SelectLevelPrefab), i._checkHallModuleJump(null, e)
                                    },
                                    onRemoved: function() {
                                        y.dispatch(f.SYS_APP_LIFE, m.AppRunLife.Hall_Closed)
                                    }
                                })
                            }
                        }))
                    } else this.relogin()
                }, A.relogin = function() {
                    p.User.isLogining() || (P.clear(null), y.dispatch(f.NET_GOTO_START_LOGIN))
                }, A._checkHallModuleJump = function(e, t) {
                    if (void 0 === t && (t = !1), console.log("hallController----请求基础配置", t), t) this.autoReceiveBankrupMoney();
                    else {
                        var i = p.WxShareData.getShareParamCache();
                        _.table_isEmpty(i) ? "" != p.User.getUserJoinRoomCode() && "0" != p.User.getUserJoinRoomCode() && (console.log("私人房=====", p.User.getUserJoinRoomCode()), y.dispatch(f.NET_REQ_PRIVATE_ROOM_INVITE, p.User.getUserJoinRoomCode(), "getRoomInfo", {
                            reconnect: !0
                        })) : p.WxShareData.updateWXShareQuery(i)
                    }
                    this._reqActivityConfig(t)
                }, A.autoReceiveBankrupMoney = function(e) {
                    console.log("大厅 领取救济金 是否满足:", p.BankrupData.isMineBankrupt(), p.BankrupData.isBankruptRewardRemain()), p.BankrupData.isMineBankrupt() && p.BankrupData.isBankruptRewardRemain() && y.dispatch(f.NET_REQ_BANKRUPT, {
                        to: "HALL"
                    })
                }, A._getJumpModuleName = function(e) {
                    var t;
                    if (void 0 === e && (e = !1), null != (t = this.tempData) && t.modeName) {
                        var i = _.clone(this.tempData);
                        return this.tempData = null, i
                    }
                    var n = m.MODULENAME.GAME,
                        a = "room";
                    if (e) {
                        p.PrivateData.initPrivateRoomInviteInfo();
                        var o = p.SelectGame.intoGameData;
                        if (console.log("hallcontroller----intoGameData=", o), _.isNotNull(o) && _.isNotNull(o.Scene)) switch (o.Scene) {
                            case R.Hall:
                                break;
                            case R.Select:
                                n = m.MODULENAME.GAME;
                                break;
                            case R.Private:
                                n = m.MODULENAME.PRIVATE;
                                break;
                            case R.Match:
                                n = m.MODULENAME.MATCH
                        }
                    } else p.WxShareData.checkJumpPrivate() ? (this.print("hallcontroller ----------------------1"), n = m.MODULENAME.PRIVATE, a = "share") : "" != p.User.getUserJoinRoomCode() && "0" != p.User.getUserJoinRoomCode() && (this.print("私人房=== _getJumpModuleName---", p.User.getUserJoinRoomCode()), n = m.MODULENAME.PRIVATE, a = "reconnect");
                    return {
                        modeName: n,
                        jumpType: a,
                        isByGame: e
                    }
                }, A.onCheckLinkData = function() {
                    if (this.print("hallcontroller.onCheckLinkData----------通过链接打开了游戏"), D.instance.isConnected()) {
                        var e = p.WxShareData.getShareParamCache();
                        console.log("hallcontroller.onCheckLinkData---当前网络连接正常，立即处理数据", e), _.table_isEmpty(e) || p.WxShareData.updateWXShareQuery(e)
                    }
                }, A._reqActivityConfig = function(e) {
                    var t = this;
                    void 0 === e && (e = !1);
                    var i, n = [{
                        id: f.NET_REQ_SIGNIN_CONFIG,
                        param: null
                    }, {
                        id: f.NET_CMD_REQ_WATCH,
                        param: null
                    }, {
                        id: f.NET_CMD_REQ_RANK_DATA,
                        param: {
                            game_id: l.CurrentGameID
                        }
                    }, {
                        id: f.REQ_ACTIVITY_CONFIG,
                        param: {
                            cmd: N.PHP_ACTIVITY_TASK_CONFIG
                        }
                    }];
                    if (console.log("进入大厅获取配置---", this.hasGetConfig), this.hasGetConfig) {
                        var a = [{
                            id: f.NET_CMD_REQ_RANK_DATA,
                            param: {
                                game_id: l.CurrentGameID
                            }
                        }, {
                            id: f.REQ_ACTIVITY_CONFIG,
                            param: {
                                cmd: N.PHP_ACTIVITY_TASK_CONFIG
                            }
                        }, {
                            id: f.REQ_ACTIVITY_CONFIG,
                            param: {
                                cmd: N.PHP_HALL_SQUARE
                            }
                        }, {
                            id: f.RECOMMEND_POP_GET,
                            param: m.PopupPos.POS_LOGIN
                        }];
                        n = a
                    }
                    var o = this.addScheduler(.05, (function() {
                        n.length > 0 ? (i = n.splice(0, 1), y.dispatch(i[0].id, i[0].param)) : (t.stopScheduler(o), t.hasGetConfig = !0, e || p.BankrupData.isMineBankrupt() && p.BankrupData.isBankruptRewardRemain() && y.dispatch(f.NET_REQ_BANKRUPT))
                    }))
                }, A.onLoadedCallBack = function(e, t) {
                    t && "hall" == t && this._jumpToHall(!1)
                }, A.reqLoginCoreInit = function(e) {
                    var t = {
                            w: r.getVisibleSize().width,
                            h: r.getVisibleSize().height,
                            deviceno: l.SignDeviceId,
                            networkstate: S.getInstance().name,
                            osversion: l.PhoneModel + "," + l.SysVer,
                            macid: l.MachineId,
                            guid: l.Guid,
                            config_format: "json",
                            api_ver: 2
                        },
                        i = {
                            cmd: N.PHP_CORE_INIT,
                            body: t
                        };
                    y.dispatch(f.NET_SEND_MSG, i)
                }, A.respLoginCoreInit = function(e, t, i, n) {
                    if (this.dump(i, "登录初始化返回" + t), 0 != t) {
                        if (null != (i = _.table_verify(i)).bankrupt_pay && p.BankrupData.setBankruptPaySceneSatus(i.bankrupt_pay), null != i.shopFlag && (u.ShopFlag = 1 == Number(i.shopFlag), console.log("商城入口开关", u.ShopFlag), y.dispatch(f.EVENT_SHOP_SWITCH)), _.isNull(i.wxIosPay) || (u.wxIosPay = 1 == _.number_valueOf(i.wxIosPay), I.setIsSupportIOSPay(u.wxIosPay)), _.isNull(i.sendGift) || (u.isShowSendGift = 1 == _.number_valueOf(i.sendGift)), _.isNull(i.lycFlag) || (u.isShowLYCSubgame = 1 == _.number_valueOf(i.lycFlag), p.SelectGame.dealIsShowLycGame()), _.isNull(i.bankruptFlag) || (u.bankruptCountSwitch = 1 == _.number_valueOf(i.bankruptFlag)), i.goodsbase_url) {
                            var a = i.goodsbase_url;
                            a.srvtime = i.srvtime, p.PropsConf.setPropsBaseUrlConf(a), this.reqGoodsBase(null)
                        }
                        i.srvtime && p.User.setServerTime(_.number_valueOf(i.srvtime))
                    } else y.dispatch(f.NET_REQ_USER_LOGIN_CORE_INIT)
                }, A.reqSetUserInfo = function(e, t) {
                    if (t) {
                        var i = {};
                        null != (t = _.table_verify(t)).nick && (i.nick = t.nick), null != t.sex && (i.sex = t.sex), null != t.city && (i.city = t.city), null != t.avatar && (i.avatar = t.avatar);
                        var n = {
                            cmd: N.PHP_UPDATE_USERINFO,
                            body: i
                        };
                        console.log("发起更新信息请求:", n), y.dispatch(f.NET_SEND_MSG, n)
                    }
                }, A.respSetUserInfo = function(e, t, i, n) {
                    if (console.log("更新用户信息返回:", t, i, n), t) {
                        if (i = _.table_verify(i)) {
                            var a = {};
                            for (var o in n.nick && i.nick && (a.nick = i.nick), n.avatar && i.icon && (a.avatar_s = i.icon, a.avatar_m = i.icon, a.avatar_b = i.icon_big), _.isNull(n.sex) || _.isNull(i.sex) || (a.sex = i.sex), console.log("更新用户信息返回body:", a), a)
                                if (Object.prototype.hasOwnProperty.call(a, o)) {
                                    var r = a[o];
                                    null != r && null != r && p.User.updateDataUserKey(o, r)
                                } y.dispatch(f.USER_UPDATE_INFO, a)
                        }
                    } else i && !_.string_isEmpty(i.errorTips) && y.dispatch(f.SYS_TOAST_TIP, {
                        content: i.errorTips
                    })
                }, A.reqLevelModelConfig = function(e) {
                    var t;
                    if (!((null == (t = p.User.getLevelExpConfig()) ? void 0 : t.length) > 0)) {
                        var i = {
                            cmd: N.PHP_LEVEL_MODEL_CONFIG,
                            body: {
                                cli_ver: -1
                            }
                        };
                        y.dispatch(f.NET_SEND_MSG, i)
                    }
                }, A.respLevelModelConfig = function(e, t, i, n) {
                    this.dump(i, "经验等级配置返回" + t), t && (p.User.updateLevelExpConfig(i.level), y.dispatch(f.USER_UPDATE_LEVEL))
                }, A.reqPropsInfo = function(e) {
                    var t = {
                        cmd: N.PHP_PROPS_INFO,
                        body: {}
                    };
                    y.dispatch(f.NET_SEND_MSG, t)
                }, A.respPropsInfo = function(e, t, i, n) {
                    this.dump(i, "道具信息返回" + t), this.dump(i), t && (p.User.updatePropsInfo(i), y.dispatch(f.USER_UPDATE_PROPS))
                }, A.reqHallGameConfig = function(e) {
                    var t = {
                            hall_version: l.HallVer,
                            cli_ver: -1,
                            enable_special_game: 1,
                            guid: p.User.getUserGuid(),
                            lastLoginMid: p.User.getLastlocalMid(),
                            branch: I.isIOS() ? 0 : 1
                        },
                        i = {
                            cmd: N.PHP_HALLVIEW_CONFIG,
                            body: t
                        };
                    y.dispatch(f.NET_SEND_MSG, i)
                }, A._reqHallGameSortConfig = function() {
                    var e = {
                            hall_version: l.HallVer,
                            cli_ver: -1,
                            enable_special_game: 1,
                            guid: p.User.getUserGuid(),
                            lastLoginMid: p.User.getLastlocalMid(),
                            branch: I.isIOS() ? 0 : 1
                        },
                        t = {
                            cmd: N.PHP_HALLVIEW_CONFIG_SORT,
                            body: e
                        };
                    y.dispatch(f.NET_SEND_MSG, t)
                }, A.respHallGameConfig = function(e, t, i, n) {
                    this.dump(i, "大厅游戏配置返回" + t), t && (p.SelectGame.updateServerGameConfig(i.info), this._reqHallGameSortConfig())
                }, A.respHallGameSortConfig = function(e, t, i, n) {
                    this.dump(i, "大厅游戏排序配置返回" + t), t && (p.SelectGame.updateGameSortConfig(i), y.dispatch(f.HALL_UPDATE_GAME_CONFIG))
                }, A.reqHallAreaGameConfig = function(e, t) {
                    this.print("请求地区游戏配置", t);
                    var i = {
                        cmd: N.PHP_HALL_AREA_GAME_CONFIG,
                        body: {}
                    };
                    y.dispatch(f.NET_SEND_MSG, i)
                }, A.respHallAreaGameConfig = function(e, t, i, n) {
                    this.print("返回地区游戏配置", i, n), t && (p.SelectGame.updateAreaGameConfig((null == i ? void 0 : i.cfg) || []), y.dispatch(f.HALL_UPDATE_AREA_GAME_CONFIG))
                }, A.reqOnlinePerson = function(e, t) {
                    var i = {
                        cmd: N.PHP_HALL_GAME_PLAYER_NUM,
                        body: {
                            game_ids: t || l.deviceInfo.GameIds
                        }
                    };
                    y.dispatch(f.NET_SEND_MSG, i)
                }, A.respOnlinePerson = function(e, t, i, n) {
                    console.log("大厅在线人数返回 ===>", i), t && (p.SelectGame.updateServerGamePersonOnline(i), y.dispatch(f.HALL_UPDATE_GAME_ONLINE_PERSON))
                }, A.reqGameLeaveRoom = function(e, t, i) {
                    if (void 0 === t && (t = null), void 0 === i && (i = 1), !_.isNull(t)) {
                        _.isNull(i) && (i = 1);
                        var n = p.SelectGame.getServerGameLevelTabListByGameID(t);
                        if (null != n && n.length) y.dispatch(f.HALL_UPDATE_GAME_LEVEL_TAB, t);
                        else {
                            var a = p.SelectGame.getGameVersionByGameID(t),
                                o = {
                                    hall_version: l.HallVer,
                                    current_ver: 0,
                                    game_id: t,
                                    islevel_500: i,
                                    gameVer: a
                                },
                                r = {
                                    cmd: N.PHP_GAME_LEVEL_LIST,
                                    body: o
                                };
                            y.dispatch(f.NET_SEND_MSG, r)
                        }
                    }
                }, A.respGameLeaveRoom = function(e, t, i, n) {
                    if (this.dump(i, "子游戏场次中的房间列表返回" + t), t) {
                        var a = !0;
                        n && 1 != n.islevel_500 && (a = !1), p.SelectGame.updateServerGameLevelTabList(i.gameid, i.levels, a), this.print("当前保存的游戏房间列表缓存", i), this.dump(p.SelectGame.getServerGameLevelTabListByGameID(i.gameid)), y.dispatch(f.HALL_UPDATE_GAME_LEVEL_TAB, i.gameid)
                    }
                }, A.reqGoodsBase = function(e) {
                    this.print("基础配置请求");
                    var t = {
                            1: p.PropsConf.getPropsConfTime(g.PROPS_BASE_CONF),
                            2: p.PropsConf.getPropsConfTime(g.PROPS_UNION_CONF)
                        },
                        i = {
                            type: T.JsonEncode(t)
                        },
                        n = {
                            cmd: N.PHP_GOODS_BASE,
                            body: i
                        };
                    y.dispatch(f.NET_SEND_MSG, n)
                }, A.respGoodsBase = function(e, t, i, n) {
                    if (console.log("基础配置返回", t, i, n), t)
                        if (_.table_isEmpty(i)) this.print("数据为空");
                        else {
                            this.print("数据不为空,需要下载");
                            var a = p.PropsConf.getPropsBaseUrlConf(),
                                o = a.icon_pre;
                            if (_.string_isEmpty(o)) return;
                            var r = a.srvtime,
                                s = a.file_pre,
                                c = a.file_name,
                                l = s + c[4] + "?v=" + r,
                                u = s + c[5] + "?v=" + r;
                            console.log("goodsurl:", l, u), p.PropsConf.downloadAndSavePropsConf(l, g.PROPS_BASE_CONF), p.PropsConf.downloadAndSavePropsConf(u, g.PROPS_UNION_CONF)
                        }
                    else this.print("hehe请求失败")
                }, A.requestActivityEnterConfig = function() {
                    var e = {
                        cmd: N.PHP_HALL_ACT_ENTER,
                        body: {}
                    };
                    y.dispatch(f.NET_SEND_MSG, e)
                }, A.respActivityEnterConfig = function(e, t, i, n) {
                    console.log("大厅活动入口配置返回", t, i, n), t ? _.table_isEmpty(null == i ? void 0 : i.cfg) || p.Activity.setHallActEnterCfg(null == i ? void 0 : i.cfg) : this.print("大厅活动入口请求失败")
                }, A.onUpdateModuleGift = function(e, t) {
                    p.User.IsRoom || "RoolLevelGift" == (null == t ? void 0 : t.module) && 0 == t.reqData.type && (t.isSuccess ? L.getInstance().onOpenView("", E.RoolLevelUpGift, t.reqData) : b.getInstance().showToast(d.hall_goto_game_money_not_enough))
                }, A.onReqExchange = function(e, t) {
                    var i = {
                        cmd: N.PHP_ACTIVITY_EXCHANGE,
                        body: t || {}
                    };
                    console.log("个人中心-礼包兑换请求兑换", i), y.dispatch(f.NET_SEND_MSG, i)
                }, A.onRespExchange = function(e, t, i, n) {
                    if (console.log("个人中心-礼包兑换兑换结果返回", i, t, n), t) {
                        var a = [];
                        i && (i.forEach((function(e) {
                            var t = {
                                icon: e.imgurl,
                                name: e.name,
                                num: e.num
                            };
                            a.push(t);
                            var i = parseInt(e.type);
                            if (i == m.PropertyType.SILVER_COIN) {
                                var n = p.User.getUserMoneyByID(i),
                                    o = parseInt(e.num);
                                p.User.updateUserMoneyByID(i, n + o)
                            }
                        })), y.dispatch(f.VIEW_UI_OPEN, E.GetPropPrefab, a))
                    } else i && !_.string_isEmpty(i.errorTips) && y.dispatch(f.SYS_TOAST_TIP, {
                        content: i.errorTips
                    });
                    y.dispatch(f.NOTIFY_EXCHANGE, t)
                }, A.reqVipMemberConfig = function(e) {
                    var t = {
                        cmd: N.PHP_GET_VIP_MEMBER_CONFIG,
                        body: {}
                    };
                    y.dispatch(f.NET_SEND_MSG, t)
                }, A.respVipMemberConfig = function(e, t, i, n) {
                    console.log("VIP会员配置返回", t, i, n), t ? _.table_isEmpty(i) ? console.log("VIP会员配置数据为空") : (p.MemberData.setMemberConfig(null == i ? void 0 : i.cfg), y.dispatch(f.EVENT_UPDATE_VIP_MEMBER_CONFIG)) : console.log("VIP会员配置请求失败")
                }, A.reqGameRuleConfig = function(e, t) {
                    var i = {
                        cmd: N.PHP_GET_GAME_RULE_CONFIG,
                        body: {
                            game_ids: t
                        }
                    };
                    y.dispatch(f.NET_SEND_MSG, i)
                }, A.respGameRuleConfig = function(e, t, i, n) {
                    console.log("游戏规则配置返回", t, i, n), t && !_.table_isEmpty(null == i ? void 0 : i.cfg) && p.SelectGame.setGameRuleConfig(i.cfg)
                }, A.requestGameTeamOperate = function(e, t) {
                    var i = {
                        cmd: O.CLIENT_COMMAND_TEAM_OPERATE,
                        body: t
                    };
                    this.teamReq = t, y.dispatch(f.NET_SEND_MSG, i)
                }, A.onTeamUpdateMoney = function(e, t, i) {
                    if (!p.User.isInRoom()) {
                        console.log("队伍资产更新", t);
                        var n = {
                            cmd: O.CLIENT_COMMAND_TEAM_OPERATE,
                            body: {
                                ope: m.TEAM_OPERATION_CODE.UPDATE_MONEY,
                                heartbeat_teamid: t,
                                gameid: i,
                                uid: p.User.getUserMid()
                            }
                        };
                        y.dispatch(f.NET_SEND_MSG, n)
                    }
                }, A.onReceiveTeamOperate = function(e, t) {
                    var i;
                    if (console.log("组队操作返回", t), t.error_code) {
                        switch (t.error_code) {
                            case m.TEAM_ERROR_CODE.READY_USER_NOT_IN_TEAM:
                            case m.TEAM_ERROR_CODE.READY_USER_NOT_IN_WAIT_GROUP:
                            case m.TEAM_ERROR_CODE.READY_TEAM_USER_NOT_EXISTS:
                                t.retcode = m.TEAM_OPERATION_CODE.QUIT;
                                break;
                            case m.TEAM_ERROR_CODE.READY_STATUS_NO_CHANGE:
                                null != (i = this.teamReq) && i.ready && (t.retcode = m.TEAM_OPERATION_CODE.READY, t.ready = {
                                    uid: this.teamReq.ready.uid,
                                    ready: !0
                                });
                                break;
                            case m.TEAM_ERROR_CODE.QUIT_USER_NOT_IN_TEAM:
                            case m.TEAM_ERROR_CODE.QUIT_USER_NOT_FIND_TEAM:
                                t.retcode = m.TEAM_OPERATION_CODE.QUIT
                        }
                        console.log("组队操作返回----修正后的数据：", t)
                    }
                    if (p.SelectGame.setTeamOperateResult(t), t.retcode == m.TEAM_OPERATION_CODE.CREATE) {
                        var n;
                        if (this.stopScheduler(this._teamHandle), this._teamHandle = this.addSchedulerOnce(60, this.onSendTeamHeart.bind(this)), (null == (n = t.create) ? void 0 : n.leader_uid) == p.User.getUserMid()) {
                            var a = p.SelectGame.getTeamLevelTabId(t.gameId);
                            y.dispatch(f.JUMP_HALL_MAIN_VIEW, "game", {
                                gameId: t.gameId,
                                tabId: a
                            })
                        }
                    } else {
                        if (t.retcode == m.TEAM_OPERATION_CODE.HEART) return console.log("组队心跳返回，10分钟后再次发送心跳"), this.stopScheduler(this._teamHandle), void(this._teamHandle = this.addSchedulerOnce(60, this.onSendTeamHeart.bind(this)));
                        t.retcode == m.TEAM_OPERATION_CODE.QUIT ? this.stopScheduler(this._teamHandle) : t.retcode == m.TEAM_OPERATION_CODE.RECONN && (this.stopScheduler(this._teamHandle), this._teamHandle = this.addSchedulerOnce(60, this.onSendTeamHeart.bind(this)))
                    }
                    y.dispatch(f.VIEW_RECEIVE_TEAM_OPERATE, p.SelectGame.getTeamData())
                }, A.onSendTeamHeart = function() {
                    console.log("发送组队心跳信息");
                    var e = p.SelectGame.getTeamData();
                    if (null != e && e.gameId) {
                        var t = {
                            cmd: O.CLIENT_COMMAND_TEAM_OPERATE,
                            body: {
                                ope: m.TEAM_OPERATION_CODE.HEART,
                                gameid: e.gameId,
                                heartbeat_teamid: e.teamid
                            }
                        };
                        y.dispatch(f.NET_SEND_MSG, t)
                    }
                }, A.onTeamMatch = function(e, t) {
                    1 == t.retcode && y.dispatch(f.VIEW_RECEIVE_TEAM_MATCH, t)
                }, o
            }(A))._instance = null, o._RF.pop()
        }
    }
}))