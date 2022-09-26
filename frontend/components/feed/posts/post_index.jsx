import React, { useState, useEffect } from "react";
import PostIndexItem from "./post_index_item";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPosts, deletePost } from '../../../actions/post_actions';
import { openModal } from '../../../actions/modal_actions';
import LoadingContainer from "../../loading/loading";
import { addLike, deleteLike } from "../../../actions/like_actions";

const PostIndex = (props) => {

    const { fetchPosts, currentUser, posts, users, deletePost, openModal, comments, likes, addLike, deleteLike } = props;
    const history = useHistory();
    
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPosts().then(setLoading(false));
    }, []);

    const toProfilePage = () => {
        history.push(`/users/${currentUser.id}`);
    };

    const content = () => (
        <section className="feed-post-index">
            <div className="feed-page-post-button">
                <div className="add-post-button-container">
                    <div onClick={toProfilePage}> <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" id="post-index-profile-image" /></div>
                    <div className="post-fake-input-field" onClick={() => openModal('addPost')}>Start a post</div>
                </div>
            </div>
            <div id="feed-page-empty-line">Sort by: Recent</div>
            <div className="feed-post-index-body">
                {Object.values(posts).map((post) => (
                    <PostIndexItem 
                        key={post.id} 
                        post={post} 
                        openModal={openModal} 
                        deletePost={deletePost} 
                        currentUserId={currentUser.id} 
                        users={users} 
                        comments={comments}
                        likes={likes}
                        addLike={addLike}
                        deleteLike={deleteLike}
                    />
                ))}
            </div>
        </section>
    )
    return (loading) ? <LoadingContainer/> : content();
}

const mapStateToProps = (state) => ({
        currentUser: state.session.user,
        posts: state.entities.posts,
        users: state.entities.users,
        comments: state.entities.comments,
        likes: state.entities.likes
});

const mapDispatchToProps = (dispatch) => ({
    fetchPosts: () => dispatch(fetchPosts()),
    closeModal: () => dispatch(closeModal()),
    openModal: (type, id) => dispatch(openModal(type, id)),
    deletePost: (post) => dispatch(deletePost(post)),
    addLike: (like) => dispatch(addLike(like)),
    deleteLike: (like) => dispatch(deleteLike(like))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex)