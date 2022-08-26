import { connect } from "react-redux";
import PostForm from "./post_form";
import { addPost } from '../../../actions/post_actions'
import { closeModal } from '../../../actions/modal_actions';

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        post: {
            user_id: state.entities.users[state.session.id].id,
            body: ""
        },
        formType: 'Create a post'
    }
};

const mapDispatchToProps = (dispatch) => ({
    postFunction: (post) => dispatch(addPost(post)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);