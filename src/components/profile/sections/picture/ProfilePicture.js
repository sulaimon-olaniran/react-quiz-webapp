import React, { useContext } from 'react'
import cover_photo from './assets/cover_photo.jpg'
import user_avatar from './assets/user_avatar.png'
import { AppContext } from '../../../../contexts/AppContext'

const ProfilePicture = ({details}) => {
    const { darkTheme } = useContext(AppContext)
    
    const displayImage = details.displayImage === "" ? user_avatar : details.displayImage
    const coverImage = details.coverImage === "" ? cover_photo : details.coverImage 
    

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