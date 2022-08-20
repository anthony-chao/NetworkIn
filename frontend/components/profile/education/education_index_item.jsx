import React from "react";

class EducationIndexItem extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return (
            <div className="education-experience-index-item">
                <div className="education-body">
                    <div className="education-experience-bolded">{this.props.education.school}</div>

                    { (this.props.education.degree && !this.props.education.field) ? <div className="education-experience-dark-font">{this.props.education.degree}</div> : null} 
                    { (!this.props.education.degree && this.props.education.field) ? <div className="education-experience-dark-font">{this.props.education.field}</div> : null} 
                    { (this.props.education.degree && this.props.education.field) ? <div className="education-experience-dark-font">{this.props.education.degree}, {this.props.education.field}</div> : null}
                    
                    { (this.props.education.start_date && this.props.education.end_date) ? <div className="education-experience-grey-font">
                        {months[new Date(this.props.education.start_date).getMonth()].concat(" ", new Date(this.props.education.start_date).getFullYear())} - {months[new Date(this.props.education.end_date).getMonth()].concat(" ", new Date(this.props.education.end_date).getFullYear())}
                        </div> : null}

                    { (this.props.education.start_date && !this.props.education.end_date) ? <div className="education-experience-grey-font">
                        {months[new Date(this.props.education.start_date).getMonth()].concat(" ", new Date(this.props.education.start_date).getFullYear())}
                        </div> : null}

                    { (!this.props.education.start_date && this.props.education.end_date) ? <div className="education-experience-grey-font">
                        {months[new Date(this.props.education.end_date).getMonth()].concat(" ", new Date(this.props.education.end_date).getFullYear())}
                        </div> : null}

                    { (this.props.education.activities) ? <div className="education-experience-dark-font">Activities and societies: {this.props.education.activities}</div> : null} 

                    { (this.props.education.description) ? <div className="education-experience-dark-font">{this.props.education.description}</div> : null }
                </div>
            </div>
        )
    }
}

export default EducationIndexItem;