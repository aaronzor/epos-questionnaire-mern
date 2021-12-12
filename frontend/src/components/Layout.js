import React, { useEffect, useState } from 'react';
import {
    Toolbar,
    LinearProgress,
    Box,
    Typography,
    Drawer
} from '@mui/material';
import { useLocation } from 'react-router';
import Header from './Header';
import FooterComponent from './Footer';
import useStyles from '../styles/makeStyle';

const Layout = ({ children }) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const toggleDrawer = (state) => {
        open === true ? setOpen(false) : setOpen(true);
    };

    // Progress Bar value based on current path
    let location = useLocation();
    let [progValue, setProgValue] = useState(0);

    useEffect(() => {
        switch (location.pathname) {
            case '/q1':
                setProgValue(10);
                break;
            case '/q2':
                setProgValue(20);
                break;
            case '/q3':
                setProgValue(40);
                break;
            case '/q4':
                setProgValue(60);
                break;
            case '/q5':
                setProgValue(80);
                break;
            case '/userdetails':
                setProgValue(100);
                break;
            default:
                setProgValue(0);
        }
    }, [location, progValue]);

    return (
        <Box>
            <Header click={toggleDrawer} />
            <Toolbar />
            {location.pathname !== '' && (
                <LinearProgress
                    variant='determinate'
                    value={progValue}
                    className={classes.progress}
                    sx={{ height: '10px' }}
                />
            )}
            <Box Container mt={1} mb={-4}>
                <Typography align='center' fontSize={20} fontWeight={100}>
                    Reliable EPoS Solutions
                </Typography>
            </Box>
            {children}
            <Toolbar />
            <Drawer
                anchor='bottom'
                open={open}
                onClose={toggleDrawer}
                docked={false}
                variant='temporary'
            >
                <FooterComponent toggleDrawer={toggleDrawer} />
            </Drawer>
        </Box>
    );
};

export default Layout;
