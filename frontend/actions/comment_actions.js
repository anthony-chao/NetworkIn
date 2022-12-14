import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment: comment
});

const removeComment = (comment) => ({
    type: REMOVE_COMMENT,
    comment: comment
});

export const addComment = (comment) => dispatch => {
    return APIUtil.addComment(comment)
    .then((comment) => dispatch(receiveComment(comment)))
};

export const updateComment = (comment) => dispatch => {
    return APIUtil.updateComment(comment)
    .then((comment) => dispatch(receiveComment(comment)))
};

export const deleteComment = (comment) => dispatch => {
    return APIUtil.deleteComment(comment)
    .then((comment) => dispatch(removeComment(comment)))
};
