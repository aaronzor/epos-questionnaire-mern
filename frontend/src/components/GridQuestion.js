import React from 'react';
import { Grid, Card, Typography } from '@mui/material';
import useStyles from '../styles/makeStyle';

const GridQuestion = (props) => {
    const classes = useStyles();

    return (
        <Grid item xs={12}>
            <Card
                className={classes.gridQuestion}
                elevation={0}
                name={props.question}
            >
                <Typography variant='h6' align='center' marginTop='6%'>
                    {props.questionText}
                </Typography>
            </Card>
        </Grid>
    );
};

export default GridQuestion;
