System.register("chunks:///_virtual/PrivateXueZhanMj.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./Encrypto.ts", "./PrivateDataBase.ts", "./PrivateInterface.ts"], (function(e) {
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
            i._RF.push({}, "71606FYHtZJ2qycThwm3JKH", "PrivateXueZhanMj", void 0), e("PrivateXueZhanMj", function(e) {
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
                        },
                        u = {
                            itemKey: "times",
                            itemType: r.Slider,
                            itemName: "封顶番数",
                            itemOptions: s,
                            itemVertical: !1,
                            itemDefault: null,
                            itemOptionsMax: c
                        };
                    return a.push(l), a.push(u), n.table_isEmpty(t.gameExtParams) || t.gameExtParams.forEach((function(e, t, i) {
                        n.isNotNull(e.key) && "extPlayrules" == e.key && n.isNotNull(e.value) && (n.table_isEmpty(e.value.playmodes) || e.value.playmodes.forEach((function(e, t, i) {
                            if (n.isNotNull(e.key) && "playmode" == e.key) {
                                var o = {
                                    itemKey: e.key,
                                    itemType: e.display,
                                    itemName: e.name,
                                    itemOptions: e.options,
                                    itemVertical: !1,
                                    itemDefault: null,
                                    itemOptionsMax: -1
                                };
                                a.push(o)
                            }
                        })), n.table_isEmpty(e.value.rules) || e.value.rules.forEach((function(e, t, i) {
                            if (n.isNotNull(e.key) && ("rules_0_1" == e.key || "rules_2_1" == e.key)) {
                                var o = [];
                                e.options.forEach((function(e, t, i) {
                                    o.push({
                                        id: e.id || e.key,
                                        key: e.key,
                                        name: e.name
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
                        u = r.playmode,
                        d = r.rulesKey,
                        _ = r[d],
                        h = {
                            itemName: "游戏",
                            itemStr: s
                        },
                        p = {
                            itemName: "本轮局数",
                            itemStr: n.string_format("{0}局", c)
                        },
                        f = {
                            itemName: "封顶番数",
                            itemStr: n.string_format("{0}番", l)
                        };
                    return o.push(h), o.push(p), o.push(f), n.table_isEmpty(t.gameExtParams) || t.gameExtParams.forEach((function(e, t, i) {
                        if (n.isNotNull(e.key) && "extPlayrules" == e.key && n.isNotNull(e.value) && (n.table_isEmpty(e.value.playmodes) || e.value.playmodes.forEach((function(e, t, i) {
                                if (n.isNotNull(e.key) && "playmode" == e.key) {
                                    var a = "";
                                    e.options.forEach((function(e, t, i) {
                                        e.key == u && (a = e.name)
                                    }));
                                    var r = {
                                        itemName: "本轮玩法",
                                        itemStr: a
                                    };
                                    o.push(r)
                                }
                            })), !n.table_isEmpty(e.value.rules))) {
                            var a = "";
                            e.value.rules.forEach((function(e, t, i) {
                                !n.isNotNull(e.key) || e.key != d && "rules_2_1" != e.key || (e.key == d ? n.table_isEmpty(_) || e.options.forEach((function(e, t, i) {
                                    for (var o = 0; o < _.length; o++)
                                        if (e.key == _[o]) {
                                            n.string_isEmpty(a) || (a += ","), a += e.name;
                                            break
                                        }
                                })) : e.options.forEach((function(t, i, o) {
                                    t.key == r[e.key] && (n.string_isEmpty(a) || (a += ","), a += t.name)
                                })))
                            }));
                            var s = {
                                itemName: "本轮规则",
                                itemStr: a
                            };
                            o.push(s)
                        }
                    })), o
                }, o.checkPrivateRoomGameInfo = function(e, t) {
                    var i = this.__PrivateData.getPrivateRoomConfigByGameId(e);
                    if (n.isNull(i) || n.string_isEmpty(t)) return t;
                    var a = t.playmode,
                        o = "rules_0_1",
                        r = null;
                    return t.DIYIds = [], n.table_isEmpty(i.gameExtParams) || i.gameExtParams.forEach((function(e, i, s) {
                        if (n.isNotNull(e.key) && "extPlayrules" == e.key && n.isNotNull(e.value)) {
                            if (n.table_isEmpty(e.value.playmodes) || e.value.playmodes.forEach((function(e, i, s) {
                                    n.isNotNull(e.key) && "playmode" == e.key && e.options.forEach((function(e, i, n) {
                                        if (e.key == a && (Object.keys(e.include).forEach((function(e) {
                                                r || (r = e)
                                            })), o != r)) {
                                            var s = t[o];
                                            t[r] = s, delete t[o], o = r
                                        }
                                    }))
                                })), !n.table_isEmpty(e.value.rules)) {
                                var c = [];
                                e.value.rules.forEach((function(e, t, i) {
                                    n.isNotNull(e.key) && e.key == o && (c = e.options)
                                }));
                                var l = null;
                                if (c.forEach((function(e) {
                                        0 == e.defaultType && (l = e)
                                    })), l) {
                                    var u = !1;
                                    t[o] && t[o].length > 0 && t[o].forEach((function(e) {
                                        e == l.key && (u = !0), t.DIYIds.push(e)
                                    })), u ? t.DIYIds = t.DIYIds.filter((function(e) {
                                        return e != l.key
                                    })) : t.DIYIds.push(l.key)
                                }
                            }
                            e.value.rules.forEach((function(e, i, a) {
                                n.isNotNull(e.key) && "rules_2_1" == e.key && e.options.forEach((function(i) {
                                    i.key == t[e.key] && t.DIYIds.push(i.key)
                                }))
                            }))
                        }
                    })), t.rulesKey = o, t
                }, o.checkPrivateItemInfo = function(e, t) {
                    return "playmode" == (null == e ? void 0 : e.itemKey) && (e.itemId = []), null == e || e.itemId.forEach((function(e, i, n) {
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