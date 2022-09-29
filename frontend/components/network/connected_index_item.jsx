import React from 'react';
import { useHistory } from "react-router-dom";

const ConnectedIndexItem = (props) => {

    const { user, currentUser, deleteConnection, acceptedConnections } = props;
    const history = useHistory();

    const toUserProfile = () => {
        history.push(`/users/${user.id}`);
    }

    const acceptedConnection = Object.values(acceptedConnections).
        filter((connection) => connection.connector_id === user.id || connection.connectee_id === user.id)[0];

    const removeConnection = () => {
        deleteConnection(acceptedConnection);
    }

    const timeSince = (date) => {
        if (typeof date !== 'object') {
          date = new Date(date);
        }
      
        var seconds = Math.floor((new Date() - date) / 1000);
        var intervalType;
      
        var interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
          intervalType = 'years';
        } 
        else if (interval === 1) {
            intervalType = 'year';
        }
        else {
          interval = Math.floor(seconds / 2592000);
          if (interval > 1) {
            intervalType = 'months';
          } 
          else if (interval === 1) {
            intervalType = 'month';
          }
          else {
            interval = Math.floor(seconds / 604800);
            if (interval > 1) {
              intervalType = 'weeks';
            } 
            else if (interval === 1) {
                intervalType = 'week';
            }
            else {
            interval = Math.floor(seconds / 86400);
            if (interval > 1) {
              intervalType = 'days';
            } 
            else if (interval === 1) {
                intervalType = 'day';
              }
            else {
              interval = Math.floor(seconds / 3600);
              if (interval > 1) {
                intervalType = "hours";
              } 
              else if (interval === 1) {
                intervalType = 'hour';
              }
              else {
                interval = Math.floor(seconds / 60);
                if (interval > 1) {
                  intervalType = "minutes";
                } 
                else if (interval === 1) {
                    intervalType = 'minute';
                  }
                else {
                  interval = seconds;
                  intervalType = "Less than a minute ago";
                }
              }
            }
          }
        }
      }
        return (intervalType === "Less than a minute ago") ? intervalType : 'Connected ' + interval + " " + intervalType + " ago";
      };

    return (
        <div>
            <div id="incoming-connection-profile">
                { (user.profilePictureUrl) ? 
                    <img onClick={toUserProfile} src={`${user.profilePictureUrl}`} /> 
                    : <img onClick={toUserProfile} src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" />}
                <div>
                    <p onClick={toUserProfile}>{user.first_name} {user.last_name}</p>
                    <p>{user.headline}</p>
                    <p>{timeSince(acceptedConnection.updated_at)}</p>
                </div>
            </div>
            <div className="incoming-connection-buttons">
                <div style={{width: 150}}>Remove Connection</div>
            </div>
        </div>
    )

}

export default ConnectedIndexItem;