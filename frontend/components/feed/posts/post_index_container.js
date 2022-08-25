import { connect } from 'react-redux';
import { fetchPosts } from '../../../actions/post_actions';
import PostIndex from './post_index';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { fetchUser } from '../../../actions/session_actions';

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        posts: state.entities.posts
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchPosts: () => dispatch(fetchPosts()),
    closeModal: () => dispatch(closeModal()),
    openModal: (type, id) => dispatch(openModal(type, id)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex)