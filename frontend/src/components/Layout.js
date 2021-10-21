import React from 'react';
import { AppBar, Toolbar, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import qube from '../assets/qube-final.png';
import qubeDark from '../assets/qubedark-final.png';

const useStyles = makeStyles((theme) => {
    return {
        appbar: {
            width: '100%'
        },
        link: {
            textDecoration: 'none',
            boxShadow: 'none'
        },
        logo: {
            width: '10rem'
        }
    };
});

const Layout = ({ children }) => {
    const classes = useStyles();

    return (
        <div>
            <AppBar elevation={0}>
                <Container>
                    <Toolbar>
                        <img
                            className={classes.logo}
                            src={qube}
                            alt='Qube epos logo'
                        />

                        <Link className={classes.link}></Link>
                    </Toolbar>
                </Container>
            </AppBar>
            <Toolbar />
            <div className={classes.toolbar}></div>
            {children}
        </div>
    );
};

export default Layout;
