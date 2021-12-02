import React from 'react';
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
import passwordSchema from '../Validation/PasswordValidation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { useSnackbar, withSnackbar } from 'notistack';

const RequestPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(passwordSchema)
    });

    const { enqueueSnackbar } = useSnackbar();

    axios.defaults.withCredentials = true;

    const handleFormSubmit = async (event, data) => {
        console.log(data);

        // const res = await axios
        //     .post(`${process.env.REACT_APP_URL}/api/v1/auth/forgotpassword`, {
        //         data
        //     })
        //     .catch(function (error) {
        //         if (error.response) {
        //             console.log(error.response);
        //         }
        //     });

        // if (res) {
        //     enqueueSnackbar('Password reset email has been sent', {
        //         variant: 'success'
        //     });
        // }

        // console.log(res);
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
                    Forgot password?
                </Typography>
                <Typography component='h1' align='center' marginTop={2}>
                    Enter your email below, you will receive an email with
                    instructions on how to reset your password in a few minutes.{' '}
                </Typography>
                <Box
                    component='form'
                    onSubmit={handleSubmit(handleFormSubmit)}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    <TextField
                        error={errors.email}
                        helperText={
                            errors.email && 'Please enter a valid email'
                        }
                        {...register('email', { required: true })}
                        margin='normal'
                        required
                        fullWidth
                        id='email'
                        label='Email Address'
                        name='email'
                        autoComplete='email'
                    />

                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Submit
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link
                                to='/dashboard'
                                style={{
                                    textDecoration: 'underline',
                                    color: '#424242'
                                }}
                            >
                                <Typography variant='body2'>
                                    Login Screen
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

export default withSnackbar(RequestPassword);
