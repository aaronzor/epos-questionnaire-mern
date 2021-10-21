import React from 'react';
import { Container, Toolbar, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

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
        },
        footer: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%'
        }
    };
});

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Box bgcolor='#f9f9f9' width='100%'>
                <Container maxWidth='md'>
                    <Toolbar>
                        <Typography flexGrow='1'>
                            Made by Aaron McMullan
                        </Typography>
                        <Link className={classes.link}>Admin Login</Link>
                    </Toolbar>
                </Container>
            </Box>
        </footer>
    );
};

export default Footer;
