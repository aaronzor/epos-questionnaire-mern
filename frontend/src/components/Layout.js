import React, { useEffect, useState } from 'react';
import { Toolbar, LinearProgress, Box, Typography } from '@mui/material';
import { useLocation } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import useStyles from '../styles/makeStyle';

const Layout = ({ children }) => {
    const classes = useStyles();

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
                setProgValue(90);
                break;
            default:
                setProgValue(0);
        }
    }, [location, progValue]);

    return (
        <Box>
            <Header />
            <Toolbar />
            {location.pathname !== '' && (
                <LinearProgress
                    variant='determinate'
                    value={progValue}
                    className={classes.progress}
                />
            )}
            <Box Container mt={1} mb={-4}>
                <Typography align='center' fontSize={20} fontWeight={100}>
                    Reliable EPOS Solutions
                </Typography>
            </Box>
            {children}
            <Toolbar />
            <Footer />
        </Box>
    );
};

export default Layout;
