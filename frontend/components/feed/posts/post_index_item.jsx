import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CommentIndex from '../comments/comment_index';

const PostIndexItem = (props) => {

  const { post, users, openModal, deletePost, currentUserId, comments, likes, addLike, deleteLike } = props;
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

  const likesCount = Object.values(likes)
    .filter((like) => like.likeable_type === "Post" && like.likeable_id === post.id)
    .length

  const likedPost = Object.values(likes)
    .filter((like) => like.likeable_type === "Post" && like.likeable_id === post.id && like.user_id === currentUserId);

  const likePost = () => {
    addLike({post_id: post.id, likeable_type: "Post", likeable_id: post.id, user_id: currentUserId})
  }

  const unlikePost = () => {
    deleteLike(likedPost[0]);
  }

  return (
    <div className="individual-post-body">
        <div className="post-header">
            <div className="post-user-entire">
                <div onClick={toUserProfile}> <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" id="post-profile-image" /></div>
                <div className="post-user-background">
                <div onClick={toUserProfile} id="post-user-name"> 
                  <div>{users[post.user_id].first_name} {users[post.user_id].last_name}</div>
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
        
        <div id="post-comment-count">
          { (likesCount > 0) ? <div>{likesCount} <img src="https://i.postimg.cc/VNmdxbQc/image-removebg-preview.png"/></div> : <div></div>}
          { (commentsCount === 1) ? <div onClick={handleToggle}>1 comment</div> : null}
          { (commentsCount > 1) ? <div onClick={handleToggle}>{commentsCount} comments</div> : null}
          { (commentsCount === 0) ? <div></div> : null}
        </div>

        <div className="post-like-comment-buttons">
              {(likedPost.length === 0) ? 
                <div onClick={likePost}><img src="https://i.postimg.cc/50NkbGW7/image-removebg-preview.png"/> Like</div>
                : <div onClick={unlikePost} id="liked-post-icon"><img src="https://i.postimg.cc/Cx1k7QGT/image-removebg-preview-2.png"/> Like</div>}
            <div onClick={handleToggle}>
              <img src="https://i.postimg.cc/Rh2P1Z6y/image-removebg-preview-2.png"/> Comment
            </div>
        </div>
        { toggleComments ? <CommentIndex postId={post.id} timeSince={timeSince}/> : null}
    </div>
  )

}

export default PostIndexItem;