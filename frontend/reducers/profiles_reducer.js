import { RECEIVE_USER } from "../actions/profile_actions";

const profilesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    
    switch (action.type) {
        case RECEIVE_USER:
            nextState = {};
            nextState = action.user;
            return nextState;
        default:
            return state;
    }
}

export default profilesReducer;