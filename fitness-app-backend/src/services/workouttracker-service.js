import WorkoutTracker from './../models/workouttracker.js';

export const search = async (params) =>{
    const workoutTrackers = await WorkoutTracker.find(params).exec();
    return workoutTrackers;
}

//added modifiedDate: new date() so that all updates and creates are marked with current date as modified date
export const addWorkoutTracker = async(newWorkoutTracker) => {
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
