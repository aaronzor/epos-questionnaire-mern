import express from 'express';

// Import controllers
import {
    registerUser,
    login,
    getMe,
    forgotPassword,
    resetPassword,
    updateDetails,
    updatePassword,
    logout
} from '../controllers/auth.js';

// Define router
const router = express.Router();

// Import middleware
import { protect } from '../middleware/auth.js';

// Routes
router.post('/register', registerUser);
router.post('/login', login);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resetToken', resetPassword);
router.get('/me', protect, getMe);
router.put('/updatedetails/:id', protect, updateDetails);
router.put('/updatepassword/:id', protect, updatePassword);
router.get('/logout/', protect, logout);

export { router as auth };
