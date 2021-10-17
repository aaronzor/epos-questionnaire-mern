import { React, useState } from 'react';

import { CardActionArea, Card, Grid, Typography, Box } from '@mui/material';

const GridItem = (props) => {
    const [clicked, setClicked] = useState(false);
    const clickHandler = (e) => {
        if (!clicked) {
            setClicked(true);
        } else {
            setClicked(false);
        }
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
                </Card>
            </CardActionArea>
        </Grid>
    );
};

export default GridItem;
