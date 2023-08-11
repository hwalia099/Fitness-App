import mongoose from 'mongoose';

const fitnessGoals = ["Loose Weight", "Maintain Weight", "Gain Weight"];

//Has the user body type details such as height, weight his goal and stores bmi calculated based on these parameters
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
        type: Number,
        required: true
    },
    currentWeight: {
        type: Number,
        required: true
    },
    targetWeight: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    curentBmi: {
        type: Number,
        required: true
    },
    targetBmi: {
        type: Number,
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