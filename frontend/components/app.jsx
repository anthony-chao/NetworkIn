import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import LoginFormContainer from './loginpage/login_form_container'
import SignupFormContainer from './session/signup_form_container'
import HomepageContainer from './homepage/homepage_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginPageContainer from './loginpage/login_form_container'

const App = () => (
    <div>
        {/* < HomepageContainer /> */}
        <Switch>
            <AuthRoute exact path="/" component={HomepageContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;