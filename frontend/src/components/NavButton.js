import React from 'react';
import { Button, Typography } from '@mui/material';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavButton = (props) => {
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
