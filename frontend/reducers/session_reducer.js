import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_EMAIL_PASSWORD, RECEIVE_SIGNUP_NAMES, RECEIVE_SIGNUP_LOCATION, RECEIVE_SIGNUP_JOB } from "../actions/session_actions";

const _nullUser = Object.freeze({
    id: null
});

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id };
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        case RECEIVE_EMAIL_PASSWORD:
            let furtherState = Object.assign(nextState, action.data);
            return furtherState;
        case RECEIVE_SIGNUP_NAMES:
            let furtherStatee = Object.assign(nextState, action.data);
            return furtherStatee;
        case RECEIVE_SIGNUP_LOCATION:
                let furtherStateee = Object.assign(nextState, action.data);
                return furtherStateee;
            case RECEIVE_SIGNUP_JOB:
                let furtherStateeee = Object.assign(nextState, action.data);
                return furtherStateeee;
        default:
            return state;
    }
}

export default sessionReducer;