import React from "react";
import { useHistory } from "react-router-dom";

const ReplyIndexItem = (props) => {

    const { reply, users, timeSince, currentUser } = props;
    const history = useHistory();

    const toAuthorsProfile = () => {
        history.push(`/users/reply.user_id`);
    }

    return (
        <div>
            <div className="single-comment single-reply">
                <div onClick={toAuthorsProfile}> <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" id="post-index-profile-image" style={{height: 40, width: 40, cursor: "pointer"}}/></div>
                <div className="single-comment-body">
                    <div className="single-comment-name-time">
                        <div id="single-comment-name">
                            <div>{users[reply.user_id].first_name.concat(" ", users[reply.user_id].last_name)}</div>
                            { (reply.user_id === currentUser.id) ? <p>Author</p> : null }
                        </div>
                        <div className="single-comment-right-side">
                            <div>{timeSince(reply.created_at)}</div>
                            <div>•••</div>
                        </div>
                    </div>
                    <div id="single-comment-headline">{users[reply.user_id].headline}</div>
                    <div id="single-comment-body">{reply.body}</div>
                </div>
            </div>
        </div>
    )
}

export default ReplyIndexItem;