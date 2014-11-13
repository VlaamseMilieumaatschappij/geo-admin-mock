var _ = require('lodash-node'),
    log = require('./Logger'),
    loadJSON = require('./JSONService').load;

module.exports = {
    height: height,
    profile: profile,
    info: _.curry(loadJSON)('info.json')
};

function height(req, res, next) {
    log('GET height', 404, req.url);
    return next();
}

function profile(req, res, next) {
    log('GET profile', 404, req.url);
    return next();
}
