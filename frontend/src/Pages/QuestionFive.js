import React, { useContext } from 'react';
import { Grid, Container, Box } from '@mui/material';
import { ResultContext } from '../contexts/ResultContext';
import GridQuestion from '../components/GridQuestion';
import NavButton from '../components/NavButton';

import { motion } from 'framer-motion';
import pageVariants from '../utility/pageVariants';

const QuestionFive = () => {
    const clear = {
        otherNeeds: false
    };

    const { object, setObject } = useContext(ResultContext);

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setObject({ ...object, [name]: value });
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
                    spacing={5}
                    align='center'
                    justifyContent='center'
                    container
                    marginTop='0%'
                >
                    <GridQuestion
                        question='question5'
                        questionText=' Do you have any specific needs or are in need of any other advice regarding EPOS and
                    Payment solutions?'
                        textInput={true}
                        name='otherNeeds'
                        onChange={handleOnChange}
                        label=''
                        rows={6}
                    />

                    <NavButton link='/q4' variant='back' clear={clear} />
                    <NavButton link='/userdetails' variant='next' />
                </Grid>
            </Container>
        </motion.div>
    );
};

export default QuestionFive;
