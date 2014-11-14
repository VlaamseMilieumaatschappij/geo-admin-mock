var _ = require('lodash-node'),
    loadJSON = require('./JSONService').load;

module.exports = {
    search: search
};

function search(req, res, next) {
    var filter = _.partial(filterResults, req.params.searchText);
    return loadJSON(req.params.type + '.json', req, res, next, filter);
}

function filterResults(term, data) {
    term = term.toLowerCase();

    data.results = data.results
        .filter(function (result) {
            return result.attrs.label.toLowerCase().indexOf(term) !== -1;
        });

    return data;
}
