import React from 'react';
import GridItem from '../components/GridItem';
import GridQuestion from '../components/GridQuestion';
import { Grid, Container } from '@mui/material';
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
                <NavButton link='/' variant='back' clear={clear} />
                <NavButton link='/q2' variant='next' />
            </Grid>
        </Container>
    );
};

export default QuestionOne;
