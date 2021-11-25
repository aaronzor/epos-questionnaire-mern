// Load enviornment variables
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';

// Load env variables
dotenv.config();

// import middlewares
import errorHandler from './middleware/errorHandler.js';
import cors from 'cors';

// Import Routes
import { results } from './routes/result.js';
import { users } from './routes/user.js';
import { auth } from './routes/auth.js';
// Initialise express
const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json());

// Connect to Database
connectDB();

// Mount routers
app.use('/api/v1/results', results);
app.use('/api/v1/users', users);
app.use('/api/v1/auth', auth);

// Security Middleware

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

// const corsOptions = {
//     origin: 'http://localhost',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     preflightContinue: true,
//     optionsSuccessStatus: 204,
//     credentials: true
// };

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

// Error handling middleware
app.use(errorHandler);

// Define port
const PORT = process.env.PORT || 5000;

// Initialise server
const server = app.listen(
    PORT,
    console.log(
        `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
            .bold.inverse
    )
);
