import React, { useContext, useState } from 'react';

// Import MUI
import {
    Modal,
    Card,
    CardHeader,
    CardContent,
    styled,
    IconButton,
    Collapse,
    Typography,
    CardActions,
    Stack,
    Button
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Import Material Table
import MaterialTable from 'material-table';
import { tableIcons } from './tableIcons';

// Import Modal Data Context
import { modalColumns } from './modalColumns';
import { ModalDataContext } from '../../contexts/ModalDataContext';
import useModalDataObject from './useModalDataObject';

// Import Axios
import axios from 'axios';
import { Box } from '@mui/system';

// Create expandable section for card content
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
    })
}));

const ResultsModal = (props) => {
    // Destructing props
    const { open, close } = props;

    // Initialise state for expanding card content
    const [industryExpanded, setIndustryExpanded] = useState(false);
    const [otherInfoExpanded, setOtherInfoExpanded] = useState(false);

    const handleIndustry = () => {
        setIndustryExpanded(!industryExpanded);
    };

    const handleOtherInfo = () => {
        setOtherInfoExpanded(!otherInfoExpanded);
    };

    // Set context
    const { modalData } = useContext(ModalDataContext);

    // Load data with custom hook
    let data = useModalDataObject();

    // State and handlers for confirm delete modal
    const [openConfirm, setOpenConfirm] = useState(false);
    const handleOpen = () => setOpenConfirm(true);
    const handleClose = () => setOpenConfirm(false);

    // Styling for confirm Modal
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '3px solid #424242',
        boxShadow: 12,
        p: 4,
        borderRadius: 1
    };

    const deleteRecord = async () => {
        axios
            .delete(
                `${process.env.REACT_APP_URL}/api/v1/results/${modalData._id}`
            )
            .catch((error) => {});
    };

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
                                maxBodyHeight: '30vh'
                            }}
                        ></MaterialTable>
                        <CardActions sx={{ marginTop: '10px', marginX: '20%' }}>
                            <Typography variant='overline'>
                                Other Industry
                            </Typography>
                            <ExpandMore
                                expand={industryExpanded}
                                onClick={handleIndustry}
                                aria-expanded={industryExpanded}
                                aria-label='show more'
                            >
                                <ExpandMoreIcon sx={{ color: '#9a00c9' }} />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={industryExpanded} timeout='auto'>
                            <CardContent sx={{ marginX: '20%' }}>
                                <Typography variant='overline'>
                                    {modalData.otherIndustryInfo !== '' ? (
                                        modalData.otherIndustryInfo
                                    ) : (
                                        <em>N/A</em>
                                    )}
                                </Typography>
                            </CardContent>
                        </Collapse>
                        <CardActions sx={{ marginTop: '10px', marginX: '20%' }}>
                            <Typography variant='overline'>
                                Other Information or Requirements
                            </Typography>
                            <ExpandMore
                                expand={otherInfoExpanded}
                                onClick={handleOtherInfo}
                                aria-expanded={otherInfoExpanded}
                                aria-label='show more'
                            >
                                <ExpandMoreIcon sx={{ color: '#9a00c9' }} />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={otherInfoExpanded} timeout='auto'>
                            <CardContent sx={{ marginX: '20%' }}>
                                <Typography variant='overline'>
                                    {modalData.otherNeeds !== '' ? (
                                        modalData.otherNeeds
                                    ) : (
                                        <em>N/A</em>
                                    )}
                                </Typography>
                            </CardContent>
                        </Collapse>
                        <Stack
                            marginTop={4}
                            direction='row'
                            alignContent='center'
                            justifyContent='center'
                        >
                            <Button
                                onClick={handleOpen}
                                variant='primary'
                                sx={{
                                    backgroundColor: '#ad1527'
                                }}
                            >
                                Delete Record
                            </Button>
                            <Modal open={openConfirm} onClose={handleClose}>
                                <Box sx={style}>
                                    <Typography
                                        align='center'
                                        variant='h6'
                                        component='h2'
                                    >
                                        Are you sure you wish to delete this
                                        record?
                                    </Typography>
                                    <Stack
                                        spacing={2}
                                        marginTop={4}
                                        direction='row'
                                        alignContent='center'
                                        justifyContent='center'
                                    >
                                        <Button
                                            variant='outlined'
                                            onClick={deleteRecord}
                                        >
                                            Yes
                                        </Button>
                                        <Button
                                            variant='outlined'
                                            onClick={handleClose}
                                        >
                                            No
                                        </Button>
                                    </Stack>
                                </Box>
                            </Modal>
                        </Stack>
                    </div>
                </CardContent>
            </Card>
        </Modal>
    );
};

export default ResultsModal;
