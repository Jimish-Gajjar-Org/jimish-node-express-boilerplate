import express from 'express';
import config from './config';
import Routes from './routes';

const app = express();
const port = config.SERVER_PORT || 4000;

app.use('/demo', Routes.DemoRouter);

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server Is Up At http://localhost:${port}`);
});
