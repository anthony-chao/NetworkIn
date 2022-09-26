import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import UpdateCommentContainer from './update_comment_container';

const ReplyIndexItem = (props) => {

    const { reply, users, timeSince, currentUser, deleteComment, handleAddReply, likes } = props;
    const history = useHistory();

    const [dropdown, setDropdown] = useState(false);
    const [editing, setEditing] = useState(false);

    const handleDropdown = () => {
        dropdown ? setDropdown(false) : setDropdown(true);
    };

    const cancelEdit = () => {
        editing ? setEditing(false) : setEditing(true);
    };

    const toAuthorsProfile = () => {
        history.push(`/users/${reply.user_id}`);
    }

    const likesCount = Object.values(likes)
        .filter((like) => like.likeable_type === "Comment" && like.likeable_id === reply.id)
        .length

    return (
        <div>
            <div className="single-comment single-reply">
                <div onClick={toAuthorsProfile}> <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" id="post-index-profile-image" style={{height: 40, width: 40, cursor: "pointer"}}/></div>
                <div className="single-comment-right">
                    <div className="single-comment-body">
                        <div className="single-comment-name-time">
                            <div onClick={toAuthorsProfile} id="single-comment-name">
                                <div>{users[reply.user_id].first_name.concat(" ", users[reply.user_id].last_name)}</div>
                                { (reply.user_id === currentUser.id) ? <p>Author</p> : null }
                            </div>
                            <div className="single-comment-post-date">
                                <div>{timeSince(reply.created_at)}</div>
                                { currentUser.id === reply.user_id ?
                                <span onClick={handleDropdown} onBlur={() => setDropdown(false)}>•••</span>
                                : null }
                                { (dropdown) ? 
                                    <div id="comment-dropdown">
                                        <div onClick={() => {setEditing(true), setDropdown(false)}}><img src="https://i.postimg.cc/Y9JpH6sk/image-removebg-preview.png" id="comment-edit-button"/>Edit</div>
                                        <div onClick={() => {deleteComment(reply), setDropdown(false)}}><img src="https://i.postimg.cc/tRh0B38K/image-removebg-preview.png" id="comment-edit-button"/>Delete</div>
                                    </div> 
                                : null}
                            </div>
                        </div>
                        <div id="single-comment-headline">{users[reply.user_id].headline}</div>
                        { (editing) ? 
                            <div>
                                <UpdateCommentContainer comment={reply} cancelEdit={cancelEdit} editing={editing} setEditing={setEditing}/>
                            </div>
                        : <div id="single-comment-body">{reply.body}</div> }
                    </div>
                    <div className="comment-likes-replies">
                        <div>Like</div>
                        {(likesCount > 0) ? <span>• {likesCount} <img src="https://i.postimg.cc/VNmdxbQc/image-removebg-preview.png"/></span> : null}
                        |
                        <div onClick={handleAddReply}>Reply</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReplyIndexItem;