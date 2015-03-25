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
function HelloWorld(robot) {
    robot.respond(/hello/i, function (msg) {
        msg.reply('Howdy!');
    });
    robot.hear(/howdy/i, function (msg) {
        msg.send('Hola!');
    });
}
module.exports = HelloWorld;
