import React from 'react';
import { Grid, Card, Typography, useMediaQuery } from '@mui/material';
import useStyles from '../styles/makeStyle';

const GridQuestion = (props) => {
    const classes = useStyles();

    const breakPoint = useMediaQuery((theme) => theme.breakpoints.up('sm'));

    return (
        <Grid item xs={12}>
            <Card
                className={
                    !breakPoint ? classes.gridQuestion : classes.gridQuestionLg
                }
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
