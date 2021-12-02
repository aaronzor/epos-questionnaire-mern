import React, { useContext, useEffect } from 'react';
import { CredentialsContext } from '../contexts/CredentialsContext';
import { LoggedInContext } from '../contexts/LoggedInContext';
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Grid,
    Box,
    Container,
    Typography
} from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Cookies from 'js-cookie';
import { useSnackbar, withSnackbar } from 'notistack';

const SignInForm = (props) => {
    const { enqueueSnackbar } = useSnackbar();
    const { credentials, setCredentials } = useContext(CredentialsContext);
    const { setLoggedIn } = useContext(LoggedInContext);

    axios.defaults.withCredentials = true;

    useEffect(() => {
        if (Cookies.get('EPOS_QUIZ_AUTH')) setLoggedIn(true);
    });

    const handleCredentials = (event) => {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const res = await axios
            .post(`${process.env.REACT_APP_URL}/api/v1/auth/login`, {
                email: credentials.email,
                password: credentials.password
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response);
                }
            });

        let cookie = Cookies.get('EPOS_QUIZ_AUTH');

        if (cookie) {
            setLoggedIn(true);
        } else if (!cookie) {
            enqueueSnackbar('Invalid Email or Password', {
                variant: 'error'
            });
        }

        console.log(res);
    };

    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'primary.light' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Sign in
                </Typography>
                <Box
                    component='form'
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        id='email'
                        label='Email Address'
                        name='email'
                        autoComplete='email'
                        autoFocus
                        onChange={handleCredentials}
                    />
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        name='password'
                        label='Password'
                        type='password'
                        id='password'
                        autoComplete='current-password'
                        onChange={handleCredentials}
                    />

                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link
                                to='/signup'
                                style={{
                                    textDecoration: 'underline',
                                    color: '#424242'
                                }}
                            >
                                <Typography variant='body2'>
                                    Create new account
                                </Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default withSnackbar(SignInForm);
