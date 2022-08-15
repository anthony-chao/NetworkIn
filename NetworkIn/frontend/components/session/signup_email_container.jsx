import React from 'react'

class EmailForm extends React.Component {

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

    //persist the state and redirect to the next phase of signup (adding name)

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push({pathname: '/signup/name', state: { email: this.state.email, password: this.state.password}});
    }

    render() {
        return (
            <div className="signup-form-email-section">
                <h1 className="signup-form-email-header">Make the most of your professional life</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Email
                        <input type="text" value={this.state.email} onChange={this.handleUpdate('email')} />
                    </label>
                    <br />
                    <label>Password (6 or more characters)
                        <input type="password" value={this.state.password} onChange={this.handleUpdate('password')} />
                    </label>
                    <br />
                    <p>By clicking Agree & Join, you agree to the NetworkIn User Agreement, Privacy Policy, and Cookie Policy.</p>
                    <br />
                    <button type="submit" className="signup-buttons">Agree & Join</button>
                </form>
            </div>
        )
    }

}

export default EmailForm;