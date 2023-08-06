import NutritionTracker from './../models/nutritiontracker.js';

export const search = async (params) =>{
    const nutritionTracker = await NutritionTracker.find(params).exec();
    return nutritionTracker;
}

//added modifiedDate: new date() so that all updates and creates are marked with current date as modified date
export const addNutritionTracker = async(newNutritionTracker) => {
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
