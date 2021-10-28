import React from 'react';
import GridItem from '../components/GridItem';
import { Typography, Grid, Stack } from '@mui/material';
import { BiShoppingBag } from 'react-icons/bi';
import { IoRestaurantOutline } from 'react-icons/io5';
import NavButton from '../components/NavButton';

import { setOne } from '../features/result';

const QuestionOne = () => {
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
                    answer='Retail'
                    image={
                        <BiShoppingBag sx={{ fontSize: 60 }} moreInfo={true} />
                    }
                />
                <GridItem
                    answer='Hospitality'
                    image={<IoRestaurantOutline sx={{ fontSize: 60 }} />}
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
                <NavButton link='/' variant='back' />
                <NavButton link='/q2' variant='next' setter={setOne} />
            </Stack>
        </Stack>
    );
};

export default QuestionOne;
