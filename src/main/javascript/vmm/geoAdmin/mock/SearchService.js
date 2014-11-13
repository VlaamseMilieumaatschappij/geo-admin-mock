var log = require('./Logger');

module.exports = {
    search: search
};

function search(req, res, next) {
    log('GET search', 404, req.url);
    return next();
}
