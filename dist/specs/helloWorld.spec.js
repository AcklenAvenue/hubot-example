var _this = this;
var HelloWorld = require('../scripts/HelloWorld');
var rob = require('./fakes/FakeRobot');
var res = require('./fakes/FakeResponse');
var chai = require('chai');
var expect = chai.expect;
describe("The Hello World Hubot script", function () {
    beforeEach(function () {
        _this.robot = new rob.FakeRobot();
    });
    it("should respond to 'hello' with 'Howdy!'", function () {
        var resp = new res.FakeResponse();
        _this.robot.overhears(/hello/i, resp);
        HelloWorld(_this.robot);
        expect(resp.messageReplied).to.equal("Howdy!");
    });
    it("should hear 'howdy' and respond with 'Hola!'", function () {
        var resp = new res.FakeResponse();
        _this.robot.overhears(/howdy/i, resp);
        HelloWorld(_this.robot);
        expect(resp.messageSent).to.equal("Hola!");
    });
});
