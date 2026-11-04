System.register("chunks:///_virtual/gif.ts", ["cc"], (function(e) {
    var t;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }],
        execute: function() {
            function i(e) {
                var t = {
                    exports: {}
                };
                return e(t, t.exports), t.exports
            }
            t._RF.push({}, "4b10as73vhM7ZHyR7uEwWiy", "gif", void 0);
            var n = i((function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.loop = t.conditional = t.parse = void 0, t.parse = function e(t, i) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : n;
                        if (Array.isArray(i)) i.forEach((function(i) {
                            return e(t, i, n, a)
                        }));
                        else if ("function" == typeof i) i(t, n, a, e);
                        else {
                            var o = Object.keys(i)[0];
                            Array.isArray(i[o]) ? (a[o] = {}, e(t, i[o], n, a[o])) : a[o] = i[o](t, n, a, e)
                        }
                        return n
                    }, t.conditional = function(e, t) {
                        return function(i, n, a, o) {
                            t(i, n, a) && o(i, e, n, a)
                        }
                    }, t.loop = function(e, t) {
                        return function(i, n, a, o) {
                            for (var r = [], s = i.pos; t(i, n, a);) {
                                var c = {};
                                if (o(i, e, n, c), i.pos === s) break;
                                s = i.pos, r.push(c)
                            }
                            return r
                        }
                    }
                })),
                a = i((function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.readBits = t.readArray = t.readUnsigned = t.readString = t.peekBytes = t.readBytes = t.peekByte = t.readByte = t.buildStream = void 0, t.buildStream = function(e) {
                        return {
                            data: e,
                            pos: 0
                        }
                    }, t.readByte = function() {
                        return function(e) {
                            return e.data[e.pos++]
                        }
                    }, t.peekByte = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        return function(t) {
                            return t.data[t.pos + e]
                        }
                    };
                    var i = function(e) {
                        return function(t) {
                            return t.data.subarray(t.pos, t.pos += e)
                        }
                    };
                    t.readBytes = i, t.peekBytes = function(e) {
                        return function(t) {
                            return t.data.subarray(t.pos, t.pos + e)
                        }
                    }, t.readString = function(e) {
                        return function(t) {
                            return Array.from(i(e)(t)).map((function(e) {
                                return String.fromCharCode(e)
                            })).join("")
                        }
                    }, t.readUnsigned = function(e) {
                        return function(t) {
                            var n = i(2)(t);
                            return e ? (n[1] << 8) + n[0] : (n[0] << 8) + n[1]
                        }
                    }, t.readArray = function(e, t) {
                        return function(n, a, o) {
                            for (var r = "function" == typeof t ? t(n, a, o) : t, s = i(e), c = new Array(r), l = 0; l < r; l++) c[l] = s(n);
                            return c
                        }
                    }, t.readBits = function(e) {
                        return function(t) {
                            for (var i = function(e) {
                                    return e.data[e.pos++]
                                }(t), n = new Array(8), a = 0; a < 8; a++) n[7 - a] = !!(i & 1 << a);
                            return Object.keys(e).reduce((function(t, i) {
                                var a = e[i];
                                return t[i] = a.length ? function(e, t, i) {
                                    for (var n = 0, a = 0; a < i; a++) n += e[t + a] && Math.pow(2, i - a - 1);
                                    return n
                                }(n, a.index, a.length) : n[a.index], t
                            }), {})
                        }
                    }
                })),
                o = function(e) {
                    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
                }(i((function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = void 0;
                    var i = {
                            blocks: function(e) {
                                for (var t = [], i = e.data.length, n = 0, o = (0, a.readByte)()(e); 0 !== o && o; o = (0, a.readByte)()(e)) {
                                    if (e.pos + o >= i) {
                                        var r = i - e.pos;
                                        t.push((0, a.readBytes)(r)(e)), n += r;
                                        break
                                    }
                                    t.push((0, a.readBytes)(o)(e)), n += o
                                }
                                for (var s = new Uint8Array(n), c = 0, l = 0; l < t.length; l++) s.set(t[l], c), c += t[l].length;
                                return s
                            }
                        },
                        o = (0, n.conditional)({
                            gce: [{
                                codes: (0, a.readBytes)(2)
                            }, {
                                byteSize: (0, a.readByte)()
                            }, {
                                extras: (0, a.readBits)({
                                    future: {
                                        index: 0,
                                        length: 3
                                    },
                                    disposal: {
                                        index: 3,
                                        length: 3
                                    },
                                    userInput: {
                                        index: 6
                                    },
                                    transparentColorGiven: {
                                        index: 7
                                    }
                                })
                            }, {
                                delay: (0, a.readUnsigned)(!0)
                            }, {
                                transparentColorIndex: (0, a.readByte)()
                            }, {
                                terminator: (0, a.readByte)()
                            }]
                        }, (function(e) {
                            var t = (0, a.peekBytes)(2)(e);
                            return 33 === t[0] && 249 === t[1]
                        })),
                        r = (0, n.conditional)({
                            image: [{
                                code: (0, a.readByte)()
                            }, {
                                descriptor: [{
                                    left: (0, a.readUnsigned)(!0)
                                }, {
                                    top: (0, a.readUnsigned)(!0)
                                }, {
                                    width: (0, a.readUnsigned)(!0)
                                }, {
                                    height: (0, a.readUnsigned)(!0)
                                }, {
                                    lct: (0, a.readBits)({
                                        exists: {
                                            index: 0
                                        },
                                        interlaced: {
                                            index: 1
                                        },
                                        sort: {
                                            index: 2
                                        },
                                        future: {
                                            index: 3,
                                            length: 2
                                        },
                                        size: {
                                            index: 5,
                                            length: 3
                                        }
                                    })
                                }]
                            }, (0, n.conditional)({
                                lct: (0, a.readArray)(3, (function(e, t, i) {
                                    return Math.pow(2, i.descriptor.lct.size + 1)
                                }))
                            }, (function(e, t, i) {
                                return i.descriptor.lct.exists
                            })), {
                                data: [{
                                    minCodeSize: (0, a.readByte)()
                                }, i]
                            }]
                        }, (function(e) {
                            return 44 === (0, a.peekByte)()(e)
                        })),
                        s = (0, n.conditional)({
                            text: [{
                                codes: (0, a.readBytes)(2)
                            }, {
                                blockSize: (0, a.readByte)()
                            }, {
                                preData: function(e, t, i) {
                                    return (0, a.readBytes)(i.text.blockSize)(e)
                                }
                            }, i]
                        }, (function(e) {
                            var t = (0, a.peekBytes)(2)(e);
                            return 33 === t[0] && 1 === t[1]
                        })),
                        c = (0, n.conditional)({
                            application: [{
                                codes: (0, a.readBytes)(2)
                            }, {
                                blockSize: (0, a.readByte)()
                            }, {
                                id: function(e, t, i) {
                                    return (0, a.readString)(i.blockSize)(e)
                                }
                            }, i]
                        }, (function(e) {
                            var t = (0, a.peekBytes)(2)(e);
                            return 33 === t[0] && 255 === t[1]
                        })),
                        l = (0, n.conditional)({
                            comment: [{
                                codes: (0, a.readBytes)(2)
                            }, i]
                        }, (function(e) {
                            var t = (0, a.peekBytes)(2)(e);
                            return 33 === t[0] && 254 === t[1]
                        })),
                        u = [{
                            header: [{
                                signature: (0, a.readString)(3)
                            }, {
                                version: (0, a.readString)(3)
                            }]
                        }, {
                            lsd: [{
                                width: (0, a.readUnsigned)(!0)
                            }, {
                                height: (0, a.readUnsigned)(!0)
                            }, {
                                gct: (0, a.readBits)({
                                    exists: {
                                        index: 0
                                    },
                                    resolution: {
                                        index: 1,
                                        length: 3
                                    },
                                    sort: {
                                        index: 4
                                    },
                                    size: {
                                        index: 5,
                                        length: 3
                                    }
                                })
                            }, {
                                backgroundColorIndex: (0, a.readByte)()
                            }, {
                                pixelAspectRatio: (0, a.readByte)()
                            }]
                        }, (0, n.conditional)({
                            gct: (0, a.readArray)(3, (function(e, t) {
                                return Math.pow(2, t.lsd.gct.size + 1)
                            }))
                        }, (function(e, t) {
                            return t.lsd.gct.exists
                        })), {
                            frames: (0, n.loop)([o, c, l, r, s], (function(e) {
                                var t = (0, a.peekByte)()(e);
                                return 33 === t || 44 === t
                            }))
                        }];
                    t.default = u
                }))),
                r = (e("parseGIF", (function(e) {
                    var t = new Uint8Array(e);
                    return n.parse(a.buildStream(t), o)
                })), e("decompressFrame", (function(e, t, i) {
                    if (e.image) {
                        var n = e.image,
                            a = function(e, t, i) {
                                var n, a, o, r, s, c, l, u, d, _, h, p, f, m, g, E, v = 4096,
                                    T = i,
                                    R = new Array(i),
                                    P = new Array(v),
                                    y = new Array(v),
                                    C = new Array(4097);
                                for (s = 1 + (a = 1 << (_ = e)), n = a + 2, l = -1, o = (1 << (r = _ + 1)) - 1, u = 0; u < a; u++) P[u] = 0, y[u] = u;
                                for (h = p = f = m = g = E = 0, d = 0; d < T;) {
                                    if (0 === m) {
                                        if (p < r) {
                                            h += t[E] << p, p += 8, E++;
                                            continue
                                        }
                                        if (u = h & o, h >>= r, p -= r, u > n || u == s) break;
                                        if (u == a) {
                                            o = (1 << (r = _ + 1)) - 1, n = a + 2, l = -1;
                                            continue
                                        }
                                        if (-1 == l) {
                                            C[m++] = y[u], l = u, f = u;
                                            continue
                                        }
                                        for (c = u, u == n && (C[m++] = f, u = l); u > a;) C[m++] = y[u], u = P[u];
                                        C[m++] = f = 255 & y[u], n < v && (P[n] = l, y[n] = f, 0 == (++n & o) && n < v && (r++, o += n)), l = c
                                    }
                                    m--, R[g++] = C[m], d++
                                }
                                for (d = g; d < T; d++) R[d] = 0;
                                return R
                            }(n.data.minCodeSize, n.data.blocks, n.descriptor.width * n.descriptor.height);
                        n.descriptor.lct.interlaced && (a = function(e, t) {
                            for (var i = new Array(e.length), n = e.length / t, a = function(n, a) {
                                    var o = e.slice(a * t, (a + 1) * t);
                                    i.splice.apply(i, [n * t, t].concat(o))
                                }, o = [0, 4, 2, 1], r = [8, 8, 4, 2], s = 0, c = 0; c < 4; c++)
                                for (var l = o[c]; l < n; l += r[c]) a(l, s), s++;
                            return i
                        }(a, n.descriptor.width));
                        var o = {
                            pixels: a,
                            dims: {
                                top: e.image.descriptor.top,
                                left: e.image.descriptor.left,
                                width: e.image.descriptor.width,
                                height: e.image.descriptor.height
                            }
                        };
                        return o.colorTable = n.descriptor.lct && n.descriptor.lct.exists ? n.lct : t, e.gce && (o.delay = 10 * (e.gce.delay || 10), o.disposalType = e.gce.extras.disposal, e.gce.extras.transparentColorGiven && (o.transparentIndex = e.gce.transparentColorIndex)), i && (o.patch = function(e) {
                            for (var t = e.pixels.length, i = new Uint8ClampedArray(4 * t), n = 0; n < t; n++) {
                                var a = 4 * n,
                                    o = e.pixels[n],
                                    r = e.colorTable[o] || [0, 0, 0];
                                i[a] = r[0], i[a + 1] = r[1], i[a + 2] = r[2], i[a + 3] = o !== e.transparentIndex ? 255 : 0
                            }
                            return i
                        }(o)), o
                    }
                    console.warn("gif frame does not have associated image.")
                })));
            e("decompressFrames", (function(e, t) {
                return e.frames.filter((function(e) {
                    return e.image
                })).map((function(i) {
                    return r(i, e.gct, t)
                }))
            })), t._RF.pop()
        }
    }
}))