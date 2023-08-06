import * as workoutTrackerService from './../services/workouttracker-service.js';

import {setErrorResponse, setResponse} from './response-handler.js';

export const index = async(request, response) => {

    try{
        const params = {...request.query};
        const workouts = await workoutTrackerService.search(params);
        setResponse(workouts, response, 200);
        
    } catch (err){
        setErrorResponse(500, err, response);
    }

}

export const post = async(request, response) =>{
    try{
        const workout = request.body;
        const workoutTracker = await workoutTrackerService.addWorkoutTracker(workout);
        setResponse(workoutTracker, response, 201);

    } catch(err) {
        console.log(err);
        setErrorResponse(500, err, response);
    }
}

export const getById = async (request, response) =>{
    try{
        const id = request.params.id;
        const workout = await workoutTrackerService.getById(id);
        setResponse(workout, response, 200);
    } catch(err){
        setErrorResponse(500, err, response);
    }
}

export const put = async(request, response) =>{
    try{
        const id = request.params.id;
        const updatedWorkout = request.body;
        const workout = await workoutTrackerService.update(id, updatedWorkout);
        setResponse(workout, response, 204);
    } catch(err){
        setErrorResponse(500, err, response);

    }
}

export const remove = async(request, response) =>{
    try{
        const id = request.params.id;
        const workout = await workoutTrackerService.remove(id);
        setResponse({}, response, 200);
    } catch(err){
        setErrorResponse(500, err, response);

    }
}

  