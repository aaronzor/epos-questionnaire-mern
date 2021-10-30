import mongoose from 'mongoose';
import dotenv, { config } from 'dotenv';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            // useCreateIndex: true,
            // useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log(
            `MongoDB Connected: ${conn.connection.host}`.cyan.bold.inverse
        );
    } catch (error) {
        console.log(`Error: ${error}`.red.bold);
    }
};

export default connectDB;
