System.register("chunks:///_virtual/RankData.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GameConstant.ts", "./LocalStorage.ts", "./Encrypto.ts", "./BaseCache.ts"], (function(e) {
    var t, i, n, a, o, r, s;
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
            r = e.Encrypt
        }, function(e) {
            s = e.BaseCache
        }],
        execute: function() {
            i._RF.push({}, "6de7esvtK9Co4GtVectXENd", "RankData", void 0), e("RankData", function(e) {
                function i(t) {
                    var i;
                    return (i = e.call(this, "RankData") || this).__User = void 0, i._charmData = {}, i.__User = t, i.getDataByLocal(), i
                }
                t(i, e);
                var s = i.prototype;
                return s.getDataByLocal = function() {
                    var e = n.string_format(a.USER_LADDER_CACHE, this.__User.getUserMid()),
                        t = o.get(e, "");
                    return n.string_isEmpty(t) ? this._data = {} : this._data = n.table_verify(r.JsonDecode(t), !0), this._data
                }, s.saveDataToLocal = function(e) {
                    if (e) {
                        var t = n.string_format(a.USER_LADDER_CACHE, this.__User.getUserMid());
                        o.set(t, r.JsonEncode(e))
                    }
                }, s.setRankData = function(e) {
                    null != e && e.gameId && (this._data[e.gameId.toString()] = e.respData, this.saveDataToLocal(this._data))
                }, s.getData = function(t) {
                    return t ? e.prototype.getData.call(this, t) : this._data
                }, s.setCharmRankData = function(e, t) {
                    this._charmData[t] = e
                }, s.getCharmData = function(e) {
                    return void 0 === e ? this._charmData : this._charmData[e]
                }, i
            }(s)), i._RF.pop()
        }
    }
}))