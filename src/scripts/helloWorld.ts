/// <reference path="../../typings/node/node.d.ts"/>
// Description
//  An example Hubot script written in TypeScript
//
// Configuration:
//   None
//
// Commands:
//   hubot hello - responds 'Howdy!'
//
// Author:
//   Byron Sommardahl <byron@acklenavenue.com>

function HelloWorld(robot: any) {

	robot.respond(/hello/i, (msg: any) => {
		msg.reply('Howdy!')	
	})

	robot.hear(/howdy/i, (msg: any) => {
		msg.send('Hola!')
	})
}

export = HelloWorld;