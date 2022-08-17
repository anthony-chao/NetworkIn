import React from 'react';

class Feed extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <button onClick={this.props.logout}>Log Out</button>
    </div>
    )
  }


}

export default Feed;