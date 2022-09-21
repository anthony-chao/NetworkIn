import React from "react";
import ExperienceIndexItem from "./experience_index_item";

const ExperienceIndex = (props) => {

    const { experiences, viewedPageId, currentUserId, openModal } = props;

    if (Object.values(experiences).length !== 0) {
        return (
            <section className='profile-page-education-experience'>
                <div className="education-experience-header-container">
                    { (Object.values(experiences).length !== 0) ? <label className="education-experience-header">Experience</label> : null }
                    { (parseInt(viewedPageId) === currentUserId) ? 
                        <button className="add-education-experience-button" onClick={() => openModal('addExperience')}>+</button>
                    : null}
                </div>
                {Object.values(experiences).map((experience) => (
                    <ExperienceIndexItem key={experience.id} experience={experience} openModal={openModal} viewedPageId={viewedPageId} currentUserId={currentUserId}/>
                ))
                }

            </section>
        )
    }

}

export default ExperienceIndex;