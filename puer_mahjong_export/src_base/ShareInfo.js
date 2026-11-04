System.register("chunks:///_virtual/ShareInfo.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./Utils.ts", "./AppEvent.ts", "./GameRes.ts", "./EventManager.ts", "./BaseCache.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, i = e.createClass
        }, function(e) {
            n = e.cclegacy
        }, function(e) {
            a = e.ClientInfo
        }, function(e) {
            o = e.Utils
        }, function(e) {
            r = e.AppEvent
        }, function(e) {
            s = e.GameRes
        }, function(e) {
            c = e.EventManager
        }, function(e) {
            l = e.BaseCache
        }],
        execute: function() {
            n._RF.push({}, "3d6c7TtxFlLXY1ZtIso6H2v", "ShareInfo", void 0), e("ShareInfo", function(e) {
                function n(t) {
                    var i;
                    return (i = e.call(this, "ShareInfo") || this).__User = null, i._shareConfVer = null, i._shareConfig = {}, i._shareCount = 0, i.timer = null, i.goodsgidArray = [], i.shareFriendsList = [], i.__User = t, i
                }
                t(n, e);
                var l = n.prototype;
                return l.updateConfig = function(e) {
                    var t = this;
                    o.table_isEmpty(e) || (Object.keys(e).forEach((function(i) {
                        t._shareConfig[i] = e[i]
                    })), console.log("拉取到的分享配置", e), console.log("缓存的分享配置", this._shareConfig), c.dispatch(r.NET_RESP_SHARE_CONFIG, !0, this._shareConfig))
                }, l.getShareConfigByType = function(e) {
                    var t = this,
                        i = {};
                    return Object.keys(this._shareConfig).forEach((function(n) {
                        e == n && (i = t._shareConfig[e])
                    })), i
                }, l.getShareCount = function() {
                    return this._shareCount
                }, l.refreshShareCount = function(e) {
                    o.table_isEmpty(e) || (this._shareCount = o.number_valueOf(e.cur_cnt) + 1)
                }, l.getShareSwitch = function() {
                    return this._shareConfig.switch || !1
                }, l.getWinStreak = function() {
                    return o.number_valueOf(this._shareConfig.win_streak, 1)
                }, l.getAwardByNextCount = function() {
                    var e = this.getShareCount();
                    e += 1;
                    for (var t = {}, i = o.table_verify(this._shareConfig.rewards, !0), n = 0; n < i.length; n++)
                        if (i[n].idx == e) {
                            t = i[n];
                            break
                        } return t
                }, l.getAwardCount = function() {
                    return o.table_verify(this._shareConfig.rewards, !0).length
                }, l.isAwardNext = function() {
                    var e = this.getShareCount();
                    return !((e += 1) > this.getAwardCount())
                }, l.getComTimes = function() {
                    return o.number_valueOf(this._shareConfig.com_times, 1)
                }, l.notifyConfigUpdate = function(e) {
                    e && o.number_valueOf(e.ver, -1) > this.getShareConfVer() && c.dispatch(r.NET_REQ_SHARE_CONFIG)
                }, l.updateShareCountBySuccess = function(e) {
                    0 == o.table_isEmpty(e) && (this._shareCount = this._shareCount + 1)
                }, l.getShareConfVer = function() {
                    return o.number_valueOf(this._shareConfVer)
                }, l.clearVer = function() {
                    this._shareConfVer = null
                }, l.shareSuccessTimeAdd = function(e) {
                    var t = this,
                        i = this.goodsgidArray.findIndex((function(t) {
                            return t.gid == e
                        }));
                    i > -1 ? this.goodsgidArray.splice(i, 1, {
                        gid: e,
                        time: 0
                    }) : this.goodsgidArray.push({
                        gid: e,
                        time: 0
                    }), clearInterval(this.timer), this.timer = setInterval((function() {
                        t.goodsgidArray.length > 0 && t.goodsgidArray.forEach((function(e, t) {
                            e.time++
                        }))
                    }), 1e3)
                }, l.getAfterSharetime = function(e) {
                    var t = this.goodsgidArray.find((function(t) {
                        return t.gid == e
                    }));
                    return t && t.time ? {
                        workTime: t.time,
                        effective: !0
                    } : {
                        workTime: 0,
                        effective: !1
                    }
                }, l.shareTimeAllowed = function(e, t) {
                    var i = {
                            title: this.getFriendsShareText(),
                            imageUrl: s.AppCommon_Share_Friend_Comm.path
                        },
                        n = this.getAfterSharetime(e),
                        a = {
                            gid: e,
                            allowShare: !0,
                            nextSharetime: 0,
                            shareParams: i,
                            scene: t
                        };
                    return n.workTime >= 0 || !n.effective ? (a.allowShare = !0, a.nextSharetime = 0, a.gid = e) : (a.allowShare = !1, a.gid = e, a.nextSharetime = 0 - n.workTime), a
                }, l.insertShareFriend = function(e) {
                    0 == o.string_isEmpty(e) && this.shareFriendsList.push(e)
                }, l.getFriendsShareText = function() {
                    return a.deviceInfo.shareTitle || "原汁原味，正宗" + a.deviceInfo.regionTx + a.deviceInfo.AppName
                }, l.getFriendsInviteText = function(e) {
                    return "邀你来玩《" + this.__User.SelectGame.getCurGameName(e || this.__User.SelectGame.getCurGameId()) + "》，快来加入我的房间吧！"
                }, i(n, [{
                    key: "ShareConfig",
                    get: function() {
                        return o.clone(o.table_verify(this._shareConfig))
                    }
                }]), n
            }(l)), n._RF.pop()
        }
    }
}))