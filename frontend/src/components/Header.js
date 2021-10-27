import React from 'react';
import { AppBar, Container, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import qube from '../assets/qube-final.png';

const useStyles = makeStyles((theme) => {
    return {
        appbar: {
            width: '100%'
        },

        logo: {
            width: '10rem'
        }
    };
});

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar elevation={0}>
            <Container>
                <Toolbar>
                    <img
                        className={classes.logo}
                        src={qube}
                        alt='Qube epos logo'
                    />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
