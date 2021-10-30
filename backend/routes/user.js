import express from 'express';

// Import Controllers
import {
    getUser,
    getUsers,
    updateUser,
    createUser,
    deleteUser
} from '../controllers/user.js';

// Import model
import User from '../models/User.js';

// Import middleware
import advancedResults from '../middleware/advancedResults.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router({
    mergeParams: true
});

router.use(protect);
router.use(authorize('admin'));

router.route('/').get(advancedResults(User), getUsers).post(createUser);

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

export { router as users };
