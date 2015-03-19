/// <reference path="../typings/node/node.d.ts" />
// Description:
//   Say Hi to Hubot.
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot hello - "hello!"
//   howdy - "wait... are you from Texas too?"
//
// Author:
//   Byron Sommardahl

function HelloWorld(robot:any){
		robot.respond(/hello/, (msg) => {
			msg.reply("hello!")
		})

		robot.hear(/howdy/, (msg)=> {
			msg.send("wait... are you from Texas too?")
		})
	}
module.exports = HelloWorld;