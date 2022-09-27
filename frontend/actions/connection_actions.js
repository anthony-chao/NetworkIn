import * as APIUtil from '../util/connection_api_util';

export const RECEIVE_CONNECTIONS = 'RECEIVE_CONNECTIONS';
export const RECEIVE_CONNECTION = 'RECEIVE_CONNECTION';
export const REMOVE_CONNECTION = 'REMOVE_CONNECTION';

const receiveConnections = (connections) => ({
    type: RECEIVE_CONNECTIONS,
    connections: connections
});

const receiveConnection = (connection) => ({
    type: RECEIVE_CONNECTION,
    connection: connection
});

const removeConnection = (connection) => ({
    type: REMOVE_CONNECTION,
    connection: connection
});

export const fetchConnections = () => dispatch => {
    return APIUtil.fetchConnections()
    .then((connections) => dispatch(receiveConnections(connections)))
};

export const addConnection = (connection) => dispatch => {
    return APIUtil.addConnection(connection)
    .then((connection) => dispatch(receiveConnection(connection)))
};

export const updateConnection = (connection) => dispatch => {
    return APIUtil.updateConnection(connection)
    .then((connection) => dispatch(receiveConnection(connection)))
};

export const deleteConnection = (connection) => dispatch => {
    return APIUtil.deleteConnection(connection)
    .then((connection) => dispatch(removeConnection(connection)))
};