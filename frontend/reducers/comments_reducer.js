import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_POSTS } from "../actions/post_actions";

const commentsReducer = (state = {}, action) => {

    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_POSTS:
            return Object.assign({}, state, action.posts.comments)
        case RECEIVE_COMMENT:
            nextState[action.comment.id] = action.comment;
            return nextState;
        case REMOVE_COMMENT:
            delete nextState[action.comment.id];
            return nextState;
        default:
            return state;
    }

}

export default commentsReducer;