import React from "react";

const EducationIndexItem = (props) => {

    const { viewedPageId, currentUserId, openModal, education } = props;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return (
        <div className="education-experience-index-item">
            <img src="https://i.postimg.cc/pdtrHFTQ/image.png" className="education-experience-image-logo"/>
        
            { (parseInt(viewedPageId) === currentUserId) ? 
            <button className="update-education-experience-button" onClick={() => openModal('updateEducation', education.id)}> <img src="https://i.postimg.cc/Y9JpH6sk/image-removebg-preview.png" id="edit-button-pencil" /></button>
                : null }
            <div className="education-experience-body">
                <div className="education-experience-bolded">{education.school}</div>
                { (education.degree && !education.field) ? <div className="education-experience-dark-font">{education.degree}</div> : null} 
                { (!education.degree && education.field) ? <div className="education-experience-dark-font">{education.field}</div> : null} 
                { (education.degree && education.field) ? <div className="education-experience-dark-font">{education.degree}, {education.field}</div> : null}
                
                { (education.start_date && education.end_date) ? <div className="education-experience-grey-font">
                    {months[new Date(education.start_date).getMonth()].concat(" ", new Date(education.start_date).getFullYear())} - {months[new Date(education.end_date).getMonth()].concat(" ", new Date(education.end_date).getFullYear())}
                    </div> : null}

                { (education.start_date && !education.end_date) ? <div className="education-experience-grey-font">
                    {months[new Date(education.start_date).getMonth()].concat(" ", new Date(education.start_date).getFullYear())}
                    </div> : null}

                { (!education.start_date && education.end_date) ? <div className="education-experience-grey-font">
                    {months[new Date(education.end_date).getMonth()].concat(" ", new Date(education.end_date).getFullYear())}
                    </div> : null}

                { (education.activities) ? <div className="education-experience-dark-font">Activities and societies: {education.activities}</div> : null} 

                { (education.description) ? <div className="education-experience-dark-font">{education.description}</div> : null }
            </div>
        </div>
    )
}

export default EducationIndexItem;