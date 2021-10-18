import React from 'react';
import { Button, Typography } from '@mui/material';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NextButton = (props) => {
    return (
        <Link to={props.link}>
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
};

export default NextButton;
