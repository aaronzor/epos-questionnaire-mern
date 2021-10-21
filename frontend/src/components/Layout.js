import React from 'react';
import { Container, Toolbar, Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <Box>
            <Container>
                <Header />
                <Toolbar />
                {children}
                <Toolbar />
            </Container>
            <Footer />
        </Box>
    );
};

export default Layout;
