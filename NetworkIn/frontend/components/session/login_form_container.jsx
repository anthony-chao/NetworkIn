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
            <div>
                <h1>Sign in</h1>
                <h2>Stay updated on your professional world</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Email
                        <input type="text" value={this.state.email} onChange={this.handleUpdate('email')} />
                    </label>
                    <br />
                    <label>Password
                        <input type="password" value={this.state.password} onChange={this.handleUpdate('password')} />
                    </label>
                    <br />
                    <button type="submit" className="login-button">Sign in</button>
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