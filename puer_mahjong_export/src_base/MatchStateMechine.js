System.register("chunks:///_virtual/MatchStateMechine.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./GameConstant.ts", "./UIConfig.ts", "./PopupController.ts"], (function(e) {
    var t, i, n, a, o, r, s;
    return {
        setters: [function(e) {
            t = e.createClass
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            n = e.Utils
        }, function(e) {
            a = e.GCache
        }, function(e) {
            o = e.GConstants
        }, function(e) {
            r = e.UIID
        }, function(e) {
            s = e.PopupController
        }],
        execute: function() {
            var c, l, u, d, _, h, p, f, m, g, E, v;
            i._RF.push({}, "fd647ujm8BLsaJTGyB43JXk", "MatchStateMechine", void 0);
            var T, R = e("MatchStateAction", {
                MatchLoad: "MatchLoad",
                MatchStart: "MatchStart",
                MatchWait: "MatchWait",
                MatchContinue: "MatchContinue",
                MatchEnd: "MatchEnd",
                MatchSettle: "MatchSettle",
                MatchReset: "MatchReset"
            });
            ! function(e) {
                e[e.None = 0] = "None", e[e.MatchLoad = 1] = "MatchLoad", e[e.MatchGamePlay = 2] = "MatchGamePlay", e[e.MatchWait = 3] = "MatchWait", e[e.MatchOver = 4] = "MatchOver", e[e.MatchSettle = 5] = "MatchSettle"
            }(T || (T = {}));
            var P = ((c = {})[T.None] = "None", c[T.MatchLoad] = "MatchLoad", c[T.MatchGamePlay] = "MatchGamePlay", c[T.MatchWait] = "MatchWait", c[T.MatchOver] = "MatchOver", c[T.MatchSettle] = "MatchSettle", c),
                y = ((_ = {})[T.MatchLoad] = ((l = {})[o.MatchType.FIXED_TIME_MATCH] = r.GameMatchLoadPrefab, l), _[T.MatchGamePlay] = {}, _[T.MatchWait] = ((u = {})[o.MatchType.FIXED_TIME_MATCH] = r.GameMatchWaitPrefab, u), _[T.MatchOver] = {}, _[T.MatchSettle] = ((d = {})[o.MatchType.FIXED_TIME_MATCH] = r.GameMatchSettlePrefab, d), _),
                C = ((v = {})[T.None] = ((h = {})[R.MatchLoad] = T.MatchLoad, h), v[T.MatchLoad] = ((p = {})[R.MatchStart] = T.MatchGamePlay, p[R.MatchContinue] = T.MatchGamePlay, p), v[T.MatchGamePlay] = ((f = {})[R.MatchWait] = T.MatchWait, f[R.MatchEnd] = T.MatchOver, f), v[T.MatchWait] = ((m = {})[R.MatchWait] = T.MatchWait, m[R.MatchContinue] = T.MatchGamePlay, m[R.MatchEnd] = T.MatchOver, m), v[T.MatchOver] = ((g = {})[R.MatchEnd] = T.MatchOver, g[R.MatchSettle] = T.MatchSettle, g), v[T.MatchSettle] = ((E = {})[R.MatchReset] = T.None, E), v);
            e("MatchStateMechine", function() {
                function e() {
                    this._state = T.None
                }
                var i = e.prototype;
                return i.init = function() {
                    this._state = T.None
                }, i.execute = function(e, t) {
                    console.log("比赛状态执行action", e);
                    var i = C[this._state];
                    n.isNotNull(i) ? n.isNotNull(i[e]) ? (console.log("比赛状态执行action完成", P[this._state], P[i[e]]), this.clear(), this._state = i[e], this.addMatchStateView(this._state)) : console.log("比赛状态配置异常：缺少事件配置", P[this._state], e) : console.log("比赛状态配置异常：缺少状态配置", this._state)
                }, i.reconnect = function() {
                    console.log("比赛状态重连", this._state), this.clear(), y[this._state] && this.addMatchStateView(this._state)
                }, i.addMatchStateView = function(e) {
                    var t = a.MatchData.getMatchRoom();
                    if (n.table_isEmpty(t)) console.log("比赛界面显示异常：缺少房间数据");
                    else {
                        var i = y[e];
                        if (n.isNull(i)) console.log("比赛界面显示异常：缺少界面状态配置");
                        else {
                            var o = i[t.type];
                            n.isNull(o) ? console.log("比赛界面显示异常：缺少界面类型配置") : a.User.IsRoom ? s.getInstance().onOpenView("", o, {}, {}) : console.log("比赛界面显示异常：不在房间中")
                        }
                    }
                }, i.removeMatchStateView = function(e) {
                    var t = a.MatchData.getMatchRoom();
                    if (n.table_isEmpty(t)) console.log("比赛界面关闭异常：缺少房间数据");
                    else {
                        var i = y[e];
                        if (n.isNull(i)) console.log("比赛界面关闭异常：缺少界面状态配置");
                        else {
                            var o = i[t.type];
                            n.isNull(o) ? console.log("比赛界面显示异常：缺少界面类型配置") : s.getInstance().onCloseView("", o)
                        }
                    }
                }, i.clear = function() {
                    this.removeMatchStateView(T.MatchLoad), this.removeMatchStateView(T.MatchWait), this.removeMatchStateView(T.MatchSettle)
                }, t(e, null, [{
                    key: "instance",
                    get: function() {
                        return this._instance && null != this._instance || (this._instance = new e), this._instance
                    }
                }]), e
            }())._instance = null, i._RF.pop()
        }
    }
}))