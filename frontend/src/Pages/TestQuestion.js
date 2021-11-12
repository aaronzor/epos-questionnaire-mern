import React from 'react';
import { Stack, Typography, Grid, Container } from '@mui/material';
import GridItem from '../components/GridItem';
import NavButton from '../components/NavButton';
import GridQuestion from '../components/GridQuestion';
import useStyles from '../styles/makeStyle';

const TestQuestion = () => {
    const clear = {
        Retail: false,
        Hospitality: false
    };

    const classes = useStyles();

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
                    question='question1'
                    questionText='TestTestTestTestTest
                                  TestTestTestTest'
                />
                <GridItem answer='Retail' />
                <GridItem answer='Hospitality' />
                <GridItem answer='Hospitality' />
                <GridItem answer='Hospitality' />
            </Grid>
            <Stack
                direction='row'
                marginTop={5}
                justifyContent='space-between'
                alignContent='space-between'
                //display='flex'
            >
                <NavButton link='/' variant='back' clear={clear} />
                <NavButton link='/q2' variant='next' />
            </Stack>
        </Container>
    );
};

export default TestQuestion;
