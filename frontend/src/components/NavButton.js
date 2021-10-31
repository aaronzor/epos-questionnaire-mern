import React from 'react';
import { Button, Typography } from '@mui/material';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearCurrentAnswer } from '../features/currentAnswer';

import { pushCurrentAnswer } from '../features/result';

const NavButton = (props) => {
    const dispatch = useDispatch();
    const currentAnswer = useSelector((state) => state.currentAnswer);

    const clickHandler = () => {
        Promise.resolve(dispatch(pushCurrentAnswer(currentAnswer))).then(
            dispatch(clearCurrentAnswer([]))
        );
    };

    if (props.variant === 'next') {
        return (
            <Link
                to={props.link}
                style={{
                    textDecoration: 'none'
                }}
            >
                <Button
                    variant='contained'
                    disableElevation
                    onClick={clickHandler}
                    sx={{ height: '58px', width: '96px' }}
                >
                    <Typography paddingRight='10%' marginTop='5%'>
                        Next
                    </Typography>
                    <FaAngleRight fontSize={25} />
                </Button>
            </Link>
        );
    } else if (props.variant === 'back') {
        return (
            <Link
                to={props.link}
                style={{
                    textDecoration: 'none'
                }}
            >
                <Button
                    variant='contained'
                    disableElevation
                    sx={{ height: '58px', width: '96px' }}
                >
                    <FaAngleLeft fontSize={25} />
                    <Typography marginLeft='10%' marginTop='5%'>
                        Back
                    </Typography>
                </Button>
            </Link>
        );
    }
};

export default NavButton;
