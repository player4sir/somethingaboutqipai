System.register("chunks:///_virtual/GameInfoCtr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameTxt.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./BaseComponent.ts", "./RoomMgr6.ts", "./GameEvent6.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Label, u = e.Layout, l = e.UITransform
        }, function(e) {
            d = e.GameTxt
        }, function(e) {
            c = e.Utils
        }, function(e) {
            h = e.GCache
        }, function(e) {
            p = e.AppEvent
        }, function(e) {
            m = e.BaseComponent
        }, function(e) {
            _ = e.RoomMgr
        }, function(e) {
            g = e.GameEvent
        }],
        execute: function() {
            var f, C, E, S, A, I, G, y, v, P;
            o._RF.push({}, "0d170bHjllDhaA2eHd27gI4", "GameInfoCtr", void 0);
            var T = r.ccclass,
                b = r.property,
                O = r.menu;
            e("GameInfoCtr", (f = T("GameInfoCtr"), C = O("prefab/subGame/mj/GameInfoCtr"), E = b({
                tooltip: "时间节点",
                type: s
            }), S = b({
                tooltip: "剩余牌张数节点",
                type: s
            }), A = b({
                tooltip: "房间桌子号节点",
                type: s
            }), f(I = C((y = t((G = function(e) {
                function t() {
                    for (var t, n, o = arguments.length, r = new Array(o), s = 0; s < o; s++) r[s] = arguments[s];
                    return n = e.call.apply(e, [this].concat(r)) || this, a(n, "timeLabel", y, i(n)), a(n, "leftCardNum", v, i(n)), a(n, "tableNumber", P, i(n)), n.curTime = null, n.event_defents = ((t = {})[p.UPDATE_PRIVATE_ROOM_TABLE_INFO] = "updateTableNumber", t[g.UPDATE_REMAIN_CARDS_COUNT] = "updateRemainCardsCount", t[g.VIEW_BROADCAST_GAME_START] = "updateRemainCardsCount", t), n
                }
                n(t, e);
                var o = t.prototype;
                return o.onLoad = function() {}, o.start = function() {
                    this.initView()
                }, o.initView = function() {
                    this.leftCardNum.string = "0", h.SelectGame.isInPrivateRoom() || (this.tableNumber.node.active = !1, this.tableNumber.node.parent.getComponent(u).updateLayout(), this.timeLabel.node.parent.getComponent(l).setContentSize(160, 61)), this.timeLabel.string = this.refreshTime(), this.updateTime(), this.updateTableNumber()
                }, o.updateRemainCardsCount = function() {
                    var e = c.number_valueOf(_.getInstance().getRemainCardsCount(), 0);
                    this.leftCardNum.string = "" + e
                }, o.updateTableNumber = function() {
                    if (h.SelectGame.isInPrivateRoom()) {
                        var e = h.PrivateData.getPrivateRoomTableInfo();
                        c.isNotNull(e) && (this.tableNumber.string = c.string_format(d.private_room_table_info, e.tableId))
                    }
                }, o.updateTime = function() {
                    var e, t = this;
                    this.timeLabel.unscheduleAllCallbacks(), 0 == (null == (e = this.curTime) ? void 0 : e.seconds) ? this.timeLabel.schedule((function() {
                        t.timeLabel.string = t.refreshTime()
                    }), 60) : this.timeLabel.scheduleOnce((function() {
                        t.curTime = null, t.timeLabel.string = t.refreshTime(), t.updateTime()
                    }), 60 - this.curTime.seconds)
                }, o.refreshTime = function() {
                    if (!this.curTime || this.curTime.minutes >= 60) {
                        var e = new Date;
                        this.curTime = {
                            hours: e.getHours(),
                            minutes: e.getMinutes(),
                            seconds: e.getSeconds()
                        }
                    } else this.curTime.minutes++;
                    return this.curTime.minutes >= 60 && (this.curTime.minutes = 0, this.curTime.hours++, this.curTime.hours >= 24 && (this.curTime.hours = 0)), (this.curTime.hours < 10 ? "0" + this.curTime.hours : "" + this.curTime.hours) + ":" + (this.curTime.minutes < 10 ? "0" + this.curTime.minutes : "" + this.curTime.minutes)
                }, t
            }(m)).prototype, "timeLabel", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), v = t(G.prototype, "leftCardNum", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), P = t(G.prototype, "tableNumber", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), I = G)) || I) || I)), o._RF.pop()
        }
    }
}))