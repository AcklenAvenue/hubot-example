var FakeRobot = (function () {
    function FakeRobot() {
        this.testResponses = [];
    }
    FakeRobot.prototype.respond = function (exp, msg) {
        var response = this.testResponses[exp];
        if (response) {
            msg(response);
        }
    };
    FakeRobot.prototype.setup = function (exp, response) {
        this.testResponses[exp] = response;
    };
    return FakeRobot;
})();
exports.FakeRobot = FakeRobot;
