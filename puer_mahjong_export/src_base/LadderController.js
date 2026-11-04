System.register("chunks:///_virtual/LadderController.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./UIConfig.ts", "./EventManager.ts", "./BaseController.ts", "./GlobalCmd.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            n = e.ClientInfo
        }, function(e) {
            a = e.Utils
        }, function(e) {
            o = e.GCache
        }, function(e) {
            r = e.AppEvent
        }, function(e) {
            s = e.GConstants
        }, function(e) {
            c = e.UIID
        }, function(e) {
            l = e.EventManager
        }, function(e) {
            u = e.BaseController
        }, function(e) {
            d = e.GlobalCmdHeadPHP
        }],
        execute: function() {
            i._RF.push({}, "534cbxztIdAwJdb9yTiWmP3", "LadderController", void 0), e("LadderController", function(e) {
                function i(t) {
                    return e.call(this, t) || this
                }
                t(i, e), i.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new i("LadderController")), this._instance
                }, i.init = function() {
                    this._instance && this._instance.clear(), this._instance = null, i.getInstance()
                };
                var u = i.prototype;
                return u.onInitModuleEvent = function() {
                    this.addModelListener(r.NET_CMD_REQ_LADDER_CONFIG, this.reqLadderConfigData), this.addModelListener(r.NET_CMD_RESP_LADDER_CONFIG, this.respLadderConfigData), this.addModelListener(r.NET_REQ_RANK_REWARD, this.reqRankReward), this.addModelListener(r.NET_RESP_RANK_REWARD, this.respRankReward), this.addModelListener(r.NET_REQ_RANK_REWARD_CONF, this.reqRankRewardConf), this.addModelListener(r.NET_RESP_RANK_REWARD_CONF, this.respRankRewardConf)
                }, u.reqLadderConfigData = function(e, t) {
                    var i = {
                        cmd: d.PHP_LADDER_CONFIG,
                        body: t
                    };
                    console.log("请求天梯分配置,maxId:", t), l.dispatch(r.NET_SEND_MSG, i)
                }, u.respLadderConfigData = function(e, t, i, c) {
                    if (console.log("请求天梯分配置数据返回", i, t, c), t) {
                        if (a.isNull(i.data)) return;
                        var u = i;
                        u.gameId = c.gameId || n.CurrentGameID, u.time = a.number_valueOf(u.time), u.rule = u.rule || "", u.insertImg = u.insertImg || "", (u.data || []).forEach((function(e, t) {
                            e.name = e.name || "", e.startRange = a.number_valueOf(e.startRange), e.endRange = a.number_valueOf(e.endRange), e.level = t, e.group = a.number_valueOf(e.group, 1)
                        })), o.LadderData.setLadderConfig(u);
                        for (var d = !1, _ = u.data || [], h = 0; h < _.length; h++)
                            if (1 == _[h].status) {
                                d = !0;
                                break
                            } l.dispatch(r.NOTIFY_UPDATE_RED_DOT, s.RedDotConf.Ladder, d)
                    }
                }, u.reqRankRewardConf = function(e, t) {
                    var i = {
                        cmd: d.PHP_RANK_REWARD_CONF,
                        body: {}
                    };
                    console.log("请求段位奖励配置"), l.dispatch(r.NET_SEND_MSG, i)
                }, u.respRankRewardConf = function(e, t, i, n) {
                    console.log("段位奖励配置返回", i, t, n)
                }, u.reqRankReward = function(e, t) {
                    var i = {
                        cmd: d.PHP_RANK_REWARD,
                        body: t
                    };
                    console.log("请求段位奖励发奖"), l.dispatch(r.NET_SEND_MSG, i)
                }, u.respRankReward = function(e, t, i, u) {
                    if (console.log("段位奖励发奖返回", i, t, u), t) {
                        if (a.isNull(i.awards)) return;
                        var d = [],
                            _ = i.awards;
                        _ && (_.forEach((function(e) {
                            var t = {
                                icon: e.imgurl,
                                name: e.name,
                                num: e.num
                            };
                            d.push(t);
                            var i = parseInt(e.type);
                            if (i == s.PropertyType.SILVER_COIN) {
                                var n = o.User.getUserMoneyByID(i),
                                    a = parseInt(e.num);
                                o.User.updateUserMoneyByID(i, n + a)
                            }
                        })), l.dispatch(r.VIEW_UI_OPEN, c.GetPropPrefab, d)), l.dispatch(r.NET_CMD_REQ_LADDER_CONFIG, {
                            gameId: (null == u ? void 0 : u.game_id) || n.CurrentGameID
                        })
                    } else i && !a.string_isEmpty(i.errorTips) && l.dispatch(r.SYS_TOAST_TIP, {
                        content: i.errorTips
                    })
                }, i
            }(u))._instance = null, i._RF.pop()
        }
    }
}))