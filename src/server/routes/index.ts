import { Application } from 'express';
import rootRouter from '../services/root/root.route';

const initRouter = (app: Application) => {
  app.use('/', rootRouter);
};

export default initRouter;
