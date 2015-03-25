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

import ms = require("../helpers/messageSender");
import imp = require("../helpers/chuckNorrisImpersonator");

class ChuckNorris {
	
	constructor(private messageSender: ms.ISendMessages, private impersonator: imp.IImpersonateChuckNorris){
	}

	registerListener = (robot: any) => {
		robot.respond(/chuck norris?(.*)/i, (msg: any) => {
			var name = msg.match[1]
			this.impersonator.impersonate(name).then((joke)=>{
				this.messageSender.send(msg, joke);
			})
		})
	}
}

var httpClient = require("request-promise")

var MessageSender = ms.MessageSender;
var ChuckNorrisImpersonator = imp.ChuckNorrisImpersonator;

var fn = new ChuckNorris(new MessageSender(), new ChuckNorrisImpersonator(httpClient)).registerListener
export = fn