import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../session/login_form_container'

const Homepage = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div>
      <nav className="homepage-buttons">
        <Link to="/">NetworkIn</Link>
        <div className="homepage-signup-login-buttons">
          <Link className="homepage-signup-button" to="/signup">Join now</Link>
          <Link className="homepage-login-button" to="/login">Sign in</Link>
        </div>
      </nav>
      <main className="homepage-body-area">
        <div className="homepage-built-in-login">
          <h1 className="homepage-header">Welcome to your professional community</h1>
          < LoginFormContainer />
        </div>
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


export default Homepage;