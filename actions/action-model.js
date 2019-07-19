const db = require('../data/db-config.js');

module.exports = {
    getActions
}

function getActions() {
    return db('actions');
}