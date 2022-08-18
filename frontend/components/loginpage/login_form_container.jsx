import React from 'react'
import { connect } from 'react-redux';
import { clearSessionErrors, login } from '../../actions/session_actions'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            emailEmptyError: '',
            passwordEmptyError: ''
        }
    
        this.errorMessages = {
            emailEmptyErrorMessage: 'Please enter an email address.',
            passwordEmptyErrorMessage: 'Please enter a password.'
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
    }

    componentDidMount() {
        this.props.clearSessionErrors();
    }

    handleUpdate(field) {
        return (e) => this.setState({[field]: e.currentTarget.value})
    }

    handleErrors() {
        if (this.state.email.length === 0) {
            this.setState({emailEmptyError: true});
        }
        else if (this.state.email.length !== 0) {
            this.setState({emailEmptyError: false})
        }

        if (this.state.password.length === 0) {
            this.setState({passwordEmptyError: true})
        }
        else if (this.state.password.length !== 0) {
            this.setState({passwordEmptyError: false})
        }

        if (this.state.email.length !== 0 && this.state.password.length !== 0) {
            const user = Object.assign({}, this.state);
            this.props.login(user);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.handleErrors();
    }

    handleDemoLogin(e) {
        e.preventDefault();
        const demo = {
            email: "anthony@gmail.com",
            password: "abc123"
          }
          const speed = 80;
      
         if (this.state.email !== demo.email) {
                  const inputemail = setInterval(() => {
                      if (this.state.email !== demo.email) {
                          const temp = demo.email.slice(0, this.state.email.length + 1);
                          this.setState({ email: temp })
                      } else {
                          clearInterval(inputemail);
                          animatePW();
                      }
                  }, speed)
              }
              const animatePW = () => {
                  if (this.state.password !== demo.password) {
                      const inputPassword = setInterval(() => {
                          if (this.state.password !== demo.password) {
                              const temp = demo.password.slice(0, this.state.password.length + 1);
                              this.setState({ password: temp });
                          } else {
                              clearInterval(inputPassword);
                              this.props.login(demo);
                          }
                      }, speed);
                  }
              }

        
    }

    render() {
        return (
            <div className='login-form-container'>
                {this.props.errors.responseJSON ? <p className="auth-login-error">Invalid Email/Password combination. Please try again.</p> : ''}
                <form onSubmit={this.handleSubmit}>
                    <div className="login-input">
                        <input className={`login-input-container ${this.state.emailEmptyError ? 'sign-up-error-input' : ''}`} type="text" value={this.state.email} onChange={this.handleUpdate('email')} />
                        <label className="login-labels">Email </label>
                    </div>
                    { this.state.emailEmptyError ? <p className="login-error-message">{this.errorMessages.emailEmptyErrorMessage}</p> : null }
                    <br />
                    <div className="login-input">
                        <input className={`login-input-container ${this.state.passwordEmptyError ? 'sign-up-error-input' : ''}`} type="password" value={this.state.password} onChange={this.handleUpdate('password')} />
                        <label className="login-labels">Password </label>
                    </div>
                    { this.state.passwordEmptyError ? <p className="login-error-message">{this.errorMessages.passwordEmptyErrorMessage}</p> : null }
                    <br />
                    <button type="submit" className="login-button">Sign in</button>
                    <br />
                    <span className="demo-login-divider">or</span>
                    <button type="submit" className="login-button demo-login-button" onClick={this.handleDemoLogin}>Demo Login</button>
                </form>
            </div>
        )
    }

}

const mapStateToprops = ({errors: {session}}) => ({
    errors: session
})

const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
})

export default connect(mapStateToprops, mapDispatchToProps)(LoginForm);