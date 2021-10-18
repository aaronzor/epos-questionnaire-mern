import React from 'react';
import { Button, Typography } from '@mui/material';
import { FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BackButton = (props) => {
    return (
        <Link to={props.link}>
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
};

export default BackButton;
