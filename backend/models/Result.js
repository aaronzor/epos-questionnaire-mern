import mongoose from 'mongoose';

const ResultSchema = new mongoose.Schema({
    question1: {
        type: String,
        required: [true, 'You must select an answer for question 1'],
        enum: ['answer1', 'answer2', 'answer3']
    },
    question2: {
        type: String,
        required: [true, 'You must select an answer for question 2'],
        enum: ['answer1', 'answer2', 'answer3']
    },
    question3: {
        type: String,
        required: [true, 'You must select an answer for question 3'],
        enum: ['answer1', 'answer2', 'answer3']
    },
    question4: {
        type: String,
        required: [true, 'You must select an answer for question 4'],
        enum: ['answer1', 'answer2', 'answer3']
    },
    userInfoName: {
        type: String,
        required: [true, 'Please enter a name']
    },
    userInfoEmail: {
        type: String,
        required: [true, 'Please enter an email address'],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    submittedAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Result', ResultSchema);
