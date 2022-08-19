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
        return (
            <section>
                {Object.values(this.props.educations).map((education) => (
                    <EducationIndexItem key={education.id} education={education}/>
                ))
                }

            </section>
        )
    }
}


export default EducationIndex;