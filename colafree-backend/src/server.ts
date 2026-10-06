import express from 'express';
import cors from 'cors';
import deviceSessionRoutes from './routes/deviceSession.routes.js';

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/v1', deviceSessionRoutes);

app.get('/api/v1/health', (_req, res) => {
    res.json({
        ok: true,
        data: {
            message: 'COLA FREE API funcionando',
        },
    });
});

app.listen(PORT, () => {
    console.log(`COLA FREE API ejecutándose en http://localhost:${PORT}`);
});