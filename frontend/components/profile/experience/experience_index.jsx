import React from "react";
import ExperienceIndexItem from "./experience_index_item";

class ExperienceIndex extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchExperiences(this.props.viewedUserId)
    }

    render() {
        if (Object.values(this.props.experiences).length !== 0) {
        return (
            <section className='profile-page-education-experience'>
                <div className="education-experience-header-container">
                    { (Object.values(this.props.experiences).length !== 0) ? <label className="education-experience-header">Experience</label> : null }
                    { (parseInt(this.props.viewedUserId) === this.props.currentUser.id) ? 
                    <button className="add-education-experience-button" onClick={() => this.props.openModal('addExperience')}>+</button>
                    : null}
                </div>
                {Object.values(this.props.experiences).map((experience) => (
                    <ExperienceIndexItem key={experience.id} experience={experience}/>
                ))
                }

            </section>
        )
    }
    }
}


export default ExperienceIndex;