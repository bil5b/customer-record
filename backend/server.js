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

app.get('/', (req, res) => res.send('Server ready'))

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})