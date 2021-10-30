import asyncHandler from '../middleware/asyncHandler.js';
import ErrorResponse from '../utils/errorResponse.js';
import Result from '../models/Result.js';

// @desc      Get all Results
// @route     GET /api/v1/results
// @access    Private
export const getResults = asyncHandler(async (req, res, next) => {
    // Check if user is admin
    if (req.user.role !== 'admin') {
        return next(
            new ErrorResponse(
                `The user with role ${req.user.role} is not authorized to view results`,
                401
            )
        );
    }

    res.status(200).json(res.advancedResults);
});

// @desc      Get single Result
// @route     GET /api/v1/results/:id
// @access    Private
export const getResult = asyncHandler(async (req, res, next) => {
    const result = await Result.findById(req.params.id);

    // Error for correctly formatted ID that does not exist in database
    if (!result) {
        return next(
            new ErrorResponse(
                `Result not found with ID of ${req.params.id}`,
                404
            )
        );
    }

    // Check if user is admin
    if (req.user.role !== 'admin') {
        return next(
            new ErrorResponse(
                `The user with role ${req.user.role} is not authorized to view results`,
                401
            )
        );
    }

    res.status(200).json({
        success: true,
        data: result
    });
});

// @desc      Create new Result
// @route     POST /api/v1/results
// @access    Public
export const createResult = asyncHandler(async (req, res, next) => {
    const newResult = await Result.create(req.body);

    res.status(201).json({
        success: true,
        data: newResult
    });
});

// @desc      Delete Result
// @route     DELETE /api/v1/results/:id
// @access    Private
export const deleteResult = asyncHandler(async (req, res, next) => {
    const result = await Result.findById(req.params.id);

    if (!result) {
        return next(
            new ErrorResponse(
                `result not found with ID of ${req.params.id}`,
                404
            )
        );
    }

    // Make sure user admin
    if (req.user.role !== 'admin') {
        return next(
            new ErrorResponse(
                `The user with role ${req.user.role} is not authorized to delete results`,
                401
            )
        );
    }

    result.remove();

    res.status(200).json({
        success: true,
        data: {}
    });
});

// // @desc      Update Result
// // @route     PUT /api/v1/results/:id
// // @access    Private
// export const updateResult = asyncHandler(async (req, res, next) => {
//     const result = await Result.findByIdAndUpdate(req.params.id, req.body, {
//         runValidators: true
//     });

//     if (!result) {
//         return next(
//             new ErrorResponse(
//                 `result not found with ID of ${req.params.id}`,
//                 404
//             )
//         );
//     }

//     // Make sure user admin
//     if (req.user.role !== 'admin') {
//         return next(
//             new ErrorResponse(
//                 `The user with role ${req.user.role} is not authorized to delete results`,
//                 401
//             )
//         );
//     }
// });
