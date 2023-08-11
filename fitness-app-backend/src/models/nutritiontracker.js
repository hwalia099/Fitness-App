import mongoose from 'mongoose';

const NutritionTrackerSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }, 
    date: {
        type: Date,
        required: true,
    },
    totalCaloriesConsumed: {
        type: Number,
        required: true
    }
}, {
    versionKey: false
});

const NutritionTracker = mongoose.model('NutritionTracker', NutritionTrackerSchema);
export default NutritionTracker;
