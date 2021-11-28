import React from 'react';
import { Container, Typography, Box, CssBaseline } from '@mui/material';
import useStyles from '../styles/makeStyle';
import { Link } from 'react-router-dom';
import Copyright from './Copyright';

const Footer = () => {
    const classes = useStyles();
    return (
        <Box className={classes.footerWrap}>
            <CssBaseline />
            <Box
                component='footer'
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[300]
                            : theme.palette.grey[800]
                }}
                className={classes.footerMain}
            >
                <Container maxWidth='sm'>
                    <Link
                        to='/dashboard'
                        style={{ textDecoration: 'none', color: '#c98ced' }}
                    >
                        <Typography align='center'>Dashboard Login</Typography>
                    </Link>

                    <Copyright dev='true' />
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;
