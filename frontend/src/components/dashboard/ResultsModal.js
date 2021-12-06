import React, { useContext } from 'react';
import {
    Modal,
    Card,
    CardHeader,
    CardContent,
    Table,
    TableCell,
    TableHead,
    TableRow,
    TableBody
} from '@mui/material';

// Import Modal Data Context
import { ModalDataContext } from '../../contexts/ModalDataContext';

const ResultsModal = (props) => {
    // Destructing props
    const { open, close } = props;

    // Set context
    const { modalData } = useContext(ModalDataContext);

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
                    title={modalData.ContactName}
                    subheader={'Select your favourite'}
                    classes={{
                        title: 'MuiCardHeader-title',
                        subheader: 'MuiCardHeader-subheader'
                    }}
                />
                <CardContent className={'MuiCardContent-root'}>
                    <div className={'MuiCardContent-inner'}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Dessert</TableCell>
                                    <TableCell align='right'>Fat (g)</TableCell>
                                    <TableCell align='right'>
                                        Price ($)
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody></TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </Modal>
    );
};

export default ResultsModal;
