import { React, useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
    CardActionArea,
    Card,
    Grid,
    Typography,
    Collapse,
    CardContent
} from '@mui/material';
import { green } from '@mui/material/colors';

const useStyles = makeStyles((theme) => ({
    customBorder: {
        border: `3px solid ${green[500]}`,
        boxShadow: 1
    }
}));

const GridItem = (props) => {
    const classes = useStyles();

    const [clicked, setClicked] = useState(false);
    const clickHandler = (e) => {
        setClicked((prev) => !prev);
        props.otherText && props.otherText((prev) => !prev);
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
                    elevation='0'
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
                    {props.moreInfo && (
                        <Collapse in={clicked} timeout='auto'>
                            <CardContent>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </CardContent>
                        </Collapse>
                    )}
                </Card>
            </CardActionArea>
        </Grid>
    );
};

export default GridItem;
