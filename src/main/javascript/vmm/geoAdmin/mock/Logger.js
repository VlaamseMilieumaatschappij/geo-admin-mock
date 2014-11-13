var chalk = require('chalk');

module.exports = function log(operation, status, url) {
    console.log(chalk.green.bold(operation), chalk.magenta(status), url);
};
