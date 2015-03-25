var ChuckNorrisImpersonator = (function () {
    function ChuckNorrisImpersonator(getClient) {
        this.getClient = getClient;
    }
    ChuckNorrisImpersonator.prototype.impersonate = function (name) {
        var urlToGet = "http://api.icndb.com/jokes/random";
        if (name != null)
            urlToGet = urlToGet + "?firstName=" + name + "&lastName=";
        var promise = this.getClient(urlToGet);
        return promise.then(function (message_from_chuck) {
            var joke = message_from_chuck.value.joke;
            if (joke.length == 0) {
                return "Achievement unlocked: Chuck Norris is quiet!";
            }
            else {
                return joke.replace(/\s\s/g, " ");
            }
        }).catch(function (err) {
            return "Chuck Norris says: " + err;
        });
    };
    return ChuckNorrisImpersonator;
})();
exports.ChuckNorrisImpersonator = ChuckNorrisImpersonator;
