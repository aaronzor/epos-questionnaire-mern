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
                    onClick={clearHandler}
                    clear={props.clear}
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
