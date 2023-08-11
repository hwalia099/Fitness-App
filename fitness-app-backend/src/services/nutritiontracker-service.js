import mongoose from 'mongoose';
import NutritionTracker from './../models/nutritiontracker.js';
import ProgressTracker from '../models/progressTracker.js';

export const search = async (params) => {
    try {
        return await NutritionTracker.find(params).exec();
    } catch (error) {
        console.error('Error searching Nutrition Tracker:', error);
        throw new Error("Failed to fetch nutrition data.");
    }
}

export const addNutritionTracker = async (newNutritionTracker) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        if (!newNutritionTracker.date || !newNutritionTracker.userId) {
            throw new Error("Invalid date or user ID provided.");
        }
        const recorddate = new Date(newNutritionTracker.date).toISOString();

        const existingProgress = await ProgressTracker.findOne({ userId: newNutritionTracker.userId, createdDate: recorddate }).session(session).exec();
    
        if (existingProgress) {
            await ProgressTracker.findByIdAndUpdate(
                existingProgress._id,
                {
                    ...existingProgress.toObject(),
                    totalCaloriesConsumed: newNutritionTracker.totalCaloriesConsumed,
                    modifiedDate: new Date()
                },
                { new: true, session }
            ).exec();
        } else {
            const progress = new ProgressTracker({
                userId: newNutritionTracker.userId,
                createdDate: recorddate,
                totalCaloriesBurned: 0,
                totalCaloriesConsumed: newNutritionTracker.totalCaloriesConsumed,
                weightRecorded: 0,
                modifiedDate: new Date()
            });
            await progress.save({ session });
        }

        const nutritionTracker = new NutritionTracker(newNutritionTracker);
        const savedNutritionTracker = await nutritionTracker.save({ session });

        await session.commitTransaction();
        session.endSession();

        return savedNutritionTracker;
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        console.error('Error adding Nutrition Tracker:', error);
        throw new Error("Failed to save nutrition data.");
    }
}

export const getById = async (id) => {
    try {
        return await NutritionTracker.findById(id).exec();
    } catch (error) {
        console.error('Error fetching Nutrition Tracker by ID:', error);
        throw new Error("Failed to fetch nutrition data by ID.");
    }
}

export const update = async (id, updatedNutritionTracker) => {
    try {
        return await NutritionTracker.findByIdAndUpdate(
            id,
            {
                ...updatedNutritionTracker,
                modifiedDate: new Date()
            },
            { new: true }
        ).exec();
    } catch (error) {
        console.error('Error updating Nutrition Tracker:', error);
        throw new Error("Failed to update nutrition data.");
    }
}

export const remove = async (id) => {
    try {
        return await NutritionTracker.findByIdAndDelete(id).exec();
    } catch (error) {
        console.error('Error deleting Nutrition Tracker:', error);
        throw new Error("Failed to delete nutrition data.");
    }
}
