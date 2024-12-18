import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{console.log('Mongodb is connected')})
.catch((error)=>{console.log(error)})

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3001, ()=>{
  console.log('server is running on port 3001')
});

app.use('/api/user', userRoutes);

app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";

  res.status(statusCode).json({
    success : false,
    statusCode,
    message,
  })
});