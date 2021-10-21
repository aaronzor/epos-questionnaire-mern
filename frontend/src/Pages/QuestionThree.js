import React, { useState } from 'react';
import GridItem from '../components/GridItem';
import { Typography, Grid, Stack, Grow, TextField } from '@mui/material';
import { BiDrink } from 'react-icons/bi';
import { GrRestaurant } from 'react-icons/gr';
import { BsQuestionLg } from 'react-icons/bs';
import NavButton from '../components/NavButton';

const QuestionThree = () => {
    const [grow, setGrow] = useState(false);

    const handleTextGrow = () => {
        if (!grow) {
            setGrow(true);
        } else {
            setGrow(false);
        }
    };

    return (
        <Stack display='flex' justifyContent='center' alignContent='center'>
            <Typography align='center' m='2%'>
                What kind of business do you have?
            </Typography>

            <Grid spacing={1} align='center' justifyContent='center' container>
                <GridItem
                    answer='Bar'
                    image={<BiDrink sx={{ fontSize: 60 }} />}
                />
                <GridItem
                    answer='Restaurant'
                    image={<GrRestaurant sx={{ fontSize: 60 }} />}
                />
                <GridItem
                    answer='Other'
                    image={<BsQuestionLg sx={{ fontSize: 60 }} />}
                    otherText={handleTextGrow}
                />
            </Grid>
            <Stack alignContent='center' justifyContent='center'>
                <Grow in={grow}>
                    <TextField
                        sx={{
                            marginLeft: '10%',
                            marginRight: '10%',
                            marginTop: '10%',
                            textDecoration: 'none',
                            boxShadow: 0
                        }}
                        label='Tell us about your business'
                        multiline
                        rows={4}
                    />
                </Grow>
            </Stack>
            <Stack
                direction='row'
                spacing={1}
                marginTop={50}
                justifyContent='space-around'
                alignContent='center'
                display='flex'
            >
                <NavButton link='/q2' variant='back' />
                <NavButton link='/q4' variant='next' />
            </Stack>
        </Stack>
    );
};

export default QuestionThree;
