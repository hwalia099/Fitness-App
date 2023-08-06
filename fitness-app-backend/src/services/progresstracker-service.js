import ProgressTracker from './../models/progressTracker.js';

export const search = async (params) =>{
    const progressTracker = await ProgressTracker.find(params).exec();
    return progressTracker;
}

//added modifiedDate: new date() so that all updates and creates are marked with current date as modified date
export const addProgressTracker = async(newProgressTracker) => {
    const progressTracker = new ProgressTracker({ ...newProgressTracker, modifiedDate: new Date() });
    return progressTracker.save();
}


export const getById = async(id) => {
    const progressTracker = ProgressTracker.findById(id).exec();
    return progressTracker;
}

export const update = async(id, updatedProgressTracker) => {
    const progressTracker = await ProgressTracker.findByIdAndUpdate(
        id,
        { ...updatedProgressTracker, modifiedDate: new Date() },
        { new: true }
      ).exec();
    return progressTracker;
}

export const remove = async(id) =>{
    const progressTracker = ProgressTracker.findByIdAndDelete(id).exec();
    return progressTracker;
}
