import React, { useState, useContext } from 'react';
import SignInForm from '../components/SignInForm';
import axios from 'axios';

import { CredentialsContext } from '../contexts/CredentialsContext';
import { Typography } from '@mui/material';

const SignIn = () => {
    axios.defaults.withCredentials = true;

    const [res, setRes] = useState('');

    const { credentials, setCredentials } = useContext(CredentialsContext);

    const handleCredentials = (event) => {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });
        console.log(credentials);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(CredentialsContext);
        axios
            .post(`${process.env.REACT_APP_URL}/api/v1/auth/login`, {
                credentials
            })
            .then(function (response) {
                console.log(response.data);
            });

        // eslint-disable-next-line no-console
        // console.log({
        //     email: data.get('email'),
        //     password: data.get('password')
        // });
    };

    return (
        <div>
            <SignInForm
                submit={handleSubmit}
                handleCredentials={handleCredentials}
            />
            <Typography>{res}</Typography>
        </div>
    );
};

export default SignIn;
