// Load enviornment variables
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import path from 'path';

// import middleware
import errorHandler from './middleware/errorHandler.js';
import session from 'express-session';

// Import Routes
import { results } from './routes/result.js';
import { users } from './routes/user.js';
import { auth } from './routes/auth.js';

// Import security middleware
import cors from 'cors';
import mongoSanitize from 'express-mongo-sanitize';
import helmet from 'helmet';
import xss from 'xss-clean';
import rateLimit from 'express-rate-limit';
import hpp from 'hpp';

// Load env variables
dotenv.config();

// Initialise express
const app = express();

// Connect to Database
connectDB();

app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json());

// CORS Configuration
const corsOptions = {
    origin: `${process.env.FRONTEND_URL}`,
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
    preflightContinue: true,
    optionsSuccessStatus: 204,
    allowedHeaders: 'Origin, Content-Type, Accept, Authorization, Set-Cookie',
    credentials: true
};
app.use(cors(corsOptions));

// Check if request is preflight
// const isPreflight = (req) => {
//     let isHttpOptions = req.method === 'OPTIONS';
//     let hasOriginHeader = req.headers['origin'];
//     let hasReqMethod = req.headers['access-control-request-method'];
//     return isHttpOptions && hasOriginHeader && hasReqMethod;
// };

// app.use((req, res, next) => {
//     if (isPreflight(req)) {
//         console.log('Preflight request recieved');
//         res.status(204).end();
//         return;
//     }
//     next();
// });

// Trust proxy for Heroku
app.enable('trust proxy', 1);

// Session config
app.use(
    session({
        secret: `${process.env.SESSION_SECRET}` || 'make this more secure',
        cookie: {
            sameSite: 'none',
            secure: true
        }
    })
);

// Set response headers
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', `${process.env.FRONTEND_URL}`);
    res.header('Access-Control-Allow-Credentials', true);
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, DELETE, PUT'
    );
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, Content-Type, Accept, Authorization, Set-Cookie'
    );

    next();
});

// Mount routers
app.use('/api/v1/results', results);
app.use('/api/v1/users', users);
app.use('/api/v1/auth', auth);

// Security Middleware
app.use(mongoSanitize());
app.use(helmet());
app.use(xss());
app.use(hpp());

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 Mins
    max: 10000
});

app.use(limiter);

// Error handling middleware
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('API is running...');
});

//const __dirname = path.resolve();

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '/frontend/build')));

//     app.get('*', (req, res) =>
//         res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//     );
// } else {
//     app.get('/', (req, res) => {
//         res.send('API is running....');
//     });
// }

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
