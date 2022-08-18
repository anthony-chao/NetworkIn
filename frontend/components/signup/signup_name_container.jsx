import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { receiveSignupName } from '../../actions/session_actions';

class NameForm extends React.Component {

    constructor(props) {
        super(props)
        if (props.session.first_name && props.session.last_name) {
            this.state = {
                first_name: props.session.first_name,
                last_name: props.session.last_name,
                firstNameError: false,
                lastNameError: false
            }
        }
        else {
            this.state = {
                first_name: "",
                last_name: "",
                firstNameError: false,
                lastNameError: false
            }
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
            // this.props.history.push({pathname: '/signup/location', state: 
            //     { email: this.state.email, password: this.state.password, 
            //     first_name: this.state.first_name, last_name: this.state.last_name}});
            this.props.receiveSignupName({first_name: this.state.first_name, last_name: this.state.last_name});
            this.props.history.push('/signup/location')
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
                    <Link to="/"><img className="logo-image" src="https://i.postimg.cc/X7v2tBh5/imageedit-6-5931706153-removebg-preview.png" alt="" /></Link>
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

const mapStateToProps = (state) => ({
    session: state.session
})

const mapDispatchToProps = (dispatch) => ({
    receiveSignupName: (data) => dispatch(receiveSignupName(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(NameForm);