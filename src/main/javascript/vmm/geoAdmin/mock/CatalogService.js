var _ = require('lodash-node'),
    loadJSON = require('./JSONService').load;

module.exports = {
    all: _.partial(loadJSON, 'catalog.json')
};
