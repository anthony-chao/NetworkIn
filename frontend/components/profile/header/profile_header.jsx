import React from "react";

class ProfileHeader extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            fetchedUser: false,
            dropdown: false
        }
        
        this.handleClick = this.handleClick.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.viewedUserId).then(() => this.setState({fetchedUser: Object.values(this.props.viewedUser)[0]}))
    }

    handleClick() {
        !this.state.dropdown ? this.setState({dropdown: true}) : this.setState({dropdown: false});
      }
  
      handleLeave() {
        this.setState({dropdown: false});
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
                    <div onClick={this.handleClick} onBlur={this.handleLeave} id="profile-header-add-profile-section">Add Profile Section</div>
                        {(this.state.dropdown) ? 
                        <div className="profile-header-dropdown-container">
                            <div onClick={() => this.props.openModal('addEducation')} id="profile-header-add-education">Add Education</div>
                        </div>
                        : null}
                </section>
            )
        }
    }
}


export default ProfileHeader;