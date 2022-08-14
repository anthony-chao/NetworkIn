import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return (e) => this.setState({[field]: e.currentTarget.value})
    }

    renderErrors() {
        return(
          <ul>
            {Object.values(this.props.errors).map((error, index) => (
              <li key={`error-${index}`}>{error}</li>
            ))}
          </ul>
        );
      }
    
    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit}>
                    <h2>{this.props.formType}</h2>
                    {this.renderErrors()}
                    <div className='login-form'>
                        <label>Email
                            <input type="text" value={this.state.email} onChange={this.update('email')} />
                        </label>
                        <label>Password
                            <input type="password" value={this.state.password} onChange={this.update('password')}/>
                        </label>
                        <button className='login-signup-button' type="submit">{this.props.formType}</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default SessionForm;