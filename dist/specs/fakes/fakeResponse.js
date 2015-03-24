var FakeResponse = (function () {
    function FakeResponse() {
        var _this = this;
        this.messageSent = "none";
        this.send = function (msg) {
            _this.messageSent = msg;
        };
    }
    return FakeResponse;
})();
exports.FakeResponse = FakeResponse;
