System.register("chunks:///_virtual/GCmdMapping.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./GlobalCmdConfig.ts", "./GlobalCmdPBConfig.ts"], (function(e) {
    var t, i, n, a, o, r;
    return {
        setters: [function(e) {
            t = e.createClass
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            n = e.Logger
        }, function(e) {
            a = e.GlobalCmdBinding, o = e.GlobalCmdBindingPHP
        }, function(e) {
            r = e.GlobalPBCmdBinding
        }],
        execute: function() {
            i._RF.push({}, "f8a13NxyqZK+rOLzPrmQg0m", "GCmdMapping", void 0);
            var s = function() {
                function e() {
                    this.mapCmdAction = {}, this.mapCmdReqHead = {}, this.mapCmdEvent = {}, this.mapHeadCmdEvent = {}, this._addPushCmdArrayList = {}
                }
                var i = e.prototype;
                return i.refreshGloabelMapping = function() {
                    for (var e in n.logModel("[GCmdMapping]:refreshMapping 刷新mapping"), a)
                        if (Object.prototype.hasOwnProperty.call(a, e)) {
                            var t = a[e];
                            this.mapHeadCmdEvent[e] = t.respEvent
                        } for (var i in o)
                        if (Object.prototype.hasOwnProperty.call(o, i)) {
                            var s = o[i];
                            this.mapCmdAction[i] = s.action, this.mapCmdReqHead[i] = s.reqHead, this.mapCmdEvent[i] = s.respEvent
                        } for (var c in r.RESP)
                        if (Object.prototype.hasOwnProperty.call(r.RESP, c)) {
                            var l = r.RESP[c];
                            null != l.respEvent && (this.mapHeadCmdEvent[c] = l.respEvent)
                        }
                }, i.initCommonMapping = function() {
                    this.mapCmdAction = {}, this.mapCmdReqHead = {}, this.mapCmdEvent = {}, this.mapHeadCmdEvent = {}, this.refreshGloabelMapping()
                }, i.pushHeadMapping = function(e) {
                    if (e)
                        for (var t in e)
                            if (Object.prototype.hasOwnProperty.call(e, t)) {
                                var i = e[t];
                                null != i.respEvent && (this.mapHeadCmdEvent[t] = i.respEvent)
                            }
                }, i.getReqHeadByCmd = function(e) {
                    return e ? this.mapCmdReqHead[e] : null
                }, i.getActionByCmd = function(e) {
                    return e && this.mapCmdAction[e] || null
                }, i.getEventIDByCmd = function(e) {
                    return e && this.mapCmdEvent[e] || null
                }, i.getEventIDByHeadCmd = function(e) {
                    return e && this.mapHeadCmdEvent[e] || null
                }, t(e, null, [{
                    key: "instance",
                    get: function() {
                        return this._instance && null != this._instance || (this._instance = new e), this._instance
                    }
                }]), e
            }();
            s._instance = null, e("GCmdMapping", s.instance), i._RF.pop()
        }
    }
}))