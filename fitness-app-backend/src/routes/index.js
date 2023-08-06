import UserProfileRouter from './userprofile-route.js';
import userRouter from './user-route.js';
import WorkoutTrackerRouter from './workouttracker-route.js';
import NutritionTrackerRouter from './nutritiontracker-route.js';
import ProgressTrackerRouter from './progresstracker-route.js';

const registerRoutes = (app) =>{ 
    app.use('/users', userRouter);
    app.use('/userprofile', UserProfileRouter);
    app.use('/progresstracker', ProgressTrackerRouter);
    app.use('/workouttracker', WorkoutTrackerRouter);
    app.use('/nutritiontracker', NutritionTrackerRouter);
}

export default registerRoutes;