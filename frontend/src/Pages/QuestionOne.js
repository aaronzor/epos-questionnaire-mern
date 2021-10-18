import React from 'react';
import GridItem from '../components/GridItem';
import { Typography, Grid, Stack } from '@mui/material';
import { BiShoppingBag } from 'react-icons/bi';
import { IoRestaurantOutline } from 'react-icons/io5';
import NavButton from '../components/NavButton';

const QuestionOne = () => {
    return (
        <Stack display='flex' justifyContent='center' alignContent='center'>
            <Typography align='center' m='2%'>
                Grid Options system
            </Typography>

            <Grid spacing={0} align='center' justifyContent='center' container>
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
                marginTop='20%'
                justifyContent='space-around'
                alignContent='center'
                display='flex'
            >
                <NavButton link='/' variant='back' />
                <NavButton link='/q2' variant='next' />
            </Stack>
        </Stack>
    );
};

export default QuestionOne;
