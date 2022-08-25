import React from "react";
import PostIndexItem from "./post_index_item";
import { Link } from "react-router-dom";

class PostIndex extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        return (
            <section className="feed-post-index">
                <div className="feed-page-post-button">
                    <div className="add-post-button-container">
                        <Link to={{pathname: `/users/${this.props.currentUser.id}`}}> <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" id="post-index-profile-image" /></Link>
                        <div className="post-fake-input-field" onClick={() => this.props.openModal('addPost')}>Start a post</div>
                    </div>
                </div>
                <div className="feed-post-index-body">
                    {Object.values(this.props.posts).map((post) => (
                        <PostIndexItem key={post.id} post={post} openModal={this.props.openModal} closeModal={this.props.closeModal} fetchUser={this.props.fetchUser} deletePost={this.props.deletePost} currentUserId={this.props.currentUser.id} users={this.props.users}/>
                    ))}
                </div>

            </section>
        )
    }
}


export default PostIndex;