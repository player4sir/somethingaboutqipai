System.register("chunks:///_virtual/index.js", ["cc"], (function(e) {
    var t;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }],
        execute: function() {
            /**
             * @dn-sdk/minigame v1.5.12
             * (c) 2026
             * @license ISC
             */
            function i(e, t, i) {
                return (t = f(t)) in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }

            function n(e) {
                return function(e) {
                    if (Array.isArray(e)) return o(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || a(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a(e, t) {
                if (e) {
                    if ("string" == typeof e) return o(e, t);
                    var i = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? o(e, t) : void 0
                }
            }

            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                return n
            }

            function r(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && function(e, t) {
                    (Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }(e, t)
            }

            function s(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var i, n = u(e);
                    if (t) {
                        var a = u(this).constructor;
                        i = Reflect.construct(n, arguments, a)
                    } else i = n.apply(this, arguments);
                    return c(this, i)
                }
            }

            function c(e, t) {
                if (t && ("object" === d(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return l(e)
            }

            function l(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function u(e) {
                return (u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function d(e) {
                return (d = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function(e) {
                    return _typeof2(e)
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e)
                })(e)
            }

            function _(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function h(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, f(n.key), n)
                }
            }

            function p(e, t, i) {
                return t && h(e.prototype, t), i && h(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function f(e) {
                var t = function(e, t) {
                    if ("object" !== d(e) || null === e) return e;
                    var i = e[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var n = i.call(e, "string");
                        if ("object" !== d(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(e);
                return "symbol" === d(t) ? t : String(t)
            }
            t._RF.push({}, "63dc4tQJaFPPrYu0AY23LTM", "index", void 0);
            var m, g, E = "LOCAL_ID",
                v = "CLICK_ID",
                T = "QUEUE_LOST_MAP",
                R = "REMOTE_CONFIG",
                P = "REMOTE_COMMON_CONFIG",
                y = "OPENID",
                C = {
                    init: "init",
                    reporting: "reporting",
                    fail: "fail"
                },
                S = {
                    maxSdkInstance: 4,
                    maxQueueLength: 500,
                    actionParamMaxLength: 1e4,
                    autoTrack: !0,
                    reportThreshold: 5,
                    reportDelay: 1,
                    inspectDelay: 30,
                    cgiBatchSize: 50,
                    requestConcurrency: 4,
                    requestTimeout: 1e4,
                    signVersion: "1.0",
                    realTimeActionList: ["START_APP", "REGISTER", "PURCHASE"]
                },
                A = "JS_RUN_ERROR",
                I = "REQUEST_ERROR",
                D = "REQUEST_CONFIG_ERROR",
                N = "UNKNOWN",
                O = "TRUE",
                b = "FALSE",
                L = "TICKET_INTERVAL_CHANGE",
                M = (g = function(e) {
                    return "".concat("@dn-sdk/minigame", "_").concat("production", "_").concat(e)
                }, {
                    getSync: function(e) {
                        var t;
                        try {
                            t = wx.getStorageSync(g(e))
                        } catch (e) {
                            return console.error("storage get error", e), t
                        }
                        return t
                    },
                    setSync: function(e, t) {
                        try {
                            wx.setStorageSync(g(e), t)
                        } catch (e) {
                            return console.error("storage set error", e), !1
                        }
                        return !0
                    }
                }),
                G = function() {
                    var e;
                    return function() {
                        if (!e) {
                            var t = function() {
                                    if (m) return m;
                                    try {
                                        return m = wx.getSystemInfoSync()
                                    } catch (e) {
                                        return {}
                                    }
                                }(),
                                i = t.system,
                                n = void 0 === i ? "" : i,
                                a = (null == n ? void 0 : n.split(" ")) || [],
                                o = function(e) {
                                    if (!e) return N;
                                    var t = (null == e ? void 0 : e.toUpperCase()) || "";
                                    return t.indexOf("ANDROID") > -1 ? "ANDROID" : t.indexOf("IOS") > -1 ? "IOS" : t.indexOf("MAC") > -1 ? "OSX" : t.indexOf("WINDOWS") > -1 ? "WINDOWS" : N
                                }(a[0]),
                                r = function(e) {
                                    return !e || e.length <= 0 ? "" : 2 === e.length ? e[1] : 3 === e.length && "Windows" === e[0] ? "".concat(e[1], " ").concat(e[2]) : e[e.length - 1]
                                }(a);
                            e = {
                                benchmark_level: t.benchmarkLevel,
                                device_brand: t.brand,
                                screen_height: Math.floor(t.screenHeight),
                                screen_width: Math.floor(t.screenWidth),
                                wx_lib_version: t.SDKVersion,
                                wx_version: t.version,
                                wx_platform: t.platform,
                                device_model: t.model,
                                os: o,
                                os_version: r
                            }
                        }
                        return e
                    }
                }(),
                k = function() {
                    var e;
                    return function() {
                        try {
                            if (e) return e;
                            e || (e = M.getSync(E) || ""), e || (e = X(), M.setSync(E, e))
                        } catch (e) {}
                        return e
                    }
                }(),
                U = function() {
                    var e = "unknown",
                        t = !1;
                    return function() {
                        if (!t) try {
                            wx.getNetworkType({
                                success: function(t) {
                                    e = t.networkType
                                },
                                fail: function() {
                                    e = "unknown"
                                }
                            }), wx.onNetworkStatusChange((function(t) {
                                e = t.networkType
                            })), t = !0
                        } catch (e) {}
                        return e
                    }
                }();
            U();
            var B = function() {
                    var e = "";
                    return function() {
                        return e || (e = M.getSync(y) || ""), e
                    }
                }(),
                w = function() {
                    var e;
                    return function() {
                        if (e) return e;
                        try {
                            var t = wx.getAccountInfoSync();
                            return K(t.miniProgram) ? e = t.miniProgram : {}
                        } catch (t) {
                            return {}
                        }
                    }
                }();

            function H(e) {
                var t = null == e ? void 0 : e.query;
                if (!K(t)) return "";
                var i = "";
                return t.gdt_vid || [1045, 1046, 1084].indexOf(null == e ? void 0 : e.scene) > -1 ? i = "TENCENT" : t.clue_token || t.clickid && t.item_id ? i = "BYTEDANCE" : t.callback && "kuaishou" === t.ksChannel ? i = "KUAISHOU" : t.bd_vid || t.ai && t.d && t.q && t.c ? i = "BAIDU" : t.uctrackid ? i = "ALIBABA" : (t.trackid || t.imp || [1065, 1069, 1194].indexOf(null == e ? void 0 : e.scene) > -1 && (t.callback || t.u)) && (i = "OTHERS"), i
            }

            function F(e, t) {
                try {
                    var i = G(),
                        n = w(),
                        a = {
                            sdk_version: "1.5.12",
                            sdk_name: "@dn-sdk/minigame",
                            device_brand: null == i ? void 0 : i.device_brand,
                            device_model: null == i ? void 0 : i.device_model,
                            wx_version: null == i ? void 0 : i.wx_version,
                            wx_lib_version: null == i ? void 0 : i.wx_lib_version,
                            wx_platform: null == i ? void 0 : i.wx_platform,
                            os: null == i ? void 0 : i.os,
                            os_version: null == i ? void 0 : i.os_version,
                            local_id: k(),
                            env_version: null == n ? void 0 : n.envVersion,
                            appid: null == n ? void 0 : n.appId
                        },
                        o = Object.assign(a, e);
                    wx.request({
                        url: "https://api.datanexus.qq.com/data-nexus-trace/log",
                        data: o,
                        method: "POST",
                        timeout: S.requestTimeout,
                        success: function(e) {
                            "function" == typeof t && 200 === (null == e ? void 0 : e.statusCode) && t()
                        }
                    })
                } catch (i) {
                    se.error(i)
                }
            }
            var q = function() {
                function e() {
                    _(this, e)
                }
                return p(e, null, [{
                    key: "revise",
                    value: function(e) {
                        e > 0 && !this.isRevised && (this.offsetTime = e - Date.now(), this.isRevised = !0)
                    }
                }, {
                    key: "getRevisedcurrentTimeMillis",
                    value: function() {
                        return this.isRevised ? Date.now() + this.offsetTime : -1
                    }
                }]), e
            }();

            function V(e) {
                return new Promise((function(t, i) {
                    wx.request({
                        method: "POST",
                        url: "https://api.datanexus.qq.com/data-nexus-config/v1/sdk/config/get",
                        data: e,
                        timeout: S.requestTimeout,
                        success: function(e) {
                            x(e, t, "config/get", i), Y(e)
                        },
                        fail: function(e) {
                            W(e, "config/get", i)
                        }
                    })
                }))
            }

            function x(e, t, i, n) {
                var a, o, r, s, c = null == e ? void 0 : e.statusCode,
                    l = null == (a = null == e ? void 0 : e.data) ? void 0 : a.code;
                if (200 !== c || 0 !== l) {
                    var u = l;
                    200 !== c && (u = "number" == typeof c ? -1 * c : -888), F({
                        log_type: D,
                        message: "cgiName: ".concat(i, ", statusCode: ").concat(c, ", code: ").concat(l, ", traceid: ").concat(null == (r = null == e ? void 0 : e.data) ? void 0 : r.trace_id),
                        code: u
                    }), null == n || n(null == (s = null == e ? void 0 : e.data) ? void 0 : s.data)
                } else t(null == (o = e.data) ? void 0 : o.data)
            }

            function W(e, t, i) {
                F({
                    log_type: D,
                    message: "cgiName: ".concat(t, " , message: ").concat(null == e ? void 0 : e.errMsg, " "),
                    code: "number" == typeof(null == e ? void 0 : e.errno) ? -1 * e.errno : -999
                }), null == i || i(e)
            }

            function Y(e) {
                var t, i = 1 * (null == (t = null == e ? void 0 : e.header) ? void 0 : t["Server-Time"]);
                i > 17266752e5 && q.revise(i)
            }
            q.offsetTime = 0, q.isRevised = !1;
            var j = Object.prototype.toString,
                K = function(e) {
                    return "[object Object]" === j.call(e)
                },
                Q = function(e) {
                    return "[object Array]" === j.call(e)
                },
                J = function(e) {
                    return "[object Function]" === j.call(e)
                },
                z = (new Date).getTime();

            function X() {
                var e = (new Date).getTime(),
                    t = Math.abs(1e3 * (e - z));
                return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function(i) {
                    var n = 16 * Math.random();
                    return e > 0 ? (n = (e + n) % 16 | 0, e = Math.floor(e / 16)) : (n = (t + n) % 16 | 0, t = Math.floor(t / 16)), ("x" === i ? n : 3 & n | 8).toString(16).replace(/-/g, "")
                }))
            }
            var Z = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,
                $ = function(e) {
                    if ("string" != typeof e) throw new TypeError("Invalid argument expected string");
                    if (!Z.test(e)) throw new Error("Invalid argument not valid semver ('".concat(e, "' received)"))
                },
                ee = function(e) {
                    return isNaN(Number(e)) ? e : Number(e)
                },
                te = function(e) {
                    var t = e.replace(/^v/, "").replace(/\+.*$/, ""),
                        i = function(e, t) {
                            return -1 === e.indexOf("-") ? e.length : e.indexOf("-")
                        }(t),
                        n = t.substring(0, i).split(".");
                    return n.push(t.substring(i + 1)), n
                },
                ie = function(e, t) {
                    [e, t].forEach($);
                    for (var i = te(e), n = te(t), a = 0; a < Math.max(i.length - 1, n.length - 1); a++) {
                        var o = parseInt(i[a] || "0", 10),
                            r = parseInt(n[a] || "0", 10);
                        if (o > r) return 1;
                        if (r > o) return -1
                    }
                    var s = i[i.length - 1],
                        c = n[n.length - 1];
                    if (s && c)
                        for (var l = s.split(".").map(ee), u = c.split(".").map(ee), d = 0; d < Math.max(l.length, u.length); d++) {
                            if (void 0 === l[d] || "string" == typeof u[d] && "number" == typeof l[d]) return -1;
                            if (void 0 === u[d] || "string" == typeof l[d] && "number" == typeof u[d] || l[d] > u[d]) return 1;
                            if (u[d] > l[d]) return -1
                        } else if (s || c) return s ? -1 : 1;
                    return 0
                };

            function ne(e) {
                return ae()[e]
            }

            function ae() {
                return S
            }

            function oe(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            var re = function(e) {
                    try {
                        return e && "string" == typeof e ? -1 === (e = e.replace(/\s/g, "")).indexOf(".") ? e : e.split(".").slice(0, 2).join(".") : ""
                    } catch (t) {
                        return e
                    }
                },
                se = function() {
                    function e() {
                        _(this, e)
                    }
                    return p(e, null, [{
                        key: "error",
                        value: function(e) {
                            for (var t, i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) n[a - 1] = arguments[a];
                            (t = console).error.apply(t, ["".concat("[@dn-sdk/minigame v1.5.12]", ": ").concat(e)].concat(n))
                        }
                    }, {
                        key: "info",
                        value: function(t) {
                            for (var i, n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) a[o - 1] = arguments[o];
                            e.debug && (i = console).info.apply(i, ["".concat("[@dn-sdk/minigame v1.5.12]", ": ").concat(t)].concat(a))
                        }
                    }, {
                        key: "log",
                        value: function(t) {
                            for (var i, n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) a[o - 1] = arguments[o];
                            e.debug && (i = console).log.apply(i, ["".concat("[@dn-sdk/minigame v1.5.12]", ": ").concat(t)].concat(a))
                        }
                    }, {
                        key: "warn",
                        value: function(e) {
                            for (var t, i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) n[a - 1] = arguments[a];
                            (t = console).warn.apply(t, ["".concat("[@dn-sdk/minigame v1.5.12]", ": ").concat(e)].concat(n))
                        }
                    }, {
                        key: "devLog",
                        value: function(t) {
                            for (var i, n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) a[o - 1] = arguments[o];
                            e.isDev && (i = console).log.apply(i, ["".concat("[@dn-sdk/minigame v1.5.12]", ": ").concat(t)].concat(a))
                        }
                    }]), e
                }();
            se.debug = !1, se.isDev = !1;
            var ce = p((function e() {
                _(this, e)
            }));
            ce.hasDirectGameMask = !1, ce.activeDuration = 0;
            var le = function() {
                    var e;
                    return function() {
                        if (!e) try {
                            var t = wx.getLaunchOptionsSync(),
                                i = t.query.gdt_vid || "";
                            i ? ce.hasDirectGameMask || M.setSync(v, i) : i = M.getSync(v) || "";
                            var n = JSON.stringify(t);
                            n.length > 1e4 && (n = JSON.stringify({
                                cut: 1,
                                scene: t.scene
                            }));
                            var a = t.query.gdt_directshare_openid || "",
                                o = t.query.gdt_directshare_clickid || "";
                            e = {
                                source_scene: t.scene,
                                pkg_channel_id: t.query.wxgamepro || "",
                                ad_trace_id: i,
                                launch_options: n,
                                channel: H(t),
                                gdt_directshare_openid: a,
                                gdt_directshare_clickid: o
                            }
                        } catch (t) {
                            e = {}, se.log("获取场景值和渠道号失败", t)
                        }
                        return e
                    }
                }(),
                ue = function() {
                    return le()
                };

            function de(e, t, i) {
                var n = i.value;
                return i.value = function() {
                    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
                    try {
                        return n.apply(this, a)
                    } catch (i) {
                        try {
                            se.error.apply(se, ["calling ".concat(e.constructor.name, ".").concat(t, " error with arguments")].concat(a)), se.error(i);
                            var r = {
                                log_type: A,
                                message: "[safeExcutable] ".concat(e.constructor.name, ".").concat(t, ": ").concat(null == i ? void 0 : i.message),
                                err_stack: null == i ? void 0 : i.stack
                            };
                            J(this.reportLog) ? this.reportLog(r) : F(r)
                        } catch (r) {}
                    }
                }, i
            }
            var _e = Object.defineProperty,
                he = Object.getOwnPropertyDescriptor,
                pe = function(e, t, i, n) {
                    for (var a, o = n > 1 ? void 0 : n ? he(t, i) : t, r = e.length - 1; r >= 0; r--)(a = e[r]) && (o = (n ? a(t, i, o) : a(o)) || o);
                    return n && o && _e(t, i, o), o
                },
                fe = function() {
                    function e(t) {
                        var i = t.userActionSetId,
                            n = t.maxLength,
                            a = void 0 === n ? 500 : n;
                        _(this, e), this.lostActionMaps = {}, this.stack = [], this.localStorageKey = "", this.localStorageKey = "".concat("QUEUE_ACTIONS", "_").concat(null == i ? void 0 : i.toString()), this.maxLength = a, this.userActionSetId = i, this.setTimeStamp(), this.init()
                    }
                    return p(e, [{
                        key: "getItems",
                        value: function() {
                            return this.stack
                        }
                    }, {
                        key: "getStorage",
                        value: function() {
                            var e, t = (null == (e = M) ? void 0 : e.getSync(this.localStorageKey)) || "[]";
                            return JSON.parse(t)
                        }
                    }, {
                        key: "reportLostNum",
                        value: function() {
                            var e = this,
                                t = Object.assign({}, this.lostActionMaps),
                                i = [];
                            for (var n in t) {
                                var a = null == n ? void 0 : n.split("_");
                                i.push({
                                    queue_lost_session_id: a[0],
                                    queue_lost_timestamp: a[1],
                                    queue_lost_num: t[n]
                                })
                            }
                            i.length && (this.setTimeStamp(), i.forEach((function(t) {
                                var i = Object.assign({}, {
                                        user_action_set_id: e.userActionSetId,
                                        log_type: "QUEUE_LOST_NUM"
                                    }, t),
                                    n = null == t ? void 0 : t.queue_lost_session_id,
                                    a = null == t ? void 0 : t.queue_lost_timestamp,
                                    o = "".concat(n, "_").concat(a);
                                F(i, (function() {
                                    oe(e.lostActionMaps, o) && (delete e.lostActionMaps[o], M.setSync(T, JSON.stringify(e.lostActionMaps)))
                                }))
                            })))
                        }
                    }, {
                        key: "getLostMaps",
                        value: function() {
                            return this.lostActionMaps
                        }
                    }, {
                        key: "init",
                        value: function() {
                            var e = this,
                                t = this.getStorage(),
                                i = null == t ? void 0 : t.map((function(e) {
                                    var t, i;
                                    return e.inner_status === (null == (t = C) ? void 0 : t.reporting) ? Object.assign({}, e, {
                                        inner_status: null == (i = C) ? void 0 : i.fail,
                                        is_retry: !0,
                                        retry_count: e.retry_count + 1
                                    }) : e
                                }));
                            this.stack = i, this.lostActionMaps = JSON.parse(M.getSync(T) || "{}"), setTimeout((function() {
                                e.reportLostNum()
                            }), 1e3)
                        }
                    }, {
                        key: "addItem",
                        value: function(e) {
                            var t;
                            null == (t = null == this ? void 0 : this.stack) || t.push(e)
                        }
                    }, {
                        key: "removeItems",
                        value: function(e) {
                            var t, i = null == (t = null == this ? void 0 : this.stack) ? void 0 : t.filter((function(t) {
                                return !(null != e && e.includes(null == t ? void 0 : t.action_id))
                            }));
                            this.stack = i
                        }
                    }, {
                        key: "updateForReportFail",
                        value: function(e) {
                            var t;
                            this.stack = null == (t = this.stack) ? void 0 : t.map((function(t) {
                                var i;
                                return null != e && e.includes(null == t ? void 0 : t.action_id) ? Object.assign({}, t, {
                                    inner_status: null == (i = C) ? void 0 : i.fail,
                                    retry_count: t.retry_count + 1,
                                    is_retry: !0
                                }) : t
                            }))
                        }
                    }, {
                        key: "updateForReporting",
                        value: function(e) {
                            var t;
                            this.stack = null == (t = this.stack) ? void 0 : t.map((function(t) {
                                var i;
                                return null != e && e.includes(null == t ? void 0 : t.action_id) ? Object.assign({}, t, {
                                    inner_status: null == (i = C) ? void 0 : i.reporting
                                }) : t
                            }))
                        }
                    }, {
                        key: "updateAllStack",
                        value: function(e) {
                            this.stack = e
                        }
                    }, {
                        key: "updateToStorage",
                        value: function() {
                            M.setSync(this.localStorageKey, JSON.stringify(this.stack))
                        }
                    }, {
                        key: "updateLostAction",
                        value: function(e) {
                            if (e) {
                                var t = "".concat(e, "_").concat(this.timeStamp),
                                    i = this.lostActionMaps[t] || 0;
                                this.lostActionMaps[t] = i + 1, M.setSync(T, JSON.stringify(this.lostActionMaps))
                            }
                        }
                    }, {
                        key: "setTimeStamp",
                        value: function() {
                            this.timeStamp = Date.now().toString()
                        }
                    }]), e
                }();
            pe([de], fe.prototype, "getItems", 1), pe([de], fe.prototype, "getStorage", 1), pe([de], fe.prototype, "reportLostNum", 1), pe([de], fe.prototype, "getLostMaps", 1), pe([de], fe.prototype, "init", 1), pe([de], fe.prototype, "addItem", 1), pe([de], fe.prototype, "removeItems", 1), pe([de], fe.prototype, "updateForReportFail", 1), pe([de], fe.prototype, "updateForReporting", 1), pe([de], fe.prototype, "updateAllStack", 1), pe([de], fe.prototype, "updateToStorage", 1), pe([de], fe.prototype, "updateLostAction", 1);
            var me = Object.defineProperty,
                ge = Object.getOwnPropertyDescriptor,
                Ee = function(e, t, i, n) {
                    for (var a, o = n > 1 ? void 0 : n ? ge(t, i) : t, r = e.length - 1; r >= 0; r--)(a = e[r]) && (o = (n ? a(t, i, o) : a(o)) || o);
                    return n && o && me(t, i, o), o
                },
                ve = function(e) {
                    r(i, fe);
                    var t = s(i);

                    function i(e) {
                        var n, a = e.userActionSetId,
                            o = e.maxLength,
                            r = void 0 === o ? 500 : o,
                            s = e.ogEvents,
                            c = void 0 === s ? [] : s;
                        return _(this, i), (n = t.call(this, {
                            userActionSetId: a,
                            maxLength: r
                        })).ogEvents = c, n
                    }
                    return p(i, [{
                        key: "getReportableActions",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
                                t = this.getItems(),
                                i = [];
                            return null == t || t.forEach((function(t) {
                                var n;
                                (null == i ? void 0 : i.length) < e && (null == t ? void 0 : t.inner_status) !== (null == (n = C) ? void 0 : n.reporting) && (null == i || i.push(t))
                            })), i
                        }
                    }, {
                        key: "addAction",
                        value: function(e) {
                            var t = {
                                    code: 0,
                                    message: "成功",
                                    actionId: e.action_id
                                },
                                i = this.getItems();
                            if ((null == i ? void 0 : i.length) >= this.maxLength) {
                                var n = "队列长度超过最大限制".concat(this.maxLength, "条，SDK将按照行为优先级排序，丢弃优先级最低的行为事件");
                                se.warn(n), F({
                                    user_action_set_id: this.userActionSetId,
                                    log_type: "JS_QUEUE_LOG",
                                    message: "队列长度超过限制"
                                });
                                var a = this.sortQueue(e, i);
                                se.debug && se.info("超过".concat(this.maxLength, "条按优先级排序的队列："), a.concat([]));
                                var o = a.pop();
                                this.updateAllStack(a), this.updateLostAction((null == o ? void 0 : o.session_id) || ""), (null == o ? void 0 : o.action_id) === e.action_id && (t = {
                                    code: 103,
                                    message: "缓存队列已满，主动丢弃行为"
                                })
                            } else this.addItem(e);
                            return ce.hasDirectGameMask || this.updateToStorage(), t
                        }
                    }, {
                        key: "removeActions",
                        value: function(e) {
                            this.removeItems(e), this.updateToStorage()
                        }
                    }, {
                        key: "updateActionsForReportFail",
                        value: function(e) {
                            this.updateForReportFail(e), this.updateToStorage()
                        }
                    }, {
                        key: "updateActionsForReporting",
                        value: function(e) {
                            this.updateForReporting(e), this.updateToStorage()
                        }
                    }, {
                        key: "getReportableActionsLength",
                        value: function() {
                            var e = this.getItems().filter((function(e) {
                                var t;
                                return (null == e ? void 0 : e.inner_status) !== (null == (t = C) ? void 0 : t.reporting)
                            }));
                            return null == e ? void 0 : e.length
                        }
                    }, {
                        key: "sortQueue",
                        value: function(e, t) {
                            var i = this,
                                n = {},
                                a = null == e ? void 0 : e.action_time,
                                o = t.concat([e]),
                                r = function(e) {
                                    return n[e.action_id] || (n[e.action_id] = i.caculateWeight(a, e)), n[e.action_id]
                                };
                            return o.sort((function(e, t) {
                                return r(t) - r(e)
                            }))
                        }
                    }, {
                        key: "caculateWeight",
                        value: function(e, t) {
                            var i, n = 0,
                                a = this.formatWeight(e, null == t ? void 0 : t.action_time),
                                o = a.ogWeight,
                                r = a.sdkWeight,
                                s = a.userWeight;
                            null != (i = this.ogEvents) && i.includes(null == t ? void 0 : t.action_type) && (n += o), null != t && t.is_sdk_auto_track ? n += r : n += s;
                            var c = e - (null == t ? void 0 : t.action_time) + 1;
                            return c > 0 ? n + 1 / c : n
                        }
                    }, {
                        key: "formatWeight",
                        value: function(e, t) {
                            var i = 1e3,
                                n = 10,
                                a = 100;
                            return e - t > 2592e6 && (i /= 100, n /= 100, a /= 100), {
                                ogWeight: i,
                                sdkWeight: n,
                                userWeight: a
                            }
                        }
                    }]), i
                }();
            Ee([de], ve.prototype, "getReportableActions", 1), Ee([de], ve.prototype, "addAction", 1), Ee([de], ve.prototype, "removeActions", 1), Ee([de], ve.prototype, "updateActionsForReportFail", 1), Ee([de], ve.prototype, "updateActionsForReporting", 1), Ee([de], ve.prototype, "getReportableActionsLength", 1), Ee([de], ve.prototype, "sortQueue", 1), Ee([de], ve.prototype, "caculateWeight", 1), Ee([de], ve.prototype, "formatWeight", 1);
            var Te = function() {
                function e() {
                    _(this, e), this.events = {}
                }
                return p(e, [{
                    key: "subscribe",
                    value: function(t, i) {
                        e.checkCallback(i), Q(this.events[t]) ? this.events[t].push(i) : this.events[t] = [i]
                    }
                }, {
                    key: "once",
                    value: function(t, i) {
                        e.checkCallback(i), this.subscribe(this.onceEventName(t), i)
                    }
                }, {
                    key: "unsubscribe",
                    value: function(t, i) {
                        e.checkCallback(i), Q(this.events[t]) && (this.events[t] = this.events[t].filter((function(e) {
                            return e !== i
                        }))), Q(this.events[this.onceEventName(t)]) && (this.events[this.onceEventName(t)] = this.events[this.onceEventName(t)].filter((function(e) {
                            return e !== i
                        })))
                    }
                }, {
                    key: "publish",
                    value: function(e) {
                        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
                        var a = Date.now();
                        Q(this.events[e]) && this.events[e].forEach((function(e) {
                            return e.apply(void 0, [a].concat(i))
                        })), Q(this.events[this.onceEventName(e)]) && (this.events[this.onceEventName(e)].forEach((function(e) {
                            return e.apply(void 0, [a].concat(i))
                        })), this.events[this.onceEventName(e)] = [])
                    }
                }, {
                    key: "onceEventName",
                    value: function(e) {
                        return "once_event_prefix_".concat(e)
                    }
                }], [{
                    key: "checkCallback",
                    value: function(t) {
                        J(t) || se.error(e.ERROR_CALLBACK_IS_NOT_A_FUNCTION)
                    }
                }]), e
            }();
            Te.ERROR_CALLBACK_IS_NOT_A_FUNCTION = "callback 不是函数";
            var Re = new Te,
                Pe = ["REGISTER", "VIEW_CONTENT", "ADD_TO_CART", "PURCHASE", "COMPLETE_ORDER", "ADD_TO_WISHLIST", "START_APP", "CREATE_ROLE", "AUTHORIZE", "TUTORIAL_FINISH", "START_PAY", "FINISH_PAY"],
                ye = ["REGISTER", "START_APP", "RE_ACTIVE"],
                Ce = ["TICKET", "ENTER_FOREGROUND", "ENTER_BACKGROUND"],
                Se = new(function() {
                    function e() {
                        _(this, e), this.channelClaimActionList = ye, this.noClaimActionList = Ce, this.realTimeActionList = S.realTimeActionList, this.ticketInterval = 60, this.requestTimeout = S.requestTimeout, this.loadConfig()
                    }
                    return p(e, [{
                        key: "getChannelClaimActionList",
                        value: function() {
                            return this.channelClaimActionList
                        }
                    }, {
                        key: "getNoClaimActionList",
                        value: function() {
                            return this.noClaimActionList
                        }
                    }, {
                        key: "getRealTimeActionList",
                        value: function() {
                            return this.realTimeActionList
                        }
                    }, {
                        key: "getTicketInterval",
                        value: function() {
                            return this.ticketInterval
                        }
                    }, {
                        key: "getRequestTimeout",
                        value: function() {
                            return this.requestTimeout
                        }
                    }, {
                        key: "loadConfig",
                        value: function() {
                            var e = this;
                            try {
                                if ("undefined" == typeof wx) return;
                                var t = M.getSync(P);
                                t && this.updateConfig(t), V({
                                    conf_name: "mini_game_sdk_common",
                                    conf_key: "config"
                                }).then((function(t) {
                                    t && K(t) && (e.updateConfig(t), M.setSync(P, t))
                                }))
                            } catch (t) {
                                console.error(t)
                            }
                        }
                    }, {
                        key: "updateConfig",
                        value: function(e) {
                            e.channelClaimActionList && Q(e.channelClaimActionList) && (this.channelClaimActionList = e.channelClaimActionList), e.noClaimActionList && Q(e.noClaimActionList) && (this.noClaimActionList = e.noClaimActionList), e.realTimeActionList && Q(e.realTimeActionList) && (this.realTimeActionList = e.realTimeActionList), e.ticketInterval && "number" == typeof e.ticketInterval && e.ticketInterval > 1 && e.ticketInterval !== this.ticketInterval && (this.ticketInterval = e.ticketInterval, Re.publish(L)), e.requestTimeout && "number" == typeof e.requestTimeout && e.requestTimeout > 5e3 && (this.requestTimeout = e.requestTimeout)
                        }
                    }]), e
                }()),
                Ae = function() {
                    var e = !0,
                        t = !0,
                        i = !0,
                        n = !0,
                        a = !0,
                        o = !1;
                    return function() {
                        if (!o) {
                            o = !0;
                            var r = M.getSync(R);
                            if ((null == r ? void 0 : r.bg) === O ? e = !0 : (null == r ? void 0 : r.bg) === b && (e = !1), (null == r ? void 0 : r.fg) === O ? t = !0 : (null == r ? void 0 : r.fg) === b && (t = !1), (null == r ? void 0 : r.st) === O ? i = !0 : (null == r ? void 0 : r.st) === b && (i = !1), (null == r ? void 0 : r.ti) === O ? n = !0 : (null == r ? void 0 : r.ti) === b && (n = !1), se.devLog("当前缓存开关 bgOn，fgOn，stOn，tiOn：", e, t, i, n), i && Re.publish("START_APP"), n) {
                                var s = function() {
                                        a && Re.publish("TICKET")
                                    },
                                    c = setInterval(s, 1e3 * Se.getTicketInterval());
                                Re.subscribe(L, (function() {
                                    c && clearInterval(c), c = setInterval(s, 1e3 * Se.getTicketInterval())
                                }))
                            }
                            wx.onShow((function(e) {
                                if (a = !0, t) {
                                    var i = "";
                                    try {
                                        (i = JSON.stringify(e)).length > 1e4 && (i = JSON.stringify({
                                            cut: 1,
                                            scene: e.scene
                                        }))
                                    } catch (e) {}
                                    Re.publish("ENTER_FOREGROUND", {
                                        enter_options: i
                                    })
                                }
                            })), wx.onHide((function() {
                                if (a = !1, e) {
                                    var t = 0;
                                    0 !== ce.activeDuration && (t = Date.now() - ce.activeDuration, ce.activeDuration = 0), Re.publish("ENTER_BACKGROUND", {
                                        duration: t > 0 ? t : 0
                                    })
                                }
                            }))
                        }
                    }
                }(),
                Ie = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

            function De(e) {
                return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
            }
            var Ne, Oe = De((function() {
                    var e, t = null;

                    function i(e) {
                        return !!e && ("object" == d(e) || "function" == typeof e)
                    }

                    function n(e) {
                        if (null !== e && !i(e)) throw new TypeError("Object prototype may only be an Object or null: " + e)
                    }
                    var a = Object,
                        o = !(!a.create && {
                                __proto__: null
                            }
                            instanceof a),
                        r = a.create || (o ? function(e) {
                            return n(e), {
                                __proto__: e
                            }
                        } : function(e) {
                            if (n(e), null === e) throw new SyntaxError("Native Object.create is required to create objects with null prototype");
                            var t = function() {};
                            return t.prototype = e, new t
                        }),
                        s = function() {
                            return null
                        },
                        c = a.getPrototypeOf || ([].__proto__ === Array.prototype ? function(e) {
                            var t = e.__proto__;
                            return i(t) ? t : null
                        } : s);
                    return (e = function(l, u) {
                        if (void 0 === (this && this instanceof e ? this.constructor : void 0)) throw new TypeError("Constructor Proxy requires 'new'");
                        if (!i(l) || !i(u)) throw new TypeError("Cannot create proxy with a non-object as target or handler");
                        var d = function() {};
                        t = function() {
                            l = null, d = function(e) {
                                throw new TypeError("Cannot perform '".concat(e, "' on a proxy that has been revoked"))
                            }
                        }, setTimeout((function() {
                            t = null
                        }), 0);
                        var _ = u;
                        for (var h in u = {
                                get: null,
                                set: null,
                                apply: null,
                                construct: null
                            }, _) {
                            if (!(h in u)) throw new TypeError("Proxy polyfill does not support trap '".concat(h, "'"));
                            u[h] = _[h]
                        }
                        "function" == typeof _ && (u.apply = _.apply.bind(_));
                        var p, f = c(l),
                            m = !1,
                            g = !1;
                        "function" == typeof l ? (p = function() {
                            var e = this && this.constructor === p,
                                t = Array.prototype.slice.call(arguments);
                            return d(e ? "construct" : "apply"), e && u.construct ? u.construct.call(this, l, t) : !e && u.apply ? u.apply(l, this, t) : e ? (t.unshift(l), new(l.bind.apply(l, t))) : l.apply(this, t)
                        }, m = !0) : l instanceof Array ? (p = [], g = !0) : p = o || null !== f ? r(f) : {};
                        var E = u.get ? function(e) {
                                return d("get"), u.get(this, e, p)
                            } : function(e) {
                                return d("get"), this[e]
                            },
                            v = u.set ? function(e, t) {
                                d("set"), u.set(this, e, t, p)
                            } : function(e, t) {
                                d("set"), this[e] = t
                            },
                            T = a.getOwnPropertyNames(l),
                            R = {};
                        T.forEach((function(e) {
                            if (!m && !g || !(e in p)) {
                                var t = {
                                    enumerable: !!a.getOwnPropertyDescriptor(l, e).enumerable,
                                    get: E.bind(l, e),
                                    set: v.bind(l, e)
                                };
                                a.defineProperty(p, e, t), R[e] = !0
                            }
                        }));
                        var P = !0;
                        if (m || g) {
                            var y = a.setPrototypeOf || ([].__proto__ === Array.prototype ? function(e, t) {
                                return n(t), e.__proto__ = t, e
                            } : s);
                            f && y(p, f) || (P = !1)
                        }
                        if (u.get || !P)
                            for (var C in l) R[C] || a.defineProperty(p, C, {
                                get: E.bind(l, C)
                            });
                        return a.seal(l), a.seal(p), p
                    }).revocable = function(i, n) {
                        return {
                            proxy: new e(i, n),
                            revoke: t
                        }
                    }, e
                })),
                be = {};
            try {
                Ne || (Ne = Oe())
            } catch (m) {
                Ue(m)
            }

            function Le(e, t, i, a) {
                try {
                    if (!Ne || null == e || !e[t]) return;
                    e[t] = new Ne(e[t], {
                        apply: function(e, t, o) {
                            var r, s;
                            a && ke((function() {
                                return a.apply(void 0, n(o))
                            }));
                            var c = !!(null != (r = o[0]) && r.success || null != (s = o[0]) && s.fail);
                            c && ["success", "fail"].forEach((function(e) {
                                if (o[0][e]) try {
                                    o[0][e] = new Ne(o[0][e], {
                                        apply: function(t, a, r) {
                                            return ke((function() {
                                                return i.apply(void 0, [e, o[0]].concat(n(r)))
                                            })), t.apply(a, r)
                                        }
                                    })
                                } catch (e) {
                                    Ue(e)
                                }
                            }));
                            var l = e.apply(t, o);
                            return !c && l && "[object Promise]" === Object.prototype.toString.call(l) ? l.then((function(e) {
                                return ke((function() {
                                    return i("success", o[0], e)
                                })), e
                            })).catch((function(e) {
                                throw ke((function() {
                                    return i("fail", o[0], e)
                                })), e
                            })) : l
                        }
                    })
                } catch (e) {
                    Ue(e)
                }
            }

            function Me(e, t, i) {
                try {
                    if (!Ne || null == e || !e[t]) return;
                    e[t] = new Ne(e[t], {
                        apply: function(e, t, a) {
                            var o = "function" == typeof a[0];
                            if (o) try {
                                a[0] = new Ne(a[0], {
                                    apply: function(e, t, a) {
                                        var o = e.call.apply(e, [t].concat(n(a)));
                                        return ke((function() {
                                            return i(o)
                                        })), o
                                    }
                                })
                            } catch (e) {
                                Ue(e)
                            }
                            var r = e.call.apply(e, [t].concat(n(a)));
                            return o || ke((function() {
                                return i(r)
                            })), r
                        }
                    })
                } catch (e) {
                    Ue(e)
                }
            }

            function Ge(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    i = arguments.length > 2 ? arguments[2] : void 0,
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
                    o = arguments.length > 4 ? arguments[4] : void 0;
                try {
                    if (!Ne || null == e || !e[t]) return;
                    e[t] = new Ne(e[t], {
                        apply: function(e, r, s) {
                            var c = e.call.apply(e, [r].concat(n(s)));
                            return (!i || !be[t]) && (ke((function() {
                                return null == o ? void 0 : o(c)
                            })), a.forEach((function(e) {
                                var t = e.eventName,
                                    i = e.isAsync,
                                    n = e.proxyEvent;
                                i ? Le(c, t, n) : Me(c, t, n)
                            }))), i && (be[t] = !0), c
                        }
                    })
                } catch (e) {
                    Ue(e)
                }
            }

            function ke(e) {
                try {
                    e()
                } catch (e) {
                    Ue(e)
                }
            }

            function Ue(e) {
                F({
                    log_type: "PROXY_ERROR",
                    message: null == e ? void 0 : e.message,
                    err_stack: null == e ? void 0 : e.stack
                })
            }

            function Be(e, t, i, a) {
                try {
                    if (!Ne || null == e || !e[t]) return;
                    e[t] = new Ne(e[t], {
                        apply: function(e, t, o) {
                            if ("function" == typeof o[0]) try {
                                o[0] = new Ne(o[0], {
                                    apply: function(e, t, o) {
                                        var r = e.call.apply(e, [t].concat(n(o)));
                                        if (a && ke((function() {
                                                return a(r)
                                            })), i) try {
                                            var s = i(r);
                                            return void 0 !== s ? s : r
                                        } catch (s) {
                                            Ue(s)
                                        }
                                        return r
                                    }
                                })
                            } catch (e) {
                                Ue(e)
                            }
                            return e.call.apply(e, [t].concat(n(o)))
                        }
                    })
                } catch (e) {
                    Ue(e)
                }
            }
            var we = "SHARE",
                He = "START_PAY",
                Fe = "FINISH_PAY",
                qe = function() {
                    var e = !1;
                    return function() {
                        e || (e = !0, Le(wx, "login", (function(e) {
                            "success" === e && Re.publish("LOGIN")
                        })), Me(wx, "onAddToFavorites", (function() {
                            Re.publish("ADD_TO_WISHLIST")
                        })), Be(wx, "onShareTimeline", (function(e) {
                            return Ve(e)
                        }), (function() {
                            Re.publish(we, {
                                target: "TIME_LINE",
                                trigger: "MENU"
                            })
                        })), Be(wx, "onShareAppMessage", (function(e) {
                            return Ve(e)
                        }), (function() {
                            Re.publish(we, {
                                target: "APP_MESSAGE",
                                trigger: "MENU"
                            })
                        })), function(e, t, i, a) {
                            try {
                                if (!Ne || null == e || !e[t]) return;
                                e[t] = new Ne(e[t], {
                                    apply: function(e, t, i) {
                                        try {
                                            var o = function(e) {
                                                return Ve(e)
                                            }(i[0]);
                                            void 0 !== o && (i[0] = o)
                                        } catch (o) {
                                            Ue(o)
                                        }
                                        var r = e.call.apply(e, [t].concat(n(i)));
                                        return a && ke((function() {
                                            return a()
                                        })), r
                                    }
                                })
                            } catch (e) {
                                Ue(e)
                            }
                        }(wx, "shareAppMessage", 0, (function() {
                            Re.publish(we, {
                                target: "APP_MESSAGE",
                                trigger: "BUTTON"
                            })
                        })), Ge(wx, "createGameClubButton", !1, [{
                            isAsync: !1,
                            eventName: "onTap",
                            proxyEvent: function() {
                                Re.publish("TAP_GAME_CLUB")
                            }
                        }], (function() {
                            Re.publish("CREATE_GAME_CLUB")
                        })), Ge(wx, "getGameServerManager", !0, [{
                            isAsync: !0,
                            eventName: "createRoom",
                            proxyEvent: function(e) {
                                "success" === e && Re.publish("CREATE_GAME_ROOM")
                            }
                        }, {
                            isAsync: !0,
                            eventName: "joinRoom",
                            proxyEvent: function(e) {
                                "success" === e && Re.publish("JOIN_GAME_ROOM")
                            }
                        }]), Le(wx, "requestMidasPayment", (function(e, t) {
                            Re.publish(Fe, {
                                status: "success" === e ? "SUCCESS" : "FAIL",
                                quantity: (null == t ? void 0 : t.buyQuantity) || 0,
                                mode: (null == t ? void 0 : t.mode) || "",
                                platform: (null == t ? void 0 : t.platform) || "",
                                no: (null == t ? void 0 : t.outTradeNo) || "",
                                payType: "Midas"
                            })
                        }), (function(e) {
                            Re.publish(He, {
                                quantity: (null == e ? void 0 : e.buyQuantity) || 0,
                                mode: (null == e ? void 0 : e.mode) || "",
                                platform: (null == e ? void 0 : e.platform) || "",
                                no: (null == e ? void 0 : e.outTradeNo) || "",
                                payType: "Midas"
                            })
                        })), Le(wx, "requestMidasPaymentGameItem", (function(e, t) {
                            var i = (t || {}).signData;
                            Re.publish(Fe, {
                                status: "success" === e ? "SUCCESS" : "FAIL",
                                quantity: (null == i ? void 0 : i.buyQuantity) || 0,
                                mode: (null == i ? void 0 : i.mode) || "",
                                platform: (null == i ? void 0 : i.platform) || "",
                                no: (null == i ? void 0 : i.outTradeNo) || "",
                                p: (null == i ? void 0 : i.goodsPrice) || 0,
                                productId: (null == i ? void 0 : i.productId) || "",
                                payType: "MidasGameItem"
                            })
                        }), (function(e) {
                            var t = (e || {}).signData;
                            Re.publish(He, {
                                quantity: (null == t ? void 0 : t.buyQuantity) || 0,
                                mode: (null == t ? void 0 : t.mode) || "",
                                platform: (null == t ? void 0 : t.platform) || "",
                                no: (null == t ? void 0 : t.outTradeNo) || "",
                                p: (null == t ? void 0 : t.goodsPrice) || 0,
                                productId: (null == t ? void 0 : t.productId) || "",
                                payType: "MidasGameItem"
                            })
                        })))
                    }
                }();

            function Ve(e) {
                var t = function() {
                    var e = [];
                    try {
                        var t = B(),
                            i = ue().ad_trace_id;
                        t && e.push("gdt_directshare_openid=".concat(t)), i && e.push("gdt_directshare_clickid=".concat(i))
                    } catch (t) {
                        se.log("拼接分享参数异常：", t)
                    }
                    return e.join("&")
                }();
                try {
                    if (!t || null === e || !1 === e) return e;
                    if (e && "object" == d(e)) {
                        var i = e.query || "";
                        return e.query = i ? "".concat(i, "&").concat(t) : t, e
                    }
                } catch (i) {
                    se.log("分享参数异常转换：", i)
                }
                return {
                    query: t
                }
            }
            var xe = function() {
                    function e() {
                        _(this, e)
                    }
                    return p(e, null, [{
                        key: "isEmpty",
                        value: function(e) {
                            return null == e || "string" == typeof e && "" === e.trim()
                        }
                    }, {
                        key: "format",
                        value: function(e) {
                            for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
                            return e.replace(/\${(\d+)}/g, (function(e, t) {
                                return i[t]
                            }))
                        }
                    }, {
                        key: "customStringify",
                        value: function(e) {
                            var t = [];
                            try {
                                return JSON.stringify(e, (function(e, i) {
                                    if (void 0 === i) return "undefined";
                                    if ("object" == d(i) && null !== i) {
                                        if (-1 !== t.indexOf(i)) return "[Circular]";
                                        t.push(i)
                                    }
                                    return "bigint" == typeof i ? i.toString() : i
                                }))
                            } catch (e) {
                                return "[Param Error]"
                            }
                        }
                    }]), e
                }(),
                We = /^([a-zA-Z][a-zA-Z\d_]{0,63})$/i,
                Ye = /^ams_reserved_(.*)/i,
                je = function() {
                    function e() {
                        _(this, e)
                    }
                    return p(e, null, [{
                        key: "validateActionType",
                        value: function(t) {
                            return xe.isEmpty(t) ? (se.error(e.ERROR_ACTION_TYPE_NULL), !1) : !!We.test(t) || (se.error(e.ERROR_ACTION_TYPE_INVALID), !1)
                        }
                    }, {
                        key: "validateActionParam",
                        value: function(t) {
                            if (!t) return !0;
                            if (!K(t)) return se.error(e.ERROR_ACTION_PARAM_IS_NOT_OBJECT), !1;
                            for (var i in t) {
                                if (xe.isEmpty(i)) return se.error(e.ERROR_ACTION_PARAM_KEY_NULL), !1;
                                if (!We.test(i)) return se.error(e.ERROR_ACTION_PARAM_KEY_INVALID), !1;
                                Ye.test(i) && se.warn(e.WARN_ACTION_PARAM_KEY_RESERVED);
                                var n = t[i];
                                if (!e.isValidValue(n)) return se.error(xe.format(e.ERROR_ACTION_PARAM_VALUE_INVALID, i, n)), !1;
                                if (Q(n)) {
                                    if (!e.isValidArrayValue(n)) {
                                        for (var a = 0; a < n.length; a++) se.error(xe.format(e.ERROR_ACTION_PARAM_VALUE_ARRAY_INVALID, i, xe.customStringify(n), a, n[a]));
                                        return !1
                                    }
                                    if (!e.checkArrayElementTypes(n)) return se.error(e.ERROR_ACTION_PARAM_VALUE_ARRAY_TYPE_UNUNIQUE), !1
                                }
                            }
                            return !0
                        }
                    }, {
                        key: "isValidValue",
                        value: function(e) {
                            return null == e || "string" == typeof e || "number" == typeof e || "boolean" == typeof e || Q(e)
                        }
                    }, {
                        key: "isValidArrayValue",
                        value: function(e) {
                            for (var t = 0; t < e.length; t++) {
                                var i = e[t];
                                if ("string" != typeof i && "number" != typeof i && "boolean" != typeof i) return !1
                            }
                            return !0
                        }
                    }, {
                        key: "checkArrayElementTypes",
                        value: function(e) {
                            if (!e || e.length <= 1) return !0;
                            for (var t = d(e[0]), i = 1; i < e.length; i++)
                                if (d(e[i]) !== t) return !1;
                            return !0
                        }
                    }]), e
                }();
            je.ERROR_ACTION_TYPE_NULL = "在track方法中，action_type参数不能为空！", je.ERROR_ACTION_TYPE_INVALID = "在track方法中，action_type参数只能包含字母、数字和下划线，且只能以字母开头，长度不能超过64个字符！", je.ERROR_ACTION_PARAM_KEY_NULL = "在track方法中，action_param参数的key不能为空！", je.ERROR_ACTION_PARAM_KEY_INVALID = "在track方法中，action_param参数的key只能包含字母、数字和下划线，且不能以数字开头，长度不能超过64个字符！", je.WARN_ACTION_PARAM_KEY_RESERVED = "SDK内部预留参数的key均以'ams_reserved_'开头，该参数的值会被SDK内部覆盖，请不要使用！", je.ERROR_ACTION_PARAM_VALUE_INVALID = "在track方法中，action_param参数的value必须是String/Number/Boolean/Array中的一种！[key=${0}, value=${1}]", je.ERROR_ACTION_PARAM_VALUE_ARRAY_INVALID = "在track方法中，如果action_param参数中的某个元素的value是Array，那么这个Array中的每个元素必须是String/Number/Boolean中的一种！[key=${0}, value=${1}, 数组的第${2}个元素为${3}]", je.ERROR_ACTION_PARAM_VALUE_ARRAY_TYPE_UNUNIQUE = "在track方法中，如果action_param参数中的某个元素的value是Array，那么这个Array中所有元素的类型必须是同一种！", je.ERROR_ACTION_PARAM_IS_NOT_OBJECT = "action_param 参数不是Object";
            var Ke = {
                exports: {}
            };
            ! function(e) {
                ! function(t) {
                    function i(e, t) {
                        var i = (65535 & e) + (65535 & t);
                        return (e >> 16) + (t >> 16) + (i >> 16) << 16 | 65535 & i
                    }

                    function n(e, t, n, a, o, r) {
                        return i(function(e, t) {
                            return e << t | e >>> 32 - t
                        }(i(i(t, e), i(a, r)), o), n)
                    }

                    function a(e, t, i, a, o, r, s) {
                        return n(t & i | ~t & a, e, t, o, r, s)
                    }

                    function o(e, t, i, a, o, r, s) {
                        return n(t & a | i & ~a, e, t, o, r, s)
                    }

                    function r(e, t, i, a, o, r, s) {
                        return n(t ^ i ^ a, e, t, o, r, s)
                    }

                    function s(e, t, i, a, o, r, s) {
                        return n(i ^ (t | ~a), e, t, o, r, s)
                    }

                    function c(e, t) {
                        e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                        var n, c, l, u, d, _ = 1732584193,
                            h = -271733879,
                            p = -1732584194,
                            f = 271733878;
                        for (n = 0; n < e.length; n += 16) c = _, l = h, u = p, d = f, _ = a(_, h, p, f, e[n], 7, -680876936), f = a(f, _, h, p, e[n + 1], 12, -389564586), p = a(p, f, _, h, e[n + 2], 17, 606105819), h = a(h, p, f, _, e[n + 3], 22, -1044525330), _ = a(_, h, p, f, e[n + 4], 7, -176418897), f = a(f, _, h, p, e[n + 5], 12, 1200080426), p = a(p, f, _, h, e[n + 6], 17, -1473231341), h = a(h, p, f, _, e[n + 7], 22, -45705983), _ = a(_, h, p, f, e[n + 8], 7, 1770035416), f = a(f, _, h, p, e[n + 9], 12, -1958414417), p = a(p, f, _, h, e[n + 10], 17, -42063), h = a(h, p, f, _, e[n + 11], 22, -1990404162), _ = a(_, h, p, f, e[n + 12], 7, 1804603682), f = a(f, _, h, p, e[n + 13], 12, -40341101), p = a(p, f, _, h, e[n + 14], 17, -1502002290), _ = o(_, h = a(h, p, f, _, e[n + 15], 22, 1236535329), p, f, e[n + 1], 5, -165796510), f = o(f, _, h, p, e[n + 6], 9, -1069501632), p = o(p, f, _, h, e[n + 11], 14, 643717713), h = o(h, p, f, _, e[n], 20, -373897302), _ = o(_, h, p, f, e[n + 5], 5, -701558691), f = o(f, _, h, p, e[n + 10], 9, 38016083), p = o(p, f, _, h, e[n + 15], 14, -660478335), h = o(h, p, f, _, e[n + 4], 20, -405537848), _ = o(_, h, p, f, e[n + 9], 5, 568446438), f = o(f, _, h, p, e[n + 14], 9, -1019803690), p = o(p, f, _, h, e[n + 3], 14, -187363961), h = o(h, p, f, _, e[n + 8], 20, 1163531501), _ = o(_, h, p, f, e[n + 13], 5, -1444681467), f = o(f, _, h, p, e[n + 2], 9, -51403784), p = o(p, f, _, h, e[n + 7], 14, 1735328473), _ = r(_, h = o(h, p, f, _, e[n + 12], 20, -1926607734), p, f, e[n + 5], 4, -378558), f = r(f, _, h, p, e[n + 8], 11, -2022574463), p = r(p, f, _, h, e[n + 11], 16, 1839030562), h = r(h, p, f, _, e[n + 14], 23, -35309556), _ = r(_, h, p, f, e[n + 1], 4, -1530992060), f = r(f, _, h, p, e[n + 4], 11, 1272893353), p = r(p, f, _, h, e[n + 7], 16, -155497632), h = r(h, p, f, _, e[n + 10], 23, -1094730640), _ = r(_, h, p, f, e[n + 13], 4, 681279174), f = r(f, _, h, p, e[n], 11, -358537222), p = r(p, f, _, h, e[n + 3], 16, -722521979), h = r(h, p, f, _, e[n + 6], 23, 76029189), _ = r(_, h, p, f, e[n + 9], 4, -640364487), f = r(f, _, h, p, e[n + 12], 11, -421815835), p = r(p, f, _, h, e[n + 15], 16, 530742520), _ = s(_, h = r(h, p, f, _, e[n + 2], 23, -995338651), p, f, e[n], 6, -198630844), f = s(f, _, h, p, e[n + 7], 10, 1126891415), p = s(p, f, _, h, e[n + 14], 15, -1416354905), h = s(h, p, f, _, e[n + 5], 21, -57434055), _ = s(_, h, p, f, e[n + 12], 6, 1700485571), f = s(f, _, h, p, e[n + 3], 10, -1894986606), p = s(p, f, _, h, e[n + 10], 15, -1051523), h = s(h, p, f, _, e[n + 1], 21, -2054922799), _ = s(_, h, p, f, e[n + 8], 6, 1873313359), f = s(f, _, h, p, e[n + 15], 10, -30611744), p = s(p, f, _, h, e[n + 6], 15, -1560198380), h = s(h, p, f, _, e[n + 13], 21, 1309151649), _ = s(_, h, p, f, e[n + 4], 6, -145523070), f = s(f, _, h, p, e[n + 11], 10, -1120210379), p = s(p, f, _, h, e[n + 2], 15, 718787259), h = s(h, p, f, _, e[n + 9], 21, -343485551), _ = i(_, c), h = i(h, l), p = i(p, u), f = i(f, d);
                        return [_, h, p, f]
                    }

                    function l(e) {
                        var t, i = "",
                            n = 32 * e.length;
                        for (t = 0; t < n; t += 8) i += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                        return i
                    }

                    function u(e) {
                        var t, i = [];
                        for (i[(e.length >> 2) - 1] = void 0, t = 0; t < i.length; t += 1) i[t] = 0;
                        var n = 8 * e.length;
                        for (t = 0; t < n; t += 8) i[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                        return i
                    }

                    function d(e) {
                        var t, i, n = "0123456789abcdef",
                            a = "";
                        for (i = 0; i < e.length; i += 1) t = e.charCodeAt(i), a += n.charAt(t >>> 4 & 15) + n.charAt(15 & t);
                        return a
                    }

                    function _(e) {
                        return unescape(encodeURIComponent(e))
                    }

                    function h(e) {
                        return function(e) {
                            return l(c(u(e), 8 * e.length))
                        }(_(e))
                    }

                    function p(e, t) {
                        return function(e, t) {
                            var i, n, a = u(e),
                                o = [],
                                r = [];
                            for (o[15] = r[15] = void 0, a.length > 16 && (a = c(a, 8 * e.length)), i = 0; i < 16; i += 1) o[i] = 909522486 ^ a[i], r[i] = 1549556828 ^ a[i];
                            return n = c(o.concat(u(t)), 512 + 8 * t.length), l(c(r.concat(n), 640))
                        }(_(e), _(t))
                    }

                    function f(e, t, i) {
                        return t ? i ? p(t, e) : function(e, t) {
                            return d(p(e, t))
                        }(t, e) : i ? h(e) : function(e) {
                            return d(h(e))
                        }(e)
                    }
                    e.exports ? e.exports = f : t.md5 = f
                }(Ie)
            }(Ke);
            var Qe = De(Ke.exports),
                Je = "function" == typeof btoa,
                ze = "function" == typeof Buffer;
            "function" == typeof TextDecoder && new TextDecoder;
            var Xe, Ze = "function" == typeof TextEncoder ? new TextEncoder : void 0,
                $e = Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");
            Xe = {}, $e.forEach((function(e, t) {
                return Xe[e] = t
            }));
            var et = String.fromCharCode.bind(String);
            "function" == typeof Uint8Array.from && Uint8Array.from.bind(Uint8Array);
            var tt = Je ? function(e) {
                    return btoa(e)
                } : ze ? function(e) {
                    return Buffer.from(e, "binary").toString("base64")
                } : function(e) {
                    for (var t, i, n, a, o = "", r = e.length % 3, s = 0; s < e.length;) {
                        if ((i = e.charCodeAt(s++)) > 255 || (n = e.charCodeAt(s++)) > 255 || (a = e.charCodeAt(s++)) > 255) throw new TypeError("invalid character found");
                        o += $e[(t = i << 16 | n << 8 | a) >> 18 & 63] + $e[t >> 12 & 63] + $e[t >> 6 & 63] + $e[63 & t]
                    }
                    return r ? o.slice(0, r - 3) + "===".substring(r) : o
                },
                it = ze ? function(e) {
                    return Buffer.from(e).toString("base64")
                } : function(e) {
                    for (var t = [], i = 0, n = e.length; i < n; i += 4096) t.push(et.apply(null, e.subarray(i, i + 4096)));
                    return tt(t.join(""))
                },
                nt = function(e) {
                    if (e.length < 2) return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? et(192 | t >>> 6) + et(128 | 63 & t) : et(224 | t >>> 12 & 15) + et(128 | t >>> 6 & 63) + et(128 | 63 & t);
                    var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
                    return et(240 | t >>> 18 & 7) + et(128 | t >>> 12 & 63) + et(128 | t >>> 6 & 63) + et(128 | 63 & t)
                },
                at = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
                ot = ze ? function(e) {
                    return Buffer.from(e, "utf8").toString("base64")
                } : Ze ? function(e) {
                    return it(Ze.encode(e))
                } : function(e) {
                    return tt(function(e) {
                        return e.replace(at, nt)
                    }(e))
                },
                rt = function(e) {
                    return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? function(e) {
                        return e.replace(/=/g, "").replace(/[+\/]/g, (function(e) {
                            return "+" == e ? "-" : "_"
                        }))
                    }(ot(e)) : ot(e)
                };

            function st(e) {
                var t = "",
                    i = null == e ? void 0 : e.appid,
                    n = null == e ? void 0 : e.secret_key,
                    a = null == e ? void 0 : e.sdk_version,
                    o = null == e ? void 0 : e.timestamp;
                if (!(i && n && a && o && 32 === n.length)) return t;
                for (var r = Qe(a + i + o), s = 0; s < 32; s++) t += s % 2 == 0 ? n[s] : r[s];
                return t
            }
            var ct = Object.defineProperty,
                lt = Object.getOwnPropertyDescriptor,
                ut = function(e, t, i, n) {
                    for (var a, o = n > 1 ? void 0 : n ? lt(t, i) : t, r = e.length - 1; r >= 0; r--)(a = e[r]) && (o = (n ? a(t, i, o) : a(o)) || o);
                    return n && o && ct(t, i, o), o
                },
                dt = function() {
                    function e(t) {
                        var i = this;
                        _(this, e), this.cgiBatchSize = S.cgiBatchSize, this.reportThreshold = S.reportThreshold, this.reportDelay = S.reportDelay, this.triggerExecuteSend = function(e) {
                            var t, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                n = [];
                            return function() {
                                for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++) o[r] = arguments[r];
                                return clearTimeout(t), t = setTimeout((function() {
                                    var t = e.apply(void 0, o);
                                    n.forEach((function(e) {
                                        return e(t)
                                    })), n = []
                                }), i), new Promise((function(e) {
                                    return n.push(e)
                                }))
                            }
                        }((function() {
                            i.executeSend()
                        }), 1e3 * this.reportDelay), this.inspectDelay = S.inspectDelay, this.inspectTimer = void 0, this.isNeedContinueSend = !1, this.getBaseInfo = t.getBaseInfo, this.reportLog = t.reportLog, this.queueManager = t.queueManager, this.configManager = t.configManager, this.onReportComplete = t.onReportComplete, this.onReportFail = t.onReportFail, this.flushSend(), this.startInspectTimer()
                    }
                    return p(e, [{
                        key: "batchSend",
                        value: function() {
                            var e, t = this.queueManager.getReportableActions(this.reportThreshold);
                            if (t.length >= this.reportThreshold) this.executeSend();
                            else {
                                var i = (null == (e = this.configManager) ? void 0 : e.getRealTimeActionList()) || S.realTimeActionList;
                                t.some((function(e) {
                                    return i.indexOf(e.action_type) > -1 && !e.is_retry
                                })) ? this.executeSend() : this.triggerExecuteSend()
                            }
                            this.startInspectTimer()
                        }
                    }, {
                        key: "flushSend",
                        value: function() {
                            this.executeSend()
                        }
                    }, {
                        key: "executeSend",
                        value: function() {
                            var t = this;
                            if (!ce.hasDirectGameMask)
                                if (e.currentRequestCount >= e.requestConcurrency) this.isNeedContinueSend = !0;
                                else {
                                    this.isNeedContinueSend = !1;
                                    var i = (e.requestConcurrency - e.currentRequestCount) * this.cgiBatchSize,
                                        n = this.queueManager.getReportableActions(i),
                                        a = this.getBaseInfo();
                                    if (!a.openid && !a.unionid && (se.warn("请尽快调用 setOpenId 或 setUnionId 方法设置用户ID！"), n = n.filter((function(e) {
                                            return null == e ? void 0 : e.ad_trace_id
                                        }))), !(n.length <= 0)) {
                                        i < this.queueManager.getReportableActionsLength() && (this.isNeedContinueSend = !0), e.currentRequestCount += Math.ceil(n.length / this.cgiBatchSize);
                                        for (var o = [], r = 0; r < n.length; r += this.cgiBatchSize) {
                                            var s = this.generateActionReportParams(n.slice(r, r + this.cgiBatchSize));
                                            o.push(this.report(s))
                                        }
                                        Promise.all(o).then((function(e) {
                                            var i = e.some((function(e) {
                                                return e >= 0
                                            }));
                                            t.isNeedContinueSend && i && t.executeSend()
                                        })).catch((function(e) {
                                            se.error(e), t.reportLog({
                                                message: "executeSend catch: ".concat(e.message),
                                                log_type: A,
                                                err_stack: e.stack
                                            })
                                        }))
                                    }
                                }
                        }
                    }, {
                        key: "generateActionReportParams",
                        value: function(e) {
                            var t = [],
                                i = [],
                                n = this.getBaseInfo();
                            return e.forEach((function(e) {
                                i.push(e.action_id);
                                var n = Object.assign({}, e);
                                delete n.inner_status, t.push(n)
                            })), {
                                data: {
                                    info: n,
                                    actions: t
                                },
                                actionIdList: i
                            }
                        }
                    }, {
                        key: "dealSuccessData",
                        value: function(e, t, i) {
                            [51001, 51003].indexOf(null == e ? void 0 : e.code) > -1 ? this.queueManager.updateActionsForReportFail(t) : this.queueManager.removeActions(t), 0 !== (null == e ? void 0 : e.code) && (this.reportLog({
                                log_type: I,
                                code: null == e ? void 0 : e.code,
                                message: "trace_id: ".concat(null == e ? void 0 : e.trace_id, "，msg: ").concat(null == e ? void 0 : e.message)
                            }), se.error("上报失败：", e)), this.doTrackCallbackFn(this.onReportComplete, e, i), -1 === [0, 51001, 51003].indexOf(null == e ? void 0 : e.code) && this.doTrackCallbackFn(this.onReportFail, e, i)
                        }
                    }, {
                        key: "dealFailData",
                        value: function(e, t, i) {
                            this.queueManager.updateActionsForReportFail(t), this.reportLog({
                                log_type: I,
                                code: e.code,
                                message: e.message
                            }), se.error("上报失败：", e), this.doTrackCallbackFn(this.onReportComplete, e, i)
                        }
                    }, {
                        key: "report",
                        value: function(t) {
                            var i = this,
                                n = t.data,
                                a = t.actionIdList;
                            return this.queueManager.updateActionsForReporting(a), se.debug && (se.info("上报行为类型: ", "【".concat(n.actions.map((function(e) {
                                return e.action_type
                            })).join("、"), "】")), se.info("上报请求参数: ", n)), new Promise((function(t) {
                                var o, r, s, c, l, u, _, h, p = Date.now();
                                try {
                                    var f = st({
                                            appid: null == (o = null == n ? void 0 : n.info) ? void 0 : o.appid,
                                            secret_key: null == (r = null == n ? void 0 : n.info) ? void 0 : r.secret_key,
                                            sdk_version: null == (s = null == n ? void 0 : n.info) ? void 0 : s.sdk_version,
                                            timestamp: p
                                        }),
                                        m = rt(JSON.stringify(n));
                                    _ = {
                                        "Client-Time": p,
                                        "Sign-Value": Qe(m + (null == (c = null == n ? void 0 : n.info) ? void 0 : c.user_action_set_id) + (null == (l = null == n ? void 0 : n.info) ? void 0 : l.secret_key) + f),
                                        "Sign-Version": S.signVersion,
                                        "content-type": "text/plain;charset=UTF-8"
                                    }, h = m
                                } catch (f) {
                                    _ = {
                                        "Client-Time": p
                                    }, h = n, i.reportLog({
                                        log_type: "SIGN_ERROR",
                                        message: "sign error msg: ".concat(null == f ? void 0 : f.message),
                                        err_stack: null == f ? void 0 : f.stack
                                    }), se.error(f)
                                }
                                wx.request({
                                    url: "https://api.datanexus.qq.com/data-nexus-cgi/miniprogram",
                                    method: "POST",
                                    timeout: (null == (u = i.configManager) ? void 0 : u.getRequestTimeout()) || S.requestTimeout,
                                    header: _,
                                    data: h,
                                    success: function(o) {
                                        var r, s;
                                        se.devLog("上报接口返回码:", null == (r = null == o ? void 0 : o.data) ? void 0 : r.code);
                                        var c = (null == (s = null == o ? void 0 : o.header) ? void 0 : s["Server-Time"]) || -1;
                                        if (q.revise(c), e.currentRequestCount -= 1, 200 === (null == o ? void 0 : o.statusCode)) return i.dealSuccessData(null == o ? void 0 : o.data, a, n), void t((null == o ? void 0 : o.data).code);
                                        var l = "";
                                        try {
                                            l = "object" == d(null == o ? void 0 : o.data) ? JSON.stringify(null == o ? void 0 : o.data) : null == o ? void 0 : o.data
                                        } catch (e) {
                                            se.error(e)
                                        }
                                        var u = {
                                            code: "number" == typeof(null == o ? void 0 : o.statusCode) ? -1 * o.statusCode : -888,
                                            message: "statusCode: ".concat(null == o ? void 0 : o.statusCode, ", data: ").concat(l)
                                        };
                                        i.dealFailData(u, a, n), t(u.code)
                                    },
                                    fail: function(o) {
                                        se.devLog("上报失败:", o), e.currentRequestCount -= 1;
                                        var r = {
                                            code: "number" == typeof(null == o ? void 0 : o.errno) ? -1 * o.errno : -999,
                                            message: null == o ? void 0 : o.errMsg
                                        };
                                        i.dealFailData(r, a, n), t(r.code)
                                    }
                                })
                            }))
                        }
                    }, {
                        key: "startInspectTimer",
                        value: function() {
                            var t = this;
                            clearTimeout(this.inspectTimer), this.inspectTimer = setTimeout((function() {
                                e.currentRequestCount >= e.requestConcurrency && (e.currentRequestCount = e.requestConcurrency - 1), t.executeSend(), t.startInspectTimer()
                            }), 1e3 * this.inspectDelay)
                        }
                    }, {
                        key: "doTrackCallbackFn",
                        value: function(e, t, i) {
                            if ("function" == typeof e) try {
                                for (var n = [], a = 0; a < i.actions.length; a++)
                                    if (!i.actions[a].is_sdk_auto_track) {
                                        var o = i.actions[a],
                                            r = o.action_type,
                                            s = o.action_param,
                                            c = o.action_id,
                                            l = o.action_time;
                                        n.push({
                                            action_type: r,
                                            action_param: s,
                                            action_id: c,
                                            action_time: l
                                        })
                                    } if (n.length) {
                                    var u = i.info,
                                        d = u.user_action_set_id,
                                        _ = u.appid,
                                        h = u.openid,
                                        p = u.unionid,
                                        f = u.user_unique_id;
                                    e({
                                        code: null == t ? void 0 : t.code,
                                        message: null == t ? void 0 : t.message,
                                        data: {
                                            actions: n,
                                            info: {
                                                user_action_set_id: d,
                                                appid: _,
                                                openid: h,
                                                unionid: p,
                                                user_unique_id: f
                                            }
                                        }
                                    })
                                }
                            } catch (n) {
                                se.error("返回上报回调数据异常：", n)
                            }
                        }
                    }], [{
                        key: "setRequestConcurrency",
                        value: function(t) {
                            "number" == typeof t ? t < 1 ? se.error("网络请求最大并发量不能小于1") : t > 10 ? se.error("网络请求最大并发量不能大于10") : e.requestConcurrency = t : se.error("网络请求最大并发量需设置为数字")
                        }
                    }]), e
                }();
            dt.currentRequestCount = 0, dt.requestConcurrency = S.requestConcurrency, ut([de], dt.prototype, "batchSend", 1), ut([de], dt.prototype, "flushSend", 1), ut([de], dt.prototype, "executeSend", 1);
            var _t = function() {
                    function e() {
                        _(this, e)
                    }
                    return p(e, [{
                        key: "install",
                        value: function(e, t) {
                            var n = function(t) {
                                Re.subscribe(t, function(t) {
                                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    return function(a) {
                                        var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        ce.hasDirectGameMask || ("ENTER_FOREGROUND" === t && (ce.activeDuration = Date.now()), e.track(t, Object.assign(n || {}, o, i(i({}, Ct, !0), St, a))))
                                    }
                                }(t))
                            };
                            n("TICKET"), n("START_APP"), n("ENTER_FOREGROUND"), n("ENTER_BACKGROUND"), "all" === t && (n("LOGIN"), n("ADD_TO_WISHLIST"), n("SHARE"), n("CREATE_GAME_CLUB"), n("TAP_GAME_CLUB"), n("CREATE_GAME_ROOM"), n("JOIN_GAME_ROOM"), n("START_PAY"), n("FINISH_PAY"))
                        }
                    }]), e
                }(),
                ht = function() {
                    function e() {
                        _(this, e), this.special_method_symbol = Symbol("special_method_symbol")
                    }
                    return p(e, [{
                        key: "onPurchase",
                        value: function(e) {
                            return "number" != typeof e && se.warn("付费金额需要为数字"), e <= 0 && se.warn("付费金额需要大于0"), this.wrapTrack("PURCHASE", {
                                value: e
                            })
                        }
                    }, {
                        key: "onEnterForeground",
                        value: function() {
                            return this.wrapTrack("ENTER_FOREGROUND")
                        }
                    }, {
                        key: "onEnterBackground",
                        value: function() {
                            return this.wrapTrack("ENTER_BACKGROUND")
                        }
                    }, {
                        key: "onAppStart",
                        value: function() {
                            return this.wrapTrack("START_APP")
                        }
                    }, {
                        key: "onAppQuit",
                        value: function() {
                            return this.wrapTrack("APP_QUIT")
                        }
                    }, {
                        key: "onAddToWishlist",
                        value: function() {
                            return this.wrapTrack("ADD_TO_WISHLIST")
                        }
                    }, {
                        key: "wrapTrack",
                        value: function(e, t) {
                            return this.track(e, Object.assign(t || {}, i({}, this.special_method_symbol, 1)))
                        }
                    }]), e
                }(),
                pt = function(e) {
                    r(i, ht);
                    var t = s(i);

                    function i() {
                        return _(this, i), t.apply(this, arguments)
                    }
                    return p(i, [{
                        key: "onRegister",
                        value: function() {
                            return this.wrapTrack("REGISTER")
                        }
                    }, {
                        key: "onCreateRole",
                        value: function(e) {
                            return e && "string" != typeof e && se.warn("角色名称需要为字符串"), this.wrapTrack("CREATE_ROLE", e ? {
                                name: e
                            } : {})
                        }
                    }, {
                        key: "onTutorialFinish",
                        value: function() {
                            return this.wrapTrack("TUTORIAL_FINISH")
                        }
                    }]), i
                }(),
                ft = "（如果确认无误，请忽略该提示）",
                mt = function() {
                    var e = [];
                    return {
                        requestActionList: function() {
                            try {
                                V({
                                    conf_name: "data_nexus_common",
                                    conf_key: "action_types"
                                }).then((function(t) {
                                    Q(t) && (e = t)
                                }))
                            } catch (e) {
                                se.error(e)
                            }
                        },
                        getActionList: function() {
                            return e
                        }
                    }
                }();

            function gt(e, t) {
                try {
                    e.is_sdk_auto_track || (function(e) {
                        try {
                            var t = mt.getActionList();
                            if (!t.includes(e)) {
                                var i, n = function(e, t) {
                                    var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (!i) {
                                        if (Array.isArray(e) || (i = a(e))) {
                                            i && (e = i);
                                            var n = 0,
                                                o = function() {};
                                            return {
                                                s: o,
                                                n: function() {
                                                    return n >= e.length ? {
                                                        done: !0
                                                    } : {
                                                        done: !1,
                                                        value: e[n++]
                                                    }
                                                },
                                                e: function(e) {
                                                    throw e
                                                },
                                                f: o
                                            }
                                        }
                                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }
                                    var r, s = !0,
                                        c = !1;
                                    return {
                                        s: function() {
                                            i = i.call(e)
                                        },
                                        n: function() {
                                            var e = i.next();
                                            return s = e.done, e
                                        },
                                        e: function(e) {
                                            c = !0, r = e
                                        },
                                        f: function() {
                                            try {
                                                s || null == i.return || i.return()
                                            } finally {
                                                if (c) throw r
                                            }
                                        }
                                    }
                                }(t);
                                try {
                                    for (n.s(); !(i = n.n()).done;) {
                                        var o = i.value;
                                        if (Et(o, e) <= parseInt((.3 * o.length).toString())) {
                                            se.warn("通过SDK上报的".concat(e, "行为名称可能有误，请检查该行为类型是否为腾讯广告提供的标准行为！").concat(ft));
                                            break
                                        }
                                    }
                                } catch (e) {
                                    n.e(e)
                                } finally {
                                    n.f()
                                }
                            }
                        } catch (t) {
                            se.error(t)
                        }
                    }(e.action_type), "minigame" === t ? function(e, t) {
                        var i, n, a;
                        try {
                            ["PURCHASE", "ADD_TO_CART"].includes(e.action_type) && e.action_param && oe(e.action_param, "value") && ("number" != typeof(null == (i = e.action_param) ? void 0 : i.value) ? se.warn("通过SDK上报的".concat(e.action_type, "行为携带的金额参数需要为数字！")) : (null == (n = e.action_param) ? void 0 : n.value) <= 0 ? se.warn("通过SDK上报的".concat(e.action_type, "行为携带的金额参数需要大于0！")) : "minigame" === t && (null == (a = e.action_param) ? void 0 : a.value) < 100 && se.warn("通过SDK上报的".concat(e.action_type, "行为携带的金额参数可能有误，金额的单位为‘分’，请检查金额是否正确！").concat(ft)))
                        } catch (e) {
                            se.error(e)
                        }
                    }(e, t) : "miniprogram" === t && function(e) {
                        try {
                            var t = null == e ? void 0 : e.action_type,
                                i = (null == e ? void 0 : e.action_param) || {};
                            "PURCHASE" === t && oe(i, "value") && ("number" != typeof(null == i ? void 0 : i.value) ? se.warn("通过SDK上报的".concat(t, "行为携带的金额参数需要为数字！")) : (null == i ? void 0 : i.value) <= 0 && se.warn("通过SDK上报的".concat(t, "行为携带的金额参数需要大于0！")))
                        } catch (t) {
                            se.error(t)
                        }
                    }(e))
                } catch (e) {
                    se.error(e)
                }
            }

            function Et(e, t) {
                try {
                    if (0 === e.length) return t.length;
                    if (0 === t.length) return e.length;
                    for (var i = [], n = 0; n <= t.length; n++) i[n] = [n];
                    for (var a = 0; a <= e.length; a++) i[0][a] = a;
                    for (var o = 1; o <= t.length; o++)
                        for (var r = 1; r <= e.length; r++) t.charAt(o - 1) === e.charAt(r - 1) ? i[o][r] = i[o - 1][r - 1] : i[o][r] = Math.min(i[o - 1][r - 1] + 1, i[o][r - 1] + 1, i[o - 1][r] + 1);
                    return i[t.length][e.length]
                } catch (i) {
                    se.error(i)
                }
            }

            function vt(e) {
                try {
                    e && !/^[a-zA-Z0-9_\-]+$/.test(e) && se.warn("通过SDK上报的openid：".concat(e, "可能有误，请检查openid是否正确！").concat(ft))
                } catch (e) {
                    se.error(e)
                }
            }
            var Tt = Object.defineProperty,
                Rt = Object.getOwnPropertyDescriptor,
                Pt = function(e, t, i, n) {
                    for (var a, o = n > 1 ? void 0 : n ? Rt(t, i) : t, r = e.length - 1; r >= 0; r--)(a = e[r]) && (o = (n ? a(t, i, o) : a(o)) || o);
                    return n && o && Tt(t, i, o), o
                },
                yt = Symbol("initializedInstance"),
                Ct = Symbol("autoTrack"),
                St = Symbol("actionTime"),
                At = function(e) {
                    r(n, pt);
                    var t = s(n);

                    function n(e) {
                        var i;
                        if (_(this, n), (i = t.call(this)).env = "production", i.sdk_version = "1.5.12", i.sdk_name = "@dn-sdk/minigame", i.deviceInfo = {}, i.gameInfo = {}, i.session_id = "", i.log_id = 0, i.inited = !1, i.initErrMsg = "", null == wx || !wx.createCanvas) return i.initErrMsg = "不支持非微信小游戏中使用", se.error(i.initErrMsg), c(i);
                        var a = ae();
                        if (n[yt].length >= a.maxSdkInstance) return i.initErrMsg = "初始化超过上限", se.error(i.initErrMsg), c(i);
                        var o = function(e) {
                                return K(e) ? (function(e) {
                                    var t = ["user_action_set_id", "secret_key", "appid", "openid", "unionid", "user_unique_id", "auto_track", "auto_attr", "on_report_fail", "on_report_complete"];
                                    for (var i in e) t.includes(i) || se.warn("Invalid property '".concat(i, "' found in config"))
                                }(e), "number" != typeof e.user_action_set_id ? "user_action_set_id 参数需为 number 类型" : e.user_action_set_id <= 0 ? "user_action_set_id 参数需大于 0" : "string" != typeof e.secret_key ? "secret_key 参数需为 string 类型" : "" === e.secret_key.trim() ? "缺少 secret_key 参数" : 32 !== e.secret_key.length ? "secret_key 参数需为 32 位字符串" : "string" != typeof e.appid ? "appid 参数需为 string 类型" : "" !== e.appid.trim() || "缺少 appid") : "初始化参数需为 object 类型"
                            }(e),
                            r = w();
                        if (!0 !== o) return i.initErrMsg = o, se.error(o), c(i);
                        var s = null == r ? void 0 : r.appId;
                        if (s && s !== e.appid) return i.initErrMsg = "初始化传入的appid与当前小游戏appid不一致", se.error(i.initErrMsg), c(i);
                        i.config = e, oe(e, "auto_track") || (i.config.auto_track = ne("autoTrack")), i.openid = e.openid, i.unionid = e.unionid, i.user_unique_id = e.user_unique_id, i.onReportComplete = e.on_report_complete, i.onReportFail = e.on_report_fail, i.saveValidOpenidToStorage();
                        var u = e.user_action_set_id;
                        return n[yt].includes(u) ? (i.initErrMsg = "同个数据源[".concat(u, "]只能初始化一次"), se.error(i.initErrMsg), i.reportLog({
                            log_type: A,
                            message: i.initErrMsg
                        }), c(i)) : (i.reportLog = i.reportLog.bind(l(i)), i.getTrackBaseInfo = i.getTrackBaseInfo.bind(l(i)), ce.activeDuration = Date.now(), i.initDirectGameConfig(), i.deviceInfo = G(), i.gameInfo = ue(), i.session_id = X(), i.queueManage = new ve({
                            userActionSetId: u,
                            maxLength: a.maxQueueLength,
                            ogEvents: Pe
                        }), i.actionReporter = new dt({
                            getBaseInfo: i.getTrackBaseInfo,
                            reportLog: i.reportLog,
                            queueManager: i.queueManage,
                            configManager: Se,
                            onReportComplete: i.onReportComplete,
                            onReportFail: i.onReportFail
                        }), i.inited = !0, n[yt].push(u), i.useAutoTrack(), i.addDirectGameStatusListener(), i.doReportOnEnterBackground(), "release" === (null == r ? void 0 : r.envVersion) ? (se.info("初始化成功"), c(i)) : (function(e) {
                            var t = e.sdk_version,
                                i = e.default_download_url,
                                n = e.fail_handler;
                            V({
                                conf_name: e.conf_name,
                                conf_key: e.conf_key
                            }).then((function(e) {
                                if (K(e)) {
                                    var a = null == e ? void 0 : e.blackVersions,
                                        o = null == e ? void 0 : e.minVersion,
                                        r = null == e ? void 0 : e.bestVersion,
                                        s = null == e ? void 0 : e.downloadUrl,
                                        c = i;
                                    return s && /^https/.test(s) && (c = s), Q(a) && (null == a ? void 0 : a.indexOf(t)) > -1 ? (null == n || n(), void se.error("初始化失败！当前SDK版本存在兼容问题，请尽快升级至最新版！下载地址：".concat(c))) : o && ie(t, o) < 0 ? (null == n || n(), void se.error("初始化失败！当前SDK版本过低，请尽快升级至最新版！下载地址：".concat(c))) : (r && ie(t, r) < 0 && se.warn("新版本SDK已上线，强烈建议您升级至最新版，尽早享受新特性！下载地址：".concat(c)), void se.info("初始化成功"))
                                }
                                se.info("初始化成功")
                            })).catch((function() {
                                se.info("初始化成功")
                            }))
                        }({
                            conf_name: "mini_game_sdk_common",
                            conf_key: "version",
                            sdk_version: i.sdk_version,
                            default_download_url: "https://sr-home-1257214331.cos.ap-guangzhou.myqcloud.com/sdk/dn-sdk-minigame/dn-sdk-minigame.zip",
                            fail_handler: function() {
                                i.inited = !1
                            }
                        }), mt.requestActionList(), vt(e.openid), c(i)))
                    }
                    return p(n, [{
                        key: "getInitResult",
                        value: function() {
                            return {
                                inited: this.inited,
                                initErrMsg: this.initErrMsg
                            }
                        }
                    }, {
                        key: "track",
                        value: function(e, t) {
                            var i, n;
                            if (!this.inited || !this.queueManage) return se.error("上报失败，请先完成初始化"), {
                                code: 100,
                                message: "未完成初始化或重复初始化导致初始化失败，请先完成初始化"
                            };
                            var a = je.validateActionType(e),
                                o = je.validateActionParam(t);
                            if (a && o) {
                                !this.openid && !this.unionid && se.warn("缺少 openid 或 unionid");
                                var r = ne("actionParamMaxLength");
                                if (JSON.stringify(t || {}).length > r) return se.error("监测到超过".concat(r, "的上报日志：").concat(e, " ").concat(t)), {
                                    code: 102,
                                    message: "action_param 参数过大，不能超过 ".concat(r, " 字符")
                                };
                                var s = !(null == t || !t[Ct]),
                                    c = this.createAction(e, t || {}, s);
                                "release" !== (null == (i = w()) ? void 0 : i.envVersion) && gt(c, "minigame");
                                var l = this.queueManage.addAction(c);
                                return null == (n = this.actionReporter) || n.batchSend(), l
                            }
                            return {
                                code: 101,
                                message: "action_type 或 action_param 参数错误"
                            }
                        }
                    }, {
                        key: "flush",
                        value: function() {
                            var e;
                            null == (e = this.actionReporter) || e.flushSend()
                        }
                    }, {
                        key: "setOpenId",
                        value: function(e) {
                            var t;
                            if (e && "string" == typeof e) return this.openid = e, this.gameInfo.ad_trace_id && !M.getSync(y) && Re.publish("START_APP"), this.flush(), this.saveValidOpenidToStorage(), "release" !== (null == (t = w()) ? void 0 : t.envVersion) && vt(e), {
                                code: 0,
                                message: "成功"
                            };
                            var i = "openid 格式错误";
                            return se.error(i), {
                                code: 101,
                                message: i
                            }
                        }
                    }, {
                        key: "setUnionId",
                        value: function(e) {
                            if (e && "string" == typeof e) return this.unionid = e, this.flush(), {
                                code: 0,
                                message: "成功"
                            };
                            var t = "unionid 格式错误";
                            return se.error(t), {
                                code: 101,
                                message: t
                            }
                        }
                    }, {
                        key: "setUserUniqueId",
                        value: function(e) {
                            if (e && "string" == typeof e) return this.user_unique_id = e, {
                                code: 0,
                                message: "成功"
                            };
                            var t = "user_unique_id 格式错误";
                            return se.error(t), {
                                code: 101,
                                message: t
                            }
                        }
                    }, {
                        key: "getStrategy",
                        value: function(e, t) {
                            var i;
                            if (this.inited)
                                if ("[object Object]" === Object.prototype.toString.call(e))
                                    if ("[object Function]" === Object.prototype.toString.call(t)) {
                                        try {
                                            if ((null == (i = JSON.stringify(e)) ? void 0 : i.length) > 1e4) return void se.error("获取托管策略的入参的字符串长度不能超过10000")
                                        } catch (e) {
                                            se.log("获取托管策略的入参解析异常：", e)
                                        }! function(e, t, i) {
                                            try {
                                                var n, a, o = G(),
                                                    r = {
                                                        sys_info: {
                                                            sdk_ver: "1.5.12",
                                                            os: null == o ? void 0 : o.os,
                                                            os_ver: null == o ? void 0 : o.os_version
                                                        },
                                                        info: {
                                                            user_action_set_id: null == i ? void 0 : i.user_action_set_id,
                                                            secret_key: null == i ? void 0 : i.secret_key,
                                                            app_id: null == i ? void 0 : i.appid,
                                                            sdk_version: "1.5.12"
                                                        }
                                                    },
                                                    s = Object.assign(r, {
                                                        custom_param: e
                                                    }),
                                                    c = Date.now();
                                                try {
                                                    var l = st({
                                                            appid: null == i ? void 0 : i.appid,
                                                            secret_key: null == i ? void 0 : i.secret_key,
                                                            sdk_version: null == i ? void 0 : i.sdk_version,
                                                            timestamp: c
                                                        }),
                                                        u = rt(JSON.stringify(s));
                                                    n = {
                                                        "Client-Time": c,
                                                        "Sign-Value": Qe(u + (null == i ? void 0 : i.user_action_set_id) + (null == i ? void 0 : i.secret_key) + l),
                                                        "Sign-Version": S.signVersion,
                                                        "content-type": "text/plain;charset=UTF-8"
                                                    }, a = u
                                                } catch (l) {
                                                    n = {
                                                        "Client-Time": c
                                                    }, a = s, se.error(l)
                                                }
                                                wx.request({
                                                    url: "https://api.datanexus.qq.com/data-nexus-action/sdk/v1/mini-game/hosting",
                                                    method: "POST",
                                                    timeout: S.requestTimeout,
                                                    header: n,
                                                    data: a,
                                                    success: function(e) {
                                                        if (200 !== (null == e ? void 0 : e.statusCode)) {
                                                            var i = "";
                                                            try {
                                                                i = "object" == d(null == e ? void 0 : e.data) ? JSON.stringify(null == e ? void 0 : e.data) : null == e ? void 0 : e.data
                                                            } catch (e) {
                                                                se.error(e)
                                                            }
                                                            var n = {
                                                                code: "number" == typeof(null == e ? void 0 : e.statusCode) ? -1 * e.statusCode : -888,
                                                                message: "statusCode: ".concat(null == e ? void 0 : e.statusCode, ", data: ").concat(i)
                                                            };
                                                            t(n)
                                                        } else t(null == e ? void 0 : e.data)
                                                    },
                                                    fail: function(e) {
                                                        se.devLog("获取托管策略失败:", e);
                                                        var i = {
                                                            code: "number" == typeof(null == e ? void 0 : e.errno) ? -1 * e.errno : -999,
                                                            message: null == e ? void 0 : e.errMsg
                                                        };
                                                        t(i)
                                                    }
                                                })
                                            } catch (o) {
                                                se.error(o)
                                            }
                                        }(e, t, this.getTrackBaseInfo())
                                    } else se.error("获取托管策略的回调函数需为 function 类型");
                            else se.error("获取托管策略的入参需为 object 类型");
                            else se.error("请先初始化SDK")
                        }
                    }, {
                        key: "doReportOnEnterBackground",
                        value: function() {
                            var e = this;
                            wx.onHide((function() {
                                var t, i;
                                null == (t = e.actionReporter) || t.flushSend(), null == (i = e.queueManage) || i.reportLostNum()
                            }))
                        }
                    }, {
                        key: "getTrackBaseInfo",
                        value: function() {
                            var e = w();
                            return Object.assign({}, this.deviceInfo, function(e, t) {
                                var i = {};
                                return ["user_action_set_id", "appid", "openid", "secret_key", "user_unique_id", "unionid"].forEach((function(t) {
                                    oe(e, t) && (i[t] = e[t])
                                })), i
                            }(this.config), {
                                local_id: k(),
                                sdk_name: this.sdk_name,
                                sdk_version: this.sdk_version,
                                openid: this.openid || B(),
                                unionid: this.unionid,
                                user_unique_id: this.user_unique_id,
                                inner_param: {
                                    app_env_version: e.envVersion,
                                    app_version: e.version
                                }
                            })
                        }
                    }, {
                        key: "createAction",
                        value: function(e, t) {
                            var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            null != t && t[Ct] && delete t[Ct];
                            var n = Date.now();
                            null != t && t[St] && (n = null == t ? void 0 : t[St], delete t[St]);
                            var a = {
                                action_id: X(),
                                action_param: t,
                                action_time: n,
                                action_type: e,
                                is_retry: !1,
                                is_sdk_auto_track: i,
                                retry_count: 0,
                                revised_action_time: q.getRevisedcurrentTimeMillis(),
                                log_id: ++this.log_id,
                                session_id: this.session_id,
                                pkg_channel_id: this.gameInfo.pkg_channel_id,
                                source_scene: this.gameInfo.source_scene,
                                network_type: U(),
                                ad_trace_id: this.gameInfo.ad_trace_id,
                                channel: this.getChannelByActionType(e)
                            };
                            return null != t && t[this.special_method_symbol] && (this.addActionInnerParam(a, "is_special_method", !0), delete t[this.special_method_symbol]), Se.getChannelClaimActionList().indexOf(e) > -1 && this.gameInfo.launch_options && this.addActionInnerParam(a, "launch_options", this.gameInfo.launch_options), ["START_APP", "REGISTER", "RE_ACTIVE"].includes(e) && (this.addActionInnerParam(a, "gdt_directshare_openid", this.gameInfo.gdt_directshare_openid || ""), this.addActionInnerParam(a, "gdt_directshare_clickid", this.gameInfo.gdt_directshare_clickid || "")), a
                        }
                    }, {
                        key: "addActionInnerParam",
                        value: function(e, t, n) {
                            e.inner_param && K(e.inner_param) ? e.inner_param[t] = n : e.inner_param = i({}, t, n)
                        }
                    }, {
                        key: "getChannelByActionType",
                        value: function(e) {
                            var t = "";
                            return Se.getChannelClaimActionList().indexOf(e) > -1 ? t = this.gameInfo.channel || "" : Se.getNoClaimActionList().indexOf(e) > -1 && (t = "UNKNOWN"), t
                        }
                    }, {
                        key: "reportLog",
                        value: function(e) {
                            var t, i, n = {
                                user_action_set_id: null == (t = this.config) ? void 0 : t.user_action_set_id,
                                appid: null == (i = this.config) ? void 0 : i.appid,
                                session_id: this.session_id
                            };
                            F(Object.assign(n, e))
                        }
                    }, {
                        key: "useAutoTrack",
                        value: function() {
                            var e;
                            if (null != (e = this.config) && e.auto_track) {
                                var t = !0,
                                    i = M.getSync(R);
                                (null == i ? void 0 : i.ap) === O ? t = !0 : (null == i ? void 0 : i.ap) === b && (t = !1), "devtools" === G().wx_platform && (t = !0), (new _t).install(this, t ? "all" : "lifecycle"), Ae(), t && qe(), this.getAutoProxyRemoteConfig()
                            }
                        }
                    }, {
                        key: "getAutoProxyRemoteConfig",
                        value: function() {
                            var e, t, i = G();
                            i.os && i.os_version && null != (e = this.config) && e.user_action_set_id && function(e) {
                                return new Promise((function(t) {
                                    wx.request({
                                        method: "POST",
                                        url: "https://api.datanexus.qq.com/data-nexus-config/v1/sdk/minigame/get",
                                        data: e,
                                        timeout: S.requestTimeout,
                                        success: function(e) {
                                            x(e, t, "minigame/get"), Y(e)
                                        },
                                        fail: function(e) {
                                            W(e, "minigame/get")
                                        }
                                    })
                                }))
                            }({
                                conf_name: "MG",
                                conf_param: {
                                    user_action_set_id: null == (t = this.config) ? void 0 : t.user_action_set_id,
                                    sdk_version: this.sdk_version,
                                    os_type: (null == i ? void 0 : i.os) || "",
                                    os_version: re(i.os_version),
                                    device_brand: (null == i ? void 0 : i.device_brand) || "",
                                    weixin_lib_version: (null == i ? void 0 : i.wx_lib_version) || "",
                                    weixin_version: (null == i ? void 0 : i.wx_version) || ""
                                }
                            }).then((function(e) {
                                K(e) && M.setSync(R, e)
                            }))
                        }
                    }, {
                        key: "saveValidOpenidToStorage",
                        value: function() {
                            this.openid && function(e) {
                                return /^[a-zA-Z0-9_-]{28,30}$/.test(e)
                            }(this.openid) && M.setSync(y, this.openid)
                        }
                    }, {
                        key: "initDirectGameConfig",
                        value: function() {
                            try {
                                if (se.log("wx.getDirectAdStatusSync方法是否存在：", wx.getDirectAdStatusSync), wx.getDirectAdStatusSync) {
                                    var e = wx.getDirectAdStatusSync();
                                    se.log("wx.getDirectAdStatusSync方法返回的值info：", e), e.isInMask && e.isInDirectGameAd && (ce.hasDirectGameMask = !0, se.log("SDK初始获取的直玩蒙层状态值：", ce.hasDirectGameMask))
                                }
                            } catch (e) {
                                se.log("获取直玩状态异常：", e)
                            }
                        }
                    }, {
                        key: "addDirectGameStatusListener",
                        value: function() {
                            var e = this;
                            try {
                                se.log("wx.onDirectAdStatusChange方法是否存在：", wx.onDirectAdStatusChange), wx.onDirectAdStatusChange && wx.onDirectAdStatusChange((function(t) {
                                    var i = t.isInMask,
                                        n = t.isEndByAbnormal;
                                    se.log("wx.onDirectAdStatusChange方法返回的值res：", t), se.log("状态切换前，SDK的直玩蒙层状态值：", ce.hasDirectGameMask), ce.hasDirectGameMask && !i && (ce.hasDirectGameMask = !1, se.log("状态切换后，SDK的直玩蒙层状态值：", ce.hasDirectGameMask), e.gameInfo.ad_trace_id && M.setSync(v, e.gameInfo.ad_trace_id), Re.publish("START_APP", {
                                        isEndByAbnormal: !!n
                                    }), Re.publish("ENTER_FOREGROUND"))
                                }))
                            } catch (e) {
                                se.log("监听直玩状态异常：", e)
                            }
                        }
                    }], [{
                        key: "setRequestConcurrency",
                        value: function(e) {
                            dt.setRequestConcurrency(e)
                        }
                    }, {
                        key: "setDebug",
                        value: function(e) {
                            se.debug = e
                        }
                    }]), n
                }(),
                It = e("SDK", At);
            It[yt] = [], Pt([de], It.prototype, "track", 1), Pt([de, function(e, t, i) {
                var n = i.value;
                return i.value = function() {
                    if (this.inited) {
                        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        return n.apply(this, t)
                    }
                    se.error("上报失败，请先完成初始化")
                }, i
            }], It.prototype, "flush", 1), Pt([de], It.prototype, "setOpenId", 1), Pt([de], It.prototype, "setUnionId", 1), Pt([de], It.prototype, "setUserUniqueId", 1), Pt([de], It.prototype, "getStrategy", 1), Pt([de], It.prototype, "doReportOnEnterBackground", 1), Pt([de], It.prototype, "getTrackBaseInfo", 1), Pt([de], It.prototype, "useAutoTrack", 1), Pt([de], It.prototype, "initDirectGameConfig", 1), Pt([de], It.prototype, "addDirectGameStatusListener", 1), t._RF.pop()
        }
    }
}))