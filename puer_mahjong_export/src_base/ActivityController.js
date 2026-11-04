System.register("chunks:///_virtual/ActivityController.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./GameConfig.ts", "./GameTxt.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./UIConfig.ts", "./Md5.ts", "./LayerManager.ts", "./LocalStorage.ts", "./EventManager.ts", "./JumpHelper.ts", "./BaseController.ts", "./Platform.ts", "./GlobalCmd.ts", "./AppControler.ts", "./PopupController.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f, m, g, E, v, T, R;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            n = e.ClientInfo
        }, function(e) {
            a = e.GameSwitchConf
        }, function(e) {
            o = e.GameTxt
        }, function(e) {
            r = e.Utils
        }, function(e) {
            s = e.GCache
        }, function(e) {
            c = e.AppEvent
        }, function(e) {
            l = e.GConstants
        }, function(e) {
            u = e.UIID
        }, function(e) {
            d = e.Md5
        }, function(e) {
            _ = e.LayerManager
        }, function(e) {
            h = e.LocalStorage
        }, function(e) {
            p = e.EventManager
        }, function(e) {
            f = e.JumpHelper
        }, function(e) {
            m = e.BaseController
        }, function(e) {
            g = e.Platform
        }, function(e) {
            E = e.GlobalCmdHeadPHP, v = e.GlobalCmdHead
        }, function(e) {
            T = e.AppControler
        }, function(e) {
            R = e.PopupController
        }],
        execute: function() {
            i._RF.push({}, "e81abRcDSRPkatmULTnyJz4", "ActivityController", void 0), e("ActivityController", function(e) {
                function i(t) {
                    var i;
                    return (i = e.call(this, t) || this).reqBankUpFrom = null, i._timerHandle = null, i._timeLoginTimerHandle = null, i
                }
                t(i, e), i.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new i("ActivityController")), this._instance
                }, i.init = function() {
                    this._instance && this._instance.clear(), this._instance = null, i.getInstance()
                };
                var m = i.prototype;
                return m.onInitModuleEvent = function() {
                    this.addModelListener(c.NET_CMD_REQ_TASK_ACT_CONFIG, this.reqAtyCenterConfig), this.addModelListener(c.NET_CMD_RESP_TASK_ACT_CONFIG, this.respAtyCenterConfig), this.addModelListener(c.NET_REQ_ADDDESK_AWARD, this.reqAddDeskAWard), this.addModelListener(c.NET_RESP_ADDDESK_AWARD, this.respAddDeskAWard), this.addModelListener(c.NET_REQ_NEW_PLAYER_REWARD, this.reqNewPlayerReward), this.addModelListener(c.NET_FORWARD_NEW_PLAYER_REWARD, this.respNewPlayerReward), this.addModelListener(c.NET_REQ_HOLIDAYS_GIFTPACKAGE, this.reqHolidaysGiftPackage), this.addModelListener(c.NET_FORWARD_HOLIDAYS_GIFTPACKAGE, this.respHolidaysGiftPackage), this.addModelListener(c.NET_REQ_SIGNIN_CONFIG, this.reqSigninConfig), this.addModelListener(c.NET_FORWARD_SIGNIN_CONFIG, this.respSigninConfig), this.addModelListener(c.NET_REQ_SIGNIN_AWARD, this.reqSignin), this.addModelListener(c.NET_FORWARD_SIGNIN_AWARD, this.respSignin), this.addModelListener(c.NET_SIGNINAWARD_VIDEO, this.respVidoSignin), this.addModelListener(c.NET_REQ_SIGNIN_CONTINU_AWARD, this.reqContinusAward), this.addModelListener(c.NET_FORWARD_SIGNIN_CONTINU_AWARD, this.respSignContinusAward), this.addModelListener(c.NET_REQ_BANKRUPT_GIFT_CONF, this.reqBankUpGiftConf), this.addModelListener(c.NET_RESP_BANKRUPT_GIFT_CONF, this.respBankUpGiftConf), this.addModelListener(c.NET_REQ_BANKRUPT_CONFIG, this.reqBankUpData), this.addModelListener(c.NET_RESP_BANKRUPT_CONFIG, this.respBankUpData), this.addModelListener(c.NET_REQ_BANKRUPT_COUNT, this.reqBankUpCount), this.addModelListener(c.NET_RESP_BANKRUPT_COUNT, this.respBankUpCount, 1), this.addModelListener(c.NET_REQ_BANKRUPT, this.reqBankUpMoney), this.addModelListener(c.NET_RESP_BANKRUPT, this.respBankUpMoney), this.addModelListener(c.NET_RESQ_ROOM_LEVEL_GIFT, this.reqRoolLevelGift), this.addModelListener(c.NET_REQ_FIRST_PAY_CONFIG, this.reqFirstPayConfig), this.addModelListener(c.NET_RESP_FIRST_PAY_CONFIG, this.respFirstPayConfig), this.addModelListener(c.NET_REQ_TURN_TABLE_CONFIG, this.reqTurnTableConfig), this.addModelListener(c.NET_RESP_TURN_TABLE_CONFIG, this.respTurnTableConfig), this.addModelListener(c.NET_REQ_TURN_TABLE_DRAW_REWARD, this.reqTurnTableReward), this.addModelListener(c.NET_RESP_TURN_TABLE_DRAW_REWARD, this.respTurnTableReward), this.addModelListener(c.NET_REQ_TURN_TABLE_EXTRA_REWARD, this.reqTurnTableExtraReward), this.addModelListener(c.NET_RESP_TURN_TABLE_EXTRA_REWARD, this.respTurnTableExtraReward), this.addModelListener(c.NET_REQ_GIFT_RESERVE_POKER, this.reqGiftReservePoker), this.addModelListener(c.NET_FORWARD_GIFT_RESERVE_POKER, this.respGiftReservePoker), this.addModelListener(c.NET_REQ_GIFT_RESERVE_POKER_REWARD, this.reqGiftReservePokerReward), this.addModelListener(c.NET_FORWARD_GIFT_RESERVE_POKER_REWARD, this.respGiftReservePokerReward), this.addModelListener(c.NET_REQ_GIFT_LARGE_DELIVERY_CONFIG, this.reqGiftLargeDeliveryConfig), this.addModelListener(c.NET_FORWARD_GIFT_LARGE_DELIVERY_CONFIG, this.respGiftLargeDeliveryConfig), this.addModelListener(c.NET_REQ_GIFT_LARGE_DELIVERY_LIST, this.reqGiftLargeDeliveryInviteList), this.addModelListener(c.NET_FORWARD_GIFT_LARGE_DELIVERY_LIST, this.respGiftLargeDeliveryInviteList), this.addModelListener(c.NET_REQ_GIFT_LARGE_DELIVERY_REWARD, this.reqGiftLargeDeliveryReward), this.addModelListener(c.NET_FORWARD_GIFT_LARGE_DELIVERY_REWARD, this.respGiftLargeDeliveryReward), this.addModelListener(c.NET_REQ_GIFT_VISITOR, this.reqGiftVisitor), this.addModelListener(c.NET_FORWARD_GIFT_VISITOR, this.respGiftVisitor), this.addModelListener(c.NET_REQ_GIFT_VISITOR_REWARD, this.reqGiftVisitorReward), this.addModelListener(c.NET_FORWARD_GIFT_VISITOR_REWARD, this.respGiftVisitorReward), this.addModelListener(c.NET_REQ_GIFT_VISITOR_COMPLETE, this.reqGiftVisitorComplete), this.addModelListener(c.NET_FORWARD_GIFT_VISITOR_COMPLETE, this.respGiftVisitorComplete), this.addModelListener(c.NET_REQ_GIFT_REDBAG, this.reqGiftRedBag), this.addModelListener(c.NET_FORWARD_GIFT_REDBAG, this.respGiftRedBag), this.addModelListener(c.NET_REQ_GIFT_REDBAG_REWARD, this.reqGiftRedBagReward), this.addModelListener(c.NET_FORWARD_GIFT_REDBAG_REWARD, this.respGiftRedBagReward), this.addModelListener(c.NET_REQ_GIFT_REDBAG_SHARE, this.reqGiftRedBagShare), this.addModelListener(c.NET_FORWARD_GIFT_REDBAG_SHARE, this.respGiftRedBagShare), this.addModelListener(c.NET_REQ_GIFT_REDBAG_SUB, this.reqGiftRedBagSub), this.addModelListener(c.NET_FORWARD_GIFT_REDBAG_SUB, this.respGiftRedBagSub), this.addModelListener(c.NET_REQ_GIFT_BACON, this.reqGiftBacon), this.addModelListener(c.NET_FORWARD_GIFT_BACON, this.respGiftBacon), this.addModelListener(c.NET_REQ_GIFT_BACON_GETTICKET, this.reqGiftBaconGetTicket), this.addModelListener(c.NET_FORWARD_GIFT_BACON_GETTICKET, this.respGiftBaconGetTicket), this.addModelListener(c.NET_REQ_GIFT_BACON_EXCHANGE, this.reqGiftBaconExchange), this.addModelListener(c.NET_FORWARD_GIFT_BACON_EXCHANGE, this.respGiftBaconExchange), this.addModelListener(c.SHOW_GIFT_BACON_VIEW, this.reqGiftBacon), this.addModelListener(c.NET_RESP_ADDMYWXAMP_AWARD, this.respAddMyWxAmp), this.addModelListener(c.REQ_ACTIVITY_CONFIG, this.reqActivityConfig), this.addModelListener(c.NET_RESQ_HALL_SQUARE, this.onGetHallSquare), this.addModelListener(c.NET_REQ_GIFT_CLUB, this.reqGiftClub), this.addModelListener(c.NET_FORWARD_GIFT_CLUB, this.respGiftClub), this.addModelListener(c.NET_REQ_GIFT_CLUB_REWARD, this.reqGiftClubReward), this.addModelListener(c.NET_FORWARD_GIFT_CLUB_REWARD, this.respGiftClubReward), this.addModelListener(c.NET_RECEIVE_ROOM_LEVEL_GIFT, this.respRoolLevelGift), this.addModelListener(c.NET_REQ_ACTIVITY_COLLECTION_CONFIG, this.reqActivityCollectionConfig), this.addModelListener(c.NET_FORWARD_ACTIVITY_COLLECTION_CONFIG, this.respActivityCollectionConfig), this.addModelListener(c.NET_REQ_SIGNIN_REWARD, this.reqSigninReward), this.addModelListener(c.NET_FORWARD_SIGNIN_REWARD, this.respSigninReward), this.addModelListener(c.NET_REQ_PLAYGAME_REWARD, this.reqPlayGameReward), this.addModelListener(c.NET_FORWARD_PLAYGAME_REWARD, this.respPlayGameReward), this.addModelListener(c.NET_REQ_SHARE_REWARD, this.reqShareReward), this.addModelListener(c.NET_FORWARD_SHARE_REWARD, this.respShareReward), this.addModelListener(c.NET_REQ_PHYSICAL_REWARD_CONFIG, this.reqActivityPhysicalRewardConfig), this.addModelListener(c.NET_FORWARD_PHYSICAL_REWARD_CONFIG, this.respActivityPhysicalRewardConfig), this.addModelListener(c.NET_REQ_PHYSICAL_REWARD_REWARD, this.reqActivityPhysicalRewardLottery), this.addModelListener(c.NET_FORWARD_PHYSICAL_REWARD_REWARD, this.respActivityPhysicalRewardLottery), this.addModelListener(c.NET_REQ_PHYSICAL_REWARD_LIST, this.reqActivityPhysicalRewardInvite), this.addModelListener(c.NET_FORWARD_PHYSICAL_REWARD_LIST, this.respActivityPhysicalRewardInvite), this.addModelListener(c.NET_REQ_APPOINTMENT_CONFIG, this.reqActivityAppointmentConfig), this.addModelListener(c.NET_FORWARD_APPOINTMENT_CONFIG, this.respActivityAppointmentConfig), this.addModelListener(c.NET_REQ_APPOINTMENT_JOIN, this.reqJoinActivityAppointment), this.addModelListener(c.NET_FORWARD_APPOINTMENT_JOIN, this.respJoinActivityAppointment), this.addModelListener(c.NET_REQ_APPIONTMENT_SUB, this.reqActivityAppointmentSub), this.addModelListener(c.NET_FORWARD_APPIONTMENT_SUB, this.respActivityAppointmentSub), this.addModelListener(c.ACTIVITY_UPDATE_CONFIG, this.updateActivityConfig), this.addModelListener(c.NET_BUBBLE_CONFIG, this.onRspBubbleConfig), this.addModelListener(c.NET_REQ_WEEKCARD_CONFIG, this.reqActivityWeekCardConfig), this.addModelListener(c.NET_FORWARD_WEEKCARD_CONFIG, this.respActivityWeekCardConfig), this.addModelListener(c.NET_REQ_WEEKCARD_REWARD, this.reqRewardActivityWeekCard), this.addModelListener(c.NET_FORWARD_WEEKCARD_REWARD, this.respRewardActivityWeekCard), this.addModelListener(c.NET_REQ_LUCKLY_SILVER_CONFIG, this.reqActivityLucklySilverConfig), this.addModelListener(c.NET_FORWARD_LUCKLY_SILVER_CONFIG, this.respActivityLucklySilverConfig), this.addModelListener(c.NET_REQ_LUCKLY_SILVER_LOTTERY, this.reqLotteryActivityLucklySilver), this.addModelListener(c.NET_FORWARD_LUCKLY_SILVER_LOTTERY, this.respLotteryActivityLucklySilver), this.addModelListener(c.NET_INTERACTIVE_PROP_CONFIG, this.onGetInteractivePropConfig), this.addModelListener(c.NET_REQ_CONFIG, this.reqConfig), this.addModelListener(c.NET_REQ_CASH_COW_CONFIG, this.reqActivityCashCowConfig), this.addModelListener(c.NET_FORWARD_CASH_COW_CONFIG, this.respActivityCashCowConfig), this.addModelListener(c.NET_LIVEACT_CONFIG, this.respLiveactConfig), this.addModelListener(c.NET_LIVEACT_RECORD, this.respLiveactRecord), this.addModelListener(c.NET_LIVEACT_RECEIVE, this.respLiveactReward), this.addModelListener(c.NOTICE_LIVE_STATE, this.onListenLiveState), this.addModelListener(c.NET_REQ_CARD_GOD_CONFIG, this.reqActivityCardGodConfig), this.addModelListener(c.NET_FORWARD_CARD_GOD_CONFIG, this.respActivityCardGodConfig), this.addModelListener(c.NET_REQ_CARD_GOD_LEVEL_REWARD, this.reqActivityCardGodLevelReward), this.addModelListener(c.NET_FORWARD_CARD_GOD_LEVEL_REWARD, this.respActivityCardGodLevelReward), this.addModelListener(c.NET_REQ_CARD_GOD_TASK_REWARD, this.reqActivityCardGodTaskReward), this.addModelListener(c.NET_FORWARD_CARD_GOD_TASK_REWARD, this.respActivityCardGodTaskReward), this.addModelListener(c.NET_REQ_CARD_GOD_POINT_REWARD, this.reqActivityCardGodPointReward), this.addModelListener(c.NET_FORWARD_CARD_GOD_POINT_REWARD, this.respActivityCardGodPointReward), this.addModelListener(c.NET_AD_SHOWCONFIG, this.onAdShowConfig), this.addModelListener(c.NET_REQ_PIGGY_BANK_CONFIG, this.reqActivityPiggBankConfig), this.addModelListener(c.NET_FORWARD_PIGGY_BANK_CONFIG, this.respActivityPiggBankConfig), this.addModelListener(c.NET_REQ_GAME_BOX_CONFIG, this.reqActivityGameBoxConfig), this.addModelListener(c.NET_RESP_GAME_BOX_CONFIG, this.respActivityGameBoxConfig), this.addModelListener(c.NOTIFY_ACTIVITY_VIEW_OPEN, this.onOpenActivityView), this.addModelListener(c.NET_REQ_FREE_REWARD_CONFIG, this.reqActivityFreeRewardConfig), this.addModelListener(c.NET_FORWARD_FREE_REWARD_CONFIG, this.respActivityFreeRewardConfig, 1), this.addModelListener(c.NET_REQ_FREE_REWARD_REWARD, this.reqActivityFreeRewardReward), this.addModelListener(c.NET_FORWARD_FREE_REWARD_REWARD, this.respActivityFreeRewardReward), this.addModelListener(c.NET_GAME_ACTIVITY_SWITCH, this.onGameActivitySwitch), this.addModelListener(c.NET_SUPER_PAY_ACTIVITY, this.onSuperPayActivity, 1), this.addModelListener(c.NET_SUPER_PAY_REWARD, this.onSuperPayReward), this.addModelListener(c.NET_GET_LIMITGIFT_CONFIG, this.onGetLimitGiftConfig), this.addModelListener(c.NET_GET_LIMITGIFT_REWARD, this.onGetLimitGiftReward), this.addModelListener(c.NET_GET_CHARMGIFT, this.onGetCharmGift), this.addModelListener(c.EVENT_GET_NEW_MOREGAME_CONFIG, this.onGetMoreGameConfig), this.addModelListener(c.NOTIFY_SHARE_FRIENDSHELP, this.onShareFriendHelp), this.addModelListener(c.EVENT_REPORT_SHARE_FRIEND_HELP, this.onReportShareFriendHelp), this.addModelListener(c.NET_REQ_CUMULATIVE_PAY_CONFIG, this.reqActivityCumulativePayConfig), this.addModelListener(c.NET_RESP_CUMULATIVE_PAY_CONFIG, this.respActivityCumulativePayConfig), this.addModelListener(c.NET_REQ_CUMULATIVE_PAY_STATUS, this.reqActivityCumulativePayStatus), this.addModelListener(c.NET_REQ_CUMULATIVE_CHECK_IN_CONFIG, this.reqActivityCumulativeCheckInConfig), this.addModelListener(c.NET_RESP_CUMULATIVE_CHECK_IN_CONFIG, this.respActivityCumulativeCheckInConfig), this.addModelListener(c.NET_REQ_CUMULATIVE_CHECK_IN_REWARD, this.reqActivityCumulativeCheeckInReward), this.addModelListener(c.NET_RESP_CUMULATIVE_CHECK_IN_REWARD, this.respctivityCumulativeCheeckInReward), this.addModelListener(c.NET_REQ_DAILY_GIFT_CONFIG, this.reqActivityDailyGiftConfig), this.addModelListener(c.NET_RESP_DAILY_GIFT_CONFIG, this.respActivityDailyGiftConfig), this.addModelListener(c.NET_REQ_BOUND_PLAN_CONFIG, this.reqActivityBoundPlanConfig), this.addModelListener(c.NET_RESP_BOUND_PLAN_CONFIG, this.respActivityBoundPlanConfig), this.addModelListener(c.NET_RESP_NOTICE_CONFIG, this.onRespNoticeConfig, 1), this.addModelListener(c.NET_RESP_FORCEPOP_CONFIG, this.onRespForcepopuConfig), this.addModelListener(c.NET_REQ_BONUS_GIFT_CONFIG, this.reqActivityBonusGiftConfig), this.addModelListener(c.NET_RESP_BONUS_GIFT_CONFIG, this.respActivityBonusGiftConfig), this.addModelListener(c.NET_REQ_GAME_LOTTERY_CONFIG, this.reqActivityGameLotteryConfig), this.addModelListener(c.NET_RESP_GAME_LOTTERY_CONFIG, this.respActivityGameLotteryConfig), this.addModelListener(c.NET_REQ_GAME_LOTTERY_TASK_REWARD, this.reqActivityGameLotteryTaskReward), this.addModelListener(c.NET_RESP_GAME_LOTTERY_TASK_REWARD, this.respActivityGameLotteryTaskReward), this.addModelListener(c.NET_REQ_GAME_LOTTERY_LOTTERY_RECORD, this.reqActivityGameLotteryRecord), this.addModelListener(c.NET_RESP_GAME_LOTTERY_LOTTERY_RECORD, this.respActivityGameLotteryRecord), this.addModelListener(c.NET_REQ_GAME_LOTTERY_DRAW_REWARD, this.reqActivityGameLotteryDrawReward), this.addModelListener(c.NET_RESP_GAME_LOTTERY_DRAW_REWARD, this.respActivityGameLotteryDrawReward), this.addModelListener(c.NET_REQ_NIAN_BEAST_CONFIG, this.reqActivityNianBeastConfig), this.addModelListener(c.NET_RESP_NIAN_BEAST_CONFIG, this.respActivityNianBeastConfig), this.addModelListener(c.NET_REQ_NIAN_BEAST_RANK, this.reqActivityNianBeastRankData), this.addModelListener(c.NET_REQ_NIAN_BEAST_ATTACK, this.reqActivityNianBeasAttack), this.addModelListener(c.NET_RESP_NIAN_BEAST_ATTACK, this.respActivityNianBeastAttack), this.addModelListener(c.NET_REQ_NIAN_BEAST_RECORD, this.reqActivityNianBeastRecord), this.addModelListener(c.NET_RESP_NIAN_BEAST_RECORD, this.respActivityNianBeastRecord), this.addModelListener(c.NET_REQ_NIAN_BEAST_WORLD_RECORD, this.reqActivityNianBeastWorldRecord), this.addModelListener(c.NET_RESP_NIAN_BEAST_WORLD_RECORD, this.respActivityNianBeastWorldRecord), this.addModelListener(c.NET_REQ_NIAN_BEAST_LOTTERY, this.reqActivityNianBeastLottery), this.addModelListener(c.NET_RESP_NIAN_BEAST_LOTTERY, this.respActivityNianBeastLottery), this.addModelListener(c.NET_REQ_NIAN_BEAST_TEAM, this.reqActivityNianBeastTeam), this.addModelListener(c.NET_RESP_NIAN_BEAST_TEAM, this.respActivityNianBeastTeam), this.addModelListener(c.NET_REQ_NIAN_BEAST_KICK, this.reqActivityNianBeastKick), this.addModelListener(c.NET_REQ_NIAN_BEAST_INOUT, this.reqActivityNianBeastInout), this.addModelListener(c.NOTIFY_PAY_SUCCESS, this.respPayOrder), this.addModelListener(c.NET_REQ_LABOR_PLAY_GAME_CONFIG, this.reqActivityLaborPlayGameConfig), this.addModelListener(c.NET_RESP_LABOR_PLAY_GAME_CONFIG, this.respActivityLaborPlayGameConfig), this.addModelListener(c.NET_REQ_LABOR_PLAY_GAME_TASK_REWARD, this.reqActivityLaborPlayGameTaskReward), this.addModelListener(c.NET_RESP_LABOR_PLAY_GAME_TASK_REWARD, this.respActivityLaborPlayGameTaskReward), this.addModelListener(c.NET_REQ_TIMED_LOGIN_CONFIG, this.reqActivityTimeLoginConfig), this.addModelListener(c.NET_RESP_TIMED_LOGIN_CONFIG, this.respActivityTimeLoginConfig), this.addModelListener(c.NET_REQ_TIMED_LOGIN_REWARD, this.reqActivityTimeLoginReward), this.addModelListener(c.NET_RESP_TIMED_LOGIN_REWARD, this.respActivityTimeLoginReward), this.addModelListener(c.NET_REQ_COSTUME_BUNDLE_CONFIG, this.reqActivityCostumeBundleConfig), this.addModelListener(c.NET_RESP_COSTUME_BUNDLE_CONFIG, this.respActivityCostumeBundleConfig)
                }, m.updateProperty = function(e) {
                    if (r.table_isEmpty(e)) console.log("更新用户资产失败 propertyItem", e);
                    else {
                        var t = parseInt(e.type);
                        if (t == l.PropertyType.SILVER_COIN || t == l.PropertyType.DIAMOND || t == l.PropertyType.EXCHANGE) {
                            var i = parseInt(e.num),
                                n = s.User.getUserMoneyByID(t);
                            s.User.updateUserMoneyByID(t, n + i)
                        }
                    }
                }, m.showRewardView = function(e) {
                    var t = this;
                    if (!r.table_isEmpty(e))
                        if ("[object Array]" == Object.prototype.toString.call(e)) {
                            var i = [];
                            e.forEach((function(e) {
                                var n = s.PropsConf.getPropsInfoById(e.type ? e.type : 0),
                                    a = {
                                        icon: s.PropsConf.getPropIconUrlByID(e.type ? e.type : 0),
                                        name: n.item_name,
                                        num: e.num
                                    };
                                i.push(a), t.updateProperty(e)
                            })), i.length && p.dispatch(c.VIEW_UI_OPEN, u.GetPropPrefab, i)
                        } else if ("[object Object]" == Object.prototype.toString.call(e)) {
                        var n = [],
                            a = s.PropsConf.getPropsInfoById(e.type ? e.type : 0),
                            o = {
                                icon: s.PropsConf.getPropIconUrlByID(e.type ? e.type : 0),
                                name: a.item_name,
                                num: e.num
                            };
                        n.push(o), this.updateProperty(e), n.length && p.dispatch(c.VIEW_UI_OPEN, u.GetPropPrefab, n)
                    }
                }, m.showErrorToast = function(e) {
                    void 0 === e && (e = {}), e.errorTips && p.dispatch(c.SYS_TOAST_TIP, {
                        content: e.errorTips
                    })
                }, m.reqAtyCenterConfig = function(e) {
                    var t = {
                        cmd: E.PHP_ACTIVITY_TASK_CONFIG,
                        body: {}
                    };
                    p.dispatch(c.NET_SEND_MSG, t), this.print("请求活动中心配置")
                }, m.respAtyCenterConfig = function(e, t, i, n) {
                    if (this.print("获取活动中心配置返回", t, i, n), t && i) {
                        s.Activity.updateActData(i);
                        var a = s.Activity.checkUserReceiveInToByDesk();
                        console.log("添加桌面发奖成立条件", !!a), a && this.reqAddDeskAWard(null, a)
                    }
                }, m.reqAddDeskAWard = function(e, t) {
                    var i = "123!@#*&908byaa" + t + n.PlatFormAppID + s.User.getUserMid(),
                        a = {
                            cmd: E.PHP_ADD_DESK_AWARD,
                            body: {
                                activity_id: t,
                                mark: d(i)
                            }
                        };
                    p.dispatch(c.NET_SEND_MSG, a)
                }, m.respAddDeskAWard = function(e, t, i, n) {
                    if (console.log("进入大厅添加应用到桌面奖励返回", t, i), t) {
                        var a = [];
                        i.reward.forEach((function(e) {
                            a.push({
                                name: e.name,
                                icon: e.icon,
                                num: e.num
                            })
                        })), R.getInstance().onOpenView("", u.GetPropPrefab, a)
                    } else console.log("进入大厅发奖失败", i)
                }, m.reqNewPlayerReward = function(e, t, i) {
                    if (!r.isNull(t)) {
                        var n = {
                            cmd: E.PHP_ACTIVITY_PULL_NEW_PEOPLE_GET_REWARD_NEW,
                            body: {
                                type: t,
                                code: i
                            }
                        };
                        p.dispatch(c.NET_SEND_MSG, n)
                    }
                }, m.respNewPlayerReward = function(e, t, i, n) {
                    if (console.log(i, "新手奖励/邀请奖励返回" + t), t) {
                        n.type, n.code;
                        var a = [];
                        for (var o in i)
                            if (Object.prototype.hasOwnProperty.call(i, o)) {
                                var s = {
                                    icon: i[o].gicon,
                                    name: i[o].gname,
                                    num: i[o].gnum
                                };
                                a.push(s)
                            } R.getInstance().onOpenView("", u.GetPropPrefab, a)
                    } else i && !r.string_isEmpty(i.errorTips) && p.dispatch(c.SYS_TOAST_TIP, {
                        content: i.errorTips
                    })
                }, m.reqBankUpGiftConf = function(e, t, i, n, a) {
                    var o;
                    if (void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = !1), void 0 === a && (a = !0), null == t || null == i) {
                        var l = s.SelectGame.getLastIntoRoomData();
                        l && l.level && (i = i || l.level, t = t || l.gameId)
                    }
                    if (i = r.number_valueOf(i), null != t && 0 != i) {
                        var u = s.BankrupData.getkBankUpGiftByKey(t, i);
                        if ((null == u || null == (o = u.giftPack) ? void 0 : o.length) > 0) a && (this.notifyBankruptGift(u, n), console.log("破产礼包----当前有数据，直接通知UI", u));
                        else {
                            var d = {
                                cmd: E.PHP_GET_BANKRUPTPACK,
                                body: {
                                    gameid: t,
                                    levelid: i,
                                    isGiveUp: n,
                                    isBroadcast: a
                                }
                            };
                            console.log("破产礼包----请求配置", d), p.dispatch(c.NET_SEND_MSG, d)
                        }
                    } else console.log("破产礼包----请求失败，参数错误： ", t, i)
                }, m.respBankUpGiftConf = function(e, t, i, n) {
                    var a;
                    console.log(i, "破产礼包----返回配置==>" + t, n);
                    var o = (null == n ? void 0 : n.gameid) || 0,
                        c = (null == n ? void 0 : n.levelid) || 0;
                    t && i && !r.table_isEmpty(i.giftPack) && null != i && null != (a = i.gameids) && a.length && i.gameids.forEach((function(e) {
                        s.BankrupData.updateBankrupGift(e + "_" + c, {
                            giftPack: i.giftPack,
                            role_skill: i.role_skill
                        })
                    })), 0 != (null == n ? void 0 : n.isBroadcast) ? this.notifyBankruptGift(s.BankrupData.getkBankUpGiftByKey(o, c), null == n ? void 0 : n.isGiveUp) : console.log("破产礼包----不广播通知UI，只更新数据")
                }, m.notifyBankruptGift = function(e, t) {
                    void 0 === t && (t = !1);
                    var i = t ? "bankruptGiveUpGift" : "bankruptGift";
                    console.log("破产礼包----广播通知UI", i, e), p.dispatch(c.UPDATE_MODULE_GIFT, {
                        module: i,
                        data: e
                    })
                }, m.reqBankUpData = function(e) {
                    console.log("请求破产配置信息");
                    var t = {
                        cmd: v.SEND_BANKRUPT_CONFIG,
                        body: null
                    };
                    p.dispatch(c.NET_SEND_MSG, t)
                }, m.respBankUpData = function(e, t) {
                    void 0 === t && (t = null), console.log(t, "返回破产配置信息"), t && (s.BankrupData.updateBankruptConfig(t), this.reqBankUpCount())
                }, m.reqBankUpCount = function(e, t, i) {
                    if (void 0 === t && (t = 0), void 0 === i && (i = !1), 0 != i || 0 != s.BankrupData.isCanCheckUpdateCount()) {
                        var n = {
                            cmd: v.SEND_BANKRUPT_COUNT,
                            body: {
                                mid: s.User.getUserMid(),
                                hasShard: t
                            }
                        };
                        p.dispatch(c.NET_SEND_MSG, n), s.BankrupData.updateLastTimeBankUpCount()
                    }
                }, m.respBankUpCount = function(e, t) {
                    if (void 0 === t && (t = null), console.log(t, "获取破产次数返回"), t) {
                        if (0 == s.User.isLoginSuccesed()) return;
                        s.BankrupData.setCurBankruptInfo(t);
                        var i = s.User.getIsPayUser();
                        0 == t.vipExpires || t.vipExpires < -1 ? (i ? s.User.setIdentity(l.UserIdentity.Rmb) : s.User.setIdentity(l.UserIdentity.Normal), s.User.setVipTime(0)) : (i ? s.User.setIdentity(l.UserIdentity.RmbAndVip) : s.User.setIdentity(l.UserIdentity.Vip), s.User.setVipTime(t.vipExpires))
                    }
                }, m.reqBankUpMoney = function(e, t) {
                    if (void 0 === t && (t = null), this.print("主动点击领取破产救济金===>"), 0 != s.BankrupData.isMineBankrupt())
                        if (0 != s.BankrupData.isBankruptRewardRemain()) {
                            this.reqBankUpFrom = t;
                            var i = {
                                cmd: v.SEND_BANKRUPT_MONEY,
                                body: {
                                    mid: s.User.getUserMid()
                                }
                            };
                            p.dispatch(c.NET_SEND_MSG, i)
                        } else null == t && p.dispatch(c.SYS_TOAST_TIP, {
                            content: o.bankruptErrTips2
                        });
                    else null == t && p.dispatch(c.SYS_TOAST_TIP, {
                        content: o.bank_receive_fail
                    })
                }, m.respBankUpMoney = function(e, t) {
                    if (void 0 === t && (t = null), console.log("领取破产救济金返回==>", t), t) {
                        var i = {
                                flag: t.flag,
                                brokeMoney: t.brokeMoney,
                                money: t.money,
                                errType: t.errType
                            },
                            n = 1 == i.flag,
                            a = s.BankrupData.bankToast;
                        if (n && i.brokeMoney > 0) {
                            s.BankrupData.curBankruptReward = i.brokeMoney;
                            var l = 0;
                            s.Desk && (l = s.Desk.MoneyTypeID);
                            var d = r.number_valueOf(i.money) + r.number_valueOf(i.brokeMoney);
                            s.User.updateUserMoneyByID(l, d);
                            var _ = {
                                    icon: "",
                                    name: "破产补助",
                                    num: i.brokeMoney
                                },
                                h = [];
                            h.push(_), R.getInstance().onOpenView("", u.GetPropPrefab, h), a = null, this._reportBankruptReward(i.brokeMoney)
                        } else this.print("领取破产救济金失败！失败原因: " + i.errType), null == this.reqBankUpFrom && (a = o['"bankruptErrTips"' + i.errType]);
                        this.reqBankUpCount(), a && (this.print("显示破产吐司: ", a), p.dispatch(c.SYS_TOAST_TIP, {
                            content: a
                        })), p.dispatch(c.ACTIVITY_BANKUP_BACK, n, i)
                    }
                    this.reqBankUpFrom = null
                }, m._reportBankruptReward = function(e) {
                    var t = {
                        cmd: E.PHP_BANKRUPT_NITICE,
                        body: {
                            id: s.BankrupData.curBankruptCount,
                            num: e
                        }
                    };
                    p.dispatch(c.NET_SEND_MSG, t)
                }, m.reqSigninConfig = function(e) {
                    var t = {
                        cmd: E.PHP_SIGNINAWARD_SIGNINDATA,
                        body: null
                    };
                    p.dispatch(c.NET_SEND_MSG, t)
                }, m.respSigninConfig = function(e, t, i, n) {
                    console.log(i, "请求签到配置数据返回" + t), console.log("请求签到配置数据返回", i, n), t && (s.Activity.updateSigninData(i), p.dispatch(c.ACTIVITY_UPDATE_SIGNIN_CONF))
                }, m.reqSignin = function(e, t, i) {
                    void 0 === t && (t = 0), void 0 === i && (i = !1);
                    var n = {
                        cmd: E.PHP_SIGNINAWARD_NEWSIGNIN,
                        body: {
                            day: t,
                            isBuSignin: !1,
                            isAdSignin: !1,
                            isShare: i
                        }
                    };
                    this.print("reqSignin", n), p.dispatch(c.NET_SEND_MSG, n)
                }, m.respVidoSignin = function(e, t, i, n) {
                    console.log("看视频签到返回", i, t, n), t && !r.table_isEmpty(i.award) && (this.respSignin(e, t, {
                        video: !0
                    }, n), this.reqSigninConfig(null))
                }, m.respSignin = function(e, t, i, n) {
                    if (console.log("签到返回", i, t, n), t) {
                        var a = r.table_verify(s.Activity.getSigninData()),
                            o = r.number_valueOf(null == a ? void 0 : a.todayStatus),
                            d = s.Activity.updateSigninBySuccess(i);
                        if (null != d) {
                            var _, h, f = (null == i ? void 0 : i.isShare) || (null == n ? void 0 : n.isShare) || (null == n || null == (_ = n.body) ? void 0 : _.isShare),
                                m = (null == i ? void 0 : i.video) || (null == n ? void 0 : n.isAdSignin) || (null == n || null == (h = n.body) ? void 0 : h.isAdSignin),
                                g = d.num;
                            m ? g = d.video_number : f && (g = d.share_number);
                            var E = s.User.getUserCurrentVipPrivilege("sign");
                            E > 0 && (g *= 1 + E / 100);
                            var v = {
                                    icon: d.icon,
                                    name: d.name,
                                    num: parseInt(g)
                                },
                                T = [];
                            if (T.push(v), 1 != o && s.MemberData.checkIsVip()) {
                                var P = s.MemberData.getPrivilegeInfoByKey(l.MemberPrivilegeType.SignInExtraBonus);
                                if (P > 0) {
                                    var y = {
                                        icon: d.icon,
                                        name: "VIP加赠",
                                        num: parseInt(P)
                                    };
                                    T.push(y)
                                }
                            }
                            R.getInstance().onOpenView("", u.GetPropPrefab, T), s.Activity.getActivityCollectionConf() && this.reqActivityCollectionConfig(null)
                        }
                    } else i && !r.string_isEmpty(i.errorTips) && p.dispatch(c.SYS_TOAST_TIP, {
                        content: i.errorTips
                    });
                    p.dispatch(c.BROADCAST_SIGNIN_RESULT, t)
                }, m.reqContinusAward = function(e, t) {
                    void 0 === t && (t = 0);
                    var i = {
                        cmd: E.PHP_SIGNINAWARD_CONTINUAWARD,
                        body: {
                            day: t
                        }
                    };
                    this.print("reqContinusAward", i), s.Activity.setContinusAwardDay(t), p.dispatch(c.NET_SEND_MSG, i)
                }, m.respSignContinusAward = function(e, t, i, n) {
                    if (console.log(i, "连续签到领取奖励返回" + t), t) {
                        this.print("respSignContinusAward", i);
                        var a = s.Activity.getContinusAwardDay(),
                            o = s.Activity.updateContinusAward(i, a);
                        if (r.isNotNull(o)) {
                            var c = {
                                    icon: o.icon,
                                    name: o.name,
                                    num: o.num
                                },
                                l = [];
                            l.push(c), R.getInstance().onOpenView("", u.GetPropPrefab, l)
                        }
                    }
                }, m.reqHolidaysGiftPackage = function(e) {
                    var t = {
                        cmd: E.PHP_HOLIDAYS_GIFTPACKAGE,
                        body: null
                    };
                    p.dispatch(c.NET_SEND_MSG, t)
                }, m.respHolidaysGiftPackage = function(e, t, i, n) {
                    console.log("限时折扣返回", i, t, n), t && s.Activity.updateHolidaysGiftPackage(i), p.dispatch(c.ACTIVITY_UPDATE_HOLIDAYSGIFTPACKAGE)
                }, m.respAddMyWxAmp = function(e, t, i, n) {
                    t && s.Activity.updateAddMyWxAmp(i)
                }, m.reqFirstPayConfig = function(e) {
                    var t = {
                        cmd: E.PHP_FIRST_PAY_CONFIG,
                        body: null
                    };
                    console.log("请求首充数据", t), p.dispatch(c.NET_SEND_MSG, t)
                }, m.respFirstPayConfig = function(e, t, i, n) {
                    console.log("请求首充数据返回", t, i, n), t && s.Activity.updateFirstPayPackage(i), p.dispatch(c.ACTIVITY_UPDATE_FIRSTPAY_CONF)
                }, m.reqTurnTableConfig = function(e) {
                    var t = {
                        cmd: E.PHP_TURN_TABLE_CONFIG,
                        body: null
                    };
                    p.dispatch(c.NET_SEND_MSG, t)
                }, m.respTurnTableConfig = function(e, t, i, n) {
                    t && (s.Activity.updateTurnTableData(i), p.dispatch(c.ACTIVITY_UPDATE_TURN_TABLE))
                }, m.reqTurnTableReward = function(e, t) {
                    var i = {
                        cmd: E.PHP_TURN_TABLE_REWARD,
                        body: t
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respTurnTableReward = function(e, t, i, n) {}, m.reqTurnTableExtraReward = function(e, t) {
                    var i = {
                        cmd: E.PHP_TURN_TABLE_EXTRA_REWARD,
                        body: t
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respTurnTableExtraReward = function(e, t, i, n) {
                    if (i instanceof Array) {
                        for (var a = [], o = 0; o < i.length; o++) a.push({
                            icon: i[o].imgurl,
                            name: i[o].name,
                            num: i[o].num
                        });
                        R.getInstance().onOpenView("", u.GetPropPrefab, a)
                    }
                }, m.reqGiftReservePoker = function(e) {
                    var t = {
                        cmd: E.PHP_GIFT_RESERVE_POKER,
                        body: null
                    };
                    p.dispatch(c.NET_SEND_MSG, t)
                }, m.respGiftReservePoker = function(e, t, i, n) {
                    console.log("约局有奖配置返回", i, t, n), s.Activity.updateGiftReservePokerConf(i), p.dispatch(c.ACTIVITY_UPDATE_RESERVE_POKER)
                }, m.reqGiftReservePokerReward = function(e, t, i) {
                    if (!(t <= 0 || i <= 0)) {
                        var n = {
                            cmd: E.PHP_GIFT_RESERVE_POKER_REWARD,
                            body: {
                                kind: t,
                                playnum: i
                            }
                        };
                        p.dispatch(c.NET_SEND_MSG, n)
                    }
                }, m.respGiftReservePokerReward = function(e, t, i, n) {
                    if (console.log("约局有奖奖励返回", i, t, n), t) {
                        var a = [];
                        for (var o in i)
                            if (Object.prototype.hasOwnProperty.call(i, o)) {
                                var d = {
                                    icon: i[o].icon,
                                    name: i[o].name,
                                    num: i[o].num
                                };
                                a.push(d);
                                var _ = parseInt(i[o].type),
                                    h = parseInt(i[o].num);
                                if (_ == l.PropertyType.SILVER_COIN) {
                                    var f = s.User.getUserMoneyByID(_);
                                    s.User.updateUserMoneyByID(_, f + h)
                                }
                            } R.getInstance().onOpenView("", u.GetPropPrefab, a), this.reqGiftReservePoker(null)
                    } else i && !r.string_isEmpty(i.errorTips) && p.dispatch(c.SYS_TOAST_TIP, {
                        content: i.errorTips
                    })
                }, m.reqGiftLargeDeliveryConfig = function(e) {
                    var t = {
                        cmd: E.PHP_GIFT_LARGE_DELIVERY_CONFIG,
                        body: {}
                    };
                    console.log("请求银币大派送配置"), p.dispatch(c.NET_SEND_MSG, t)
                }, m.respGiftLargeDeliveryConfig = function(e, t, i, n) {
                    console.log("银币大派送配置返回", i, t, n), t ? s.Activity.updateGiftLargeDeliveryConf(i) : (i && r.string_isEmpty(i.errorTips), s.Activity.updateGiftLargeDeliveryConf({})), p.dispatch(c.UPDATE_GIFT_LARGE_DELIVERY_CONFIG)
                }, m.reqGiftLargeDeliveryInviteList = function(e) {
                    var t = {
                        cmd: E.PHP_GIFT_LARGE_DELIVERY_LIST,
                        body: {}
                    };
                    console.log("请求银币大派送邀请列表"), p.dispatch(c.NET_SEND_MSG, t)
                }, m.respGiftLargeDeliveryInviteList = function(e, t, i, n) {
                    console.log("银币大派送邀请列表返回", i, t, n), t ? (s.Activity.updateGiftLargeDeliveryInviteList(i), p.dispatch(c.UPDATE_GIFT_LARGE_DELIVERY_LIST)) : i && r.string_isEmpty(i.errorTips)
                }, m.reqGiftLargeDeliveryReward = function(e, t) {
                    var i = {
                        cmd: E.PHP_GIFT_LARGE_DELIVERY_REWARD,
                        body: t
                    };
                    console.log("请求银币大派送奖励"), p.dispatch(c.NET_SEND_MSG, i)
                }, m.respGiftLargeDeliveryReward = function(e, t, i, n) {
                    if (console.log("银币大派送奖励返回", i, t, n), t) {
                        var a = [];
                        for (var o in i)
                            if (Object.prototype.hasOwnProperty.call(i, o)) {
                                var d = {
                                    icon: i[o].imgurl,
                                    name: i[o].name,
                                    num: i[o].num
                                };
                                a.push(d);
                                var _ = parseInt(i[o].type),
                                    h = parseInt(i[o].num);
                                if (_ == l.PropertyType.SILVER_COIN) {
                                    var f = s.User.getUserMoneyByID(_);
                                    s.User.updateUserMoneyByID(_, f + h)
                                }
                            } return R.getInstance().onOpenView("", u.GetPropPrefab, a), void p.dispatch(c.NET_REQ_GIFT_LARGE_DELIVERY_CONFIG)
                    }
                    i && !r.string_isEmpty(i.errorTips) && p.dispatch(c.SYS_TOAST_TIP, {
                        content: i.errorTips
                    }), p.dispatch(c.NET_REQ_GIFT_LARGE_DELIVERY_CONFIG)
                }, m.reqGiftVisitor = function(e) {
                    console.log("新游体验请求");
                    var t = {
                        cmd: E.PHP_GIFT_VISITOR,
                        body: null
                    };
                    p.dispatch(c.NET_SEND_MSG, t)
                }, m.respGiftVisitor = function(e, t, i, n) {
                    console.log("新游体验配置返回", i, t, n), t ? s.Activity.updateGiftVisitorData(i) : (s.Activity.updateGiftVisitorData({}), i && r.string_isEmpty(i.errorTips)), p.dispatch(c.ACTIVITY_UPDATE_VISITOR, i)
                }, m.reqGiftVisitorReward = function(e, t) {
                    if (console.log("新游体验请求奖励", t), !(t <= 0)) {
                        var i = {
                            cmd: E.PHP_GIFT_VISITOR_REWARD,
                            body: {
                                region: t
                            }
                        };
                        p.dispatch(c.NET_SEND_MSG, i)
                    }
                }, m.respGiftVisitorReward = function(e, t, i, n) {
                    if (console.log("新游体验返回", i, t, n), t) {
                        var a = [];
                        for (var o in i)
                            if (Object.prototype.hasOwnProperty.call(i, o)) {
                                var d = {
                                    icon: i[o].icon,
                                    name: i[o].name,
                                    num: i[o].num
                                };
                                a.push(d);
                                var _ = parseInt(i[o].type),
                                    h = parseInt(i[o].num);
                                if (_ == l.PropertyType.SILVER_COIN) {
                                    var f = s.User.getUserMoneyByID(_);
                                    s.User.updateUserMoneyByID(_, f + h)
                                }
                            } p.dispatch(c.VIEW_UI_OPEN, u.GetPropPrefab, a), this.reqGiftVisitor(null)
                    } else i && !r.string_isEmpty(i.errorTips) && console.log("新游体验", i.errorTips)
                }, m.reqGiftVisitorComplete = function(e, t) {
                    if (console.log("新游体验请求完成任务", t), !(t <= 0)) {
                        var i = {
                            cmd: E.PHP_GIFT_VISITOR_COMPLETE,
                            body: {
                                region: t
                            }
                        };
                        p.dispatch(c.NET_SEND_MSG, i), console.log("新游体验请求完成任务1发完", t)
                    }
                }, m.respGiftVisitorComplete = function(e, t, i, n) {
                    if (console.log("新游体验完成任务返回", i, t, n, n.region), t) {
                        var a = s.User.getCompleteTaskReqData();
                        if (a <= 0) return void console.log("新游体验", a, "重复");
                        s.User.delCompleteTaskReqData(), console.log("新游体验完成任务返回,删除:", a), console.log("新游体验完成任务返回"), this.reqGiftVisitor(null)
                    } else i && !r.string_isEmpty(i.errorTips) && console.log("新游体验", i.errorTips)
                }, m.reqGiftRedBag = function(e, t, i) {
                    console.log("幸运红包请求配置:", t, i);
                    var n = r.number_valueOf(i);
                    n = 0 == n ? 1 : n;
                    var a = {
                        cmd: E.PHP_GIFT_REDBAG,
                        body: {
                            sign: t,
                            enter: n
                        }
                    };
                    p.dispatch(c.NET_SEND_MSG, a)
                }, m.respGiftRedBag = function(e, t, i, n) {
                    var a = s.WxShareData.getShareDataByType(l.ShareType.LuckyRedBag);
                    if (s.WxShareData.updateShareStatus(l.ShareType.LuckyRedBag, 0), console.log("activity---幸运红包配置返回", i, t, n, a), t || i && r.string_isEmpty(i.errorTips), r.isNotNull(a)) return console.log("activity---幸运红包配置返回-----------1"), void(_.has(u.GiftRedBagPrefab) || (console.log("activity---幸运红包配置返回-----------2"), R.getInstance().onOpenView("", u.GiftRedBagPrefab, {
                        data: i,
                        shareData: a
                    })));
                    s.Activity.updateGiftRedBagData(i), p.dispatch(c.ACTIVITY_UPDATE_REDBAG, i)
                }, m.reqGiftRedBagReward = function(e, t, i) {
                    console.log("幸运红包请求奖励", t, i);
                    var n = {
                        cmd: E.PHP_GIFT_REDBAG_RECEIVE,
                        body: {
                            sign: t,
                            enter: i
                        }
                    };
                    p.dispatch(c.NET_SEND_MSG, n)
                }, m.respGiftRedBagReward = function(e, t, i, n) {
                    if (console.log("幸运红包奖励返回", i, t, n), t) {
                        var a = [];
                        for (var o in i)
                            if (Object.prototype.hasOwnProperty.call(i, o)) {
                                var d = {
                                    icon: i[o].icon,
                                    name: i[o].name,
                                    num: i[o].num
                                };
                                a.push(d);
                                var _ = parseInt(i[o].type),
                                    h = parseInt(i[o].num);
                                if (_ == l.PropertyType.SILVER_COIN) {
                                    var f = s.User.getUserMoneyByID(_);
                                    s.User.updateUserMoneyByID(_, f + h)
                                }
                            } p.dispatch(c.VIEW_UI_OPEN, u.GetPropPrefab, a)
                    } else i && !r.string_isEmpty(i.errorTips) && p.dispatch(c.SYS_TOAST_TIP, {
                        content: i.errorTips
                    })
                }, m.reqGiftRedBagShare = function(e, t) {
                    console.log("幸运红包发送分享请求");
                    var i = {
                        cmd: E.PHP_GIFT_REDBAG_SEND_SHARE,
                        body: {
                            sign: t
                        }
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respGiftRedBagShare = function(e, t, i, n) {
                    console.log("幸运红包完成分享返回", i, t, n), t ? p.dispatch(c.UPDATE_REDBAG_SHARE) : i && !r.string_isEmpty(i.errorTips) && p.dispatch(c.SYS_TOAST_TIP, {
                        content: i.errorTips
                    })
                }, m.reqGiftRedBagSub = function(e, t) {
                    console.log("幸运红包请求订阅:", t);
                    var i = {
                        cmd: E.PHP_GIFT_REDBAG_SUB,
                        body: {
                            scene: t
                        }
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respGiftRedBagSub = function(e, t, i, n) {
                    console.log("幸运红包订阅完成返回", i, t, n)
                }, m.reqGiftBacon = function(e) {
                    console.log("腊肉请求");
                    var t = {
                        cmd: E.PHP_GIFT_BACON,
                        body: null
                    };
                    p.dispatch(c.NET_SEND_MSG, t)
                }, m.respGiftBacon = function(e, t, i, n) {
                    console.log("腊肉配置返回", i, t, n), t || i && r.string_isEmpty(i.errorTips), s.Activity.updateGiftBaconData(i), p.dispatch(c.ACTIVITY_UPDATE_BACON)
                }, m.reqGiftBaconGetTicket = function(e) {
                    console.log("腊肉请求领取换购票");
                    var t = {
                        cmd: E.PHP_GIFT_BACON_GETTICKET,
                        body: null
                    };
                    p.dispatch(c.NET_SEND_MSG, t)
                }, m.respGiftBaconGetTicket = function(e, t, i, n) {
                    if (console.log("腊肉请求领取换购票完成返回", i, t, n), t) {
                        var a = [],
                            o = {
                                icon: "https://dfqppic.266.com/dfqp/pic/miniprogram/pr19g3zz.png",
                                name: "腊肉票",
                                num: i.rcv_num
                            };
                        a.push(o), p.dispatch(c.VIEW_UI_OPEN, u.GetPropPrefab, a), this.reqGiftBacon(null)
                    } else i && r.string_isEmpty(i.errorTips)
                }, m.reqGiftBaconExchange = function(e, t) {
                    console.log("请求腊肉换购实物", t);
                    var i = {
                        cmd: E.PHP_GIFT_BACON_EXCHANGE,
                        body: t
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respGiftBaconExchange = function(e, t, i, n) {
                    if (console.log("请求腊肉换购实物返回", i, t, n), t) {
                        var a = r.number_valueOf(i.exc_num, 0),
                            o = (i.today_exc_num, i.icon),
                            l = i.name,
                            d = r.number_valueOf(i.mark, 0) + "_" + a;
                        g.isWindows() || g.setPlatformCloudStorage([{
                            key: "baconRank",
                            value: d
                        }], (function(e) {
                            console.log("设置腊肉=>", d, "res:", e);
                            s.SubContext.postMessage({
                                reLoad: !0
                            })
                        }));
                        var _ = [],
                            h = {
                                icon: o,
                                name: l,
                                num: 1
                            };
                        _.push(h), p.dispatch(c.VIEW_UI_OPEN, u.GetPropPrefab, _), this.reqGiftBacon(null)
                    } else i && r.string_isEmpty(i.errorTips)
                }, m.reqActivityConfig = function(e, t) {
                    if (t) {
                        var i = r.number_valueOf(t.cmd);
                        if (!(i <= 0)) {
                            var n = {
                                cmd: i,
                                body: {}
                            };
                            p.dispatch(c.NET_SEND_MSG, n)
                        }
                    }
                }, m.onGetHallSquare = function(e, t, i, n) {
                    this.print("广场列表数据返回：", t, i), t || (i = {}), s.SquareData.updateSquareData(i), s.noticePup.checkHasUpdate() || this.reqConfig(c.NET_REQ_CONFIG, {
                        cmd: E.PHP_GET_FORCEPOP_CONFIG,
                        param: {}
                    })
                }, m.reqGiftClub = function(e, t) {
                    void 0 === t && (t = !1), console.log("游戏圈好礼请求");
                    var i = {};
                    if (g.isWindows() || t) {
                        console.log("游戏圈PC");
                        var n = {
                            cmd: E.PHP_GIFT_CLUB,
                            body: i
                        };
                        p.dispatch(c.NET_SEND_MSG, n)
                    } else console.log("游戏圈微信"), g.getGameClubData({
                        dataTypeList: [{
                            type: 1
                        }, {
                            type: 4
                        }, {
                            type: 6
                        }],
                        success: function(e) {
                            console.log("游戏圈success:" + JSON.stringify(e))
                        },
                        fail: function(e) {
                            console.log("游戏圈fail:", JSON.stringify(e))
                        },
                        complete: function(e) {
                            console.log("游戏圈complete:" + JSON.stringify(e)), "getGameClubData:ok" == e.errMsg && (i = {
                                encryptedData: e.encryptedData,
                                iv: e.iv
                            });
                            var t = {
                                cmd: E.PHP_GIFT_CLUB,
                                body: i
                            };
                            p.dispatch(c.NET_SEND_MSG, t)
                        }
                    })
                }, m.respGiftClub = function(e, t, i, n) {
                    console.log("游戏圈配置返回", i, t, n), t || i && r.string_isEmpty(i.errorTips);
                    var a = 0;
                    r.string_isEmpty(n.encryptedData) || (a = 1), s.Activity.updateGiftClubData(i, a), p.dispatch(c.ACTIVITY_UPDATE_CLUB)
                }, m.reqGiftClubReward = function(e, t) {
                    console.log("游戏圈请求领奖");
                    var i = {
                        cmd: E.PHP_GIFT_CLUB_REWARD,
                        body: {
                            type: t
                        }
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respGiftClubReward = function(e, t, i, n) {
                    if (console.log("游戏圈领奖返回", i, t, n), t) {
                        var a = [];
                        for (var o in i)
                            if (Object.prototype.hasOwnProperty.call(i, o)) {
                                var d = {
                                    icon: i[o].icon,
                                    name: i[o].name,
                                    num: i[o].num
                                };
                                a.push(d);
                                var _ = parseInt(i[o].type),
                                    h = parseInt(i[o].num);
                                if (_ == l.PropertyType.SILVER_COIN) {
                                    var f = s.User.getUserMoneyByID(_);
                                    s.User.updateUserMoneyByID(_, f + h)
                                }
                            } p.dispatch(c.VIEW_UI_OPEN, u.GetPropPrefab, a), this.reqGiftClub(null)
                    } else i && !r.string_isEmpty(i.errorTips) && console.log("新游体验", i.errorTips)
                }, m.reqRoolLevelGift = function(e, t) {
                    var i = {
                        cmd: E.PHP_ROOM_LEVEL_GIFT_CONFIG,
                        body: {
                            differentVal: t.diff || 3e3,
                            levelId: t.level || 12,
                            gameId: s.SelectGame.getCurGameId(),
                            type: t.type
                        }
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respRoolLevelGift = function(e, t, i, n) {
                    t ? s.SelectGame.updateRoomLevelGift(i, n) : s.SelectGame.updateRoomLevelGift({
                        packArr: []
                    }, n), p.dispatch(c.UPDATE_MODULE_GIFT, {
                        module: "RoolLevelGift",
                        isSuccess: t,
                        reqData: n
                    })
                }, m.reqActivityCollectionConfig = function(e) {
                    console.log("请求新手/回归活动合集配置");
                    var t = {
                        cmd: E.PHP_ACTIVITY_COLLECTION,
                        body: {}
                    };
                    p.dispatch(c.NET_SEND_MSG, t)
                }, m.respActivityCollectionConfig = function(e, t, i, n) {
                    if (console.log("新手/回归活动合集配置", i, t, n), t) {
                        var a = r.table_verify(i) || {};
                        a && a.data && a.data.length && s.Activity.updateActivityCollectionConf(i), p.dispatch(c.UPDATE_ACTIVITY_CONFIG, l.ActivityRedToAcId[l.RedDotConf.ActivityCollectionNew])
                    } else i && !r.string_isEmpty(i.errorTips) && console.log("新手/回归活动合集配置返回", i.errorTips);
                    p.dispatch(c.UPDATE_ACTIVITY_COLLECTION_CONFIG)
                }, m.reqSigninReward = function(e, t) {
                    var i = {
                        cmd: E.PHP_SIGNIN_REWARD,
                        body: {
                            day: t.day,
                            type: t.type
                        }
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respSigninReward = function(e, t, i, n) {
                    if (console.log("新手/回归活动合集累计签到返回奖励返回", i, t, n), t)
                        if (i.bei_num) p.dispatch(c.NET_FORWARD_SIGNIN_REWARD_RESULT, i.bei_num);
                        else {
                            var a = [];
                            for (var o in i)
                                if (Object.prototype.hasOwnProperty.call(i, o)) {
                                    var s = {
                                        icon: i[o].icon,
                                        name: i[o].name,
                                        num: i[o].num
                                    };
                                    a.push(s)
                                } p.dispatch(c.VIEW_UI_OPEN, u.GetPropPrefab, a), this.reqActivityCollectionConfig(null)
                        }
                    else i && !r.string_isEmpty(i.errorTips) && p.dispatch(c.SYS_TOAST_TIP, {
                        content: i.errorTips
                    })
                }, m.reqPlayGameReward = function(e, t) {
                    var i = {
                        cmd: E.PHP_PLAYGAME_REWARD,
                        body: {
                            task_id: t.task_id,
                            type: t.type
                        }
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respPlayGameReward = function(e, t, i, n) {
                    if (console.log("新手/回归活动合集任务/积分奖励奖励返回", i, t, n), t) {
                        var a = [];
                        for (var o in i)
                            if (Object.prototype.hasOwnProperty.call(i, o)) {
                                var s = {
                                    icon: i[o].icon,
                                    name: i[o].name,
                                    num: i[o].num
                                };
                                a.push(s)
                            } p.dispatch(c.VIEW_UI_OPEN, u.GetPropPrefab, a), this.reqActivityCollectionConfig(null)
                    } else i && !r.string_isEmpty(i.errorTips) && p.dispatch(c.SYS_TOAST_TIP, {
                        content: i.errorTips
                    })
                }, m.reqShareReward = function(e) {
                    console.log("求新手/回归活动合集 分享任务完成");
                    var t = {
                        cmd: E.PHP_PLAYGAME_SHARE_REWARD,
                        body: {}
                    };
                    p.dispatch(c.NET_SEND_MSG, t)
                }, m.respShareReward = function(e, t, i, n) {
                    console.log("新手/回归活动合集分享任务完成返回", i, t, n), t || i && !r.string_isEmpty(i.errorTips) && p.dispatch(c.SYS_TOAST_TIP, {
                        content: i.errorTips
                    })
                }, m.reqActivityAppointmentConfig = function(e) {
                    console.log("请求约局大比拼配置");
                    var t = {
                        cmd: E.PHP_ACTIVITY_APPOINTMENT,
                        body: {}
                    };
                    p.dispatch(c.NET_SEND_MSG, t)
                }, m.respActivityAppointmentConfig = function(e, t, i, n) {
                    if (console.log("约局大比拼配置", i, t, n), t) {
                        var a = r.table_verify(i) || {};
                        a && a.cfg && s.Activity.updateAppointmentConf(i)
                    } else i && !r.string_isEmpty(i.errorTips) && (console.log("约局大比拼配置返回", i.errorTips), s.Activity.updateAppointmentConf(null));
                    p.dispatch(c.UPDATE_APPOINTMENT_CONFIG)
                }, m.reqJoinActivityAppointment = function(e, t) {
                    var i = {
                        cmd: E.PHP_JOIN_ACTIVITY_APPOINTMENT,
                        body: {}
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respJoinActivityAppointment = function(e, t, i, n) {
                    console.log("约局大比拼报名结果返回", i, t, n), t ? this.reqActivityAppointmentConfig(null) : i && !r.string_isEmpty(i.errorTips) && p.dispatch(c.SYS_TOAST_TIP, {
                        content: i.errorTips
                    })
                }, m.reqActivityAppointmentSub = function(e, t, i, n) {
                    void 0 === i && (i = null), void 0 === n && (n = null), console.log("约局大比拼请求订阅:", t);
                    var a = {
                        cmd: E.PHP_SUB_ACTIVITY_APPOINTMENT,
                        body: {
                            scene: t,
                            match_id: i,
                            start_time: n
                        }
                    };
                    p.dispatch(c.NET_SEND_MSG, a)
                }, m.respActivityAppointmentSub = function(e, t, i, n) {
                    console.log("约局大比拼订阅完成返回", i, t, n), t || i && !r.string_isEmpty(i.errorTips) && console.log("约局大比拼订阅失败", i.errorTips)
                }, m.reqActivityPhysicalRewardConfig = function(e) {
                    console.log("请求实物拉新配置");
                    var t = {
                        cmd: E.PHP_ACTIVITY_PHYSICAL_REWARD,
                        body: {}
                    };
                    p.dispatch(c.NET_SEND_MSG, t)
                }, m.respActivityPhysicalRewardConfig = function(e, t, i, n) {
                    if (console.log("实物拉新配置", i, t, n), t) {
                        var a = r.table_verify(i) || {};
                        s.Activity.updatePhysicalRewardConf(a), p.dispatch(c.UPDATE_PHYSICAL_REWARD_CONFIG)
                    } else i && !r.string_isEmpty(i.errorTips) && console.log("实物拉新配置返回", i.errorTips)
                }, m.reqActivityPhysicalRewardLottery = function(e, t) {
                    var i = {
                        cmd: E.PHP_ACTIVITY_PHYSICAL_REWARD_LOTTERY,
                        body: {}
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respActivityPhysicalRewardLottery = function(e, t, i, n) {
                    console.log("实物拉新抽奖结果返回", i, t, n)
                }, m.reqActivityPhysicalRewardInvite = function(e, t) {
                    var i = {
                        cmd: E.PHP_ACTIVITY_PHYSICAL_REWARD_INVITE,
                        body: {}
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respActivityPhysicalRewardInvite = function(e, t, i, n) {
                    if (console.log("实物拉新邀请列表结果返回", i, t, n), t) {
                        var a = r.table_verify(i) || [];
                        s.Activity.updatePhysicalRewardInviteList(a), p.dispatch(c.UPDATE_PHYSICAL_REWARD_LIST)
                    } else i && !r.string_isEmpty(i.errorTips) && p.dispatch(c.SYS_TOAST_TIP, {
                        content: i.errorTips
                    })
                }, m.updateActivityConfig = function(e, t) {
                    t == l.RedDotConf.ActivityAppointment ? this.reqActivityAppointmentConfig(null) : t == l.RedDotConf.ActivityBubble && this.reqBubbleConfig(null)
                }, m.reqBubbleConfig = function(e) {
                    var t = {
                        cmd: E.PHP_BUBBLE_CONFIG,
                        body: {}
                    };
                    p.dispatch(c.NET_SEND_MSG, t)
                }, m.onRspBubbleConfig = function(e, t, i, n) {
                    console.log("获取推荐活动配置", i, t, n), p.dispatch(c.UPDATE_MENU_GUID_CONFIG, i)
                }, m.reqActivityWeekCardConfig = function(e) {
                    console.log("请求周卡配置");
                    var t = {
                        cmd: E.PHP_ACTIVITY_WEEKCARD,
                        body: {}
                    };
                    p.dispatch(c.NET_SEND_MSG, t)
                }, m.respActivityWeekCardConfig = function(e, t, i, n) {
                    if (console.log("周卡配置返回", i, t, n), t) {
                        var a = r.table_verify(i) || {};
                        s.Activity.updateWeekCardConf(a)
                    } else i && !r.string_isEmpty(i.errorTips) && p.dispatch(c.SYS_TOAST_TIP, {
                        content: i.errorTips
                    }), s.Activity.updateWeekCardConf(null);
                    p.dispatch(c.UPDATE_WEEKCARD_CONFIG)
                }, m.reqRewardActivityWeekCard = function(e, t) {
                    var i = {
                        cmd: E.PHP_REWARD_ACTIVITY_WEEKCARD,
                        body: {
                            id: t.id
                        }
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respRewardActivityWeekCard = function(e, t, i, n) {
                    if (console.log("周卡领奖结果返回", i, t, n), t) {
                        var a = [],
                            o = i.award;
                        if (o) {
                            var d = s.PropsConf.getPropsInfoById(o.type ? o.type : 0),
                                _ = s.PropsConf.getPropIconUrlByID(o.type ? o.type : 0);
                            console.log("周卡rewardConf", d, _);
                            var h = {
                                icon: _,
                                name: d.item_name,
                                num: o.num
                            };
                            a.push(h);
                            var f = parseInt(o.type),
                                m = parseInt(o.num);
                            if (f == l.PropertyType.SILVER_COIN) {
                                var g = s.User.getUserMoneyByID(f);
                                s.User.updateUserMoneyByID(f, g + m)
                            }
                        }
                        p.dispatch(c.VIEW_UI_OPEN, u.GetPropPrefab, a), this.reqActivityWeekCardConfig(null)
                    } else i && !r.string_isEmpty(i.errorTips) && p.dispatch(c.SYS_TOAST_TIP, {
                        content: i.errorTips
                    })
                }, m.reqActivityLucklySilverConfig = function(e, t) {
                    console.log("请求幸运银币配置");
                    var i = {
                        cmd: E.PHP_ACTIVITY_LUCKLYSILVER,
                        body: t || {}
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respActivityLucklySilverConfig = function(e, t, i, n) {
                    if (console.log("幸运银币配置返回", i, t, n), t) {
                        var a = r.table_verify(i) || {};
                        s.Activity.updateLucklySilverConf(a), p.dispatch(c.UPDATE_LUCKLY_SILVER_CONFIG)
                    } else i && !r.string_isEmpty(i.errorTips) && p.dispatch(c.SYS_TOAST_TIP, {
                        content: i.errorTips
                    }), R.getInstance().onCloseView("", u.LucklySilverPrefab)
                }, m.reqLotteryActivityLucklySilver = function(e, t) {
                    var i = {
                        cmd: E.PHP_LOTTERY_ACTIVITY_LUCKLYSILVER,
                        body: {}
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respLotteryActivityLucklySilver = function(e, t, i, n) {
                    console.log("幸运银币折扣结果返回", i, t, n), t ? this.reqActivityWeekCardConfig(null) : (i && !r.string_isEmpty(i.errorTips) && p.dispatch(c.SYS_TOAST_TIP, {
                        content: i.errorTips
                    }), R.getInstance().onCloseView("", u.LucklySilverPrefab))
                }, m.reqConfig = function(e, t) {
                    if (t && t.cmd) {
                        var i = {
                            cmd: t.cmd,
                            body: t.param
                        };
                        p.dispatch(c.NET_SEND_MSG, i)
                    }
                }, m.onGetInteractivePropConfig = function(e, t, i) {
                    console.log("互动道具配置：", t, i), s.SelectGame.updatePopConfig(null == i ? void 0 : i.cfg), p.dispatch(c.UPDATE_INTERACTIVE_PROP_CONFIG)
                }, m.reqActivityCashCowConfig = function(e, t) {
                    console.log("请求摇钱树配置");
                    var i = {
                        cmd: E.PHP_ACTIVITY_CASHCOW,
                        body: t || {}
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respActivityCashCowConfig = function(e, t, i, n) {
                    if (console.log("摇钱树配置返回", i, t, n), t) {
                        var a = r.table_verify(i) || {};
                        s.Activity.updateCashCowConf(a)
                    } else i && !r.string_isEmpty(i.errorTips) && p.dispatch(c.SYS_TOAST_TIP, {
                        content: i.errorTips
                    }), R.getInstance().onCloseView("", u.CashCowPrefab);
                    p.dispatch(c.UPDATE_CASH_COW_CONFIG)
                }, m.respLiveactConfig = function(e, t, i, n) {
                    console.log("直播活动配置", t, i), s.Activity.updateLiveactData(i), p.dispatch(c.VIEW_LIVEACT_UPDATE, {
                        tag: "refresh"
                    })
                }, m.respLiveactRecord = function(e, t, i, n) {
                    if (console.log("直播活动上报", t, i), t) 2 == (null == n ? void 0 : n.type) && this.reqConfig(null, {
                        cmd: E.PHP_ACTIVITY_LIVEACT_CONFIG,
                        param: {}
                    });
                    else {
                        var a = r.number_valueOf(null == n ? void 0 : n.reqNum);
                        a > 0 && a < 2 && null != (null == n ? void 0 : n.type) && null != (null == n ? void 0 : n.time) && (++a, this._reportLiveactEvent(null == n ? void 0 : n.type, null == n ? void 0 : n.time, a))
                    }
                }, m.respLiveactReward = function(e, t, i, n) {
                    console.log("直播活动领奖", t, i), t && (this.reqConfig(null, {
                        cmd: E.PHP_ACTIVITY_LIVEACT_CONFIG,
                        param: {}
                    }), r.table_isEmpty(i) || p.dispatch(c.VIEW_UI_OPEN, u.GetPropPrefab, i))
                }, m.onCheckLiveActivityState = function() {
                    var e = this,
                        t = h.get("_game_liveact_start_time", 0),
                        i = h.get("_game_liveact_end_time", 0);
                    0 != t && 0 != i && (this._reportLiveactEvent(1, t), this.addSchedulerOnce(.01, (function() {
                        e._reportLiveactEvent(2, i)
                    }))), h.set("_game_liveact_start_time", 0), h.set("_game_liveact_end_time", 0), console.log("检查直播活动", t, i)
                }, m.onListenLiveState = function(e, t) {
                    if ("start" == t.tag) h.set("_game_liveact_start_time", t.time), console.log("开始直播", t.time);
                    else if ("end" == t.tag) {
                        var i = h.get("_game_liveact_start_time", 0);
                        if (0 != i) {
                            var n = new Date(1e3 * i),
                                a = new Date;
                            n.getFullYear() === a.getFullYear() && n.getMonth() === a.getMonth() && n.getDate() === a.getDate() && this._reportLiveactEvent(1, i), h.set("_game_liveact_start_time", 0)
                        }
                        this._reportLiveactEvent(2, t.time), console.log("结束直播", i, t.time)
                    } else "updateTime" == t.tag && s.Activity.updateLiveactTime(t.time)
                }, m._reportLiveactEvent = function(e, t, i) {
                    void 0 === t && (t = null), void 0 === i && (i = 1), console.log("上报直播数据"), this.reqConfig(null, {
                        cmd: E.PHP_ACTIVITY_LIVEACT_RECORD,
                        param: {
                            type: e,
                            time: t || r.time(),
                            num: i
                        }
                    })
                }, m.reqActivityCardGodConfig = function(e, t) {
                    console.log("请求牌神令配置");
                    var i = s.Activity.getCardGodConf(),
                        n = t || {};
                    !t && i && (n = {}, r.isNull(i.time) || (n.time = i.time), r.isNull(i.award_time) || (n.award_time = i.award_time));
                    var a = {
                        cmd: E.PHP_ACTIVITY_CARDGOD,
                        body: n
                    };
                    p.dispatch(c.NET_SEND_MSG, a)
                }, m.respActivityCardGodConfig = function(e, t, i, n) {
                    if (console.log("牌神令配置返回", i, t, n), t) {
                        var a = r.table_verify(null == i ? void 0 : i.cfg) || {};
                        s.Activity.updateCardGodConf(a)
                    } else i && !r.string_isEmpty(i.errorTips) && p.dispatch(c.SYS_TOAST_TIP, {
                        content: i.errorTips
                    }), R.getInstance().onCloseView("", u.CardGodPrefab);
                    p.dispatch(c.UPDATE_CARD_GOD_CONFIG)
                }, m.reqActivityCardGodLevelReward = function(e, t) {
                    console.log("请求牌神令等级奖励");
                    var i = {
                        cmd: E.PHP_ACTIVITY_CARDGOD_LEVEL_REWARD,
                        body: t || {}
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respActivityCardGodLevelReward = function(e, t, i, n) {
                    if (console.log("牌神令等级奖励返回", i, t, n), t) {
                        var a = this.getCardGodAwardData(i.awards, "type", !0);
                        a.length && p.dispatch(c.VIEW_UI_OPEN, u.GetPropPrefabPSL, {
                            awards: a,
                            extraAwards: this.getCardGodRemainActiveAwardData()
                        });
                        var o = null == n ? void 0 : n.level,
                            l = null == n ? void 0 : n.type;
                        if (!r.isNull(o) && -1 != o && s.Activity.updateCardGodTask(o, l, !0)) return p.dispatch(c.UPDATE_CARD_GOD_CONFIG), void p.dispatch(c.NET_REQ_PROPS_INFO);
                        p.dispatch(c.NET_REQ_CARD_GOD_CONFIG, {}), p.dispatch(c.NET_REQ_PROPS_INFO)
                    } else i && !r.string_isEmpty(i.errorTips) && p.dispatch(c.SYS_TOAST_TIP, {
                        content: i.errorTips
                    }), R.getInstance().onCloseView("", u.CardGodPrefab)
                }, m.getCardGodAwardData = function(e, t, i) {
                    void 0 === t && (t = "type"), void 0 === i && (i = !1), Array.isArray(e) || (e = r.table_isEmpty(e) ? [] : [e]);
                    var n = {};
                    e.forEach((function(e) {
                        var i = r.number_valueOf(null == e ? void 0 : e[t], 0);
                        n[i] || (n[i] = 0), n[i] += r.number_valueOf(null == e ? void 0 : e.num, 0)
                    }));
                    var a = [];
                    return Object.keys(n).forEach((function(e) {
                        var t = r.number_valueOf(e, 0),
                            o = r.number_valueOf(n[e], 0),
                            c = s.PropsConf.getPropsInfoById(t);
                        if (a.push({
                                icon: s.PropsConf.getPropIconUrlByID(t),
                                name: c ? c.item_name : "",
                                num: o
                            }), i && t == l.PropertyType.SILVER_COIN) {
                            var u = s.User.getUserMoneyByID(t);
                            s.User.updateUserMoneyByID(t, u + o)
                        }
                    })), a
                }, m.getCardGodRemainActiveAwardData = function() {
                    var e = s.Activity.getCardGodConf() || {};
                    if (1 == r.number_valueOf(e.is_buy, 0)) return [];
                    var t = {};
                    (e.level_awards || []).forEach((function(e) {
                        2 != r.number_valueOf(null == e ? void 0 : e.active_status, 0) && ((null == e ? void 0 : e.active_awards) || []).forEach((function(e) {
                            var i = r.number_valueOf(null == e ? void 0 : e.type, 0);
                            t[i] || (t[i] = 0), t[i] += r.number_valueOf(null == e ? void 0 : e.num, 0)
                        }))
                    }));
                    var i = [];
                    return Object.keys(t).forEach((function(e) {
                        var n = r.number_valueOf(e, 0),
                            a = s.PropsConf.getPropsInfoById(n);
                        i.push({
                            icon: s.PropsConf.getPropIconUrlByID(n),
                            name: a ? a.item_name : "",
                            num: t[e]
                        })
                    })), i
                }, m.reqActivityCardGodTaskReward = function(e, t) {
                    console.log("请求牌神令任务奖励");
                    var i = {
                        cmd: E.PHP_ACTIVITY_CARDGOD_TASK_REWARD,
                        body: t || {}
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respActivityCardGodTaskReward = function(e, t, i, n) {
                    if (console.log("牌神令任务奖励返回", i, t, n), t) {
                        var a = null == n ? void 0 : n.id,
                            o = null == n ? void 0 : n.type;
                        s.Activity.updateCardGodProgress(i), r.isNull(a) || -1 == a || r.isNull(o) || s.Activity.updateCardGodTask(a, o), p.dispatch(c.NET_REQ_CARD_GOD_CONFIG, {}), p.dispatch(c.NET_REQ_PROPS_INFO)
                    } else i && !r.string_isEmpty(i.errorTips) && p.dispatch(c.SYS_TOAST_TIP, {
                        content: i.errorTips
                    }), R.getInstance().onCloseView("", u.CardGodPrefab)
                }, m.reqActivityCardGodPointReward = function(e, t) {
                    console.log("请求牌神令每日/每周活跃奖励", t);
                    var i = {
                        cmd: E.PHP_ACTIVITY_CARDGOD_POINT_REWARD,
                        body: t || {}
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respActivityCardGodPointReward = function(e, t, i, n) {
                    if (console.log("牌神令每日/每周活跃奖励返回", i, t, n), t) {
                        var a, o = [],
                            d = null != (a = null == i ? void 0 : i.awards) ? a : [];
                        Array.isArray(d) || (d = r.table_isEmpty(d) ? [] : [d]), d.forEach((function(e) {
                            var t = (null == e ? void 0 : e.prop_id) || 0,
                                i = s.PropsConf.getPropsInfoById(t),
                                n = {
                                    icon: s.PropsConf.getPropIconUrlByID(t),
                                    name: i ? i.item_name : "",
                                    num: (null == e ? void 0 : e.num) || 0
                                };
                            o.push(n);
                            var a = r.number_valueOf(t, 0);
                            if (a == l.PropertyType.SILVER_COIN) {
                                var c = r.number_valueOf(null == e ? void 0 : e.num, 0),
                                    u = s.User.getUserMoneyByID(a);
                                s.User.updateUserMoneyByID(a, u + c)
                            }
                        })), o.length && p.dispatch(c.VIEW_UI_OPEN, u.GetPropPrefab, o);
                        var _ = null == n ? void 0 : n.id,
                            h = null == n ? void 0 : n.type;
                        if (!r.isNull(_) && -1 != _ && !r.isNull(h) && s.Activity.updateCardGodPointAward(_, h)) return p.dispatch(c.UPDATE_CARD_GOD_CONFIG), void p.dispatch(c.NET_REQ_PROPS_INFO);
                        p.dispatch(c.NET_REQ_CARD_GOD_CONFIG, {}), p.dispatch(c.NET_REQ_PROPS_INFO)
                    } else i && !r.string_isEmpty(i.errorTips) && p.dispatch(c.SYS_TOAST_TIP, {
                        content: i.errorTips
                    }), R.getInstance().onCloseView("", u.CardGodPrefab)
                }, m.onAdShowConfig = function(e, t, i, n) {
                    console.log("请求广告配置返回", i, t, n)
                }, m.reqActivityPiggBankConfig = function(e, t) {
                    console.log("请求存钱罐配置");
                    var i = {
                        cmd: E.PHP_ACTIVITY_PIGGYBANK_CONFIG,
                        body: t || {}
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respActivityPiggBankConfig = function(e, t, i, n) {
                    if (console.log("存钱罐配置返回", i, t, n), t) {
                        var a = r.table_verify(null == i ? void 0 : i.cfg) || {};
                        s.Activity.updatePiggyBankConf(a), p.dispatch(c.UPDATE_PIGGY_BANK_CONFIG)
                    } else i && !r.string_isEmpty(i.errorTips) && p.dispatch(c.SYS_TOAST_TIP, {
                        content: i.errorTips
                    }), R.getInstance().onCloseView("", u.PiggyBankPrefab)
                }, m.reqActivityGameBoxConfig = function(e) {
                    var t;
                    console.log("请求对局宝箱配置");
                    var i = null == s || null == (t = s.Desk) ? void 0 : t.getCurLevelID();
                    if (!i) {
                        var n = s.SelectGame.getLastIntoRoomData();
                        n && n.level && (i = n.level)
                    }
                    var a = s.SelectGame.getCurGameId(),
                        o = {
                            cmd: E.PHP_GAME_BOX_CONF,
                            body: {
                                game_id: a,
                                level: i
                            }
                        };
                    p.dispatch(c.NET_SEND_MSG, o)
                }, m.respActivityGameBoxConfig = function(e, t, i, n) {
                    if (console.log("对局宝箱配置返回", i, t, n), t) {
                        var a = r.table_verify(null == i ? void 0 : i.cfg) || {};
                        s.Activity.updateGameBoxConf(a)
                    } else i && !r.string_isEmpty(i.errorTips) && p.dispatch(c.SYS_TOAST_TIP, {
                        content: i.errorTips
                    })
                }, m.onOpenActivityView = function(e, t) {
                    t && t.module && ("PiggyBankPrefab" == t.module ? p.dispatch(c.VIEW_UI_OPEN, u.PiggyBankPrefabH) : "MallPrefab" == t.module && f.getInstance().jumpToViewByCode(JSON.stringify({
                        cmd: "1008"
                    }), null, {
                        uiId: u.MallPrefabH,
                        uiArgs: null,
                        callbacks: null,
                        parent: null,
                        isClickSpanceClose: !1,
                        isAutoRecover: !1
                    }))
                }, m.reqActivityFreeRewardConfig = function(e) {
                    console.log("请求免费奖励配置");
                    var t = {
                        cmd: E.PHP_FREE_REWARD_CONF,
                        body: {}
                    };
                    p.dispatch(c.NET_SEND_MSG, t)
                }, m.respActivityFreeRewardConfig = function(e, t, i, n) {
                    if (console.log("免费奖励配置返回", i, t, n), t) {
                        var a = r.table_verify(null == i ? void 0 : i.cfg) || {};
                        s.Activity.updateFreeRewardConf(a)
                    } else this.showErrorToast(i), R.getInstance().onCloseView("", u.FreeRewardPrefab)
                }, m.reqActivityFreeRewardReward = function(e, t) {
                    console.log("请求免费奖励");
                    var i = {
                        cmd: E.PHP_FREE_REWARD_REWARD,
                        body: t
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respActivityFreeRewardReward = function(e, t, i, n) {
                    console.log("免费奖励返回", i, t, n), t ? this.showRewardView(i) : R.getInstance().onCloseView("", u.FreeRewardPrefab)
                }, m.onGameActivitySwitch = function(e, t, i, n) {
                    t && i && null != i.is_open && (a.GameActivitySwitch = 1 == r.number_valueOf(i.is_open))
                }, m.onSuperPayActivity = function(e, t, i, n) {
                    t && i.cfg ? s.Activity.updateSuperPayConf(i.cfg) : s.Activity.updateSuperPayConf(null)
                }, m.onSuperPayReward = function(e, t, i, n) {
                    if (t && null != i && i.awards) {
                        s.BackPack.updateBagDataByChangeData([{
                            boxItemID: null == i ? void 0 : i.awards.type,
                            changeNum: null == i ? void 0 : i.awards.num
                        }]), s.Activity.rewardSuperPayConf(n.gift_id, null);
                        var a = [],
                            o = s.PropsConf.getPropsInfoById(null != i && i.awards.type ? null == i ? void 0 : i.awards.type : 0),
                            r = {
                                icon: s.PropsConf.getPropIconUrlByID(null != i && i.awards.type ? null == i ? void 0 : i.awards.type : 0),
                                name: o.item_name,
                                num: null == i ? void 0 : i.awards.num
                            };
                        a.push(r), p.dispatch(c.VIEW_UI_OPEN, u.GetPropPrefab, a)
                    } else p.dispatch(c.SYS_TOAST_TIP, {
                        content: "奖励领取失败，请稍后再试"
                    })
                }, m.onGetLimitGiftConfig = function(e, t, i, n) {
                    s.Activity.updateSnakeData(i), p.dispatch(c.VIEW_GET_LIMITGIFT_CONFIG, i, n)
                }, m.onGetLimitGiftReward = function(e, t, i, n) {
                    t ? (s.Activity.updateGoldSnakeBuyNum(i, null == n ? void 0 : n.buyId), p.dispatch(c.VIEW_GET_LIMITGIFT_REWARD, i, n)) : (T.getInstance().showToast(i.errorTips), 1166 == i.errorType && this.reqConfig(c.NET_REQ_CONFIG, {
                        cmd: E.PHP_GET_LIMITGIFT_CONFIG,
                        param: {}
                    }))
                }, m.onGetCharmGift = function(e, t, i, n) {
                    console.log("获取魅力礼包配置：", t, i, n), s.Activity.updateCharmGiftData(i), p.dispatch(c.VIEW_GET_CHARMGIFT, i, n)
                }, m.onGetMoreGameConfig = function(e, t, i, n) {
                    if (console.log("更多游戏数据配置", i), t) {
                        var a = (null == i ? void 0 : i.cfg) || [],
                            o = [],
                            r = [];
                        a.forEach((function(e) {
                            null != e && e.games && e.games.length > 0 && (1 == e.is_default ? o.push(e) : r.push(e))
                        })), s.Activity.updateMoreGameConf(o.concat(r)), p.dispatch(c.EVENT_UPDATE_NEW_MOREGAME_CONFIG)
                    } else T.getInstance().showToast("更多游戏配置获取失败")
                }, m.onShareFriendHelp = function(e, t) {
                    if (console.log("好友助力----onShareFriendHelp--通过好友助力分享打开游戏上报任务", t), t) {
                        if (t.mid == s.User.getUserMid()) return void p.dispatch(c.SYS_TOAST_TIP, {
                            content: "助力失败，不可以给自己助力",
                            timeOut: 2
                        });
                        var i = {
                            cmd: E.PHP_NEW_FRIENDHELP,
                            body: {
                                process_task_id: t.taskId,
                                assist_mid: t.mid,
                                assist_nick: t.nick
                            }
                        };
                        p.dispatch(c.NET_SEND_MSG, i)
                    }
                }, m.onReportShareFriendHelp = function(e, t, i, n) {
                    console.log("好友助力----上报任务---onReportShareFriendHelp", t, i, n);
                    var a = {
                        status: 2,
                        assist_mid: n.assist_mid,
                        assist_nick: n.assist_nick,
                        mid: s.User.getUserMid(),
                        nick: s.User.getUserName()
                    };
                    s.WxShareData.updateShareStatus(l.ShareType.FriendsHelp, 0), s.WxShareData.removeWXShareQuery(l.ShareType.FriendsHelp), t ? (a.status = 1, R.getInstance().onOpenView("", u.FreeRewardPopup, a)) : R.getInstance().onOpenView("", u.FreeRewardPopup, a)
                }, m.reqActivityCumulativePayConfig = function(e) {
                    var t = {
                        cmd: E.PHP_CUMULATIVE_PAY_CONFIG,
                        body: {}
                    };
                    console.log("请求超值连买配置", t), p.dispatch(c.NET_SEND_MSG, t)
                }, m.respActivityCumulativePayConfig = function(e, t, i, n) {
                    if (console.log("超值连买配置返回", i, t, n), t) {
                        var a = r.table_verify(null == i ? void 0 : i.cfg) || {};
                        s.Activity.updateCumulativePayData(a)
                    } else this.showErrorToast(i), R.getInstance().onCloseView("", u.FreeRewardPrefab);
                    p.dispatch(c.EVENT_UPDATE_CUMULATIVE_PAY_CONFIG)
                }, m.reqActivityCumulativePayStatus = function(e, t) {
                    var i = {
                        cmd: E.PHP_CUMULATIVE_PAY_STATUS,
                        body: t
                    };
                    console.log("请求超值连买是否可以购买", i), p.dispatch(c.NET_SEND_MSG, i)
                }, m.respActivityCumulativePayStatus = function(e, t, i, n) {}, m.reqActivityCumulativeCheckInConfig = function(e) {
                    console.log("请求累计签到配置");
                    var t = {
                        cmd: E.PHP_CUMULATIVE_CHECK_IN_CONFIG,
                        body: {}
                    };
                    p.dispatch(c.NET_SEND_MSG, t)
                }, m.respActivityCumulativeCheckInConfig = function(e, t, i, n) {
                    if (console.log("累计签到配置返回", i, t, n), t) {
                        var a = r.table_verify(null == i ? void 0 : i.cfg) || {};
                        s.Activity.updateCumulativeCheckInData(a)
                    } else this.showErrorToast(i), R.getInstance().onCloseView("", u.CumulativeCheckInPrefab);
                    p.dispatch(c.EVENT_UPDATE_CUMULATIVE_CHECK_IN_CONFIG)
                }, m.reqActivityCumulativeCheeckInReward = function(e, t) {
                    console.log("请求累计签到奖励");
                    var i = {
                        cmd: E.PHP_CUMULATIVE_CHECK_IN_REWARD,
                        body: t
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respctivityCumulativeCheeckInReward = function(e, t, i, n) {
                    if (console.log("累计签到奖励返回", i, t, n), t) {
                        var a = [];
                        for (var o in i)
                            if (Object.prototype.hasOwnProperty.call(i, o)) {
                                var r = s.PropsConf.getPropsInfoById(i[o].prop_id || 0),
                                    d = {
                                        icon: i[o].img,
                                        name: r.item_name,
                                        num: i[o].num + i[o].extra
                                    };
                                a.push(d);
                                var _ = parseInt(i[o].prop_id),
                                    h = parseInt(i[o].num);
                                if (_ == l.PropertyType.SILVER_COIN) {
                                    var f = s.User.getUserMoneyByID(_);
                                    s.User.updateUserMoneyByID(_, f + h)
                                }
                            } p.dispatch(c.VIEW_UI_OPEN, u.GetPropPrefab, a), this.reqActivityCumulativeCheckInConfig(null)
                    } else this.showErrorToast(i), R.getInstance().onCloseView("", u.CumulativeCheckInPrefab)
                }, m.reqActivityDailyGiftConfig = function(e, t) {
                    void 0 === t && (t = {}), console.log("请求每日礼包配置");
                    var i = {
                        cmd: E.PHP_GET_DAILY_GIFT_CONFIG,
                        body: t
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respActivityDailyGiftConfig = function(e, t, i, n) {
                    if (console.log("每日礼包配置返回", i, t, n), t) {
                        var a = r.table_verify(i) || {};
                        s.Activity.updateDailyGiftConfig(a)
                    } else this.showErrorToast(i), R.getInstance().onCloseView("", u.DailyGiftPrefab);
                    p.dispatch(c.EVENT_UPDATE_DAILY_GIFT_CONFIG)
                }, m.reqActivityBoundPlanConfig = function(e, t) {
                    void 0 === t && (t = {}), console.log("请求暴涨计划配置");
                    var i = {
                        cmd: E.PHP_GET_BOUND_PLAN_CONFIG,
                        body: t
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respActivityBoundPlanConfig = function(e, t, i, n) {
                    if (console.log("暴涨计划配置返回", i, t, n), t) {
                        var a = r.table_verify(i.cfg) || {};
                        s.Activity.updateBoundPlanConfig(a)
                    } else this.showErrorToast(i), R.getInstance().onCloseView("", u.BoundPlanPrefab);
                    p.dispatch(c.EVENT_UPDATE_BOUND_PLAN_CONFIG)
                }, m.onRespNoticeConfig = function(e, t, i, n) {
                    t && (s.noticePup.updateNoticeConfig(i.list), p.dispatch(c.NOTIFY_UPDATE_RED_DOT, l.RedDotConf.ActivityNoticePopu))
                }, m.onRespForcepopuConfig = function(e, t, i, n) {
                    t && s.noticePup.updateForcePopuConfig(i)
                }, m.reqActivityBonusGiftConfig = function(e, t) {
                    void 0 === t && (t = {}), console.log("请求加赠超标配置 aaaa");
                    var i = {
                        cmd: E.PHP_GET_BONUS_GIFT_CONFIG,
                        body: t
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respActivityBonusGiftConfig = function(e, t, i, n) {
                    var a = this;
                    if (console.log("加赠超标配置返回 aaaa", i, t, n), t) {
                        var o = r.table_verify(i.cfg) || {};
                        s.Activity.updateBonusGiftConfig(o), this.countdownToZero((function() {
                            a.reqActivityBonusGiftConfig(null)
                        }))
                    } else this.showErrorToast(i), R.getInstance().onCloseView("", u.BonusGiftPrefab);
                    p.dispatch(c.EVENT_UPDATE_BONUS_GIFT_CONFIG)
                }, m.countdownToZero = function(e) {
                    if (!this._timerHandle) {
                        var t = new Date,
                            i = new Date(t);
                        i.setHours(10, 38, 0, 0);
                        var n = i.getTime() - t.getTime();
                        console.log("距离24点还有", n / 1e3, "秒"), this._timerHandle = setTimeout((function() {
                            e()
                        }), n)
                    }
                }, m.reqActivityGameLotteryConfig = function(e, t) {
                    void 0 === t && (t = {}), console.log("请求约局抽奖配置");
                    var i = {
                        cmd: E.PHP_GET_GAME_LOTTERY_CONFIG,
                        body: t
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respActivityGameLotteryConfig = function(e, t, i, n) {
                    if (console.log("约局抽奖配置返回", i, t, n), t) {
                        var a = r.table_verify(i.cfg) || {};
                        s.Activity.updateGameLotteryConfig(a), p.dispatch(c.EVENT_UPDATE_GAME_LOTTERY_CONFIG)
                    } else this.showErrorToast(i), R.getInstance().onCloseView("", u.GameLotteryPrefab)
                }, m.reqActivityGameLotteryTaskReward = function(e, t) {
                    void 0 === t && (t = {}), console.log("请求约局抽奖任务奖励");
                    var i = {
                        cmd: E.PHP_GET_GAME_LOTTERY_TASK_REWARD,
                        body: t
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respActivityGameLotteryTaskReward = function(e, t, i, n) {
                    console.log("约局抽奖任务奖励返回", i, t, n), t ? this.reqActivityGameLotteryConfig(null) : this.showErrorToast(i)
                }, m.reqActivityGameLotteryRecord = function(e, t) {
                    void 0 === t && (t = {}), console.log("请求约局抽奖记录");
                    var i = {
                        cmd: E.PHP_GET_GAME_LOTTERY_LOTTERY_RECORD,
                        body: t
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respActivityGameLotteryRecord = function(e, t, i, n) {
                    console.log("约局抽奖抽奖记录返回", i, t, n), t || this.showErrorToast(i)
                }, m.reqActivityGameLotteryDrawReward = function(e, t) {
                    void 0 === t && (t = {}), console.log("请求约局抽奖结果");
                    var i = {
                        cmd: E.PHP_GET_GAME_LOTTERY_LOTTERY_REWARD,
                        body: t
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respActivityGameLotteryDrawReward = function(e, t, i, n) {
                    console.log("约局抽奖抽奖结果返回", i, t, n), t || (this.reqActivityGameLotteryConfig(null), this.showErrorToast(i))
                }, m.reqActivityNianBeastConfig = function(e, t) {
                    void 0 === t && (t = {}), console.log("请求打年兽活动配置");
                    var i = {
                        cmd: E.PHP_GET_GAME_NIAN_BEAST,
                        body: t
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respActivityNianBeastConfig = function(e, t, i, n) {
                    if (console.log("打年兽活动配置返回", i, t, n), t) {
                        var a = r.table_verify(i.cfg) || {};
                        s.Activity.updateNianBeastConfig(a), p.dispatch(c.EVENT_UPDATE_NIAN_BEAST_CONFIG)
                    } else this.showErrorToast(i)
                }, m.reqActivityNianBeastRankData = function(e, t) {
                    void 0 === t && (t = {}), console.log("请求打年兽活动排行榜数据");
                    var i = {
                        cmd: E.PHP_GET_GAME_NIAN_BEAST_RANK,
                        body: t
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.reqActivityNianBeasAttack = function(e, t) {
                    void 0 === t && (t = {}), console.log("打年兽活动请求攻击年兽");
                    var i = {
                        cmd: E.PHP_GET_GAME_NIAN_BEAST_ATTACK,
                        body: t
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respActivityNianBeastAttack = function(e, t, i, n) {
                    console.log("打年兽活动攻击年兽结果返回", i, t, n), t || (this.showErrorToast(i), p.dispatch(c.NET_REQ_NIAN_BEAST_CONFIG))
                }, m.reqActivityNianBeastRecord = function(e, t) {
                    void 0 === t && (t = {}), console.log("打年兽活动请求获取记录");
                    var i = {
                        cmd: E.PHP_GET_GAME_NIAN_BEAST_RECORD,
                        body: t
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respActivityNianBeastRecord = function(e, t, i, n) {
                    console.log("打年兽活动请求获取记录结果返回", i, t, n), t || this.showErrorToast(i)
                }, m.reqActivityNianBeastWorldRecord = function(e, t) {
                    void 0 === t && (t = {}), console.log("打年兽活动请求世界获奖记录");
                    var i = {
                        cmd: E.PHP_GET_GAME_NIAN_BEAST_WORLD_RECORD,
                        body: t
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respActivityNianBeastWorldRecord = function(e, t, i, n) {
                    console.log("打年兽活动世界获奖记录结果返回", i, t, n), t || this.showErrorToast(i)
                }, m.reqActivityNianBeastLottery = function(e, t) {
                    void 0 === t && (t = {}), console.log("打年兽活动请求抽奖");
                    var i = {
                        cmd: E.PHP_GET_GAME_NIAN_BEAST_LOTTERY,
                        body: t
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respActivityNianBeastLottery = function(e, t, i, n) {
                    console.log("打年兽活动请求抽奖结果返回", i, t, n), t || (this.showErrorToast(i), p.dispatch(c.NET_REQ_NIAN_BEAST_CONFIG))
                }, m.reqActivityNianBeastTeam = function(e, t) {
                    void 0 === t && (t = {}), console.log("打年兽活动请求队伍详情");
                    var i = {
                        cmd: E.PHP_GET_GAME_NIAN_BEAST_TEAM,
                        body: t
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respActivityNianBeastTeam = function(e, t, i, n) {
                    if (console.log("打年兽活动请求队伍详情结果返回", i, t, n), t) {
                        var a = i.teams || [];
                        s.Activity.updateNianBeastTeamData(a), p.dispatch(c.EVENT_NIAN_BEAST_TEAM_CHANGE)
                    } else this.showErrorToast(i)
                }, m.reqActivityNianBeastInout = function(e, t) {
                    void 0 === t && (t = {}), console.log("打年兽活动请求离开");
                    var i = {
                        cmd: E.PHP_GET_GAME_NIAN_BEAST_INOUT,
                        body: t
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.reqActivityNianBeastKick = function(e, t) {
                    void 0 === t && (t = {}), console.log("打年兽活动请求踢人/解散");
                    var i = {
                        cmd: E.PHP_GET_GAME_NIAN_BEAST_KICK,
                        body: t
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respPayOrder = function(e, t) {
                    console.log("支付订单成功", t), (null == t ? void 0 : t.type) == l.RechargeBroadcastType.SurgePlan ? (T.getInstance().reportClickEvent("activity_bound_plan_5"), p.dispatch(c.NET_REQ_BOUND_PLAN_CONFIG, null)) : (null == t ? void 0 : t.type) == l.RechargeBroadcastType.CostumeBundle && (T.getInstance().reportClickEvent("activity_costume_bundle_5"), p.dispatch(c.NET_REQ_COSTUME_BUNDLE_CONFIG, null))
                }, m.reqActivityLaborPlayGameConfig = function(e, t) {
                    void 0 === t && (t = {}), console.log("请求五一玩牌活动/每日任务活动配置");
                    var i = {
                        cmd: E.PHP_GET_LABOR_PLAY_GAME_CONFIG,
                        body: t
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respActivityLaborPlayGameConfig = function(e, t, i, n) {
                    if (console.log("五一玩牌活动/每日任务活动配置返回", i, t, n), t) {
                        var a = r.table_verify(i.cfg) || {};
                        if (r.table_isEmpty(a)) return p.dispatch(c.SYS_TOAST_TIP, {
                            content: "活动未开启"
                        }), void R.getInstance().onCloseView("", u.LaborPlayGamePrefab);
                        s.Activity.updateLaborPlayGameConfig(a), p.dispatch(c.EVENT_UPDATE_LABOR_PLAY_GAME_CONFIG)
                    } else this.showErrorToast(i), R.getInstance().onCloseView("", u.LaborPlayGamePrefab)
                }, m.reqActivityLaborPlayGameTaskReward = function(e, t) {
                    void 0 === t && (t = {}), console.log("请求五一玩牌活动/每日任务活动任务奖励");
                    var i = {
                        cmd: E.PHP_GET_LABOR_PLAY_GAME_TASK_REWARD,
                        body: t
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respActivityLaborPlayGameTaskReward = function(e, t, i, n) {
                    if (console.log("五一玩牌活动/每日任务活动任务奖励返回", i, t, n), t) {
                        var a = [],
                            o = i.awards || [];
                        for (var r in o) {
                            var c = o[r],
                                d = s.PropsConf.getPropsInfoById(c.prop_id ? c.prop_id : 0),
                                _ = {
                                    icon: c.img,
                                    name: d.item_name,
                                    num: c.num
                                };
                            a.push(_);
                            var h = parseInt(c.prop_id);
                            if (h == l.PropertyType.SILVER_COIN) {
                                var p = s.User.getUserMoneyByID(h);
                                s.User.updateUserMoneyByID(h, p + (parseInt(c.prop_num) || 0))
                            }
                        }
                        R.getInstance().onOpenView("", u.GetPropPrefab, a), this.reqActivityLaborPlayGameConfig(null)
                    } else this.showErrorToast(i)
                }, m.reqActivityTimeLoginConfig = function(e, t) {
                    void 0 === t && (t = {}), console.log("请求定时登录活动配置");
                    var i = {
                        cmd: E.PHP_GET_TIMED_LOGIN_CONFIG,
                        body: t
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respActivityTimeLoginConfig = function(e, t, i, n) {
                    var a = this;
                    if (console.log("定时登录活动配置返回", i, t, n), t) {
                        var o = r.table_verify(i) || {};
                        if (r.table_isEmpty(o)) return p.dispatch(c.SYS_TOAST_TIP, {
                            content: "活动未开启"
                        }), void R.getInstance().onCloseView("", u.TimeLoginPrefab);
                        s.Activity.updateTimeLoginConfig(o), p.dispatch(c.EVENT_UPDATE_TIMED_LOGIN_CONFIG), this._timeLoginTimerHandle && this.stopSchedulerOnce(this._timeLoginTimerHandle);
                        for (var l = "", d = 0; d < o.cfg_data.length; d++) {
                            var _ = o.cfg_data[d];
                            if (2 == _.status) {
                                l = _.etime;
                                break
                            }
                        }
                        if (!l)
                            for (var h = 0; h < o.cfg_data.length; h++) {
                                var f = o.cfg_data[h];
                                if (0 == f.status) {
                                    l = f.stime;
                                    break
                                }
                            }
                        if (l) {
                            var m = new Date,
                                g = l.split(":").map(Number),
                                E = g[0],
                                v = g[1],
                                T = new Date(m);
                            T.setHours(E, v, 0, 0);
                            var P = (T.getTime() - m.getTime()) / 1e3;
                            P >= 0 && (this._timeLoginTimerHandle = this.addSchedulerOnce(P + 1, (function() {
                                a.reqActivityTimeLoginConfig(null)
                            })))
                        }
                    } else this.showErrorToast(i), R.getInstance().onCloseView("", u.TimeLoginPrefab)
                }, m.reqActivityTimeLoginReward = function(e, t) {
                    void 0 === t && (t = {}), console.log("请求定时登录奖励");
                    var i = {
                        cmd: E.PHP_GET_TIMED_LOGIN_REWARD,
                        body: t
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respActivityTimeLoginReward = function(e, t, i, n) {
                    if (console.log("定时登录奖励返回", i, t, n), t) {
                        var a = [],
                            o = i.reward || [];
                        for (var r in o) {
                            var s = o[r],
                                c = {
                                    icon: s.icon,
                                    name: s.name,
                                    num: s.num
                                };
                            a.push(c)
                        }
                        R.getInstance().onOpenView("", u.GetPropPrefab, a), this.reqActivityTimeLoginConfig(null)
                    } else this.showErrorToast(i)
                }, m.reqActivityCostumeBundleConfig = function(e, t) {
                    void 0 === t && (t = {}), console.log("请求装扮礼包配置");
                    var i = {
                        cmd: E.PHP_GET_COSTUME_BUNDLE_CONFIG,
                        body: t
                    };
                    p.dispatch(c.NET_SEND_MSG, i)
                }, m.respActivityCostumeBundleConfig = function(e, t, i, n) {
                    if (console.log("装扮礼包配置返回", i, t, n), t) {
                        var a = r.table_verify(i.cfg) || {};
                        s.Activity.updateCostumeBundleConfig(a)
                    } else this.showErrorToast(i), R.getInstance().onCloseView("", u.CostumeBundlePrefab)
                }, i
            }(m))._instance = null, i._RF.pop()
        }
    }
}))