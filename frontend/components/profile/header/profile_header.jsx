import React from "react";

class ProfileHeader extends React.Component {

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
                    <img src="https://static-exp1.licdn.com/sc/h/55k1z8997gh8dwtihm11aajyq" id="profile-cover-image" />
                    <div className="profile-below-cover-image">
                        <img src="https://archives.bulbagarden.net/media/upload/3/3e/039Jigglypuff.png" id="profile-header-image" />
                        <div className="profile-header-body">
                            <h1 id="profile-bold-name">{this.state.fetchedUser.first_name.concat(" ", this.state.fetchedUser.last_name)}</h1>
                            <div id="profile-dark-headline">{this.state.fetchedUser.headline}</div>
                            <div id="profile-grey-location">{this.state.fetchedUser.location_city.concat(", ", this.state.fetchedUser.location_country)}</div>
                        </div>
                    </div>
                </section>
            )
        }
    }
}


export default ProfileHeader;