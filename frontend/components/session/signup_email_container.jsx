import React from 'react'
import { Link } from 'react-router-dom';

class EmailForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            emailError: false,
            passwordError: false
        }

        this.errorMessages = {
            emailErrorMessage: 'Please enter a valid email address.',
            passwordErrorMessage: 'Password must be 6 characters or more.'
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUpdate(field) {
        return (e) => this.setState({[field]: e.currentTarget.value})
    }

    handleErrors() {

        if (this.state.password.length < 6) {
            this.setState({passwordError: true});
        }
        else {
            this.setState({passwordError: false})
        }

        if (this.state.email.includes('@') && this.state.email.split('@')[1].includes('.')) {
            let emailParts = this.state.email.split('@')    
            if (emailParts.length !== 2 && emailParts[1].split('.').length !== 2) {
                this.setState({emailError: true});
            }
            else if (emailParts.length === 2 && emailParts[1].split('.').length === 2 && this.state.password.length >= 6) {
                this.props.history.push({pathname: '/signup/name', state: { email: this.state.email, password: this.state.password}});
            }
            else {
                this.setState({emailError: false})
            }
        }
        else {
            this.setState({emailError: true})
        }
        console.log(this.state)
        
    }

    //persist the state and redirect to the next phase of signup (adding name)

    handleSubmit(e) {
        e.preventDefault();

        // if (this.state.emailError === false && this.state.passwordError === false) { 
        //     this.props.history.push({pathname: '/signup/name', state: { email: this.state.email, password: this.state.password}});
        // }
        
        this.handleErrors();
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
                        { this.state.emailError ? <p>{this.errorMessages.emailErrorMessage}</p> : null }
                    <br />
                        <label className="signup-labels">Password (6 or more characters)</label>
                        <input className="signup-input-container" type="password" value={this.state.password} onChange={this.handleUpdate('password')} required />
                        { this.state.passwordError ? <p>{this.errorMessages.passwordErrorMessage}</p> : null }
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