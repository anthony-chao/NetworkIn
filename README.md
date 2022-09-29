# NetworkIn

NetworkIn is a clone of LinkedIn - the largest professional network on the internet where professionals can connect, share and learn. Users have the ability to create a professsional profile, create/edit/delete posts, add comments/likes, and do some networking! Let's get to networkIn!

Live Site: [NetworkIn](https://networkin.herokuapp.com/#/)

# Technologies used
* Fontend: React, Redux, JavaScript
* Backend: Ruby on Rails, PostgreSQL
* Hosting: Heroku

# Features

### User Authentication

* Users can sign up for a new account. Upon sign up, users will be automatically logged in and will be redirected to their feed page.
* Users can use their existing accounts to sign in or use the demo login.
![](https://github.com/anthony-chao/NetworkIn/blob/main/app/assets/images/demologin.gif)

### Profile
* Users will be able to add, update and delete educations and experiences in their own profile.
![](https://github.com/anthony-chao/NetworkIn/blob/main/app/assets/images/profile.gif)

### Posts
* Users can create posts for all users to view. Users will also have the ability to update and delete their own posts.
![](https://github.com/anthony-chao/NetworkIn/blob/main/app/assets/images/posts.gif)

### Likes and Comments
* Users can like and comment on their own post or other users' posts. Users can reply to comments as well.
* Users can unlike posts and comments, as well as update or delete their own comments.
![](https://github.com/anthony-chao/NetworkIn/blob/main/app/assets/images/likes.gif)

### Network and Connections
* Users can send connection requests to other users. Users will have the ability to accept or decline incoming connection requests.
![](https://github.com/anthony-chao/NetworkIn/blob/main/app/assets/images/connections.gif)

# Code Snippets
To determine how each user is associated with another user, different filters were applied to all the connections in the database to query for users that were in the following categories:
* Users that requested to connect with the logged in user
* Users that the logged in user requested to connect with
* Users that have no relationship to the user
* Users that the current user is connected with

```
const mapStateToProps = (state) => {

    const currentUserId = state.session.user.id
    const users = state.entities.users

    const incomingConnections = Object.values(state.entities.connections)
        .filter((connection) => connection.connectee_id === currentUserId && connection.accepted === false)

    const incomingConnectors = incomingConnections.map((connection) => {
        return users[connection.connector_id]
    })

    const acceptedConnections = Object.values(state.entities.connections)
        .filter((connection) => 
            (connection.connector_id === currentUserId || connection.connectee_id === currentUserId)
            && connection.accepted === true)

    const connectedUsers = acceptedConnections.map((connection) => {
        return connection.connector_id === currentUserId ? users[connection.connectee_id] : users[connection.connector_id]
    })

    const notConnectedUsers = Object.values(state.entities.users)
        .filter((user) => !connectedUsers.includes(user) && !incomingConnectors.includes(user) && user.id !== currentUserId)

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
        connectedUsers: connectedUsers,
        currentUser: state.session.user
    }
}
```

Once each user is placed into a category, the user will be placed into a different component.