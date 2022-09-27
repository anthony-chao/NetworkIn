import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_POSTS } from "../actions/post_actions";
import { RECEIVE_CONNECTIONS } from "../actions/connection_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_POSTS:
            return Object.assign({}, state, action.posts.users)
        case RECEIVE_CONNECTIONS:
            return Object.assign({}, state, action.connections.users)
        default:
            return state;
    }
}

export default usersReducer;