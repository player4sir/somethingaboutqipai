System.register("chunks:///_virtual/SelectGameController.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseController.ts"], (function(e) {
    var t, i, n;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            n = e.BaseController
        }],
        execute: function() {
            i._RF.push({}, "9c7e01FK9ZDWqwO8rYHYk2J", "SelectGameController", void 0), e("SelectGameController", function(e) {
                function i(t) {
                    return e.call(this, t) || this
                }
                return t(i, e), i.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new i("SelectGameController")), this._instance
                }, i.init = function() {
                    this._instance && this._instance.clear(), this._instance = null, i.getInstance()
                }, i.prototype.onInitModuleEvent = function() {}, i
            }(n))._instance = null, i._RF.pop()
        }
    }
}))