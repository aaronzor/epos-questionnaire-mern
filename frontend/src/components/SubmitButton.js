import React, { useContext } from 'react';
import { Button, useMediaQuery, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from '../styles/makeStyle';
import { ResultContext } from '../contexts/ResultContext';
import axios from 'axios';

const SubmitButton = (props) => {
    const { object } = useContext(ResultContext);

    const classes = useStyles();

    const breakPoint = useMediaQuery((theme) => theme.breakpoints.up('sm'));

    const clickHandler = () => {
        try {
            Promise.resolve(
                axios.post('http://localhost:5000/api/v1/results', object)
            );
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Grid item xs={6}>
            <Link
                to={props.link}
                style={{
                    textDecoration: 'none'
                }}
            >
                <Button
                    type='submit'
                    className={
                        !breakPoint ? classes.navButton : classes.navButtonLg
                    }
                    onClick={clickHandler}
                    variant='contained'
                >
                    Submit
                </Button>
            </Link>
        </Grid>
    );
};

export default SubmitButton;
