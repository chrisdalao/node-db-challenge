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
        .then(project => {
            if (project) {
                res.status(200).json(project);
            } else {
                res.status(400).json({ message: 'Could not find project with given id.' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get project' });
        })
});

router.post('/', (req, res) => {
    const projectData = req.body;
    Actions.insert(projectData)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new project' })
        })
});


module.exports = router;
