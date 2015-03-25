/// <reference path="../../../typings/es6-promise/es6-promise.d.ts" />
var rsvp = require('es6-promise');
var Promise = rsvp.Promise;
var FakeHttpClient = (function () {
    function FakeHttpClient() {
    }
    FakeHttpClient.prototype.setupGetThrows = function (err) {
        FakeHttpClient._error = err;
    };
    FakeHttpClient.prototype.setupGet = function (url, responseBody) {
        FakeHttpClient._get = {
            url: url,
            responseBody: responseBody
        };
    };
    FakeHttpClient.prototype.get = function (url) {
        if (FakeHttpClient._error) {
            return new Promise(function (resolve, reject) {
                reject(FakeHttpClient._error);
            });
        }
        if (!FakeHttpClient._get) {
            throw new Error("Please use setupGet to prepare the fake.");
        }
        if (FakeHttpClient._get.url != url) {
            throw new Error("Wrong url was used: " + FakeHttpClient._get.url);
        }
        var responseBody = FakeHttpClient._get.responseBody;
        return new Promise(function (resolve, reject) {
            resolve(responseBody);
        });
    };
    return FakeHttpClient;
})();
module.exports = FakeHttpClient;
