import React, { useContext } from 'react'
import cover_photo from './assets/cover_photo.jpg'
import profile_photo from './assets/profile_photo.jpg'
import { AppContext } from '../../../../contexts/AppContext'

const ProfilePicture = () => {
    const { darkTheme } = useContext(AppContext)

    const color = darkTheme ? "rgb(26, 25, 25)" : "rgb(226, 226, 226)"

    return (
        <div className="profile-picture-container" >

            <div className="cover-photo-container" >
                <img src={cover_photo} alt="Cover" />

            </div>

            <div className="photo-container" style={{color : color}} >
                <img src={profile_photo} alt="Profile"  />

            </div>

        </div>
    )
}


export default ProfilePicture