System.register("chunks:///_virtual/MathEx.ts", ["cc"], (function(e) {
    var t;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }],
        execute: function() {
            var i;
            e("MathEx", void 0), t._RF.push({}, "3ba17dTHotK07oFCtlNUO4v", "MathEx", void 0), (i || (i = e("MathEx", {}))).mod = function(e, t) {
                return e && t ? 0 == t ? (console.log("Error: MathEx.mod 除数不能为0 nNum=" + e + " dNum=" + t), null) : (e % t + t) % t : (console.log("Error: MathEx.mod 参数不能为空 nNum=" + e + " dNum=" + t), null)
            }, t._RF.pop()
        }
    }
}))