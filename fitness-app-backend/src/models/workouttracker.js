import mongoose from 'mongoose';


//Maintains the daily calorie burnout from the workout for the user
const WorkoutTrackerSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },date: {
        type: Date,
        required: true,
    },
    totalCaloriesBurned: {
        type: Number,
        required: true
    },
    workoutCategory:{
        type: String,
        required: true
    }

}, {
  versionKey: false 
});

const WorkoutTracker = mongoose.model('WorkoutTracker', WorkoutTrackerSchema);
export default WorkoutTracker;