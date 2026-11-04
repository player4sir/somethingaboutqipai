System.register("chunks:///_virtual/WxShareData.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./AppEvent.ts", "./GameConstant.ts", "./UIConfig.ts", "./Encrypto.ts", "./InterfaceDefines.ts", "./LayerManager.ts", "./EventManager.ts", "./BaseCache.ts", "./GCache.ts"], (function(e) {
var t, i, n, a, o, r, s, c, l, u, d, _;
return {
    setters: [function(e) {
        t = e.inheritsLoose
    }, function(e) {
        i = e.cclegacy
    }, function(e) {
        n = e.Utils
    }, function(e) {
        a = e.AppEvent
    }, function(e) {
        o = e.GConstants
    }, function(e) {
        r = e.UIID
    }, function(e) {
        s = e.Encrypt
    }, function(e) {
        c = e.inf_PrivateRoomSearchType
    }, function(e) {
        l = e.LayerManager
    }, function(e) {
        u = e.EventManager
    }, function(e) {
        d = e.BaseCache
    }, function(e) {
        _ = e.GCache
    }],
    execute: function() {
        i._RF.push({}, "71370MVrpJAZbKVMWblT1e2", "WxShareData", void 0), e("WxShareData", function(e) {
            function i(t) {
                var i;
                return (i = e.call(this, "WxShareData") || this)._shareParamCache = {}, i._shareData = [], i
            }
            t(i, e);
            var d = i.prototype;
            return d.isSkipRecommedPop = function() {
                return !n.table_isEmpty(this._shareParamCache)
            }, d.getShareParam = function(e, t) {
                var i = "";
                e == o.ShareType.Invite ? n.isNotNull(t) && n.isNotNull(t.tableId) && t.tableId > 0 && (i = String(t.tableId)) : e == o.ShareType.Record && n.isNotNull(t) && !n.string_isEmpty(t.table_key) && (i = t.table_key);
                var a = {
                    shareType: e,
                    shareValue: i
                };
                return s.JsonEncode(a)
            }, d._checkPrivateShareParam = function(e) {
                if (!n.table_isEmpty(this._shareParamCache)) {
                    var t = this._shareParamCache.shareType;
                    if (t < 0 && (t = this._shareParamCache.shareMessageToFriendScene), console.log("分享---检测私人房邀请分享类型：", t), t == o.ShareType.Invite)
                        if (!n.string_isEmpty(this._shareParamCache.shareValue) && n.number_valueOf(this._shareParamCache.shareValue) > 0) {
                            if (console.log("分享---检测私人房邀请参数成功"), 1 != _.User.LoginRoomState || !_.Desk) {
                                if (!e) {
                                    var i = {
                                        searchType: c.Invite,
                                        searchKeyword: this._shareParamCache.shareValue
                                    };
                                    u.dispatch(a.NET_REQ_SEARCH_PRIVATE_ROOM, i)
                                }
                                return !0
                            }
                            u.dispatch(a.SYS_TOAST_TIP, {
                                content: "你正在当前游戏中，无法进入其他的牌局！"
                            })
                        } else console.log("分享---检测私人房邀请参数失败");
                    else if (t == o.ShareType.Record) {
                        if (!n.string_isEmpty(this._shareParamCache.shareValue)) return console.log("分享---检测私人房结算参数成功"), e || u.dispatch(a.NET_REQ_PRIVATE_ROOM_RECORD_DETAIL, {
                            tableKey: this._shareParamCache.shareValue,
                            from: "game",
                            shareType: t
                        }), !0;
                        console.log("分享---检测私人房结算参数失败")
                    } else if (t == o.ShareType.InviteFast)
                        if (n.string_isEmpty(this._shareParamCache.shareValue)) console.log("分享---检测私人房快速邀请参数失败");
                        else {
                            if (console.log("分享---检测私人房快速邀请参数成功"), 1 != _.User.LoginRoomState || !_.Desk) {
                                if (!e) {
                                    if (l.has(r.PrivatePrefab) || l.isLoading(r.PrivatePrefab)) {
                                        var s = _.PrivateData.getPrivateRoomInviteInfoKey();
                                        u.dispatch(a.NET_REQ_PRIVATE_ROOM_INVITE, s, "leave")
                                    }
                                    console.log("分享---私人房快速邀请", this._shareParamCache.shareValue), u.dispatch(a.NET_REQ_PRIVATE_ROOM_INVITE, this._shareParamCache.shareValue, "getRoomInfo", {
                                        shareType: t
                                    })
                                }
                                return !0
                            }
                            u.dispatch(a.SYS_TOAST_TIP, {
                                content: "你正在当前游戏中，无法进入其他的牌局！"
                            })
                        }
                }
                return console.log("分享--- 数据为空", this._shareParamCache), !1
            }, d.resetXShareQuery = function() {
                this._shareParamCache = {}
            }, d.updateWXShareQuery = function(e, t) {
                if (void 0 === t && (t = !1), null != e && null != e && "object" == _typeof2(e)) {
                    if (e.status = 1, e.r_time = n.time(), console.log("分享---链接内容：", e, this._shareParamCache), e.shareType = n.number_valueOf(e.shareType, -1), e.shareMessageToFriendScene = n.number_valueOf(e.shareMessageToFriendScene, -1), e.shareType == o.ShareType.Invite || e.shareType == o.ShareType.Record || e.shareType == o.ShareType.InviteFast) t && !this.setShareParamCache(e) || this._checkPrivateShareParam(t) || this.updateShareStatus(e.shareType, 0);
                    else if (e.shareMessageToFriendScene != o.ShareType.Invite && e.shareMessageToFriendScene != o.ShareType.InviteFast || !e.shareValue) {
                        if (e.shareType == o.ShareType.LargeDelivery) console.log("分享链接内容, 银币大派送"), this.setShareParamCache(e), this._addShareData(e), this.updateShareStatus(e.shareType, 0);
                        else if (e.shareType == o.ShareType.PhysicalReward) console.log("分享链接内容, 实物拉新"), this.setShareParamCache(e), this._addShareData(e), this.updateShareStatus(e.shareType, 0);
                        else if (e.shareType == o.ShareType.LuckyRedBag && e.sign) console.log("分享链接内容, 红包分享 "), t && !this.setShareParamCache(e) || u.dispatch(a.NET_REQ_GIFT_REDBAG, e.sign, 2);
                        else if (e.shareType == o.ShareType.Bacon) console.log("分享链接内容,实物活动分享 "), t && !this.setShareParamCache(e) || u.dispatch(a.SHOW_GIFT_BACON_VIEW);
                        else if (e.shareType == o.ShareType.MatchNotify) console.log("分享链接内容,比赛通知 "), t && !this.setShareParamCache(e) || u.dispatch(a.SHOW_MATCH_NOTIFY, e.matchId);
                        else if (e.shareType == o.ShareType.FriendsHelp) t && (console.log("好友助力----分享链接内容, 好友助力分享 ", e), this.setShareParamCache(e) && (_.User.isLoginSuccesed() ? (console.log("好友助力---------登录成功直接通知业务上报php"), u.dispatch(a.NOTIFY_SHARE_FRIENDSHELP, e)) : (console.log("好友助力---------_addShareData"), this._addShareData(e))));
                        else if (1023 == n.number_valueOf(e.scene)) console.log("分享链接内容,添加桌面有礼"), e.shareType = o.ShareType.ADDTODESK, t && !this.setShareParamCache(e) || u.dispatch(a.NET_CMD_REQ_TASK_ACT_CONFIG);
                        else if (1104 == n.number_valueOf(e.scene)) console.log("分享链接内容,添加我的小程序"), e.shareType = o.ShareType.AddToProgram, this.setShareParamCache(e);
                        else if (1014 == n.number_valueOf(e.scene)) console.log("分享链接内容,比赛通知"), e.shareType = o.ShareType.MatchNotify, this.setShareParamCache(e);
                        else if (e.shareType == o.ShareType.NianBeast) console.log("分享链接内容, 打年兽"), this.setShareParamCache(e), this._addShareData(e), this.updateShareStatus(e.shareType, 0);
                        else if (e.shareType == o.ShareType.GameTeam) return console.log("分享链接内容, 游戏邀请组队"), void(this.setShareParamCache(e) && (this.updateShareStatus(e.shareType, 1), u.dispatch(a.VIEW_OPEN_TEAM_GAME, {
                            game_id: e.gameId,
                            tab_id: e.tabId
                        })))
                    } else t && !this.setShareParamCache(e) || this._checkPrivateShareParam(t) || this.updateShareStatus(e.shareType, 0);
                    t && u.dispatch(a.APP_NOTIFY_LINK_DATA)
                } else console.log("分享---链接内容：数据不是object格式")
            }, d.checkJumpPrivate = function() {
                if (this.getShareParamCache()) return this._checkPrivateShareParam(!0)
            }, d._addShareData = function(e) {
                n.table_isEmpty(this._shareData) || this._shareData.forEach((function(t, i) {
                    t && (t.shareType, e.shareType)
                })), this._shareData.push(e)
            }, d.getWXActivityShareQuery = function() {
                var e = null;
                if (!n.table_isEmpty(this._shareData)) {
                    var t = [];
                    this._shareData.forEach((function(i, n) {
                        i && (i.shareType == o.ShareType.LargeDelivery || i.shareType == o.ShareType.PhysicalReward || i.shareType == o.ShareType.NianBeast ? e = {
                            wxinvite_mid: i.shareMid,
                            wxinvite_scene: i.shareType
                        } : t.push(i))
                    })), this._shareData = t
                }
                return e
            }, d.checkWXStartQueryParams = function() {
                var e = this.getWXShareQuery(o.ShareType.FriendsHelp);
                console.log("好友助力---------登录后检查微信启动参数", e), (null == e ? void 0 : e.length) > 0 && 1 == e[0].status && (u.dispatch(a.NOTIFY_SHARE_FRIENDSHELP, e[0]), this.getWXShareQuery(o.ShareType.FriendsHelp))
            }, d.getWXShareQuery = function(e) {
                return console.log("好友助力--getWXShareQuery", this._shareData, e), this._shareData.filter((function(t) {
                    return (null == t ? void 0 : t.shareType) == e
                }))
            }, d.removeWXShareQuery = function(e) {
                this._shareData = this._shareData.filter((function(t) {
                    return (null == t ? void 0 : t.shareType) !== e
                }))
            }, d.setShareParamCache = function(e, t) {
                if (void 0 === t && (t = !1), t || (console.log("分享---缓存分享参数------------1----"), n.table_isEmpty(this._shareParamCache) || (console.log("分享---缓存分享参数------------2--", this._shareParamCache.status), !(1 == this._shareParamCache.status && (console.log("分享---缓存分享参数------------3--", n.time(), this._shareParamCache.r_time), n.time() - this._shareParamCache.r_time < 10))))) return this._shareParamCache = e, console.log("分享---缓存分享参数", this._shareParamCache), !0;
                console.log("分享---缓存分享参数,数据重复，丢弃", this._shareParamCache)
            }, d.getShareParamCache = function() {
                if (!n.table_isEmpty(this._shareParamCache) && 1 == this._shareParamCache.status && n.time() - this._shareParamCache.r_time < 30) return Object.assign({}, this._shareParamCache);
                console.log("分享---获取分享参数,数据过期", this._shareParamCache)
            }, d._getShareQuery = function(e) {
                if (void 0 === e && (e = -1), this.print("this._shareParamCache"), !n.table_isEmpty(this._shareParamCache) && this._shareParamCache.shareType == e && 1 == this._shareParamCache.status) return this._shareParamCache
            }, d.getShareDataByType = function(e) {
                return this._getShareQuery(e)
            }, d.updateShareStatus = function(e, t) {
                void 0 === e && (e = -1), void 0 === t && (t = 0), console.log("test---分享---更新分享数据的使用状态", e, t, this._shareParamCache), n.table_isEmpty(this._shareParamCache) || this._shareParamCache.shareType != e && this._shareParamCache.shareMessageToFriendScene != e || (this._shareParamCache.status = t)
            }, i
        }(d)), i._RF.pop()
    }
}
})), mid = "virtual:///prerequisite-imports/base", cid = "chunks:///_virtual/base", System.register(mid, [cid], (function(e, t) {
return {
    setters: [function(t) {
        var i = {};
        for (var n in t) "default" !== n && "__esModule" !== n && (i[n] = t[n]);
        e(i)
    }],
    execute: function() {}
}
}));
});
require("subpackages/base/game.js")