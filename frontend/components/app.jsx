import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SignupFormContainer from './signup/signup_form_container'
import HomepageContainer from './homepage/homepage_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginPageContainer from './loginpage/loginpage_container'
import Feed from './feed/feed'
import Profile from './profile/profile'
import Modal from './modal/modal';

const App = () => {
    return (
        <div>
            < Modal />
            <Switch>
                <AuthRoute exact path="/login" component={LoginPageContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <ProtectedRoute exact path="/feed" component={Feed}/>
                <ProtectedRoute path="/users/:id" component={Profile}/>
                <AuthRoute exact path="/" component={HomepageContainer} />            
            </Switch>
        </div>
    );
};

export default App;




