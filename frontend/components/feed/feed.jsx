import React, { useEffect } from 'react';
import GlobalNavBar from '../globalnavbar/global_nav_bar';
import PostIndex from './posts/post_index';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const Feed = (props) => {

  const { currentUser } = props;
  const history = useHistory();

  useEffect(() => {
    document.title = 'Feed | NetworkIn'
  }, []);

  const toProfilePage = () => {
    history.push(`/users/${currentUser.id}`);
  }

  return (
    <div className="feed-page">
      < GlobalNavBar />
      <div className="feed-page-centered">
        <div className="feed-page-left-bar">
            <img src="https://static-exp1.licdn.com/sc/h/55k1z8997gh8dwtihm11aajyq" id="feed-page-cover-image" />
            <div onClick={toProfilePage}> <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" className="feed-page-profile-picture"/></div>
            <div className="left-bar-current-user">
            <div onClick={toProfilePage}> <h1 id="left-bar-header">{currentUser.first_name.concat(" ", currentUser.last_name)}</h1> </div>
                <div id="left-bar-user-headline">{currentUser.headline}</div>
            </div>
          </div>

        <div className="feed-page-body">
          < PostIndex />
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
                          <a href="https://angel.co/u/anthony-chao-1" target="_blank"><img src="https://cdn1.iconfinder.com/data/icons/logos-and-brands-3/512/20_Angellist_logo_logos-512.png" id="nav-bar-logo"/></a>
                          <a href="https://github.com/anthony-chao" target="_blank"><img src="https://www.ab-it.io/wp-content/uploads/2017/09/github-logo.png" id="nav-bar-logo"/></a>
                      </div>
                      <li id="networking-news-bullet">
                          <span>Life altering pieces of knowledge</span>
                      </li>
                      <p id="networking-news-response">Homicide victims rarely talk to police. Breathing oxygen is linked to staying alive. </p>
                  </ul>
              </div>
          </div>
      </div>
  </div>
  )
}

const mapStateToProps = (state) => ({
      currentUser: state.session.user
});

export default connect(mapStateToProps, null)(Feed);