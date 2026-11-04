System.register("chunks:///_virtual/Bit.ts", ["cc", "./MathEx.ts"], (function(e) {
    var t, i;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }, function(e) {
            i = e.MathEx
        }],
        execute: function() {
            var n;
            e("Bit", void 0), t._RF.push({}, "c1576oTSixIPobvQ2R0jrAh", "Bit", void 0),
                function(e) {
                    e.bnot = u, e.band = l, e.bor = c, e.bxor = d, e.brshift = _, e.blshift = h, e.bxor2 = p, e.rshift = g, e.d2b = m, e.tobits = o, e.tonumb = r;
                    for (var t = [], n = 0; n < 32; n++) t[n] = Math.pow(2, 32 - n - 1);

                    function a(e) {
                        e - Math.floor(e) > 0 && console.log("Error:trying to use bitwise operation on non-integer!")
                    }

                    function o(e) {
                        if (void 0 === e && (e = null), null == e || null == e) return null;
                        if (e < 0) return o(u(Math.abs(e)) + 1);
                        for (var t = [], n = 0; e > 0;) {
                            var a = i.mod(e, 2);
                            t[n] = 1 == a ? 1 : 0, e = (e - a) / 2, n += 1
                        }
                        return t
                    }

                    function r(e) {
                        if (!e) return 0;
                        for (var t = e.length, i = 0, n = 1, a = 0; a < t; a++) i += e[a] * n, n *= 2;
                        return i
                    }

                    function s(e, t) {
                        var i = [],
                            n = [];
                        if (e.length > t.length ? (i = e, n = t) : (i = t, n = e), n && i)
                            for (var a = n.length; a < i.length; a++) n[a] = 0
                    }

                    function c(e, t) {
                        var i = o(e),
                            n = o(t);
                        s(i, n);
                        for (var a = [], c = Math.max(i.length, n.length), l = 0; l < c; l++) 0 == i[l] && 0 == n[l] ? a[l] = 0 : a[l] = 1;
                        return r(a)
                    }

                    function l(e, t) {
                        var i = o(e),
                            n = o(t);
                        s(i, n);
                        for (var a = [], c = Math.max(i.length, n.length), l = 0; l < c; l++) 0 == i[l] || 0 == n[l] ? a[l] = 0 : a[l] = 1;
                        return r(a)
                    }

                    function u(e) {
                        for (var t = o(e), i = Math.max(t.length, 32), n = 0; n < i; n++) 1 == t[n] ? t[n] = 0 : t[n] = 1;
                        return r(t)
                    }

                    function d(e, t) {
                        var i = o(e),
                            n = o(t);
                        s(i, n);
                        for (var a = [], c = Math.max(i.length, n.length), l = 0; l < c; l++) i[l] != n[l] ? a[l] = 1 : a[l] = 0;
                        return r(a)
                    }

                    function _(e, t) {
                        a(e);
                        var i = 0;
                        e < 0 && (e = u(Math.abs(e)) + 1, i = 2147483648);
                        for (var n = 0; n < t; n++) e /= 2, e = c(Math.floor(e), i);
                        return Math.floor(e)
                    }

                    function h(e, t) {
                        a(e), e < 0 && (e = u(Math.abs(e)) + 1);
                        for (var i = 0; i < t; i++) e *= 2;
                        return l(e, 0x8000000000000000)
                    }

                    function p(e, t) {
                        var i = c(u(e), u(t));
                        return l(c(e, t), i)
                    }

                    function f(e) {
                        for (var i = 0, n = 0; n < 32; n++) 1 == e[n] && (i += t[n]);
                        return i
                    }

                    function m(e) {
                        e = e >= 0 ? e : 4294967295 + e + 1;
                        for (var i = [], n = 0; n < 32; n++) e >= t[n] ? (i[n] = 1, e -= t[n]) : i[n] = 0;
                        return i
                    }

                    function g(e, t) {
                        var i = m(e);
                        t = (t = t <= 32 ? t : 32) >= 0 ? t : 0;
                        for (var n = 32; n > t; n--) i[n - 1] = i[n - 1 - t];
                        for (var a = 0; a < t; a++) i[a] = 0;
                        return f(i)
                    }
                    e.check_int = a, e.to_bits = o, e.tbl_to_number = r, e.expand = s, e.bit_or = c, e.bit_and = l, e.bit_not = u, e.bit_xor = d, e.bit_rshift = _, e.bit_lshift = h, e.bit_xor2 = p, e._b2d = f, e._d2b = m, e._and = function(e, t) {
                        for (var i = m(e), n = m(t), a = [], o = 0; o < 32; o++) 1 == i[o] && 1 == n[o] ? a[o] = 1 : a[o] = 0;
                        return f(a)
                    }, e._rshift = g, e._not = function(e) {
                        for (var t = m(e), i = [], n = 0; n < 32; n++) 1 == t[n] ? i[n] = 0 : i[n] = 1;
                        return f(i)
                    }, e._or = function(e, t) {
                        for (var i = m(e), n = m(t), a = [], o = 0; o < 32; o++) 1 == i[o] || 1 == n[o] ? a[o] = 1 : a[o] = 0;
                        return f(a)
                    }
                }(n || (n = e("Bit", {}))), t._RF.pop()
        }
    }
}))