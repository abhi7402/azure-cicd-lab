const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    version: '1.0',
    timestamp: new Date() 
  });
});

// Todo API
let todos = [
  { id: 1, task: "Learn CI/CD Basics", done: false },
  { id: 2, task: "Deploy to Azure", done: false },
  { id: 3, task: "Break the pipeline intentionally", done: false }
];

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  const todo = { 
    id: Date.now(), 
    task: req.body.task, 
    done: false 
  };
  todos.push(todo);
  res.json(todo);
});

app.listen(port, () => {
  console.log(`✅ App running on port ${port}`);
});
