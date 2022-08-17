import React from 'react';

class LocationForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: this.props.location.state.email,
            password: this.props.location.state.password,
            first_name: this.props.location.state.first_name,
            last_name: this.props.location.state.last_name,
            location_country: '',
            location_city: '',
            countryError: false,
            cityError: false
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
            this.props.history.push({pathname: '/signup/headline', state: 
                { email: this.state.email, password: this.state.password, 
                first_name: this.state.first_name, last_name: this.state.last_name,
                location_country: this.state.location_country, location_city: this.state.location_city
            }});    
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
                <h1 className="signup-form-header signup-form-location-header">Welcome, {this.state.first_name}! </h1>
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

export default LocationForm;