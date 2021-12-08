import mongoose from 'mongoose';

const ResultSchema = new mongoose.Schema({
    phoneContact: {
        type: String
    },
    emailContact: {
        type: String
    },
    contactNumber: {
        type: String
    },
    systemApplications: {
        type: Boolean
    },
    unsureNeedAdvice: {
        type: Boolean
    },
    softwareOnly: {
        type: Boolean
    },
    fullEposSetup: {
        type: Boolean
    },
    cloudSoftware: {
        type: Boolean
    },
    cardReaders: {
        type: Boolean
    },
    trading: {
        type: Boolean
    },
    positionInCompany: {
        type: String
    },
    otherNeeds: {
        type: String
    },
    retail: {
        type: Boolean
    },
    hospitality: {
        type: Boolean
    },
    singleVenue: {
        type: Boolean
    },
    otherIndustry: {
        type: Boolean
    },
    otherIndustryInfo: {
        type: String
    },
    tableOrdering: {
        type: Boolean
    },
    onlineOrdering: {
        type: Boolean
    },
    companyName: {
        type: String
    },
    contactName: {
        type: String
    },
    email: {
        type: String
    },
    contacted: {
        type: Boolean,
        required: true,
        default: false
    },
    submittedAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Result', ResultSchema);
