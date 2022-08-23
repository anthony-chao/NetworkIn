import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

class GlobalNavBar extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        dropdown: false
      };

      this.handleClick = this.handleClick.bind(this);
      this.handleLeave = this.handleLeave.bind(this);
    }

    handleClick() {
      !this.state.dropdown ? this.setState({dropdown: true}) : this.setState({dropdown: false});
    }

    handleLeave() {
      this.setState({dropdown: false});
    }
  
    render() {
      return (
          <nav className="global-nav-bar">
            <div className="global-left-nav-bar">
              <Link to="/feed"><img id="nav-bar-logo" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" /> </Link>
            </div>
            <div className="global-right-nav-bar">
              <div onClick={this.handleClick} onBlur={this.handleLeave}>
                <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" id="nav-bar-profile-picture" />
                <button className="nav-bar-dropdown-button" > Me <img src="https://i.postimg.cc/Xvf03CFb/image.png" id="down-button"/> </button>
              </div>
              {(this.state.dropdown) ? 
              <div className="nav-bar-dropdown"> 
                {/* <div className="nav-bar-profile-container"> */}
                <Link to={{pathname: `/users/${this.props.currentUser.id}`}} className="nav-bar-profile-container">
                  <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" id="nav-bar-open-picture" />
                  <div className="dropdown-profile-name">{this.props.currentUser.first_name.concat(" " ,this.props.currentUser.last_name)}</div>
                  <div className="dropdown-profile-headline">{this.props.currentUser.headline}</div>
                {/* </div> */}
                </Link>
                <Link to={{pathname: `/users/${this.props.currentUser.id}`}} className="dropdown-profile-link">View Profile</Link>
                <div className="nav-bar-logout-button" onClick={this.props.logout}>Sign Out</div>
              </div>
              : null}
              
            </div>
          </nav>
      )
    }
  
  }

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    }
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(GlobalNavBar);