import React from "react";
import { connect } from "react-redux";
import GlobalNavBar from '../globalnavbar/global_nav_bar'
import EducationIndexContainer from './education/education_index_container';
import ExperienceIndexContainer from "./experience/experience_index_container";

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        //receive user action
    }

    render() {
        return (
            <div className="ProfilePage">
                < GlobalNavBar />
                <h1>The profile is showing!</h1>
                <div className="profile-page-experience">
                    <label className="experience-header">Experience</label>
                    < ExperienceIndexContainer viewedPageId={this.props.viewedPageId} />
                </div>
                <div className="profile-page-experience">
                    <label className="education-header">Education</label>
                    < EducationIndexContainer viewedPageId={this.props.viewedPageId} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    viewedPageId: ownProps.match.params.id
})

export default connect(mapStateToProps, null)(Profile);