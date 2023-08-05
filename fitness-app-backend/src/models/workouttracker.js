import mongoose from 'mongoose';

const WorkoutTrackerSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },createdDate: {
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