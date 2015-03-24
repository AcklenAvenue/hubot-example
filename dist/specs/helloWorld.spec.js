var _this = this;
var chai = require('chai');
var expect = chai.expect;
var hubot_script = require('../scripts/HelloWorld');
var rob = require('./fakes/FakeRobot');
var res = require('./fakes/FakeResponse');
describe("The Hello World Hubot script", function () {
    beforeEach(function () {
        _this.robot = new rob.FakeRobot();
    });
    it("should respond to 'hello' with 'Howdy!'", function () {
        var resp = new res.FakeResponse();
        _this.robot.setup(/hello/i, resp);
        hubot_script.HelloWorld(_this.robot);
        expect(resp.messageSent).to.equal("Howdy!");
    });
});
