import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler.js';
import ErrorResponse from '../utils/errorResponse.js';
import User from '../models/User.js';

// Protect routes
export const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (req.headers.cookie && req.headers.cookie.startsWith('EPOS')) {
        token = req.headers.cookie.split('=')[1];
    } else if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    }

    // Make sure token exists
    if (!token) {
        return next(
            new ErrorResponse('Not authorized to access this route', 401)
        );
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // DEV ONLY //
        console.log(decoded);

        req.user = await User.findById(decoded.id);

        next();
    } catch (err) {
        return next(
            new ErrorResponse('Not authorized to access this route', 401)
        );
    }
});

// Grant access to specific roles
export const authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(
                new ErrorResponse(
                    `User role ${req.user.role} is unauthorized to access this route`,
                    403
                )
            );
        }

        next();
    };
};
