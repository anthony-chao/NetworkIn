import React from 'react';
import GlobalNavBar from '../globalnavbar/global_nav_bar';
import PostIndexContainer from './posts/post_index_container';
import AddPostContainer from './posts/add_post_container';

class Feed extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="feed-page">
        < GlobalNavBar />
        <div className="feed-page-centered">
          <div className="feed-page-body">
            < PostIndexContainer />
          </div>
        </div>
    </div>
    )
  }


}

export default Feed;