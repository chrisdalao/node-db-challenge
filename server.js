const express = require('express');

// const projectRouter = require('./projects/project-router');
// const actionRouter = require('./actions/action-router');

const server = express();

server.use(express.json());
// server.use('/api/projects', projectRouter);
// server.use('/api/actions', actionRouter);

server.get('/', (req, res) => {
    res.send('<h1>Node-DB Sprint Challenge</h1>')
})

module.exports = server;