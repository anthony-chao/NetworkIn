import React, { useState, useEffect } from "react";

const ProfileHeader = (props) => {

    const { viewedUser, currentUserId, viewedPageId, openModal } = props;

    const [state, setState] = useState({
        fakeModalOpened: false
    })

    const openFakeModal = () => {
        !state.fakeModalOpened ? setState({fakeModalOpened: true}) : null;
    }

    if (Object.values(viewedUser).length !== 0) {
    return (
        <section className="profile-page-header">
            <img src="https://static-exp1.licdn.com/sc/h/55k1z8997gh8dwtihm11aajyq" id="profile-cover-image" />
            <div className="profile-below-cover-image">
                <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" id="profile-header-image" />
                <div className="profile-header-body">
                    <h1 id="profile-bold-name">{viewedUser.first_name.concat(" ", viewedUser.last_name)}</h1>
                    <div id="profile-dark-headline">{viewedUser.headline}</div>
                    <div id="profile-grey-location">{viewedUser.location_city.concat(", ", viewedUser.location_country)}</div>
                </div>
            </div>
            { (parseInt(currentUserId) === parseInt(viewedPageId)) ? 
            <div>
                <div onClick={openFakeModal} id="profile-header-add-profile-section" className={(state.fakeModalOpened) ? "invisible" : ""}>Add Profile Section</div>
                    <div className="profile-header-buttons">
                        <div onClick={() => openModal('addExperience')} id="profile-header-add-experience" className={(!state.fakeModalOpened) ? "invisible" : ""}>Add Experience</div>
                        <div onClick={() => openModal('addEducation')} id="profile-header-add-education" className={(!state.fakeModalOpened) ? "invisible" : ""}>Add Education</div>
                    </div>
            </div>
            : null}
        </section>
    )
    }
}

class ProfileHeader1 extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            fetchedUser: false,
            fakeModalOpened: false
        }
        
        this.handleClick = this.handleClick.bind(this);
        this.openFakeModal = this.openFakeModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.viewedUserId).then(() => this.setState({fetchedUser: Object.values(this.props.viewedUser)[0]})).then(() => 
        document.title = `${this.state.fetchedUser.first_name.concat(" ", this.state.fetchedUser.last_name)} | NetworkIn`)
    }

    componentWillUnmount() {
        document.title = 'NetworkIn'
      }

    handleClick() {
        !this.state.fakeModalOpened ? this.setState({dropdown: true}) : this.setState({dropdown: false});
      }

    openFakeModal() {
        document.getElementById("profile-header-add-profile-section").classList.add("invisible");
        document.getElementById("profile-header-add-experience").classList.remove("invisible");
        document.getElementById("profile-header-add-education").classList.remove("invisible");
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
                    { (parseInt(this.props.currentUser.id) === parseInt(this.props.viewedPageId)) ? 
                    <div>
                        <div onClick={this.openFakeModal} id="profile-header-add-profile-section">Add Profile Section</div>
                            <div className="profile-header-buttons">
                                <div onClick={() => this.props.openModal('addExperience')} id="profile-header-add-experience" className="invisible">Add Experience</div>
                                <div onClick={() => this.props.openModal('addEducation')} id="profile-header-add-education" className="invisible">Add Education</div>
                            </div>
                    </div>
                    : null}
                </section>
            )
        }
    }
}


export default ProfileHeader;