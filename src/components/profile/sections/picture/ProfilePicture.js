import React, { useContext } from 'react'
import cover_photo from './assets/cover_photo.jpg'
//import profile_photo from './assets/profile_photo.jpg'
import user_avatar from './assets/user_avatar.png'
import { AppContext } from '../../../../contexts/AppContext'
import { ProfileContext } from '../../../../contexts/ProfileContext'

const ProfilePicture = () => {
    const { darkTheme } = useContext(AppContext)
    const { profile } = useContext(ProfileContext)
    
    const displayImage = profile.displayImage === "" ? user_avatar : profile.displayImage
    const coverImage = profile.coverImage === "" ? cover_photo : profile.coverImage  
    const color = darkTheme ? "rgb(26, 25, 25)" : "rgb(226, 226, 226)"

    return (
        <div className="profile-picture-container" >

            <div className="cover-photo-container" >
                <img src={coverImage} alt="Cover" />

            </div>

            <div className="photo-container" style={{color : color}} >
                <img src={displayImage} alt="Profile"  />

            </div>

        </div>
    )
}


export default ProfilePicture