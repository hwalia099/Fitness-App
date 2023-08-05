import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userPhone: {
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
    },
    isActive: {
      type: Boolean,
      required: true,
    }

}, {
  versionKey: false 
});

const User = mongoose.model('User', UserSchema);
export default User;