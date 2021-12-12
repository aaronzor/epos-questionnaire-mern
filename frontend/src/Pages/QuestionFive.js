import React, { useContext } from 'react';
import { Grid, Container, Typography, TextField } from '@mui/material';
import { ResultContext } from '../contexts/ResultContext';

import NavButton from '../components/NavButton';

import { motion } from 'framer-motion';
import pageVariants from '../utility/pageVariants';
import useStyles from '../styles/makeStyle';

const QuestionFive = () => {
    const classes = useStyles();

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
                    <Grid item xs={12}>
                        <Typography mb={2} mt={8} paddingX={2}>
                            Do you have any specific needs or are in need of any
                            other advice regarding EPoS and Payment solutions?
                        </Typography>

                        <TextField
                            name='otherNeeds'
                            id='otherNeeds'
                            onChange={handleOnChange}
                            className={classes.questionInput}
                            multiline
                            rows={8}
                            inputProps={{ maxLength: 150 }}
                        />
                    </Grid>

                    <NavButton link='/q4' variant='back' clear={clear} />
                    <NavButton link='/userdetails' variant='next' />
                </Grid>
            </Container>
        </motion.div>
    );
};

export default QuestionFive;
