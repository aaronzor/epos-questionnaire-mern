import React, { useContext } from 'react';
import { Container, Typography, TextField, Stack, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import NavButton from '../components/NavButton';
import { Link } from 'react-router-dom';
import { ResultContext } from '../contexts/ResultContext';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    formInput: { marginTop: '2%', marginBottom: '2%' }
}));

const UserDetails = () => {
    const { object, setObject } = useContext(ResultContext);

    const classes = useStyles();

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setObject({ ...object, [name]: value });
    };

    const clickHandler = () => {
        try {
            Promise.resolve(
                axios.post('http://localhost:5000/api/v1/results', object)
            );
        } catch (error) {
            console.log(error);
        }
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
                        name='Company'
                        onChange={handleOnChange}
                        id='company'
                        label='Company Name'
                        className={classes.formInput}
                    />
                    <TextField
                        name='Name'
                        onChange={handleOnChange}
                        id='name'
                        label='Contact Name'
                        className={classes.formInput}
                    />
                    <TextField
                        name='Email'
                        onChange={handleOnChange}
                        id='email'
                        label='Email'
                        className={classes.formInput}
                    />
                    <TextField
                        name='Phone'
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
