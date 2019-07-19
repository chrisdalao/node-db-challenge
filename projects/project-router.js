const express = require('express');
const Projects = require('./project-model.js');
const router = express.Router();

router.get('/', (req, res) => {
    Projects.find()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects' });
        })
})


router.get('/:id', (req, res) => {
    const { id } = req.params;
    Projects.findById(id)
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
    Projects.insert(projectData)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new project' })
        })
});

module.exports = router;
