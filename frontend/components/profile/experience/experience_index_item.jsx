import React from "react";

class ExperienceIndexItem extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="experience-index-item">
                <div className="experience-body">
                    <div className="education-school">{this.props.education.school}</div>

                    { (this.props.education.degree && !this.props.education.field) ? <div className="education-degree">{this.props.education.degree}</div> : null} 
                    { (!this.props.education.degree && this.props.education.field) ? <div className="education-degree">{this.props.education.field}</div> : null} 
                    { (this.props.education.degree && this.props.education.field) ? <div className="education-degree">{this.props.education.degree}, {this.props.education.field}</div> : null}
                    
                    { (this.props.education.start_date && this.props.education.end_date) ? <div className="education-dates">{this.props.education.start_date} - {this.props.education.end_date}</div> : null}
                    { (this.props.education.start_date && !this.props.education.end_date) ? <div className="education-dates">{this.props.education.start_date}</div> : null}
                    { (!this.props.education.start_date && this.props.education.end_date) ? <div className="education-dates">{this.props.education.end_date}</div> : null}
                    
                    { (this.props.education.activities) ? <div className="education-activities">Activities and societies: {this.props.education.activities}</div> : null} 

                    { (this.props.education.description) ? <div className="education-description">{this.props.education.description}</div> : null }
                </div>
            </div>
        )
    }
}

export default ExperienceIndexItem;