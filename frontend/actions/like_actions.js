import * as APIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

const receiveLike = (like) => ({
    type: RECEIVE_LIKE,
    like: like
});

const removeLike = (like) => ({
    type: REMOVE_LIKE,
    like: like
});

export const addLike = (like) => dispatch => {
    return APIUtil.addLike(like)
    .then((like) => dispatch(receiveLike(like)))
};

export const updateLike = (like) => dispatch => {
    return APIUtil.updateLike(like)
    .then((like) => dispatch(receiveLike(like)))
};

export const deleteLike = (like) => dispatch => {
    return APIUtil.deleteLike(like)
    .then((like) => dispatch(removeLike(like)))
};