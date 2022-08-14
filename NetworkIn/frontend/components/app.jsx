import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/signup_form_container'
import HomepageContainer from './homepage/homepage_container'
import SignupEmailContainer from './session/signup_email_container'
import SignupNameContainer from './session/signup_name_container'

const App = () => (
    <div>
        <h1>NetworkIn</h1>
        <HomepageContainer />

        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup/name" component={SignupNameContainer} />
        <Route path="/signup" component={SignupEmailContainer} />
    </div>
);

export default App;