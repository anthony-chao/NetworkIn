import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import modalReducer from './modal_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    errors: errorsReducer,
    session: sessionReducer,
    modal: modalReducer
})

export default rootReducer;