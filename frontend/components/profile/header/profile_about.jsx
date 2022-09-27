import React from "react";

const ProfileAbout = (props) => {

    const { viewedUser, currentUserId, viewedPageId, openModal } = props;

    if (Object.values(viewedUser).length !== 0) {
        return (
            <section>
                { (viewedUser.about) ? 
                    <div className="profile-page-education-experience">
                        <div id="profile-about-header">About</div>
                        <div id="profile-about-body">{viewedUser.about}</div>
                    </div>
                : null}
            </section>
        )
    }
}

export default ProfileAbout;