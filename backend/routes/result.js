import express from 'express';

// Import Controllers
import {
    getResults,
    getResult,
    createResult,
    deleteResult,
    updateResult
} from '../controllers/result.js';

// Import Model
import Result from '../models/Result.js';

// Import middleware
import advancedResults from '../middleware/advancedResults.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router
    .route('/', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.setHeader('Access-Control-Max-Age', '1800');
        res.setHeader('Access-Control-Allow-Headers', 'content-type');
        res.setHeader(
            'Access-Control-Allow-Methods',
            'PUT, POST, GET, DELETE, PATCH, OPTIONS'
        );
    })
    .get(advancedResults(Result))
    .get(protect, authorize('admin'), getResults)
    .post(createResult);

router
    .route('/:id')
    .get(advancedResults(Result))
    .get(protect, authorize('admin'), getResult)
    .delete(protect, authorize('admin'), deleteResult)
    .put(protect, authorize('admin'), updateResult);

export { router as results };
