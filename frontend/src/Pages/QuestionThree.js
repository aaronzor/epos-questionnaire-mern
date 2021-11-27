import React from 'react';
import GridItem from '../components/GridItem';
import GridQuestion from '../components/GridQuestion';
import { Grid, Container } from '@mui/material';
import NavButton from '../components/NavButton';

import { motion } from 'framer-motion';
import pageVariants from '../utility/pageVariants';

const QuestionThree = () => {
    const clear = {
        'Online Ordering': false,
        'Card Readers': false,
        'Cloud Software': false
    };

    return (
        <motion.div
            variants={pageVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <Container disableGutters maxWidth='xs'>
                <Grid
                    spacing={2}
                    align='center'
                    justifyContent='center'
                    container
                    marginTop='5%'
                >
                    <GridQuestion
                        question='question1'
                        questionText='Please select anything else you would like information/quotations for'
                    />
                    <GridItem answer='Online Ordering' />
                    <GridItem answer='Card Readers' />
                    <GridItem answer='Cloud Software' />
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
