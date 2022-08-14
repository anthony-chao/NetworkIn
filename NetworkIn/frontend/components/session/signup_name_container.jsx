import React from 'react';

class NameForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
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
        console.log(this.state)
        this.props.history.push('/signup/headline');
    }

    render() {
        return (
            <div className="signup-form-name-section">
                <h1 className="">Make the most of your professional life</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>First name
                        <input type="text" value={this.state.first_name} onChange={this.handleUpdate('first_name')} />
                    </label>
                    <br />
                    <label>Last name
                        <input type="text" value={this.state.last_name} onChange={this.handleUpdate('last_name')} />
                    </label>
                    <br />
                    <button type="submit" className="signup-buttons">Continue</button>
                </form>
            </div>
        )
    }

}

export default NameForm;