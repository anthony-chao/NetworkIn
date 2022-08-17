import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from './login_form_container'

class LoginPage extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>
          <nav className="homepage-buttons">
            <Link to="/">NetworkIn</Link>
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