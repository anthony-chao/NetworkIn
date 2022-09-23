import React from "react";
import { connect } from "react-redux";
import CommentIndexItem from './comment_index_item';

const CommentIndex = (props) => {

    const { comments, users, timeSince, currentUser } = props;

    return (
        comments.map((comment) => (
            <CommentIndexItem key={comment.id} comment={comment} users={users} timeSince={timeSince} currentUser={currentUser}/>
        ))
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

});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);