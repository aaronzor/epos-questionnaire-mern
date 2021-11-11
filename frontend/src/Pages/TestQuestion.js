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
        <Container disableGutters>
            <Typography align='center' className={classes.subTitle}>
                Reliable EPOS Solutions
            </Typography>
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
                <Stack
                    direction='row'
                    spacing={10}
                    marginTop={20}
                    justifyContent='center'
                    alignContent='center'
                    //display='flex'
                >
                    <NavButton link='/' variant='back' clear={clear} />
                    <NavButton link='/q2' variant='next' />
                </Stack>
            </Grid>
        </Container>
    );
};

export default TestQuestion;
