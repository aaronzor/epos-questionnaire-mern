import React from 'react';
import SignUp from '../components/SignUpForm';

import { motion } from 'framer-motion';
import pageVariants from '../utility/pageVariants';

const SignUpPage = () => {
    return (
        <motion.div
            variants={pageVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <SignUp />
        </motion.div>
    );
};

export default SignUpPage;
