import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import customerRoutes from './routes/customerRoutes.js';
import connectDB from './config/db.js';
dotenv.config();

connectDB();

const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/customers', customerRoutes);

if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, 'frontend/dist')));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html')));
} else {
    app.get('/', (req, res) => res.send('Server ready'))
    }

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})