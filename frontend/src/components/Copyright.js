import React from 'react';
import { Typography, Stack, Link } from '@mui/material';

const Copyright = (props) => {
    return (
        <Stack direction='row' justifyContent='center'>
            <Typography
                variant='body2'
                color='text.secondary'
                align='center'
                {...props}
            >
                {'Copyright © '}
                <Link color='inherit' href='https://www.qube-epos.co.uk/'>
                    Qube EPOS
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
            {props.dev && (
                <Link href='https://github.com/aaronzor/'>
                    <Typography ml={1} fontSize={12} pt={0.1}>
                        {' '}
                        Designed by AM
                    </Typography>
                </Link>
            )}
        </Stack>
    );
};

export default Copyright;
