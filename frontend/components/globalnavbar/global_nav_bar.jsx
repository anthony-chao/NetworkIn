import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

class GlobalNavBar extends React.Component {
    constructor(props) {
      super(props)
    }
  
    render() {
      return (
          <nav className="global-nav-bar">
            <div className="global-left-nav-bar">
              <Link to="/feed">Feeed</Link>
            </div>
            <div className="global-right-nav-bar">
                <button onClick={this.props.logout}>Log Out</button>
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