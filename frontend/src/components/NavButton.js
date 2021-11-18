import React, { useContext } from 'react';
import { Button, Typography, Grid, useMediaQuery } from '@mui/material';
import {
    MdOutlineArrowBackIosNew,
    MdOutlineArrowForwardIos
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ResultContext } from '../contexts/ResultContext';
import useStyles from '../styles/makeStyle';

const NavButton = (props) => {
    const classes = useStyles();

    const breakPoint = useMediaQuery((theme) => theme.breakpoints.up('sm'));

    const { object, setObject } = useContext(ResultContext);

    let { clear } = props;

    const clearHandler = () => {
        setObject({ ...object, ...clear });
    };

    if (props.variant === 'next') {
        return (
            <Grid item xs={6}>
                <Link
                    to={props.link}
                    style={{
                        textDecoration: 'none'
                    }}
                >
                    <Button
                        className={
                            !breakPoint
                                ? classes.navButton
                                : classes.navButtonLg
                        }
                        variant='contained'
                        endIcon={<MdOutlineArrowForwardIos />}
                    >
                        Next
                    </Button>
                </Link>
            </Grid>
        );
    } else if (props.variant === 'back') {
        return (
            <Grid item xs={6}>
                <Link
                    to={props.link}
                    style={{
                        textDecoration: 'none'
                    }}
                >
                    <Button
                        className={
                            !breakPoint
                                ? classes.navButton
                                : classes.navButtonLg
                        }
                        onClick={clearHandler}
                        clear={props.clear}
                        variant='contained'
                        startIcon={<MdOutlineArrowBackIosNew />}
                    >
                        Back
                    </Button>
                </Link>
            </Grid>
        );
    }
};

export default NavButton;
