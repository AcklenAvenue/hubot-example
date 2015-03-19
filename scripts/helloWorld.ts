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

interface IRobot {
	respond(regexp: string,  )
}
class HelloWorld(private robot:IRobot){

	constructor(){
		robot.respond(/hello/, (msg) => {
			msg.reply("hello!")
		})

		robot.hear(/howdy/, (msg)=> {
			msg.send("wait... are you from Texas too?")
		})
	}
}

module.exports = new HelloWorld()