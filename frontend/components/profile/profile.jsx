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
            <div className="profile-page">
                < GlobalNavBar />
                <div className="profile-page-body">
                    <div className="profile-page-education-experience">
                        < ExperienceIndexContainer viewedPageId={this.props.viewedPageId} />
                    </div>
                    <div className="profile-page-education-experience">
                        < EducationIndexContainer viewedPageId={this.props.viewedPageId} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    viewedPageId: ownProps.match.params.id
})

export default connect(mapStateToProps, null)(Profile);