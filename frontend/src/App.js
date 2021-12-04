import React, { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Slide } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import { SnackbarProvider } from 'notistack';

import { ResultContext } from './contexts/ResultContext';
import { CredentialsContext } from './contexts/CredentialsContext';
import { LoggedInContext } from './contexts/LoggedInContext';

import './App.css';
import useStyles from './styles/makeStyle';

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

const darkMode = createTheme({
    components: {
        MuiLinearProgress: {
            styleOverrides: {
                bar: {
                    backgroundColor: '#c98ced'
                },
                root: {
                    backgroundColor: '#ECECEC',
                    height: '0.4rem'
                }
            }
        }
    },
    palette: {
        background: {
            default: `#ECECEC`,
            paper: '#ffffff'
        },
        primary: {
            main: '#424242',
            light: '#6d6d6d',
            dark: '#1b1b1b'
        },
        secondary: {
            main: '#4a148c',
            light: '#7c43bd',
            dark: '#12005e'
        },
        text: {
            primary: '#000000',
            secondary: '#000000'
        }
    }
});

const App = () => {
    const location = useLocation();

    const classes = useStyles();

    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [object, setObject] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
            }}
            TransitionComponent={Slide}
            dense
        >
            <ResultContext.Provider value={{ object, setObject }}>
                <CredentialsContext.Provider
                    value={{ credentials, setCredentials }}
                >
                    <LoggedInContext.Provider value={{ loggedIn, setLoggedIn }}>
                        <ThemeProvider theme={darkMode}>
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
                        </ThemeProvider>
                    </LoggedInContext.Provider>
                </CredentialsContext.Provider>
            </ResultContext.Provider>
        </SnackbarProvider>
    );
};

export default App;
