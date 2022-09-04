import React from 'react'
import { Link } from 'react-router-dom';
import { receiveEmailandPassword } from '../../actions/session_actions';
import { connect } from 'react-redux';

class EmailForm extends React.Component {

    constructor(props) {
        super(props)

        if (props.session.email && props.session.password) {
            this.state = {
                email: props.session.email,
                password: props.session.password,
                emailError: false,
                passwordError: false
            }
        }
        else {
            this.state = {
                email: "",
                password: "",
                emailError: false,
                passwordError: false
            }
        }

        this.errorMessages = {
            emailErrorMessage: 'Please enter a valid email address.',
            passwordErrorMessage: 'Password must be 6 characters or more.'
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
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
                this.props.receiveEmailandPassword({email: this.state.email, password: this.state.password});
                this.props.history.push('/signup/name');
            }
            else {
                this.setState({emailError: false})
            }
        }
        else {
            this.setState({emailError: true})
        }
        
    }

    handleSubmit(e) {
        e.preventDefault();
        this.handleErrors();
    }

    render() {
        return (
            <div className="signup-form-pages signup-form-email-section">
                <nav className="homepage-buttons">
                    <Link to="/"><img className="logo-image" src="https://i.postimg.cc/X7v2tBh5/imageedit-6-5931706153-removebg-preview.png" alt=""/></Link>
                </nav>
                <h1 className="signup-form-header">Make the most of your professional life</h1>
                <form className="signup-form" onSubmit={this.handleSubmit}>
                        <label className="signup-labels">Email</label>
                        <input className={`signup-input-container ${this.state.emailError ? 'sign-up-error-input' : ''}`} type="text" value={this.state.email} onChange={this.handleUpdate('email')} />
                        { this.state.emailError ? <p className="sign-up-error-message">{this.errorMessages.emailErrorMessage}</p> : null }
                    <br />
                        <label className="signup-labels">Password (6 or more characters)</label>
                        <input className={`signup-input-container ${this.state.passwordError ? 'sign-up-error-input' : ''}`} type="password" value={this.state.password} onChange={this.handleUpdate('password')} />
                        { this.state.passwordError ? <p className="sign-up-error-message">{this.errorMessages.passwordErrorMessage}</p> : null }
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


const mapStateToProps = (state) => ({
    session: state.session
})

const mapDispatchToProps = (dispatch) => ({
    receiveEmailandPassword: (data) => dispatch(receiveEmailandPassword(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EmailForm);