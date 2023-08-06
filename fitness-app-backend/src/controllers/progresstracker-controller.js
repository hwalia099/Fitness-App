import * as progressTrackerService from './../services/progresstracker-service.js';

import {setErrorResponse, setResponse} from './response-handler.js';

export const index = async(request, response) => {

    try{
        const params = {...request.query};
        const progress = await progressTrackerService.search(params);
        setResponse(progress, response, 200);
        
    } catch (err){
        setErrorResponse(500, err, response);
    }

}

export const post = async(request, response) =>{
    try{
        const newProgress = request.body;
        const userProgress = await progressTrackerService.addProgressTracker(newProgress);
        setResponse(userProgress, response, 201);

    } catch(err) {
        console.log(err);
        setErrorResponse(500, err, response);
    }
}

export const getById = async (request, response) =>{
    try{
        const id = request.params.id;
        const userProgress = await progressTrackerService.getById(id);
        setResponse(userProgress, response, 200);
    } catch(err){
        setErrorResponse(500, err, response);
    }
}

export const put = async(request, response) =>{
    try{
        const id = request.params.id;
        const updatedUserProgress= request.body;
        const userProgress = await progressTrackerService.update(id, updatedUserProgress);
        setResponse(userProgress, response, 204);
    } catch(err){
        setErrorResponse(500, err, response);

    }
}

export const remove = async(request, response) =>{
    try{
        const id = request.params.id;
        const userProgress = await progressTrackerService.remove(id);
        setResponse({}, response, 200);
    } catch(err){
        setErrorResponse(500, err, response);

    }
}

  