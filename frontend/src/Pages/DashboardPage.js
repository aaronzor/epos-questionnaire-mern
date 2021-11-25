import React, { useContext } from 'react';
import axios from 'axios';

import Dashboard from '../components/dashboard/Dashboard';
import SignInForm from '../components/SignInForm';
import { LoggedInContext } from '../contexts/LoggedInContext';
import { Typography } from '@mui/material';

const DashboardPage = () => {
    axios.defaults.withCredentials = true;

    let { loggedIn } = useContext(LoggedInContext);

    return <div>{!loggedIn ? <SignInForm /> : <Dashboard />}</div>;
};

export default DashboardPage;
