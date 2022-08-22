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
              <button className="nav-bar-dropdown-button" onClick={this.handleClick} onBlur={this.handleLeave}><img src="https://static-exp1.licdn.com/sc/h/55k1z8997gh8dwtihm11aajyq" className="nav-bar-profile-picture" /> Me</button>
              {/* {(this.state.dropdown) ? 
              <div className="nav-bar-dropdown">  */}
                <div className="nav-bar-logout-button" onClick={this.props.logout}>Log Out</div>
              {/* </div>
              : null} */}
              
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