import WorkoutTracker from './../models/workouttracker.js';
import ProgressTracker from './../models/progressTracker.js';

export const search = async (params) =>{
    const workoutTrackers = await WorkoutTracker.find(params).exec();
    return workoutTrackers;
}

//added modifiedDate: new date() so that all updates and creates are marked with current date as modified date
export const addWorkoutTracker = async(newWorkoutTracker) => {
    var user = newWorkoutTracker.userId;
    var recorddate = new Date(newWorkoutTracker.date).toISOString();

    var existingProgress = await ProgressTracker.find({userId:user, createdDate: recorddate}).exec();
    
    if(existingProgress.length>0){
        
        const progressTracker = await ProgressTracker.findByIdAndUpdate(
            existingProgress[0]._id,
            { ...existingProgress,totalCaloriesBurned:newWorkoutTracker.totalCaloriesBurned, modifiedDate: new Date() },
            { new: true }
          ).exec();
    }
    else{
        var progress = new ProgressTracker({userId:user, createdDate: recorddate, totalCaloriesBurned:newWorkoutTracker.totalCaloriesBurned, totalCaloriesConsumed:0, weightRecorded:0});
        progress.save();

    }
    const workoutTracker = new WorkoutTracker({ ...newWorkoutTracker });
    return workoutTracker.save();
}


export const getById = async(id) => {
    const workoutTracker = WorkoutTracker.findById(id).exec();
    return workoutTracker;
}

export const update = async(id, updatedWorkoutTracker) => {
    const workoutTracker = await WorkoutTracker.findByIdAndUpdate(
        id,
        { ...updatedWorkoutTracker, modifiedDate: new Date() },
        { new: true }
      ).exec();
    return workoutTracker;
}

export const remove = async(id) =>{
    const workoutTracker = WorkoutTracker.findByIdAndDelete(id).exec();
    return workoutTracker;
}
