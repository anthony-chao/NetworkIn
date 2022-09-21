import React from "react";
import EducationIndexItem from "./education_index_item";

const EducationIndex = (props) => {

    const { educations, viewedPageId, currentUserId, openModal } = props;

    if (Object.values(educations).length !== 0) {
        return (
            <section className="profile-page-education-experience">
                <div className="education-experience-header-container">
                    { (Object.values(educations).length !== 0) ? <label className="education-experience-header">Education</label> : null }
                    { (parseInt(viewedPageId) === currentUserId) ? 
                        <button className="add-education-experience-button" onClick={() => openModal('addEducation')}>+</button>
                    : null}
                </div>
                {Object.values(educations).map((education) => (
                    <EducationIndexItem key={education.id} education={education} openModal={openModal} viewedPageId={viewedPageId} currentUserId={currentUserId}/>
                ))
                }

            </section>
        )
    }
}

export default EducationIndex;