import React from 'react';
import { Link } from 'react-router-dom';

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
      <h1 class="homepage-header">Welcome to your professional community</h1>
      <img src="./app/assets/images/homepage-photo.png" alt="" />
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