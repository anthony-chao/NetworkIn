import * as APIUtil from '../util/post_api_util'

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

const receivePosts = (posts) => ({
    type: RECEIVE_POSTS,
    posts: posts
});

const receivePost = (post) => ({
    type: RECEIVE_POST,
    post: post
});

const removePost = (post) => ({
    type: REMOVE_POST,
    post: post
});

export const fetchPosts = () => dispatch => {
    return APIUtil.fetchPosts()
    .then((posts) => dispatch(receivePosts(posts)))
};

export const addPost = (post) => dispatch => {
    return APIUtil.addPost(post)
    .then((post) => dispatch(receivePost(post)))
};

export const updatePost = (post, postId) => dispatch => {
    return APIUtil.updatePost(post, postId)
    .then((post) => dispatch(receivePost(post)))
};

export const deletePost = (post) => dispatch => {
    return APIUtil.deletePost(post)
    .then((post) => dispatch(removePost(post)))
};