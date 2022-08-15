import React from 'react'
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions'
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUpdate(field) {
        return (e) => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user);
    }

    render() {
        return (
            <div className='login-form-container'>
                <h1>Sign in</h1>
                <h2>Stay updated on your professional world</h2>
                <form onSubmit={this.handleSubmit}>
                    <div class="login-input">
                        <input className="login-input-container" type="text" value={this.state.email} onChange={this.handleUpdate('email')} />
                        <label className="login-labels">Email </label>
                    </div>
                    <br />
                    <div class="login-input">
                        <input className="login-input-container" type="password" value={this.state.password} onChange={this.handleUpdate('password')} />
                        <label className="login-labels">Password </label>
                    </div>
                    <br />
                    <button type="submit" className="login-button">Sign in</button>
                </form>
                <p>New to NetworkIn? <Link to='/signup'>Join now</Link> </p>
            </div>
        )
    }

}

// export default LoginForm;

const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(login(user))
})

export default connect(null, mapDispatchToProps)(LoginForm);