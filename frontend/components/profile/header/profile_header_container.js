import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../../actions/profile_actions';
import ProfileHeader from './profile_header';
import { openModal, closeModal } from '../../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.user,
        viewedUserId: ownProps.viewedPageId,
        viewedUser: state.entities.viewedUser
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    openModal: (type) => dispatch(openModal(type)),
    closeModal: () => dispatch(closeModal()),
    updateUser: (user) => dispatch(updateUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeader);