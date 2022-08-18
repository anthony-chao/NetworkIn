import { RECEIVE_EDUCATION, REMOVE_EDUCATION,  } from "../actions/education_actions";

const educationsReducer = (state = {}, action) => {

    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_EDUCATION:
            nextState[action.education.id] = action.education;
            return nextState;
        case REMOVE_EDUCATION:
            delete nextState[action.education.id];
            return nextState;
        default:
            return state;
    }

}

export default educationsReducer;