import React from 'react';
import { AuthRoute } from '../../util/route_util';
import SignupEmailContainer from './signup_email_container';
import SignupNameContainer from './signup_name_container';
import SignupLocationContainer from './signup_location_container';
import SignupHeadlineContainer from './signup_headline_container';

const SignupForms = () => {
    return(
        <div className="signup-form-container">
            <AuthRoute exact path='/signup/headline' component={SignupHeadlineContainer}/>
            <AuthRoute exact path='/signup/location' component={SignupLocationContainer}/>
            <AuthRoute exact path='/signup/name' component={SignupNameContainer}/>
            <AuthRoute exact path='/signup' component={SignupEmailContainer}/>
        </div>
    )
}

export default SignupForms;