System.register("chunks:///_virtual/UTF.ts", ["cc"], (function(e) {
    var t;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }],
        execute: function() {
            var i;
            e("UTF", void 0), t._RF.push({}, "9f257GW7ItBprqS1yNV2epE", "UTF", void 0),
                function(e) {
                    function t(e, t) {
                        for (var i, n = null; null !== (i = null !== n ? n : e());) i >= 55296 && i <= 57343 && null !== (n = e()) && n >= 56320 && n <= 57343 ? (t(1024 * (i - 55296) + n - 56320 + 65536), n = null) : t(i);
                        null !== n && t(n)
                    }

                    function i(e, t) {
                        var i = null;
                        for ("number" == typeof e && (i = e, e = function() {
                                return null
                            }); null !== i || null !== (i = e());) i < 128 ? t(127 & i) : i < 2048 ? (t(i >> 6 & 31 | 192), t(63 & i | 128)) : i < 65536 ? (t(i >> 12 & 15 | 224), t(i >> 6 & 63 | 128), t(63 & i | 128)) : (t(i >> 18 & 7 | 240), t(i >> 12 & 63 | 128), t(i >> 6 & 63 | 128), t(63 & i | 128)), i = null
                    }

                    function n(e, t) {
                        var i = null;
                        for ("number" == typeof e && (i = e, e = function() {
                                return null
                            }); null !== i || null !== (i = e());) i <= 65535 ? t(i) : (t(55296 + ((i -= 65536) >> 10)), t(i % 1024 + 56320)), i = null
                    }

                    function a(e, t) {
                        for (var i, n, a, o, r = function(e) {
                                e = e.slice(0, e.indexOf(null));
                                var t = Error(e.toString());
                                throw t.name = "TruncatedError", t.bytes = e, t
                            }; null !== (i = e());)
                            if (0 == (128 & i)) t(i);
                            else if (192 == (224 & i)) null === (n = e()) && r([i, n]), t((31 & i) << 6 | 63 & n);
                        else if (224 == (240 & i))(null === (n = e()) || null === (a = e())) && r([i, n, a]), t((15 & i) << 12 | (63 & n) << 6 | 63 & a);
                        else {
                            if (240 != (248 & i)) throw RangeError("Illegal starting byte: " + i);
                            (null === (n = e()) || null === (a = e()) || null === (o = e())) && r([i, n, a, o]), t((7 & i) << 18 | (63 & n) << 12 | (63 & a) << 6 | 63 & o)
                        }
                    }
                    e.UTF16_to_UTF8 = t, e.Encode_UTF16_to_UTF8 = function(e, n) {
                        t(e, (function(e) {
                            i(e, n)
                        }))
                    }, e.Encode_UTF8 = i, e.UTF8_to_UTF16 = n, e.Decode_UTF8_to_UTF16 = function(e, t) {
                        a(e, (function(e) {
                            n(e, t)
                        }))
                    }, e.Decode_UTF8 = a
                }(i || (i = e("UTF", {}))), t._RF.pop()
        }
    }
}))