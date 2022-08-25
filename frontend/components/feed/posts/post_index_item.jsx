import React from "react";

class PostIndexItem extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            body: this.props.post.body,
            author: ""
        }
    }

    componentDidMount() {
        this.props.fetchUser(this.props.post.user_id).then(
            (user) => {this.setState({author: user.first_name})})
    }

    render() {
        return (
            <div className="individual-post-body">
                {this.state.author}
                {this.state.body}
            </div>
        )
    }

}

export default PostIndexItem;