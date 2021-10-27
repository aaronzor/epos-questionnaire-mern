import React from 'react';
import { Container, Toolbar, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => {
    return {
        footer: {
            position: 'sticky',
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
            <Box width='100%'>
                <Container maxWidth='md'>
                    <Toolbar>
                        <Typography flexGrow='1'>Made by Me</Typography>
                        <Link className={classes.link}>Admin Login</Link>
                    </Toolbar>
                </Container>
            </Box>
        </footer>
    );
};

export default Footer;
