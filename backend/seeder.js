// Seeder for deleting and populating database, for dev use to
// allow easier testing during development
// run node seeder -i to populate your database
// run node seeder -d to destroy all data

import fs from 'fs';
import mongoose from 'mongoose';
import colors from 'colors';
import dotenv from 'dotenv';

// Load env vars
dotenv.config({ path: '../.env' });

// Load models
import Result from './models/Result.js';

// Connect to database
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
});

// Read dummy data JSON files
const results = JSON.parse(fs.readFileSync(`./_data/results.json`, 'utf-8'));

// Import into DB
const importData = async () => {
    try {
        // Seed Bootcamps
        await Result.create(results);

        console.log('Data Imported...'.green.bold.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
    }
};

// Delete Data
const deleteData = async () => {
    try {
        await Result.deleteMany();

        console.log('Data Destroyed...'.red.bold.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
    }
};

if (process.argv[2] === '-i') {
    importData();
} else if (process.argv[2] === '-d') {
    deleteData();
}
