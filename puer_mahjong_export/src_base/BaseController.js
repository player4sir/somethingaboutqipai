System.register("chunks:///_virtual/BaseController.ts", ["cc", "./Logger.ts", "./EventManager.ts", "./SchedulerManager.ts"], (function(e) {
    var t, i, n, a;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }, function(e) {
            i = e.Logger
        }, function(e) {
            n = e.EventManager
        }, function(e) {
            a = e.SchedulerManager
        }],
        execute: function() {
            t._RF.push({}, "8ddf0/P2vdAzIPmPlQU+FMv", "BaseController", void 0), e("BaseController", function() {
                function e(e) {
                    this._className = "BaseController", this._Eventlistener = {}, this._schedulerHandler = {}, this._schedulerHandlerOnce = {}, this.event_defents = {}, this.print = function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        i.logModel.apply(i, [5].concat(t))
                    }, this.dump = function(e, t) {
                        void 0 === t && (t = null), t || (t = "打印输出 :"), i.dump(e, t)
                    }, this._className = e, i.logModel(5, this._className + "初始化..."), this.onInitModuleEvent()
                }
                var t = e.prototype;
                return t.addSchedulerOnce = function(e, t) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.onSchedulerUpdate);
                    var i = this,
                        n = a.instance.schedulerTimeout((function(e) {
                            t.call(i, e, n), i.stopSchedulerOnce(n)
                        }), e);
                    return this._schedulerHandlerOnce[n] = !0, n
                }, t.stopSchedulerOnce = function(e) {
                    a.instance.unscheduleTimeout(e), null != e && 1 == this._schedulerHandlerOnce[e] && (this._schedulerHandlerOnce[e] = null)
                }, t.addScheduler = function(e, t) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.onSchedulerUpdate);
                    var i = this,
                        n = a.instance.schedulerInterval((function(e, a) {
                            t.call(i, e, n)
                        }), e);
                    return this._schedulerHandler[n] = !0, n
                }, t.stopScheduler = function(e) {
                    a.instance.unscheduleInterval(e), null != e && 1 == this._schedulerHandler[e] && (this._schedulerHandler[e] = null)
                }, t.stopAllScheduler = function() {
                    for (var e in this._schedulerHandler) Object.prototype.hasOwnProperty.call(this._schedulerHandler, e) && this.stopScheduler(Number(e));
                    for (var t in this._schedulerHandlerOnce) Object.prototype.hasOwnProperty.call(this._schedulerHandlerOnce, t) && this.stopSchedulerOnce(Number(t))
                }, t.onSchedulerUpdate = function(e) {}, t.onInitModuleEvent = function() {}, t.registerListeners = function() {
                    if (Object.keys(this.event_defents).length > 0) {
                        var e = null;
                        for (var t in this.event_defents) "string" == typeof(e = this.event_defents[t]) ? this.addModelListener(t, this[e]) : e.call && this.addModelListener(t, this[e.call], e.property)
                    }
                }, t.addModelListener = function(e, t, i) {
                    null != e && null != t && (this.removeModelListener(e), this._Eventlistener[e] = e, n.addListener(e, t, this, i))
                }, t.removeModelListener = function(e) {
                    null != e && this._Eventlistener[e] && (n.removeListener(e, this), this._Eventlistener[e] = null)
                }, t.removeAllModelListener = function() {
                    for (var e in this._Eventlistener) Object.prototype.hasOwnProperty.call(this._Eventlistener, e) && this.removeModelListener(e);
                    this._Eventlistener = {}
                }, t.clear = function() {
                    this.stopAllScheduler(), this.removeAllModelListener(), this.event_defents = {}
                }, e
            }()), t._RF.pop()
        }
    }
}))