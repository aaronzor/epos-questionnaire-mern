import React from 'react';
import {
    Toolbar,
    LinearProgress,
    Box,
    Typography,
    Container
} from '@mui/material';
import Header from './Header';
import useStyles from '../styles/makeStyle';

const Layout = ({ children }) => {
    const classes = useStyles();

    return (
        <Box>
            <Header />
            <Toolbar />
            <Typography align='center' className={classes.subTitle}>
                Reliable EPOS Solutions
            </Typography>
            <Container disableGutters maxWidth='xs'>
                <LinearProgress
                    variant='determinate'
                    value={50}
                    className={classes.progress}
                />
            </Container>
            {children}
            <Toolbar />
        </Box>
    );
};

export default Layout;
