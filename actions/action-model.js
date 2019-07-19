const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    insert,
    findByProjectId
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

function findByProjectId(projectId) {
    return db('actions')
        .where({ project_id: projectId })
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