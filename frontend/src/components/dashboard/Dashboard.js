import React, { useState } from 'react';
import {
    Button,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    Modal,
    Card,
    CardContent,
    Table,
    TableHead,
    TableRow,
    CardHeader,
    TableBody,
    TableCell
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import MaterialTable from 'material-table';
import LogoutIcon from '@mui/icons-material/Logout';
import RefreshIcon from '@mui/icons-material/Refresh';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRigntIcon from '@mui/icons-material/ChevronRight';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import cookies from 'js-cookie';
import { columns } from './columns';
import { tableIcons } from './tableIcons';
import ResultsModal from './ResultsModal';

axios.defaults.withCredentials = true;

const drawerWidth = 200;

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
                response && console.log(response.data.data);
                response && setTableData(response.data.data);
            })
            .catch(function (error) {
                error && console.log(error.response);
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
    const [modalData, setModalData] = useState({});

    // Set initial state of modal
    const [modalOpen, setModalOpen] = React.useState(false);

    // Toggle modal state
    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);

    // Modal style
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4
    };

    // Logout function
    const logout = () => {
        Cookies.remove('EPOS_QUIZ_AUTH');
        history.go(0);
    };

    let id = 0;
    function createData(name, fat, price) {
        id += 1;
        return { id, name, fat, price };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 4.0),
        createData('Ice cream sandwich', 237, 4.3),
        createData('Eclair', 16.0, 6.0),
        createData('Cupcake', 3.7, 4.3),
        createData('Gingerbread', 16.0, 3.9)
    ];

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
                    flexGrow: 1
                }}
            >
                <MaterialTable
                    title={'Welcome Back ' + user}
                    style={{ margin: '0.3%', padding: '0.3%' }}
                    icons={tableIcons}
                    data={tableData}
                    columns={columns}
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
                                console.log(modalData);
                            }
                        }
                    ]}
                    options={{
                        actionsColumnIndex: 12,
                        filtering: true,
                        exportButton: true,
                        exportAllData: true,
                        exportFileName: 'EPOS-QUIZ Table Data',
                        pageSize: '10'
                    }}
                />
                <Toolbar />
                <ResultsModal
                    open={modalOpen}
                    close={handleClose}
                    data={resultsData}
                    aria-labelledby='modal-modal-title'
                    aria-describedby='modal-modal-description'
                />
            </Box>
        </Box>
    );
};

export default function Dashboard() {
    return <DashboardContent />;
}
