import React, { useState, useContext } from 'react';
import GridItem from '../components/GridItem';
import GridQuestion from '../components/GridQuestion';
import GridText from '../components/GridText';
import { Grid, Container } from '@mui/material';
import NavButton from '../components/NavButton';
import { ResultContext } from '../contexts/ResultContext';

import { motion } from 'framer-motion';
import pageVariants from '../utility/pageVariants';

const QuestionTwo = () => {
    const clear = {
        retail: false,
        hospitality: false,
        other: false,
        otherBusinessInfo: false
    };

    const { object, setObject } = useContext(ResultContext);

    const [grow, setGrow] = useState(false);

    const handleTextGrow = () => {
        if (!grow) {
            setGrow(true);
        } else {
            setGrow(false);
        }
    };

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
                    spacing={2}
                    align='center'
                    justifyContent='center'
                    container
                    marginTop='5%'
                >
                    <GridQuestion
                        question='question1'
                        questionText='Which industry best describes your business?'
                    />
                    <GridItem name='retail' answer='Retail' />
                    <GridItem name='hospitality' answer='Hospitality' />

                    <GridItem
                        name='otherIndustry'
                        otherText={handleTextGrow}
                        answer='Other'
                    />

                    <GridText
                        visable={grow}
                        name='otherIndustryInfo'
                        onChange={handleOnChange}
                        label='Tell us your industry'
                        multiline
                        rows='2'
                    />
                </Grid>
                <Grid
                    spacing={2}
                    align='center'
                    justifyContent='center'
                    container
                    marginTop='2%'
                    marginBottom='10%'
                >
                    <NavButton link='/q1' variant='back' clear={clear} />
                    <NavButton link='/q3' variant='next' />
                </Grid>
            </Container>
        </motion.div>
    );
};

export default QuestionTwo;
