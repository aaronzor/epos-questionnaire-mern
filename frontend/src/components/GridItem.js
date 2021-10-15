import React from 'react';

import { CardActionArea, Card, Grid } from '@mui/material';

export const GridItem = () => {
    return (
        // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
        // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
        // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
        <Grid item xs={6} sm={3} md={3}>
            <CardActionArea
                sx={{
                    m: 0.2,
                    width: 156,
                    height: 156
                }}
            >
                <Card sx={{ width: '100%', height: '100%' }}>item</Card>
            </CardActionArea>
        </Grid>
    );
};

export default GridItem;
