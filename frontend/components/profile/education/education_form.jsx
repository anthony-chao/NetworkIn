import React from 'react';
import { Link } from 'react-router-dom';

class LoginPage extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>
          <nav className="homepage-buttons">
            <Link to="/"><img className="logo-image" src="https://i.postimg.cc/PJW6hmHb/Screen-Shot-2022-08-17-at-12-14-20-PM.jpg" alt="" /></Link>
          </nav>
          <main className="loginpage-body">
              <h1 className="loginpage-header">Sign in</h1>
              <h2 className="loginpage-subheader">Stay updated on your professional world</h2>
              < LoginFormContainer />
          </main>
          <p className="loginpage-signup-message">New to NetworkIn? <Link className="loginpage-signup-link" to='/signup'>Join now</Link> </p>
      </div>
    )
  }

}

export default LoginPage;