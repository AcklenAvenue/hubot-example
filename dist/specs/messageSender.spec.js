/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />
/// <reference path="../../typings/node/node.d.ts"/>
/// <reference path="../helpers/messageSender.ts"/>
/// <reference path="./fakes/fakeResponse.ts"/>
var _this = this;
var chai = require('chai');
var expect = chai.expect;
var s = require('../helpers/MessageSender');
var f = require('./fakes/FakeResponse');
describe("The Message Sender", function () {
    beforeEach(function () {
        _this.messageSender = new s.MessageSender();
        _this.response = new f.FakeResponse();
    });
    it("should send with a message", function () {
        _this.messageSender.send(_this.response, "test");
        expect(_this.response.messageSent).to.equal("test");
    });
    it("should not send with empty input", function () {
        _this.messageSender.send(_this.response);
        expect(_this.response.messageSent).to.equal("none");
    });
    it("should respond with a message", function () {
        _this.messageSender.reply(_this.response, "test");
        expect(_this.response.messageReplied).to.equal("test");
    });
    it("should not respond with empty input", function () {
        _this.messageSender.reply(_this.response);
        expect(_this.response.messageReplied).to.equal("none");
    });
});
