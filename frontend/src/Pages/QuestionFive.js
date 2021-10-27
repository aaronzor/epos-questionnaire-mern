import React from 'react';
import GridItem from '../components/GridItem';
import { Typography, Grid, Stack } from '@mui/material';
import { BsPhone } from 'react-icons/bs';
import { GiTabletopPlayers } from 'react-icons/gi';

import NavButton from '../components/NavButton';

const QuestionThree = () => {
    return (
        <Stack display='flex' justifyContent='center' alignContent='center'>
            <Typography align='center' m='2%'>
                Do you require?
            </Typography>

            <Grid spacing={1} align='center' justifyContent='center' container>
                <GridItem
                    answer='Table Ordering'
                    image={<GiTabletopPlayers sx={{ fontSize: 60 }} />}
                />
                <GridItem
                    answer='Online Ordering'
                    image={<BsPhone sx={{ fontSize: 60 }} />}
                />
            </Grid>
            <Stack
                direction='row'
                spacing={1}
                marginTop={20}
                justifyContent='space-around'
                alignContent='center'
                display='flex'
                sx={{ position: 'relative', bottom: -400 }}
            >
                <NavButton link='/q4' variant='back' />
                <NavButton link='/q6' variant='next' />
            </Stack>
        </Stack>
    );
};

export default QuestionThree;
