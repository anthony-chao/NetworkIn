import React from 'react';
import { Link } from 'react-router-dom';

class Feed extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <nav className="logged-in-nav-bar">
            <Link to="/feed"><img src="" alt="" /></Link>
            <button onClick={this.props.logout}>Log Out</button>
        </nav>
    </div>
    )
  }


}

export default Feed;