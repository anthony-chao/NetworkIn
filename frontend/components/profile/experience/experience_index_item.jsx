import React from "react";

class ExperienceIndexItem extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="experience-index-item">
                <div className="experience-body">
                    <div className="experience-title">{this.props.experience.title}</div>
                    <div className="experience-company-name">{this.props.experience.company_name}</div>

                    { (this.props.experience.start_date && this.props.experience.end_date) ? <div className="experience-dates">{this.props.experience.start_date} - {this.props.experience.end_date}</div> : null}
                    { (this.props.experience.start_date && !this.props.experience.end_date) ? <div className="experience-dates">{this.props.experience.start_date}</div> : null}
                    
                    { (this.props.experience.location) ? <div className="experience-location">{this.props.experience.location}</div> : null} 

                    { (this.props.experience.description) ? <div className="experience-description">{this.props.experience.description}</div> : null }
                </div>
            </div>
        )
    }
}

export default ExperienceIndexItem;