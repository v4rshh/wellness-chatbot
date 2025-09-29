import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import connectDB from './database/mongo.js';
import formRoutes from './routes/form.route.js'
const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

dotenv.config();

// Routes 
app.use('/api/users', userRoutes);
app.use('/api/forms', formRoutes);
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
}); 