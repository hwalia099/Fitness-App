import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import registerRoutes from './routes/index.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Use extended: true for parsing URL-encoded data

registerRoutes(app);

mongoose.connect('mongodb+srv://israniraksha:2Sz%40wqb.H$y7ScQ@cluster0.tjojgrj.mongodb.net/FitnessApp')
    .then(() => {
        console.log("Successfully connect to MongoDB.");
        // Perform any initialization tasks here if needed
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });

export default app;
