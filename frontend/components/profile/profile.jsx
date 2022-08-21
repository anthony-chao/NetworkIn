import React from "react";
import { connect } from "react-redux";
import GlobalNavBar from '../globalnavbar/global_nav_bar'
import EducationIndexContainer from './education/education_index_container';
import ExperienceIndexContainer from "./experience/experience_index_container";
import ProfileHeaderContainer from "./header/profile_header_container";
import ProfileAboutContainer from "./header/profile_about_container";

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="profile-page">
                < GlobalNavBar />
                <div className="profile-page-body">
                    < ProfileHeaderContainer viewedPageId={this.props.viewedPageId} />
                    < ProfileAboutContainer viewedPageId={this.props.viewedPageId} />
                    < ExperienceIndexContainer viewedPageId={this.props.viewedPageId} />
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