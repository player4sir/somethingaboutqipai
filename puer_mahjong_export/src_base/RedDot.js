System.register("chunks:///_virtual/RedDot.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./AppEvent.ts", "./GameConstant.ts", "./LocalStorage.ts", "./Encrypto.ts", "./EventManager.ts", "./BaseCache.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u;
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
            o = e.GConstants, r = e.StoreKey
        }, function(e) {
            s = e.LocalStorage
        }, function(e) {
            c = e.Encrypt
        }, function(e) {
            l = e.EventManager
        }, function(e) {
            u = e.BaseCache
        }],
        execute: function() {
            i._RF.push({}, "cfbddiJsXRFYY+odiH5dUre", "RedDot", void 0), e("RedDot", function(e) {
                function i(t) {
                    var i;
                    return (i = e.call(this, "RedDot") || this).__User = null, i._redConfData = {}, i._redConfLocalData = {}, i._hasRedDotMapping = {}, i.__User = t, i.initMapping(), i
                }
                t(i, e);
                var u = i.prototype;
                return u.initMapping = function() {
                    var e;
                    this._hasRedDotMapping = ((e = {})[o.RedDotConf.Sign] = n.handler(this, this.has_reddot_signin), e[o.RedDotConf.Email] = n.handler(this, this.has_reddot_mail), e[o.RedDotConf.Shop] = n.handler(this, this.has_reddot_shop), e[o.RedDotConf.Friend] = n.handler(this, this.has_reddot_friend), e[o.RedDotConf.ActivityNormal] = n.handler(this, this.has_reddot_activityNormal), e[o.RedDotConf.ActivityNotice] = n.handler(this, this.has_reddot_activityNotice), e[o.RedDotConf.UserHead] = n.handler(this, this.has_reddot_userHead), e)
                }, u.reloadLocalData = function() {
                    var e = n.string_format(r.USER_RED_RECORD, this.__User.getUserMid()),
                        t = s.get(e, null);
                    null != t && (this._redConfLocalData = n.table_verify(c.JsonDecode(t)))
                }, u.updateLocalData = function() {
                    var e = c.JsonEncode(this._redConfLocalData),
                        t = n.string_format(r.USER_RED_RECORD, this.__User.getUserMid());
                    s.set(t, e)
                }, u.hasRedDot = function(e, t) {
                    return void 0 === t && (t = null), null != e && null != this._hasRedDotMapping[e] && (this.print("单条数据是否有红点", this._hasRedDotMapping[e](t), "key", e, "param", t), this._hasRedDotMapping[e](t) || !1)
                }, u.update_signin = function(e) {
                    this._redConfData[o.RedDotConf.Sign] = e, l.dispatch(a.NOTIFY_UPDATE_RED_DOT, o.RedDotConf.Sign, this.hasRedDot(o.RedDotConf.Sign))
                }, u.has_reddot_signin = function() {
                    if (!this._redConfData[o.RedDotConf.Sign]) return !1;
                    if (this.print("RedDot", this._redConfData[o.RedDotConf.Sign]), n.isNull(this._redConfData[o.RedDotConf.Sign].todayStatus)) return !1;
                    if (0 == this._redConfData[o.RedDotConf.Sign].todayStatus) return !0;
                    if (n.isNull(this._redConfData[o.RedDotConf.Sign].continueAward)) return !1;
                    var e = !1,
                        t = this._redConfData[o.RedDotConf.Sign].signin_info;
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && 0 == e && 1 == t[i].status && (e = !0);
                    return e
                }, u.welfare_signin_can_open = function() {
                    return !n.string_isEmpty(this._redConfData[o.RedDotConf.Sign])
                }, u.welfare_signin_can_receive_award = function() {
                    return this.has_reddot_signin()
                }, u.welfare_signin_receive_status = function() {
                    if (this._redConfData[o.RedDotConf.Sign].todayStatus && 1 == this._redConfData[o.RedDotConf.Sign].todayStatus) return !0;
                    var e = this._redConfData[o.RedDotConf.Sign].signAward;
                    for (var t in e)
                        if (Object.prototype.hasOwnProperty.call(e, t) && 2 != e[t].status) return !1;
                    var i = this._redConfData[o.RedDotConf.Sign].continueAward;
                    for (var n in i)
                        if (Object.prototype.hasOwnProperty.call(i, n) && 2 != i[n].status) return !1;
                    return !0
                }, u.update_mail_red = function() {
                    console.log("通知更新"), l.dispatch(a.NOTIFY_UPDATE_RED_DOT, o.RedDotConf.Email, this.hasRedDot(o.RedDotConf.Email))
                }, u.has_reddot_mail = function() {
                    var e = this.__User.MailInfo.MailData,
                        t = !1,
                        i = 0;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a) && 0 == t) {
                            var r = e[a];
                            if ((i = r.status) == o.MsgStatus.MSG_STATUS_FRESH) t = !0;
                            else if (i == o.MsgStatus.MSG_STATUS_READ && "" != r.awards) {
                                var s = c.JsonDecode(r.awards);
                                n.table_isEmpty(s) || (t = !0)
                            }
                        } return t
                }, u.need_show_email = function() {
                    return !0
                }, u.update_shop_red = function() {
                    l.dispatch(a.NOTIFY_UPDATE_RED_DOT, o.RedDotConf.Shop, this.hasRedDot(o.RedDotConf.Shop))
                }, u.has_reddot_shop = function(e) {
                    return void 0 === e && (e = o.ShopBigTabType.SILVER_COIN), this.__User.ShopInfo.isExitFreeGoods(e)
                }, u.update_friend_red = function() {
                    l.dispatch(a.NOTIFY_UPDATE_RED_DOT, o.RedDotConf.Friend, this.hasRedDot(o.RedDotConf.Friend))
                }, u.has_reddot_friend = function() {
                    return !1
                }, u.has_reddot_userHead = function(e) {}, u.update_reddot_newuserActivity = function() {
                    var e = r.ACTIVITY_LAST_OPEN_TIME + "_" + this.__User.getUserMid();
                    s.set(e, n.time())
                }, u.need_show_newuserActivity = function() {
                    var e = !1,
                        t = this.__User.isRegisterToday(),
                        i = r.ACTIVITY_LAST_OPEN_TIME + "_" + this.__User.getUserMid(),
                        n = s.get(i, null);
                    return t ? n || (e = !0) : 1 == this.__User.isFirstLoginCurrow() && null == n && (e = !0), e
                }, u.update_dress_red = function(e, t) {}, u.update_Activity_NormalRed = function(e, t) {
                    void 0 === t && (t = !1);
                    var i = o.RedDotConf.ActivityNormal;
                    if (null != e) {
                        var r = e.config_id,
                            s = n.number_valueOf(e.red_dot_type, 0),
                            c = n.number_valueOf(e.begin_time, null),
                            u = n.number_valueOf(e.end_time, null);
                        this._redConfLocalData[i] = n.table_verify(this._redConfLocalData[i]);
                        var d = this._redConfLocalData[i][r],
                            _ = !1,
                            h = n.time();
                        1 == t ? null != d ? 3 == s ? null != c && null != u && h >= c && h <= u ? (this._redConfLocalData[i][r] = !0, _ = !0) : this._redConfLocalData[i][r] = !1 : 2 == s ? 0 == d && (this._redConfLocalData[i][r] = !0, _ = !0) : 1 == s ? 0 == d && 0 == this.check_reddot_by_name(r, i) && (this._redConfLocalData[i][r] = !0, _ = !0) : (0 == s || 0 == d) && (this._redConfLocalData[i][r] = !1, _ = !0) : 3 == s ? null != c && null != u && h >= c && h <= u ? (this._redConfLocalData[i][r] = !0, _ = !0) : this._redConfLocalData[i][r] = !1 : 2 == s ? (this._redConfLocalData[i][r] = !0, _ = !0) : 1 == s ? 0 == this.check_reddot_by_name(r, i) && (this._redConfLocalData[i][r] = !0, _ = !0) : 0 == s ? 0 == this.check_reddot_by_name(r, i) && (this._redConfLocalData[i][r] = !1, _ = !0) : this._redConfLocalData[i][r] = !0 : 0 == t && (null != d && d != t && (_ = !0), 3 == s ? null != c && null != u && h >= c && h <= u ? (this._redConfLocalData[i][r] = !0, _ = !0) : this._redConfLocalData[i][r] = !1 : 1 == s ? (this.update_reddot_by_name(r, i), this._redConfLocalData[i][r] = !1) : this._redConfLocalData[i][r] = !1), this.updateLocalData(), 1 == _ && l.dispatch(a.NOTIFY_UPDATE_RED_DOT, i, this.hasRedDot(i, r))
                    } else this._redConfLocalData[i] = {}, this.updateLocalData(), l.dispatch(a.NOTIFY_UPDATE_RED_DOT, i, this.hasRedDot(i, null))
                }, u.has_reddot_activityNormal = function(e) {
                    void 0 === e && (e = null);
                    var t = o.RedDotConf.ActivityNormal;
                    if (!this._redConfLocalData[t]) return !1;
                    if (null != e) return 1 == this._redConfLocalData[t][e];
                    var i = 0;
                    for (var n in this._redConfLocalData[t]) Object.prototype.hasOwnProperty.call(this._redConfLocalData[t], n) && 1 == this._redConfLocalData[t][n] && (i += 1);
                    return i > 0
                }, u.update_Activity_NoticeRed = function(e, t) {
                    void 0 === t && (t = !1);
                    var i = o.RedDotConf.ActivityNotice;
                    if (null != e) {
                        var r = e.config_id,
                            s = n.number_valueOf(e.red_dot_type, 0),
                            c = n.number_valueOf(e.begin_time, null),
                            u = n.number_valueOf(e.end_time, null);
                        this._redConfLocalData[i] = n.table_verify(this._redConfLocalData[i]);
                        var d = this._redConfLocalData[i][r],
                            _ = !1,
                            h = n.time();
                        1 == t ? null != d ? 3 == s ? null != c && null != u && h >= c && h <= u ? (this._redConfLocalData[i][r] = !0, _ = !0) : this._redConfLocalData[i][r] = !1 : 2 == s ? 0 == d && (this._redConfLocalData[i][r] = !0, _ = !0) : 1 == s ? 0 == d && 0 == this.check_reddot_by_name(r, i) && (this._redConfLocalData[i][r] = !0, _ = !0) : (0 == s || 0 == d) && (this._redConfLocalData[i][r] = !1, _ = !0) : 3 == s ? null != c && null != u && h >= c && h <= u ? (this._redConfLocalData[i][r] = !0, _ = !0) : this._redConfLocalData[i][r] = !1 : 2 == s ? (this._redConfLocalData[i][r] = !0, _ = !0) : 1 == s ? 0 == this.check_reddot_by_name(r, i) && (this._redConfLocalData[i][r] = !0, _ = !0) : 0 == s ? (this._redConfLocalData[i][r] = !1, _ = !0) : this._redConfLocalData[i][r] = !0 : 0 == t && (null != d && d != t && (_ = !0), 3 == s ? null != c && null != u && h >= c && h <= u ? (this._redConfLocalData[i][r] = !0, _ = !0) : this._redConfLocalData[i][r] = !1 : 1 == s ? (this.update_reddot_by_name(r, i), this._redConfLocalData[i][r] = !1) : this._redConfLocalData[i][r] = !1), this.updateLocalData(), 1 == _ && l.dispatch(a.NOTIFY_UPDATE_RED_DOT, i, this.hasRedDot(i, r))
                    } else this._redConfLocalData[i] = {}, this.updateLocalData(), l.dispatch(a.NOTIFY_UPDATE_RED_DOT, i, this.hasRedDot(i, null))
                }, u.has_reddot_activityNotice = function(e) {
                    void 0 === e && (e = null);
                    var t = o.RedDotConf.ActivityNotice;
                    if (!this._redConfLocalData[t]) return !1;
                    if (null != e) return 1 == this._redConfLocalData[t][e];
                    var i = 0;
                    for (var n in this._redConfLocalData[t]) Object.prototype.hasOwnProperty.call(this._redConfLocalData[t], n) && 1 == this._redConfLocalData[t][n] && (i += 1);
                    return i > 0
                }, u.check_reddot_by_name = function(e, t) {
                    var i = String(t) + String(e);
                    return this.__User.getTodayLocalRecord(i, !1)
                }, u.update_reddot_by_name = function(e, t) {
                    if (null != t) {
                        var i = String(t) + String(e);
                        if (this.__User.setTodayLocalRecord(i, !0)) {
                            var n = this.hasRedDot(t, e);
                            l.dispatch(a.NOTIFY_UPDATE_RED_DOT, t, n)
                        }
                    }
                }, i
            }(u)), i._RF.pop()
        }
    }
}))