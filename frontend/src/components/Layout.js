import React from 'react';
import { Container, Toolbar, Box } from '@mui/material';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <Box>
            <Container>
                <Header />
                <Toolbar />
                {children}
                <Toolbar />
            </Container>
        </Box>
    );
};

export default Layout;
