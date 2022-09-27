import { RECEIVE_CONNECTIONS, RECEIVE_CONNECTION, REMOVE_CONNECTION } from "../actions/connection_actions";

const connectionsReducer = (state = {}, action) => {

    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CONNECTIONS:
            Object.assign(nextState, action.connections.conections);
            return nextState;
        case RECEIVE_CONNECTION:
            nextState[action.connection.id] = action.connection;
            return nextState;
        case REMOVE_CONNECTION:
            delete nextState[action.connection.id];
            return nextState;
        default:
            return state;
    }

}

export default connectionsReducer;