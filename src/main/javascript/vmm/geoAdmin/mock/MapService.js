var _ = require('lodash-node'),
    log = require('./Logger'),
    loadJSON = require('./JSONService').load;

module.exports = {
    metaData: metaData,
    config: _.partial(loadJSON, 'layersConfig.json'),
    attribute: attribute,
    legend: legend,
    identify: identify,
    find: find,
    feature: feature,
    popup: popup
};

function metaData(req, res, next) {
    log('GET metaData', 404, req.url);
    return next();
}

function attribute(req, res, next) {
    log('GET attribute', 404, req.url);
    return next();
}

function legend(req, res, next) {
    log('GET legend', 404, req.url);
    return next();
}

function identify(req, res, next) {
    log('GET identify', 404, req.url);
    return next();
}

function find(req, res, next) {
    log('GET find', 404, req.url);
    return next();
}

function feature(req, res, next) {
    log('GET feature', 404, req.url);
    return next();
}

function popup(req, res, next) {
    log('GET popup', 404, req.url);
    return next();
}
