import React from 'react';
import { Container, Toolbar } from '@mui/material';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <Container>
            <Header />
            <Toolbar />
            {children}
            <Toolbar />
        </Container>
    );
};

export default Layout;
