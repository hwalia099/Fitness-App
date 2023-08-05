import mongoose from 'mongoose';

const ProgressTrackerSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },createdDate: {
        type: Date,
        required: true,
    },
    totalCaloriesConsumed: {
        type: Number,
        required: true
    },
    totalCaloriesBurned: {
        type: Number,
        required: true
    },
    weightRecorded: {
        type: Number,
        required: true
    }

}, {
  versionKey: false 
});

const ProgressTracker = mongoose.model('ProgressTracker', ProgressTrackerSchema);
export default ProgressTracker;