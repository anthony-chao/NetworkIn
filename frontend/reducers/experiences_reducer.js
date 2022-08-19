import { RECEIVE_EXPERIENCE, REMOVE_EXPERIENCE, RECEIVE_EXPERIENCES } from "../actions/experience_actions";

const experiencesReducer = (state = {}, action) => {

    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_EXPERIENCES:
            return action.experiences;
        case RECEIVE_EXPERIENCE:
            nextState[action.experience.id] = action.experience;
            return nextState;
        case REMOVE_EXPERIENCE:
            delete nextState[action.experience.id];
            return nextState;
        default:
            return state;
    }

}

export default experiencesReducer;