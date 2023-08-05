import UserProfileRouter from './userprofile-route.js';
import userRouter from './user-route.js';

const registerRoutes = (app) =>{ 
    app.use('/users', userRouter);
    app.use('/userprofile', UserProfileRouter);
}

export default registerRoutes;