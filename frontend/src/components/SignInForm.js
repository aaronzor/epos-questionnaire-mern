import React, { useContext } from 'react';
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

const SignInForm = (props) => {
    const { credentials, setCredentials } = useContext(CredentialsContext);
    const { setLoggedIn } = useContext(LoggedInContext);

    const handleCredentials = (event) => {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(credentials);
        axios
            .post(`${process.env.REACT_APP_URL}/api/v1/auth/login`, {
                email: credentials.email,
                password: credentials.password
            })
            .then(function (response) {
                setLoggedIn(response.data.success);
            });
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
                        <Grid item xs>
                            <Link
                                to='#'
                                style={{
                                    textDecoration: 'underline',
                                    color: '#424242'
                                }}
                            >
                                <Typography variant='body2'>
                                    Forgot password?
                                </Typography>
                            </Link>
                        </Grid>
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

export default SignInForm;
