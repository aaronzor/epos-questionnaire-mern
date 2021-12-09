// Load enviornment variables
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import path from 'path';

// import middleware
import errorHandler from './middleware/errorHandler.js';

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

const corsOptions = {
    origin: /.*localhost.*/,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: true,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.use(function (req, res, next) {
    res.setHeader(
        'content-security-policy-report-only',
        'default-src *; script-src *; script-src-elem *; script-src-attr *; style-src *; style-src-elem *; style-src-attr *; img-src *; font-src *; connect-src *; media-src *; object-src *; prefetch-src *; child-src *; frame-src *; worker-src *; frame-ancestors *; form-action * report-uri https://61b1439014685c32c23474ef.endpoint.csper.io?v=0;',
        next()
    );
});

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, DELETE, PUT'
    );
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, Content-Type, Accept, Authorization'
    );
    res.header(
        'Content-Security-Policy',
        'script-src self sha256-base64 encoded hash'
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

const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')));

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    );
} else {
    app.get('/', (req, res) => {
        res.send('API is running....');
    });
}

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
