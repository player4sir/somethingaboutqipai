System.register("chunks:///_virtual/NetNode.ts", ["cc", "./GameConfig.ts", "./Logger.ts", "./Utils.ts", "./AppEvent.ts", "./EventManager.ts", "./NetState.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l;
    return {
        setters: [function(e) {
            t = e.cclegacy, i = e.error
        }, function(e) {
            n = e.GameConfig
        }, function(e) {
            a = e.Logger
        }, function(e) {
            o = e.Utils
        }, function(e) {
            r = e.AppEvent
        }, function(e) {
            s = e.EventManager
        }, function(e) {
            c = e.Network, l = e.NetworkState
        }],
        execute: function() {
            e({
                NetNodeState: void 0,
                NetTipsType: void 0
            }), t._RF.push({}, "57f0fB90kNBUJ98yyu+jxjx", "NetNode", void 0);
            var u, d, _ = ["已关闭", "关闭中", "连接中", "验证中", "可传输数据"];
            ! function(e) {
                e[e.Connecting = 0] = "Connecting", e[e.ReConnecting = 1] = "ReConnecting", e[e.Requesting = 2] = "Requesting"
            }(u || (u = e("NetTipsType", {}))),
            function(e) {
                e[e.Closed = 0] = "Closed", e[e.Closing = 1] = "Closing", e[e.Connecting = 2] = "Connecting", e[e.Checking = 3] = "Checking", e[e.Working = 4] = "Working"
            }(d || (d = e("NetNodeState", {}))), e("NetNode", function() {
                function e() {
                    this._connectOptions = null, this._autoReconnect_old = 0, this._autoReconnect = 0, this._isSocketInit = !1, this._isSocketOpen = !1, this._state = d.Closed, this._socket = null, this._isCanCallback = !0, this._networkTips = null, this._protocolHelper = null, this._callbackExecuter = null, this.connectOutTimeCallback = null, this.connectedCallback = null, this.disconnectCallback = null, this.errorConnectedCallback = null, this.notifyCallBack = null, this._isStartHeart = !1, this._keepAliveTimer = null, this._receiveMsgTimer = null, this._reconnectTimer = null, this._heartFirstTime = 1e3, this._heartTime = 1e4, this._receiveTime = 2e4, this._reconnetTimeOut = 5e3, this._requests = Array(), this._maxReqQuene = 3, this._cur_reconnect_time = 0, this.firstClosing = 0, this._name = null, this._name = o.timeEx() + ""
                }
                var t = e.prototype;
                return t.dtor = function() {
                    console.log("socket--NetNode onDestroy", ", name:" + this._name), this.clearTimer(), this._networkTips = null, this.close(1e3)
                }, t.init = function(e, t, i, n) {
                    void 0 === i && (i = null), void 0 === n && (n = null), a.logNet("net---网络初始化"), this._socket = e, this._protocolHelper = t, this._networkTips = i, this._callbackExecuter = n || function(e) {}
                }, t.connect = function(e) {
                    var t;
                    return a.logNet("net---socket连接connect,options=" + e + ", name=" + this._name + " "), this.firstClosing = 0, null == (null == (t = e) ? void 0 : t.url) && (e = {
                        url: n.instance.AppUrlConf.Socket
                    }), this._socket && this._state == d.Closed ? (this._isSocketInit || this.initSocket(), this._socket.connect(e) ? (this._state = d.Connecting, null == this._connectOptions && "number" == typeof e.autoReconnect && (this._autoReconnect_old = e.autoReconnect, this._autoReconnect = e.autoReconnect), this._connectOptions = e, this.updateNetTips(u.Connecting, !0), this._cur_reconnect_time = o.time(), !0) : (this.updateNetTips(u.Connecting, !1), !1)) : (a.logNet("net---Socket连接已开启 要开启请先关闭", this._state, ", name:" + this._name), !1)
                }, t.initSocket = function() {
                    var e = this;
                    this._socket && (this._socket.onConnectedCB = function(t) {
                        e.onConnected(t)
                    }, this._socket.onMessageCB = function(t) {
                        e.onMessage(t)
                    }, this._socket.onErrorCB = function(t) {
                        e.onError(t)
                    }, this._socket.onCloseCB = function(t) {
                        e.onClosed(t)
                    }, this._isSocketInit = !0)
                }, t.startHeart = function() {
                    this.isSocketOpend() ? this._keepAliveTimer || this.resetHearbeatTimer(!0) : a.logNet("net---主动开启心跳失败，socket从未连接成功", ", name:" + this._name)
                }, t.stopHeart = function() {
                    this.resetHearbeatTimer(!1)
                }, t.setHeartTime = function(e) {
                    void 0 === e && (e = null), null != e && (this._heartTime = e)
                }, t.updateNetTips = function(e, t) {
                    this._networkTips && (e == u.Requesting ? this._networkTips.requestTips(t) : e == u.Connecting ? this._networkTips.connectTips(t) : e == u.ReConnecting && this._networkTips.reconnectTips(t))
                }, t.onConnected = function(e) {
                    null != e && (this.resetReconnectNums(3), this._stopReconnectTimer(), this._cur_reconnect_time = o.time() - this._cur_reconnect_time, a.logNet("net----网络已连接", ", name:" + this._name), this._isSocketOpen = !0, this._autoReconnect = this._autoReconnect_old, this.onChecked(), a.logNet("net---网络已连接当前状态为【" + _[this._state] + "】"), null !== this.connectedCallback && this._isCanCallback && this.connectedCallback((function() {})))
                }, t.onChecked = function() {
                    a.logNet("net---连接验证成功，进入工作状态", ", name:" + this._name), this._state = d.Working, this.updateNetTips(u.Connecting, !1), this.updateNetTips(u.ReConnecting, !1), this.setCallbackState(!0), this.checkReqQuene()
                }, t.onMessage = function(e) {
                    var t;
                    if (null != e)
                        if (this._state != d.Closing && this._state != d.Closed) {
                            if (this.resetReceiveMsgTimer(null, !0), this.resetHearbeatTimer(!1), this._protocolHelper.checkResponsePackage(e)) {
                                var i = null == (t = this._protocolHelper) ? void 0 : t.handlerResponsePackage(e);
                                i ? this._isCanCallback ? this._callbackExecuter(i) : a.logNet("net---[Socket]:丢弃消息") : a.logNet("net---[Socket]:收到一条未知的命令 解包失败", e), this._state == d.Working && this.checkReqQuene()
                            }
                        } else a.logNet("net---拒收消息：接受消息状态为【" + _[this._state] + "】")
                }, t.checkReqQuene = function() {
                    var e = this._requests.concat();
                    if (e.length > 0) {
                        for (var t = e.length > this._maxReqQuene ? this._maxReqQuene : e.length, i = 0; i < t; i++) {
                            var n, a = e[i];
                            if (a && null != a && null != (n = a.reqArray) && n.buffer) {
                                var o = this._socket.send(a.reqArray.buffer);
                                if (this.resetReceiveMsgTimer(a.reqArray.outtime), 1 != o) break;
                                e.splice(i, 1)
                            }
                        }
                        this.updateNetTips(u.Requesting, e.length > 0)
                    }
                    this._requests = e
                }, t.onError = function(e) {
                    null != e && (this._state = d.Closed, a.logNet("net---[socket]:onError 连接错误", ", name:" + this._name), this.errorConnectedCallback && this._isCanCallback && this.errorConnectedCallback(this._connectOptions, e, this._autoReconnect), this._checkNetConnect(!0))
                }, t.onClosed = function(e) {
                    var t, i, n;
                    null != e && (this.firstClosing = 0, this._state = d.Closed, this._cur_reconnect_time = 0, e = o.table_verify(e), a.logNet("net---***socket 连接关闭，code:" + (null == (t = e) ? void 0 : t.code) + ",reason:" + (null == (i = e) ? void 0 : i.reason) + ",netState:" + c.getInstance().state + ", _isCanCallback:" + this._isCanCallback + ", name:" + this._name + "***"), this.clearTimer(), -1 != (null == (n = e) ? void 0 : n.code) ? this._isCanCallback && (this.isAutoReconnect() ? (this.disconnectCallback && this.disconnectCallback(this._autoReconnect), this.updateNetTips(u.ReConnecting, !0), this._checkNetConnect()) : (a.logNet("net---[Socket]:onClosed 断开连接 此时不再重连"), this.disconnectCallback && this.disconnectCallback(this._autoReconnect))) : s.dispatch(r.NET_CONNECT_ERROR))
                }, t._checkNetConnect = function(e) {
                    var t = this;
                    if (void 0 === e && (e = !1), this._stopReconnectTimer(), c.getInstance().state == l.ONLINE) {
                        if (a.logNet("net--_checkNetConnect当前网络正常，立即重连"), e && s.dispatch(r.NET_CHECK_NET_STATUS), !this._isCanCallback) return console.log("net-----_checkNetConnect 等待5s后重连-------不主动连接-----"), !0;
                        this._reconnectTimer = setInterval((function() {
                            t._stopReconnectTimer(), t.startReconnect()
                        }), 1500)
                    } else {
                        if (a.logNet("net--_checkNetConnect当前网络异常，等待5s后再重连"), this._autoReconnect <= 0) return void a.logNet("net--_checkNetConnect当前网络异常，重连超过限制不在重连");
                        var i = this,
                            n = function(e) {
                                if (console.log("net-----_checkNetConnect 等待5s后重连------------1", e), c.getInstance().state == l.ONLINE || e) return console.log("net-----_checkNetConnect 等待5s后重连------------2"), i._stopReconnectTimer(), i._isCanCallback ? (console.log("net-----_checkNetConnect 等待5s后重连------------4", i._state), i._state == d.Closed && (i.startReconnect(), i.notifyCallBack && i.notifyCallBack({
                                    tag: "showLoading"
                                })), !0) : (console.log("net-----_checkNetConnect 等待5s后重连-------不主动连接-----"), !0)
                            };
                        s.dispatch(r.NET_CHECK_NET_STATUS);
                        var o = this._reconnetTimeOut;
                        this._reconnectTimer = setInterval((function() {
                            o -= 1e3, console.log("net-----_checkNetConnect 等待5s后重连", o), n(!1) || o <= 0 && n(!0)
                        }), 1e3)
                    }
                }, t.startReconnect = function() {
                    var e = this;
                    a.logNet("net---[socket]:执行重连逻辑 先关闭 再连接...", ", name:" + this._name, ", socket状态:" + this.getSocketState(), "重连次数：", this._autoReconnect), this._autoReconnect > 0 && (this._stopReconnectTimer(), this._reconnectTimer = setInterval((function() {
                        e._stopReconnectTimer(), e.notifyCallBack && e.notifyCallBack({
                            tag: "showLoading"
                        }), e._socket.close(1e3)
                    }), this._reconnetTimeOut), this._autoReconnect -= 1, this.connect(this._connectOptions))
                }, t.close = function(e, t) {
                    void 0 === e && (e = 1e3), a.logNet("net---=====================主动关闭连接======================", ", name:" + this._name), this.clearTimer(), this.rejectReconnect(), this._requests.length = 0, this._stopKeepAliveTimer(), this._networkTips && (this._networkTips.connectTips(!1), this._networkTips.reconnectTips(!1), this._networkTips.requestTips(!1)), this._socket ? (this._state = d.Closing, this._socket.close(e, t)) : this._state = d.Closed
                }, t.closeSocket = function(e, t) {
                    void 0 === e && (e = 1e3), this._socket && this._socket.close(e, t)
                }, t.send = function(e, t) {
                    if (void 0 === t && (t = !1), !this._protocolHelper.handlerRequestPackage(e) || !e.buffer) return -1;
                    if (this._state == d.Working || t) {
                        var n = this._socket.send(e.buffer);
                        return this.resetReceiveMsgTimer(e.outtime), n
                    }
                    return this._state == d.Checking || this._state == d.Connecting ? (this._requests.push({
                        reqArray: e
                    }), a.logNet("net---当前状态为【" + _[this._state] + "】,繁忙并缓冲发送数据"), 0) : (i("net---当前状态为【" + _[this._state] + "】,请求错误"), -1)
                }, t.request = function(e, t) {
                    void 0 === t && (t = !1), this._protocolHelper.handlerRequestPackage(e) && this.base_request(e, t)
                }, t.requestUnique = function(e, t) {
                    void 0 === t && (t = !1);
                    var i = e.action;
                    if (i) {
                        for (var n = 0; n < this._requests.length; n++) {
                            var o = this._requests[n];
                            if (o && o.reqArray && o.reqArray.action == i) return a.logNet("net---[Socket]:requestUnique 命令 action【" + o.reqArray.action + "】重复请求 已拒绝再次执行"), !1
                        }
                        return this.request(e, t), !0
                    }
                }, t.base_request = function(e, t) {
                    void 0 === t && (t = !1);
                    var i = null;
                    try {
                        i = JSON.stringify(e)
                    } catch (t) {
                        t("缓存数据失败 当前action" + e.action)
                    }
                    i && e && null != e.buffer && this._requests.push({
                        reqArray: e
                    }), (this._state == d.Working || t) && this.checkReqQuene()
                }, t.resetReceiveMsgTimer = function(e, t) {
                    var i = this;
                    null !== this._receiveMsgTimer && clearTimeout(this._receiveMsgTimer), t || (this._receiveMsgTimer = setTimeout((function() {
                        a.logNet("net--接收消息定时器超时 关闭网络连接"), i.connectOutTimeCallback && i._isCanCallback && (i.connectOutTimeCallback(i._autoReconnect), a.logNet("net---[Socket]:网络连接超时", ", name:" + i._name)), i._socket.close(1e3)
                    }), e || this._receiveTime))
                }, t.resetHearbeatTimer = function(e) {
                    void 0 === e && (e = !1), this._stopKeepAliveTimer(), this.sendHeartbeatPacket(e)
                }, t.sendHeartbeatPacket = function(e) {
                    var t = this;
                    if (this._stopKeepAliveTimer(), this._state == d.Working) {
                        var i = 0;
                        e && (i = this._heartFirstTime), this._keepAliveTimer = setInterval((function() {
                            t.send(t._protocolHelper.getHearbeatPackage())
                        }), 3 * (this._heartTime + i) / 4)
                    }
                }, t.clearTimer = function() {
                    null !== this._receiveMsgTimer && (clearTimeout(this._receiveMsgTimer), this._receiveMsgTimer = null), this._stopKeepAliveTimer(), this._stopReconnectTimer()
                }, t._stopReconnectTimer = function() {
                    null !== this._reconnectTimer && (clearInterval(this._reconnectTimer), this._reconnectTimer = null)
                }, t._stopKeepAliveTimer = function() {
                    null !== this._keepAliveTimer && (clearTimeout(this._keepAliveTimer), this._keepAliveTimer = null)
                }, t.isSocketOpend = function() {
                    return this._isSocketOpen
                }, t.isSocketInited = function() {
                    return this._isSocketInit
                }, t.isAutoReconnect = function() {
                    return 0 != this._autoReconnect
                }, t.resetReconnectNums = function(e) {
                    this._autoReconnect = e
                }, t.rejectReconnect = function() {
                    this._autoReconnect = 0, this.clearTimer()
                }, t.setCallbackState = function(e) {
                    null != e && (this._isCanCallback = e)
                }, t.isConnected = function() {
                    return !!this._socket && this._socket.readyState() != WebSocket.CLOSED && this._socket.readyState() != WebSocket.CLOSING
                }, t.getSocketState = function() {
                    if (this._socket) return this._socket.readyState()
                }, t.isCloseed = function() {
                    return !!this._socket && this._socket.readyState() == WebSocket.CLOSED
                }, t.isCloseIng = function() {
                    return !!this._socket && this._socket.readyState() == WebSocket.CLOSING
                }, t.getReconnectDuration = function() {
                    return a.logNet("net---获取最近一次的重连时长", this._cur_reconnect_time), this._cur_reconnect_time
                }, t.checkReConnect = function(e) {
                    a.logNet("net----------netNode.checkReConnect---检查是否需要重连,this._state=" + this._state, ", name:" + this._name), e ? (this._stopReconnectTimer(), this.reReConnect(this._isCanCallback)) : this._socket.close(1e3)
                }, t.reReConnect = function(e) {
                    void 0 === e && (e = !0), a.logNet("net-------netNode.checkReConnect---reReConnect", this._state, ", name:" + this._name), this._state == d.Closed ? e && this.startReconnect() : this._state == d.Connecting && this._cur_reconnect_time > this._reconnetTimeOut ? (a.logNet("net-----netNode.checkReConnect- 连接超时了，断开连接", ", name:" + this._name), this._socket.close(1e3), this._state = d.Closed, s.dispatch(r.NET_CONNECT_ERROR)) : this._state == d.Closing && (0 == this.firstClosing ? this.firstClosing = o.time() : o.time() - this.firstClosing >= 1 && (this._socket.close(1e3), this._state = d.Closed, this.firstClosing = 0, e && this.startReconnect()))
                }, e
            }()), t._RF.pop()
        }
    }
}))