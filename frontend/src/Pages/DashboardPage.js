import React, { useContext } from 'react';

import Dashboard from '../components/dashboard/Dashboard';
import SignInForm from '../components/SignInForm';
import { LoggedInContext } from '../contexts/LoggedInContext';

import { motion } from 'framer-motion';
import pageVariants from '../utility/pageVariants';

const DashboardPage = () => {
    let { loggedIn } = useContext(LoggedInContext);
    console.log(loggedIn);
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
