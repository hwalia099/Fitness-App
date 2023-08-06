import express from 'express';

import * as workoutTrackerController from "../controllers/workouttracker-controller.js";


const router = express.Router();
 
router.route('/').get(workoutTrackerController.index)
.post(workoutTrackerController.post);

router.route('/:id')
    .get(workoutTrackerController.getById)
    .put(workoutTrackerController.put)
    .delete(workoutTrackerController.remove);

export default router;