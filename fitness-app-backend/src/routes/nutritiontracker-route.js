import express from 'express';
import * as nutritionTrackerController from "../controllers/nutritiontracker-controller.js";

const router = express.Router();
 
router.route('/')
    .get(nutritionTrackerController.index)
    .post(nutritionTrackerController.post);

router.route('/:id')
    .get(nutritionTrackerController.getById)
    .put(nutritionTrackerController.put)
    .delete(nutritionTrackerController.remove);

export default router;
