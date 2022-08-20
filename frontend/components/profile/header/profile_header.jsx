import React from "react";

class ProfileHeader extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.viewedUserId)
    }

    render() {
        return (
            <section>
                Hello

            </section>
        )
    }
}


export default ProfileHeader;