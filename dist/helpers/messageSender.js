var MessageSender = (function () {
    function MessageSender() {
    }
    MessageSender.prototype.send = function (response, newMessage) {
        if (newMessage) {
            response.send(newMessage);
        }
    };
    return MessageSender;
})();
exports.MessageSender = MessageSender;
