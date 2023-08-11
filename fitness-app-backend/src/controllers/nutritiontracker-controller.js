import * as nutritionTrackerService from './../services/nutritiontracker-service.js';
import {setErrorResponse, setResponse} from './response-handler.js';

export const index = async(request, response) => {
    try {
        const params = {...request.query};
        const nutritionEntries = await nutritionTrackerService.search(params);
        setResponse(nutritionEntries, response, 200);
    } catch (err) {
        setErrorResponse(500, err, response);
    }
}

export const post = async(request, response) => {
    try {
        const nutritionData = request.body;
        const newNutritionTracker = await nutritionTrackerService.addNutritionTracker(nutritionData);  // Define newNutritionTracker here
        console.log("Received data:", newNutritionTracker);
        
        if (!newNutritionTracker.date || !newNutritionTracker.userId) {
            throw new Error("Invalid date or user ID provided.");
        }

        setResponse(newNutritionTracker, response, 201);

    } catch(err) {
        console.log(err);
        setErrorResponse(500, err, response);
    }
}

export const getById = async(request, response) => {
    try {
        const id = request.params.id;
        const nutritionEntry = await nutritionTrackerService.getById(id);
        setResponse(nutritionEntry, response, 200);
    } catch(err) {
        setErrorResponse(500, err, response);
    }
}

export const put = async(request, response) => {
    try {
        const id = request.params.id;
        const updatedNutritionData = request.body;
        const nutritionEntry = await nutritionTrackerService.update(id, updatedNutritionData);
        setResponse(nutritionEntry, response, 204);
    } catch(err) {
        setErrorResponse(500, err, response);
    }
}

export const remove = async(request, response) => {
    try {
        const id = request.params.id;
        await nutritionTrackerService.remove(id);
        setResponse({}, response, 200);
    } catch(err) {
        setErrorResponse(500, err, response);
    }
}
