var FakeRobot = (function () {
    function FakeRobot() {
        this.testResponses = [];
    }
    FakeRobot.prototype.hear = function (exp, msg) {
        var response = this.testResponses[exp];
        if (response) {
            msg(response);
        }
    };
    FakeRobot.prototype.respond = function (exp, msg) {
        var response = this.testResponses[exp];
        if (response) {
            msg(response);
        }
    };
    FakeRobot.prototype.overhears = function (exp, response) {
        this.testResponses[exp] = response;
    };
    return FakeRobot;
})();
exports.FakeRobot = FakeRobot;
