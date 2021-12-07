import React, { useContext } from 'react';
import { Modal, Card, CardHeader, CardContent } from '@mui/material';
import MaterialTable from 'material-table';
import { tableIcons } from './tableIcons';

// Import Modal Data Context
import { modalColumns } from './modalColumns';
import { ModalDataContext } from '../../contexts/ModalDataContext';
import useModalDataObject from './useModalDataObject';

const rowStyle = {};

const ResultsModal = (props) => {
    // Destructing props
    const { open, close } = props;

    // Set context
    const { modalData } = useContext(ModalDataContext);
    let data = useModalDataObject();

    console.log(modalData);

    return (
        <Modal
            open={open}
            onClose={close}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >
            <Card className={'MuiElevatedCard--01'}>
                <CardHeader
                    className={'MuiCardHeader-root'}
                    title={modalData.contactName}
                    subheader={modalData.companyName}
                    classes={{
                        title: 'MuiCardHeader-title',
                        subheader: 'MuiCardHeader-subheader'
                    }}
                />
                <CardContent className={'MuiCardContent-root'}>
                    <div className={'MuiCardContent-inner'}>
                        <MaterialTable
                            style={{ margin: '0.3%', padding: '0.3%' }}
                            icons={tableIcons}
                            columns={modalColumns}
                            data={data}
                            options={{
                                showTitle: false,
                                search: false,
                                pageSize: 10,
                                rowStyle: rowStyle,
                                maxBodyHeight: '30vh'
                            }}
                        ></MaterialTable>
                    </div>
                </CardContent>
            </Card>
        </Modal>
    );
};

export default ResultsModal;
