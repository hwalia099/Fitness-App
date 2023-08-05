import ProgressTracker from './../models/progressTracker.js';

export const search = async (params) =>{
    const progressTracker = await ProgressTracker.find(params).exec();
    return progressTracker;
}

//added modifiedDate: new date() so that all updates and creates are marked with current date as modified date
export const addProgressTracker = async(newProgressTracker) => {
    const ProgressTracker = new ProgressTracker({ ...newProgressTracker, modifiedDate: new Date() });
    return ProgressTracker.save();
}


export const getById = async(id) => {
    const ProgressTracker = ProgressTracker.findById(id).exec();
    return ProgressTracker;
}

export const update = async(id, updatedProgressTracker) => {
    const ProgressTracker = await ProgressTracker.findByIdAndUpdate(
        id,
        { ...updatedProgressTracker, modifiedDate: new Date() },
        { new: true }
      ).exec();
    return ProgressTracker;
}

export const remove = async(id) =>{
    const ProgressTracker = ProgressTracker.findByIdAndDelete(id).exec();
    return ProgressTracker;
}
