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

        this.openFakeModal = this.openFakeModal.bind(this);
    }

    openFakeModal(postId) {
        document.getElementById(`post-functions-button${postId}`).classList.add("invisible");
        document.getElementById(`post-edit-button${postId}`).classList.remove("invisible");
        document.getElementById(`post-delete-button${postId}`).classList.remove("invisible");
    }

    render() {
        return (
            <div className="individual-post-body">
                <div className="post-header">
                    <div className="post-user-entire">
                        <Link to={{pathname: `/users/${this.state.authorId}`}}> <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" id="post-profile-image" /></Link>
                        <div className="post-user-background">
                        <Link to={{pathname: `/users/${this.state.authorId}`}} id="post-user-name"> {this.props.users[this.props.post.user_id].first_name} {this.props.users[this.props.post.user_id].last_name} </Link>
                        <p id="post-user-headline"> {this.props.users[this.props.post.user_id].headline}</p>
                        </div>
                    </div>
                    { (this.state.authorId === this.props.currentUserId) ? 
                    <div className="">
                        <div onClick={() => this.openFakeModal(this.props.post.id)} id={`post-functions-button${this.props.post.id}`} className="post-functions-button"><p>...</p></div>
                        <button id={`post-edit-button${this.props.post.id}`} className="edit-post-button invisible" onClick={() => this.props.deletePost(this.props.post)}> <img src="https://i.postimg.cc/tRh0B38K/image-removebg-preview.png" id="edit-button-feed" /></button>
                        <button id={`post-delete-button${this.props.post.id}`} className="edit-post-button invisible" onClick={() => this.props.openModal('updatePost', this.props.post.id)}> <img src="https://i.postimg.cc/Y9JpH6sk/image-removebg-preview.png" id="edit-button-feed" /></button>
                    </div>
                    : null }
                </div>
                <br />
                <p id="post-body">{this.state.body}</p>
            </div>
        )
    }

}

// export default PostIndexItem;


const mapStateToProps = (state) => ({
    users: state.entities.users
})

export default connect(mapStateToProps, null)(PostIndexItem);