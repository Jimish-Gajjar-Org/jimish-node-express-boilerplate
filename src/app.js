import express from 'express';
import config from './config/index.js';

const app = express();
const port = config.SERVER_PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello, Express with ES6 Modules!');
});

app.listen(port, () => {
  console.log(`Server Is Up At http://localhost:${port}`);
});
