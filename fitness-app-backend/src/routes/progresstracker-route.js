import express from 'express';

import * as progressTrackerController from "../controllers/progresstracker-controller.js";


const router = express.Router();
 
router.route('/').get(progressTrackerController.index)
.post(progressTrackerController.post);

router.route('/:id')
    .get(progressTrackerController.getById)
    .put(progressTrackerController.put)
    .delete(progressTrackerController.remove);

export default router;