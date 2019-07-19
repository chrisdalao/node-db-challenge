const express = require('express');
const Projects = require('./action-model.js');
const router = express.Router();

router.get('/', (req, res) => {
    Projects.getActions()
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get actions' });
        })
})

module.exports = router;
