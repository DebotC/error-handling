import express, { Request, Response } from 'express';
const errorHandler = require('./error-handler');
const appService = require('./app.service');

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.json(appService.getSomething());
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

