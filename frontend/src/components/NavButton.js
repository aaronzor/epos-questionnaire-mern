import React, { useContext } from 'react';
import { Button, Typography } from '@mui/material';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ResultContext } from '../contexts/ResultContext';

const NavButton = (props) => {
    const { object, setObject } = useContext(ResultContext);

    let { clear } = props;

    const clearHandler = () => {
        setObject({ ...object, ...clear });
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
                    sx={{ height: '55px', width: '100%' }}
                >
                    <Typography
                        paddingRight='10%'
                        marginTop='4%'
                        fontSize='20px'
                    >
                        Next
                    </Typography>
                    <FaAngleRight fontSize={35} style={{ marginTop: '1%' }} />
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
                    onClick={clearHandler}
                    clear={props.clear}
                    variant='contained'
                    disableElevation
                    sx={{ height: '55px', width: '100%' }}
                >
                    <FaAngleLeft fontSize={35} style={{ marginTop: '1%' }} />
                    <Typography marginLeft='10%' marginTop='4%' fontSize='20px'>
                        Back
                    </Typography>
                </Button>
            </Link>
        );
    }
};

export default NavButton;
