import React from "react";

const ExperienceIndexItem = (props) => {

    const { viewedPageId, currentUserId, openModal, experience } = props;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return (
        <div className="education-experience-index-item">
            <img src="https://i.postimg.cc/yNSmf9GF/image.png" className="education-experience-image-logo"/>

            { (parseInt(viewedPageId) === currentUserId) ? 
            <button className="update-education-experience-button" onClick={() => openModal('updateExperience', experience.id)}> <img src="https://i.postimg.cc/Y9JpH6sk/image-removebg-preview.png" id="edit-button-pencil" /></button>
                : null }

            <div className="education-experience-body">
                <div className="education-experience-bolded">{experience.title}</div>
                <div className="education-experience-dark-font">{experience.company_name}</div>

                { (experience.start_date && experience.end_date) ? <div className="education-experience-grey-font">
                    {months[new Date(experience.start_date).getMonth()].concat(" ", new Date(experience.start_date).getFullYear())} - {months[new Date(experience.end_date).getMonth()].concat(" ", new Date(experience.end_date).getFullYear())}
                    </div> : null}
                
                { (experience.location) ? <div className="education-experience-grey-font">{experience.location}</div> : null} 

                { (experience.description) ? <div className="education-experience-dark-font">{experience.description}</div> : null }
            </div>
        </div>
    )
}

export default ExperienceIndexItem;