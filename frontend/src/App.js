import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import { CredentialsContext } from './contexts/CredentialsContext';
import { ResultContext } from './contexts/ResultContext';
import { LoggedInContext } from './contexts/LoggedInContext';
import { resultObject } from './utility/resultObject';
import './App.css';
import useStyles from './styles/makeStyle';

import QuestionOne from './Pages/QuestionOne';
import QuestionTwo from './Pages/QuestionTwo';
import QuestionThree from './Pages/QuestionThree';
import QuestionFour from './Pages/QuestionFour';
import QuestionFive from './Pages/QuestionFive';
import Layout from './components/Layout';
import Landing from './Pages/Landing';
import UserDetails from './Pages/UserDetails';
import EndPage from './Pages/EndPage';
import TestQuestion from './Pages/TestQuestion';
import SignIn from './Pages/SignIn';

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
    const classes = useStyles();

    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [object, setObject] = useState(resultObject);
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <ResultContext.Provider value={{ object, setObject }}>
            <CredentialsContext.Provider
                value={{ credentials, setCredentials }}
            >
                <LoggedInContext.Provider value={{ loggedIn, setLoggedIn }}>
                    <ThemeProvider theme={darkMode}>
                        <CssBaseline classes className={classes.lightFont} />
                        <Router>
                            <Layout>
                                <Switch>
                                    <Route path='/' exact component={Landing} />
                                    <Route path='/q1' component={QuestionOne} />
                                    <Route path='/q2' component={QuestionTwo} />
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
                                        path='/endpage'
                                        component={EndPage}
                                    />
                                    <Route path='/login' component={SignIn} />
                                </Switch>
                            </Layout>
                        </Router>
                    </ThemeProvider>
                </LoggedInContext.Provider>
            </CredentialsContext.Provider>
        </ResultContext.Provider>
    );
};

export default App;
