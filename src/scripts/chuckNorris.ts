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

import sm = require("../helpers/messageSender");
import i = require("../helpers/chuckNorrisImpersonator");

class ChuckNorris {
	
	constructor(private messageSender: sm.ISendMessages, private impersonator: i.IImpersonateChuckNorris){

	}

	registerListener = (robot: any) => {
		robot.respond(/(chuck norris)?(.*)/i, (msg: any) => {
			var name = msg.match[2]
			this.impersonator.impersonate(name).then((joke)=>{
				this.messageSender.send(msg, joke);
			})
		})
	}
}

var rp = require("request-promise")
var imp = new i.ChuckNorrisImpersonator(rp)
var ms = new sm.MessageSender()
var fn = new ChuckNorris(ms, imp).registerListener
export = fn