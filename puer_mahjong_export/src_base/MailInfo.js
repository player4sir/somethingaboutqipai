System.register("chunks:///_virtual/MailInfo.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GameConstant.ts", "./LocalStorage.ts", "./Encrypto.ts", "./BaseCache.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, i = e.createClass
        }, function(e) {
            n = e.cclegacy
        }, function(e) {
            a = e.Utils
        }, function(e) {
            o = e.StoreKey, r = e.GConstants
        }, function(e) {
            s = e.LocalStorage
        }, function(e) {
            c = e.Encrypt
        }, function(e) {
            l = e.BaseCache
        }],
        execute: function() {
            n._RF.push({}, "c6a57Wz/jxLdZ3UC6ZJ0kNy", "MailInfo", void 0), e("MailInfo", function(e) {
                function n(t) {
                    var i;
                    return (i = e.call(this, "MailInfo") || this).__User = null, i._mailData = [], i.__User = t, i
                }
                t(n, e);
                var l = n.prototype;
                return l.getDataByLocal = function() {
                    var e = a.string_format(o.USER_MAIL_CACHE, this.__User.getUserMid()),
                        t = s.get(e, "");
                    return a.string_isEmpty(t) ? this._mailData = [] : this._mailData = a.table_verify(c.JsonDecode(t), !0), this._mailData
                }, l.saveDataToLocal = function(e) {
                    if (e || (e = []), e instanceof Array) {
                        var t = a.string_format(o.USER_MAIL_CACHE, this.__User.getUserMid());
                        s.set(t, c.JsonEncode(e))
                    }
                }, l.uniqueData = function(e) {
                    console.log("uniqueData");
                    var t = [];
                    if (e instanceof Array) {
                        var i = e.length;
                        if (i > 0)
                            for (var n = [], o = 0; o < i; o++) {
                                var r = e[o],
                                    s = a.number_valueOf(r.id); - 1 == n.indexOf(s) && (n.push(s), t.push(r))
                            }
                    }
                    return t
                }, l.getMaxId = function() {
                    var e = a.string_format(o.WATCH_MESSAGE_SYSTEMID, this.__User.getUserMid());
                    return s.get(e, 0)
                }, l.getMsgByID = function(e) {
                    if (null == e) return null;
                    for (var t = 0; t < this._mailData.length; t++)
                        if (this._mailData[t].id == e) return a.clone(this._mailData[t]);
                    return null
                }, l.saveDataFromNet = function(e) {
                    e = a.table_verify(e, !0);
                    var t = this.getDataByLocal();
                    console.log("oldData:", t);
                    var i = a.mergeArray(e, t);
                    return i = this.uniqueData(i), console.log("totalData:", i), this._mailData = this.sliceData(i), this.saveDataToLocal(this._mailData), this.__User.RedDot.update_mail_red(), this._mailData
                }, l.sliceData = function(e) {
                    var t = e.length - r.MessageMaxNum;
                    if (t <= 0) return e;
                    for (var i = e.sort((function(e, t) {
                            return Number(e.id) - Number(t.id)
                        })), n = [], o = 0, s = 0; s < i.length; s++) {
                        var l = i[s],
                            u = c.JsonDecode(l.awards);
                        o < t && (l.status == r.MsgStatus.MSG_STATUS_HANDLED || a.table_isEmpty(u) && l.status == r.MsgStatus.MSG_STATUS_READ) ? o += 1 : n.push(l)
                    }
                    var d = n.length - r.MessageMaxNum,
                        _ = [];
                    if (d > 0)
                        for (var h = 0; h < n.length; h++) h >= d && _.push(n[h]);
                    else _ = n;
                    return _.sort((function(e, t) {
                        return Number(t.id) - Number(e.id)
                    }))
                }, l.updateMailDataInCache = function(e) {
                    for (var t = this._mailData, i = t.length, n = 0; n < i; n++)
                        if (t[n].id == e.id) {
                            var a = e;
                            t[n] = a
                        } var o = this.uniqueData(t);
                    return this.saveDataToLocal(o), this._mailData = o, this.__User.RedDot.update_mail_red(), !0
                }, l.sortMsgData = function(e) {
                    for (var t = [], i = [], n = 0; n < e.length; n++) {
                        var o = e[n],
                            s = c.JsonDecode(o.awards);
                        (o.status == r.MsgStatus.MSG_STATUS_FRESH || !a.table_isEmpty(s) && o.status == r.MsgStatus.MSG_STATUS_READ) && i.push(o), (o.status == r.MsgStatus.MSG_STATUS_HANDLED || a.table_isEmpty(s) && o.status == r.MsgStatus.MSG_STATUS_READ) && t.push(o)
                    }
                    var l = t.sort((function(e, t) {
                            return Number(t.id) - Number(e.id)
                        })),
                        u = i.sort((function(e, t) {
                            return Number(t.id) - Number(e.id)
                        }));
                    return a.mergeArray(u, l)
                }, i(n, [{
                    key: "MailData",
                    get: function() {
                        return a.clone(this._mailData)
                    }
                }]), n
            }(l)), n._RF.pop()
        }
    }
}))