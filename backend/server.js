import path from 'path';
import express from 'express';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';

const PORT = process.env.PORT || 5000;
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const NODE_ENV = process.env.NODE_ENV;

connectDB(); // Connect to MongoDB

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/api/config/paypal', (req, res) => res.send({ clientId: PAYPAL_CLIENT_ID }));

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
// app.use("/uploads", express.static("uploads"));

if (NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    app.get('*', (req, res) => 
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html')
    ));
} else {
    app.get('/', (req, res) => res.send('API is running...'));
};

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
