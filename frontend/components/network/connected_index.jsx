import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchConnections } from '../../actions/connection_actions'
import GlobalNavBar from '../globalnavbar/global_nav_bar';
import { deleteConnection } from '../../actions/connection_actions';
import ConnectedIndexItem from './connected_index_item';

const ConnectedIndex = (props) => {

    const { fetchConnections, 
            connectedUsers, 
            currentUser, 
            deleteConnection,
            acceptedConnections
         } = props;
    
    useEffect(() => {
        fetchConnections();
    }, []);

    return (
        <div className="network-page">
            <GlobalNavBar/>
            <div className="network-page-body" style={{flexDirection: 'column'}}>
                
                <div className="connectioned-users-index">
                    { (acceptedConnections.length === 1) ? 
                        <h1>1 Connection</h1>
                        : <h1>{acceptedConnections.length} Connections</h1>
                    }
                    {Object.values(connectedUsers).map((user) => (
                            <ConnectedIndexItem 
                                key={user.id} 
                                user={user} 
                                currentUser={currentUser}
                                deleteConnection={deleteConnection}
                                acceptedConnections={acceptedConnections}
                            />
                    ))}
                </div>
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {

    const currentUserId = state.session.user.id
    const users = state.entities.users

    // To return all the users that the current user is connected with
    const acceptedConnections = Object.values(state.entities.connections)
        .filter((connection) => 
            (connection.connector_id === currentUserId || connection.connectee_id === currentUserId) && connection.accepted === true)

    const connectedUsers = acceptedConnections.map((connection) => {
        return connection.connector_id === currentUserId ? users[connection.connectee_id] : users[connection.connector_id]
    })

    return {
        connectedUsers: connectedUsers,
        acceptedConnections: acceptedConnections,
        currentUser: state.session.user
    }
}

const mapDispatchToprops = (dispatch) => ({
    fetchConnections: () => dispatch(fetchConnections()),
    deleteConnection: (connection) => dispatch(deleteConnection(connection))
});

export default connect(mapStateToProps, mapDispatchToprops)(ConnectedIndex);