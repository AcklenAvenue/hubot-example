/// <reference path="../../typings/node/node.d.ts"/>
// Description:
//   Chuck Norris awesomeness
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot chuck norris -- random Chuck Norris awesomeness
//   hubot chuck norris <name> -- let's see how <name> would do as Chuck Norris
//
// Author: 
//   dlinsin
//
// Ported by:
//   Byron Sommardahl <byron@acklenavenue.com>
var ms = require("../helpers/messageSender");
var imp = require("../helpers/chuckNorrisImpersonator");
var ChuckNorris = (function () {
    function ChuckNorris(messageSender, impersonator) {
        var _this = this;
        this.messageSender = messageSender;
        this.impersonator = impersonator;
        this.registerListener = function (robot) {
            robot.respond(/chuck norris?(.*)/i, function (msg) {
                var name = msg.match[1];
                _this.impersonator.impersonate(name).then(function (joke) {
                    _this.messageSender.send(msg, joke);
                });
            });
        };
    }
    return ChuckNorris;
})();
var httpClient = require("request-promise");
var MessageSender = ms.MessageSender;
var ChuckNorrisImpersonator = imp.ChuckNorrisImpersonator;
var fn = new ChuckNorris(new MessageSender(), new ChuckNorrisImpersonator(httpClient)).registerListener;
module.exports = fn;
