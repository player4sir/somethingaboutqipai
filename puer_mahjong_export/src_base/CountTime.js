System.register("chunks:///_virtual/CountTime.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SchedulerManager.ts"], (function(e) {
    var t, i, n;
    return {
        setters: [function(e) {
            t = e.createClass
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            n = e.SchedulerManager
        }],
        execute: function() {
            i._RF.push({}, "4e1e9Mqof5BSqKHo1WuTqOF", "CountTime", void 0), e("CountTime", function() {
                function e() {
                    this._handler = null, this._startTime = 0, this._endTime = 0, this._time = 1, this._changeNum = 1, this._currowNum = null, this._isDown = !0, this._isCanStart = !1, this._updateCall = null, this._stopCall = null, this._callParam = null
                }
                var i = e.prototype;
                return i.isStart = function() {
                    return null != this._handler
                }, i.Start = function() {
                    if (this.Stop(), this._initCurrowTime(), this._isCanStart = !0, this.Update(), this._isCanStart) {
                        var e = this;
                        this._handler = n.instance.schedulerInterval((function(t) {
                            e.Update(t)
                        }), this._time)
                    }
                }, i.Stop = function() {
                    this._handler && n.instance.unscheduleInterval(this._handler), this._handler = null
                }, i._initCurrowTime = function() {
                    this._isDown ? this._currowNum = this._startTime + this._changeNum : this._currowNum = this._startTime - this._changeNum
                }, i.Update = function(e) {
                    this._isDown ? (this._currowNum = this._currowNum - this._changeNum, this._updateCall && this._updateCall(this._currowNum, this._callParam), this._currowNum <= this._endTime && (this._isCanStart = !1, this.Stop(), this._stopCall && this._stopCall(this._currowNum, this._callParam))) : (this._currowNum = this._currowNum + this._changeNum, this._updateCall && this._updateCall(this._currowNum, this._callParam), this._currowNum >= this._endTime && (this._isCanStart = !1, this.Stop(), this._stopCall && this._stopCall(this._currowNum, this._callParam)))
                }, t(e, [{
                    key: "StartTime",
                    set: function(e) {
                        e = Number(e), isNaN(e) && (e = 0), this._startTime = e
                    }
                }, {
                    key: "EndTime",
                    set: function(e) {
                        e = Number(e), isNaN(e) && (e = 0), this._endTime = e
                    }
                }, {
                    key: "isDown",
                    set: function(e) {
                        this._isDown = e
                    }
                }, {
                    key: "UpdateCallback",
                    set: function(e) {
                        this._updateCall = e
                    }
                }, {
                    key: "StopCallback",
                    set: function(e) {
                        this._stopCall = e
                    }
                }, {
                    key: "CallbackParam",
                    set: function(e) {
                        this._callParam = e
                    }
                }, {
                    key: "CurrowNum",
                    get: function() {
                        return this._currowNum
                    }
                }]), e
            }()), i._RF.pop()
        }
    }
}))