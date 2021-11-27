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
            <Container>
                <Stack alignContent='center' justifyContent='center'>
                    <Typography align='center' margin='5%'>
                        Thank you for taking our questionnaire, we will be in
                        touch soon.
                    </Typography>

                    <Button variant='contained' onClick={clickHandler}>
                        Submit
                    </Button>
                </Stack>
            </Container>
        </motion.div>
    );
};

export default EndPage;
