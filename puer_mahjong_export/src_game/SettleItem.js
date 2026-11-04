System.register("chunks:///_virtual/SettleItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./GameConstant.ts", "./SpriteLoad.ts", "./EventManager.ts", "./BaseComponent.ts", "./GameNodeHeadPrefabCtr.ts", "./GamePrivilegeBubblePrefabCtr.ts", "./NickComponentCtr.ts", "./nodeHeadExtraInfoPrefabCtr.ts", "./GameHeadDecorationPrefabCtr.ts", "./PlayerMgr.ts", "./RoomMgr.ts", "./SettleMgr.ts", "./FXJEvent.ts", "./FXJRes.ts", "./GameRuleConfig.ts", "./GameSettleConfig.ts", "./NodeCardCtr.ts", "./CardUtil.ts", "./Card.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m, C, I, A, E, v, y, S, P, T, G, O, R, N, b, D, L, M, U, w;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.SpriteAtlas, l = e.Prefab, u = e.Sprite, d = e.Label, c = e.Node, h = e.UITransform, p = e.Vec2, f = e.instantiate
        }, function(e) {
            _ = e.Utils
        }, function(e) {
            g = e.GCache
        }, function(e) {
            m = e.GAMETYPE
        }, function(e) {
            C = e.default
        }, function(e) {
            I = e.EventManager
        }, function(e) {
            A = e.BaseComponent
        }, function(e) {
            E = e.GameNodeHeadPrefabCtr
        }, function(e) {
            v = e.GamePrivilegeBubblePrefabCtr
        }, function(e) {
            y = e.NickComponentCtr
        }, function(e) {
            S = e.nodeHeadExtraInfoPrefabCtr
        }, function(e) {
            P = e.GameHeadDecorationPrefabCtr
        }, function(e) {
            T = e.PlayerMgr
        }, function(e) {
            G = e.RoomMgr
        }, function(e) {
            O = e.SettleMgr
        }, function(e) {
            R = e.FXJEvent
        }, function(e) {
            N = e.FXJUIID, b = e.FXJRes
        }, function(e) {
            D = e.GameRuleConfig
        }, function(e) {
            L = e.GameSettleConfig
        }, function(e) {
            M = e.CardTag
        }, function(e) {
            U = e.CardUtil
        }, function(e) {
            w = e.Card
        }],
        execute: function() {
            var B, H, F, k, V, x, W, z, Z, X, J, j, Y, Q, q, K, $, ee, te, ne, ie, ae, oe, re, se, le, ue, de, ce, he, pe, fe, _e, ge, me, Ce, Ie, Ae, Ee, ve, ye, Se, Pe, Te, Ge, Oe, Re, Ne, be, De, Le, Me, Ue, we, Be, He, Fe;
            e({
                FailItemColor: void 0,
                WinItemColor: void 0
            }), o._RF.push({}, "ef6acuyhSlK+oQbvTen4eX5", "SettleItem", void 0);
            var ke, Ve, xe = r.ccclass,
                We = r.property;
            ! function(e) {
                e.Win = "#D34000", e.Fail = "#B67D41"
            }(ke || (ke = e("WinItemColor", {}))),
            function(e) {
                e.Win = "#457BDE", e.Fail = "#7D8ACE"
            }(Ve || (Ve = e("FailItemColor", {}))), e("SettleItem", (B = xe("SettleItem"), H = We(s), F = We(l), k = We(s), V = We(s), x = We(s), W = We(u), z = We(u), Z = We({
                tooltip: "用户头像",
                type: E
            }), X = We(d), J = We(u), j = We(c), Y = We(c), Q = We(d), q = We(u), K = We(u), $ = We(c), ee = We(d), te = We(u), ne = We(c), ie = We(c), ae = We(c), oe = We(c), re = We(c), se = We(c), le = We({
                tooltip: "VIP加成说明",
                type: c
            }), ue = We({
                tooltip: "详情信息",
                type: c
            }), de = We({
                tooltip: "vip会员节点脚本",
                type: S
            }), B((pe = t((he = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "atlas", pe, a(t)), i(t, "cardPrefab", fe, a(t)), i(t, "winNumAtlas", _e, a(t)), i(t, "failNumAtlas", ge, a(t)), i(t, "goldNumAtlas", me, a(t)), i(t, "bg", Ce, a(t)), i(t, "bgSelf", Ie, a(t)), i(t, "headNode", Ae, a(t)), i(t, "nick", Ee, a(t)), i(t, "seatFlag", ve, a(t)), i(t, "bankerFlag", ye, a(t)), i(t, "ladderIcon", Se, a(t)), i(t, "ladderChangeScore", Pe, a(t)), i(t, "ladderProgrssImg", Te, a(t)), i(t, "ladderProgrssBgImg", Ge, a(t)), i(t, "additiveBubble", Oe, a(t)), i(t, "additiveBubbleLabel", Re, a(t)), i(t, "winOrLoseTag", Ne, a(t)), i(t, "cardLayout", be, a(t)), i(t, "fanInfoScrollContent", De, a(t)), i(t, "huTag", Le, a(t)), i(t, "moneyIcon", Me, a(t)), i(t, "scoreIcon", Ue, a(t)), i(t, "moneyLayout", we, a(t)), i(t, "vipAdditiveBubble", Be, a(t)), i(t, "detailNode", He, a(t)), i(t, "vipMemberNodeCtr", Fe, a(t)), t.seatId = void 0, t.userId = void 0, t.moneyAtlas = void 0, t.iswin = void 0, t._fanInfo = [], t
                }
                n(t, e);
                var o = t.prototype;
                return o.addGameComp = function() {
                    null == this.node && (this.node = _.create_2DNode()), this.node.addComponent("GameComponent");
                    var e = this.node.getComponent("GameComponent");
                    return "function" == typeof e.setDelegate && e.setDelegate(this), e
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("GameComponent");
                    if (null == t && (t = this.addGameComp()), "function" == typeof t[e]) {
                        for (var n, i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) a[o - 1] = arguments[o];
                        return (n = t)[e].apply(n, a)
                    }
                }, o.updateDataBySeatID = function(e, t) {
                    this.seatId = e, this.iswin = t, g.SelectGame.isInPrivateRoom() ? (this.moneyIcon.active = !1, this.scoreIcon.active = !0) : (this.moneyIcon.active = !0, this.scoreIcon.active = !1);
                    var n = O.getInstance().getTotalInfoBySeatId(this.seatId);
                    if (!_.isNull(n)) {
                        this.checkIsWin(n), this._updateBgImg(this.iswin);
                        var i = O.getInstance().findPlayerWithSeatId(e);
                        i && (this.userId = i.userId, this._updateHeadNode(i), this.showOverHandCards(i)), this._updateSettleInfo(n)
                    }
                }, o.checkIsWin = function(e) {
                    D.GameType == m.XUEZHAN ? (this.iswin = e.winMoney > 0, e.bWin = e.winMoney > 0 ? 1 : -1) : e.winMoney < 0 && (this.iswin = !1, e.bWin = -1)
                }, o._updateBgImg = function(e) {
                    var t, n = O.getInstance().getPlayerIsWinBySeatID(this.seatId);
                    if (e ? n ? (t = "ItemBgWinOwner", this.moneyAtlas = this.winNumAtlas) : (t = "ItemBgWin", this.moneyAtlas = this.goldNumAtlas) : n ? (t = "ItemBgLoseOwner", this.moneyAtlas = this.goldNumAtlas) : (t = "ItemBgLose", this.moneyAtlas = this.failNumAtlas), this.bg.spriteFrame = this.atlas.getSpriteFrame(t), this.seatId == G.getInstance().mySeatId) {
                        this.bgSelf.node.active = !0;
                        var i = e ? "ItemBgWinSelf" : "ItemBgLoseSelf";
                        this.bgSelf.spriteFrame = this.atlas.getSpriteFrame(i)
                    } else this.bgSelf.node.active = !1;
                    this.ladderProgrssBgImg.spriteFrame = this.atlas.getSpriteFrame(e ? "progressBgWin" : "progressBgLose")
                }, o._updateHeadNode = function(e) {
                    var t, n = T.getInstance().checkUserAvatarInfo(JSON.parse(null == e ? void 0 : e.strUserInfo), e.userId);
                    if (!_.isNull(n)) {
                        n.userId = e.userId;
                        var i = T.getInstance().initRobotInfo(n.userId);
                        if (this.nick.string = (null == i ? void 0 : i.nick) || n.nickName, this.nick.node.getComponent(y).setUserInfo(null == n ? void 0 : n.isVip), this.bankerFlag.active = this.seatId == _.number_valueOf(O.getInstance().settleBankSeatID, -1), g.SelectGame.isInPrivateRoom() && (null == (t = g.PrivateData.getPrivateRoomMasterInfo()) ? void 0 : t.userId) == n.userId) this.seatFlag.spriteFrame = this.atlas.getSpriteFrame("playerFlagOwner");
                        else {
                            var a = U.calculatePlayerSeat(G.getInstance().mySeatId, this.seatId);
                            this.seatFlag.spriteFrame = this.atlas.getSpriteFrame("playerFlag" + a)
                        }
                        var o = this.headNode.node.getChildByPath("Mask/nodeHead").getComponent(C),
                            r = (null == i ? void 0 : i.url) || n.avatar_s;
                        _.string_isHttp(r) ? o.setRemoteUrl(r, (function() {
                            u()
                        })) : u();
                        var s = this.headNode.node.getChildByPath("nodeHeadBox/GameHeadDecorationPrefab");
                        s && s.getComponent(P).setHeadBox(n.userHeadBox);
                        try {
                            var l;
                            null == (l = this.vipMemberNodeCtr) || l.setUserInfo(n, {
                                isVip: null == n ? void 0 : n.isVip
                            })
                        } catch (e) {}
                        this.updateLadderInfo()
                    }

                    function u() {
                        null != o && o.isValid && (2 == n.sex ? o.setLocalLoad(b.Picture_UserBigHead_girl.bundle, b.Picture_UserBigHead_girl.path) : o.setLocalLoad(b.Picture_UserBigHead_boy.bundle, b.Picture_UserBigHead_boy.path))
                    }
                }, o._updateSettleInfo = function(e) {
                    var t = this,
                        n = -1 !== e.bWin ? "+" : "";
                    _.number_valueOf(e.winMoney) < 0 && (n = "");
                    var i = "" + n + _.string_moneyToShortNumber(e.winMoney);
                    _.createNumSprImg(this.moneyLayout, {
                        atlas: this.moneyAtlas,
                        str: i
                    });
                    var a = !1,
                        o = O.getInstance().getSettledItemsBySeat(this.seatId);
                    this.fanInfoScrollContent.destroyAllChildren(), o.forEach((function(e) {
                        if (e.isFan) t._fanInfo.push(e.name + "  " + e.num + D.unitText);
                        else {
                            var n = e.num.toString();
                            e.num > 0 && (n = "+" + e.num.toString()), t._fanInfo.push(L.CheckItemList[e.name] + "  " + n), e.name == L.SettleMoneyType.GuanSi && e.num < 0 && (a = !0)
                        }
                    }));
                    var r = O.getInstance().getTotalInfoBySeatId(this.seatId);
                    if (!_.isNull(r)) {
                        O.getInstance().getPlayerIsWinBySeatID(this.seatId) ? this.winOrLoseTag.spriteFrame = this.atlas.getSpriteFrame("resultHu") : O.getInstance().checkChaJiao() && 1 === (null == r ? void 0 : r.isYouJiao) ? this.winOrLoseTag.spriteFrame = this.atlas.getSpriteFrame("resultWuJiao") : O.getInstance().checkChaJiao() && 2 === (null == r ? void 0 : r.isYouJiao) ? this.winOrLoseTag.spriteFrame = this.atlas.getSpriteFrame("resultHuaZhu") : a ? this.winOrLoseTag.spriteFrame = this.atlas.getSpriteFrame("resultGuanSi") : O.getInstance().checkBaoSanJia(this.seatId) ? this.winOrLoseTag.spriteFrame = this.atlas.getSpriteFrame("resultBaoSanJia") : !g.SelectGame.isInPrivateRoom() && g.BankrupData.checkIsBankrupt(r.nMoney) && (this.winOrLoseTag.spriteFrame = this.atlas.getSpriteFrame("resultBroken"));
                        var s = O.getInstance().getDetailList();
                        s && s.has(this.userId) && s.get(this.userId).length || (this.detailNode.active = !1)
                    }
                }, o.updateLadderInfo = function() {
                    var e = O.getInstance().findPlayerWithSeatId(this.seatId);
                    if (e && e.gameUserInfo) {
                        var t = e.gameUserInfo.ladderScore,
                            n = e.gameUserInfo.ladderScoreChange;
                        if ("number" == typeof n) {
                            var i = n.toString();
                            n > 0 ? i = "+" + i : n > 0 && (i = "-" + i), this.ladderChangeScore.string = i
                        }
                        if ("number" == typeof t) {
                            var a = g.LadderData.getLadderConfig(t);
                            if (!_.table_isEmpty(a)) {
                                var o = g.LadderData.getLadderRankIconByLevel(a.level);
                                this.ladderIcon.getComponent(C).setLocalLoad(o.bundle, o.path)
                            }
                            this.ladderProgrssImg.fillRange = t / (a.endRange || 1)
                        }
                        this.vipAdditiveBubble.getComponent(v).updateView(e.userId, this.iswin)
                    }
                }, o._showOpGropCards = function(e) {
                    var t = this;
                    if (this.cardLayout.destroyAllChildren(), !this.doGameCompFun("showOpGropCards", e, {
                            cardPrefab: this.cardPrefab,
                            cardLayout: this.cardLayout
                        }) && e.opGroups.length > 0) {
                        var n = O.getInstance().filterCPGCards(e.opGroups);
                        n.length > 0 && n.forEach((function(e) {
                            var n = _.create_2DNode("cardNode"),
                                i = n.getComponent(h),
                                a = e.filter((function(t, n) {
                                    return e.indexOf(t) === n
                                }));
                            i.anchorPoint = new p(0, .5);
                            for (var o = a.length, r = 0, s = 0; s < o; s++) {
                                var l = a[s],
                                    u = f(t.cardPrefab);
                                u.getComponent(w).setCardTag(M.HandCard), u.getComponent(w).setCardByte(l), u.getComponent(w).setCardSize(38, 61), u.getComponent(w).setCardAngle(320, 0, 0), u.getComponent(w).setCardAlbedo(.8, .8, .8), 3 === s ? u.setPosition(57, 9, 15) : (u.setPosition(19 + 38 * s, 0), ++r), n.addChild(u)
                            }
                            i.setContentSize(38 * r + 7, 61), t.cardLayout.addChild(n)
                        }))
                    }
                }, o.showOverHandCards = function(e) {
                    var t = {
                        cardPrefab: this.cardPrefab,
                        cardLayout: this.cardLayout,
                        huTag: this.huTag
                    };
                    this.doGameCompFun("showOverHandCards", e, t) || this._showHandCards(e)
                }, o._showHandCards = function(e) {
                    this._showOpGropCards(e);
                    for (var t = null == e ? void 0 : e.handCards.filter((function(t) {
                            return t !== e.huCard
                        })), n = 0; n < t.length; n++) {
                        var i = e.handCards[n],
                            a = f(this.cardPrefab);
                        a.getComponent(w).setCardTag(M.HandCard), a.getComponent(w).setCardByte(i), a.getComponent(w).setCardSize(38, 61), a.getComponent(w).setCardAngle(320, 0, 0), a.getComponent(w).setCardAlbedo(.8, .8, .8), this.cardLayout.addChild(a)
                    }
                    if (!_.isNull(e.huCard)) {
                        var o = _.create_2DNode("cardNode"),
                            r = o.getComponent(h);
                        r.setContentSize(45, 61), r.anchorPoint = new p(0, .5);
                        var s = f(this.cardPrefab);
                        console.log("player.huCard_________________", e.huCard), s.getComponent(w).setCardByte(e.huCard), s.getComponent(w).setCardSize(38, 61), s.getComponent(w).setCardAngle(320, 0, 0), s.getComponent(w).setCardAlbedo(.8, .8, .8), s.setPosition(26, 0), o.addChild(s), this.cardLayout.addChild(o), this.huTag.active = !0, s.addChild(this.huTag), this.huTag.setPosition(-9, 24)
                    }
                }, o.getRoomBaseChip = function() {
                    var e = g.Desk.getCurLevelID(),
                        t = g.SelectGame.getGameRoomInfoByRoomLevelID(g.SelectGame.getCurGameId(), e);
                    return null == t ? void 0 : t.base_chip
                }, o.onClickDetail = function() {
                    var e = O.getInstance().getDetailList().get(this.userId);
                    if (e) {
                        var t = _.shallowCopy(e);
                        this._fanInfo && this._fanInfo.length > 0 && t.unshift({
                            title: this._fanInfo.join(","),
                            money: null,
                            winnerDirs: null
                        });
                        var n = {
                            detail: t,
                            winMoney: O.getInstance().getTotalInfoBySeatId(this.seatId).winMoney,
                            base_chip: this.getRoomBaseChip()
                        };
                        I.dispatch(R.GAME_OPEN_POPUP, N.SettleDetailPrefab, n)
                    }
                }, t
            }(A)).prototype, "atlas", [H], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), fe = t(he.prototype, "cardPrefab", [F], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), _e = t(he.prototype, "winNumAtlas", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ge = t(he.prototype, "failNumAtlas", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), me = t(he.prototype, "goldNumAtlas", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ce = t(he.prototype, "bg", [W], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ie = t(he.prototype, "bgSelf", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ae = t(he.prototype, "headNode", [Z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ee = t(he.prototype, "nick", [X], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ve = t(he.prototype, "seatFlag", [J], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ye = t(he.prototype, "bankerFlag", [j], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Se = t(he.prototype, "ladderIcon", [Y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Pe = t(he.prototype, "ladderChangeScore", [Q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Te = t(he.prototype, "ladderProgrssImg", [q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ge = t(he.prototype, "ladderProgrssBgImg", [K], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Oe = t(he.prototype, "additiveBubble", [$], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Re = t(he.prototype, "additiveBubbleLabel", [ee], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ne = t(he.prototype, "winOrLoseTag", [te], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), be = t(he.prototype, "cardLayout", [ne], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), De = t(he.prototype, "fanInfoScrollContent", [ie], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Le = t(he.prototype, "huTag", [ae], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Me = t(he.prototype, "moneyIcon", [oe], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ue = t(he.prototype, "scoreIcon", [re], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), we = t(he.prototype, "moneyLayout", [se], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Be = t(he.prototype, "vipAdditiveBubble", [le], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), He = t(he.prototype, "detailNode", [ue], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Fe = t(he.prototype, "vipMemberNodeCtr", [de], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ce = he)) || ce)), o._RF.pop()
        }
    }
}))