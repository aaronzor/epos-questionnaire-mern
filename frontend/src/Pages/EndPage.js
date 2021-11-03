import React from 'react';
import { Container, Typography, Button, Stack } from '@mui/material';

const EndPage = () => {
    const clickHandler = () => {};

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
