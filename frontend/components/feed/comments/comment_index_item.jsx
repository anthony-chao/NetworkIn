import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ReplyIndex from "./reply_index";
import UpdateCommentContainer from './update_comment_container';

const CommentIndexItem = (props) => {

    const { comment, users, timeSince, currentUser, deleteComment } = props;
    const history = useHistory();

    const toAuthorsProfile = () => {
        history.push(`/users/${comment.user_id}`);
    }

    const [dropdown, setDropdown] = useState(false);
    const [editing, setEditing] = useState(false);

    const handleDropdown = () => {
        dropdown ? setDropdown(false) : setDropdown(true);
    };

    const cancelEdit = () => {
        editing ? setEditing(false) : setEditing(true);
    };

    return (
        <div>
            <div className="single-comment">
                <div onClick={toAuthorsProfile}> <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" id="post-index-profile-image" style={{height: 40, width: 40, cursor: "pointer"}}/></div>
                <div className="single-comment-right">
                    <div className="single-comment-body">
                        <div className="single-comment-name-time">
                            <div onClick={toAuthorsProfile} id="single-comment-name">
                                <div>{users[comment.user_id].first_name.concat(" ", users[comment.user_id].last_name)}</div>
                                { (comment.user_id === currentUser.id) ? <p>Author</p> : null }
                            </div>
                            <div className="single-comment-post-date">
                                <div>{timeSince(comment.created_at)}</div>
                                { currentUser.id === comment.user_id ?
                                <span onClick={handleDropdown} onBlur={() => setDropdown(false)}>•••</span>
                                : null }
                                { (dropdown) ? 
                                    <div id="comment-dropdown">
                                        <div onClick={() => {setEditing(true), setDropdown(false)}}><img src="https://i.postimg.cc/Y9JpH6sk/image-removebg-preview.png" id="comment-edit-button"/>Edit</div>
                                        <div onClick={() => {deleteComment(comment), setDropdown(false)}}><img src="https://i.postimg.cc/tRh0B38K/image-removebg-preview.png" id="comment-edit-button"/>Delete</div>
                                    </div> 
                                : null}
                            </div>
                        </div>
                        <div id="single-comment-headline">{users[comment.user_id].headline}</div>
                        { (editing) ? 
                            <div>
                                <UpdateCommentContainer comment={comment} cancelEdit={cancelEdit} editing={editing} setEditing={setEditing}/>
                            </div>
                        : <div id="single-comment-body">{comment.body}</div> }
                    </div>
                    <div className="comment-likes-replies">
                        <div>Like</div>
                        |
                        <div>Reply</div>
                    </div>
                </div>
            </div>
            <ReplyIndex comment={comment} timeSince={timeSince}/>
        </div>
    )
}

export default CommentIndexItem;