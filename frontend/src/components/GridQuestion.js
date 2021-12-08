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
                elevation={2}
                name={props.question}
            >
                <Typography
                    className={classes.questionHeader}
                    variant='h6'
                    align='center'
                    marginTop={!props.textInput && '4%'}
                    marginBottom={props.textInput && '5%'}
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
                        inputProps={{ maxLength: 250 }}
                    />
                )}
                {props.radioInput && (
                    <FormControl>
                        <RadioGroup
                            row
                            aria-label='trading'
                            name='userTrading'
                            sx={{ marginTop: '5%' }}
                        >
                            <FormControlLabel
                                value={true}
                                control={<Radio />}
                                label='Yes'
                                name='trading'
                                onChange={props.onChange}
                            />
                            <FormControlLabel
                                value={false}
                                control={<Radio />}
                                label='No'
                                name='trading'
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
