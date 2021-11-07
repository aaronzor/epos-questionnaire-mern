import React from 'react';
import GridItem from '../components/GridItem';
import { Typography, Grid, Stack } from '@mui/material';
import { BiBuilding, BiBuildings } from 'react-icons/bi';
import NavButton from '../components/NavButton';

const QuestionTwo = () => {
    const clear = {
        Retail: false,
        Hospitality: false
    };

    return (
        <Stack display='flex' justifyContent='center' alignContent='center'>
            <Typography
                variant='h6'
                sx={{ marginTop: '5%', marginBottom: '2%' }}
            >
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
            </Typography>
            <Typography
                sx={{ marginTop: '5%', marginBottom: '5%' }}
                align='right'
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
            </Typography>
            <Typography align='center' m='6%' variant='h6'>
                Sed ut perspiciatis unde omnis?
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
                marginTop={20}
                justifyContent='space-around'
                alignContent='center'
                display='flex'
                sx={{ position: 'relative', bottom: 0 }}
            >
                <NavButton link='/q1' variant='back' clear={clear} />
                <NavButton link='/q3' variant='next' />
            </Stack>
        </Stack>
    );
};

export default QuestionTwo;
