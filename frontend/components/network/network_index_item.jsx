import React from 'react';
import { useHistory } from "react-router-dom";

const NetworkIndexItem = (props) => {

    const { user, currentUser, addConnection, outgoingConnectees, deleteConnection } = props;
    const history = useHistory();

    const toUserProfile = () => {
        history.push(`/users/${user.id}`);
    }

    const toggleConnectionRequest = () => {
        const connectionRequest = Object.values(currentUser.outgoing_connections).filter((connection) => connection.connectee_id === user.id)[0];

        !outgoingConnectees.includes(user) ? 
            addConnection({connector_id: currentUser.id, connectee_id: user.id, accepted: false})
            : deleteConnection(connectionRequest)
    }

    return (
        <div id="network-index-item-shadow">
            <img src="https://static-exp1.licdn.com/sc/h/55k1z8997gh8dwtihm11aajyq" id="network-index-cover"/>
            { (user.profilePictureUrl) ? 
                <img onClick={toUserProfile} id="network-index-profile-picture" src={`${user.profilePictureUrl}`} /> 
                : <img onClick={toUserProfile} id="network-index-profile-picture" src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" />}
            <div className="network-index-name" onClick={toUserProfile}>{user.first_name} {user.last_name}</div>
            <div className="network-index-headline">{user.headline}</div>
            { (outgoingConnectees.includes(user)) ? 
            <div id="network-request-status-sent" onClick={toggleConnectionRequest}><img src="https://i.postimg.cc/y8JbWxJP/image-removebg-preview.png"/> Pending</div>
            : <div id="network-request-status-not-sent" onClick={toggleConnectionRequest}>Connect</div> }
        </div>
    )
}

export default NetworkIndexItem;