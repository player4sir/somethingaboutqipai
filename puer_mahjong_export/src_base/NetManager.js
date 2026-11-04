System.register("chunks:///_virtual/NetManager.ts", ["cc", "./MapEx.ts", "./NetNode.ts"], (function(e) {
    var t, i, n;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }, function(e) {
            i = e.MapEx
        }, function(e) {
            n = e.NetNode
        }],
        execute: function() {
            t._RF.push({}, "d8cd5el6GBGTYTW+N8b8EuJ", "NetManager", void 0), e("NetManager", function() {
                function e() {
                    this._channels = new i
                }
                e.getInstance = function() {
                    return this._instance || (this._instance = new e), this._instance
                };
                var t = e.prototype;
                return t.addNetNode = function() {
                    var t = new n;
                    return [t, e.getInstance().setNetNode(t)]
                }, t.setNetNode = function(e) {
                    var t = this._channels.size + 1;
                    return this._channels.set(t, e), t
                }, t.removeNetNode = function(e) {
                    if (e) {
                        var t = this._channels.has(e);
                        t && (this._channels.delete(e), t.dtor && t.dtor())
                    }
                }, t.setNetNodeCallback = function(e, t) {
                    if (e) {
                        var i = this._channels.has(e);
                        if (i) return i.errorConnectedCallback = t.error, i.connectedCallback = t.connected, i.disconnectCallback = t.disconnect, i.connectOutTimeCallback = t.connectouttime, i.notifyCallBack = t.notifyCallBack, !0
                    }
                    return !1
                }, t.connect = function(e, t) {
                    if (e) {
                        var i = this._channels.has(e);
                        if (i) return i.connect(t)
                    }
                    return !1
                }, t.send = function(e, t, i) {
                    if (void 0 === i && (i = !1), e) {
                        var n = this._channels.has(e);
                        if (n) return n.send(t, i)
                    }
                    return -1
                }, t.request = function(e, t, i) {
                    if (void 0 === i && (i = !1), e) {
                        var n = this._channels.has(e);
                        n && n.request(t, i)
                    }
                }, t.requestUnique = function(e, t, i) {
                    if (void 0 === i && (i = !1), e) {
                        var n = this._channels.has(e);
                        if (n) return n.requestUnique(t, i)
                    }
                    return !1
                }, t.close = function(e, t, i) {
                    if (e) {
                        var n = this._channels.has(e);
                        if (n) return n.closeSocket(t, i)
                    }
                }, t.closeAll = function(e, t) {
                    var i = this._channels.values();
                    i.forEach((function(n, a) {
                        i[a].closeSocket(e, t)
                    }))
                }, t.removeNetNodeAll = function() {
                    var e = this._channels.values();
                    e.forEach((function(t, i) {
                        e[i].dtor && e[i].dtor()
                    })), this._channels.clear()
                }, e
            }())._instance = void 0, t._RF.pop()
        }
    }
}))