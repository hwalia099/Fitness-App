import mongoose from 'mongoose';

const fitnessGoals = ["Loose Weight", "Maintain Weight"];

const UserProfileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userGoal: {
        type: String,
        enum: fitnessGoals,
        default: "Maintain Weight",
        required: true
    },
    height: {
        type: String,
        required: true
    },
    currentWeight: {
        type: String,
        required: true
    },
    targetWeight: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    curentBmi: {
        type: String,
        required: true
    },
    targetBmi: {
        type: String,
        required: true
    },
    createdDate: {
      type: Date,
      required: true,
    },
    modifiedDate: {
      type: Date,
      required: true,
    }

}, {
  versionKey: false 
});

const UserProfile = mongoose.model('UserProfile', UserProfileSchema);
export default UserProfile;