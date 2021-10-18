import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@mui/material';

import QuestionOne from './Pages/QuestionOne';
import QuestionTwo from './Pages/QuestionTwo';

const App = () => {
    return (
        <Router>
            <Switch>
                <Container>
                    <Route path='/q1' component={QuestionOne} />
                    <Route path='/q2' component={QuestionTwo} />
                </Container>
            </Switch>
        </Router>
    );
};

export default App;
