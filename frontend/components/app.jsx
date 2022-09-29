import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SignupFormContainer from './signup/signup_form_container';
import HomepageContainer from './homepage/homepage_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginPageContainer from './loginpage/loginpage_container';
import Feed from './feed/feed';
import Profile from './profile/profile';
import Modal from './modal/modal';
import NetworkContainer from './network/network_index';
import ConnectedIndexContainer from './network/connected_index';

const App = () => {
    return (
        <div>
            < Modal />
            <Switch>
                <AuthRoute exact path="/login" component={LoginPageContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <ProtectedRoute path="/users/:id" component={Profile}/>
                <ProtectedRoute exact path="/mynetwork/connections" component={ConnectedIndexContainer}/>
                <ProtectedRoute exact path="/mynetwork" component={NetworkContainer}/>
                <ProtectedRoute path="/feed" component={Feed}/>
                <AuthRoute exact path="/" component={HomepageContainer} />            
            </Switch>
        </div>
    );
};

export default App;




