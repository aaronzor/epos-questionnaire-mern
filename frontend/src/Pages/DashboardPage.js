import React, { useContext } from 'react';
import axios from 'axios';

import Dashboard from '../components/dashboard/Dashboard';
import SignInForm from '../components/SignInForm';
import { LoggedInContext } from '../contexts/LoggedInContext';

import { motion } from 'framer-motion';
import pageVariants from '../utility/pageVariants';

const DashboardPage = () => {
    axios.defaults.withCredentials = true;

    let { loggedIn } = useContext(LoggedInContext);

    return (
        <motion.div
            variants={pageVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            {!loggedIn ? <SignInForm /> : <Dashboard />}
        </motion.div>
    );
};

export default DashboardPage;
