import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchConnections } from '../../actions/connection_actions'
import GlobalNavBar from '../globalnavbar/global_nav_bar';
import NetworkIndexItem from './network_index_item';
import InvitationsIndexItem from './invitations_index_item';
import { addConnection, deleteConnection, updateConnection } from '../../actions/connection_actions';

const NetworkIndex = (props) => {

    const { fetchConnections, 
            notConnectedUsers, 
            connectedUsers, 
            incomingConnectors, 
            addConnection, 
            currentUser, 
            outgoingConnectees,
            deleteConnection,
            updateConnection
         } = props;
    
    useEffect(() => {
        fetchConnections();
    }, []);

    return (
        <div className="network-page">
            <GlobalNavBar/>
            <div className="network-page-body">
                <div className="network-left-nav">
                    <h1>Manage my network</h1>
                    <div><img src="https://i.postimg.cc/KcVGbczR/image-removebg-preview.png"/> Connections</div>
                    <div><img src="https://i.postimg.cc/L57602qg/image-removebg-preview.png" /> Contacts</div>
                    <div><img src="https://i.postimg.cc/jqk5jQ8q/image-removebg-preview-3.png"/> People I follow</div>
                </div>
                <div className="network-right-side">
                    <div>
                        <h1>Invitations</h1>
                        <div className="network-invitations">
                            {Object.values(incomingConnectors).map((connector) => (
                                    <InvitationsIndexItem 
                                        key={connector.id} 
                                        connector={connector} 
                                        currentUser={currentUser}
                                        deleteConnection={deleteConnection}
                                        updateConnection={updateConnection}
                                    />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h1>People You May Know</h1>
                        <div className="network-people-may-know">
                            {Object.values(notConnectedUsers).map((user) => (
                                    <NetworkIndexItem 
                                        key={user.id} 
                                        user={user}
                                        outgoingConnectees={outgoingConnectees}
                                        addConnection={addConnection}
                                        deleteConnection={deleteConnection}
                                        currentUser={currentUser}
                                    />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {

    const currentUserId = state.session.user.id
    const users = state.entities.users

    // To return all the users that sent request invites to the current user
    const incomingConnections = Object.values(state.entities.connections)
        .filter((connection) => connection.connectee_id === currentUserId && connection.accepted === false)

    const incomingConnectors = incomingConnections.map((connection) => {
        return users[connection.connector_id]
    })

    // To return all the users that the current user is connected with
    const acceptedConnections = Object.values(state.entities.connections)
        .filter((connection) => 
            (connection.connector_id === currentUserId || connection.connectee_id === currentUserId) && connection.accepted === true)

    const connectedUsers = acceptedConnections.map((connection) => {
        return connection.connector_id === currentUserId ? users[connection.connectee_id] : users[connection.connector_id]
    })

    // To return all users that the current user is not connected with
    const notConnectedUsers = Object.values(state.entities.users)
        .filter((user) => !connectedUsers.includes(user) && !incomingConnectors.includes(user) && user.id !== currentUserId)

    // To return all users that the current user requested to be connected with
    const outgoingConnections = Object.values(state.entities.connections)
        .filter((connection) => connection.connector_id === currentUserId && connection.accepted === false)

    const outgoingConnectees = outgoingConnections.map((connection) => {
        return users[connection.connectee_id]
    })

    return {
        notConnectedUsers: notConnectedUsers,
        connectedUsers: connectedUsers,
        incomingConnectors: incomingConnectors,
        outgoingConnectees: outgoingConnectees,
        currentUser: state.session.user
    }
}

const mapDispatchToprops = (dispatch) => ({
    fetchConnections: () => dispatch(fetchConnections()),
    addConnection: (connection) => dispatch(addConnection(connection)),
    deleteConnection: (connection) => dispatch(deleteConnection(connection)),
    updateConnection: (connection) => dispatch(updateConnection(connection))
});

export default connect(mapStateToProps, mapDispatchToprops)(NetworkIndex);