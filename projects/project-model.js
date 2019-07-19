const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    insert,

}

function find() {
    return db('projects');
}

function findById(id) {
    return db('projects')
        .where({ id })
        .first()
        .then(project => {
            if (project) {
                return project;
            } else {
                return null;
            }
        })
}

function insert(project) {
    return db('projects')
        .insert(project)
        .then(id => {
            return findById(id[0]);
        });
}
