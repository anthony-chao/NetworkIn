import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../../../actions/post_actions';
import PostIndex from './post_index';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { fetchUser } from '../../../actions/session_actions';

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        posts: state.entities.posts,
        users: state.entities.users
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchPosts: () => dispatch(fetchPosts()),
    closeModal: () => dispatch(closeModal()),
    openModal: (type, id) => dispatch(openModal(type, id)),
    deletePost: (post) => dispatch(deletePost(post))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex)