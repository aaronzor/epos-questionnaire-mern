import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@mui/material';

import QuestionOne from './Pages/QuestionOne';
import QuestionTwo from './Pages/QuestionTwo';
import QuestionThree from './Pages/QuestionThree';
import QuestionFour from './Pages/QuestionFour';
import QuestionFive from './Pages/QuestionFive';
import Layout from './components/Layout';

const App = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Container>
                        <Route path='/q1' component={QuestionOne} />
                        <Route path='/q2' component={QuestionTwo} />
                        <Route path='/q3' component={QuestionThree} />
                        <Route path='/q4' component={QuestionFour} />
                        <Route path='/q5' component={QuestionFive} />
                    </Container>
                </Switch>
            </Layout>
        </Router>
    );
};

export default App;
