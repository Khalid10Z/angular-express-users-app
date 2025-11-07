const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const db = require('./database');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World! The server is running ');
});

app.get('/users', (req, res) => {
  res.json(db.users);
});

app.get('/users/:id', (req, res) => {
  const user = db.users.find(u => u.id === Number(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.listen(port, () => {
  console.log(`[Server] Running at http://localhost:${port}`);
});
