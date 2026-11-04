System.register("chunks:///_virtual/MemberData.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GameConstant.ts", "./LocalStorage.ts", "./BaseCache.ts"], (function(e) {
    var t, i, n, a, o, r;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            n = e.Utils
        }, function(e) {
            a = e.StoreKey
        }, function(e) {
            o = e.LocalStorage
        }, function(e) {
            r = e.BaseCache
        }],
        execute: function() {
            i._RF.push({}, "2bfdc2Q2sJI3oUbxvUj7whx", "MemberData", void 0), e("MemberData", function(e) {
                function i(t) {
                    var i;
                    return (i = e.call(this, "MemberData") || this)._MemberData = {}, i.__User = null, i._MemberData = null, i.__User = t, i
                }
                t(i, e);
                var r = i.prototype;
                return r.setMemberConfig = function(e) {
                    if (this._MemberData = e || {}, !n.table_isEmpty(this._MemberData)) {
                        var t = this.__User.getUserMid();
                        o.set(n.string_format(a.USER_VIP_MEMBER_EXPIRES_TIME, t), this._MemberData.vip_expires)
                    }
                }, r.getMemberConfig = function() {
                    return this._MemberData
                }, r.getVipMemberStatus = function() {
                    return n.table_isEmpty(this._MemberData) ? 0 : this._MemberData.is_vip
                }, r.checkIsVip = function() {
                    return 2 == this.getVipMemberStatus()
                }, r.checkMemberRedDot = function() {
                    if (n.table_isEmpty(this._MemberData)) return !1;
                    var e = this.__User.getUserMid(),
                        t = o.get(n.string_format(a.USER_VIP_MEMBER_RED_DOT_SHOW, e), !1),
                        i = o.get(n.string_format(a.USER_VIP_MEMBER_EXPIRES_TIME, e), 0);
                    if (0 == i && !t) return !0;
                    var r = o.get(n.string_format(a.USER_VIP_MEMBER_EXPIRES_OPEN_COUNT, e), 0);
                    return i > 0 && i < Date.now() / 1e3 ? 0 == r : (o.set(n.string_format(a.USER_VIP_MEMBER_EXPIRES_OPEN_COUNT, e), 0), !1)
                }, r.getPrivilegeInfoByKey = function(e) {
                    if (n.table_isEmpty(this._MemberData)) return 0;
                    if (2 != this._MemberData.is_vip) return 0;
                    for (var t = this._MemberData.privileges, i = 0; i < t.length; i++)
                        if (t[i].type == e) return t[i].value
                }, i
            }(r)), i._RF.pop()
        }
    }
}))