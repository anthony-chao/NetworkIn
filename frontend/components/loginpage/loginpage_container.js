import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import LoginPage from './loginpage';

const mapStateToProps = (state) => ({
    currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);