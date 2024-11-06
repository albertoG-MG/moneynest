import express, { Application } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import UserRoutes from './routes/UserRoutes';
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const PORT = process.env.PORT || 3000;

const app: Application = express();

app.use(express.json());

app.use('/getAllUsers', UserRoutes);

app.listen(PORT, () => {
    console.log(`El servidor está corriendo en: http://localhost:${PORT}`);
});