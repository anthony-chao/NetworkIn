import { connect } from "react-redux";
import PostForm from "./post_form";
import { updatePost } from '../../../actions/post_actions';
import { closeModal } from "../../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        post: state.entities.posts[ownProps.postId],
        formType: 'Edit Post'
    }
};

const mapDispatchToProps = (dispatch) => ({
    postFunction: (post) => dispatch(updatePost(post)),
    closeModal: () => dispatch(closeModal())
})

export default connect (mapStateToProps, mapDispatchToProps)(PostForm);