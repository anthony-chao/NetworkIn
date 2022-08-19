import React from "react";

class EducationIndex extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section>
                {this.props.educations.map((education) => (
                    <EducationIndexItem key={education.id} education={education}/>
                ))
                }
            </section>
        )
    }

}