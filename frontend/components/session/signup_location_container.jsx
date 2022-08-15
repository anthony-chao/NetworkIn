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
            location_city: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUpdate(field) {
        return (e) => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push({pathname: '/signup/headline', state: 
        { email: this.state.email, password: this.state.password, 
            first_name: this.state.first_name, last_name: this.state.last_name,
            location_country: this.state.location_country, location_city: this.state.location_city
        }});    
    }

    render() {
        return (
            <div className="signup-form-location-section">
                <h1 className="signup-form-location-header">Welcome, {this.state.first_name}! </h1>
                <h2 className="signup-form-location-subheader">Let's start your profile, connect to people you know, and engage with them on topics you care about.</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Country
                        <input type="text" value={this.state.location_country} onChange={this.handleUpdate('location_country')} />
                    </label>
                    <br />
                    <label>City
                        <input type="text" value={this.state.location_city} onChange={this.handleUpdate('location_city')} />
                    </label>
                    <br />
                    <button type="submit" className="signup-buttons">Next</button>
                </form>
            </div>
        )
    }

}

export default LocationForm;