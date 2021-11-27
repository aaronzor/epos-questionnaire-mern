import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import qube from '../assets/qube-final.png';
import useStyles from '../styles/makeStyle';

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar elevation={0} className={classes.appbar}>
            <Toolbar>
                <img className={classes.logo} src={qube} alt='Qube epos logo' />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
