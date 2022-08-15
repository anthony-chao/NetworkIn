import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from './login_form_container'

const LoginPage = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div>
        
      <main className="loginpage-body-area">
        <div className="homepage-built-in-login">
            <h1>Sign in</h1>
            <h2>Stay updated on your professional world</h2>
            < LoginFormContainer />
        </div>
        <p>New to NetworkIn? <Link to='/signup'>Join now</Link> </p>
      </main>
      
    </div>
  );
  
  const personalGreeting = () => (
    <hgroup className="header-group">
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default LoginPage;