import React from 'react';
import { useHistory } from "react-router-dom";

const InvitationsIndexItem = (props) => {

    const { connector, currentUser, updateConnection, deleteConnection } = props;
    const history = useHistory();

    const toUserProfile = () => {
        history.push(`/users/${connector.id}`);
    }

    const acceptRequest = () => {
        const connectionRequest = Object.values(currentUser.incoming_connections).filter((connection) => connection.connector_id === connector.id)[0];
        connectionRequest.accepted = true;
        updateConnection(connectionRequest);
    }

    const ignoreRequest = () => {
        const connectionRequest = Object.values(currentUser.incoming_connections).filter((connection) => connection.connector_id === connector.id)[0];
        deleteConnection(connectionRequest);
    }

    return (
        <div>
            <div id="incoming-connection-profile">
                { (connector.profilePictureUrl) ? 
                    <img onClick={toUserProfile} src={`${connector.profilePictureUrl}`} /> 
                    : <img onClick={toUserProfile} src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" />}
                <div>
                    <p onClick={toUserProfile}>{connector.first_name} {connector.last_name}</p>
                    <p>{connector.headline}</p>
                </div>
            </div>
            <div className="incoming-connection-buttons">
                <div onClick={ignoreRequest}>Ignore</div>
                <div onClick={acceptRequest}>Accept</div>
            </div>
        </div>
    )

}

export default InvitationsIndexItem;