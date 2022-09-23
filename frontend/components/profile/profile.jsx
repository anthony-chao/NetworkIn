import React, { useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux";
import GlobalNavBar from '../globalnavbar/global_nav_bar'
import EducationIndex from "./education/education_index";
import ExperienceIndex from "./experience/experience_index";
import ProfileAbout from "./header/profile_about";
import ProfileHeader from "./header/profile_header";
import { fetchEducations } from "../../actions/education_actions";
import { fetchExperiences } from "../../actions/experience_actions";
import { fetchUser } from "../../actions/profile_actions";
import { openModal } from "../../actions/modal_actions";
import LoadingContainer from "../loading/loading";

const Profile = (props) => {

    const { viewedPageId, fetchEducations, fetchExperiences, fetchUser, openModal, viewedUserEducation, viewedUserExperience, viewedUser } = props;

    useEffect(() => {
        fetchUser(viewedPageId);
        fetchExperiences(viewedPageId);
        fetchEducations(viewedPageId);
    }, []);

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    
    return (
        <div className="profile-page">
            < GlobalNavBar />
            { (viewedUser.id === parseInt(viewedPageId)) ? 
            <div className="profile-page-centered">
                <div className="profile-page-body">
                    < ProfileHeader viewedPageId={viewedPageId} viewedUser={viewedUser} currentUserId={props.currentUser.id} openModal={openModal}/>
                    < ProfileAbout viewedPageId={viewedPageId} viewedUser={viewedUser} currentUserId={props.currentUser.id} openModal={openModal} />
                    < ExperienceIndex viewedPageId={viewedPageId} experiences={viewedUserExperience} currentUserId={props.currentUser.id} openModal={openModal}/>
                    < EducationIndex viewedPageId={viewedPageId} educations={viewedUserEducation} currentUserId={props.currentUser.id} openModal={openModal}/>
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
                                <span>Bananas are good for you?</span>
                            </li>
                            <p id="networking-news-response">According to some scientists, bananas, are in fact, good for you. Shocking!</p>
                        </ul>
                    </div>
                    <p>Second Container Placeholder</p>
                </div>
            </div>
            : <LoadingContainer/> }
        </div>
    )
    
}

const mapStateToProps = (state, ownProps) => ({
    viewedPageId: ownProps.match.params.id,
    viewedUser: state.entities.viewedUser,
    viewedUserEducation: state.entities.viewedUserEducation,
    viewedUserExperience: state.entities.viewedUserExperience,
    currentUser: state.session.user
})

const mapDispatchToProps = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchEducations: (userId) => dispatch(fetchEducations(userId)),
    fetchExperiences: (userId) => dispatch(fetchExperiences(userId)),
    openModal: (type, id) => dispatch(openModal(type, id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);