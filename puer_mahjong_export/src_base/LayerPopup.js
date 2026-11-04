System.register("chunks:///_virtual/LayerPopup.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./DelegateComponent.ts", "./LayerUI.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy, n = e.Layers, a = e.BlockInputEvents, o = e.Color, r = e.ImageAsset, s = e.Texture2D, c = e.SpriteFrame, l = e.Widget, u = e.Sprite, d = e.Node
        }, function(e) {
            _ = e.DelegateComponent
        }, function(e) {
            h = e.LayerUI
        }],
        execute: function() {
            i._RF.push({}, "25d07BQBCFADaSsh/I3GrTX", "LayerPopup", void 0), e("LayerPopUp", function(e) {
                function i(t) {
                    return e.call(this, t) || this
                }
                t(i, e);
                var h = i.prototype;
                return h.init = function() {
                    e.prototype.init.call(this), this.layer = n.Enum.UI_2D, this.black = this.getComponent(a), this.black || (this.black = this.addComponent(a)), this.black.enabled = !1, this.reloadMaskSprite(), this.regMaskTouch()
                }, h.reloadMaskSprite = function(e) {
                    if (void 0 === e && (e = new o(0, 0, 0, 150)), this._maskNode) {
                        for (var t = new Uint8Array(4e4), i = 0; i < 4e4; i += 4) t[i] = e.r, t[i + 1] = e.g, t[i + 2] = e.b, t[i + 3] = e.a;
                        var n = new r;
                        n.reset({
                            _data: t,
                            _compressed: !1,
                            width: 100,
                            height: 100,
                            format: s.PixelFormat.RGBA8888
                        });
                        var a = new s;
                        a.reset({
                            width: 100,
                            height: 100,
                            format: s.PixelFormat.RGBA8888
                        }), a.image = n;
                        var d = new c;
                        d.texture = a, d.packable = !1;
                        var _ = this._maskNode.getChildByName("Sprite"),
                            h = null;
                        if (_) h = _.getComponent(u);
                        else {
                            var p = (_ = this.create_2DNode("Sprite")).addComponent(l);
                            p.isAlignLeft = p.isAlignRight = p.isAlignTop = p.isAlignBottom = !0, p.left = p.right = p.top = p.bottom = 0, p.alignMode = 2, p.enabled = !0, (h = _.addComponent(u)).enabled = !0, this._maskNode.addChild(_)
                        }
                        h.trim = !0, h.sizeMode = 0, h.type = 0, h.spriteFrame = d
                    }
                }, h.regMaskTouch = function() {
                    this._maskNode && this._maskNode.on(d.EventType.TOUCH_END, this.onTouchMaskEnd, this)
                }, h.onTouchMaskEnd = function(e) {
                    if (this.children.length >= 2) {
                        var t = this.children[this.children.length - 1];
                        if (t && 1 == t.active && 1 == t.isValid) {
                            var i = t.getComponent(_);
                            if (i) {
                                var n = i.viewParams;
                                n && 1 == n.isClickSpanceClose && t.destroy()
                            }
                        }
                    }
                }, h.add = function(t, i, n, a, o) {
                    return this.black.enabled = !0, e.prototype.add.call(this, t, i, n, a, o)
                }, h.updateMaskState = function() {
                    e.prototype.updateMaskState.call(this), 0 != this.isValid && this._maskNode && (this.black.enabled = this._maskNode.active)
                }, h.remove = function(t, i) {
                    e.prototype.remove.call(this, t, i), 0 != this.isValid && (this.black.enabled = !1)
                }, h.removeByUuid = function(t, i) {
                    e.prototype.removeByUuid.call(this, t, i), 0 != this.isValid && (this.black.enabled = !1)
                }, h.toDestoryNotNotify = function() {
                    this._maskNode && 1 == this._maskNode.isValid && this._maskNode.off(d.EventType.TOUCH_END, this.onTouchMaskEnd, this), e.prototype.toDestoryNotNotify.call(this), 0 != this.isValid && (this.init(), this.regMaskTouch())
                }, h.clear = function(t) {
                    e.prototype.clear.call(this, t), 0 != this.isValid && (this.black.enabled = !1, this.active = !1)
                }, i
            }(h)), i._RF.pop()
        }
    }
}))