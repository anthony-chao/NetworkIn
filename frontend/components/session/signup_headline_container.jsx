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
            headline: '',
            jobError: '',
            companyError: ''
        }

        this.errorMessages = {
            jobErrorMessage: 'Please enter your most recent job title.',
            companyErrorMessage: 'Please enter the name of your most recent company.'
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
    }

    handleUpdate(field) {
        return (e) => this.setState({[field]: e.currentTarget.value})
    }

    handleErrors() {

        if (this.state.recent_job.length === 0) {
            this.setState({jobError: true});
        }
        else if (this.state.recent_job.length !== 0) {
            this.setState({jobError: false})
        }

        if (this.state.recent_company.length === 0) {
            this.setState({companyError: true})
        }
        else if (this.state.recent_company.length !== 0 && this.state.recent_job.length === 0) {
            this.setState({companyError: false})
        }
        else if (this.state.recent_job.length !== 0 && this.state.recent_company.length !== 0) {
            this.setState({'headline': this.state.recent_job.concat(' at ', this.state.recent_company)}, () => {
                const user = this.state;
                this.props.signup(user)
                this.props.login(user);
            })
        }        
    }

    handleSubmit(e) {
        e.preventDefault();
        this.handleErrors();
    }

    render() {
        return (
            <div className="signup-form-pages signup-form-headline-section">
                <nav className="homepage-buttons">
                    <Link to="/"><img className="logo-image" src="https://i.postimg.cc/X7v2tBh5/imageedit-6-5931706153-removebg-preview.png" alt="" /></Link>
                </nav>
                <h1 className="signup-form-header signup-form-headline-header">Your profile helps you discover new people and opportunities</h1>
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <label className="signup-labels">Most recent job title</label>
                    <input className={`signup-input-container ${this.state.jobError ? 'sign-up-error-input' : ''}`} type="text" value={this.state.recent_job} onChange={this.handleUpdate('recent_job')} />
                    { this.state.jobError ? <p className="sign-up-error-message">{this.errorMessages.jobErrorMessage}</p> : null }
                    <br />
                    <label className="signup-labels">Most recent company</label>
                    <input className={`signup-input-container ${this.state.companyError ? 'sign-up-error-input' : ''}`} type="text" value={this.state.recent_company} onChange={this.handleUpdate('recent_company')} />
                    { this.state.companyError ? <p className="sign-up-error-message">{this.errorMessages.companyErrorMessage}</p> : null }
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