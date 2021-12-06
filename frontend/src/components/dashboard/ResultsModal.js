import React from 'react';
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

const ResultsModal = (props) => {
    const { open, close } = props;

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
                    title={'Title'}
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
