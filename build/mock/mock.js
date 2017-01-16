var more = require('./more.json');
var banner = require('./banner.json');
var nav = require('./nav.json');
var movie = require('./movie.json');
var list = require('./list.json');

module.exports = function() {
    return {
        "list": list,
        "more":more,
        "banner":banner,
        "nav":nav,
        "movie":movie
    }
}

// restful
