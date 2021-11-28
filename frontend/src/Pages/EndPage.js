import React from 'react';
import { Container, Typography, Button, Stack } from '@mui/material';

import { motion } from 'framer-motion';
import pageVariants from '../utility/pageVariants';

const EndPage = () => {
    const clickHandler = () => {};

    return (
        <motion.div
            variants={pageVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <Container maxWidth='xs'>
                <Typography align='center' marginTop='20%' variant='h6'>
                    Thank you for taking our questionnaire, we will be in touch
                    soon.
                </Typography>
            </Container>
        </motion.div>
    );
};

export default EndPage;
