import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CommentIndex from '../comments/comment_index';

const PostIndexItem = (props) => {

  const { post, users, openModal, deletePost, currentUserId, comments } = props;
  const history = useHistory();

  const [revealedButton, setRevealedButton] = useState(false);
  const [toggleComments, setToggleComments] = useState(false);

  const handleToggle = () => {
    (toggleComments) ? setToggleComments(false) : setToggleComments(true);
  }

  const timeSince = (date) => {
    if (typeof date !== 'object') {
      date = new Date(date);
    }
  
    var seconds = Math.floor((new Date() - date) / 1000);
    var intervalType;
  
    var interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
      intervalType = 'yr';
    } else {
      interval = Math.floor(seconds / 2592000);
      if (interval >= 1) {
        intervalType = 'mo';
      } else {
        interval = Math.floor(seconds / 604800);
        if (interval >= 1) {
          intervalType = 'w';
        } else {
        interval = Math.floor(seconds / 86400);
        if (interval >= 1) {
          intervalType = 'd';
        } else {
          interval = Math.floor(seconds / 3600);
          if (interval >= 1) {
            intervalType = "h";
          } else {
            interval = Math.floor(seconds / 60);
            if (interval >= 1) {
              intervalType = "m";
            } else {
              interval = seconds;
              intervalType = "now";
            }
          }
        }
      }
    }
  }
    return (intervalType === "now") ? intervalType : interval + intervalType;
  };

  const toUserProfile = () => {
    history.push(`/users/${post.user_id}`);
  };

  const revealButtons = () => {
    !revealedButton.fakeModalOpened ? setRevealedButton(true) : null;
  }

  const commentsCount = Object.values(comments)
    .filter((comment) => comment.post_id === post.id)
    .length;

  return (
    <div className="individual-post-body">
        <div className="post-header">
            <div className="post-user-entire">
                <div onClick={toUserProfile}> <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" id="post-profile-image" /></div>
                <div className="post-user-background">
                <div onClick={toUserProfile} id="post-user-name"> 
                  <div>{users[post.user_id].first_name} {users[post.user_id].last_name}</div>
                  {/* { post.user_id === currentUserId ? <p> • You</p> : <p> • 2nd </p> } */}
                </div>
                <p id="post-user-headline"> {users[post.user_id].headline}</p>
                <p id="post-user-create-time">{timeSince(post.created_at)}</p>
                </div>
            </div>
            { (post.user_id === currentUserId) ? 
            <div className="">
                <div onClick={revealButtons} id={`post-functions-button${post.id}`} className={`post-functions-button ${!revealedButton ? "" : 'invisible'}`}><p>...</p></div>
                <button id={`post-edit-button${post.id}`} className={`edit-post-button ${revealedButton ? "" : 'invisible'}`} onClick={() => deletePost(post)}> <img src="https://i.postimg.cc/tRh0B38K/image-removebg-preview.png" id="edit-button-feed" /></button>
                <button id={`post-delete-button${post.id}`} className={`edit-post-button ${revealedButton ? "" : 'invisible'}`} onClick={() => openModal('updatePost', post.id)}> <img src="https://i.postimg.cc/Y9JpH6sk/image-removebg-preview.png" id="edit-button-feed" /></button>
            </div>
            : null }
        </div>
        <br />
        <p id="post-body">{post.body}</p>
        {(post.photoUrl) ? 
        <img id="post-photo" src={post.photoUrl}/> 
        : null}
        
        { (commentsCount === 1) ? 
          <div id="post-comment-count" onClick={handleToggle}>1 comment</div> 
        : null}
        { (commentsCount > 1) ? 
          <div id="post-comment-count" onClick={handleToggle}>{commentsCount} comments</div>
        : null}

        <div className="post-like-comment-buttons">
            <div><img src="https://i.postimg.cc/50NkbGW7/image-removebg-preview.png"/> Like</div>
            <div onClick={handleToggle}>
              <img src="https://i.postimg.cc/Rh2P1Z6y/image-removebg-preview-2.png"/> Comment</div>
        </div>
        { toggleComments ? <CommentIndex postId={post.id} timeSince={timeSince}/> : null}
    </div>
  )

}

export default PostIndexItem;