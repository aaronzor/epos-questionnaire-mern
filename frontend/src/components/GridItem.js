import { React, useState, useContext } from 'react';

// MUI imports
import {
    CardActionArea,
    Card,
    Grid,
    Typography,
    useMediaQuery
} from '@mui/material';
import { green } from '@mui/material/colors';

// Import Styling
import useStyles from '../styles/makeStyle';

// Import context
import { ResultContext } from '../contexts/ResultContext';

const GridItem = (props) => {
    const { object, setObject } = useContext(ResultContext);

    const classes = useStyles();
    //const breakPoint = useMediaQuery((theme) => theme.breakpoints.up('sm'));

    // Local state
    const [clicked, setClicked] = useState(false);

    const clickHandler = (event) => {
        setClicked((prev) => !prev);

        props.otherText && props.otherText((prev) => !prev);

        const { value } = event.target;
        setObject({
            ...object,
            [props.name]: !clicked
        });
    };

    return (
        // From 0-960px wide (tablets and smartphones), Items take up 6 out of 12 columns, so 2 columns fit the screen.
        // From 960px wide and above, Items take up 25% of the device (3/12), so 4 columns fit the screen.

        <Grid item xs={6}>
            <CardActionArea>
                <Card
                    className={classes.gridOption}
                    elevation={0}
                    onClick={clickHandler}
                    name={props.name}
                    sx={{
                        ...(clicked && { border: `3.5px solid ${green[500]}` })
                    }}
                >
                    <Typography
                        variant='h6'
                        align='center'
                        marginTop='30%'
                        paddingX='5px'
                    >
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
