import express from 'express';
import messageRoutes from './routes/routes';

const app = express();
app.use(express.json());

app.use('/messages', messageRoutes);

export default app;
