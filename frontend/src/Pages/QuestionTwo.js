import React from 'react';
import GridItem from '../components/GridItem';
import { Typography, Grid, Stack } from '@mui/material';
import { BiBuilding, BiBuildings } from 'react-icons/bi';
import NavButton from '../components/NavButton';

const QuestionTwo = () => {
    return (
        <Stack display='flex' justifyContent='center' alignContent='center'>
            <Typography align='center' m='2%'>
                Does your company have multiple venues?
            </Typography>

            <Grid spacing={1} align='center' justifyContent='center' container>
                <GridItem
                    answer='Single Venue'
                    image={<BiBuilding sx={{ fontSize: 60 }} />}
                />
                <GridItem
                    answer='Multiple Venues'
                    image={<BiBuildings sx={{ fontSize: 60 }} />}
                />
            </Grid>
            <Stack
                direction='row'
                spacing={1}
                marginTop='20%'
                justifyContent='space-around'
                alignContent='center'
                display='flex'
            >
                <NavButton link='/q1' variant='back' />
                <NavButton link='/q3' variant='next' />
            </Stack>
        </Stack>
    );
};

export default QuestionTwo;
