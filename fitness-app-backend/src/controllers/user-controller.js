import * as userService from './../services/user-service.js';

import {setErrorResponse, setResponse} from './response-handler.js';

export const index = async(request, response) => {

    try{
        const params = {...request.query};
        const users = await userService.search(params);
        setResponse(users, response, 200);
        
    } catch (err){
        setErrorResponse(500, err, response);
    }

}

export const post = async(request, response) =>{
    try{
        const newUser = request.body;
        const user = await userService.addUser(newUser);
        setResponse(user, response, 201);

    } catch(err) {
        console.log(err);
        setErrorResponse(500, err, response);
    }
}

export const getById = async (request, response) =>{
    try{
        const id = request.params.id;
        const user = await userService.getById(id);
        setResponse(user, response, 200);
    } catch(err){
        setErrorResponse(500, err, response);
    }
}

export const put = async(request, response) =>{
    try{
        const id = request.params.id;
        const updateduser = request.body;
        const user = await userService.update(id, updateduser);
        setResponse(user, response, 204);
    } catch(err){
        setErrorResponse(500, err, response);

    }
}

export const remove = async(request, response) =>{
    try{
        const id = request.params.id;
        const user = await userService.remove(id);
        setResponse({}, response, 200);
    } catch(err){
        setErrorResponse(500, err, response);

    }
}

  