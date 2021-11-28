import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Stack, Grid, Container } from '@mui/material';
import GridItem from '../components/GridItem';
import NavButton from '../components/NavButton';
import GridQuestion from '../components/GridQuestion';

const TestQuestion = () => {
    const clear = {
        Retail: false,
        Hospitality: false
    };

    let location = useLocation();

    useEffect(() => {
        console.log(location);
    }, [location]);

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
