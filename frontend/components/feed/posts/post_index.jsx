import React from "react";
import PostIndexItem from "./post_index_item";

class PostIndex extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        return (
            <section className="profile-page-education-experience">
                {Object.values(this.props.posts).map((post) => (
                    <PostIndexItem key={post.id} post={post} openModal={this.props.openModal} closeModal={this.props.closeModal}/>
                ))
                }

            </section>
        )
    }
}


export default EducationIndex;