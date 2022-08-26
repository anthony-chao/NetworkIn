import React from 'react';
import GlobalNavBar from '../globalnavbar/global_nav_bar';
import PostIndexContainer from './posts/post_index_container';
import { Link } from 'react-router-dom';

class Feed extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="feed-page">
        < GlobalNavBar />
        <div className="feed-page-centered">
          <div className="feed-page-left-bar">
              <img src="https://static-exp1.licdn.com/sc/h/55k1z8997gh8dwtihm11aajyq" id="feed-page-cover-image" />
              <Link to={{pathname: `/users/${this.props.currentUser.id}`}}> <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" className="feed-page-profile-picture"/></Link>
              <div className="left-bar-current-user">
              <Link to={{pathname: `/users/${this.props.currentUser.id}`}}> <h1 id="left-bar-header">Welcome, {this.props.currentUser.first_name}!</h1> </Link>
                  <div id="left-bar-user-headline">{this.props.currentUser.headline}</div>
              </div>
            </div>

          <div className="feed-page-body">
            < PostIndexContainer />
          </div>

          <div className="profile-page-right-bar">
                <div className="right-bar-networkin-news">
                    <h1 id="networkin-news-header">NetworkIn News</h1>
                    <ul>
                        <li id="networking-news-bullet">
                            <span>Who is Anthony Chao?</span>
                        </li>
                        <p id="networking-news-response">Anthony Chao is an ex-accountant turned software engineer. He has experience working with Ruby, JavaScript, React, Redux, Rails. He is the creator of NetworkIn!</p>
                        <li id="networking-news-bullet">
                            <span>Where can I connect with Anthony?</span>
                        </li>
                        <div id="networking-news-links">
                            <a href="https://www.linkedin.com/in/anthony-chao-cpa-983299133/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" id="nav-bar-logo"/></a>
                            <a href="https://github.com/anthony-chao" target="_blank"><img src="https://www.ab-it.io/wp-content/uploads/2017/09/github-logo.png" id="nav-bar-logo"/></a>
                        </div>
                        <li id="networking-news-bullet">
                            <span>Life altering pieces of knowledge</span>
                        </li>
                        <p id="networking-news-response">Homicide victims rarely talk to police. Breathing oxygen is linked to staying alive.</p>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
  }


}

export default Feed;