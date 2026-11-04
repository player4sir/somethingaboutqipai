System.register("chunks:///_virtual/PrivatePaoDeKuai.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./Encrypto.ts", "./PrivateDataBase.ts", "./PrivateInterface.ts"], (function(e) {
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
            i._RF.push({}, "abd4ah+BAVFwJmYxAiwD8C6", "PrivatePaoDeKuai", void 0), e("PrivatePaoDeKuai", function(e) {
                function i() {
                    return e.apply(this, arguments) || this
                }
                t(i, e);
                var o = i.prototype;
                return o.getPrivateRoomOptionInfo = function(e, t) {
                    var i = [];
                    if (n.isNull(t)) return i;
                    var a = [];
                    n.table_isEmpty(t.rounds) || t.rounds.forEach((function(e, t, i) {
                        a.push({
                            id: -1,
                            key: n.number_valueOf(e),
                            name: e
                        })
                    }));
                    var o = [];
                    n.table_isEmpty(t.times) || t.times.forEach((function(e, t, i) {
                        o.push({
                            id: -1,
                            key: n.number_valueOf(e),
                            name: e
                        })
                    }));
                    var s = Math.max(a.length, o.length),
                        c = {
                            itemKey: "rounds",
                            itemType: r.Slider,
                            itemName: t.roundsName,
                            itemOptions: a,
                            itemDefault: null,
                            itemOptionsMax: s
                        };
                    return i.push(c), i
                }, o.getPrivateRoomGameInfo = function(e, t, i) {
                    var o = [];
                    if (n.isNull(t)) return o;
                    if (n.string_isEmpty(i)) return o;
                    var r = a.JsonDecode(i);
                    if (n.isNull(r)) return o;
                    var s = t.diffname || "",
                        c = n.number_valueOf(r.rounds),
                        l = (n.number_valueOf(r.times), {
                            itemName: "游戏",
                            itemStr: s
                        }),
                        u = {
                            itemName: "本轮局数",
                            itemStr: n.string_format("{0}局", c)
                        };
                    return o.push(l), o.push(u), o
                }, i
            }(o)), i._RF.pop()
        }
    }
}))