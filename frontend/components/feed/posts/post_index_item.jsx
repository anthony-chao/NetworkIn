import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const PostIndexItem = (props) => {

  const { post, users, openModal, deletePost, currentUserId } = props;
  const history = useHistory();

  const [revealedButton, setRevealedButton] = useState(false);

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
        intervalType = 'm';
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
              intervalType = "second";
            }
          }
        }
      }
    }
  }
    return interval + intervalType;
  };

  const toUserProfile = () => {
    history.push(`/users/${post.user_id}`);
  };

  const revealButtons = () => {
    !revealedButton.fakeModalOpened ? setRevealedButton(true) : null;
  }

  return (
    <div className="individual-post-body">
        <div className="post-header">
            <div className="post-user-entire">
                <div onClick={toUserProfile}> <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" id="post-profile-image" /></div>
                <div className="post-user-background">
                <div onClick={toUserProfile} id="post-user-name"> {users[post.user_id].first_name} {users[post.user_id].last_name} </div>
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
    </div>
  )

}

export default PostIndexItem;