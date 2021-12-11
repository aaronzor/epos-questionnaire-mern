import React from 'react';

// Material UI imports
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Grid,
    Box,
    Typography,
    Container
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

// Other imports
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar, withSnackbar } from 'notistack';
import axios from 'axios';
import Cookies from 'js-cookie';

// Validation import
import signUpSchema from '../Validation/SignUpValidation';

const SignUp = (props) => {
    // Destructuring
    const { enqueueSnackbar } = useSnackbar();
    const { handleChange } = props;

    // Validation useForm hook
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(signUpSchema)
    });

    // Initialise history for redirect
    const history = useHistory();

    // Create account function
    const submitInput = async (data) => {
        let token;

        await axios
            .post(`${process.env.REACT_APP_URL}/api/v1/auth/register`, {
                userName: data.name,
                email: data.email,
                password: data.password
            })
            .then((response) => {
                if (response) {
                    if (response.data.success === true) {
                        token = response.data.token;
                        Cookies.set('EPOS_QUIZ_AUTH', token);
                    }

                    enqueueSnackbar(
                        'Success! You will now be redirected to log in',
                        {
                            variant: 'success'
                        }
                    );
                    setTimeout(() => {
                        history.goBack();
                    }, 3000);
                }
            })
            .catch(function (error) {
                if (error.response.data.error.startsWith('Duplicate')) {
                    enqueueSnackbar(
                        'Failed! A user with this email already exists',
                        {
                            variant: 'error'
                        }
                    );
                }
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
                <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Sign up
                </Typography>
                <Box
                    component='form'
                    noValidate
                    onSubmit={handleSubmit(submitInput)}
                    sx={{ mt: 3 }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                error={errors.name}
                                helperText={
                                    errors.name && 'Please enter a name'
                                }
                                onChange={handleChange}
                                autoComplete='given-name'
                                name='name'
                                required
                                fullWidth
                                id='name'
                                label='Name'
                                autoFocus
                                {...register('name')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                error={errors.signUpCode}
                                helperText={
                                    errors.signUpCode && 'Invalid sign up code'
                                }
                                onChange={handleChange}
                                required
                                fullWidth
                                id='code'
                                label='Sign up code'
                                name='signUpCode'
                                {...register('signUpCode', { required: true })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={errors.email}
                                helperText={
                                    errors.email && 'Please enter a valid email'
                                }
                                onChange={handleChange}
                                required
                                fullWidth
                                id='email'
                                label='Email Address'
                                name='email'
                                autoComplete='email'
                                {...register('email', { required: true })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={errors.password}
                                helperText={
                                    errors.password &&
                                    'Passwords must be at least 8 characters'
                                }
                                onChange={handleChange}
                                required
                                fullWidth
                                name='password'
                                label='Password'
                                type='password'
                                id='password'
                                autoComplete='new-password'
                                {...register('password', { required: true })}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent='flex-end'>
                        <Grid item>
                            <Link
                                to='/dashboard'
                                style={{
                                    textDecoration: 'underline',
                                    color: '#424242'
                                }}
                            >
                                <Typography variant='body2'>
                                    Already have an account? Sign In
                                </Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default withSnackbar(SignUp);
