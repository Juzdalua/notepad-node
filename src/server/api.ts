import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import initRouter from './routes';

export const app = express();

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST'],
  }),
);
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

initRouter(app);
