import React from 'react';
import GridItem from '../components/GridItem';
import { Typography, Grid, Box } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

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
                    image={<ShoppingBagIcon sx={{ fontSize: 60 }} />}
                />
                <GridItem
                    answer='Hospitality'
                    image={<RestaurantIcon sx={{ fontSize: 60 }} />}
                />
            </Grid>
        </Box>
    );
};

export default QuestionOne;
