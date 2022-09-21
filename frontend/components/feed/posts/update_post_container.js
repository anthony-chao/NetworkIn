import { connect } from "react-redux";
import PostForm from "./post_form";
import { updatePost } from '../../../actions/post_actions';
import { closeModal } from "../../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.user,
        post: state.entities.posts[ownProps.postId],
        formType: 'Edit Post'
    }
};

const mapDispatchToProps = (dispatch) => ({
    postFunction: (formData, postId) => dispatch(updatePost(formData, postId)),
    closeModal: () => dispatch(closeModal())
})

export default connect (mapStateToProps, mapDispatchToProps)(PostForm);