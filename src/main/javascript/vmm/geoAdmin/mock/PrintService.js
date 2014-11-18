var _ = require('lodash-node'),
    loadJSON = require('./JSONService').load;

module.exports = {
    info: _.partial(loadJSON, 'print-info.json')
};
