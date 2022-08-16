import React from 'react'
import { Link } from 'react-router-dom';

class EmailForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            emailErrors: true,
            passwordErrors: true
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUpdate(field) {
        return (e) => this.setState({[field]: e.currentTarget.value})
    }

    //persist the state and redirect to the next phase of signup (adding name)

    handleSubmit(e) {
        e.preventDefault();
        this.handleEmailErrors();
        this.handlePasswordErrors();

        if (this.state.emailErrors === false && this.state.passwordErrors === false) { 
            this.props.history.push({pathname: '/signup/name', state: { email: this.state.email, password: this.state.password}});
        }
    }

    handleEmailErrors() {
        const emailParts = this.state.email.split('@')
        if (emailParts.length === 2 && emailParts[0].length > 2 && emailParts[1].length > 2) {
            this.setState({'emailErrors': false})
        }
    }

    handlePasswordErrors() {
        if (this.state.password.length >= 6) {
            this.setState({'passwordErrors': false})
        }
    }

    render() {
        return (
            <div className="signup-form-pages signup-form-email-section">
                <nav className="homepage-buttons">
                    <Link to="/">NetworkIn</Link>
                </nav>
                <h1 className="signup-form-header">Make the most of your professional life</h1>
                <form className="signup-form" onSubmit={this.handleSubmit}>
                        <label className="signup-labels">Email</label>
                        <input className="signup-input-container" type="text" value={this.state.email} onChange={this.handleUpdate('email')} required />
                    <br />
                        <label className="signup-labels">Password (6 or more characters)</label>
                        <input className="signup-input-container" type="password" value={this.state.password} onChange={this.handleUpdate('password')} required />
                    <br />
                    <p className="signup-disclaimer">By clicking Agree & Join, you agree to the NetworkIn User Agreement, Privacy Policy, and Cookie Policy.</p>
                    <br />
                    <button type="submit" className="signup-buttons">Agree & Join</button>
                </form>
                <p className="signuppage-login-message">Already on NetworkIn? <Link className="signuppage-login-link" to='/login'>Sign in</Link> </p>
            </div>
        )
    }

}

export default EmailForm;