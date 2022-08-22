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
            { (Object.values(this.props.educations).length !== 0) ? <label className="experience-education-header">Education</label> : null }
            {this.props.otherForm}
                {Object.values(this.props.educations).map((education) => (
                    <EducationIndexItem key={education.id} education={education}/>
                ))
                }

            </section>
        )
    }
    }
}


export default EducationIndex;