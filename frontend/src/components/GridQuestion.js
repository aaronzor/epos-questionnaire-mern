import React from 'react';
import {
    Grid,
    Card,
    Typography,
    useMediaQuery,
    TextField,
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel
} from '@mui/material';
import useStyles from '../styles/makeStyle';

const GridQuestion = (props) => {
    const classes = useStyles();

    const breakPoint = useMediaQuery((theme) => theme.breakpoints.up('sm'));

    return (
        <Grid item xs={12}>
            <Card
                sx={{ ...(props.textInput && { height: '90%' }) }}
                className={
                    !breakPoint ? classes.gridQuestion : classes.gridQuestionLg
                }
                elevation={0}
                name={props.question}
            >
                <Typography
                    variant='h6'
                    align='center'
                    marginTop={!props.textInput ? '6%' : '3%'}
                    marginBottom={props.textInput && '10%'}
                >
                    {props.questionText}
                </Typography>
                {props.textInput && (
                    <TextField
                        name={props.name}
                        onChange={props.onChange}
                        className={classes.questionInput}
                        label={props.label}
                        multiline
                        rows={props.rows}
                    />
                )}
                {props.radioInput && (
                    <FormControl>
                        <RadioGroup row aria-label='trading' name='userTrading'>
                            <FormControlLabel
                                value={true}
                                control={<Radio size='large' />}
                                label='Yes'
                                name='Trading'
                                onChange={props.onChange}
                            />
                            <FormControlLabel
                                value={false}
                                control={<Radio size='large' />}
                                label='No'
                                name='Trading'
                                onChange={props.onChange}
                            />
                        </RadioGroup>
                    </FormControl>
                )}
            </Card>
        </Grid>
    );
};

export default GridQuestion;
