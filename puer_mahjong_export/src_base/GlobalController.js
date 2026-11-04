System.register("chunks:///_virtual/GlobalController.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./GameConfig.ts", "./GameTxt.ts", "./Logger.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./AppSound.ts", "./GameConstant.ts", "./GameRes.ts", "./UIConfig.ts", "./Encrypto.ts", "./LayerManager.ts", "./ResLoader.ts", "./LocalStorage.ts", "./AudioManager.ts", "./EventManager.ts", "./PkgLoaderManager.ts", "./ResLoaderManager.ts", "./SpineAniManager.ts", "./NetState.ts", "./BaseController.ts", "./Platform.ts", "./ActivityController.ts", "./GameController.ts", "./GoodsDataController.ts", "./HallController.ts", "./LadderController.ts", "./LevelController.ts", "./LoginController.ts", "./MatchController.ts", "./MessageController.ts", "./PopupController.ts", "./PrivateController.ts", "./RankController.ts", "./RecommendPopController.ts", "./ReportController.ts", "./ReportPayController.ts", "./SelectGameController.ts", "./ShareController.ts", "./UserController.ts", "./GCmdMapping.ts", "./GlobalCmd.ts", "./GlobalCmdConfig.ts", "./GlobalCmdPBConfig.ts", "./GPBWriteAndRead.ts", "./GSocket.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f, m, g, E, v, T, R, P, y, C, S, A, I, D, N, O, b, L, M, G, k, U, B, w, H, F, q, V, x, W, Y, j, K, Q, J, z, X, Z, $, ee, te, ie, ne, ae, oe, re, se, ce, le, ue, de;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, i = e.createClass
        }, function(e) {
            n = e.cclegacy, a = e.game, o = e.Game, r = e.sys, s = e.input, c = e.Input, l = e.view, u = e.KeyCode, d = e.director
        }, function(e) {
            _ = e.ClientInfo
        }, function(e) {
            h = e.GameConfig, p = e.APPState
        }, function(e) {
            f = e.GameTxt
        }, function(e) {
            m = e.Logger
        }, function(e) {
            g = e.Utils
        }, function(e) {
            E = e.GCache
        }, function(e) {
            v = e.AppEvent
        }, function(e) {
            T = e.AppSound
        }, function(e) {
            R = e.GConstants, P = e.StoreKey
        }, function(e) {
            y = e.GameRes
        }, function(e) {
            C = e.UIID, S = e.UIConfigData
        }, function(e) {
            A = e.Encrypt
        }, function(e) {
            I = e.LayerManager
        }, function(e) {
            D = e.resLoader
        }, function(e) {
            N = e.LocalStorage
        }, function(e) {
            O = e.AudioManager
        }, function(e) {
            b = e.EventManager
        }, function(e) {
            L = e.PkgLoaderManager
        }, function(e) {
            M = e.ResLoaderManager
        }, function(e) {
            G = e.SpineAniManager
        }, function(e) {
            k = e.Network, U = e.NetworkEvent, B = e.NetworkState
        }, function(e) {
            w = e.BaseController
        }, function(e) {
            H = e.Platform
        }, function(e) {
            F = e.ActivityController
        }, function(e) {
            q = e.GameController
        }, function(e) {
            V = e.GoodsDataController
        }, function(e) {
            x = e.HallController
        }, function(e) {
            W = e.LadderController
        }, function(e) {
            Y = e.LevelController
        }, function(e) {
            j = e.LoginController
        }, function(e) {
            K = e.MatchController
        }, function(e) {
            Q = e.MessageController
        }, function(e) {
            J = e.PopupController
        }, function(e) {
            z = e.PrivateController
        }, function(e) {
            X = e.RankController
        }, function(e) {
            Z = e.RecommendPopController
        }, function(e) {
            $ = e.ReportController
        }, function(e) {
            ee = e.ReportPayController
        }, function(e) {
            te = e.SelectGameController
        }, function(e) {
            ie = e.ShareController
        }, function(e) {
            ne = e.UserController
        }, function(e) {
            ae = e.GCmdMapping
        }, function(e) {
            oe = e.GlobalCmdHead, re = e.GlobalCmdHeadPHP
        }, function(e) {
            se = e.GlobalCmdBindingPHP, ce = e.GlobalCmdBinding
        }, function(e) {
            le = e.GlobalPBCmdBinding
        }, function(e) {
            ue = e.GPBWriteAndRead
        }, function(e) {
            de = e.GSocket
        }],
        execute: function() {
            n._RF.push({}, "c24314Mp3hCAZAmJuNQeU9J", "GlobalController", void 0);
            var _e = function(e) {
                function n(t) {
                    var i;
                    return (i = e.call(this, t) || this).countChangeScene = 0, i._cycleLifeQuene = [], i._handlerNetOutTime = null, i._actRewardTextMap = {
                        excessgift: "加赠超标加赠"
                    }, i._phpRequestMap = new Map, i._phpRepeatArray = [], i.MINREQTIME = 500, i.MAXNUM = 50, L.init(), i.initInput(), i
                }
                t(n, e);
                var w = n.prototype;
                return w.initInput = function() {
                    k.getInstance(), this.clearAllListener(), a.on(o.EVENT_HIDE, (function() {
                        h.instance.ApplicationState = p.HIDE, b.dispatch(v.SYS_SHOW_OR_HIDE, h.instance.ApplicationState)
                    })), a.on(o.EVENT_SHOW, (function() {
                        h.instance.ApplicationState = p.SHOW, b.dispatch(v.SYS_SHOW_OR_HIDE, h.instance.ApplicationState)
                    })), r.platform == r.Platform.DESKTOP_BROWSER && s.on(c.EventType.KEY_DOWN, this.onkeyDownCallback, this), a.on(U.CHANGE_NAME, (function() {
                        b.dispatch(v.SYS_NET_CHANGE_NAME, k.getInstance().name)
                    })), a.on(U.CHANGE_STATE, (function() {
                        b.dispatch(v.SYS_NET_CHANGE_STATE, k.getInstance().state)
                    })), l.setResizeCallback((function() {
                        b.dispatch(v.SYS_WINDOW_ADAPTIVE), b.dispatch(v.SYS_WINDOW_CHANGE)
                    }))
                }, w.clearAllListener = function() {
                    a.off(o.EVENT_HIDE), a.off(o.EVENT_SHOW), a.off(U.CHANGE_STATE), a.off(U.CHANGE_NAME), r.platform == r.Platform.DESKTOP_BROWSER && s.off(c.EventType.KEY_DOWN)
                }, w.onkeyDownCallback = function(e) {
                    switch (console.log("***********按键监听 keyCode:" + e.keyCode + "********"), e.keyCode) {
                        case u.F1:
                            b.dispatch(v.NET_REQ_GOODS_INFO, {
                                scene: 1
                            });
                            break;
                        case u.F2:
                            break;
                        case u.F3:
                            b.dispatch(v.NET_REQ_GOODS_INFO, {
                                scene: R.GoodsListID.limitPack
                            });
                            break;
                        case u.F5:
                        case u.F6:
                        case u.ESCAPE:
                    }
                }, w.init = function() {
                    ee.init(), O.init(), M.init(), G.init(), j.init(), x.init(), q.init(), F.init(), J.init(), ie.init(), V.init(), Q.init(), W.init(), X.init(), ne.init(), te.init(), K.init(), z.init(), Z.init(), $.init(), Y.init()
                }, w.onInitModuleEvent = function() {
                    this.addModelListener(v.NET_CONNECT_SUCCESS, this.onSocketConnectSuccess), this.addModelListener(v.SYS_NETWORKTYPE_CHANGE, this.onNetworkTypeChange), this.addModelListener(v.NET_RECONNECT_TIMEOUT_DIALOG, this.onShowConnectTimeOutDialog), this.addModelListener(v.NET_CHECK_NET_STATUS, this.checkNetStatus), this.addModelListener(v.SYS_APP_START, this.onAppStart), this.addModelListener(v.SYS_APP_LIFE, this.appLifeChange), this.addModelListener(v.SYS_SHOW_OR_HIDE, this.processApplicationActions), this.addModelListener(v.SYS_NET_CHANGE_STATE, this.networkChange), this.addModelListener(v.NET_START_CONNECT, this.startGSConnect), this.addModelListener(v.NET_HEART_BEAT_ONLOADING, this.heartbeatOnLoading), this.addModelListener(v.NET_SEND_MSG, this.sendSocketMsg), this.addModelListener(v.VIEW_SCENE_TO_CHANGE, this.changeScene), this.addModelListener(v.SYS_UPDATE_PROTOBUF, this.updatePBConf), this.addModelListener(v.SYS_UPDATE_CMDMAPPING, this.updateCmdMapping), this.addModelListener(v.SYS_PACKAGE_LOAD_TASK_CANCLE, this.receiveCanclePkgLoadTask), this.addModelListener(v.SYS_UPDATE_HEART_TIME, this.updateHeartTime), this.addModelListener(v.NET_RECEIVE_MSG_PHPNEW, this.receiveNetPhpMsg), this.addModelListener(v.NET_RECEIVE_PHP_PUSH_MSG, this.receivePhpPushMsg), this.addModelListener(v.NET_RECEIVE_PHP_PUSH_PAY_MONEY, this.receivePhpPushPayMoney), this.addModelListener(v.NOTIFY_IOS_PAY, this.reqIosPay), this.addModelListener(v.NET_RECEIVE_PHP_PUSH_GLOBAL_MSG, this.receivePhpPushGlobalMsg)
                }, w.appLifeChange = function(e, t) {
                    this.print("*******【Sys cycle change to " + t + "】*********"), t == R.AppRunLife.MainScence || (t == R.AppRunLife.RunScence ? (E.firstRunLoading = !0, m.open(_.DEBUG), E.init(), this._cycleLifeQuene = [], this.init(), this.addScheduler(.01, g.handler(this, this.onSchedulerUpdate))) : t == R.AppRunLife.Login_Will_Open || R.AppRunLife.Login_Closed), this._cycleLifeQuene.push(t)
                }, w.onNetworkTypeChange = function(e, t, i) {
                    this.print("*******【NetworkType change to " + i + "】*********"), t != i && de.instance.closeConnect({})
                }, w.onAppStart = function(e, t) {
                    console.log("分享---监听app启动消息", null != t ? t.query : "null"), g.isNull(t) || g.isNull(t.query) || !E.WxShareData || (console.log("分享---监听app启动分享消息，param[query]=", t.query), E.WxShareData.resetXShareQuery(), t.query.scene = t.scene, E.WxShareData.updateWXShareQuery(t.query || {
                        shareType: -1
                    }, !0))
                }, w.processApplicationActions = function(e, t) {
                    this.print("[系统前后台事件]:" + (t == p.SHOW ? "前台" : "后台")), E.firstRunLoadSuccess && (t == p.SHOW ? O.getInstance().resumeAll() : t == p.HIDE && O.getInstance().pauseAll())
                }, w.onShowConnectTimeOutDialog = function(e, t) {
                    null != t && ("show" == t.tag ? J.getInstance().onOpenView("", C.PopWindow, t.param) : J.getInstance().onCloseView("", C.PopWindow))
                }, w.checkNetStatus = function() {
                    k.getInstance().state == B.ONLINE && k.getInstance().initNetWorkState()
                }, w.networkChange = function(e) {
                    de.instance.checkReConnect(k.getInstance().state == B.ONLINE)
                }, w.startGSConnect = function(e, t) {
                    if (this.print("net---开启网络连接===>url= " + t, "网络状态:" + k.getInstance().state), k.getInstance().state != B.ONLINE) return b.dispatch(v.SYS_TOAST_TIP, {
                        content: f.netWorkErrorTips
                    }), b.dispatch(v.SYS_CLOSE_NETLOADING), void b.dispatch(v.NET_RECEIVE_LOGIN_FAIL);
                    this.print("输出网络连接状态:", de.instance.isConnected()), 0 == de.instance.isConnected() && b.dispatch(v.SYS_SHOW_NETLOADING), de.instance.startConnect(t), b.dispatch(v.SYS_START_CONNECT)
                }, w.heartbeatOnLoading = function(e, t) {
                    void 0 === t && (t = !1), de.instance.heartbeatOnLoading(t)
                }, w.onSocketConnectSuccess = function() {
                    this._phpRequestMap.clear()
                }, w.sendSocketMsg = function(e, t) {
                    if (t && t.cmd) try {
                        if (se[t.cmd]) {
                            this._phpRequestMap.size > this.MAXNUM && this._phpRequestMap.clear();
                            var i = this._phpRequestMap.get(t.cmd);
                            i && g.timeEx() - i.time < this.MINREQTIME && g.isEqual(i.body, t.body) && (console.log("500ms内的重复请求", se[t.cmd].action), this._phpRepeatArray.push(se[t.cmd].action), this._phpRepeatArray.length > 10 && (b.dispatch(v.REPORT_CLICK_EVENT, {
                                eventID: "socketRepeat",
                                isFouce: !0,
                                body: this._phpRepeatArray
                            }), this._phpRepeatArray = [])), this._phpRequestMap.set(t.cmd, {
                                time: g.timeEx(),
                                body: t.body
                            })
                        }
                    } catch (e) {
                        console.log("消息发送失败", e)
                    }
                    de.instance.sendMsg(t.cmd, t.body, t.timeout)
                }, w.changeScene = function(e, t) {
                    var i = this;
                    this.print("即将切换场景：>>>" + (null == t ? void 0 : t.next)), this.countChangeScene < 1 && D.load(y.Prefab_Login.bundle, y.Prefab_Login.path), t && t.next ? d.preloadScene(t.next, (function(e, n) {
                        e ? (m.error(e), t.fail && t.fail.call(t.next)) : (I.clear(), d.loadScene(t.next, (function(e, n) {
                            n && (i.countChangeScene = i.countChangeScene + 1, t.success && t.success.call(t.next))
                        })))
                    })) : (m.error("场景切换失败，param.next 不存在"), t.fail && t.fail.call(t.next))
                }, w.updatePBConf = function(e, t, i, n) {
                    void 0 === n && (n = !1), 0 == t ? ue.Read.updateCmdArrayFunc(i, n) : 1 == t && ue.Write.updateCmdArrayFunc(i, n)
                }, w.updateCmdMapping = function(e, t) {
                    g.table_isEmpty(t) ? ae.initCommonMapping() : (t = g.table_verify(t), ae.pushHeadMapping(t))
                }, w.updateHeartTime = function(e, t) {
                    de.instance.setHeartTime(t)
                }, w.onSchedulerUpdate = function() {
                    de.instance.checkReceiveQueve()
                }, w.receiveNetPhpMsg = function(e, t, i) {
                    if (t.cmd && t.body) {
                        var n = null;
                        i && (n = i.ssid);
                        var a = this.generateErrorInfo(t.body, n),
                            o = oe.PHP_CMD_CONSTANT + t.cmd,
                            r = !1,
                            s = a,
                            c = i;
                        !a.errorTips && t.body && (r = !0, s = t.body.info), o == re.PHP_KEEPALIVE && de.instance.stopKeepAliveTimeOuter();
                        var l = ae.getEventIDByCmd(o);
                        l ? b.dispatch(l, r, s, c) : m.logNet("undifine ==>收到cmd = " + o + " 的消息 但是没有找到对应的事件绑定")
                    }
                }, w.generateErrorInfo = function(e, t) {
                    var i = {
                        errorType: "",
                        errorTips: null,
                        extraInfo: {}
                    };
                    if (!e) return i;
                    var n = e.type,
                        a = null,
                        o = e.status;
                    if (g.isNull(n) && (n = ""), g.isNull(o) && (o = 1), 0 == g.isArray(e) && 0 == g.isObject(e)) a = f.networkReqError;
                    else {
                        if (1 == o && (a = e.msg), "" == a) {
                            var r = (n = n.toString()).substring(0, 0),
                                s = n.substring(2, 2);
                            a = f[n = "phpError" + r + "_" + s] || f.networkReqError
                        }
                        2 == n && 0 == g.string_isEmpty(t) && this.print("会话超时 需要重新登录 还没做")
                    }
                    return {
                        errorType: n,
                        errorTips: a,
                        extraInfo: e.info || {}
                    }
                }, w.receivePhpPushMsg = function(e, t) {
                    var i, n, a, o, r, s;
                    if (t.result) {
                        t.result = g.table_verify(t.result);
                        var c = t.result.mtype;
                        this.print("PHP推送: 收到一条消息 mtype = " + c);
                        var l = "PHP推送:",
                            u = null;
                        switch (console.log("receivePhpPushMsg", t), c) {
                            case 1:
                                break;
                            case 2:
                                u = t.result.info, this.dump(u, l + "房间任务消息");
                                break;
                            case 6:
                            case 10:
                            case 11:
                            case 12:
                                break;
                            case 13:
                                var d = g.number_valueOf(t.result.info.field, null),
                                    h = g.number_valueOf(t.result.info.value, null);
                                g.isNull(d) || g.isNull(h) || d != R.PropertyType.SILVER_COIN && d != R.PropertyType.GOLD_BAR && d != R.PropertyType.DIAMOND || E.User.updateUserMoneyByID(d, h), this.dump(u, l + "刷新用户信息");
                                break;
                            case 15:
                                break;
                            case 16:
                                u = t.result.info, this.dump(u, l + "完成牌局任务");
                                break;
                            case 17:
                                u = t.result.info, this.dump(u, l + "收到私信"), b.dispatch(v.NET_CMD_REQ_WATCH);
                                break;
                            case 19:
                                this.dump(u, l + "代理商注册成功");
                                break;
                            case 20:
                                (u = t.result.info).ip = u.ip, u.port = u.port, this.dump(u, l + "立即切换大厅IP与端口");
                                break;
                            case 21:
                                break;
                            case 27:
                                u = t.result.info, this.dump(u, l + "推送银元场当前牌局数");
                                break;
                            case 28:
                                this.dump(u, l + "新物品箱 线下物品兑换推送");
                                break;
                            case 29:
                                u = t.result.info, this.dump(u, l + "物品箱 刷新物品箱数据 入口显示小红点消息体 "), E.BackPack.updateBagDataByChangeData(u);
                                break;
                            case 30:
                                this.dump(u, l + "物品箱 领奖记录入口显示小红点");
                                break;
                            case 31:
                                (u = t.result.info).agentphone = u.agentphone, this.dump(u, l + "代理商电话");
                                break;
                            case 32:
                                this.dump(u, l + "推送银元场当前牌局数");
                                break;
                            case 34:
                                this.dump(u, l + "接收子游戏 | 子模块的推送信息");
                                break;
                            case 36:
                                (u = t.result.info).propsId = u.propsId, this.dump(u, l + "装扮道具Id");
                                break;
                            case 999:
                                u = t.result.info, this.dump(u, l + "刷新服务器地址");
                                break;
                            case 998:
                                var p = {
                                    txt_desc: u = t.result.info,
                                    alignLeftTop: !0,
                                    notshowClose: !0,
                                    buttonsMap: [{}]
                                };
                                J.getInstance().onOpenView("", C.PopWindow, p), this.dump(u, l + "推送弹窗");
                                break;
                            case 996:
                                u = t.result.giftTip, this.dump(u, l + "礼包推送文案(用于已拥有的头像框，先弹购买成功，再弹折现成其他道具)");
                                break;
                            case 997:
                                u = {
                                    notice_msg: t.result.notice_msg,
                                    notice_type: t.result.notice_type
                                }, this.dump(u, l + "强制实名弹窗");
                                break;
                            case 1001:
                                this.dump(u, l + "存钱罐集满了");
                                break;
                            case 1010:
                                var f = A.JsonDecode(t.result.info);
                                if (g.table_isEmpty(f)) return;
                                for (var m = function(e) {
                                        var t = f[e];
                                        if (t.mid == E.User.getUserMid()) {
                                            var i = E.SelectGame.getCurGameId();
                                            if (i == _.CurrentGameID) {
                                                var n = E.User.getGamePlayRecordByKey(_.CurrentGameID, R.UserGameRecodeKey.SeasonName) || "";
                                                n = n.replace("赛季", ""), H.setPlatformCloudStorage([{
                                                    key: n,
                                                    value: t.WinPoint || 0
                                                }, {
                                                    key: "ttScoreRank",
                                                    value: t.WinPoint || 0
                                                }], (function(e) {
                                                    if (console.log("设置天梯分数=>", n, t.WinPoint || 0, t), H.isWXPlatform() && 1 == H.WxAuthSettingFriends) {
                                                        var i = {};
                                                        i.RankKey = n, i.reLoad = !0, E.SubContext.postMessage(i)
                                                    }
                                                }))
                                            }
                                            E.User.updateGamePlayRecordByKey(i, R.UserGameRecodeKey.LadderScore, t.WinPoint), E.User.setVipProtectionCount(t.Protect || 0, t.UseProtect || 0, t.TotalProtect || 0)
                                        }
                                    }, T = 0; T < f.length; T++) m(T);
                                b.dispatch(v.LADDER_SCORE_CHANGE, f);
                                break;
                            case 1011:
                                u = t.result.info, this.dump(u, l + "邀请消息"), z.getInstance().receivePrivateRoonInviteBroadcast(u);
                                break;
                            case 1012:
                                var y = t.result.info;
                                u = {
                                    asrData: y.asrData,
                                    url: y.url,
                                    mid: y.mid
                                }, this.dump(u, l + "语音广播消息"), b.dispatch(v.NOTIFY_CHAT_VOICE, u);
                                break;
                            case 1013:
                                var S = t.result.info;
                                E.Activity.updateGameBoxConfByPhp(S), b.dispatch(v.EVENT_GAME_BOX_REWARD, S);
                                break;
                            case 1014:
                                E.Activity.updateFreeRewardTasks(t.result.info);
                                break;
                            case 1016:
                                b.dispatch(v.NET_REQ_PIGGY_BANK_CONFIG);
                                break;
                            case 1017:
                                var I = t.result.info.charm || 0;
                                _.deviceInfo.isMJCollection ? E.User.updateGamePlayRecordByKey(null, R.UserGameRecodeKey.Charm, I) : _.deviceInfo.GameIds.forEach((function(e) {
                                    E.User.updateGamePlayRecordByKey(e, R.UserGameRecodeKey.Charm, I)
                                }));
                                var D = N.get(P.USER_CHARM_INFO, null);
                                D && ((D = JSON.parse(D))[E.User.getUserMid()] = I, N.set(P.USER_CHARM_INFO, D));
                                break;
                            case 1018:
                                var O = t.result.info;
                                0 == O.is_last && (E.LevelData.updateLevelConfigByKey("my_expr", O.my_expr), E.LevelData.updateLevelConfigByKey("my_level_name", O.my_level_name), E.LevelData.updateLevelConfigByKey("expr", O.level_expr), E.LevelData.updateLevelConfigByKey("is_buy", O.is_buy), E.LevelData.updateLevelConfigByKey("is_coupon", O.is_coupon), E.LevelData.updateLevelConfigByKey("coupon", O.coupon), E.LevelData.updateMedalConfigByName(O.big_level_name), b.dispatch(v.EVENT_UPDATE_LEVEL_SYSTEM_CONFIG)), E.LevelData.setLevelChangeNum(0 == O.is_last ? 0 : O.add_expr), 1 == O.is_pop && b.dispatch(v.EVENT_USER_LEVEL_EXP_CHANGE, O), b.dispatch(v.LEVEL_SCORE_CHANGE, O.mids);
                                break;
                            case 1019:
                                E.Activity.updateGameLotteryTaskData((null == t || null == (i = t.result) ? void 0 : i.info[0]) || []);
                                break;
                            case 1020:
                                E.Activity.operNianBeastTeamChange((null == t || null == (n = t.result) || null == (a = n.info) ? void 0 : a.mids) || []), b.dispatch(v.NET_REQ_NIAN_BEAST_TEAM);
                                break;
                            case 1022:
                                var L = (null == t || null == (o = t.result) || null == (r = o.info[0]) ? void 0 : r.num) || 0;
                                L > 0 && b.dispatch(v.VIEW_UI_OPEN, C.NianBeastgrtPZDialogPrefab, {
                                    num: L
                                });
                                break;
                            case 1023:
                                b.dispatch(v.NET_REQ_LABOR_PLAY_GAME_CONFIG);
                                break;
                            case 1024:
                                var M = (null == t || null == (s = t.result) ? void 0 : s.info) || [],
                                    G = [];
                                M.length && M.forEach((function(e) {
                                    if (e.num > 0) {
                                        var t = E.PropsConf.getPropsInfoById(e.prop_id),
                                            i = {
                                                icon: E.PropsConf.getPropIconUrlByID(e.prop_id),
                                                name: t.item_name,
                                                num: e.num
                                            };
                                        if (G.push(i), e.prop_id == R.PropertyType.SILVER_COIN) {
                                            var n = E.User.getUserMoneyByID(e.prop_id);
                                            E.User.updateUserMoneyByID(e.prop_id, n + e.num)
                                        }
                                    }
                                })), G.length > 0 && (console.log("显示恭喜获得===>", G), J.getInstance().onOpenView("", C.GetPropPrefab, G));
                                break;
                            case 1025:
                                var k, U = (null == t || null == (k = t.result) ? void 0 : k.info) || [],
                                    B = [];
                                U.length && U.forEach((function(e) {
                                    if (e.num > 0) {
                                        var t = E.PropsConf.getPropsInfoById(null == e ? void 0 : e.item_type),
                                            i = {
                                                icon: E.PropsConf.getPropIconUrlByID(null == e ? void 0 : e.item_type),
                                                name: t.item_name,
                                                num: e.num
                                            };
                                        B.push(i)
                                    }
                                })), B.length > 0 && (console.log("显示恭喜获得===>", B), J.getInstance().onOpenView("", C.GetPropPrefab, B));
                                break;
                            case 1026:
                                b.dispatch(v.NET_REQ_VIP_CONFIG);
                            default:
                                this.print(l + "未识别的推送数据 ")
                        }
                    }
                }, w.receivePhpPushPayMoney = function(e, t) {
                    t = g.table_verify(t), this.print("PHP推送: 广播支付银币", t);
                    var i = A.JsonDecode(t.data);
                    switch (this.print("PHP推送: 数据解析", i), t.type) {
                        case 0:
                        case 1:
                            break;
                        case 3:
                        case 4:
                            this.detailPaySuccess(i);
                            break;
                        case 6:
                        case 7:
                            break;
                        case R.RechargeBroadcastType.FIRST_PAY:
                            this.detailBuyGiftSuccess(i);
                            break;
                        case 9:
                        case 10:
                            break;
                        case R.RechargeBroadcastType.WEEK_CARD:
                        case R.RechargeBroadcastType.LUCK_COIN:
                        case R.RechargeBroadcastType.CASH_COW:
                        case R.RechargeBroadcastType.NEW_BACK_ACTIVITY:
                            this.detailPaySuccess(i);
                            break;
                        case R.RechargeBroadcastType.PIGGY_BANK:
                            this.detailPaySuccess(i), E.User.setTodayLocalRecord("hasClickMenuPiggyBank", !1);
                            break;
                        case R.RechargeBroadcastType.SUPREPAYGIFT:
                            this.detailPaySuccess(i), E.Activity.rewardSuperPayConf(null, Number(i.item_id));
                            break;
                        case R.RechargeBroadcastType.GOLDSNAKE:
                            E.Activity.onBuyResult(i), this.detailPaySuccess(i);
                            break;
                        case R.RechargeBroadcastType.CumulativePay:
                            this.detailPaySuccess(i), b.dispatch(v.NET_REQ_CUMULATIVE_PAY_CONFIG);
                            break;
                        case R.RechargeBroadcastType.SurgePlan:
                            this.detailPaySuccess(i);
                            break;
                        case R.RechargeBroadcastType.CostumeBundle:
                    }
                    g.table_isEmpty(E.Activity.getBonusGiftConfig()) || b.dispatch(v.NET_REQ_BONUS_GIFT_CONFIG), b.dispatch(v.NOTIFY_PAY_SUCCESS, {
                        type: t.type,
                        detailData: i
                    })
                }, w.detailPaySuccess = function(e) {
                    var t = this;
                    if (this.print("处理支付成功====>", e), !g.table_isEmpty(e)) {
                        var i = [];
                        if (g.number_valueOf(e.gold) > 0) {
                            var n = g.clone(R.GoodsType.SILVER_COIN),
                                a = E.PropsConf.getPropsInfoById(n.id),
                                o = E.PropsConf.getPropIconUrlByID(n.id);
                            if (a && a.item_name) {
                                var r = {
                                    icon: o,
                                    name: a.item_name,
                                    num: g.number_valueOf(e.gold)
                                };
                                i.push(r)
                            }
                        }
                        if (g.number_valueOf(e.diamond) > 0) {
                            var s = g.clone(R.GoodsType.DIAMOND),
                                c = E.PropsConf.getPropsInfoById(s.id),
                                l = E.PropsConf.getPropIconUrlByID(s.id);
                            if (c && c.item_name) {
                                var u = {
                                    icon: l,
                                    name: c.item_name,
                                    num: g.number_valueOf(e.diamond)
                                };
                                i.push(u)
                            }
                        }
                        if (E.Desk && E.Desk.mySelfPlayer) {
                            var d = E.Desk.MoneyTypeID,
                                _ = E.User.getUserMoneyByID(d);
                            E.Desk.mySelfPlayer.updateInfo({
                                money: _
                            })
                        }
                        if (e.awards && e.awards.forEach((function(e) {
                                if (e.num > 0) {
                                    var n = E.PropsConf.getPropsInfoById(e.prop_id),
                                        a = {
                                            icon: e.img || E.PropsConf.getPropIconUrlByID(e.prop_id),
                                            name: t._actRewardTextMap[e.act] ? t._actRewardTextMap[e.act] : n.item_name + "加赠",
                                            num: e.num
                                        };
                                    if (i.push(a), e.prop_id == R.PropertyType.SILVER_COIN) {
                                        var o = E.User.getUserMoneyByID(e.prop_id);
                                        E.User.updateUserMoneyByID(e.prop_id, o + e.num)
                                    }
                                }
                            })), e.vipnoble && g.number_valueOf(e.vipnoble.gold) > 0) {
                            var h = g.clone(R.GoodsType.SILVER_COIN),
                                p = E.PropsConf.getPropsInfoById(h.id),
                                f = E.PropsConf.getPropIconUrlByID(h.id);
                            if (p && p.item_name) {
                                var m = {
                                    icon: f,
                                    name: "贵族加赠",
                                    num: g.number_valueOf(e.vipnoble.gold)
                                };
                                i.push(m)
                            }
                        }
                        e.vip_id > 0 && (E.ShopInfo.getDataList(R.ShopBigTabType.VIP).forEach((function(t) {
                            if (t.gid == e.vip_id) {
                                var n = {
                                    icon: t.icon,
                                    name: t.name,
                                    num: 1
                                };
                                i.push(n)
                            }
                        })), b.dispatch(v.NET_REQ_VIP_MEMBER_CONFIG), b.dispatch(v.NET_REQ_CONFIG, {
                            cmd: re.PHP_INTERACTIVE_PROP_CONFIG,
                            param: {}
                        }));
                        var T = g.number_valueOf(e.gold),
                            P = 0,
                            y = 0,
                            S = {},
                            A = g.table_verify(e.privilege);
                        null != A.status && (P += g.number_valueOf(A.gold), y += g.number_valueOf(A.diamond), 0 == g.table_isEmpty(A.props) && (S = A.props));
                        var I = g.table_verify(e.bouns);
                        if (P += g.number_valueOf(I.gold, 0), y += g.number_valueOf(I.diamond, 0), 0 == g.table_isEmpty(I.props))
                            for (var D in I.props) Object.prototype.hasOwnProperty.call(I.props, D) && (0 == isNaN(Number(D)) ? S[Number(D)] = I.props[D] : S[D] = I.props[D]);
                        var N, O = String("成功购买*银币").replace("*", g.string_moneyToShortNumber(T, !0));
                        if (P > 0) {
                            O += String(",加赠*银币").replace("*", String(P));
                            var L = g.clone(R.GoodsType.SILVER_COIN),
                                M = E.PropsConf.getPropsInfoById(L.id),
                                G = E.PropsConf.getPropIconUrlByID(L.id),
                                k = "商城加赠";
                            if (E.ShopInfo.getPriceByGoodsSceneId(R.GoodsListID.Bankruptcy, e.item_id).isEmpty || (k = "加送银币"), M && M.item_name) {
                                var U = {
                                    icon: G,
                                    name: k,
                                    num: P,
                                    newAdd: !0
                                };
                                i.push(U)
                            }
                        }
                        if (y > 0) {
                            O += String(",加赠*兑换券").replace("*", String(y));
                            var B = g.clone(R.GoodsType.DIAMOND),
                                w = E.PropsConf.getPropsInfoById(B.id),
                                H = E.PropsConf.getPropIconUrlByID(B.id);
                            if (w && w.item_name) {
                                var F = {
                                    icon: H,
                                    name: w.item_name,
                                    num: y,
                                    newAdd: !0
                                };
                                i.push(F)
                            }
                        }
                        for (var q in S)
                            if (Object.prototype.hasOwnProperty.call(S, q)) {
                                var V = S[q],
                                    x = E.PropsConf.getPropsInfoById(q),
                                    W = E.PropsConf.getPropIconUrlByID(q);
                                if (x && x.item_name) {
                                    O = O + ",加赠" + x.item_name + "x" + V;
                                    var Y = {
                                        icon: W,
                                        name: x.item_name,
                                        num: V,
                                        newAdd: !0
                                    };
                                    i.push(Y)
                                }
                            } if (e.buy && e.buy.forEach((function(e) {
                                if (e.num > 0) {
                                    var t = E.PropsConf.getPropsInfoById(e.prop_id),
                                        n = {
                                            icon: E.PropsConf.getPropIconUrlByID(e.prop_id),
                                            name: t.item_name,
                                            num: e.num
                                        };
                                    if (i.push(n), e.prop_id == R.PropertyType.SILVER_COIN) {
                                        var a = E.User.getUserMoneyByID(e.prop_id);
                                        E.User.updateUserMoneyByID(e.prop_id, a + e.num)
                                    }
                                }
                            })), g.number_valueOf(e.vipprivilege_money) > 0) {
                            var j = g.clone(R.GoodsType.SILVER_COIN),
                                K = E.PropsConf.getPropsInfoById(j.id),
                                Q = E.PropsConf.getPropIconUrlByID(j.id);
                            if (K && K.item_name) {
                                var z = {
                                    icon: Q,
                                    name: "VIP加赠",
                                    num: g.number_valueOf(e.vipprivilege_money)
                                };
                                i.push(z)
                            }
                        }
                        if (g.number_valueOf(e.growing_level) > 0) {
                            var X = g.clone(R.GoodsType.SILVER_COIN),
                                Z = E.PropsConf.getPropsInfoById(X.id),
                                $ = E.PropsConf.getPropIconUrlByID(X.id);
                            if (Z && Z.item_name) {
                                var ee = {
                                    icon: $,
                                    name: "等级加赠",
                                    num: g.number_valueOf(e.growing_level)
                                };
                                i.push(ee), E.LevelData.updateLevelConfigByKey("is_buy", 2), b.dispatch(v.EVENT_UPDATE_LEVEL_SYSTEM_CONFIG)
                            }
                        }
                        if (console.log("支付成功，描述文本:" + O), console.log("支付成功，获得的物品:" + i), i.length > 0 && (console.log("显示恭喜获得===>", i), J.getInstance().onOpenView("", C.GetPropPrefab, i)), b.dispatch(v.NET_REQ_PROPS_INFO), g.isNotNull(e.cur_money)) N = g.number_valueOf(e.cur_money), E.User.updateUserMoneyByID(0, N)
                    }
                }, w.detailBuyGiftSuccess = function(e) {
                    if (this.print("detailBuyGiftSuccess 处理支付成功====>", e), !g.table_isEmpty(e)) {
                        var t = [];
                        if (g.isNotNull(e.extra) && Object.values(e.extra).forEach((function(e) {
                                var i = e.gname;
                                i || (i = E.PropsConf.getPropsInfoById(e.gtype).item_name);
                                var n = g.number_valueOf(e.gnum),
                                    a = e.gicon;
                                if (n > 0) {
                                    var o = {
                                        name: i,
                                        num: n,
                                        icon: a,
                                        newAdd: !0
                                    };
                                    t.push(o)
                                }
                            })), g.number_valueOf(e.growing_level) > 0) {
                            var i = g.clone(R.GoodsType.SILVER_COIN),
                                n = E.PropsConf.getPropsInfoById(i.id),
                                a = E.PropsConf.getPropIconUrlByID(i.id);
                            if (n && n.item_name) {
                                var o = {
                                    icon: a,
                                    name: "等级加赠",
                                    num: g.number_valueOf(e.growing_level)
                                };
                                t.push(o), E.LevelData.updateLevelConfigByKey("is_buy", 2), b.dispatch(v.EVENT_UPDATE_LEVEL_SYSTEM_CONFIG)
                            }
                        }
                        if (t.length > 0 && (console.log("显示恭喜获得===>", t), J.getInstance().onOpenView("", C.GetPropPrefab, t)), b.dispatch(v.NET_REQ_PROPS_INFO), g.isNotNull(e.total_property))
                            for (var r in e.total_property)
                                if (Object.prototype.hasOwnProperty.call(e.total_property, r)) {
                                    var s = g.number_valueOf(e.total_property[r]);
                                    E.User.updateUserMoneyByID(Number(r), s)
                                }
                    }
                }, w.receiveCanclePkgLoadTask = function(e, t) {
                    t == R.PkgLoaderTaskList.Game && (this.print("游戏分包任务加载取消了 重置cmd绑定命令和pb协议解析"), b.dispatch(v.SYS_UPDATE_CMDMAPPING), ue.Write.initCommonCmds(ce, le, !0), I.initUIConfig(S))
                }, w.reqIosPay = function(e, t) {
                    J.getInstance().onOpenView("", C.IosRechargePrefab, t)
                }, w.loadRemoteAudio = function(e) {
                    O.getInstance().preLoadAudioDir(e, "", (function(e, t, i) {}), (function(e, t) {
                        b.dispatch(v.SYS_PLAY_MUSIC, T.BgHall)
                    }))
                }, w.receivePhpPushGlobalMsg = function(e, t) {
                    if (t.result) {
                        t.result = g.table_verify(t.result);
                        var i = t.result.type;
                        switch (this.print("PHP全服推送: 收到一条消息 type = " + i), console.log("receivePhpPushGlobalMsg", t), i) {
                            case 1021:
                                void 0 !== t.result.is_lottery && (b.dispatch(v.NET_REQ_NIAN_BEAST_CONFIG), console.log("倒计时结束刷新游戏数据", 300), E.Activity.countDownToZero(300.5, (function() {
                                    b.dispatch(v.NET_REQ_NIAN_BEAST_CONFIG)
                                }))), void 0 !== t.result.last_cut && b.dispatch(v.EVENT_NIAN_BEAST_PUSH, t.result);
                                break;
                            default:
                                this.print("PHP全服推送:未识别的推送数据 ")
                        }
                    }
                }, i(n, null, [{
                    key: "instance",
                    get: function() {
                        return this._instance && null != this._instance || (this._instance = new n("GlobalController")), this._instance
                    }
                }]), n
            }(w);
            _e._instance = null, e("GlobalController", _e.instance), n._RF.pop()
        }
    }
}))