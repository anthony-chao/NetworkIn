import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchConnections } from '../../actions/connection_actions'
import GlobalNavBar from '../globalnavbar/global_nav_bar';
import NetworkIndexItem from './network_index_item';
import InvitationsIndexItem from './invitations_index_item';

const NetworkIndex = (props) => {

    const { fetchConnections, notConnectedUsers, connectedUsers, incomingConnectors } = props;
    
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
                    <div className="network-invitations">
                        <h1>Invitations</h1>
                        {Object.values(incomingConnectors).map((connector) => (
                                <InvitationsIndexItem 
                                    key={connector.id} 
                                    connector={connector} 
                                />
                        ))}
                    </div>
                    <div className="network-people-may-know">
                        <h1>People You May Know</h1>
                        {Object.values(notConnectedUsers).map((user) => (
                                <NetworkIndexItem 
                                    key={user.id} 
                                    user={user} 
                                />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {

    const currentUserId = state.session.user.id

    const incomingConnections = Object.values(state.entities.connections)
        .filter((connection) => connection.connectee_id === currentUserId && connection.accepted === false)
        
    // const outgoingConnections = Object.values(state.entities.connections)
    //     .filter((connection) => connection.connector_id === currentUserId && connection.accepted === false)

    const acceptedConnections = Object.values(state.entities.connections)
        .filter((connection) => 
            (connection.connector_id === currentUserId || connection.connectee_id === currentUserId) && connection.accepted === true)

    const connectedUsers = acceptedConnections.map((connection) => {
        return connection.connector_id === currentUserId ? users[connection.connector_id] : users[connection.connectee_id]
    })

    const notConnectedUsers = Object.values(state.entities.users)
        .filter((user) => !connectedUsers.includes(user) && user.id !== currentUserId)

    const incomingConnectors = incomingConnections.map((connection) => {
        return users[connection.connector_id]
    })

    return {
        notConnectedUsers: notConnectedUsers,
        connectedUsers: connectedUsers,
        incomingConnectors: incomingConnectors
    }
}

const mapDispatchToprops = (dispatch) => ({
    fetchConnections: () => dispatch(fetchConnections())
});

export default connect(mapStateToProps, mapDispatchToprops)(NetworkIndex);