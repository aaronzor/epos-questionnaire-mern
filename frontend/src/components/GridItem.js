import { React, useState, useContext } from 'react';
import { makeStyles } from '@mui/styles';
import { CardActionArea, Card, Grid, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import { ResultContext } from '../contexts/ResultContext';

const useStyles = makeStyles((theme) => ({
    customBorder: {
        border: `3px solid ${green[500]}`,
        boxShadow: 1
    }
}));

const GridItem = (props) => {
    const { object, setObject } = useContext(ResultContext);

    const classes = useStyles();

    // Local state
    const [clicked, setClicked] = useState(false);

    const clickHandler = () => {
        setClicked((prev) => !prev);

        props.otherText && props.otherText((prev) => !prev);

        setObject({
            ...object,
            [props.answer]: !clicked
        });
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
                    name={props.answer}
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
