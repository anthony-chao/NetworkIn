import React from 'react';
import { useHistory } from "react-router-dom";

const ConnectedIndexItem = (props) => {

    const { user, currentUser, deleteConnection, acceptedConnections } = props;
    const history = useHistory();

    const toUserProfile = () => {
        history.push(`/users/${user.id}`);
    }

    const removeConnection = () => {
        const acceptedConnection = Object.values(acceptedConnections).
            filter((connection) => connection.connector_id === user.id || connection.connectee_id === user.id)[0];

        deleteConnection(acceptedConnection);
    }

    return (
        <div>
            <div id="incoming-connection-profile">
                { (user.profilePictureUrl) ? 
                    <img onClick={toUserProfile} src={`${user.profilePictureUrl}`} /> 
                    : <img onClick={toUserProfile} src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" />}
                <div>
                    <p onClick={toUserProfile}>{user.first_name} {user.last_name}</p>
                    <p>{user.headline}</p>
                </div>
            </div>
            <div className="incoming-connection-buttons">
                <div>Ignore</div>
                <div>Accept</div>
            </div>
        </div>
    )

}

export default ConnectedIndexItem;