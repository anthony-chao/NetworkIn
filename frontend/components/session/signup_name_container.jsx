import React from 'react';

class NameForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: this.props.location.state.email,
            password: this.props.location.state.password,
            first_name: '',
            last_name: '',
            firstNameError: false,
            lastNameError: false,
        }

        this.errorMessages = {
            firstNameErrorMessage: 'Please enter your first name.',
            lastNameErrorMessage: 'Please enter your last name.'
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
    }

    handleUpdate(field) {
        return (e) => this.setState({[field]: e.currentTarget.value})
    }

    handleErrors() {

        if (this.state.first_name.length === 0) {
            this.setState({firstNameError: true});
        }
        else if (this.state.first_name.length !== 0) {
            this.setState({firstNameError: false})
        }

        if (this.state.last_name.length === 0) {
            this.setState({lastNameError: true})
        }
        else if (this.state.last_name.length !== 0 && this.state.first_name.length === 0) {
            this.setState({lastNameError: false})
        }
        else if (this.state.first_name.length !== 0 && this.state.last_name.length !== 0) {
            this.props.history.push({pathname: '/signup/location', state: 
                { email: this.state.email, password: this.state.password, 
                first_name: this.state.first_name, last_name: this.state.last_name}});
        }
        
    }

    handleSubmit(e) {
        e.preventDefault();
        this.handleErrors();
    }
 
    render() {
        return (
            <div className="signup-form-pages signup-form-name-section">
                <nav className="homepage-buttons">
                    <h1>NetworkIn</h1>
                </nav>
                <h1 className="signup-form-header">Make the most of your professional life</h1>
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <label className="signup-labels">First name</label>
                    <input className={`signup-input-container ${this.state.firstNameError ? 'sign-up-error-input' : ''}`} type="text" value={this.state.first_name} onChange={this.handleUpdate('first_name')} />
                    { this.state.firstNameError ? <p className="sign-up-error-message">{this.errorMessages.firstNameErrorMessage}</p> : null }
                    <br />
                    <label className="signup-labels">Last name</label>
                    <input className={`signup-input-container ${this.state.lastNameError ? 'sign-up-error-input' : ''}`} type="text" value={this.state.last_name} onChange={this.handleUpdate('last_name')} />
                    { this.state.lastNameError ? <p className="sign-up-error-message">{this.errorMessages.lastNameErrorMessage}</p> : null }
                    <br />
                    <button type="submit" className="signup-buttons">Continue</button>
                </form>
            </div>
        )
    }

}

export default NameForm;