import express from 'express';
import rootController from './root.controller';
import { asyncHandler } from '@/server/handler';

const router = express.Router();

router.route('/').get(asyncHandler(rootController.home));

export default router;
