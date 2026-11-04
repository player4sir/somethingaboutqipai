System.register("chunks:///_virtual/HuanSanZhangCtr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./EventManager.ts", "./BaseComponent.ts", "./AppControler.ts", "./PlayerMgr6.ts", "./RoomMgr6.ts", "./FXJEvent3.ts", "./GameEvent6.ts", "./FXJCmd3.ts", "./CardUtil3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f, C, E, S, A, I, G;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, u = e.Animation, l = e.Sprite, d = e.Button
        }, function(e) {
            c = e.Utils
        }, function(e) {
            h = e.GCache
        }, function(e) {
            p = e.AppEvent
        }, function(e) {
            m = e.EventManager
        }, function(e) {
            _ = e.BaseComponent
        }, function(e) {
            g = e.AppControler
        }, function(e) {
            f = e.PlayerMgr
        }, function(e) {
            C = e.RoomMgr, E = e.ROOM_DATA_TYPE
        }, function(e) {
            S = e.FXJEvent
        }, function(e) {
            A = e.GameEvent
        }, function(e) {
            I = e.FXJCmdHead
        }, function(e) {
            G = e.CardUtil
        }],
        execute: function() {
            var y, v, P, T, b, O, R, M, N, U, D, L, B, w, k, H, x, F;
            o._RF.push({}, "1facfg87CRAlqBpazIfktxC", "HuanSanZhangCtr", void 0);
            var V = r.ccclass,
                J = r.property,
                j = r.menu;
            e("HuanSanZhangCtr", (y = V("HuanSanZhangCtr"), v = j("prefab/subGame/mj/HuanSanZhangCtr"), P = J({
                tooltip: "按钮节点",
                type: s
            }), T = J({
                tooltip: "tips节点",
                type: s
            }), b = J({
                tooltip: "确认按钮",
                type: s
            }), O = J({
                tooltip: "玩家1的牌",
                type: s
            }), R = J({
                tooltip: "玩家2的牌",
                type: s
            }), M = J({
                tooltip: "玩家3的牌",
                type: s
            }), N = J({
                tooltip: "玩家4的牌",
                type: s
            }), y(U = v((L = t((D = function(e) {
                function t() {
                    for (var t, n, o = arguments.length, r = new Array(o), s = 0; s < o; s++) r[s] = arguments[s];
                    return n = e.call.apply(e, [this].concat(r)) || this, a(n, "btnsNode", L, i(n)), a(n, "tipNode", B, i(n)), a(n, "commitBtn", w, i(n)), a(n, "cardNode1", k, i(n)), a(n, "cardNode2", H, i(n)), a(n, "cardNode3", x, i(n)), a(n, "cardNode4", F, i(n)), n.initPos = [], n._info = void 0, n.animationComponent = void 0, n._handle = null, n.event_defents = ((t = {})[S.VIEW_BROADCAST_ONE_HUAN_SAN_ZHANG_RESULT] = "onOneHuanSanZhangResult", t[S.VIEW_BROADCAST_ALL_HUAN_SAN_ZHANG] = "onAllHuanSanZhangResult", t[A.PRIVATE_SETTLE] = "onClose", t[S.BROADCAST_GAME_OVER] = "onClose", t[p.EVENT_GAME_OVER] = "onClose", t[S.VIEW_UPDATE_HUAN_SAN_ZHANG_CARDS] = "onUpdateSelCards", t), n
                }
                n(t, e);
                var o = t.prototype;
                return o.onLoad = function() {}, o.start = function() {
                    this.initPos = [];
                    for (var e = [this.cardNode1, this.cardNode2, this.cardNode3, this.cardNode4], t = 0; t < e.length; t++) this.initPos.push(e[t].getPosition())
                }, o.init = function() {
                    this.registerListeners()
                }, o.addGameComp = function() {
                    null == this.node && (this.node = c.create_2DNode()), this.node.addComponent("MJGameComponent");
                    var e = this.node.getComponent("MJGameComponent");
                    return "function" == typeof e.setDelegate && e.setDelegate(this), e
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("MJGameComponent");
                    if (c.isNull(t) && (t = this.addGameComp()), "function" == typeof t[e]) {
                        for (var n, a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) i[o - 1] = arguments[o];
                        return (n = t)[e].apply(n, i)
                    }
                }, o.onClickCommit = function(e, t) {
                    var n, a = C.getInstance().getGameInfoByTag(E.HUAN_SAN_ZHANG_CARD);
                    if (3 == (null == a || null == (n = a.cards) ? void 0 : n.length) && G.isSameHuaSe(a.cards)) {
                        var i = {
                            seatId: f.getInstance().getMyPlayerInfo().seatId,
                            cards: a.cards
                        };
                        m.dispatch(A.SEND_GAME_OPERATION, i, I.C2S.USER_HUAN_SAN_ZHANG_RESULT)
                    } else g.getInstance().showToast("请选择3张相同花色的手牌")
                }, o.onClickReset = function(e, t) {
                    m.dispatch(S.VIEW_RESET_HUAN_SAN_ZHANG), this.onUpdateSelCards()
                }, o.onReconnectSuccess = function() {
                    var e, t, n = C.getInstance().getGameInfoByTag(E.HUAN_SAN_ZHANG_STATUS);
                    if ((null == n || null == (e = n.cards) ? void 0 : e.length) > 0 && (null == n || null == (t = n.status) ? void 0 : t.length) > 0)
                        for (var a = n.status, i = 0; i < a.length; i++) i + 1 == C.getInstance().mySeatId && 0 == a[i] && this.onHuanSanZhangStart(), 1 == a[i] && this.onOneHuanSanZhangResult(null, {
                            seatId: i + 1
                        });
                    else this.onClose()
                }, o.onHuanSanZhangStart = function() {
                    this.node.active = !0
                }, o.onOneHuanSanZhangResult = function(e, t) {
                    C.getInstance().isMySelfSeat(t.seatId) && (this.btnsNode.active = !1, this.tipNode.active = !1);
                    var n = this.doGameCompFun("getRelativeLocalDir", t.seatId);
                    this.node.active = !0, [this.cardNode1, this.cardNode2, this.cardNode3, this.cardNode4][n].active = !0
                }, o.onAllHuanSanZhangResult = function(e, t) {
                    this._resetAnim(), this._stopHandle(), this._info = t;
                    var n = [this.cardNode1, this.cardNode2, this.cardNode3, this.cardNode4];
                    this.animationComponent = this.node.getComponent(u), this.animationComponent.defaultClip = this.animationComponent.clips[0], h.PrivateData.isTwoPlayerModule() && this.animationComponent.clips[1] && (this.animationComponent.defaultClip = this.animationComponent.clips[1], n = [this.cardNode1, this.cardNode3]);
                    for (var a = 0; a < n.length; a++) n[a].active = !0;
                    this.animationComponent.on(u.EventType.FINISHED, this.onAnimFinish, this), this.animationComponent.play()
                }, o._resetAnim = function() {
                    this.animationComponent && (this.animationComponent.stop(), this.animationComponent.off(u.EventType.FINISHED, this.onAnimFinish, this), this.animationComponent = null)
                }, o._stopHandle = function() {
                    this._handle && (this.unschedule(this._handle), this._handle = null)
                }, o.onAnimFinish = function() {
                    var e = this;
                    this._resetAnim(), console.log("换三张------------onAnimFinish"), this._stopHandle(), this._handle = this.scheduleOnce((function() {
                        var t;
                        e._stopHandle(), null != (t = e.node) && t.isValid ? (e.node.active = !1, console.log("换三张------------111111111111111"), e._resetNodeCard(), m.dispatch(S.VIEW_BROADCAST_HUAN_SAN_ZHANG_HANDCARD, e._info)) : console.log("换三张------------22222222")
                    }), 1)
                }, o._resetNodeCard = function() {
                    for (var e = [this.cardNode1, this.cardNode2, this.cardNode3, this.cardNode4], t = 0; t < e.length; t++) e[t].active = !1, this.initPos[t] && e[t].setPosition(this.initPos[t])
                }, o.onUpdateSelCards = function() {
                    var e, t = !1,
                        n = C.getInstance().getGameInfoByTag(E.HUAN_SAN_ZHANG_CARD);
                    3 == (null == n || null == (e = n.cards) ? void 0 : e.length) && G.isSameHuaSe(null == n ? void 0 : n.cards) && (t = !0), this.commitBtn.getComponent(l).grayscale = !t, this.commitBtn.getComponent(d).interactable = t, this.commitBtn.getChildByName("icon").getComponent(l).grayscale = !t
                }, o.resetInit = function() {
                    this._resetNodeCard(), this.btnsNode.active = !0, this.tipNode.active = !0, this.commitBtn.getComponent(l).grayscale = !1, this.commitBtn.getComponent(d).interactable = !0, this.commitBtn.getChildByName("icon").getComponent(l).grayscale = !1
                }, o.onClose = function() {
                    this._resetAnim(), this._stopHandle(), this.node.active = !1
                }, o.onDestroy = function() {
                    this.onAnimFinish(), this._stopHandle()
                }, t
            }(_)).prototype, "btnsNode", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), B = t(D.prototype, "tipNode", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), w = t(D.prototype, "commitBtn", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), k = t(D.prototype, "cardNode1", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), H = t(D.prototype, "cardNode2", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), x = t(D.prototype, "cardNode3", [M], {
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
            }), U = D)) || U) || U)), o._RF.pop()
        }
    }
}))