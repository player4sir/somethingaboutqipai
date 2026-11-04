System.register("chunks:///_virtual/WatchMessage.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./AppEvent.ts", "./GameConstant.ts", "./LocalStorage.ts", "./EventManager.ts", "./BaseCache.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, i = e.createForOfIteratorHelperLoose
        }, function(e) {
            n = e.cclegacy
        }, function(e) {
            a = e.Utils
        }, function(e) {
            o = e.AppEvent
        }, function(e) {
            r = e.GConstants, s = e.StoreKey
        }, function(e) {
            c = e.LocalStorage
        }, function(e) {
            l = e.EventManager
        }, function(e) {
            u = e.BaseCache
        }],
        execute: function() {
            n._RF.push({}, "4a6a64lyVZPsLF7AJId5MbS", "WatchMessage", void 0), e("WatchMessage", function(e) {
                function n(t) {
                    var i;
                    return (i = e.call(this, "WatchMessage") || this).__User = null, i.__MailInfo = null, i.__User = t, i.__MailInfo = i.__User.MailInfo, i
                }
                t(n, e);
                var u = n.prototype;
                return u.getMaxId = function(e) {
                    for (var t = 0, i = 0; i < e.length; i++) {
                        var n = e[i],
                            o = a.number_valueOf(n.id);
                        o > t && (t = o)
                    }
                    return t
                }, u.dealData = function(e) {
                    if (a.isArray(e)) {
                        for (var t, n = [], s = i(e); !(t = s()).done;) {
                            var c = t.value;
                            Object.prototype.hasOwnProperty.call(c, "is_html") && a.number_valueOf(c.is_html, 0) > 0 || n.push(c)
                        }
                        if (!a.table_isEmpty(n)) {
                            for (var u = [], d = 0; d < n.length; d++) {
                                var _ = n[d];
                                _.status = r.MsgStatus.MSG_STATUS_FRESH, u.push(_)
                            }
                            this.saveMaxEmailId(u), this.__User.MailInfo.saveDataFromNet(u), l.dispatch(o.NOTIFY_EMAIL_CHANGE)
                        }
                    }
                }, u.saveMaxEmailId = function(e) {
                    var t = a.string_format(s.WATCH_MESSAGE_SYSTEMID, this.__User.getUserMid()),
                        i = c.get(t, 0),
                        n = this.getMaxId(e);
                    n > i && c.set(t, n)
                }, n
            }(u)), n._RF.pop()
        }
    }
}))