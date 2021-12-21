import React, { useContext, useState, useEffect } from 'react';

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
import { Box } from '@mui/system';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

// Import Material Table
import MaterialTable from '@material-table/core';
import { tableIcons } from './tableIcons';

// Import Modal Data Context
import { modalColumns } from './modalColumns';
import { ModalDataContext } from '../../contexts/ModalDataContext';
import useModalDataObject from './useModalDataObject';

// Import Axios
import axios from 'axios';
import cookies from 'js-cookie';

// Import classes
import useStyles from '../../styles/makeStyle';

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
    // Declare classes
    const classes = useStyles();

    // Destructing props
    const { open, close, tableData } = props;

    // Declare Cookie for auth purposes
    const cookie = cookies.get('EPOS_QUIZ_AUTH');

    // Set global headers for requests
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + cookie;

    // Set context
    const { modalData } = useContext(ModalDataContext);

    // Initialise state for expanding card content
    const [industryExpanded, setIndustryExpanded] = useState(false);
    const [otherInfoExpanded, setOtherInfoExpanded] = useState(false);

    // Handlers for expandable sections on modal
    const handleIndustry = () => {
        setIndustryExpanded(!industryExpanded);
    };
    const handleOtherInfo = () => {
        setOtherInfoExpanded(!otherInfoExpanded);
    };

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

    // Contacted function
    const toggleContacted = () => {
        if (modalData.contacted === true) {
            axios
                .put(
                    `${process.env.REACT_APP_URL}/api/v1/results/${modalData._id}`,
                    { contacted: false }
                )
                .catch((error) => {})
                .then(
                    setTimeout(() => {
                        close();
                    }, 1000)
                )
                .then(
                    setTimeout(() => {
                        axios
                            .get(
                                `${process.env.REACT_APP_URL}/api/v1/results`,
                                {
                                    headers: {
                                        Authorization: 'Bearer ' + cookie
                                    }
                                }
                            )
                            .then((response) => {
                                //response && console.log(response.data.data);
                                response && tableData(response.data.data);
                            })
                            .catch(function (error) {
                                //error && console.log(error.response);
                            });
                    }, 500)
                );
        } else if (modalData.contacted === false) {
            axios
                .put(
                    `${process.env.REACT_APP_URL}/api/v1/results/${modalData._id}`,
                    { contacted: true }
                )
                .catch((error) => {})
                .then(
                    setTimeout(() => {
                        close();
                    }, 1000)
                )
                .then(
                    setTimeout(() => {
                        axios
                            .get(
                                `${process.env.REACT_APP_URL}/api/v1/results`,
                                {
                                    headers: {
                                        Authorization: 'Bearer ' + cookie
                                    }
                                }
                            )
                            .then((response) => {
                                response && console.log(response.data.data);
                                response && tableData(response.data.data);
                            })
                            .catch(function (error) {
                                //error && console.log(error.response);
                            });
                    }, 500)
                );
        }
    };

    // Delete function
    const deleteRecord = async () => {
        axios
            .delete(
                `${process.env.REACT_APP_URL}/api/v1/results/${modalData._id}`,
                { headers: { Authorization: 'Bearer ' + cookie } }
            )
            .catch((error) => {})
            .then(
                setTimeout(() => {
                    handleClose();
                    close();
                }, 1000)
            )
            .then(
                setTimeout(() => {
                    axios
                        .get(`${process.env.REACT_APP_URL}/api/v1/results`, {
                            headers: { Authorization: 'Bearer ' + cookie }
                        })
                        .then((response) => {
                            //response && console.log(response.data.data);
                            response && tableData(response.data.data);
                        })
                        .catch(function (error) {
                            //error && console.log(error.response);
                        });
                }, 500)
            );
    };

    return (
        <Modal
            open={open}
            onClose={close}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
            classes={{
                scrollPaper: classes.topScrollPaper,
                paperScrollBody: classes.topPaperScrollBody
            }}
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
                                pageSize: 11,
                                maxBodyHeight: '20vh',
                                toolbar: false
                            }}
                        ></MaterialTable>
                        <Stack
                            direction='row'
                            my={2}
                            alignContent='space-evenly'
                            justifyContent='space-evenly'
                            spacing={5}
                        >
                            {/* {modalData.meeting === true ? (
                                <Stack direction='row' spacing={2}>
                                    <Typography>Consultation</Typography>
                                    <CheckIcon />
                                </Stack>
                            ) : (
                                <Stack direction='row' spacing={2}>
                                    <Typography>Consultation</Typography>
                                    <CloseIcon />
                                </Stack>
                            )} */}
                            {modalData.phoneContact === 'on' ? (
                                <Stack direction='row' spacing={2}>
                                    <Typography>Phone Contact</Typography>
                                    <CheckIcon />
                                </Stack>
                            ) : (
                                <Stack direction='row' spacing={2}>
                                    <Typography>Phone Contact</Typography>
                                    <CloseIcon />
                                </Stack>
                            )}
                            {modalData.emailContact === 'on' ? (
                                <Stack direction='row' spacing={2}>
                                    <Typography>Email Contact</Typography>
                                    <CheckIcon />
                                </Stack>
                            ) : (
                                <Stack direction='row' spacing={2}>
                                    <Typography>Email Contact</Typography>
                                    <CloseIcon />
                                </Stack>
                            )}
                        </Stack>
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
                                    {modalData.otherIndustryInfo !== ''
                                        ? modalData.otherIndustryInfo
                                        : 'N/A'}
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
                                    {modalData.otherNeeds !== ''
                                        ? modalData.otherNeeds
                                        : 'N/A'}
                                </Typography>
                            </CardContent>
                        </Collapse>
                        <Stack
                            spacing={3}
                            marginTop={4}
                            direction='row'
                            alignContent='center'
                            justifyContent='center'
                        >
                            <Button
                                onClick={toggleContacted}
                                variant='outlined'
                            >
                                {modalData.contacted === false
                                    ? 'Set Contacted'
                                    : 'Set Uncontacted'}
                            </Button>
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
