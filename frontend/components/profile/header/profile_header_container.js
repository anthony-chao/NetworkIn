import { connect } from 'react-redux';
import { fetchUser } from '../../../actions/session_actions';
import ProfileHeader from './profile_header';

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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeader);