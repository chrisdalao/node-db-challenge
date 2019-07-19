const express = require('express');
const Actions = require('./action-model.js');
const router = express.Router();

router.get('/', (req, res) => {
    Actions.find()
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get actions' });
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Actions.findById(id)
        .then(action => {
            if (action) {
                res.status(200).json(action);
            } else {
                res.status(400).json({ message: 'Could not find action with given id.' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get action' });
        })
});

router.get('/:id/projects', (req, res) => {
    const { id } = req.params;
    Actions.findByProjectId(id)
        .then(action => {
            if (action) {
                res.status(200).json(action);
            } else {
                res.status(400).json({ message: 'Could not find action with given id.' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get action' });
        })
});

router.post('/', (req, res) => {
    const actionData = req.body;
    Actions.insert(actionData)
        .then(action => {
            res.status(201).json(action)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new action' })
        })
});


module.exports = router;
