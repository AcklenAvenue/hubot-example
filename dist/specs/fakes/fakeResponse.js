var FakeResponse = (function () {
    function FakeResponse() {
        var _this = this;
        this.messageSent = "none";
        this.messageReplied = "none";
        this.reply = function (msg) {
            _this.messageReplied = msg;
        };
        this.send = function (msg) {
            _this.messageSent = msg;
        };
    }
    return FakeResponse;
})();
exports.FakeResponse = FakeResponse;
