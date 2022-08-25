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

    openFakeModal(id) {
        document.getElementById(id).classList.add("invisible");
        document.getElementById(id).classList.remove("invisible");
        document.getElementById(id).classList.remove("invisible");
    }

    render() {
        // debugger
        return (
            <div className="individual-post-body">
                <div className="post-header">
                    <div className="post-user-entire">
                        <Link to={{pathname: `/users/${this.state.authorId}`}}> <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" id="post-profile-image" /></Link>
                        <div className="post-user-background">
                            <p id="post-user-name"> {this.props.users[this.props.post.user_id].first_name} {this.props.users[this.props.post.user_id].last_name} </p>
                            <p id="post-user-headline"> {this.props.users[this.props.post.user_id].headline}</p>
                        </div>
                    </div>
                    { (this.state.authorId === this.props.currentUserId) ? 
                    <div className="">
                        <div onClick={() => this.openFakeModal(`post-functions-button${this.props.post.id}`)} id={`post-functions-button${this.props.post.id}`} className="">...</div>
                        <button id={`post-edit-button${this.props.post.id}`} className="edit-post-button invisible" onClick={() => this.props.deletePost(this.props.post)}> <img src="https://i.postimg.cc/vBKzgJc6/image.png" id="edit-button-pencil" /></button>
                        <button id={`post-delete-button${this.props.post.id}`} className="edit-post-button invisible" onClick={() => this.props.openModal('updatePost', this.props.post.id)}> <img src="https://i.postimg.cc/Y9JpH6sk/image-removebg-preview.png" id="edit-button-pencil" /></button>
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