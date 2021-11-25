import ErrorResponse from '../utils/errorResponse.js';
import crypto from 'crypto';
import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/User.js';
import emailSender from '../utils/emailSender.js';

// @desc      Register User
// @route     POST /api/v1/auth/register
// @access    Public
export const registerUser = asyncHandler(async (req, res, next) => {
    const { userName, email, password, role } = req.body;

    // Create User
    const user = await User.create({
        userName,
        email,
        password,
        role
    });

    sendTokenResponse(user, 200, res);
});

// @desc      Login User
// @route     POST /api/v1/auth/login
// @access    Public
export const login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    // Email and password validation
    if (!email || !password) {
        return next(
            new ErrorResponse(
                'Your password or email is incorrect, please try again',
                404
            )
        );
    }

    // Check for User
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        return next(new ErrorResponse('Invalid credentials', 401));
    }

    // Check if password matched hashed password in DB
    // Note: This is a mongoose method - it gets called directly on the model
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
        return next(new ErrorResponse('Invalid credentials', 401));
    }
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');

    sendTokenResponse(user, 200, res);
});

// @desc      Log user out / Clear cookie
// @route     GET /api/v1/auth/logout
// @access    Private
export const logout = asyncHandler(async (req, res, next) => {
    res.cookie('token', 'none', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true
    });

    res.status(200).json({
        success: true,
        data: {},
        req: req
    });
});

// @desc      Get logged in user
// @route     POST /api/v1/auth/me
// @access    Private
export const getMe = asyncHandler(async (req, res, next) => {
    const loggedIn = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        data: loggedIn
    });
});

// @desc      Update user details
// @route     PUT /api/v1/auth/updateuserdetails
// @access    Private
export const updateDetails = asyncHandler(async (req, res, next) => {
    const fieldsToUpdate = {
        name: req.body.userName,
        email: req.body.email
    };

    const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        data: user
    });
});

// @desc      Update password
// @route     PUT /api/v1/auth/updatepassword
// @access    Private
export const updatePassword = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user.id).select('+password');

    // Check current Password
    if (!(await user.matchPassword(req.body.currentPassword))) {
        return next(new ErrorResponse('Password is incorrect', 401));
    }

    user.password = req.body.newPassword;
    await user.save();

    sendTokenResponse(user, 200, res);
});

// @desc      Forgot password
// @route     POST /api/v1/auth/forgotpassword
// @access    Public
export const forgotPassword = asyncHandler(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return next(new ErrorResponse('There is no user with that email', 404));
    }

    // Get reset token
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    // Create reset URL
    const resetUrl = `${req.protocol}://${req.get(
        'host'
    )}/api/v1/auth/resetpassword/${resetToken}`;

    // Create message for User
    // NOTE: This is a placeholder requesting a PUT request as there is no front end link available
    const message = `You are recieving this email because you (or someone else) has
    requested the reset of a password. Please make a PUT request to: \n\n ${resetUrl}`;

    try {
        await emailSender({
            email: user.email,
            subject: 'Password reset token',
            message
        });

        res.status(200).json({
            success: true,
            data: 'Email Sent'
        });
    } catch (err) {
        console.log(err);
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });
        return next(new ErrorResponse('Email could not be sent', 500));
    }
});

// @desc      Reset password
// @route     PUT /api/v1/auth/resetpassword/:resettoken
// @access    Public
export const resetPassword = asyncHandler(async (req, res, next) => {
    // Get hashed token
    let resetPasswordToken = crypto
        .createHash('sha256')
        .update(req.params.resetToken)
        .digest('hex');

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    });

    if (!user) {
        return next(new ErrorResponse('Invalid Token', 400));
    }

    // Set new Password
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    sendTokenResponse(user, 200, res);
});

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
    // Create token
    const token = user.getSignedJwt();

    const options = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    };

    if (process.env.NODE_ENV === 'production') {
        options.secure = true;
    }

    // Send Response
    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token
    });
};
