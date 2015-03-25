var MessageSender = (function () {
    function MessageSender() {
    }
    MessageSender.prototype.send = function (response, newMessage) {
        if (newMessage) {
            response.send(newMessage);
        }
    };
    MessageSender.prototype.reply = function (response, newMessage) {
        if (newMessage) {
            response.reply(newMessage);
        }
    };
    return MessageSender;
})();
exports.MessageSender = MessageSender;
