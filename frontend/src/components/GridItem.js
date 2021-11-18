import { React, useState, useContext } from 'react';
import {
    CardActionArea,
    Card,
    Grid,
    Typography,
    useMediaQuery
} from '@mui/material';
import { ResultContext } from '../contexts/ResultContext';
import useStyles from '../styles/makeStyle';
import useBreakPoint from '../utility/breakPointHelper';

const GridItem = (props) => {
    const { object, setObject } = useContext(ResultContext);

    const classes = useStyles();
    const breakPoint = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    console.log(breakPoint);

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

        <Grid item xs={6}>
            <CardActionArea
            // className={clicked && classes.customBorder}
            // sx={{
            //     m: 0.2,
            //     width: 156,
            //     height: 156
            // }}
            >
                <Card
                    className={
                        !breakPoint ? classes.gridOption : classes.gridOptionLg
                    }
                    elevation={0}
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
