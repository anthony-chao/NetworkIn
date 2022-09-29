import React from "react";
import { connect } from "react-redux";
import ReplyIndexItem from "./reply_index_item";
import { deleteComment } from "../../../actions/comment_actions";
import { addLike, deleteLike } from "../../../actions/like_actions";

const ReplyIndex = (props) => {

    const { replies, users, currentUser, timeSince, deleteComment, handleAddReply, likes, addLike, deleteLike } = props;

    return (
        <div>
            {replies.map((reply) => (
                <ReplyIndexItem 
                    key={reply.id} 
                    reply={reply} 
                    users={users} 
                    timeSince={timeSince} 
                    currentUser={currentUser} 
                    deleteComment={deleteComment} 
                    handleAddReply={handleAddReply}
                    likes={likes}
                    addLike={addLike}
                    deleteLike={deleteLike}
                />
            ))}
        </div>
    )

}

const mapStateToProps = (state, ownProps) => {
    const replies = Object.values(state.entities.comments)
    .filter((reply) => reply.parent_comment_id === ownProps.comment.id);

    return {
        replies: replies,
        users: state.entities.users,
        currentUser: state.session.user,
        likes: state.entities.likes
    }
};

const mapDispatchToProps = (dispatch) => ({
    deleteComment: (comment) => dispatch(deleteComment(comment)),
    addLike: (like) => dispatch(addLike(like)),
    deleteLike: (like) => dispatch(deleteLike(like))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReplyIndex);