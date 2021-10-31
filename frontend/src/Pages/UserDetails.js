import React, { useState } from 'react';
import { Container, Typography, TextField, Stack, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import NavButton from '../components/NavButton';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
    clearCurrentAnswer,
    setCurrentAnswer
} from '../features/currentAnswer';
import { pushCurrentAnswer } from '../features/result';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    formInput: { marginTop: '2%', marginBottom: '2%' }
}));

const UserDetails = () => {
    const dispatch = useDispatch();
    const currentAnswer = useSelector((state) => state.currentAnswer);
    const result = useSelector((state) => state.result.value);

    const classes = useStyles();

    const [details, setDetails] = useState({
        company: '',
        name: '',
        email: '',
        phone: ''
    });

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setDetails({ ...details, [name]: value });
    };

    const clickHandler = () => {
        Promise.resolve(setDetails(details)).then(
            dispatch(setCurrentAnswer(details))
        );
    };

    return (
        <Container>
            <form>
                <Stack margin='5%'>
                    <Typography variant='h6' align='center' marginBottom='4%'>
                        Please fill in your details below so we can get back to
                        you
                    </Typography>
                    <TextField
                        name='company'
                        onChange={handleOnChange}
                        id='company'
                        label='Company Name'
                        className={classes.formInput}
                    />
                    <TextField
                        name='name'
                        onChange={handleOnChange}
                        id='name'
                        label='Contact Name'
                        className={classes.formInput}
                    />
                    <TextField
                        name='email'
                        onChange={handleOnChange}
                        id='email'
                        label='Email'
                        className={classes.formInput}
                    />
                    <TextField
                        name='phone'
                        onChange={handleOnChange}
                        id='phone'
                        label='Contact Number'
                        className={classes.formInput}
                    />
                    <Stack
                        direction='row'
                        spacing={1}
                        marginTop={20}
                        justifyContent='space-around'
                        alignContent='center'
                        display='flex'
                        sx={{ position: 'relative', bottom: 0 }}
                    >
                        <NavButton variant='back' link='/q5' />
                        <Link to='/endpage' style={{ textDecoration: 'none' }}>
                            <Button
                                variant='contained'
                                disableElevation
                                onClick={clickHandler}
                                sx={{ height: '58px', width: '96px' }}
                            >
                                <Typography marginTop='5%'>Submit</Typography>
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
            </form>
        </Container>
    );
};

export default UserDetails;
