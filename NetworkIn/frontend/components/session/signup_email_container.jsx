import React from 'react'
import { connect } from "react-redux"
import { signup, login } from "../../actions/session_actions"
import { receiveSignupEmail } from "../../actions/session_actions"

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
        console.log(this.state)
        this.props.history.push('/signup/name');
    }

    render() {
        return (
            <div className="signup-form-email-section">
                <h1 className="">Make the most of your professional life</h1>
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

// const mapStateToProps = (state) => ({
//     user: state.user
// });

// const mapDispatchToProps = (dispatch) => ({
//     signup: (user) => dispatch(signup(user)),
//     login: (user) => dispatch(login(user)),
//     receiveSignupEmail: (email) => dispatch(receiveSignupEmail(email))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(EmailForm)

export default EmailForm;