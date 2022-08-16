import React from 'react'
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    handleUpdate(field) {
        return (e) => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user);
    }

    handleDemoLogin(e) {
        e.preventDefault();
        this.props.login({
            email: 'anthony@gmail.com',
            password: 'abc123'
        })
    }

    render() {
        return (
            <div className='login-form-container'>

                <form onSubmit={this.handleSubmit}>
                    <div className="login-input">
                        <input className="login-input-container" type="text" value={this.state.email} onChange={this.handleUpdate('email')} />
                        <label className="login-labels">Email </label>
                    </div>
                    <br />
                    <div className="login-input">
                        <input className="login-input-container" type="password" value={this.state.password} onChange={this.handleUpdate('password')} />
                        <label className="login-labels">Password </label>
                    </div>
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

// export default LoginForm;

const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(login(user))
})

export default connect(null, mapDispatchToProps)(LoginForm);