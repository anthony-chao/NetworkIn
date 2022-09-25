import { connect } from "react-redux";
import CommentForm from "./comment_form";
import { updateComment } from '../../../actions/comment_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.user,
        comment: ownProps.comment,
        formType: 'Update comment'
    }
};

const mapDispatchToProps = (dispatch) => ({
    commentFunction: (comment) => dispatch(updateComment(comment)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);