System.register("chunks:///_virtual/GSocket.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameConfig.ts", "./GameTxt.ts", "./Logger.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./EventManager.ts", "./MsgProcessTools.ts", "./SchedulerManager.ts", "./NetManager.ts", "./NetState.ts", "./WebSocketTask.ts", "./BaseController.ts", "./GCmdMapping.ts", "./GlobalCmd.ts", "./GlobalProtocol.ts", "./GPBAdaptive.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f, m, g, E, v, T, R, P, y;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, i = e.createClass
        }, function(e) {
            n = e.cclegacy
        }, function(e) {
            a = e.GameConfig
        }, function(e) {
            o = e.GameTxt
        }, function(e) {
            r = e.Logger
        }, function(e) {
            s = e.Utils
        }, function(e) {
            c = e.GCache
        }, function(e) {
            l = e.AppEvent
        }, function(e) {
            u = e.GConstants
        }, function(e) {
            d = e.EventManager
        }, function(e) {
            _ = e.MsgProcessTools
        }, function(e) {
            h = e.SchedulerManager
        }, function(e) {
            p = e.NetManager
        }, function(e) {
            f = e.Network, m = e.NetworkState
        }, function(e) {
            g = e.WebSocketTask
        }, function(e) {
            E = e.BaseController
        }, function(e) {
            v = e.GCmdMapping
        }, function(e) {
            T = e.GlobalCmdHeadPHP, R = e.GlobalCmdHead
        }, function(e) {
            P = e.GlobalProtocol
        }, function(e) {
            y = e.GPBAdaptive
        }],
        execute: function() {
            n._RF.push({}, "176f1/90wRMMKefZeRaoLzk", "GSocket", void 0);
            var C = [],
                S = e("GSocket", function(e) {
                    t(E, e);
                    var n = E.prototype;

                    function E() {
                        var t;
                        return (t = e.call(this, "GSocket") || this).reqPhpSendDataQuene = [], t.netNode = null, t.socketIndex = null, t.PB = null, t._globalProtocol = null, t.keepAliveHandler = null, t.keepAliveTimer = 300, t.keepAliveTimeOuterHandler = null, t.keepAliveTimeOuterTimer = 6, t._isShowConnect = !1, t.msgProcessTools = new _, t.receiveMap = new Map, t.onCreateNetNode(), t.PB = new y, v.initCommonMapping(), t
                    }
                    return n.onInitModuleEvent = function() {
                        this.addModelListener(l.NET_RECONNECT_TIMEOUT, this.onSocketConnectTimeOut), this.addModelListener(l.NET_CONNECT_ERROR, this.onSocketConnectError), this.addModelListener(l.HIDE_COMMON_DIALOG, this.onHideCommonDialog)
                    }, n._releastNetNode = function() {
                        this.msgProcessTools.clear(), this.netNode && (this.netNode.dtor(), this.netNode = null), p.getInstance().removeNetNodeAll()
                    }, n.onSocketConnectError = function() {
                        r.logNet("net-----------GSocket onSocketConnectError 连接错误，重连", ", index:" + this.socketIndex), this.callNetNodeFun("resetReconnectNums", E.maxReConnectNum), this._releastNetNode(), this.startConnect(a.instance.AppUrlConf.Socket)
                    }, n.onCreateNetNode = function() {
                        var e = p.getInstance().addNetNode();
                        this.netNode = e[0], this.socketIndex = e[1];
                        var t = new P;
                        this.netNode && this.netNode.init(new g, t, null, s.handler(this, this.onMessage)), this._globalProtocol = t
                    }, n.startConnect = function(e) {
                        if (!this.isConnected() && e) {
                            this.isCloseed() && (p.getInstance().removeNetNode(this.socketIndex), this.netNode = null), this.netNode || this.onCreateNetNode();
                            var t = {
                                    url: e,
                                    autoReconnect: E.maxReConnectNum
                                },
                                i = {
                                    error: s.handler(this, this.errorConnectedCallback),
                                    connected: s.handler(this, this.connectedCallback),
                                    disconnect: s.handler(this, this.disconnectCallback),
                                    connectouttime: s.handler(this, this.connectOutTime),
                                    notifyCallBack: s.handler(this, this.notifyCallBack)
                                };
                            p.getInstance().setNetNodeCallback(this.socketIndex, i), r.logNet("net---GSocket 主动开启连接"), p.getInstance().connect(this.socketIndex, t)
                        }
                    }, n.closeConnect = function(e) {
                        if (void 0 === e && (e = null), r.logNet("net----GSocket---GSocket" + (null == e ? "主动" : "被动") + " 断开连接 ", ", index:" + this.socketIndex), this.netNode) {
                            if (r.logNet("[GSocket],closeConnect---连接状态码 = ", this.netNode.getSocketState()), this.netNode.isCloseed()) return void r.logNet("net----GSocket---GSocket 已经被关闭了 ");
                            if (this.netNode.isCloseIng()) return void r.logNet("net----GSocket---GSocket 正在关闭");
                            this.netNode.close(1e3, "主动断开连接"), null == e ? this.netNode.setCallbackState(!1) : this.netNode.resetReconnectNums(E.maxReConnectNum), this.reqPhpSendDataQuene = []
                        }
                    }, n.heartbeatOnLoading = function(e) {
                        void 0 === e && (e = !1), this.stopKeepAlive(), r.logNet(e ? "net--GSocket 开启心跳" : "net--GSocket 关闭心跳"), this.callNetNodeFun(e ? "startHeart" : "stopHeart")
                    }, n.setHeartTime = function(e) {
                        void 0 === e && (e = null), null == e && (e = 7500), this.callNetNodeFun("setHeartTime", e)
                    }, n.startKeepAlive = function(e) {
                        void 0 === e && (e = !1), this.keepAliveHandler || (e && E.instance.sendKeepAliveCmd(), this.keepAliveHandler = h.instance.schedulerInterval((function(e) {
                            E.instance.sendKeepAliveCmd()
                        }), this.keepAliveTimer))
                    }, n.startKeepAliveTimeOuter = function() {
                        r.logNet("net----GSocket 开启保活超时", ", index:" + this.socketIndex), this.stopKeepAliveTimeOuter(), this.keepAliveTimeOuterHandler = h.instance.schedulerTimeout((function(e) {
                            E.instance.checkKeepAliveTimeOuter()
                        }), this.keepAliveTimeOuterTimer)
                    }, n.stopKeepAliveTimeOuter = function() {
                        this.keepAliveTimeOuterHandler && (r.logNet("net----GSocket 停止保活超时检测", ", index:" + this.socketIndex), h.instance.unscheduleTimeout(this.keepAliveTimeOuterHandler)), this.keepAliveTimeOuterHandler = null
                    }, n.sendKeepAliveCmd = function() {
                        r.logNet("net----GSocket sendKeepAliveCmd"), this.sendMsg(T.PHP_KEEPALIVE, {}), this.startKeepAliveTimeOuter()
                    }, n.checkKeepAliveTimeOuter = function() {
                        r.logNet("net----GSocket checkKeepAliveTimeOuter"), this.sendKeepAliveCmd(), this.startKeepAlive()
                    }, n.stopKeepAlive = function() {
                        r.logNet("net----GSocket stopKeepAlive"), this.stopKeepAliveTimeOuter(), this.keepAliveHandler && h.instance.unscheduleInterval(this.keepAliveHandler), this.keepAliveHandler = null
                    }, n.connectedCallback = function(e) {
                        r.logNet("net---GSocket 连接成功开启保活会话,并开始登录"), d.dispatch(l.SYS_CLOSE_NETLOADING), d.dispatch(l.NET_CONNECT_SUCCESS), d.dispatch(l.NET_GOTO_START_LOGIN)
                    }, n.connectOutTime = function(e) {
                        r.logNet("net----GSocket---GSocket连接超时：次数：" + e, ", index:" + this.socketIndex);
                        var t = o.netWorkTimeout;
                        e == E.maxReConnectNum && (t = o.netWorkTimeout), d.dispatch(l.SYS_TOAST_TIP, {
                            content: t
                        })
                    }, n.errorConnectedCallback = function(e, t, i) {
                        r.logNet("net----errorConnectedCallback---t连接错误回调", ", index:" + this.socketIndex, i), this._checkErrorOrClosedConnected(i)
                    }, n.disconnectCallback = function(e) {
                        r.logNet("net----GSocket---连接失败 是否重连：" + (e > 0) + " 剩余重连次数：" + e, ", index:" + this.socketIndex), this._checkErrorOrClosedConnected(e)
                    }, n._checkErrorOrClosedConnected = function(e) {
                        var t, i, n;
                        E.instance.stopKeepAlive(), e != E.maxReConnectNum && (e <= 0 || null != c && null != (t = c.User) && t.getLoginState && (null == c || null == (i = c.User) ? void 0 : i.getLoginState()) != u.UserLoginState.LoginSuccess) && (d.dispatch(l.SYS_NET_CONNECT_FAIL), r.logNet("net-----------_checkErrorOrClosedConnected 重连次数达到限制或未登录成功过，跳转登录页面", e, null == (n = c.User) ? void 0 : n.getLoginState()), E.instance.closeConnect(!0), d.dispatch(l.NET_CHECK_NET_STATUS), this._isShowConnect || f.getInstance().state != m.ONLINE || this.isConnected() || this.onSocketConnectTimeOut())
                    }, n.notifyCallBack = function(e) {
                        e && e.tag
                    }, n.sendMsg = function(e, t, i) {
                        if (e) {
                            var n = e > 0 && s.number_formatToHex(e) || e;
                            if (this.isConnected())
                                if (e < R.PHP_CMD_CONSTANT) {
                                    var a = this.PB.generatPacket(e, t),
                                        o = a[0],
                                        c = a[1];
                                    r.logNet("net----GSocket---[GSocket]:sendMsg 发送数据 CMD[16进制] = " + n);
                                    var l = this.PB.isCompressByHeadCmd(o),
                                        u = this.PB.getSendPacket(o, c && c.action || null, null, c, l, i);
                                    u && this.request(u)
                                } else {
                                    var d = this.PB.generatPacket(e, t),
                                        _ = d[0],
                                        h = d[1];
                                    if (_) {
                                        var p = this.PB.isCompressByHeadCmd(_),
                                            f = this.PB.getSendPacket(_, h && h.action || null, null, h, p, i);
                                        f && (this.reqPhpSendDataQuene[h.seq] = h, this.request(f))
                                    } else r.logNet("net----GSocket---sendMbsg：包装数据有误 CMD[16进制] = " + n)
                                }
                            else this.netNode && (r.logNet("net----[GSocket]:连接状态码 = ", this.netNode.getSocketState()), this.netNode.reReConnect(!0))
                        }
                    }, n.onMessage = function(e) {
                        var t, i;
                        if (e.headCmd != R.SERVER_HEART_RESPONSE)
                            if (null != (null == e || null == (t = e.data) || null == (i = t.body) ? void 0 : i.seq) && (e.reqData = this.reqPhpSendDataQuene[e.data.body.seq] || null, this.reqPhpSendDataQuene[e.data.body.seq] = null), this.updateReveiveMap(e), e.headCmd == R.RESPONSE_PHP_REQUEST_NEW) {
                                var n, a;
                                null != e && null != (n = e.reqData) && n.action && r.logNet("net----GSocket---[GSocket]:onMessage 收到数据 PHP = " + ((null == e || null == (a = e.reqData) ? void 0 : a.action) || "")), C.push(e)
                            } else if (e.headCmd == R.RESPONSE_HALL_LOGIN_SUCCESS) {
                            var o, c;
                            null != e && null != (o = e.reqData) && o.action && r.logNet("net----GSocket---[GSocket]:onMessage 收到数据 PHP = " + ((null == e || null == (c = e.reqData) ? void 0 : c.action) || "")), C.push(e)
                        } else {
                            r.logNet("net----GSocket---[GSocket]:onMessage 收到数据 CMD[16进制] = " + s.number_formatToHex(e.headCmd));
                            var l = null;
                            if ((l = v.getEventIDByHeadCmd(e.headCmd)) || (l = v.getEventIDByCmd(e.headCmd)), l) {
                                var u = e.clientProcessHint,
                                    _ = (null == u ? void 0 : u.lane) || "default";
                                this.msgProcessTools.process(_, (function(t) {
                                    d.dispatch(l, e.data, e.reqData, t)
                                }), u)
                            }
                        }
                    }, n.updateReveiveMap = function(e) {}, n.printReceiveMap = function() {
                        this.receiveMap.forEach((function(e, t) {
                            console.log("Key: " + t + ", Value: " + e.length)
                        }))
                    }, n.checkReceiveQueve = function() {
                        var e = this;
                        if (C.length > 0)
                            for (var t = 0, i = function() {
                                    var i;
                                    t++;
                                    var n, a = null,
                                        o = C.shift(),
                                        s = null;
                                    if (null != (i = o.reqData) && i.action && (s = null == (n = o.reqData) ? void 0 : n.action), null == s && o.data && o.data.cmd && (s = v.getActionByCmd(o.data.cmd)), o.action = s, (a = v.getEventIDByHeadCmd(o.headCmd)) || (a = v.getEventIDByCmd(o.headCmd)), a) {
                                        var c = o.clientProcessHint,
                                            l = (null == c ? void 0 : c.lane) || "default";
                                        e.msgProcessTools.process(l, (function(e) {
                                            d.dispatch(a, o.data, o.reqData, e)
                                        }), c)
                                    } else r.logNet("net----GSocket---[GSocket]:onMessage 收到action = " + o.action + " 的消息 但是没有找到对应的事件绑定")
                                }; t < 3 && C.length > 0;) i()
                    }, n.request = function(e, t) {
                        void 0 === t && (t = !1), p.getInstance().request(this.socketIndex, e, t)
                    }, n.requestUnique = function(e, t) {
                        return void 0 === t && (t = !1), p.getInstance().requestUnique(this.socketIndex, e, t)
                    }, n.isConnected = function() {
                        return this.callNetNodeFun("isConnected")
                    }, n.isCloseed = function() {
                        return this.callNetNodeFun("isCloseed")
                    }, n.checkReConnect = function(e) {
                        if (r.logNet("net-------------------checkReConnect", e), e) {
                            if (this.isConnected()) return r.logNet("net-------------------checkReConnect--当前已经连接了"), void d.dispatch(l.SYS_CLOSE_NETLOADING);
                            this.netNode ? this.isCloseed() ? (r.logNet("net-------------------1"), this.startConnect(a.instance.AppUrlConf.Socket)) : (r.logNet("net-------------------2"), this.netNode.checkReConnect(e)) : (r.logNet("net-------------------3"), this.startConnect(a.instance.AppUrlConf.Socket)), r.logNet("net-----------===关闭网络加载===-2", this._isShowConnect), this._isShowConnect && d.dispatch(l.NET_RECONNECT_TIMEOUT_DIALOG, {
                                tag: "hide"
                            }), d.dispatch(l.SYS_CLOSE_NETLOADING)
                        } else d.dispatch(l.SYS_SHOW_NETLOADING, 30, {
                            eventId: l.NET_RECONNECT_TIMEOUT,
                            showType: "scheduler",
                            showTips: "网络不稳定，正在努力加载中"
                        })
                    }, n.getReconnectDuration = function() {
                        return this.callNetNodeFun("getReconnectDuration")
                    }, n.callNetNodeFun = function(e) {
                        if (this.netNode && "function" == typeof this.netNode[e]) {
                            for (var t, i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) n[a - 1] = arguments[a];
                            return (t = this.netNode)[e].apply(t, n)
                        }
                    }, n.onSocketConnectTimeOut = function() {
                        var e = this,
                            t = {
                                title: "温馨提示",
                                txt_desc: "重连失败，是否重试",
                                notshowClose: !0,
                                dec_fontSize: 26,
                                ignore_close: !0,
                                buttonsMap: [{
                                    label: "重试",
                                    click: function() {
                                        e._isShowConnect = !1, e.isConnected() || (e.onSocketConnectError(), d.dispatch(l.SYS_SHOW_NETLOADING, 30, {
                                            eventId: l.NET_RECONNECT_TIMEOUT,
                                            showType: "scheduler",
                                            showTips: "网络不稳定，正在努力加载中"
                                        }))
                                    }
                                }, {
                                    label: "退出",
                                    click: function() {
                                        e._isShowConnect = !1, d.dispatch(l.LOGIN_GOTO_SHOW, {
                                            state: "reconnect_fail"
                                        })
                                    }
                                }]
                            };
                        this._isShowConnect = !0, d.dispatch(l.NET_RECONNECT_TIMEOUT_DIALOG, {
                            tag: "show",
                            param: t
                        })
                    }, n.onHideCommonDialog = function() {
                        this._isShowConnect = !1
                    }, i(E, null, [{
                        key: "instance",
                        get: function() {
                            return this._instance && null != this._instance || (this._instance = new E), this._instance
                        }
                    }]), E
                }(E));
            S._instance = null, S.maxReConnectNum = 3, n._RF.pop()
        }
    }
}))