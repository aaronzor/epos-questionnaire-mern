import React, { useState, useContext } from 'react';

// Material UI imports
import {
    Button,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';

// Icon Imports
import LogoutIcon from '@mui/icons-material/Logout';
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRigntIcon from '@mui/icons-material/ChevronRight';
import { tableIcons } from './tableIcons';

// Ohter imports
import { useHistory } from 'react-router-dom';
import { columns } from './columns';
import MaterialTable from '@material-table/core';
import Cookies from 'js-cookie';
import axios from 'axios';
import cookies from 'js-cookie';

// Results modal components and context import
import ResultsModal from './ResultsModal';
import { ModalDataContext } from '../../contexts/ModalDataContext';

// Set axios default headers
axios.defaults.withCredentials = true;

// Set drawer width
const drawerWidth = 200;

// Style Drawer
const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
    '& .MuiDrawer-paper': {
        borderRight: 'none',
        backgroundColor:
            theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[900],
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        }),
        boxSizing: 'border-box',
        ...(!open && {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9)
            }
        })
    }
}));

const DashboardContent = () => {
    // Initialise table data state
    const [tableData, setTableData] = useState([]);

    // Set cookie value
    const cookie = cookies.get('EPOS_QUIZ_AUTH');

    // Request logged in user and find users name
    const [user, setUser] = useState('');
    React.useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_URL}/api/v1/auth/me`, {
                headers: { Authorization: 'Bearer ' + cookie }
            })
            .then((response) => {
                response && setUser(response.data.data.userName);
            })
            .catch(function (error) {});
    }, [cookie]);

    // Request results data function
    const resultsData = () => {
        console.log(user);
        axios
            .get(`${process.env.REACT_APP_URL}/api/v1/results`, {
                headers: { Authorization: 'Bearer ' + cookie }
            })
            .then((response) => {
                //response && console.log(response.data.data);
                response && setTableData(response.data.data);
            })
            .catch(function (error) {
                //error && console.log(error.response);
            });
    };

    // Initialise history for refresh on logout
    const history = useHistory();

    // Set initial state of drawer
    const [open, setOpen] = React.useState(false);

    // Toggle drawer state
    const toggleDrawer = () => {
        setOpen(!open);
    };

    //Set inital modal data
    const { setModalData } = useContext(ModalDataContext);

    // Set initial state of modal
    const [modalOpen, setModalOpen] = React.useState(false);

    // Toggle modal state
    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);

    // Logout function
    const logout = () => {
        Cookies.remove('EPOS_QUIZ_AUTH');
        history.go(0);
    };

    return (
        <Box sx={{ display: 'flex', height: '100%' }}>
            <Drawer variant='permanent' open={open} sx={{ zIndex: 0 }}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: [2]
                    }}
                >
                    <IconButton onClick={toggleDrawer}>
                        {!open ? <ChevronRigntIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </Toolbar>
                <Divider />
                <List>
                    <ListItem button onClick={logout}>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary='Logout' />
                    </ListItem>
                    <ListItem button onClick={resultsData}>
                        <ListItemIcon>
                            <RefreshIcon />
                        </ListItemIcon>
                        <ListItemText primary='Refresh Data' />
                    </ListItem>
                </List>
            </Drawer>
            <Box
                sx={{
                    flexGrow: 1,
                    justifyContent: 'center',
                    alignContent: 'center'
                }}
            >
                <MaterialTable
                    title={'Welcome Back ' + user}
                    icons={tableIcons}
                    data={tableData}
                    columns={columns}
                    style={{ width: '99%', margin: 'auto' }}
                    actions={[
                        {
                            icon: () => (
                                <Button
                                    variant='outlined'
                                    sx={{ width: '100%' }}
                                >
                                    <Typography fontSize={10}>
                                        View Results
                                    </Typography>
                                </Button>
                            ),
                            onClick: (e, rowData) => {
                                setModalData(rowData);
                                handleOpen();
                            }
                        }
                    ]}
                    options={{
                        actionsColumnIndex: 12,
                        filtering: true,
                        pageSize: '10'
                    }}
                />
                <Toolbar />
                <ResultsModal
                    open={modalOpen}
                    close={handleClose}
                    data={resultsData}
                    tableData={setTableData}
                    aria-labelledby='Results Modal'
                    aria-describedby='Popup modal to show detailed results for selected questionnaire report'
                />
            </Box>
        </Box>
    );
};

export default function Dashboard() {
    return <DashboardContent />;
}
