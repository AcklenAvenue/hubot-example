/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />
/// <reference path="../../typings/node/node.d.ts"/>
var _this = this;
var chai = require('chai');
var expect = chai.expect;
var c = require('../helpers/ChuckNorrisImpersonator');
var FakeHttpClient = require('./fakes/FakeHttpClient');
describe("The Chuck Norris Impersonator", function () {
    beforeEach(function () {
        _this.httpClient = new FakeHttpClient();
    });
    describe("when impersonating with name", function () {
        var name = "Byron";
        var theJoke = "some joke with " + name;
        beforeEach(function () {
            var simulatedApiResponseBody = { value: { joke: theJoke } };
            _this.httpClient.setupGet("http://api.icndb.com/jokes/random?firstName=" + name + "&lastName=", simulatedApiResponseBody);
            _this.impersonator = new c.ChuckNorrisImpersonator(_this.httpClient.get);
        });
        it("should return a joke including the given name", function (done) {
            _this.impersonator.impersonate(name).then(function (response) {
                expect(response).to.equal(theJoke);
                done();
            });
        });
    });
    describe("when impersonating without name", function () {
        var theJoke = "some joke";
        beforeEach(function () {
            var simulatedApiResponseBody = { value: { joke: theJoke } };
            _this.httpClient.setupGet("http://api.icndb.com/jokes/random", simulatedApiResponseBody);
            _this.impersonator = new c.ChuckNorrisImpersonator(_this.httpClient.get);
        });
        it("should return a joke", function (done) {
            _this.impersonator.impersonate().then(function (response) {
                expect(response).to.equal(theJoke);
                done();
            });
        });
    });
    describe("when Chuck Norris folds his arms", function () {
        var theJoke = "Achievement unlocked: Chuck Norris is quiet!";
        beforeEach(function () {
            var simulatedApiResponseBody = { value: { joke: '' } };
            _this.httpClient.setupGet("http://api.icndb.com/jokes/random", simulatedApiResponseBody);
            _this.impersonator = new c.ChuckNorrisImpersonator(_this.httpClient.get);
        });
        it("should unlock the achievement", function (done) {
            _this.impersonator.impersonate().then(function (response) {
                expect(response).to.equal(theJoke);
                done();
            });
        });
    });
    describe("when Chuck Norris fakes an error", function () {
        var error = "you have a problem";
        var chuckNorrisResponse = "Chuck Norris says: " + error;
        beforeEach(function () {
            _this.httpClient.setupGetThrows(error);
            _this.impersonator = new c.ChuckNorrisImpersonator(_this.httpClient.get);
        });
        it("should tell the user he has a problem", function (done) {
            _this.impersonator.impersonate().then(function (response) {
                expect(response).to.equal(chuckNorrisResponse);
                done();
            });
        });
    });
});
