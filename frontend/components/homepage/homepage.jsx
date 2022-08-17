import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../loginpage/login_form_container'

class Homepage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <nav className="homepage-buttons">
          <Link to="/"><img className="logo-image" src="https://i.postimg.cc/PJW6hmHb/Screen-Shot-2022-08-17-at-12-14-20-PM.jpg" alt="" /></Link>
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
          <img className='homepage-logo' src="https://static-exp1.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4" alt="homepage-logo" />
        </main>
    </div>
    )
  }


}

export default Homepage;