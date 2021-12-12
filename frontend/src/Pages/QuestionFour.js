import React, { useContext } from 'react';
import {
    Grid,
    Container,
    Typography,
    TextField,
    FormControl,
    Radio,
    RadioGroup,
    FormControlLabel
} from '@mui/material';
import GridQuestion from '../components/GridQuestion';
import NavButton from '../components/NavButton';
import { ResultContext } from '../contexts/ResultContext';

// Other Imports
import { motion } from 'framer-motion';
import pageVariants from '../utility/pageVariants';
import useStyles from '../styles/makeStyle';

const QuestionThree = () => {
    const classes = useStyles();

    const clear = {
        companyName: false,
        positionInCompany: false,
        Trading: false
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
                    marginBottom='10%'
                >
                    <Grid item xs={12}>
                        <Typography mb={2} mt={8}>
                            What is the name of your business?
                        </Typography>

                        <TextField
                            name='companyName'
                            id='companyName'
                            label='Company Name'
                            onChange={handleOnChange}
                            className={classes.questionInput}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography mb={2} mt={5}>
                            What is your position within the business?
                        </Typography>

                        <TextField
                            name='positionInCompany'
                            id='positionInCompany'
                            label='Position in Company'
                            onChange={handleOnChange}
                            className={classes.questionInput}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography mb={2} mt={3}>
                            Are you currently trading?
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
                                    name='trading'
                                    onChange={handleOnChange}
                                />
                                <FormControlLabel
                                    value={false}
                                    control={<Radio />}
                                    label='No'
                                    name='trading'
                                    onChange={handleOnChange}
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <NavButton link='/q3' variant='back' clear={clear} />
                    <NavButton link='/q5' variant='next' />
                </Grid>
            </Container>
        </motion.div>
    );
};

export default QuestionThree;
