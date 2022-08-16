import React from 'react';

class NameForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: this.props.location.state.email,
            password: this.props.location.state.password,
            first_name: '',
            last_name: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUpdate(field) {
        return (e) => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push({pathname: '/signup/location', state: 
        { email: this.state.email, password: this.state.password, 
            first_name: this.state.first_name, last_name: this.state.last_name}});
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
                    <input className="signup-input-container" type="text" value={this.state.first_name} onChange={this.handleUpdate('first_name')} />
                    <br />
                    <label className="signup-labels">Last name</label>
                    <input className="signup-input-container" type="text" value={this.state.last_name} onChange={this.handleUpdate('last_name')} />
                    <br />
                    <button type="submit" className="signup-buttons">Continue</button>
                </form>
            </div>
        )
    }

}

export default NameForm;