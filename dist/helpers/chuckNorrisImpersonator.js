var ChuckNorrisImpersonator = (function () {
    function ChuckNorrisImpersonator(httpClient) {
        this.httpClient = httpClient;
    }
    ChuckNorrisImpersonator.prototype.impersonate = function (name) {
        var urlToGet = "http://api.icndb.com/jokes/random";
        if (name != null)
            urlToGet = urlToGet + "?firstName=" + name + "&lastName=";
        return this.httpClient(urlToGet).then(function (body) {
            var message_from_chuck = JSON.parse(body);
            if (message_from_chuck.length == 0) {
                return "Achievement unlocked: Chuck Norris is quiet!";
            }
            else {
                return message_from_chuck.value.joke.replace(/\s\s/g, " ");
            }
        }).catch(function (err) {
            return "Chuck Norris says: " + err;
        });
    };
    return ChuckNorrisImpersonator;
})();
