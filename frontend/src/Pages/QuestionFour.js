import React, { useContext } from 'react';
import GridQuestion from '../components/GridQuestion';
import { Grid, Stack, Container, TextField } from '@mui/material';
import { ResultContext } from '../contexts/ResultContext';
import NavButton from '../components/NavButton';

const QuestionThree = () => {
    const clear = {
        'Company Name': false,
        'Position In Company': false
    };

    const { object, setObject } = useContext(ResultContext);

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setObject({ ...object, [name]: value });
    };

    return (
        <Container disableGutters maxWidth='xs'>
            <Grid
                spacing={2}
                align='center'
                justifyContent='center'
                container
                marginTop='5%'
            >
                <GridQuestion
                    question='question4'
                    questionText='What is the name of your business?'
                />
                <Grid Item xs={12}>
                    <TextField
                        name='Company Name'
                        onChange={handleOnChange}
                        label='Tell us about your business'
                        multiline
                        rows={4}
                    />
                </Grid>
                <GridQuestion
                    question='question4-2'
                    questionText='What is your position within the business?'
                />
                <TextField
                    name='Position In Company'
                    onChange={handleOnChange}
                    label='Tell us about your business'
                    multiline
                    rows={4}
                />
                <GridQuestion
                    question='question4-3'
                    questionText='Are you currently trading?'
                />
            </Grid>
            <Stack
                direction='row'
                marginTop={5}
                justifyContent='space-between'
                alignContent='space-between'
            >
                <NavButton link='/q2' variant='back' clear={clear} />
                <NavButton link='/q4' variant='next' />
            </Stack>
        </Container>
    );
};

export default QuestionThree;
