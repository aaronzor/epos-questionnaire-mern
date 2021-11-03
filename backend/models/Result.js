import mongoose from 'mongoose';

const ResultSchema = new mongoose.Schema({
    Retail: {
        type: Boolean
    },
    Hospitality: {
        type: Boolean
    },
    'Single Venue': {
        type: Boolean
    },
    Bar: {
        type: Boolean
    },
    Resturant: {
        type: Boolean
    },
    Other: {
        type: Boolean
    },
    'Other business info': {
        type: String
    },
    'Single Till': {
        type: Boolean
    },
    'Multiple Tills': {
        type: Boolean
    },
    'Table Ordering': {
        type: Boolean
    },
    'Online Ordering': {
        type: Boolean
    },
    Company: {
        type: String
    },
    Name: {
        type: String
    },
    Email: {
        type: String
    },
    Phone: {
        type: String
    },
    Contacted: {
        type: Boolean
    },
    submittedAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Result', ResultSchema);
