System.register("chunks:///_virtual/GlobalCmdPBConfig.ts", ["cc", "./AppEvent.ts", "./GlobalCmd.ts"], (function(e) {
    var t, i, n;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }, function(e) {
            i = e.AppEvent
        }, function(e) {
            n = e.GlobalCmdHead
        }],
        execute: function() {
            var a, o;
            t._RF.push({}, "351d5ZxAatC564bqsx2rgC8", "GlobalCmdPBConfig", void 0);
            var r = e("CmdBindingPB", (function(e, t, i) {
                return void 0 === i && (i = null), {
                    packageID: e,
                    funcName: t,
                    respEvent: i
                }
            }));
            e("GlobalPBCmdBinding", {
                REQ: (a = {}, a[n.CLIENT_COMMAND_TEAM_OPERATE] = r("Access", "ReqTeamOperation", null), a[n.CLIENT_COMMAND_TEAM_MATCH] = r("Access", "ReqTeamMatch", null), a),
                RESP: (o = {}, o[n.SERVER_COMMAND_TEAM_OPERATE] = r("Access", "RspTeamOperation", i.NET_RECEIVE_TEAM_OPERATE), o[n.SERVER_COMMAND_TEAM_MATCH] = r("Access", "RspTeamMatch", i.NET_RECEIVE_TEAM_MATCH), o)
            }), t._RF.pop()
        }
    }
}))