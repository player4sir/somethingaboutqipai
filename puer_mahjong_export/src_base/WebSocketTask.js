System.register("chunks:///_virtual/WebSocketTask.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./WXSdk.ts", "./BaseController.ts"], (function(e) {
    var t, i, n, a, o, r, s;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, i = e.createClass
        }, function(e) {
            n = e.cclegacy, a = e.sys
        }, function(e) {
            o = e.Logger
        }, function(e) {
            r = e.WXSdk
        }, function(e) {
            s = e.BaseController
        }],
        execute: function() {
            n._RF.push({}, "1fe5a8v9UFCKbK4xqtpnryO", "WebSocketTask", void 0), e("WebSocketTask", function(e) {
                function n() {
                    var t;
                    return (t = e.call(this, "WebSocketTask") || this)._wsPlatform = a.platform, t._ws = null, t._readyState = WebSocket.CLOSED, t._errorTimeOut = 6, t._handlerErrorTimeOut = null, t._onConnected = null, t._onMessage = null, t._onError = null, t._onClosed = null, t
                }
                t(n, e);
                var s = n.prototype;
                return s.dtor = function() {
                    this._ws && (this._ws.close(1e3), this._ws.onOpen(null), this._ws.onError(null), this._ws.onClose(null), this._ws.onMessage(null))
                }, s.connect = function(e) {
                    if (this._ws && this._ws.readyState === WebSocket.CONNECTING) return o.logNet("net----websocket connecting, wait for a moment..."), !1;
                    o.logNet("net----websocket connecting, options=", e);
                    var t = null;
                    if (null != e && e.url) t = e.url;
                    else {
                        var i = e.ip,
                            n = e.port;
                        t = e.protocol + "://" + i + ":" + n
                    }
                    if (null != t) {
                        this._stopCheckErrorTimeOut();
                        var s = this;
                        if (this._wsPlatform == a.Platform.WECHAT_GAME) return this._ws && (o.logNet("net----***websocket开启连接 当前已经存在了一个连接 将上个连接的回调重置***"), this._ws.close(1e3), this._ws.onOpen(null), this._ws.onError(null), this._ws.onClose(null), this._ws.onMessage(null)), this._ws = r.instance.connectSocket(t, (function() {
                            s.onSuccessCreated()
                        }), (function() {
                            s.onFailCreated()
                        }), null, null, 6e3), !!this._ws && (this._readyState = WebSocket.CONNECTING, this._ws.onOpen((function(e) {
                            s.onOpened(e)
                        })), this._ws.onError((function(e) {
                            s.onErrored(e)
                        })), this._ws.onClose((function(e) {
                            s.onClosed(e)
                        })), this._ws.onMessage((function(e) {
                            s.onMessaged(e)
                        })), !0);
                        this._ws && (o.logNet("net----***websocket开启连接 当前已经存在了一个连接 将上个连接的回调重置***"), this._ws.onopen(null), this._ws.onerror(null), this._ws.onclose(null), this._ws.onmessage(null));
                        var c = new WebSocket(t);
                        return c ? (this._ws = c, this._ws.binaryType = e.binaryType ? e.binaryType : "arraybuffer", this.onSuccessCreated()) : this.onFailCreated(), !!this._ws && (this._readyState = WebSocket.CONNECTING, this._ws.onopen = function(e) {
                            s.onOpened(e)
                        }, this._ws.onerror = function(e) {
                            s.onErrored(e)
                        }, this._ws.onclose = function(e) {
                            s.onClosed(e)
                        }, this._ws.onmessage = function(e) {
                            s.onMessaged(e)
                        }, !0)
                    }
                    this.onFailCreated()
                }, s.onSuccessCreated = function() {
                    o.logNet("net----***websocket创建连接成功***"), this._startCheckErrorTimeOut()
                }, s.onFailCreated = function() {
                    o.logNet("net----***websocket创建连接失败***"), this._onError && this._onError()
                }, s.onOpened = function(e) {
                    void 0 === e && (e = null), null != e && (this._stopCheckErrorTimeOut(), o.logNet("net----***websocket开启连接成功***"), this._readyState = WebSocket.OPEN, this._onConnected && this._onConnected(e))
                }, s.onMessaged = function(e) {
                    var t;
                    void 0 === e && (e = null), null != e && (this._stopCheckErrorTimeOut(), this._onMessage && null != e && this._onMessage(null == (t = e) ? void 0 : t.data))
                }, s.onErrored = function(e) {
                    void 0 === e && (e = null), null != e && (this._stopCheckErrorTimeOut(), o.logNet("net---***websocket连接错误***", e), this._readyState = WebSocket.CLOSED, this._onError && this._onError(e))
                }, s.onClosed = function(e) {
                    void 0 === e && (e = null), null != e && (this._stopCheckErrorTimeOut(), o.logNet("net---websocket连接关闭了", e), this._readyState = WebSocket.CLOSED, this._onClosed && this._onClosed(e))
                }, s._startCheckErrorTimeOut = function() {
                    var e = this;
                    this._stopCheckErrorTimeOut();
                    var t = this;
                    this._handlerErrorTimeOut = this.addScheduler(this._errorTimeOut, (function() {
                        t.stopScheduler(t._handlerErrorTimeOut), t._readyState != WebSocket.CLOSED && (e._ws && (e._wsPlatform == a.Platform.WECHAT_GAME ? e._ws.onClose(null) : e._ws.onclose(null)), o.logNet("net----***websocket错误超时检测回调***"), t.onClosed({
                            code: -1,
                            reason: "error-timeout"
                        }))
                    }))
                }, s._stopCheckErrorTimeOut = function() {
                    this._handlerErrorTimeOut && (this.stopScheduler(this._handlerErrorTimeOut), this._handlerErrorTimeOut = null)
                }, s.send = function(e) {
                    var t = null == e ? void 0 : e.buffer;
                    return t && this._ws && this._readyState == WebSocket.OPEN ? (this._wsPlatform == a.Platform.WECHAT_GAME ? this._ws.send({
                        data: t
                    }) : this._ws.send(t), 1) : -1
                }, s.close = function(e, t) {
                    void 0 === e && (e = 1e3), o.logNet("net----***websocket 主动调用关闭 ***当前状态:", this._readyState), o.logNet("net----所有State：", WebSocket.CLOSED, WebSocket.CLOSING, WebSocket.CONNECTING, WebSocket.OPEN), this._ws && (this._readyState == WebSocket.CLOSED ? o.logNet("net----***websocket：close 当前已经关闭了 不需要重复关闭***") : (this._readyState = WebSocket.CLOSING, this._wsPlatform == a.Platform.WECHAT_GAME ? this._ws.close({
                        code: e,
                        reason: t
                    }) : this._ws.close(e, t)))
                }, s.readyState = function() {
                    return this._readyState
                }, i(n, [{
                    key: "onConnectedCB",
                    set: function(e) {
                        this._onConnected = e
                    }
                }, {
                    key: "onMessageCB",
                    set: function(e) {
                        this._onMessage = e
                    }
                }, {
                    key: "onErrorCB",
                    set: function(e) {
                        this._onError = e
                    }
                }, {
                    key: "onCloseCB",
                    set: function(e) {
                        this._onClosed = e
                    }
                }, {
                    key: "WsPlatForm",
                    get: function() {
                        return this._wsPlatform
                    },
                    set: function(e) {
                        this._wsPlatform = e || a.platform
                    }
                }]), n
            }(s)), n._RF.pop()
        }
    }
}))