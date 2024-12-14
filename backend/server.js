import dotenv from 'dotenv';
dotenv.config();
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import foodRouter from './src/routers/food.router.js';
import userRouter from './src/routers/user.router.js';
import uploadRouter from './src/routers/upload.router.js';

import { dbconnect } from './src/config/database.config.js';
import path, { dirname } from 'path';
import orderRouter from "./src/routers/order.router.js";
import loyaltyRouter from './src/routers/loyalty.router.js';


dbconnect();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());

// Middleware for JSON parsing
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'],
  })
);

// Routes
app.use('/api/foods', foodRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/upload', uploadRouter);
app.use('/api/loyalty', loyaltyRouter);


// Serve static files from 'public' folder
const publicFolder = path.join(__dirname, 'public');
app.use(express.static(publicFolder));

// Fallback route for any unmatched requests, sending the index.html file
app.get('*', (req, res) => {
  const indexFilePath = path.join(publicFolder, 'index.html');
  res.sendFile(indexFilePath);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});
