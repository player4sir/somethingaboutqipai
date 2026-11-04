System.register("chunks:///_virtual/DecorationData.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./Utils.ts", "./AppEvent.ts", "./GameConstant.ts", "./GameRes.ts", "./Encrypto.ts", "./ResLoader.ts", "./LocalStorage.ts", "./EventManager.ts", "./BaseCache.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            n = e.ClientInfo
        }, function(e) {
            a = e.Utils
        }, function(e) {
            o = e.AppEvent
        }, function(e) {
            r = e.GConstants, s = e.StoreKey
        }, function(e) {
            c = e.GamePackage
        }, function(e) {
            l = e.Encrypt
        }, function(e) {
            u = e.resLoader
        }, function(e) {
            d = e.LocalStorage
        }, function(e) {
            _ = e.EventManager
        }, function(e) {
            h = e.BaseCache
        }],
        execute: function() {
            var p, f, m, g, E;
            i._RF.push({}, "5f6ecATAzJEtIaWscHCPRPl", "DecorationData", void 0);
            var v = ((p = {})[154] = {
                    bundle: c.DECORATION_REMOTE,
                    path: "spineAnim/enterAnim/2424",
                    animName: "2424_bj"
                }, p[155] = {
                    bundle: c.DECORATION_REMOTE,
                    path: "spineAnim/enterAnim/2424",
                    animName: "2424_bj"
                }, p[156] = {
                    bundle: c.DECORATION_REMOTE,
                    path: "spineAnim/enterAnim/2423",
                    animName: "2423_bj"
                }, p[157] = {
                    bundle: c.DECORATION_REMOTE,
                    path: "spineAnim/enterAnim/2423",
                    animName: "2423_bj"
                }, p[158] = {
                    bundle: c.DECORATION_REMOTE,
                    path: "spineAnim/enterAnim/2421",
                    animName: "2421_bj"
                }, p[159] = {
                    bundle: c.DECORATION_REMOTE,
                    path: "spineAnim/enterAnim/2421",
                    animName: "2421_bj"
                }, p[160] = {
                    bundle: c.DECORATION_REMOTE,
                    path: "spineAnim/enterAnim/2422",
                    animName: "2422_bj"
                }, p[161] = {
                    bundle: c.DECORATION_REMOTE,
                    path: "spineAnim/enterAnim/2422",
                    animName: "2422_bj"
                }, p),
                T = ((f = {})[r.PrimpType.EnterAnim] = {
                    item_type: -1,
                    item_name: "无进场动画",
                    sort: -1,
                    icon: "image/decoration/empty",
                    props_desc: "默认无进场动画"
                }, f[r.PrimpType.HeadBox] = {
                    item_type: -1,
                    item_name: "默认",
                    sort: -1,
                    icon: "image/decoration/empty",
                    props_desc: "默认无头像框"
                }, f[r.PrimpType.ChatBox] = {
                    item_type: -1,
                    item_name: "默认",
                    sort: -1,
                    icon: "image/decoration/chat_box",
                    props_desc: "默认使用系统聊天框"
                }, f[r.PrimpType.Clock] = {
                    item_type: -1,
                    item_name: "默认",
                    sort: -1,
                    icon: "image/decoration/clock",
                    props_desc: "默认使用系统闹钟"
                }, f[r.PrimpType.RoomTable] = {
                    item_type: -1,
                    item_name: "默认",
                    sort: -1,
                    icon: "image/decoration/room_table",
                    props_desc: "默认使用系统牌桌"
                }, f[r.PrimpType.RoomTableMJ] = {
                    item_type: -1,
                    item_name: "默认",
                    sort: -1,
                    icon: "image/decoration/room_table_mj",
                    props_desc: "默认使用系统牌桌"
                }, f[r.PrimpType.HandCard] = {
                    item_type: -1,
                    item_name: "默认",
                    sort: -1,
                    icon: "image/decoration/hand_card",
                    props_desc: "默认使用系统手牌"
                }, f[r.PrimpType.HandCardMJ] = {
                    item_type: -1,
                    item_name: "默认",
                    sort: -1,
                    icon: "image/decoration/hand_card_mj",
                    props_desc: "默认使用系统麻将手牌"
                }, f),
                R = ((E = {}).default = ((m = {})[r.PrimpType.EnterAnim] = "进场动画", m[r.PrimpType.HeadBox] = "头像框", m[r.PrimpType.ChatBox] = "聊天气泡", m[r.PrimpType.Clock] = "扑克闹钟", m[r.PrimpType.RoomTable] = "扑克牌桌", m[r.PrimpType.RoomTableMJ] = "麻将牌桌", m[r.PrimpType.HandCard] = "扑克手牌", m[r.PrimpType.HandCardMJ] = "麻将手牌", m), E.mjqj = ((g = {})[r.PrimpType.EnterAnim] = "进场动画", g[r.PrimpType.HeadBox] = "头像框", g[r.PrimpType.ChatBox] = "聊天气泡", g[r.PrimpType.RoomTableMJ] = "麻将牌桌", g[r.PrimpType.HandCardMJ] = "麻将手牌", g), E);
            e("DecorationData", function(e) {
                function i(t) {
                    var i;
                    return (i = e.call(this, "DecorationData") || this).__User = null, i._decorationConfig = {}, i._decorationUserInfo = null, i._decorationLogin = {}, i._decorationStatus = {}, i.__User = t, i.initData(), i
                }
                t(i, e);
                var c = i.prototype;
                return c.initData = function() {
                    this._decorationConfig = {}, this._decorationUserInfo = null, this._decorationLogin = {}, this._decorationStatus = {}
                }, c.updateDecorationConfig = function(e, t) {
                    void 0 === t && (t = 0), a.table_isEmpty(e.data) || (a.isNull(this._decorationConfig[t]) ? this._decorationConfig[t] = e : this._decorationConfig[t].ser_ver < e.ser_ver && (this._decorationConfig[t].data = this._decorationConfig[t].data.concat(e.data), this._decorationConfig[t].ser_ver = e.ser_ver))
                }, c.getDecorationConfig = function(e) {
                    var t = this;
                    void 0 === e && (e = 0);
                    var i = [],
                        n = {},
                        o = [];
                    return this._decorationConfig[e] && this._decorationConfig[e].data && (a.isNull(T[e]) || i.push([T[e]]), this._decorationConfig[e].data.forEach((function(e, t, a) {
                        if (e.sort = t, e.item_type == e.related_item) {
                            var r = [e];
                            i.push(r), n[e.related_item] = r
                        } else o.push(e)
                    })), o.forEach((function(e, t, i) {
                        n[e.related_item] && n[e.related_item].push(e)
                    })), i.sort((function(e, i) {
                        var n = t.hasDecoration(e[0].item_type),
                            a = t.hasDecoration(e[1] ? e[1].item_type : 0),
                            o = t.hasDecoration(i[0].item_type),
                            r = t.hasDecoration(i[1] ? i[1].item_type : 0),
                            s = o || r ? 0 : 1;
                        return 1e4 * (n || a ? 0 : 1) + e[0].sort - (1e4 * s + i[0].sort)
                    }))), i
                }, c.getDecorationMallConfig = function(e) {
                    var t = this;
                    void 0 === e && (e = 0);
                    var i = [];
                    return this._decorationConfig[e] && this._decorationConfig[e].data && (this._decorationConfig[e].data.forEach((function(e, t, n) {
                        if (a.isNotNull(e.item_id) && e.item_id > 0) {
                            var o = [e];
                            i.push(o)
                        }
                    })), i.sort((function(e, i) {
                        var n = t.hasDecoration(e[0].related_item) ? 1 : 0,
                            a = t.hasDecoration(i[0].related_item) ? 1 : 0;
                        return 1e4 * n + e[0].sort - (1e4 * a + i[0].sort)
                    }))), i
                }, c.getDecorationConfigVersion = function(e) {
                    var t;
                    return void 0 === e && (e = 0), (null == (t = this._decorationConfig[e]) ? void 0 : t.ser_ver) || 0
                }, c.updateDecorationUserInfo = function(e) {
                    if (this._decorationUserInfo = e, this._decorationLogin)
                        for (var t in this._decorationLogin) {
                            var i = this._decorationLogin[t];
                            i.item_type > 0 && (e.have_props && e.have_props[i.item_type] || (i.icon = "", i.item_type = -1, i.extra_info = {}))
                        }
                }, c.getDecorationUserInfo = function() {
                    return this._decorationUserInfo
                }, c.getDecorationUserInfoPrimpTypes = function() {
                    var e, t = [],
                        i = (null == (e = this._decorationUserInfo) ? void 0 : e.primpTypes) || [],
                        a = n.deviceInfo.isMJCollection ? R.mjqj : R.default;
                    return i.forEach((function(e, i, n) {
                        a[e.id] && t.push({
                            id: e.id,
                            name: a[e.id]
                        })
                    })), t
                }, c.hasDecoration = function(e) {
                    var t, i;
                    return !(null == (t = this._decorationUserInfo) || !t.have_props || null == (i = this._decorationUserInfo) || !i.have_props[e]) || e < 0
                }, c.updateDecorationLogin = function(e) {
                    for (var t in this.print("装扮登录数据", e), e = a.table_verify(e), this._decorationLogin = {}, e) {
                        var i = Number(t);
                        a.string_isEmpty(e[t].extra_info) ? e[t].extra_info = {} : e[t].extra_info = a.table_verify(l.JsonDecode(e[t].extra_info)), this._decorationLogin[i] = e[t]
                    }
                    this.preloadDecoretionLogin()
                }, c.preloadDecoretionLogin = function() {
                    var e = [{
                        url: this.getUserRoomTable(),
                        name: "扑克背景"
                    }, {
                        url: this.getUserRoomTableMJ(),
                        name: "麻将背景"
                    }, {
                        url: this.getUserHandCard(),
                        name: "扑克手牌"
                    }, {
                        url: this.getUserHandCardMJ(),
                        name: "麻将手牌"
                    }];
                    this.preloadDecoretionList(e)
                }, c.preloadDecoretionList = function(e) {
                    var t = this;
                    a.table_isEmpty(e) || e.forEach((function(e, i, n) {
                        var o = e.url,
                            r = e.name;
                        a.string_isHttp(o) && u.loadRemote(o, {
                            ext: ".png"
                        }, (function(e, i) {
                            e ? t.print("预加载装扮错误 err", r, o) : i ? t.print("预加载装扮成功", r, o) : t.print("预加载装扮错误 imageAsset null", r, o)
                        }))
                    }))
                }, c.preloadDecoretionByType = function(e, t) {
                    var i, n = [];
                    if (e == r.PrimpType.RoomTableMJ) n.push({
                        url: null == t || null == (i = t.extra_info) ? void 0 : i.mjDeskIcon,
                        name: "麻将背景"
                    });
                    else if (e == r.PrimpType.Clock) {
                        var a, o;
                        n.push({
                            url: null == t || null == (a = t.extra_info) ? void 0 : a.clockIcon,
                            name: "闹钟背景"
                        }), n.push({
                            url: null == t || null == (o = t.extra_info) ? void 0 : o.clockNumImg,
                            name: "闹钟数字"
                        })
                    } else if (e == r.PrimpType.HandCard) {
                        var s;
                        n.push({
                            url: null == t || null == (s = t.extra_info) ? void 0 : s.pokerHandIcon,
                            name: "扑克手牌"
                        })
                    } else if (e == r.PrimpType.HandCardMJ) {
                        var c;
                        n.push({
                            url: null == t || null == (c = t.extra_info) ? void 0 : c.mjHandIcon,
                            name: "麻将手牌"
                        })
                    }
                    this.preloadDecoretionList(n)
                }, c.isUseDecoration = function(e, t) {
                    return this._decorationLogin[e] ? this._decorationLogin[e].item_type == t : t < 0
                }, c.updateUseDecoration = function(e, t) {
                    (null == e ? void 0 : e.primp_type) > 0 && (this._decorationLogin[e.primp_type] = {
                        item_type: e.prop_id,
                        icon: e.icon,
                        extra_info: t
                    })
                }, c.getUserHeadBox = function() {
                    return this._decorationLogin[r.PrimpType.HeadBox] ? this._decorationLogin[r.PrimpType.HeadBox].icon : ""
                }, c.getUserEnterAnim = function() {
                    return this._decorationLogin[r.PrimpType.EnterAnim] ? this._decorationLogin[r.PrimpType.EnterAnim].item_type : 0
                }, c.getUserChatBox = function() {
                    var e;
                    return this._decorationLogin[r.PrimpType.ChatBox] ? null == (e = this._decorationLogin[r.PrimpType.ChatBox].extra_info) ? void 0 : e.chatUseIcon : ""
                }, c.getUserRoomTable = function() {
                    return this._decorationLogin[r.PrimpType.RoomTable] ? this._decorationLogin[r.PrimpType.RoomTable].icon : ""
                }, c.getUserClock = function() {
                    return this._decorationLogin[r.PrimpType.Clock] ? this._decorationLogin[r.PrimpType.Clock].extra_info : null
                }, c.getUserRoomTableMJ = function() {
                    var e;
                    return this._decorationLogin[r.PrimpType.RoomTableMJ] ? null == (e = this._decorationLogin[r.PrimpType.RoomTableMJ].extra_info) ? void 0 : e.mjDeskIcon : ""
                }, c.getUserHandCard = function() {
                    var e;
                    return this._decorationLogin[r.PrimpType.HandCard] ? null == (e = this._decorationLogin[r.PrimpType.HandCard].extra_info) ? void 0 : e.pokerHandIcon : ""
                }, c.getUserHandCardMJ = function() {
                    var e;
                    return this._decorationLogin[r.PrimpType.HandCardMJ] ? null == (e = this._decorationLogin[r.PrimpType.HandCardMJ].extra_info) ? void 0 : e.mjHandIcon : ""
                }, c.getUserHandCardMJBack = function() {
                    return this._decorationLogin[r.PrimpType.HandCardMJ] ? this._decorationLogin[r.PrimpType.HandCardMJ].icon : ""
                }, c.getUserEnterAnimConfig = function(e) {
                    if (v[e]) return v[e]
                }, c.getDefaultItemType = function(e) {
                    return this._decorationLogin[e] ? this._decorationLogin[e].item_type : 0
                }, c.onExchangeSuccess = function(e) {
                    if (this.print("onExchangeSuccess", e), a.isNull(null == e ? void 0 : e.primp_type) || (null == e ? void 0 : e.primp_type) <= 0) return !1;
                    this.setDecorationItemStatus(null == e ? void 0 : e.primp_type, null == e ? void 0 : e.propsId, !0), _.dispatch(o.NOTIFY_UPDATE_RED_DOT, r.RedDotConf.Decoration), _.dispatch(o.NET_REQ_DECORATION_USER_INFO), _.dispatch(o.NET_REQ_GOODS_INFO, {
                        scene: r.GoodsListID.dressUp
                    })
                }, c.onBuySuccess = function(e) {
                    if (this.print("onBuySuccess", e), a.isNull(null == e ? void 0 : e.primp_type) || (null == e ? void 0 : e.primp_type) <= 0) return !1;
                    var t = [],
                        i = {
                            icon: this.__User.PropsConf.getPropIconUrlByID(null == e ? void 0 : e.item_type),
                            name: null == e ? void 0 : e.item_name,
                            num: 1
                        };
                    return t.push(i), t.length > 0 && (this.setDecorationItemStatus(null == e ? void 0 : e.primp_type, null == e ? void 0 : e.item_type, !0), _.dispatch(o.NOTIFY_UPDATE_RED_DOT, r.RedDotConf.Decoration), _.dispatch(o.NET_REQ_DECORATION_USER_INFO), _.dispatch(o.NET_REQ_GOODS_INFO, {
                        scene: r.GoodsListID.dressUp
                    }), !0)
                }, c.onSelectItem = function(e, t) {
                    var i = this;
                    a.table_isEmpty(t) || (t.forEach((function(t, n, a) {
                        i.setDecorationItemStatus(e, t.item_type, !1)
                    })), _.dispatch(o.NOTIFY_UPDATE_RED_DOT, r.RedDotConf.Decoration))
                }, c.setDecorationItemStatus = function(e, t, i) {
                    this.print("setDecorationItemStatus", e, t, i);
                    var n = String(e),
                        o = String(t);
                    a.isNotNull(this._decorationStatus[n]) ? (this._decorationStatus[n][o] = i ? 1 : null, a.table_isEmpty(this._decorationStatus[n]) && (this._decorationStatus[n] = null)) : i && (this._decorationStatus[n] = {}, this._decorationStatus[n][o] = 1), this.saveDataToLocal(this._decorationStatus)
                }, c.getDecorationItemStatus = function(e, t) {
                    void 0 === e && (e = 0), void 0 === t && (t = 0);
                    var i = String(e);
                    if (a.isNotNull(this._decorationStatus[i])) {
                        var n = String(t);
                        return a.isNotNull(this._decorationStatus[i][n])
                    }
                    return !1
                }, c.getDecorationTabStatus = function(e) {
                    void 0 === e && (e = 0);
                    var t = String(e);
                    return !a.table_isEmpty(this._decorationStatus[t])
                }, c.getDecorationStatus = function() {
                    return !a.table_isEmpty(this._decorationStatus)
                }, c.saveDataToLocal = function(e) {
                    if (e) {
                        var t = a.string_format(s.User_Decoration_Info, this.__User.getUserMid());
                        d.set(t, l.JsonEncode(e))
                    }
                }, c.getDataByLocal = function() {
                    var e = a.string_format(s.User_Decoration_Info, this.__User.getUserMid()),
                        t = d.get(e, "");
                    return a.string_isEmpty(t) ? this._decorationStatus = {} : this._decorationStatus = a.table_verify(l.JsonDecode(t), !0), this._decorationStatus
                }, c.test = function() {
                    var e;
                    this._decorationLogin = ((e = {})[r.PrimpType.HeadBox] = {
                        item_type: 187,
                        icon: "https://dfqppic.266.com/dfqp/images/goods/product/7/187.png?var=1784803730",
                        extra_info: {}
                    }, e[r.PrimpType.EnterAnim] = {
                        item_type: 158,
                        icon: "",
                        extra_info: {}
                    }, e[r.PrimpType.ChatBox] = {
                        item_type: 190,
                        icon: "https://dfqppic.266.com/dfqp/images/goods/product/0/190.png?var=1784862084",
                        extra_info: {
                            chatUseIcon: "https://dfqppic.266.com/dfqp/pic/shop/ebid1bqp.png"
                        }
                    }, e[r.PrimpType.RoomTable] = {
                        item_type: 114,
                        icon: "https://dfqppic.266.com/dfqp/images/goods/product/4/114.png?var=1768903377",
                        extra_info: {}
                    }, e[r.PrimpType.Clock] = {
                        item_type: 135,
                        icon: "https://dfqppic.266.com/dfqp/images/goods/product/5/135.png?var=1710748471",
                        extra_info: {
                            clockIcon: "https://dfqppic.266.com/dfqp/pic/shop/267gblpr.png",
                            clockNumImg: "https://dfqppic.266.com/dfqp/pic/shop/trt9fjar.png"
                        }
                    }, e[r.PrimpType.RoomTableMJ] = {
                        item_type: 196,
                        icon: "https://dfqppic.266.com/dfqp/images/goods/dev/6/196.png?var=1786958656",
                        extra_info: {
                            mjDeskIcon: "https://dfqppic.266.com/dfqp/pic/shop/83cagqpv.png"
                        }
                    }, e[r.PrimpType.HandCard] = {
                        item_type: 199,
                        icon: "https://dfqppic.266.com/dfqp/images/goods/dev/9/199.png?var=1787125813",
                        extra_info: {
                            pokerHandIcon: "https://dfqppic.266.com/dfqp/pic/shop/5c9xidf8.png"
                        }
                    }, e[r.PrimpType.HandCardMJ] = {
                        item_type: 194,
                        icon: "https://dfqppic.266.com/dfqp/images/goods/dev/4/194.png?var=1787127483",
                        extra_info: {
                            mjHandIcon: "https://dfqppic.266.com/dfqp/pic/shop/cycmi06f.jpg"
                        }
                    }, e), this.preloadDecoretionLogin()
                }, i
            }(h)), i._RF.pop()
        }
    }
}))