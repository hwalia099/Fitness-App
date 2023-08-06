import express from 'express';

import * as userController from "../controllers/user-controller.js";


const router = express.Router();
 
router.route('/').get(userController.index)
.post(userController.post);

router.route('/:id')
    .get(userController.getById)
    .put(userController.put)
    .delete(userController.remove);

export default router;