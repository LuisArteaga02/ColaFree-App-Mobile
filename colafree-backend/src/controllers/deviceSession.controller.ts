import type { Request, Response } from 'express';
import { createDeviceSession } from '../services/deviceSession.service.js';

export const createDeviceSessionController = (
    req: Request,
    res: Response,
) => {
    const { clientType, metadata } = req.body;

    const session = createDeviceSession(
        clientType ?? 'MOBILE',
        metadata?.locale ?? 'es-SV',
    );

    res.status(201).json({
        ok: true,
        data: {
            deviceSessionId: session.deviceSessionId,
            deviceSessionToken: session.deviceSessionToken,
        },
    });
};