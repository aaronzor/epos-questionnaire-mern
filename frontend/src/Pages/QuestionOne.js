import React from 'react';
import GridItem from '../components/GridItem';
import GridQuestion from '../components/GridQuestion';
import { Grid, Stack, Container } from '@mui/material';
import NavButton from '../components/NavButton';

const QuestionOne = () => {
    //const { object } = useContext(ResultContext);
    //const [proceed, setProceed] = useState(false);

    // const checkObject = () => {
    //     if (Object.values({ ...object }).includes(!clear.values)) {
    //         setProceed(true);
    //     } else setProceed(false);
    // };

    const clear = {
        'Full EPOS Setup': false,
        'Software Only': false,
        'System & Applications': false,
        'Unsure, Need Advice': false
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
                    questionText='What sort of service do you need?'
                />
                <GridItem answer='Full EPOS Setup' />
                <GridItem answer='Software Only' />
                <GridItem answer='System & Applications' />
                <GridItem answer='Unsure, Need Advice' />
            </Grid>
            <Stack
                direction='row'
                marginTop={5}
                justifyContent='space-between'
                alignContent='space-between'
                //display='flex'
            >
                <NavButton link='/' variant='back' clear={clear} />
                <NavButton link='/q2' variant='next' />
            </Stack>
        </Container>
    );
};

export default QuestionOne;
