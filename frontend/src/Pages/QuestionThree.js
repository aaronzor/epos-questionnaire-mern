import React, { useState, useContext } from 'react';
import GridItem from '../components/GridItem';
import { Typography, Grid, Stack, Grow, TextField } from '@mui/material';
import { BiDrink } from 'react-icons/bi';
import { GrRestaurant } from 'react-icons/gr';
import { BsQuestionLg } from 'react-icons/bs';
import NavButton from '../components/NavButton';
import { ResultContext } from '../contexts/ResultContext';

const QuestionThree = () => {
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
        <Stack display='flex' justifyContent='center' alignContent='center'>
            <Typography
                variant='h6'
                sx={{ marginTop: '5%', marginBottom: '2%' }}
            >
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
            </Typography>

            <Typography align='center' m='6%' variant='h6'>
                Sed ut perspiciatis unde omnis?
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
                        name='Other business info'
                        onChange={handleOnChange}
                        sx={{
                            marginLeft: '7%',
                            marginRight: '7%',
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
                marginTop={20}
                justifyContent='space-around'
                alignContent='center'
                display='flex'
                sx={{ position: 'static', bottom: 0 }}
            >
                <NavButton link='/q2' variant='back' />
                <NavButton link='/q4' variant='next' />
            </Stack>
        </Stack>
    );
};

export default QuestionThree;
