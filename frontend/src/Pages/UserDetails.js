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
import axios from 'axios';
import NavButton from '../components/NavButton';
import { ResultContext } from '../contexts/ResultContext';
import pageVariants from '../utility/pageVariants';
import contactInfoSchema from '../Validation/ContactInfoValidation';
import useStyles from '../styles/makeStyle';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';
import qubeTick from '../assets/qube-tick.png';

const UserDetails = () => {
    //const breakPoint = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    const [success, setSuccess] = useState(false);
    const { object, setObject } = useContext(ResultContext);
    const classes = useStyles();
    const clear = {
        contactName: null,
        email: null,
        contactNumber: null
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
        const res = await axios
            .post(`${process.env.REACT_APP_URL}/api/v1/results`, {
                ...object
            })
            .catch((error) => {
                error && console.log(error);
            });

        if (res && res.statusText === 'Created') {
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
                    <Container
                        disableGutters
                        maxWidth='xs'
                        sx={{
                            width: '375px'
                        }}
                    >
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
                                marginTop='10%'
                                marginBottom='10%'
                            >
                                <Grid item xs={12}>
                                    <Typography variant='overline'>
                                        Step 6 of 6
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography mt='40px' fontWeight={600}>
                                        Please enter your details below
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        error={errors.contactName}
                                        helperText={
                                            errors.contactName &&
                                            'Please enter a name'
                                        }
                                        name='contactName'
                                        id='userDetailsName'
                                        label='Contact Name'
                                        // onChange MUST be below the register when using react-hook-form v7+
                                        {...register('contactName')}
                                        onChange={handleOnChange}
                                        className={classes.questionInput}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        error={errors.email}
                                        helperText={
                                            errors.email &&
                                            'Please enter a valid email'
                                        }
                                        name='email'
                                        id='userDetailsEmail'
                                        label='Email'
                                        {...register('email')}
                                        onChange={handleOnChange}
                                        className={classes.questionInput}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        error={errors.contactNumber}
                                        helperText={
                                            errors.contactNumber &&
                                            'Please enter a contact number'
                                        }
                                        name='contactNumber'
                                        id='userDetailsNumber'
                                        label='Contact Number'
                                        {...register('contactNumber')}
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
                                            name='phoneContact'
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    onChange={handleOnChange}
                                                />
                                            }
                                            label='Email'
                                            name='emailContact'
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
                                        className={classes.navButton}
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
                    <Container
                        disableGutters
                        maxWidth='xs'
                        sx={{
                            width: '375px'
                        }}
                    >
                        <Grid
                            spacing={3}
                            align='center'
                            justifyContent='center'
                            marginTop='10%'
                            marginBottom='10%'
                        >
                            <Grid item xs={12}>
                                <Typography
                                    variant='h4'
                                    marginBottom={4}
                                    marginTop={8}
                                    fontWeight={700}
                                >
                                    Enquiry Successful!
                                </Typography>
                                <img
                                    className={classes.qubeTick}
                                    src={qubeTick}
                                    alt='Success confirmation checkmark'
                                />
                                <Typography
                                    marginTop='8%'
                                    marginX={2}
                                    fontWeight={400}
                                >
                                    DONT WORRY YOU WONT RECIEVE ANY SPAM EMAILS
                                    FROM US! YOUR QUOTE IS BEING BUILT AND A
                                    MEMBER OF THE TEAM WILL CONTACT YOU ASAP
                                </Typography>
                                <Typography marginTop='8%' fontWeight={600}>
                                    THANK YOU, THE QUBE TEAM
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </motion.div>
            )}
        </div>
    );
};

export default UserDetails;
