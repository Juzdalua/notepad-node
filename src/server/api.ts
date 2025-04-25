import express, { Request, Response } from 'express';
import cors from 'cors';

export const app = express();

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST'],
  }),
);
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  console.log('HI');
  res.end();
});
