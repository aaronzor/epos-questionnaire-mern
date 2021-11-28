import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import qube from '../assets/qube-final.png';
import useStyles from '../styles/makeStyle';
import { Link } from 'react-router-dom';

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar elevation={0} className={classes.appbar}>
            <Toolbar>
                <Link to='/'>
                    <img
                        className={classes.logo}
                        src={qube}
                        alt='Qube epos logo'
                    />
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
