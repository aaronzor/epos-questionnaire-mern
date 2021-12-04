import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import LogoutIcon from '@mui/icons-material/Logout';
import RefreshIcon from '@mui/icons-material/Refresh';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRigntIcon from '@mui/icons-material/ChevronRight';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

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

const resultsData = () => {
    axios
        .get(`${process.env.REACT_APP_URL}/api/v1/auth/me`)
        .catch(function (error) {
            error && console.log(error);
        });
};
const DashboardContent = () => {
    console.log(resultsData);

    const rows = [
        { id: 1, col1: 'Hello', col2: 'World' },
        { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' }
    ];

    const columns = [
        { field: 'col1', headerName: 'Column 1', width: 150 },
        { field: 'col2', headerName: 'Column 2', width: 150 }
    ];

    // Initialise history for refresh on logout
    const history = useHistory();

    // Set initial state of drawer
    const [open, setOpen] = React.useState(false);

    // Toggle drawer state
    const toggleDrawer = () => {
        setOpen(!open);
    };

    // Logout function
    const logout = () => {
        Cookies.remove('EPOS_QUIZ_AUTH');
        history.go(0);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
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
                component='main'
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto'
                }}
            >
                <Toolbar />
                <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
                    <Grid container spacing={3}>
                        {/* Recent Orders */}
                        <Grid item xs={12}>
                            {/* <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            > */}
                            <DataGrid rows={rows} columns={columns} />
                            {/* </Paper> */}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default function Dashboard() {
    return <DashboardContent />;
}
