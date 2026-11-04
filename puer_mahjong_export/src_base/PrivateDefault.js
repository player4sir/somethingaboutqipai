System.register("chunks:///_virtual/PrivateDefault.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./Encrypto.ts", "./PrivateDataBase.ts", "./PrivateInterface.ts"], (function(e) {
    var t, i, n, a, o, r;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            n = e.Utils
        }, function(e) {
            a = e.Encrypt
        }, function(e) {
            o = e.PrivateDataBase
        }, function(e) {
            r = e.PrivateInterfaceOptionType
        }],
        execute: function() {
            i._RF.push({}, "e00e5muqhtC7oidmAiVKBUB", "PrivateDefault", void 0), e("PrivateDefault", function(e) {
                function i() {
                    return e.apply(this, arguments) || this
                }
                t(i, e);
                var o = i.prototype;
                return o.getPrivateRoomOptionInfo = function(e, t, i) {
                    var a = [];
                    if (n.isNull(t)) return a;
                    var o = [];
                    n.table_isEmpty(t.rounds) || t.rounds.forEach((function(e, t, i) {
                        o.push({
                            id: -1,
                            key: n.number_valueOf(e),
                            name: e
                        })
                    }));
                    var s = [];
                    n.table_isEmpty(t.times) || t.times.forEach((function(e, t, i) {
                        s.push({
                            id: -1,
                            key: n.number_valueOf(e),
                            name: e
                        })
                    }));
                    var c = Math.max(o.length, s.length),
                        l = {
                            itemKey: "rounds",
                            itemType: r.Slider,
                            itemName: t.roundsName,
                            itemOptions: o,
                            itemVertical: !1,
                            itemDefault: null,
                            itemOptionsMax: c
                        };
                    if (a.push(l), s.length > 0) {
                        var u = {
                            itemKey: "times",
                            itemType: r.Slider,
                            itemName: "封顶倍数",
                            itemOptions: s,
                            itemVertical: !1,
                            itemDefault: null,
                            itemOptionsMax: c
                        };
                        a.push(u)
                    }
                    return n.table_isEmpty(t.gameExtParams) || t.gameExtParams.forEach((function(e, t, i) {
                        n.isNotNull(e.key) && "extPlayrules" == e.key && n.isNotNull(e.value) && (n.table_isEmpty(e.value.rules) || e.value.rules.forEach((function(e, t, i) {
                            if (n.isNotNull(e.key)) {
                                var o = [];
                                e.options.forEach((function(e, t, i) {
                                    o.push({
                                        id: n.number_valueOf(e.key),
                                        key: n.number_valueOf(e.key),
                                        name: e.name,
                                        configName: e.configName,
                                        custom: e.custom
                                    })
                                }));
                                var r = {
                                    itemKey: e.key,
                                    itemType: e.display,
                                    itemName: e.name,
                                    itemOptions: o,
                                    itemVertical: !0,
                                    itemDefault: null,
                                    itemOptionsMax: -1
                                };
                                a.push(r)
                            }
                        })))
                    })), a
                }, o.getPrivateRoomGameInfo = function(e, t, i) {
                    var o = [];
                    if (n.isNull(t)) return o;
                    if (n.string_isEmpty(i)) return o;
                    var r = a.JsonDecode(i);
                    if (n.isNull(r)) return o;
                    var s = t.diffname || "",
                        c = n.number_valueOf(r.rounds),
                        l = n.number_valueOf(r.times),
                        u = {
                            itemName: "游戏",
                            itemStr: s
                        },
                        d = {
                            itemName: "本轮局数",
                            itemStr: n.string_format("{0}局", c)
                        };
                    if (o.push(u), o.push(d), l > 0) {
                        var _ = {
                            itemName: "封顶倍数",
                            itemStr: n.string_format("{0}倍", l)
                        };
                        o.push(_)
                    }
                    return n.table_isEmpty(t.gameExtParams) || t.gameExtParams.forEach((function(e, t, i) {
                        n.isNotNull(e.key) && "extPlayrules" == e.key && n.isNotNull(e.value) && !n.table_isEmpty(e.value.rules) && e.value.rules.forEach((function(e, t, i) {
                            n.isNotNull(e.key) && !n.isNull(r[e.key]) && e.options.forEach((function(t, i, a) {
                                if (t.key == n.number_valueOf(r[e.key])) {
                                    var s = {
                                        itemName: "本轮规则",
                                        itemStr: t.name
                                    };
                                    o.push(s)
                                }
                            }))
                        }))
                    })), o
                }, o.checkPrivateItemInfo = function(e, t) {
                    return null == e || e.itemId.forEach((function(e, i, n) {
                        e > 0 && t.push(e)
                    })), {
                        param: e,
                        DIYIds: t
                    }
                }, i
            }(o)), i._RF.pop()
        }
    }
}))