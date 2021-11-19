import React, { useState, useContext } from 'react';
import GridItem from '../components/GridItem';
import GridQuestion from '../components/GridQuestion';
import { Grid, Container, Grow, TextField } from '@mui/material';
import NavButton from '../components/NavButton';
import { ResultContext } from '../contexts/ResultContext';
import useStyles from '../styles/makeStyle';

const QuestionTwo = () => {
    const classes = useStyles();

    const clear = {
        Retail: false,
        Hospitality: false,
        Other: false,
        'Other business info': false
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
                <GridItem answer='Retail' />
                <GridItem answer='Hospitality' />

                <GridItem answer='Other' otherText={handleTextGrow} />
                <Grow in={grow}>
                    <TextField
                        name='Other business info'
                        onChange={handleOnChange}
                        // sx={{
                        //     marginLeft: '7%',
                        //     marginRight: '7%',
                        //     marginTop: '10%',
                        //     textDecoration: 'none',
                        //     boxShadow: 0
                        // }}
                        className={classes.gridInput}
                        label='Tell us about your business'
                        multiline
                        rows={4}
                    />
                </Grow>

                <NavButton link='/q1' variant='back' clear={clear} />
                <NavButton link='/q3' variant='next' />
            </Grid>
        </Container>
    );
};

export default QuestionTwo;
