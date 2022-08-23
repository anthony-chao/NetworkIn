import { connect } from 'react-redux';
import { fetchUser } from '../../../actions/session_actions';
import ProfileHeader from './profile_header';
import { openModal, closeModal } from '../../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        viewedUserId: ownProps.viewedPageId,
        viewedUser: state.entities.viewedUser
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    openModal: (type) => dispatch(openModal(type)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeader);