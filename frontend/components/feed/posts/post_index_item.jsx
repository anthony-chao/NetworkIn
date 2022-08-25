import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class PostIndexItem extends React.Component {

    constructor(props) {
        
        super(props)
        this.state = {
            body: props.post.body,
            authorId: props.post.user_id
        }
    }

    componentDidMount() {
        // this.props.fetchUser(this.props.post.user_id).then(
        //     (user) => {this.setState({author: user.first_name})})
    }

    render() {
        return (
            <div className="individual-post-body">
                <div className="post-header">
                    <Link to={{pathname: `/users/${this.state.authorId}`}}> <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" id="post-index-profile-image" /></Link>
                    <p> {this.props.users[this.props.post.user_id].first_name} {this.props.users[this.props.post.user_id].last_name} </p>
                    { (this.state.authorId === this.props.currentUserId) ? 
                    <button className="edit-post-button" onClick={() => this.props.openModal('updatePost', this.props.post.id)}> <img src="https://i.postimg.cc/Y9JpH6sk/image-removebg-preview.png" id="edit-button-pencil" /></button>
                    : null }
                </div>
                <br />
                <p>{this.state.body}</p>
            </div>
        )
    }

}

// export default PostIndexItem;


const mapStateToProps = (state) => ({
    users: state.entities.users
})

export default connect(mapStateToProps, null)(PostIndexItem);