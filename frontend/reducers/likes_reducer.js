import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";
import { RECEIVE_POSTS } from "../actions/post_actions";

const likesReducer = (state = {}, action) => {

    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_POSTS:
            return Object.assign({}, state, action.posts.likes)
        case RECEIVE_LIKE:
            nextState[action.like.id] = action.like;
            return nextState;
        case REMOVE_LIKE:
            delete nextState[action.like.id];
            return nextState;
        default:
            return state;
    }

}

export default likesReducer;