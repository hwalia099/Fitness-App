import express from 'express';

import * as userProfileController from "../controllers/userprofile-controller.js";


const router = express.Router();

router.route('/').get(userProfileController.index)
    .post(userProfileController.post);

router.route('/:id')
    .get(userProfileController.getById)
    .put(userProfileController.put)
    .delete(userProfileController.remove);

router.post('/:userId', userProfileController.post);

export default router;