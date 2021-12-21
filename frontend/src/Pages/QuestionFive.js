import React, { useContext } from 'react';
import {
    Grid,
    Container,
    Typography,
    TextField,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio
} from '@mui/material';
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
            <Container
                disableGutters
                maxWidth='xs'
                sx={{
                    width: '375px'
                }}
            >
                <Grid
                    spacing={5}
                    align='center'
                    justifyContent='center'
                    container
                    marginTop='0%'
                >
                    <Grid item xs={12}>
                        <Typography variant='overline'>Step 5 of 6</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            mb={2}
                            mt='40px'
                            paddingX={1}
                            fontWeight={600}
                        >
                            Payment Solutions – Do you have any specific needs
                            or require additional advice?
                        </Typography>

                        <TextField
                            name='otherNeeds'
                            id='otherNeeds'
                            onChange={handleOnChange}
                            className={classes.questionInput}
                            multiline
                            rows={8}
                            inputProps={{ maxLength: 500 }}
                        />

                        {/* CONSULTATION QUESTION - NOT USED */}
                        {/* <Grid item xs={12}>
                            <Typography
                                mb={2}
                                mt={3}
                                fontWeight={600}
                                paddingX={1}
                            >
                                Would you be willing to attend a face to face
                                consultation?
                            </Typography>

                            <FormControl>
                                <RadioGroup
                                    row
                                    aria-label='trading'
                                    name='userTrading'
                                    sx={{ marginBottom: '2rem' }}
                                >
                                    <FormControlLabel
                                        value={true}
                                        control={<Radio />}
                                        label='Yes'
                                        name='meeting'
                                        onChange={handleOnChange}
                                    />
                                    <FormControlLabel
                                        value={false}
                                        control={<Radio />}
                                        label='No'
                                        name='meeting'
                                        onChange={handleOnChange}
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid> */}
                    </Grid>

                    <NavButton link='/q4' variant='back' clear={clear} />
                    <NavButton link='/userdetails' variant='next' />
                </Grid>
            </Container>
        </motion.div>
    );
};

export default QuestionFive;
