import React, { useState } from "react";
import { connect } from "react-redux";
import ReplyIndexItem from "./reply_index_item";
import { deleteComment } from "../../../actions/comment_actions";

const ReplyIndex = (props) => {

    const { replies, users, currentUser, timeSince, deleteComment, handleAddReply, likes } = props;

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
    deleteComment: (comment) => dispatch(deleteComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReplyIndex);