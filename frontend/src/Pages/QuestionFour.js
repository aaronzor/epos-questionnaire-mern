import React, { useContext } from 'react';
import { Grid, Container } from '@mui/material';
import { ResultContext } from '../contexts/ResultContext';
import GridQuestion from '../components/GridQuestion';
import NavButton from '../components/NavButton';

const QuestionThree = () => {
    const clear = {
        'Company Name': false,
        'Position In Company': false,
        Trading: false
    };

    const { object, setObject } = useContext(ResultContext);

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setObject({ ...object, [name]: value });
    };

    return (
        <Container disableGutters maxWidth='xs'>
            <Grid
                spacing={3}
                align='center'
                justifyContent='center'
                container
                marginTop='0%'
            >
                <GridQuestion
                    question='question4'
                    questionText='What is the name of your business?'
                    textInput={true}
                    name='Company Name'
                    onChange={handleOnChange}
                    label=''
                    rows={1}
                />

                <GridQuestion
                    question='question4-2'
                    questionText='What is your position within the business?'
                    textInput={true}
                    name='Position In Company'
                    onChange={handleOnChange}
                    label=''
                    rows={1}
                />

                <GridQuestion
                    question='question4-3'
                    questionText='Are you currently trading?'
                    radioInput={true}
                    onChange={handleOnChange}
                />

                <NavButton link='/q3' variant='back' clear={clear} />
                <NavButton link='/q5' variant='next' />
            </Grid>
        </Container>
    );
};

export default QuestionThree;
