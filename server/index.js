const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Allow cross-origin requests
app.use(cors());

// Parse incoming requests with JSON payloads
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://israniraksha:2Sz%40wqb.H$y7ScQ@cluster0.tjojgrj.mongodb.net/FitnessApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the models
const WorkoutTracker = mongoose.model('WorkoutTracker', new mongoose.Schema({
  userId: String,
  date: Date,
  totalCaloriesBurned: Number,
  workoutCategory: String
}));

const NutritionTracker = mongoose.model('NutritionTracker', new mongoose.Schema({
  userId: String,
  date: Date,
  totalCaloriesConsumed: Number
}));

// CRUD routes for the RecordData page
app.post('/api/recorddata/workout', async (req, res) => {
  try {
    const { userId, date, totalCaloriesBurned, workoutCategory } = req.body;
    const workout = new WorkoutTracker({ userId, date, totalCaloriesBurned, workoutCategory });
    await workout.save();
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ message: 'Error saving workout data.' });
  }
});

app.post('/api/recorddata/nutrition', async (req, res) => {
  try {
    const { userId, date, totalCaloriesConsumed } = req.body;
    const nutrition = new NutritionTracker({ userId, date, totalCaloriesConsumed });
    await nutrition.save();
    res.status(201).json(nutrition);
  } catch (error) {
    res.status(400).json({ message: 'Error saving nutrition data.' });
  }
});

// GET all workout data for a user
app.get('/api/recorddata/workout/:userId', async (req, res) => {
    try {
      const workouts = await WorkoutTracker.find({ userId: req.params.userId });
      res.json(workouts);
    } catch (error) {
      res.status(400).json({ message: 'Error fetching workout data.' });
    }
  });
  
  // Update a specific workout record
  app.put('/api/recorddata/workout/:id', async (req, res) => {
    try {
      const updatedWorkout = await WorkoutTracker.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedWorkout);
    } catch (error) {
      res.status(400).json({ message: 'Error updating workout data.' });
    }
  });
  
  // Delete a specific workout record
  app.delete('/api/recorddata/workout/:id', async (req, res) => {
    try {
      await WorkoutTracker.findByIdAndDelete(req.params.id);
      res.json({ message: 'Workout record deleted successfully.' });
    } catch (error) {
      res.status(400).json({ message: 'Error deleting workout data.' });
    }
  });
  
  // GET all nutrition data for a user
  app.get('/api/recorddata/nutrition/:userId', async (req, res) => {
    try {
      const nutritionRecords = await NutritionTracker.find({ userId: req.params.userId });
      res.json(nutritionRecords);
    } catch (error) {
      res.status(400).json({ message: 'Error fetching nutrition data.' });
    }
  });
  
  // Update a specific nutrition record
  app.put('/api/recorddata/nutrition/:id', async (req, res) => {
    try {
      const updatedNutrition = await NutritionTracker.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedNutrition);
    } catch (error) {
      res.status(400).json({ message: 'Error updating nutrition data.' });
    }
  });
  
  // Delete a specific nutrition record
  app.delete('/api/recorddata/nutrition/:id', async (req, res) => {
    try {
      await NutritionTracker.findByIdAndDelete(req.params.id);
      res.json({ message: 'Nutrition record deleted successfully.' });
    } catch (error) {
      res.status(400).json({ message: 'Error deleting nutrition data.' });
    }
  });

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
