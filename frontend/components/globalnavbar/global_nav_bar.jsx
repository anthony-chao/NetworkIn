import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

const GlobalNavBar = (props) => {

  const history = useHistory();
  const { currentUser, logout } = props;

  const [state, setState] = useState({
    dropdown: false
  })

  const handleClick = () => {
    !state.dropdown ? setState({dropdown: true}) : setState({dropdown: false});
  }

  const toProfilePage = () => {
    history.push(`/users/${currentUser.id}`);
    setState({dropdown: false});
  }

  const toNetworkPage = () => {
    history.push(`/mynetwork`);
  }

  const toHomePage = () => {
    history.push(`/feed`);
  }

  return (
    <nav className="global-nav-bar">
      <div className="global-left-nav-bar">
        <Link to="/feed"><img id="nav-bar-logo" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" /></Link>
        <img src="https://i.postimg.cc/6pK7d510/image-removebg-preview.png" id="search-bar-logo"/>
        <input type="text" id="nav-bar-search-bar" placeholder="Search"/>
      </div>
      <div className="global-mid-nav-bar"></div>
      <div className="global-right-nav-bar">
      <div onClick={toHomePage}>
          <img id="nav-bar-network" src="https://i.postimg.cc/8PpLWHG2/image-removebg-preview.png"/>
          <button className="nav-bar-dropdown-button">Home</button>
        </div>
        <div onClick={toNetworkPage}>
          <img id="nav-bar-network" src="https://i.postimg.cc/KcVGbczR/image-removebg-preview.png"/>
          <button className="nav-bar-dropdown-button">My Network</button>
        </div>
        <div onClick={handleClick}>
          {(currentUser.profilePictureUrl) ?
            <img src={`${currentUser.profilePictureUrl}`} id="nav-bar-profile-picture"/> 
          : <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" id="nav-bar-profile-picture" /> }
          <button className="nav-bar-dropdown-button" > Me <img src="https://i.postimg.cc/Xvf03CFb/image.png" id="down-button"/> </button>
        </div>
      </div>
        {(state.dropdown) ? 
        <div className="nav-bar-dropdown"> 
            <div className="nav-bar-profile-container" onClick={toProfilePage}>
              {(currentUser.profilePictureUrl) ?
                <img src={`${currentUser.profilePictureUrl}`} id="nav-bar-open-picture"/> 
              : <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" id="nav-bar-open-picture" /> }
              <div className="dropdown-profile-name">{currentUser.first_name.concat(" " ,currentUser.last_name)}</div>
              <div className="dropdown-profile-headline">{currentUser.headline}</div>
            </div>
          <div onClick={toProfilePage} className="dropdown-profile-link">View Profile</div>
          <div className="nav-bar-logout-button" onClick={logout}>Sign Out</div>
        </div>
        : null}              
    </nav>
  )
}

const mapStateToProps = (state) => ({
    currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(GlobalNavBar);