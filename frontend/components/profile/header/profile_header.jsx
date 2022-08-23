import React from "react";

class ProfileHeader extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            fetchedUser: false,
            fakeModalOpened: false
        }
        
        this.handleClick = this.handleClick.bind(this);
        this.openFakeModal = this.openFakeModal.bind(this);
        this.closeFakeModal = this.closeFakeModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.viewedUserId).then(() => this.setState({fetchedUser: Object.values(this.props.viewedUser)[0]}))
    }

    handleClick() {
        !this.state.fakeModalOpened ? this.setState({dropdown: true}) : this.setState({dropdown: false});
      }

    openFakeModal() {
        document.getElementById("profile-header-add-profile-section").classList.add("invisible");
        document.getElementById("profile-header-add-buttons").classList.remove("invisible");
        document.getElementById("profile-header-add-buttons").classList.remove("invisible");
      }

    closeFakeModal() {
        document.getElementById("profile-header-add-profile-section").classList.remove("invisible");
        document.getElementById("profile-header-add-buttons").classList.add("invisible");
        document.getElementById("profile-header-add-buttons").classList.add("invisible");
      }

    render() {
        if (this.state.fetchedUser) {
            return (
                <section className="profile-page-header">
                    <img src="https://static-exp1.licdn.com/sc/h/55k1z8997gh8dwtihm11aajyq" id="profile-cover-image" />
                    <div className="profile-below-cover-image">
                        <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" id="profile-header-image" />
                        <div className="profile-header-body">
                            <h1 id="profile-bold-name">{this.state.fetchedUser.first_name.concat(" ", this.state.fetchedUser.last_name)}</h1>
                            <div id="profile-dark-headline">{this.state.fetchedUser.headline}</div>
                            <div id="profile-grey-location">{this.state.fetchedUser.location_city.concat(", ", this.state.fetchedUser.location_country)}</div>
                        </div>
                    </div>
                    <div onClick={this.openFakeModal} onBlur={this.closeFakeModal} id="profile-header-add-profile-section">Add Profile Section</div>
                        <div className="profile-header-buttons">
                            <div id="profile-header-add-buttons" className="invisible">Add Experience</div>
                            <div onClick={() => this.props.openModal('addEducation')} id="profile-header-add-buttons" className="invisible">Add Education</div>
                        </div>
                </section>
            )
        }
    }
}


export default ProfileHeader;