import React from "react";

const ProfileAbout = (props) => {

    const { viewedUser, currentUserId, viewedPageId, openModal } = props;

    if (Object.values(viewedUser).length !== 0) {
        return (
            <section>
                { (viewedUser.about) ? 
                    <div className="profile-page-education-experience">
                        <div id="profile-about-header">About</div>
                        <div id="profile-about-body">{viewedUser.about}</div>
                    </div>
                : null}
            </section>
        )
    }
}

class ProfileAbout1 extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            fetchedUser: false
        }
    }

    componentDidMount() {
        this.props.fetchUser(this.props.viewedUserId).then(() => this.setState({fetchedUser: Object.values(this.props.viewedUser)[0]}))
    }

    render() {
        if (this.state.fetchedUser) {
            return (
                <section>
                    { (this.state.fetchedUser.about) ? 
                        <div className="profile-page-education-experience">
                            <div id="profile-about-header">About</div>
                            <div id="profile-about-body">{this.state.fetchedUser.about}</div>
                        </div>
                    : null}
                </section>
            )
        }
    }
}


export default ProfileAbout;