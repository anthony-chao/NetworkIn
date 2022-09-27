import React, { useState, useEffect } from "react";

const ProfileHeader = (props) => {

    const { viewedUser, currentUserId, viewedPageId, openModal, updateUserPhotos } = props;

    const [fakeModalOpened, setFakeModalOpened] = useState(false);

    const openFakeModal = () => {
        !fakeModalOpened ? setFakeModalOpened(true) : null;
    }

    useEffect(() => {
        document.title = `${viewedUser.first_name.concat(" ", viewedUser.last_name)} | NetworkIn`
    }, [])

    const updateProfilePicture = (e) => {
        e.preventDefault();
        const formData = new FormData();
    
        formData.append('user[profile_picture]', e.currentTarget.files[0]);
        updateUserPhotos(formData, viewedUser.id);
      }

    if (Object.values(viewedUser).length !== 0) {
    return (
        <section className="profile-page-header">
            <img src="https://static-exp1.licdn.com/sc/h/55k1z8997gh8dwtihm11aajyq" id="profile-cover-image" />
            <div className="profile-below-cover-image" >
                { (viewedUser.profilePictureUrl) ? <img id="profile-header-image" src={`${viewedUser.profilePictureUrl}`} /> : <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" id="profile-header-image" />}
                { (viewedUser.id === currentUserId) ? 
                    <label htmlFor="original-post-image-button" style={{'zIndex': 500}}>
                        <img id="update-profile-pic-button" src="https://i.postimg.cc/PrS6VLFL/image-removebg-preview.png"/>
                    <input id="original-post-image-button" type="file" onChange={updateProfilePicture}/>
                    </label>
                :null }
                <div className="profile-header-body">
                    <h1 id="profile-bold-name">{viewedUser.first_name.concat(" ", viewedUser.last_name)}</h1>
                    <div id="profile-dark-headline">{viewedUser.headline}</div>
                    <div id="profile-grey-location">{viewedUser.location_city.concat(", ", viewedUser.location_country)}</div>
                </div>
            </div>
            { (parseInt(currentUserId) === parseInt(viewedPageId)) ? 
            <div>
                <div onClick={openFakeModal} id="profile-header-add-profile-section" className={(fakeModalOpened) ? "invisible" : ""}>Add Profile Section</div>
                    <div className="profile-header-buttons">
                        <div onClick={() => openModal('addExperience')} id="profile-header-add-experience" className={(!fakeModalOpened) ? "invisible" : ""}>Add Experience</div>
                        <div onClick={() => openModal('addEducation')} id="profile-header-add-education" className={(!fakeModalOpened) ? "invisible" : ""}>Add Education</div>
                    </div>
            </div>
            : null}
        </section>
    )
    }
}

export default ProfileHeader;