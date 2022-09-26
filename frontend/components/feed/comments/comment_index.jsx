import React from "react";
import { connect } from "react-redux";
import CommentIndexItem from './comment_index_item';
import AddCommentContainer from "./add_comment_container";
import { deleteComment } from "../../../actions/comment_actions";

const CommentIndex = (props) => {

    const { comments, users, timeSince, currentUser, postId, deleteComment, likes } = props;

    const rootComments = comments
        .filter((comment) => comment.parent_comment_id === null);

    return (
        <div>
            <div>
                <AddCommentContainer postId={postId} />
            </div>
            {rootComments.map((comment) => (
                <CommentIndexItem 
                    key={comment.id} 
                    comments={comments}
                    comment={comment} 
                    users={users} 
                    timeSince={timeSince} 
                    currentUser={currentUser} 
                    deleteComment={deleteComment}
                    likes={likes}
                />
            ))}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const postComments = Object.values(state.entities.comments)
        .filter((comment) => comment.post_id === ownProps.postId)
        .reverse();

    return {
        comments: postComments,
        users: state.entities.users,
        currentUser: state.session.user,
        likes: state.entities.likes
    }
};

const mapDispatchToProps = (dispatch) => ({
    deleteComment: (comment) => dispatch(deleteComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);