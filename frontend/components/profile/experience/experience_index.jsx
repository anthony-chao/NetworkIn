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
        return (
            <section>
                { (Object.values(this.props.experiences).length !== 0) ? <label className="experience-education-header">Experience</label> : null }
                {Object.values(this.props.experiences).map((experience) => (
                    <ExperienceIndexItem key={experience.id} experience={experience}/>
                ))
                }

            </section>
        )
    }
}


export default ExperienceIndex;