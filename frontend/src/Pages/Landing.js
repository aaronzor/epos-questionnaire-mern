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
                    marginTop='4%'
                    marginBottom='2%'
                    className={classes.grid}
                >
                    <Grid item xs={12}>
                        <GridQuestion questionText='EPOS to fit your needs' />
                        <Typography my={5} px={1} align='left'>
                            This short questionnaire will help define your
                            requirements to help you manage and drive your
                            business through EPOS hardware and software
                        </Typography>
                        <Typography mt={6}>
                            Click Start, it only takes 60 seconds!
                        </Typography>
                    </Grid>
                    <Link to='/q1' style={{ textDecoration: 'none' }}>
                        <Button
                            variant='contained'
                            sx={{
                                width: '175px',
                                height: '60px',
                                marginLeft: '15px',
                                marginTop: '20px'
                            }}
                        >
                            Start
                        </Button>
                    </Link>
                </Grid>
            </Container>
        </motion.div>
    );
};

export default QuestionOne;
