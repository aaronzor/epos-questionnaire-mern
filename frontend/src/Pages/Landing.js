import React from 'react';

// MUI imports
import { Typography, Grid, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';

// Import Components
import GridQuestion from '../components/GridQuestion';

// Other Imports
import { motion } from 'framer-motion';
import pageVariants from '../utility/pageVariants';
import useStyles from '../styles/makeStyle';

const QuestionOne = () => {
    const classes = useStyles();

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
                    marginTop='4%'
                    marginBottom='2%'
                    className={classes.grid}
                >
                    <Grid item xs={12}>
                        <GridQuestion questionText='Welcome to the QUBE EPoS questionnaire' />
                        <Typography my={3} px={2}>
                            This short questionnaire will help us get an idea of
                            which of our services or products you might be
                            interested in
                            <Typography my={3}>
                                On each question, select any options that are
                                applicable to you
                            </Typography>
                            <Typography my={3}>
                                Use the navigation buttons to advance to the
                                next question, or to go back and change an
                                answer
                            </Typography>
                            <Typography my={3}>
                                Click on 'Start' when you are ready to begin!
                            </Typography>
                        </Typography>
                    </Grid>
                    <Link to='/q1' style={{ textDecoration: 'none' }}>
                        <Button variant='contained'>Start</Button>
                    </Link>
                </Grid>
            </Container>
        </motion.div>
    );
};

export default QuestionOne;
