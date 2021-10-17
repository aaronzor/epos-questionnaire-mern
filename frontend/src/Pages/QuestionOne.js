import React from 'react';
import GridItem from '../components/GridItem';
import { Typography, Grid, Box } from '@mui/material';
import { BsShop } from 'react-icons/bs';
import { IoRestaurantOutline } from 'react-icons/io5';

const QuestionOne = () => {
    return (
        <Box>
            <Typography align='center' m='2%'>
                Grid Options system
            </Typography>

            <Grid
                spacing={1}
                alignItems='center'
                justifyContent='center'
                container
            >
                <GridItem
                    answer='Retail'
                    image={<BsShop sx={{ fontSize: 60 }} />}
                />
                <GridItem
                    answer='Hospitality'
                    image={<IoRestaurantOutline sx={{ fontSize: 60 }} />}
                />
            </Grid>
        </Box>
    );
};

export default QuestionOne;
