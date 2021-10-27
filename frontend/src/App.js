import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import QuestionOne from './Pages/QuestionOne';
import QuestionTwo from './Pages/QuestionTwo';
import QuestionThree from './Pages/QuestionThree';
import QuestionFour from './Pages/QuestionFour';
import QuestionFive from './Pages/QuestionFive';
import Layout from './components/Layout';
import Landing from './Pages/Landing';

const darkMode = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#fe234a'
        }
    }
});

const App = () => {
    return (
        <ThemeProvider theme={darkMode}>
            <Router>
                <Layout>
                    <Switch>
                        <Route path='/' exact component={Landing} />
                        <Route path='/q1' component={QuestionOne} />
                        <Route path='/q2' component={QuestionTwo} />
                        <Route path='/q3' component={QuestionThree} />
                        <Route path='/q4' component={QuestionFour} />
                        <Route path='/q5' component={QuestionFive} />
                    </Switch>
                </Layout>
            </Router>
        </ThemeProvider>
    );
};

export default App;
