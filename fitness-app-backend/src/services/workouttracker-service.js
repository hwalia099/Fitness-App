import WorkoutTracker from './../models/workouttracker.js';

export const search = async (params) =>{
    const WorkoutTracker = await WorkoutTracker.find(params).exec();
    return WorkoutTracker;
}

//added modifiedDate: new date() so that all updates and creates are marked with current date as modified date
export const addWorkoutTracker = async(newWorkoutTracker) => {
    const WorkoutTracker = new WorkoutTracker({ ...newWorkoutTracker, modifiedDate: new Date() });
    return WorkoutTracker.save();
}


export const getById = async(id) => {
    const WorkoutTracker = WorkoutTracker.findById(id).exec();
    return WorkoutTracker;
}

export const update = async(id, updatedWorkoutTracker) => {
    const WorkoutTracker = await WorkoutTracker.findByIdAndUpdate(
        id,
        { ...updatedWorkoutTracker, modifiedDate: new Date() },
        { new: true }
      ).exec();
    return WorkoutTracker;
}

export const remove = async(id) =>{
    const WorkoutTracker = WorkoutTracker.findByIdAndDelete(id).exec();
    return WorkoutTracker;
}
