import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToprops = (state) => ({
    errors: state.errors.session,
    formType: 'Sign Up'
})

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(signup(user))
})

export default connect(mapStateToprops, mapDispatchToProps)(SessionForm)