import React, { useContext, useState } from 'react';
import GridItem from '../components/GridItem';
import { Typography, Grid, Stack, Button } from '@mui/material';
import { BiShoppingBag } from 'react-icons/bi';
import { IoRestaurantOutline } from 'react-icons/io5';
import NavButton from '../components/NavButton';
import { ResultContext } from '../contexts/ResultContext';

const QuestionOne = () => {
    //const { object } = useContext(ResultContext);
    //const [proceed, setProceed] = useState(false);

    // const checkObject = () => {
    //     if (Object.values({ ...object }).includes(!clear.values)) {
    //         setProceed(true);
    //     } else setProceed(false);
    // };

    const clear = {
        Retail: false,
        Hospitality: false
    };

    return (
        <Stack justifyContent='center' alignContent='center'>
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
                spacing={10}
                marginTop={20}
                justifyContent='center'
                alignContent='center'
                //display='flex'
            >
                <NavButton link='/' variant='back' clear={clear} />
                <NavButton link='/q2' variant='next' />
            </Stack>
        </Stack>
    );
};

export default QuestionOne;
