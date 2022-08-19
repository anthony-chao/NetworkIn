import usersReducer from "./users_reducer";
import educationsReducer from "./educations_reducer";
import experiencesReducer from './experiences_reducer';
import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
    users: usersReducer,
    viewedUser: educationsReducer,
    viewedUserForExp: experiencesReducer
})

export default entitiesReducer;