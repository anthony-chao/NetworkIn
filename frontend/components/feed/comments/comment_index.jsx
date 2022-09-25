import React from "react";
import { connect } from "react-redux";
import CommentIndexItem from './comment_index_item';
import AddCommentContainer from "./add_comment_container";
import { deleteComment } from "../../../actions/comment_actions";

const CommentIndex = (props) => {

    const { comments, users, timeSince, currentUser, postId, deleteComment } = props;

    return (
        <div>
            <div>
                <AddCommentContainer postId={postId} />
            </div>
            {comments.map((comment) => (
                <CommentIndexItem key={comment.id} comment={comment} users={users} timeSince={timeSince} currentUser={currentUser} deleteComment={deleteComment}/>
            ))}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const rootComments = Object.values(state.entities.comments)
        .filter((comment) => comment.post_id === ownProps.postId && comment.parent_comment_id === null)
        .reverse();

    return {
        comments: rootComments,
        users: state.entities.users,
        currentUser: state.session.user
    }
};

const mapDispatchToProps = (dispatch) => ({
    deleteComment: (comment) => dispatch(deleteComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);