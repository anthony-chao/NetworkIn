import usersReducer from "./users_reducer";
import educationsReducer from "./educations_reducer";
import { combineReducers } from 'redux'

const entitiesReducer = combineReducers({
    users: usersReducer,
    viewedUser: educationsReducer
})

export default entitiesReducer;