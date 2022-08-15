import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/signup_form_container'
import HomepageContainer from './homepage/homepage_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <HomepageContainer />
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;