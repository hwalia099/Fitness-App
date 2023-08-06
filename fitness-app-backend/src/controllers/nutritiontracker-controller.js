import * as nutritionTrackerService from './../services/nutritiontracker-service.js';

import {setErrorResponse, setResponse} from './response-handler.js';

export const index = async(request, response) => {

    try{
        const params = {...request.query};
        const userProfiles = await nutritionTrackerService.search(params);
        setResponse(userProfiles, response, 200);
        
    } catch (err){
        setErrorResponse(500, err, response);
    }

}

export const post = async(request, response) =>{
    try{
        const newuserProfile = request.body;
        const userProfile = await nutritionTrackerService.addNutritionTracker(newuserProfile);
        setResponse(userProfile, response, 201);

    } catch(err) {
        console.log(err);
        setErrorResponse(500, err, response);
    }
}

export const getById = async (request, response) =>{
    try{
        const id = request.params.id;
        const userProfile = await userProfileService.getById(id);
        setResponse(userProfile, response, 200);
    } catch(err){
        setErrorResponse(500, err, response);
    }
}

export const put = async(request, response) =>{
    try{
        const id = request.params.id;
        const updateduserProfile = request.body;
        const userProfile = await userProfileService.update(id, updateduserProfile);
        setResponse(userProfile, response, 204);
    } catch(err){
        setErrorResponse(500, err, response);

    }
}

export const remove = async(request, response) =>{
    try{
        const id = request.params.id;
        const userProfile = await userProfileService.remove(id);
        setResponse({}, response, 200);
    } catch(err){
        setErrorResponse(500, err, response);

    }
}

  