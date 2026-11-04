System.register("chunks:///_virtual/SettleServer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseController.ts"], (function(e) {
    var t, n, i, a;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, n = e.createClass
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            a = e.BaseController
        }],
        execute: function() {
            i._RF.push({}, "f63dbRkHzFOS7cr7QGSXr0k", "SettleServer", void 0), e("SettleServer", function(e) {
                function i(t) {
                    return void 0 === t && (t = null), e.call(this, t) || this
                }
                return t(i, e), i.prototype.onInitModuleEvent = function() {}, n(i, null, [{
                    key: "instance",
                    get: function() {
                        return this._instance && null != this._instance || (this._instance = new i("SettleServer")), this._instance
                    }
                }]), i
            }(a))._instance = null, i._RF.pop()
        }
    }
}))