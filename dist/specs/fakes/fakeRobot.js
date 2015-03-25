var _ = require("underscore");
var FakeRobot = (function () {
    function FakeRobot() {
        this.testResponses = [];
    }
    FakeRobot.prototype.hear = function (exp, msg) {
        var matching = _.find(this.testResponses, function (r) {
            return exp.test(r.text);
        });
        if (matching) {
            msg(matching.response);
        }
    };
    FakeRobot.prototype.respond = function (exp, msg) {
        var matching = _.find(this.testResponses, function (r) {
            return exp.test(r.text);
        });
        if (matching) {
            var matches = matching.text.match(exp);
            matching.response.registerMatches(matches);
            msg(matching.response);
        }
    };
    FakeRobot.prototype.overhears = function (text, response) {
        this.testResponses.push({ text: text, response: response });
    };
    return FakeRobot;
})();
exports.FakeRobot = FakeRobot;
