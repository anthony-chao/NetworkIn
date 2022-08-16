import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container'
import HomepageContainer from './homepage/homepage_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginPageContainer from './loginpage/loginpage_container'

const App = () => {
    return (
            <Switch>
                <AuthRoute exact path="/" component={HomepageContainer} />
                <AuthRoute exact path="/login" component={LoginPageContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
            </Switch>
    );
};

export default App;