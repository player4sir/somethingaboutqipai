System.register("chunks:///_virtual/BaseProtobuf.ts", ["cc", "./Logger.ts", "./pbkiller.ts"], (function(e) {
    var t, i, n, a, o;
    return {
        setters: [function(e) {
            t = e.cclegacy, i = e.error, n = e.sys
        }, function(e) {
            a = e.Logger
        }, function(e) {
            o = e.pbkiller
        }],
        execute: function() {
            t._RF.push({}, "e9422JMzTxN0bp3o7LyqKdb", "BaseProtobuf", void 0), e("BaseProtobuf", function() {
                function e(e) {
                    this._className = "BaseProtobuf", this._PBConf = null, this._PBBuilder = null, this.print = function() {
                        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        a.logModel.apply(a, [6, "【" + this._className + "】"].concat(t))
                    }, this.error = function() {
                        for (var e, t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                        (e = console).error.apply(e, ["【" + this._className + "】"].concat(i))
                    }, this.dump = function(e, t) {
                        void 0 === t && (t = null), t || (t = "打印输出 :"), a.logModel(5, t), n.platform == n.Platform.DESKTOP_BROWSER ? console.table(e) : a.dump(e)
                    }, this._className = e, a.logModel(5, this._className + "初始化...")
                }
                var t = e.prototype;
                return t.onInitModuleEvent = function() {}, t.reloadPB = function(e) {
                    e && (a.logModel(5, this._className + " reloadPB 加载PB..."), this._PBConf = e, this._PBBuilder = o.loadFromFile(e.FilePath, e.PackageName), this.reloadFinish())
                }, t.reloadFinish = function() {}, t.encodeBody = function(e, t) {
                    if (void 0 === t && (t = null), !this._PBBuilder) return this.error("包装数据失败，PB未加载"), null;
                    if (null == this._PBBuilder[t] || null == this._PBBuilder[t]) return this.error("包装数据失败，协议函数名称：" + t + " 找不到"), null;
                    var i = this.delEmptyBody(e);
                    return this._PBBuilder[t].encode(i, null, !0).toArrayBuffer()
                }, t.decodeBody = function(e, t, n) {
                    if (void 0 === t && (t = null), void 0 === n && (n = "decode64"), this._PBBuilder)
                        if (null != this._PBBuilder[t] && null != this._PBBuilder[t]) {
                            if (e) {
                                var o = null,
                                    r = null;
                                if ("string" == typeof e) {
                                    if (!this._PBBuilder[t][n]) return void a.logModel(5, "解析字符串类型时出错 解析函数不存在:", n, t, e);
                                    o = this._PBBuilder[t][n](e)
                                } else try {
                                    o = this._PBBuilder[t].decode(e, e.byteLength)
                                } catch (n) {
                                    o = null, a.logModel(5, "解析ByteBuffer类型时出错", t, e), i(n)
                                }
                                return o && (r = this.loopDecodeBody(o, t)), r
                            }
                            a.logModel(5, "这是一个空包:", t, e)
                        } else this.error("解析数据失败，协议函数名称：" + t + " 找不到");
                    else this.error("解析数据失败，PB未加载")
                }, t.delEmptyBody = function(e) {
                    if (null == e) return null;
                    if ("object" != _typeof2(e)) return e;
                    var t = this;
                    return Object.keys(e).forEach((function(i) {
                        var n = e[i];
                        null != n ? "object" == _typeof2(n) && t.delEmptyBody(n) : delete e[i]
                    })), e
                }, t.loopDecodeBody = function(e, t, i) {
                    return null != e && "object" == _typeof2(e) ? e.toRawDefault(!0, !0) : e
                }, e
            }()), t._RF.pop()
        }
    }
}))