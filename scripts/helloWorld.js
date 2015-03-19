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

module.exports = function(robot){ 
	robot.respond(/hello/, function(msg){
		msg.reply("hello!");
	});

	robot.hear(/howdy/, function(msg){
		msg.send("wait... are you from Texas too?");
	});
};