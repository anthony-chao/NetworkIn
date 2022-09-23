import React from "react";
import { useHistory } from "react-router-dom";
import ReplyIndex from "./reply_index";

const CommentIndexItem = (props) => {

    const { comment, users, timeSince, currentUser } = props;
    const history = useHistory();

    const toAuthorsProfile = () => {
        history.push(`/users/comment.user_id`);
    }

    return (
        <div>
            <div className="single-comment">
                <div onClick={toAuthorsProfile}> <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" id="post-index-profile-image" style={{height: 40, width: 40, cursor: "pointer"}}/></div>
                <div className="single-comment-body">
                    <div className="single-comment-name-time">
                        <div id="single-comment-name">
                            <div>{users[comment.user_id].first_name.concat(" ", users[comment.user_id].last_name)}</div>
                            { (comment.user_id === currentUser.id) ? <p>Author</p> : null }
                        </div>
                        <div className="single-comment-right-side">
                            <div>{timeSince(comment.created_at)}</div>
                            <div>•••</div>
                        </div>
                    </div>
                    <div id="single-comment-headline">{users[comment.user_id].headline}</div>
                    <div id="single-comment-body">{comment.body}</div>
                </div>
            </div>
            <ReplyIndex comment={comment} timeSince={timeSince} />
        </div>
    )
}

export default CommentIndexItem;