import usersReducer from "./users_reducer";
import educationsReducer from "./educations_reducer";
import experiencesReducer from './experiences_reducer';
import profilesReducer from "./profiles_reducer";
import postsReducer from "./posts_reducer";
import commentsReducer from "./comments_reducer";
import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
    users: usersReducer,
    viewedUser: profilesReducer,
    viewedUserEducation: educationsReducer,
    viewedUserExperience: experiencesReducer,
    posts: postsReducer,
    comments: commentsReducer
})

export default entitiesReducer;