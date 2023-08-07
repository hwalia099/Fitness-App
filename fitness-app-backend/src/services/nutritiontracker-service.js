import NutritionTracker from './../models/nutritiontracker.js';
import ProgressTracker from '../models/progressTracker.js';

export const search = async (params) =>{
    const nutritionTracker = await NutritionTracker.find(params).exec();
    return nutritionTracker;
}

//added modifiedDate: new date() so that all updates and creates are marked with current date as modified date
export const addNutritionTracker = async(newNutritionTracker) => {

    var user = newNutritionTracker.userId;
    var recorddate = new Date(newNutritionTracker.date).toISOString();

    var existingProgress = await ProgressTracker.find({userId:user, createdDate: recorddate}).exec();
    
    if(existingProgress.length>0){
        
        const progressTracker = await ProgressTracker.findByIdAndUpdate(
            existingProgress[0]._id,
            { ...existingProgress,totalCaloriesConsumed:newNutritionTracker.totalCaloriesConsumed, modifiedDate: new Date() },
            { new: true }
          ).exec();
    }
    else{
        var progress = new ProgressTracker({userId:user, createdDate: recorddate, totalCaloriesBurned:0, totalCaloriesConsumed:newNutritionTracker.totalCaloriesConsumed, weightRecorded:0});
        progress.save();

    }

    const nutritionTracker = new NutritionTracker({ ...newNutritionTracker, modifiedDate: new Date() });
    return nutritionTracker.save();
}


export const getById = async(id) => {
    const nutritionTracker = NutritionTracker.findById(id).exec();
    return nutritionTracker;
}

export const update = async(id, updatedNutritionTracker) => {
    const nutritionTracker = await NutritionTracker.findByIdAndUpdate(
        id,
        { ...updatedNutritionTracker, modifiedDate: new Date() },
        { new: true }
      ).exec();
    return nutritionTracker;
}

export const remove = async(id) =>{
    const nutritionTracker = NutritionTracker.findByIdAndDelete(id).exec();
    return nutritionTracker;
}
