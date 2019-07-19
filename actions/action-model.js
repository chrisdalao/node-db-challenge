const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    insert
}

function find() {
    return db('actions');
}


function findById(id) {
    return db('actions')
        .where({ id })
        .first()
        .then(action => {
            if (action) {
                return action;
            } else {
                return null;
            }
        })
}

function insert(action) {
    return db('actions')
        .insert(action)
        .then(id => {
            return findById(id[0]);
        });
}