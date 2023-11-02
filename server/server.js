const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: 'Hello from Node.js!' });
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Node.js API!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
