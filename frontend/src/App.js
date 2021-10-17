import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@mui/material';

import QuestionOne from './Pages/QuestionOne';

const App = () => {
    return (
        <Router>
            <Switch>
                <Container maxWidth='md'>
                    <Route path='/q1' component={QuestionOne} />
                </Container>
            </Switch>
        </Router>
    );
};

export default App;
