import React from "react";


const CommentIndexItem = (props) => {

    const { comment, users, timeSince } = props;

    return (
        <div>
            <div>{users[comment.user_id].first_name.concat(" ", users[comment.user_id].last_name)}</div>
            <div>{timeSince(comment.created_at)}</div>
            <div>{users[comment.user_id].headline}</div>
            <div>{comment.body}</div>
        </div>
    )

}

export default CommentIndexItem;