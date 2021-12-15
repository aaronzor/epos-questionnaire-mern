import React from 'react';
import GridItem from '../components/GridItem';
import GridQuestion from '../components/GridQuestion';
import { Grid, Container, Typography } from '@mui/material';
import NavButton from '../components/NavButton';
import { motion } from 'framer-motion';
import pageVariants from '../utility/pageVariants';

const QuestionOne = () => {
    //const { object } = useContext(ResultContext);
    //const [proceed, setProceed] = useState(false);

    // const checkObject = () => {
    //     if (Object.values({ ...object }).includes(!clear.values)) {
    //         setProceed(true);
    //     } else setProceed(false);
    // };

    const clear = {
        fullEposSetup: false,
        softwareOnly: false,
        systemApplications: false,
        unsureNeedAdvice: false
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
                    spacing={2}
                    align='center'
                    justifyContent='center'
                    container
                    marginTop='5%'
                >
                    <Grid item xs={12}>
                        <Typography variant='overline'>Step 1 of 6</Typography>
                    </Grid>
                    <GridQuestion
                        question='question1'
                        questionText='What sort of service do you need?'
                    />
                    <GridItem name='fullEposSetup' answer='Full EPOS Setup' />
                    <GridItem name='softwareOnly' answer='Software Only' />
                    <GridItem
                        name='systemApplications'
                        answer='System & Applications'
                    />
                    <GridItem
                        name='unsureNeedAdvice'
                        answer='Unsure, Need Advice'
                    />
                    <NavButton link='/' variant='back' clear={clear} />
                    <NavButton link='/q2' variant='next' />
                </Grid>
            </Container>
        </motion.div>
    );
};

export default QuestionOne;
