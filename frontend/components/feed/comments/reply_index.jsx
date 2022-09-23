import React from "react";
import { connect } from "react-redux";
import ReplyIndexItem from "./reply_index_item";

const ReplyIndex = (props) => {

    const { replies, users, currentUser, timeSince } = props;

    return (
        replies.map((reply) => (
            <ReplyIndexItem key={reply.id} reply={reply} users={users} timeSince={timeSince} currentUser={currentUser}/>
        ))
    )

}

const mapStateToProps = (state, ownProps) => {
    const replies = Object.values(state.entities.comments)
    .filter((reply) => reply.parent_comment_id === ownProps.comment.id)
    .reverse();

    return {
        replies: replies,
        users: state.entities.users,
        currentUser: state.session.user
    }
};

const mapDispatchToProps = (dispatch) => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(ReplyIndex);