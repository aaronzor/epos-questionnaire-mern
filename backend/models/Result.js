import mongoose from 'mongoose';

const ResultSchema = new mongoose.Schema({
    'Phone Contact': {
        type: String
    },
    'Email Contact': {
        type: String
    },
    ContactNumber: {
        type: String
    },
    'System & Applications': {
        type: Boolean
    },
    'Unsure, Need Advice': {
        type: Boolean
    },
    'Software Only': {
        type: Boolean
    },
    'Full EPOS Setup': {
        type: Boolean
    },
    'Cloud Software': {
        type: Boolean
    },
    'Card Readers': {
        type: Boolean
    },
    Trading: {
        type: Boolean
    },
    'Position in Company': {
        type: String
    },
    'Other Needs': {
        type: String
    },
    Retail: {
        type: Boolean
    },
    Hospitality: {
        type: Boolean
    },
    'Single Venue': {
        type: Boolean
    },
    Other: {
        type: Boolean
    },
    'Other business info': {
        type: String
    },

    'Table Ordering': {
        type: Boolean
    },
    'Online Ordering': {
        type: Boolean
    },
    'Company Name': {
        type: String
    },
    ContactName: {
        type: String
    },
    Email: {
        type: String
    },
    'Contacted?': {
        type: Boolean
    },
    submittedAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Result', ResultSchema);
