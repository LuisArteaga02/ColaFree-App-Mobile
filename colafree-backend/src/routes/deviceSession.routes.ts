import { Router } from 'express';
import { createDeviceSessionController } from '../controllers/deviceSession.controller.js';

const router = Router();

router.post(
    '/device-sessions',
    createDeviceSessionController,
);

export default router;