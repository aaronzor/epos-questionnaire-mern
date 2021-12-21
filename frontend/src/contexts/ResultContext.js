import { createContext } from 'react';

export const ResultContext = createContext({});

export const resultObject = {
    meeting: false,
    phoneContact: false,
    emailContact: false,
    contactNumber: '',
    newToEpos: false,
    unsureNeedAdvice: false,
    softwareOnly: false,
    updateEpos: false,
    cloudSoftware: false,
    cardReaders: false,
    trading: false,
    positionInCompany: '',
    otherNeeds: '',
    retail: false,
    hospitality: false,
    other: false,
    otherBusinessInfo: '',
    tableOrdering: false,
    onlineOrdering: false,
    companyName: '',
    contactName: '',
    email: '',
    contacted: false,
    submittedAt: ''
};
