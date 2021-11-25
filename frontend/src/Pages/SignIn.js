import React, { useContext } from 'react';
import SignInForm from '../components/SignInForm';
import axios from 'axios';

import { LoggedInContext } from '../contexts/LoggedInContext';
import { Typography } from '@mui/material';

const SignIn = () => {
    axios.defaults.withCredentials = true;

    let { loggedIn } = useContext(LoggedInContext);

    return (
        <div>
            <SignInForm />
            {loggedIn && <Typography align='center'>Logged In</Typography>}
        </div>
    );
};

export default SignIn;
