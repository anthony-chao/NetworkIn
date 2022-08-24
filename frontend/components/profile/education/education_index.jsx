import React from "react";
import EducationIndexItem from "./education_index_item";

class EducationIndex extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchEducations(this.props.viewedUserId)
    }

    render() {
        if (Object.values(this.props.educations).length !== 0) {
        return (
            <section className="profile-page-education-experience">
                <div className="education-experience-header-container">
                    { (Object.values(this.props.educations).length !== 0) ? <label className="education-experience-header">Education</label> : null }
                    { (parseInt(this.props.viewedUserId) === this.props.currentUser.id) ? this.props.otherForm : null}
                </div>
                {Object.values(this.props.educations).map((education) => (
                    <EducationIndexItem key={education.id} education={education} openModal={this.props.openModal} closeModal={this.props.closeModal} viewedUserId={this.props.viewedUserId} currentUserId={this.props.currentUser.id}/>
                ))
                }

            </section>
        )
    }
    }
}


export default EducationIndex;