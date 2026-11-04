System.register("chunks:///_virtual/RankController.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./EventManager.ts", "./BaseController.ts", "./Platform.ts", "./GlobalCmd.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l;
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
            r = e.EventManager
        }, function(e) {
            s = e.BaseController
        }, function(e) {
            c = e.Platform
        }, function(e) {
            l = e.GlobalCmdHeadPHP
        }],
        execute: function() {
            i._RF.push({}, "bd937ioWMlC+YPNyIjFKUyE", "RankController", void 0), e("RankController", function(e) {
                function i(t) {
                    var i;
                    return (i = e.call(this, t) || this)._isUpdateCharmList = !1, i
                }
                t(i, e), i.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new i("RankController")), this._instance
                }, i.init = function() {
                    this._instance && this._instance.clear(), this._instance = null, i.getInstance()
                };
                var s = i.prototype;
                return s.onInitModuleEvent = function() {
                    this.addModelListener(o.NET_CMD_REQ_RANK_DATA, this.reqRankData), this.addModelListener(o.NET_CMD_RESP_RANK_DATA, this.respRankData), this.addModelListener(o.NET_CMD_REQ_INTERACTIVE_DATA, this.reqUserInteractiveStorageData), this.addModelListener(o.NET_CMD_RESP_INTERACTIVE_DATA, this.respInteractiveRewardData), this.addModelListener(o.NET_REQ_SEND_REWARD_CONF, this.reqUserInteractiveConf), this.addModelListener(o.NET_RESP_SEND_REWARD_CONF, this.respInteractiveConf), this.addModelListener(o.NET_REQ_GET_CHARM_RANK_REWARD, this.reqCharmRankReward), this.addModelListener(o.NET_RESP_GET_CHARM_RANK_REWARD, this.respCharmRankReward), this.addModelListener(o.NET_REQ_GET_USER_CHARM_INFO, this.reqUserCharmInfo), this.addModelListener(o.NET_RESP_GET_USER_CHARM_INFO, this.respUserCharmInfo), this.addModelListener(o.NET_REQ_GET_CHARM_RANK_LIST, this.reqCharmRankList), this.addModelListener(o.NET_RESP_GET_CHARM_RANK_LIST, this.respCharmRankList)
                }, s.reqRankData = function(e, t) {
                    var i = {
                        cmd: l.PHP_RANK_DATA,
                        body: t
                    };
                    console.log("请求排行榜数据", t), r.dispatch(o.NET_SEND_MSG, i)
                }, s.respRankData = function(e, t, i, s) {
                    if (console.log("请求排行榜数据返回", i, t, s), t) {
                        if (n.table_isEmpty(i)) return;
                        a.RankData.setRankData({
                            respData: i,
                            gameId: s.game_id
                        }), r.dispatch(o.NET_CMD_RANK_DATA_UPDATE, {
                            gameId: s.game_id
                        })
                    }
                }, s.reqUserInteractiveStorageData = function(e, t) {
                    1 == c.WxAuthSettingFriends && c.getUserInteractiveStorage({
                        keyList: ["1"],
                        success: function(e) {
                            console.log("互动数据getUserInteractiveStorage success res", e);
                            var t = {
                                    encryptedData: e.encryptedData,
                                    iv: e.iv
                                },
                                i = {
                                    cmd: l.PHP_INTERACTIVE_REWARD,
                                    body: t
                                };
                            r.dispatch(o.NET_SEND_MSG, i)
                        },
                        fail: function(e) {
                            console.log("互动数据getUserInteractiveStorage fail res", e)
                        },
                        complete: function(e) {}
                    })
                }, s.respInteractiveRewardData = function(e, t, i, n) {
                    console.log("请求互动数据发奖结果返回", i, t, n)
                }, s.reqUserInteractiveConf = function(e, t) {
                    var i = {
                        cmd: l.PHP_INTERACTIVE_CONF,
                        body: {}
                    };
                    console.log("请求互动配置开关"), r.dispatch(o.NET_SEND_MSG, i)
                }, s.respInteractiveConf = function(e, t, i, n) {
                    console.log("互动配置开关返回", i, t, n), r.dispatch(o.UPDATE_SEND_REWARD_CONF, {
                        open: t ? i.open : 0
                    })
                }, s.reqCharmRankReward = function(e, t) {
                    var i = {
                        cmd: l.PHP_GET_CHARM_RANK_REWARD,
                        body: {}
                    };
                    console.log("请求魅力排行榜奖励"), r.dispatch(o.NET_SEND_MSG, i)
                }, s.respCharmRankReward = function(e, t, i, n) {
                    console.log("魅力排行榜奖励返回", i, t, n)
                }, s.reqUserCharmInfo = function(e, t) {
                    var i = {
                        cmd: l.PHP_GET_USER_CHARM_INFO,
                        body: t
                    };
                    console.log("请求用户的魅力值信息"), r.dispatch(o.NET_SEND_MSG, i)
                }, s.respUserCharmInfo = function(e, t, i, n) {
                    console.log("用户的魅力值信息返回", i, t, n)
                }, s.reqCharmRankList = function(e, t, i) {
                    void 0 === i && (i = !1);
                    var n = {
                        cmd: l.PHP_GET_CHARM_RANK_LIST,
                        body: t
                    };
                    console.log("请求魅力排行榜单列表"), r.dispatch(o.NET_SEND_MSG, n), this._isUpdateCharmList = i
                }, s.respCharmRankList = function(e, t, i, n) {
                    console.log("魅力排行榜单列表返回", i, t, n), a.RankData.setCharmRankData(i, n.type || 0), this._isUpdateCharmList && r.dispatch(o.EVENT_CHARM_LIST_CHANGE, n.type || 0)
                }, i
            }(s))._instance = null, i._RF.pop()
        }
    }
}))