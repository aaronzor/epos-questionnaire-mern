import React, { useState, useEffect, useContext } from 'react';
import SignInForm from '../components/SignInForm';
import axios from 'axios';
import { wrapper } from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';

import { CredentialsContext } from '../contexts/CredentialsContext';
import { Typography } from '@mui/material';

const SignIn = () => {
    axios.defaults.withCredentials = true;

    const [res, setRes] = useState('');

    const { credentials, setCredentials } = useContext(CredentialsContext);

    const handleCredentials = (event) => {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const jar = new CookieJar();
    const client = wrapper(axios.create({ jar }));

    const handleSubmit = async (event) => {
        event.preventDefault();

        client
            .post(
                `${process.env.REACT_APP_URL}/api/v1/auth/login`,
                {
                    credentials
                },
                {
                    credentials: 'include',
                    withCredentials: true,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                }
            )
            .then(function (response) {
                setRes(response.data);
            })
            .then(console.log(res));

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
