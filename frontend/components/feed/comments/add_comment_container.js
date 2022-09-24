import { connect } from "react-redux";
import CommentForm from "./comment_form";
import { addComment } from '../../../actions/comment_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.user,
        comment: {
            user_id: state.session.user.id,
            post_id: ownProps.postId,
            body: "",
        },
        formType: 'Add a comment...'
    }
};

const mapDispatchToProps = (dispatch) => ({
    commentFunction: (comment) => dispatch(addComment(comment)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);