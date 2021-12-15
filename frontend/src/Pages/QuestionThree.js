import React from 'react';
import GridItem from '../components/GridItem';
import GridQuestion from '../components/GridQuestion';
import { Grid, Container, Typography } from '@mui/material';
import NavButton from '../components/NavButton';

import { motion } from 'framer-motion';
import pageVariants from '../utility/pageVariants';

const QuestionThree = () => {
    const clear = {
        onlineOrdering: false,
        cardReaders: false,
        cloudSoftware: false
    };

    return (
        <motion.div
            variants={pageVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <Container
                disableGutters
                maxWidth='xs'
                sx={{
                    width: '375px'
                }}
            >
                <Grid
                    spacing={2}
                    align='center'
                    justifyContent='center'
                    container
                    marginTop='5%'
                >
                    <Grid item xs={12}>
                        <Typography variant='overline'>Step 3 of 6</Typography>
                    </Grid>
                    <GridQuestion
                        question='question1'
                        questionText='Please select anything else you would like information on'
                    />
                    <GridItem name='onlineOrdering' answer='Online Ordering' />
                    <GridItem name='cardReaders' answer='Card Readers' />
                    <GridItem name='cloudSoftware' answer='Cloud Software' />
                </Grid>
                <Grid
                    spacing={2}
                    align='center'
                    justifyContent='center'
                    container
                    marginTop='5%'
                >
                    <NavButton link='/q2' variant='back' clear={clear} />
                    <NavButton link='/q4' variant='next' />
                </Grid>
            </Container>
        </motion.div>
    );
};

export default QuestionThree;
