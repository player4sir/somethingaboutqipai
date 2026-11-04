System.register("chunks:///_virtual/HuanSanZhangCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AppEvent.ts", "./EventManager.ts", "./BaseComponent.ts", "./AppControler.ts", "./PlayerMgr.ts", "./RoomMgr.ts", "./FXJEvent.ts", "./GameEvent.ts", "./FXJCmd.ts", "./CardUtil.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m, C, I, A, E;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, l = e.Animation, u = e.Sprite, d = e.Button
        }, function(e) {
            c = e.AppEvent
        }, function(e) {
            h = e.EventManager
        }, function(e) {
            p = e.BaseComponent
        }, function(e) {
            f = e.AppControler
        }, function(e) {
            _ = e.PlayerMgr
        }, function(e) {
            g = e.RoomMgr, m = e.ROOM_DATA_TYPE
        }, function(e) {
            C = e.FXJEvent
        }, function(e) {
            I = e.GameEvent
        }, function(e) {
            A = e.FXJCmdHead
        }, function(e) {
            E = e.CardUtil
        }],
        execute: function() {
            var v, y, S, P, T, G, O, R, N, b, D, L, M, U, w, B, H, F;
            o._RF.push({}, "fa3e7IRknJB5aY9Na3BUUJS", "HuanSanZhangCtr", void 0);
            var k = r.ccclass,
                V = r.property,
                x = r.menu;
            e("HuanSanZhangCtr", (v = k("HuanSanZhangCtr"), y = x("prefab/game/HuanSanZhangCtr"), S = V({
                tooltip: "按钮节点",
                type: s
            }), P = V({
                tooltip: "tips节点",
                type: s
            }), T = V({
                tooltip: "确认按钮",
                type: s
            }), G = V({
                tooltip: "玩家1的牌",
                type: s
            }), O = V({
                tooltip: "玩家2的牌",
                type: s
            }), R = V({
                tooltip: "玩家3的牌",
                type: s
            }), N = V({
                tooltip: "玩家4的牌",
                type: s
            }), v(b = y((L = t((D = function(e) {
                function t() {
                    for (var t, n, o = arguments.length, r = new Array(o), s = 0; s < o; s++) r[s] = arguments[s];
                    return n = e.call.apply(e, [this].concat(r)) || this, i(n, "btnsNode", L, a(n)), i(n, "tipNode", M, a(n)), i(n, "commitBtn", U, a(n)), i(n, "cardNode1", w, a(n)), i(n, "cardNode2", B, a(n)), i(n, "cardNode3", H, a(n)), i(n, "cardNode4", F, a(n)), n.initPos = [], n._info = void 0, n.animationComponent = void 0, n._handle = null, n.event_defents = ((t = {})[C.VIEW_BROADCAST_ONE_HUAN_SAN_ZHANG_RESULT] = "onOneHuanSanZhangResult", t[C.VIEW_BROADCAST_ALL_HUAN_SAN_ZHANG] = "onAllHuanSanZhangResult", t[I.PRIVATE_SETTLE] = "onClose", t[C.BROADCAST_GAME_OVER] = "onClose", t[c.EVENT_GAME_OVER] = "onClose", t[C.VIEW_UPDATE_HUAN_SAN_ZHANG_CARDS] = "onUpdateSelCards", t), n
                }
                n(t, e);
                var o = t.prototype;
                return o.onLoad = function() {}, o.start = function() {
                    this.initPos = [];
                    for (var e = [this.cardNode1, this.cardNode2, this.cardNode3, this.cardNode4], t = 0; t < e.length; t++) this.initPos.push(e[t].getPosition())
                }, o.init = function() {
                    this.registerListeners()
                }, o.onClickCommit = function(e, t) {
                    var n, i = g.getInstance().getGameInfoByTag(m.HUAN_SAN_ZHANG_CARD);
                    if (3 == (null == i || null == (n = i.cards) ? void 0 : n.length) && E.isSameHuaSe(i.cards)) {
                        var a = _.getInstance().getMyPlayerInfo();
                        if (a) {
                            var o = {
                                seatId: a.seatId,
                                cards: i.cards
                            };
                            h.dispatch(I.SEND_GAME_OPERATION, o, A.C2S.USER_HUAN_SAN_ZHANG_RESULT)
                        }
                    } else f.getInstance().showToast("请选择3张相同花色的手牌")
                }, o.onClickReset = function(e, t) {
                    h.dispatch(C.VIEW_RESET_HUAN_SAN_ZHANG), this.onUpdateSelCards()
                }, o.onReconnectSuccess = function() {
                    var e, t, n = g.getInstance().getGameInfoByTag(m.HUAN_SAN_ZHANG_STATUS);
                    if ((null == n || null == (e = n.cards) ? void 0 : e.length) > 0 && (null == n || null == (t = n.status) ? void 0 : t.length) > 0)
                        for (var i = n.status, a = 0; a < i.length; a++) a + 1 == g.getInstance().mySeatId && 0 == i[a] && this.onHuanSanZhangStart(), 1 == i[a] && this.onOneHuanSanZhangResult(null, {
                            seatId: a + 1
                        });
                    else this.onClose()
                }, o.onHuanSanZhangStart = function() {
                    this.node.active = !0
                }, o.onOneHuanSanZhangResult = function(e, t) {
                    g.getInstance().isMySelfSeat(t.seatId) && (this.btnsNode.active = !1, this.tipNode.active = !1);
                    var n = E.calculatePlayerSeat(g.getInstance().mySeatId, t.seatId);
                    this.node.active = !0, [this.cardNode1, this.cardNode2, this.cardNode3, this.cardNode4][n].active = !0
                }, o.onAllHuanSanZhangResult = function(e, t) {
                    this._info = t;
                    for (var n = [this.cardNode1, this.cardNode2, this.cardNode3, this.cardNode4], i = 0; i < n.length; i++) n[i].active = !0;
                    this._resetAnim(), this._stopHandle(), this.animationComponent = this.node.getComponent(l), this.animationComponent.on(l.EventType.FINISHED, this.onAnimFinish, this), this.animationComponent.play()
                }, o._resetAnim = function() {
                    this.animationComponent && (this.animationComponent.stop(), this.animationComponent.off(l.EventType.FINISHED, this.onAnimFinish, this), this.animationComponent = null)
                }, o._stopHandle = function() {
                    this._handle && (this.unschedule(this._handle), this._handle = null)
                }, o.onAnimFinish = function() {
                    var e = this;
                    this._resetAnim(), console.log("换三张------------onAnimFinish"), this._stopHandle(), this._handle = this.scheduleOnce((function() {
                        var t;
                        e._stopHandle(), null != (t = e.node) && t.isValid ? (e.node.active = !1, console.log("换三张------------111111111111111"), e._resetNodeCard(), h.dispatch(C.VIEW_BROADCAST_HUAN_SAN_ZHANG_HANDCARD, e._info)) : console.log("换三张------------22222222")
                    }), 1)
                }, o._resetNodeCard = function() {
                    for (var e = [this.cardNode1, this.cardNode2, this.cardNode3, this.cardNode4], t = 0; t < e.length; t++) e[t].active = !1, this.initPos[t] && e[t].setPosition(this.initPos[t])
                }, o.onUpdateSelCards = function() {
                    var e, t = !1,
                        n = g.getInstance().getGameInfoByTag(m.HUAN_SAN_ZHANG_CARD);
                    3 == (null == n || null == (e = n.cards) ? void 0 : e.length) && E.isSameHuaSe(null == n ? void 0 : n.cards) && (t = !0), this.commitBtn.getComponent(u).grayscale = !t, this.commitBtn.getComponent(d).interactable = t, this.commitBtn.getChildByName("icon").getComponent(u).grayscale = !t
                }, o.resetInit = function() {
                    this._resetNodeCard(), this.btnsNode.active = !0, this.tipNode.active = !0, this.commitBtn.getComponent(u).grayscale = !1, this.commitBtn.getComponent(d).interactable = !0, this.commitBtn.getChildByName("icon").getComponent(u).grayscale = !1
                }, o.onClose = function() {
                    this._resetAnim(), this._stopHandle(), this.node.active = !1
                }, o.onDestroy = function() {
                    this.onAnimFinish(), this._stopHandle()
                }, t
            }(p)).prototype, "btnsNode", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), M = t(D.prototype, "tipNode", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), U = t(D.prototype, "commitBtn", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), w = t(D.prototype, "cardNode1", [G], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), B = t(D.prototype, "cardNode2", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), H = t(D.prototype, "cardNode3", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), F = t(D.prototype, "cardNode4", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), b = D)) || b) || b)), o._RF.pop()
        }
    }
}))