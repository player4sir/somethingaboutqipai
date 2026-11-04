System.register("chunks:///_virtual/SettleItem3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./GameConstant.ts", "./SpriteLoad.ts", "./EventManager.ts", "./BaseComponent.ts", "./GameNodeHeadPrefabCtr.ts", "./GamePrivilegeBubblePrefabCtr.ts", "./NickComponentCtr.ts", "./nodeHeadExtraInfoPrefabCtr.ts", "./GameHeadDecorationPrefabCtr.ts", "./PlayerMgr6.ts", "./RoomMgr6.ts", "./SettleMgr3.ts", "./FXJEvent3.ts", "./FXJRes3.ts", "./GameRuleConfig4.ts", "./GameSettleConfig5.ts", "./NodeCardCtr3.ts", "./CardUtil3.ts", "./Card5.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f, C, E, S, A, I, G, y, v, P, T, b, O, R, M, N, U, D, L, B;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.SpriteAtlas, u = e.Prefab, l = e.Sprite, d = e.Label, c = e.Node, h = e.UITransform, p = e.Vec2, m = e.instantiate
        }, function(e) {
            _ = e.Utils
        }, function(e) {
            g = e.GCache
        }, function(e) {
            f = e.GAMETYPE
        }, function(e) {
            C = e.default
        }, function(e) {
            E = e.EventManager
        }, function(e) {
            S = e.BaseComponent
        }, function(e) {
            A = e.GameNodeHeadPrefabCtr
        }, function(e) {
            I = e.GamePrivilegeBubblePrefabCtr
        }, function(e) {
            G = e.NickComponentCtr
        }, function(e) {
            y = e.nodeHeadExtraInfoPrefabCtr
        }, function(e) {
            v = e.GameHeadDecorationPrefabCtr
        }, function(e) {
            P = e.PlayerMgr
        }, function(e) {
            T = e.RoomMgr
        }, function(e) {
            b = e.SettleMgr
        }, function(e) {
            O = e.FXJEvent
        }, function(e) {
            R = e.FXJUIID, M = e.FXJRes
        }, function(e) {
            N = e.GameRuleConfig
        }, function(e) {
            U = e.GameSettleConfig
        }, function(e) {
            D = e.CardTag
        }, function(e) {
            L = e.CardUtil
        }, function(e) {
            B = e.Card
        }],
        execute: function() {
            var w, k, H, x, F, V, J, j, W, z, X, Z, Y, Q, q, K, $, ee, te, ne, ae, ie, oe, re, se, ue, le, de, ce, he, pe, me, _e, ge, fe, Ce, Ee, Se, Ae, Ie, Ge, ye, ve, Pe, Te, be, Oe, Re, Me, Ne, Ue, De, Le, Be, we, ke, He, xe;
            e({
                FailItemColor: void 0,
                WinItemColor: void 0
            }), o._RF.push({}, "d36f3RE8L9DNZeTQtaeHq0B", "SettleItem", void 0);
            var Fe, Ve, Je = r.ccclass,
                je = r.property,
                We = r.menu;
            ! function(e) {
                e.Win = "#D34000", e.Fail = "#B67D41"
            }(Fe || (Fe = e("WinItemColor", {}))),
            function(e) {
                e.Win = "#457BDE", e.Fail = "#7D8ACE"
            }(Ve || (Ve = e("FailItemColor", {}))), e("SettleItem", (w = Je("SettleItem"), k = We("prefab/subGame/mj/SettleItem"), H = je(s), x = je(u), F = je(s), V = je(s), J = je(s), j = je(l), W = je(l), z = je({
                tooltip: "用户头像",
                type: A
            }), X = je(d), Z = je(l), Y = je(c), Q = je(c), q = je(d), K = je(l), $ = je(l), ee = je(c), te = je(d), ne = je(l), ae = je(c), ie = je(c), oe = je(c), re = je(c), se = je(c), ue = je(c), le = je({
                tooltip: "特权tips",
                type: c
            }), de = je({
                tooltip: "详情信息",
                type: c
            }), ce = je({
                tooltip: "vip会员节点脚本",
                type: y
            }), w(he = k((me = t((pe = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "atlas", me, i(t)), a(t, "cardPrefab", _e, i(t)), a(t, "winNumAtlas", ge, i(t)), a(t, "failNumAtlas", fe, i(t)), a(t, "goldNumAtlas", Ce, i(t)), a(t, "bg", Ee, i(t)), a(t, "bgSelf", Se, i(t)), a(t, "headNode", Ae, i(t)), a(t, "nick", Ie, i(t)), a(t, "seatFlag", Ge, i(t)), a(t, "bankerFlag", ye, i(t)), a(t, "ladderIcon", ve, i(t)), a(t, "ladderChangeScore", Pe, i(t)), a(t, "ladderProgrssImg", Te, i(t)), a(t, "ladderProgrssBgImg", be, i(t)), a(t, "additiveBubble", Oe, i(t)), a(t, "additiveBubbleLabel", Re, i(t)), a(t, "winOrLoseTag", Me, i(t)), a(t, "cardLayout", Ne, i(t)), a(t, "fanInfoScrollContent", Ue, i(t)), a(t, "huTag", De, i(t)), a(t, "moneyIcon", Le, i(t)), a(t, "scoreIcon", Be, i(t)), a(t, "moneyLayout", we, i(t)), a(t, "privilegeNode", ke, i(t)), a(t, "detailNode", He, i(t)), a(t, "vipMemberNodeCtr", xe, i(t)), t.seatId = void 0, t.moneyAtlas = void 0, t.iswin = void 0, t.userId = void 0, t._fanInfo = [], t
                }
                n(t, e);
                var o = t.prototype;
                return o.addGameComp = function() {
                    null == this.node && (this.node = _.create_2DNode()), this.node.addComponent("MJGameComponent");
                    var e = this.node.getComponent("MJGameComponent");
                    return "function" == typeof e.setDelegate && e.setDelegate(this), e
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("MJGameComponent");
                    if (null == t && (t = this.addGameComp()), "function" == typeof t[e]) {
                        for (var n, a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) i[o - 1] = arguments[o];
                        return (n = t)[e].apply(n, i)
                    }
                }, o.updateDataBySeatID = function(e, t) {
                    this.seatId = e, this.iswin = t, g.SelectGame.isInPrivateRoom() ? (this.moneyIcon.active = !1, this.scoreIcon.active = !0) : (this.moneyIcon.active = !0, this.scoreIcon.active = !1);
                    var n = b.getInstance().getTotalInfoBySeatId(this.seatId);
                    if (!_.isNull(n)) {
                        this.checkIsWin(n), this._updateBgImg(this.iswin);
                        var a = b.getInstance().findPlayerWithSeatId(e);
                        a && (this.userId = a.userId, this._updateHeadNode(a), this.showOverHandCards(a)), this._updateSettleInfo(n)
                    }
                }, o.checkIsWin = function(e) {
                    N.GameType == f.XUEZHAN ? (this.iswin = e.winMoney > 0, e.bWin = e.winMoney > 0 ? 1 : -1) : e.winMoney < 0 && (this.iswin = !1, e.bWin = -1)
                }, o._updateBgImg = function(e) {
                    var t, n = b.getInstance().getPlayerIsWinBySeatID(this.seatId);
                    if (e ? n ? (t = "ItemBgWinOwner", this.moneyAtlas = this.winNumAtlas) : (t = "ItemBgWin", this.moneyAtlas = this.goldNumAtlas) : n ? (t = "ItemBgLoseOwner", this.moneyAtlas = this.goldNumAtlas) : (t = "ItemBgLose", this.moneyAtlas = this.failNumAtlas), this.bg.spriteFrame = this.atlas.getSpriteFrame(t), this.seatId == T.getInstance().mySeatId) {
                        this.bgSelf.node.active = !0;
                        var a = e ? "ItemBgWinSelf" : "ItemBgLoseSelf";
                        this.bgSelf.spriteFrame = this.atlas.getSpriteFrame(a)
                    } else this.bgSelf.node.active = !1;
                    this.ladderProgrssBgImg.spriteFrame = this.atlas.getSpriteFrame(e ? "progressBgWin" : "progressBgLose")
                }, o._updateHeadNode = function(e) {
                    var t, n = P.getInstance().checkUserAvatarInfo(JSON.parse(null == e ? void 0 : e.strUserInfo), e.userId);
                    if (!_.isNull(n)) {
                        n.userId = e.userId;
                        var a = P.getInstance().initRobotInfo(n.userId);
                        if (this.nick.string = (null == a ? void 0 : a.nick) || n.nickName, this.bankerFlag.active = this.seatId == _.number_valueOf(b.getInstance().settleBankSeatID, -1), g.SelectGame.isInPrivateRoom() && (null == (t = g.PrivateData.getPrivateRoomMasterInfo()) ? void 0 : t.userId) == n.userId) this.seatFlag.spriteFrame = this.atlas.getSpriteFrame("playerFlagOwner");
                        else {
                            var i = L.calculatePlayerSeat(T.getInstance().mySeatId, this.seatId);
                            this.seatFlag.spriteFrame = this.atlas.getSpriteFrame("playerFlag" + i)
                        }
                        var o = this.headNode.node.getChildByPath("Mask/nodeHead").getComponent(C),
                            r = (null == a ? void 0 : a.url) || n.avatar_s;
                        _.string_isHttp(r) ? o.setRemoteUrl(r, (function() {
                            l()
                        })) : l();
                        var s = this.headNode.node.getChildByPath("nodeHeadBox/GameHeadDecorationPrefab");
                        s && s.getComponent(v).setHeadBox(n.userHeadBox);
                        try {
                            var u;
                            null == (u = this.vipMemberNodeCtr) || u.setUserInfo(n, {
                                isVip: null == n ? void 0 : n.isVip
                            }), this.nick.node.getComponent(G).setUserInfo(null == n ? void 0 : n.isVip)
                        } catch (e) {}
                        this.updateLadderInfo()
                    }

                    function l() {
                        null != o && o.isValid && (2 == n.sex ? o.setLocalLoad(M.Picture_UserBigHead_girl.bundle, M.Picture_UserBigHead_girl.path) : o.setLocalLoad(M.Picture_UserBigHead_boy.bundle, M.Picture_UserBigHead_boy.path))
                    }
                }, o._updateSettleInfo = function(e) {
                    var t = this,
                        n = -1 !== e.bWin ? "+" : "";
                    _.number_valueOf(e.winMoney) < 0 && (n = "");
                    var a = "" + n + _.string_moneyToShortNumber(e.winMoney);
                    _.createNumSprImg(this.moneyLayout, {
                        atlas: this.moneyAtlas,
                        str: a
                    });
                    var i = !1,
                        o = b.getInstance().getSettledItemsBySeat(this.seatId);
                    this.fanInfoScrollContent.destroyAllChildren(), o.forEach((function(e) {
                        if (e.isFan) t._fanInfo.push(e.name + "  " + e.num + N.unitText);
                        else {
                            var n = e.num.toString();
                            e.num > 0 && (n = "+" + e.num.toString()), t._fanInfo.push(U.CheckItemList[e.name] + "  " + n), e.name == U.SettleMoneyType.GuanSi && e.num < 0 && (i = !0)
                        }
                    }));
                    var r = b.getInstance().getTotalInfoBySeatId(this.seatId);
                    if (!_.isNull(r)) {
                        b.getInstance().getPlayerIsWinBySeatID(this.seatId) ? this.winOrLoseTag.spriteFrame = this.atlas.getSpriteFrame("resultHu") : b.getInstance().checkChaJiao() && 1 === (null == r ? void 0 : r.isYouJiao) ? this.winOrLoseTag.spriteFrame = this.atlas.getSpriteFrame("resultWuJiao") : b.getInstance().checkChaJiao() && 2 === (null == r ? void 0 : r.isYouJiao) ? this.winOrLoseTag.spriteFrame = this.atlas.getSpriteFrame("resultHuaZhu") : i ? this.winOrLoseTag.spriteFrame = this.atlas.getSpriteFrame("resultGuanSi") : b.getInstance().checkBaoSanJia(this.seatId) ? this.winOrLoseTag.spriteFrame = this.atlas.getSpriteFrame("resultBaoSanJia") : !g.SelectGame.isInPrivateRoom() && g.BankrupData.checkIsBankrupt(r.nMoney) && (this.winOrLoseTag.spriteFrame = this.atlas.getSpriteFrame("resultBroken"));
                        var s = b.getInstance().getDetailList();
                        s && s.get(this.userId) && s.get(this.userId).length || (this.detailNode.active = !1)
                    }
                }, o.updateLadderInfo = function() {
                    var e = b.getInstance().findPlayerWithSeatId(this.seatId);
                    if (e && e.gameUserInfo) {
                        var t = e.gameUserInfo.ladderScore,
                            n = e.gameUserInfo.ladderScoreChange;
                        if ("number" == typeof n) {
                            var a = n.toString();
                            n > 0 ? a = "+" + a : n > 0 && (a = "-" + a), this.ladderChangeScore.string = a
                        }
                        if ("number" == typeof t) {
                            var i = g.LadderData.getLadderConfig(t);
                            if (!_.table_isEmpty(i)) {
                                var o = g.LadderData.getLadderRankIconByLevel(i.level);
                                this.ladderIcon.getComponent(C).setLocalLoad(o.bundle, o.path)
                            }
                            this.ladderProgrssImg.fillRange = t / (i.endRange || 1)
                        }
                        this.privilegeNode.getComponent(I).updateView(e.userId, this.iswin)
                    }
                }, o._showOpGropCards = function(e) {
                    var t = this;
                    if (this.cardLayout.destroyAllChildren(), !this.doGameCompFun("showOpGropCards", e, {
                            cardPrefab: this.cardPrefab,
                            cardLayout: this.cardLayout
                        }) && e.opGroups.length > 0) {
                        var n = b.getInstance().filterCPGCards(e.opGroups);
                        n.length > 0 && n.forEach((function(e) {
                            var n = _.create_2DNode("cardNode"),
                                a = n.getComponent(h),
                                i = e.filter((function(t, n) {
                                    return e.indexOf(t) === n
                                }));
                            a.anchorPoint = new p(0, .5);
                            for (var o = i.length, r = 0, s = 0; s < o; s++) {
                                var u = i[s],
                                    l = m(t.cardPrefab);
                                l.getComponent(B).setCardTag(D.HandCard), l.getComponent(B).setCardByte(u), l.getComponent(B).setCardSize(38, 61), l.getComponent(B).setCardAngle(320, 0, 0), l.getComponent(B).setCardAlbedo(.8, .8, .8), 3 === s ? l.setPosition(57, 9, 15) : (l.setPosition(19 + 38 * s, 0), ++r), n.addChild(l)
                            }
                            a.setContentSize(38 * r + 7, 61), t.cardLayout.addChild(n)
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
                        var a = e.handCards[n],
                            i = m(this.cardPrefab);
                        i.getComponent(B).setCardTag(D.HandCard), i.getComponent(B).setCardByte(a), i.getComponent(B).setCardSize(38, 61), i.getComponent(B).setCardAngle(320, 0, 0), i.getComponent(B).setCardAlbedo(.8, .8, .8), this.cardLayout.addChild(i)
                    }
                    if (!_.isNull(e.huCard)) {
                        var o = _.create_2DNode("cardNode"),
                            r = o.getComponent(h);
                        r.setContentSize(45, 61), r.anchorPoint = new p(0, .5);
                        var s = m(this.cardPrefab);
                        console.log("player.huCard_________________", e.huCard), s.getComponent(B).setCardByte(e.huCard), s.getComponent(B).setCardSize(38, 61), s.getComponent(B).setCardAngle(320, 0, 0), s.getComponent(B).setCardAlbedo(.8, .8, .8), s.setPosition(26, 0), o.addChild(s), this.cardLayout.addChild(o), this.huTag.active = !0, s.addChild(this.huTag), this.huTag.setPosition(-9, 24)
                    }
                }, o.getRoomBaseChip = function() {
                    var e = g.Desk.getCurLevelID(),
                        t = g.SelectGame.getGameRoomInfoByRoomLevelID(g.SelectGame.getCurGameId(), e);
                    return null == t ? void 0 : t.base_chip
                }, o.onClickDetail = function() {
                    var e = b.getInstance().getDetailList().get(this.userId);
                    if (e) {
                        var t = _.shallowCopy(e);
                        this._fanInfo && this._fanInfo.length > 0 && t.unshift({
                            title: this._fanInfo.join(","),
                            money: null,
                            winnerDirs: null
                        });
                        var n = {
                            detail: t,
                            winMoney: b.getInstance().getTotalInfoBySeatId(this.seatId).winMoney,
                            base_chip: this.getRoomBaseChip()
                        };
                        E.dispatch(O.GAME_OPEN_POPUP, R.SettleDetailPrefab, n)
                    }
                }, t
            }(S)).prototype, "atlas", [H], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), _e = t(pe.prototype, "cardPrefab", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ge = t(pe.prototype, "winNumAtlas", [F], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), fe = t(pe.prototype, "failNumAtlas", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ce = t(pe.prototype, "goldNumAtlas", [J], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ee = t(pe.prototype, "bg", [j], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Se = t(pe.prototype, "bgSelf", [W], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ae = t(pe.prototype, "headNode", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ie = t(pe.prototype, "nick", [X], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ge = t(pe.prototype, "seatFlag", [Z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ye = t(pe.prototype, "bankerFlag", [Y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ve = t(pe.prototype, "ladderIcon", [Q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Pe = t(pe.prototype, "ladderChangeScore", [q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Te = t(pe.prototype, "ladderProgrssImg", [K], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), be = t(pe.prototype, "ladderProgrssBgImg", [$], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Oe = t(pe.prototype, "additiveBubble", [ee], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Re = t(pe.prototype, "additiveBubbleLabel", [te], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Me = t(pe.prototype, "winOrLoseTag", [ne], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ne = t(pe.prototype, "cardLayout", [ae], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ue = t(pe.prototype, "fanInfoScrollContent", [ie], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), De = t(pe.prototype, "huTag", [oe], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Le = t(pe.prototype, "moneyIcon", [re], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Be = t(pe.prototype, "scoreIcon", [se], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), we = t(pe.prototype, "moneyLayout", [ue], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ke = t(pe.prototype, "privilegeNode", [le], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), He = t(pe.prototype, "detailNode", [de], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), xe = t(pe.prototype, "vipMemberNodeCtr", [ce], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), he = pe)) || he) || he)), o._RF.pop()
        }
    }
}))