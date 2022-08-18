import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SignupFormContainer from './signup/signup_form_container'
import HomepageContainer from './homepage/homepage_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginPageContainer from './loginpage/loginpage_container'
import FeedContainer from './feed/feed_container'

const App = () => {
    return (
        <Switch>
            <AuthRoute exact path="/login" component={LoginPageContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/feed" component={FeedContainer}/>
            <AuthRoute exact path="/" component={HomepageContainer} />            
        </Switch>
    );
};

export default App;




