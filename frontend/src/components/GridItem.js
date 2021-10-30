import { React, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { CardActionArea, Card, Grid, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import { useSelector, useDispatch } from 'react-redux';
import {
    setCurrentAnswer,
    filterCurrentAnswer
} from '../features/currentAnswer';

const useStyles = makeStyles((theme) => ({
    customBorder: {
        border: `3px solid ${green[500]}`,
        boxShadow: 1
    }
}));

const GridItem = (props) => {
    const classes = useStyles();

    // Redux global state
    const dispatch = useDispatch();
    const currentAnswer = useSelector((state) => state.currentAnswer.value);

    // Local state
    const [clicked, setClicked] = useState(false);
    const [answer, setAnswer] = useState('');

    // Use this to find index location of answers in global state array
    const index = (element) => element === answer;

    const clickHandler = (e) => {
        setClicked((prev) => !prev);

        props.otherText && props.otherText((prev) => !prev);
        !clicked
            ? Promise.resolve(setAnswer(props.answer)).then(
                  dispatch(setCurrentAnswer(props.answer))
              )
            : Promise.resolve(setAnswer(props.answer)).then(
                  dispatch(filterCurrentAnswer(currentAnswer.findIndex(index)))
              );
    };

    return (
        // From 0-960px wide (tablets and smartphones), Items take up 6 out of 12 columns, so 2 columns fit the screen.
        // From 960px wide and above, Items take up 25% of the device (3/12), so 4 columns fit the screen.
        <Grid item xs={6} sm={3} md={3}>
            <CardActionArea
                sx={{
                    m: 0.2,
                    width: 156,
                    height: 156
                }}
            >
                <Card
                    className={clicked && classes.customBorder}
                    elevation={0}
                    sx={{
                        width: '100%',
                        height: '100%',
                        boxShadow: '1'
                    }}
                    onClick={clickHandler}
                >
                    <Typography variant='h6' align='center' marginTop='6%'>
                        {props.answer}
                    </Typography>
                    <Typography align='center' marginTop='11%' variant='h2'>
                        {props.image}
                    </Typography>
                </Card>
            </CardActionArea>
        </Grid>
    );
};

export default GridItem;
