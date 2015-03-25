var _this = this;
var HelloWorld = require('../scripts/HelloWorld');
var rob = require('./fakes/FakeRobot');
var FakeRobot = rob.FakeRobot;
var res = require('./fakes/FakeResponse');
var FakeResponse = res.FakeResponse;
var chai = require('chai');
var expect = chai.expect;
describe("The Hello World Hubot script", function () {
    beforeEach(function () {
        _this.robot = new FakeRobot();
    });
    it("should respond to 'hello' with 'Howdy!'", function () {
        var resp = new FakeResponse();
        _this.robot.overhears("hello", resp);
        HelloWorld(_this.robot);
        expect(resp.messageReplied).to.equal("Howdy!");
    });
    it("should hear 'howdy' and respond with 'Hola!'", function () {
        var resp = new FakeResponse();
        _this.robot.overhears("howdy", resp);
        HelloWorld(_this.robot);
        expect(resp.messageSent).to.equal("Hola!");
    });
});
