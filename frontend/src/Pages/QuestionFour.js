import React from 'react';
import GridItem from '../components/GridItem';
import { Typography, Grid, Stack } from '@mui/material';
import { FaCashRegister } from 'react-icons/fa';

import NavButton from '../components/NavButton';

const QuestionThree = () => {
    const clear = {
        Bar: false,
        Restaurant: false,
        Other: false,
        'Other business info': ''
    };

    return (
        <Stack display='flex' justifyContent='center' alignContent='center'>
            <Typography align='center' m='2%'>
                Do you require more than one till?
            </Typography>

            <Grid spacing={1} align='center' justifyContent='center' container>
                <GridItem
                    answer='Single Till'
                    image={<FaCashRegister sx={{ fontSize: 60 }} />}
                />
                <GridItem
                    answer='Multiple Tills'
                    image={<FaCashRegister sx={{ fontSize: 60 }} />}
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
                <NavButton link='/q3' variant='back' clear={clear} />
                <NavButton link='/q5' variant='next' />
            </Stack>
        </Stack>
    );
};

export default QuestionThree;
