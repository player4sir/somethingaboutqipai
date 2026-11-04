System.register("chunks:///_virtual/RandomManager.ts", ["cc"], (function(e) {
    var t;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }],
        execute: function() {
            var i;
            e("RandomManager", void 0), t._RF.push({}, "b843ep28dBO1bnnmLBQm2vo", "RandomManager", void 0),
                function(e) {
                    e.seedrandom = null, e.getRandom = function() {
                        return i.seedrandom ? i.seedrandom.quick() : Math.random()
                    }, e.setSeed = function(e) {
                        i.seedrandom = new Math.seedrandom(e)
                    }, e.getRandomInt = function(e, t, n) {
                        switch (void 0 === n && (n = 2), e = Math.ceil(e), t = Math.floor(t), n) {
                            case 1:
                                return Math.floor(i.getRandom() * (t - e)) + e;
                            case 2:
                                return Math.floor(i.getRandom() * (t - e + 1)) + e;
                            case 3:
                                return Math.floor(i.getRandom() * (t - e - 1)) + e + 1
                        }
                        return 0
                    }, e.getRandomNumber = function(e, t, i) {
                        var n = (9301 * i + 49297) % 233280 / 233280;
                        return e = Math.ceil(e), t = Math.floor(t), Math.floor(n * (t - e + 1)) + e
                    }, e.getRandomByMinMaxList = function(e, t, n, a) {
                        for (var o = [], r = 0; r < n; r++) o.push(i.getRandomInt(e, t));
                        return o
                    }, e.getRandomByObjectList = function(e, t) {
                        for (var n = e.slice(), a = [], o = 0; o < t; o++) {
                            var r = i.getRandomInt(0, t, 1);
                            a.push(n.splice(r, 1)[0])
                        }
                        return a
                    }, e.getRandomBySumList = function(e, t) {
                        for (var n = t, a = 0, o = [], r = 0; r < e; r++) a = i.getRandomInt(0, n, 3), r == e - 1 ? a = n : n -= a, o.push(a);
                        return o
                    }
                }(i || (i = e("RandomManager", {}))), t._RF.pop()
        }
    }
}))