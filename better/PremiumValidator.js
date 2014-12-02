better.PremiumValidator = (function() {

    function pv() {}

    pv.prototype = Object.create(better.iValidator);

    pv.prototype.validate = function(message) {
        // premium uzivatel muze poslat cokoliv, krome prazdne zpravy
        if (message) {
            return true;
        }
        // log, alert..
        return false;
    }

    pv.prototype.getRules = function() {
        return 'Muzes poslat cokoliv krome prazdne zpravy.';
    }

    return pv;

})();