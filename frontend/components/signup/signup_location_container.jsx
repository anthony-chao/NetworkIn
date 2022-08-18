import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { receiveSignupLocation } from '../../actions/session_actions';

class LocationForm extends React.Component {

    constructor(props) {
        super(props)

        if (props.session.location_country && props.session.location_city) {
            this.state = {
                location_country: props.session.location_country,
                location_city: props.session.location_city,
                firstNameError: false,
                lastNameError: false
            }
        }
        else {
            this.state = {
                location_country: "",
                location_city: "",
                firstNameError: false,
                lastNameError: false
            }
        }

        this.errorMessages = {
            countryErrorMessage: 'Please enter a country or region.',
            cityErrorMessage: 'Please enter a city or district.'
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
    }

    handleUpdate(field) {
        return (e) => this.setState({[field]: e.currentTarget.value})
    }

    handleErrors() {

        if (this.state.location_country.length === 0) {
            this.setState({countryError: true});
        }
        else if (this.state.location_country.length !== 0) {
            this.setState({countryError: false})
        }

        if (this.state.location_city.length === 0) {
            this.setState({cityError: true})
        }
        else if (this.state.location_city.length !== 0 && this.state.location_country.length === 0) {
            this.setState({cityError: false})
        }
        else if (this.state.location_country.length !== 0 && this.state.location_city.length !== 0) {
            this.props.receiveSignupLocation({location_country: this.state.location_country, location_city: this.state.location_city});
            this.props.history.push('/signup/headline')
        }
        
    }

    handleSubmit(e) {
        e.preventDefault();
        this.handleErrors();
    }

    render() {
        return (
            <div className="signup-form-pages signup-form-location-section">
                <nav className="homepage-buttons">
                    <Link to="/"><img className="logo-image" src="https://i.postimg.cc/X7v2tBh5/imageedit-6-5931706153-removebg-preview.png" alt="" /></Link>
                </nav>
                {console.log(this.props)}
                {console.log(this.state)}
                <h1 className="signup-form-header signup-form-location-header">Welcome, {this.props.session.first_name}! </h1>
                <h2 className="signup-form-location-subheader">Let's start your profile, connect to people you know, and engage with them on topics you care about.</h2>
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <label className="signup-labels">Country/Region </label >
                    <input className={`signup-input-container ${this.state.countryError ? 'sign-up-error-input' : ''}`} type="text" value={this.state.location_country} onChange={this.handleUpdate('location_country')} />        
                    { this.state.countryError ? <p className="sign-up-error-message">{this.errorMessages.countryErrorMessage}</p> : null }
                    <br />
                    <label className="signup-labels">City/District</label>
                    <input className={`signup-input-container ${this.state.cityError ? 'sign-up-error-input' : ''}`} type="text" value={this.state.location_city} onChange={this.handleUpdate('location_city')} />
                    { this.state.cityError ? <p className="sign-up-error-message">{this.errorMessages.cityErrorMessage}</p> : null }
                    <br />
                    <button type="submit" className="signup-buttons">Next</button>
                </form>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    session: state.session
})

const mapDispatchToProps = (dispatch) => ({
    receiveSignupLocation: (data) => dispatch(receiveSignupLocation(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(LocationForm);