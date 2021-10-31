import React from 'react';
import { Container, Typography, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { pushCurrentAnswer } from '../features/result';

const EndPage = () => {
    const dispatch = useDispatch();
    const result = useSelector((state) => state.result.value);
    const currentAnswer = useSelector((state) => state.currentAnswer);

    const resultObject = {
        question1: result[0],
        question2: result[1],
        question3: result[2],
        question4: result[3],
        question5: result[4],
        userDetails: result[6]
    };

    const post = async () => {
        await axios.post('http://localhost:5000/api/v1/results', resultObject);
    };

    const clickHandler = () => {
        Promise.resolve(dispatch(pushCurrentAnswer(currentAnswer))).then(post);
    };

    return (
        <Container>
            <Stack alignContent='center' justifyContent='center'>
                <Typography align='center' margin='5%'>
                    Thank you for taking our questionnaire, we will be in touch
                    soon.
                </Typography>

                <Button variant='contained' onClick={clickHandler}>
                    Submit
                </Button>
            </Stack>
        </Container>
    );
};

export default EndPage;
