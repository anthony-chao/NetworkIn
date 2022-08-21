import { connect } from 'react-redux';
import { fetchUser } from '../../../actions/session_actions';
import ProfileAbout from './profile_about';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        viewedUserId: ownProps.viewedPageId,
        viewedUser: state.entities.viewedUser
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileAbout);