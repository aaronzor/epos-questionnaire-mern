import React, { useContext, useState } from 'react';
import {
    Checkbox,
    Container,
    FormControlLabel,
    FormGroup,
    Grid,
    Typography,
    Box,
    Button,
    useMediaQuery,
    TextField
} from '@mui/material';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import NavButton from '../components/NavButton';
import { ResultContext } from '../contexts/ResultContext';
import pageVariants from '../utility/pageVariants';
import contactInfoSchema from '../Validation/ContactInfoValidation';
import useStyles from '../styles/makeStyle';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';

const UserDetails = () => {
    const [success, setSuccess] = useState(false);
    let submitSuccess = false;
    const history = useHistory();
    const breakPoint = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    const { object, setObject } = useContext(ResultContext);
    const classes = useStyles();
    const clear = {
        ContactName: null,
        Email: null,
        ContactNumber: null
    };
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        reValidateMode: 'onBlur',
        resolver: yupResolver(contactInfoSchema)
    });

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setObject({ ...object, [name]: value });
    };

    const onSubmit = async () => {
        const res = await axios.post(
            `${process.env.REACT_APP_URL}/api/v1/results`,
            {
                ...object
            }
        );

        if (res.statusText === 'Created') {
            setSuccess(true);
        }
    };
    console.log(success);
    return (
        <div>
            {!success ? (
                <motion.div
                    variants={pageVariants}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                >
                    <Container disableGutters maxWidth='xs'>
                        <Box
                            component='form'
                            onSubmit={handleSubmit(onSubmit)}
                            noValidate
                        >
                            <Grid
                                spacing={2}
                                align='center'
                                justifyContent='center'
                                container
                                marginTop='15%'
                            >
                                <Grid item xs={12}>
                                    <Typography>
                                        Please enter your details below
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        error={errors.ContactName}
                                        helperText={
                                            errors.ContactName &&
                                            'Please enter a name'
                                        }
                                        autoFocus
                                        name='ContactName'
                                        id='userDetailsName'
                                        label='Contact Name'
                                        // onChange MUST be below the register when using react-hook-form v7+
                                        {...register('ContactName')}
                                        onChange={handleOnChange}
                                        className={classes.questionInput}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        error={errors.Email}
                                        helperText={
                                            errors.Email &&
                                            'Please enter a valid email'
                                        }
                                        name='Email'
                                        id='userDetailsEmail'
                                        label='Email'
                                        {...register('Email')}
                                        onChange={handleOnChange}
                                        className={classes.questionInput}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        error={errors.ContactNumber}
                                        helperText={
                                            errors.ContactNumber &&
                                            'Please enter a contact number'
                                        }
                                        name='ContactNumber'
                                        id='userDetailsNumber'
                                        label='Contact Number'
                                        {...register('ContactNumber')}
                                        onChange={handleOnChange}
                                        className={classes.questionInput}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography marginTop='5%'>
                                        Please select your preferred contact
                                        method(s)
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormGroup
                                        sx={{
                                            paddingLeft: '5%',
                                            marginBottom: '3%'
                                        }}
                                    >
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    onChange={handleOnChange}
                                                />
                                            }
                                            label='Phone'
                                            name='Phone Contact'
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    onChange={handleOnChange}
                                                />
                                            }
                                            label='Email'
                                            name='Email Contact'
                                        />
                                    </FormGroup>
                                </Grid>
                                <NavButton
                                    variant='back'
                                    link='/q5'
                                    clear={clear}
                                />
                                <Grid item xs={6}>
                                    <Button
                                        type='submit'
                                        className={
                                            !breakPoint
                                                ? classes.navButton
                                                : classes.navButtonLg
                                        }
                                        variant='contained'
                                    >
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </motion.div>
            ) : (
                <motion.div
                    variants={pageVariants}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                >
                    <Container maxWidth='xs'>
                        <Typography align='center' marginTop='20%' variant='h6'>
                            Thank you for taking our questionnaire, we will be
                            in touch soon.
                        </Typography>
                    </Container>
                </motion.div>
            )}
        </div>
    );
};

export default UserDetails;
