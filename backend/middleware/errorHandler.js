import ErrorResponse from '../utils/errorResponse.js';

const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;

    // Mongoose bad ObjectId
    if (err.name === 'CastError') {
        const message = `Resource not found with an id of ${err.value}`;
        error = new ErrorResponse(message, 404);
    }

    // Mongoose duplicate key (Mongoose error 11000)
    if (err.code === 11000) {
        const message = 'Duplicate field value entered.';
        error = new ErrorResponse(message, 400);
    }

    /* Mongoose validation error: 
    This error extracts the validation description set in
    the database model. On a validatoin error Mongoose will create an array with
    any relevant validation errors. This will simply dislpay them to the client */
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map((val) => val.message);
        error = new ErrorResponse(message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    });
};

export default errorHandler;
