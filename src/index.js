import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './DB/database.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

await connectDB();

// Test Route
app.get('/', (req, res) => {
  res.send('API is running...');
});
import leadRouter from "./router/leadRouter.js"
//routes declaration
app.use("/api/v1/lead",leadRouter)

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
