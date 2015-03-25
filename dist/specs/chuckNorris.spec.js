/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />
/// <reference path="../../typings/chai-as-promised/chai-as-promised.d.ts" />
/// <reference path="../../typings/node/node.d.ts"/>
/// <reference path="../helpers/messageSender.ts"/>
/// <reference path="./fakes/fakeResponse.ts"/>
/// <reference path="../../typings/mocha/mocha.d.ts" />
var _this = this;
var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;
var ChuckNorris = require('../scripts/ChuckNorris');
var rob = require('./fakes/FakeRobot');
var FakeRobot = rob.FakeRobot;
var res = require('./fakes/FakeResponse');
var FakeResponse = res.FakeResponse;
describe("The Chuck Norris Hubot Script (integration)", function () {
    beforeEach(function () {
        _this.robot = new FakeRobot();
    });
    it("should respond to name with personalized joke", function (done) {
        var response = new FakeResponse();
        _this.robot.overhears("chuck norris Byron", response);
        ChuckNorris(_this.robot);
        expect(response.waitForMessageToBeSent()).to.eventually.contain("Byron").notify(done);
    });
    it("should respond with normal Chuck Norris joke", function (done) {
        var response = new FakeResponse();
        _this.robot.overhears("chuck norris", response);
        ChuckNorris(_this.robot);
        expect(response.waitForMessageToBeSent()).to.eventually.contain("Norris").notify(done);
    });
});
