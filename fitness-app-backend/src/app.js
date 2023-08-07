import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import registerRoutes from './routes/index.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Use extended: true for parsing URL-encoded data

registerRoutes(app);

mongoose.connect('mongodb+srv://penajames099:AvKTAaofo3B7naep@cluster0.aajnrha.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log("Successfully connect to MongoDB.");
        // Perform any initialization tasks here if needed
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });

export default app;
