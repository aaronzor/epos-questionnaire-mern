import { useContext } from 'react';
import { ModalDataContext } from '../../contexts/ModalDataContext';

const useModalDataObject = () => {
    const { modalData } = useContext(ModalDataContext);

    let data;
    return (data = [
        {
            selection: 'Retail Industry',
            answer: modalData.retail
        },
        {
            selection: 'Hospitality Industry',
            answer: modalData.hospitality
        },
        {
            selection: 'Other Industry',
            answer: modalData.otherIndustryInfo
        },
        {
            selection: 'Unsure, Need Advice on Products',
            answer: modalData.unsureNeedAdvice
        },
        {
            selection: 'Full EPOS Setup',
            answer: modalData.fullEposSetup
        },
        {
            selection: 'Software Only',
            answer: modalData.softwareOnly
        },
        {
            selection: 'System & Applications',
            answer: modalData.systemApplications
        },
        {
            selection: 'Online Ordering',
            answer: modalData.onlineOrdering
        },
        {
            selection: 'Card Readers',
            answer: modalData.cardReaders
        },
        {
            selection: 'Cloud Software',
            answer: modalData.cloudSoftware
        }
    ]);
};

export default useModalDataObject;
