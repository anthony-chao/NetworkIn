import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from './login_form_container'

const LoginPage = ({ currentUser, logout }) => {
  debugger;
  const sessionLinks = () => (
    <div>
      <nav className="homepage-buttons">
        <Link to="/">NetworkIn</Link>
      </nav>
      <main className="loginpage-body">
          <h1 className="loginpage-header">Sign in</h1>
          <h2 className="loginpage-subheader">Stay updated on your professional world</h2>
          < LoginFormContainer />
      </main>
      <p>New to NetworkIn? <Link to='/signup'>Join now</Link> </p>
      
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