import React, { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Slide } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import { SnackbarProvider } from 'notistack';

// Import Contexts
import { ResultContext } from './contexts/ResultContext';
import { CredentialsContext } from './contexts/CredentialsContext';
import { LoggedInContext } from './contexts/LoggedInContext';
import { ModalDataContext } from './contexts/ModalDataContext';

// Import Styling
import './App.css';
import useStyles from './styles/makeStyle';
import { baseTheme } from './styles/theme';

// Import Page Components
import Layout from './components/Layout';
import QuestionOne from './Pages/QuestionOne';
import QuestionTwo from './Pages/QuestionTwo';
import QuestionThree from './Pages/QuestionThree';
import QuestionFour from './Pages/QuestionFour';
import QuestionFive from './Pages/QuestionFive';
import Landing from './Pages/Landing';
import UserDetails from './Pages/UserDetails';
import TestQuestion from './Pages/TestQuestion';
import DashboardPage from './Pages/DashboardPage';
import SignUpPage from './Pages/SignUpPage';
import PasswordRequest from './Pages/PasswordRequest';

const App = () => {
    // Initialise location for routing purposes
    const location = useLocation();

    // Initialise classes
    const classes = useStyles();

    // Set initial state for contexts
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [object, setObject] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    const [modalData, setModalData] = useState({});

    return (
        <ThemeProvider theme={baseTheme}>
            <SnackbarProvider
                maxSnack={3}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                TransitionComponent={Slide}
                dense
            >
                <ModalDataContext.Provider value={{ modalData, setModalData }}>
                    <ResultContext.Provider value={{ object, setObject }}>
                        <CredentialsContext.Provider
                            value={{ credentials, setCredentials }}
                        >
                            <LoggedInContext.Provider
                                value={{ loggedIn, setLoggedIn }}
                            >
                                <CssBaseline
                                    classes
                                    className={classes.lightFont}
                                />
                                <Layout>
                                    <AnimatePresence
                                        location={location}
                                        key={location.key}
                                    >
                                        <Switch>
                                            <Route
                                                path='/'
                                                exact
                                                component={Landing}
                                            />
                                            <Route
                                                path='/q1'
                                                component={QuestionOne}
                                            />
                                            <Route
                                                path='/q2'
                                                component={QuestionTwo}
                                            />
                                            <Route
                                                path='/q3'
                                                component={QuestionThree}
                                            />
                                            <Route
                                                path='/q4'
                                                component={QuestionFour}
                                            />
                                            <Route
                                                path='/q5'
                                                component={QuestionFive}
                                            />
                                            <Route
                                                path='/test'
                                                component={TestQuestion}
                                            />
                                            <Route
                                                path='/userdetails'
                                                component={UserDetails}
                                            />
                                            <Route
                                                path='/dashboard'
                                                component={DashboardPage}
                                            />
                                            <Route
                                                path='/signup'
                                                component={SignUpPage}
                                            />
                                            <Route
                                                path='/forgotpassword'
                                                component={PasswordRequest}
                                            />
                                        </Switch>
                                    </AnimatePresence>
                                </Layout>
                            </LoggedInContext.Provider>
                        </CredentialsContext.Provider>
                    </ResultContext.Provider>
                </ModalDataContext.Provider>
            </SnackbarProvider>
        </ThemeProvider>
    );
};

export default App;
