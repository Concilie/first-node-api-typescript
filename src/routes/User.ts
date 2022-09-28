import express from 'express';
import controller from '../controllers/User';

const router = express.Router();

router.post('/create', controller.createUser);
router.post('/update/:userId', controller.updateUser);
router.get('/all', controller.getAllUser);


export = router;