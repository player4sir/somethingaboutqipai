System.register("chunks:///_virtual/GameInfoCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameTxt.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./BaseComponent.ts", "./GSocket.ts", "./RoomMgr.ts", "./GameEvent.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Label, l = e.Layout, u = e.UITransform
        }, function(e) {
            d = e.GameTxt
        }, function(e) {
            c = e.Utils
        }, function(e) {
            h = e.GCache
        }, function(e) {
            p = e.AppEvent
        }, function(e) {
            f = e.BaseComponent
        }, function(e) {
            _ = e.GSocket
        }, function(e) {
            g = e.RoomMgr
        }, function(e) {
            m = e.GameEvent
        }],
        execute: function() {
            var C, I, A, E, v, y, S, P, T;
            o._RF.push({}, "5dbda5/r/NAOLbWS6VZ1hvS", "GameInfoCtr", void 0);
            var G = r.ccclass,
                O = r.property;
            e("GameInfoCtr", (C = G("GameInfoCtr"), I = O({
                tooltip: "时间节点",
                type: s
            }), A = O({
                tooltip: "剩余牌张数节点",
                type: s
            }), E = O({
                tooltip: "房间桌子号节点",
                type: s
            }), C((S = t((y = function(e) {
                function t() {
                    for (var t, n, o = arguments.length, r = new Array(o), s = 0; s < o; s++) r[s] = arguments[s];
                    return n = e.call.apply(e, [this].concat(r)) || this, i(n, "timeLabel", S, a(n)), i(n, "leftCardNum", P, a(n)), i(n, "tableNumber", T, a(n)), n.curTime = null, n._reConnectNum = 0, n.event_defents = ((t = {})[p.UPDATE_PRIVATE_ROOM_TABLE_INFO] = "updateTableNumber", t[m.UPDATE_REMAIN_CARDS_COUNT] = "updateRemainCardsCount", t[p.VIEW_BROADCAST_GAME_START] = "updateRemainCardsCount", t), n
                }
                n(t, e);
                var o = t.prototype;
                return o.onLoad = function() {}, o.start = function() {
                    this.initView()
                }, o.initView = function() {
                    this.leftCardNum.string = "0", h.SelectGame.isInPrivateRoom() || (this.tableNumber.node.active = !1, this.tableNumber.node.parent.getComponent(l).updateLayout(), this.timeLabel.node.parent.getComponent(u).setContentSize(160, 61)), this.timeLabel.string = this.refreshTime(), this.updateTime(), this.updateTableNumber()
                }, o.updateRemainCardsCount = function() {
                    var e = c.number_valueOf(g.getInstance().getRemainCardsCount(), 0);
                    this.leftCardNum.string = "" + e
                }, o.updateTableNumber = function() {
                    if (h.SelectGame.isInPrivateRoom()) {
                        var e = h.PrivateData.getPrivateRoomTableInfo();
                        if (c.isNotNull(e)) {
                            var t = c.number_valueOf(e.tableId);
                            this.tableNumber.string = c.string_format(d.private_room_table_info, t), t > 9999 && 0 == this._reConnectNum && (this._reConnectNum++, _.instance.closeConnect({}))
                        }
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
            }(f)).prototype, "timeLabel", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), P = t(y.prototype, "leftCardNum", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), T = t(y.prototype, "tableNumber", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), v = y)) || v)), o._RF.pop()
        }
    }
}))