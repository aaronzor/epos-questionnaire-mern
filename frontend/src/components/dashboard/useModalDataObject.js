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
            selection: 'Update Existing EPOS',
            answer: modalData.updateEpos
        },
        {
            selection: 'Software Only',
            answer: modalData.softwareOnly
        },
        {
            selection: 'New to EPOS',
            answer: modalData.newToEpos
        },
        {
            selection: 'Online Ordering',
            answer: modalData.onlineOrdering
        },
        {
            selection: 'Stock Control',
            answer: modalData.stockControl
        },
        {
            selection: 'Cloud Reporting',
            answer: modalData.cloudReporting
        },
        {
            selection: 'Table Ordering',
            answer: modalData.tableOrdering
        }
    ]);
};

export default useModalDataObject;
