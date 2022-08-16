import React from 'react';
import { signup, login } from '../../actions/session_actions';
import { connect } from 'react-redux'

class HeadlineForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: this.props.location.state.email,
            password: this.props.location.state.password,
            first_name: this.props.location.state.first_name,
            last_name: this.props.location.state.last_name,
            location_country: this.props.location.state.location_country,
            location_city: this.props.location.state.location_city,
            recent_job: '',
            recent_company: '',
            headline: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUpdate(field) {
        return (e) => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({'headline': this.state.recent_job.concat(' at ', this.state.recent_company)}, () => {
            const user = this.state;
            this.props.signup(user)
            this.props.login(user);
        })
    }

    render() {
        return (
            <div className="signup-form-headline-section">
                <nav className="homepage-buttons">
                    <h1>NetworkIn</h1>
                </nav>
                <h1 className="signup-form-header">Your profile helps you discover new people and opportunities</h1>
                <form className="signup-form"onSubmit={this.handleSubmit}>
                    <label>Most recent job title
                        <input type="text" value={this.state.recent_job} onChange={this.handleUpdate('recent_job')} />
                    </label>
                    <br />
                    <label>Most recent company
                        <input type="text" value={this.state.recent_company} onChange={this.handleUpdate('recent_company')} />
                    </label>
                    <br />
                    <button type="submit" className="signup-buttons">Continue</button>
                </form>
            </div>
        )
    }

}

// export default HeadlineForm;


const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user))
})

export default connect(null, mapDispatchToProps)(HeadlineForm);