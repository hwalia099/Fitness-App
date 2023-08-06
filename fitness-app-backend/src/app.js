import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import registerRoutes from './routes/index.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

registerRoutes(app);

mongoose.connect('mongodb+srv://israniraksha:2Sz%40wqb.H$y7ScQ@cluster0.tjojgrj.mongodb.net/FitnessApp');

export default app; 