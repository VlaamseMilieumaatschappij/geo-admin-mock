var fs = require('fs'),
    log = require('./Logger');

module.exports = {
    load: load
};

var relativePath = '/src/main/resources/',
    encoding = 'utf-8';

function load(file, req, res, next) {
    fs.readFile(process.cwd() + relativePath + file, encoding, function(err, content) {
        if (err) {
            log('GET', 404, req.url);
            res.send(404, 'The requested path does not exist: there is no data file at ' + file);
        }

        content = JSON.parse(content);

        log('GET', 200, req.url);
        res.json(content);
    });

    return next();
}
