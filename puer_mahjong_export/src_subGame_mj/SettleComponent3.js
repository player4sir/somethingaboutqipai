System.register("chunks:///_virtual/SettleComponent3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GCache.ts", "./GameRuleConfig4.ts", "./GameBaseComponent3.ts"], (function(e) {
    var t, n, a, i, o, r;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy, a = e._decorator
        }, function(e) {
            i = e.GCache
        }, function(e) {
            o = e.GameFileConfig
        }, function(e) {
            r = e.GameBaseComponent
        }],
        execute: function() {
            var s;
            n._RF.push({}, "c63f5TokNdJC5yZDJGnQQUX", "SettleComponent", void 0);
            var u = a.ccclass,
                l = (a.property, a.menu);
            e("SettleComponent", u("MJSettleComponent")(s = l("prefab/subGame/mj/SettleComponent")(s = function(e) {
                function n() {
                    for (var t, n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
                    return (t = e.call.apply(e, [this].concat(a)) || this).gameComponet = null, t
                }
                t(n, e);
                var a = n.prototype;
                return a.setDelegate = function(e) {
                    if (this._delegate = e, null == this.gameComponet) {
                        var t = i.SelectGame.getCurGameId();
                        if (o[t] && o[t].GameSettleComponent) {
                            var n = this._delegate;
                            null != n.node && (n = n.node), n.addComponent(o[t].GameSettleComponent), this.gameComponet = n.getComponent(o[t].GameSettleComponent), this.gameComponet && this.gameComponet.setDelegate(this._delegate)
                        }
                    } else this.gameComponet.setDelegate(this._delegate)
                }, a.doGameCompFun = function(t) {
                    if (this.gameComponet) {
                        for (var n, a = this.gameComponet, i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) o[r - 1] = arguments[r];
                        if ("function" == typeof a[t]) return a[t].apply(a, o);
                        if ("function" == typeof e.prototype[t]) return (n = e.prototype[t]).call.apply(n, [this].concat(o))
                    }
                }, a.onReceiveSettleInfo = function(e) {
                    return this.doGameCompFun("onReceiveSettleInfo", e)
                }, a.doChaJiao = function(e) {
                    return this.doGameCompFun("doChaJiao", e)
                }, a.checkLiuShui = function(e) {
                    return this.doGameCompFun("checkLiuShui", e)
                }, a.checkHuangZhuang = function(e) {
                    return this.doGameCompFun("checkHuangZhuang", e)
                }, a.checkChaJiao = function(e, t) {
                    return this.doGameCompFun("checkChaJiao", e, t)
                }, a.checkGangSettle = function(e) {
                    return this.doGameCompFun("checkGangSettle", e)
                }, a.checkCommonHuSettle = function(e) {
                    return this.doGameCompFun("checkCommonHuSettle", e)
                }, a.checkZiMoSettle = function(e) {
                    return this.doGameCompFun("checkZiMoSettle", e)
                }, a.checkGameDaPaiXinId = function(e) {
                    return this.doGameCompFun("checkGameDaPaiXinId", e)
                }, n
            }(r)) || s) || s), n._RF.pop()
        }
    }
}))