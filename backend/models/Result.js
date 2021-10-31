import mongoose from 'mongoose';

const ResultSchema = new mongoose.Schema({
    question1: {
        type: String
    },
    question2: {
        type: String
    },
    question3: {
        type: String
    },
    question4: {
        type: String
    },
    question5: {
        type: String
    },
    question6: {
        type: String
    },
    submittedAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Result', ResultSchema);
