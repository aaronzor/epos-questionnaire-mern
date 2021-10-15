import React from 'react';
import GridItem from '../components/GridItem';
import { Typography, Grid, Box } from '@mui/material';

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
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
            </Grid>
        </Box>
    );
};

export default QuestionOne;
