import React from 'react';

// MUI imports
import { Container, Typography, Box } from '@mui/material';
import { grey } from '@mui/material/colors';

// Other imports
import { Link } from 'react-router-dom';
import Copyright from './Copyright';

const FooterComponent = ({ toggleDrawer }) => {
    return (
        <Box
            background={grey[400]}
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
        >
            <Container maxWidth='sm'>
                <Link
                    to='/dashboard'
                    style={{ textDecoration: 'none', color: '#c98ced' }}
                >
                    <Typography align='center'>Dashboard Login</Typography>
                </Link>

                <Copyright dev='true' />
            </Container>
        </Box>
    );
};

export default FooterComponent;
