// server.js
const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

let tasks = [];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const newTask = req.body.task;
    tasks.push(newTask);
    res.status(201).json({ task: newTask });
});

app.delete('/tasks/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    tasks.splice(index, 1);
    res.status(200).json({ message: 'Task deleted' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
