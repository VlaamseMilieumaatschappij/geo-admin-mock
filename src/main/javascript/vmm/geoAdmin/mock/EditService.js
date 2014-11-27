var _ = require('lodash-node'),
    log = require('./Logger'),
    loadJSON = require('./JSONService').load;

module.exports = {
    pull: _.partial(loadJSON, 'features.json'),
    push: push
};

function push(req, res, next) {
    log('POST push', 404, req.url);
    return next();
}
