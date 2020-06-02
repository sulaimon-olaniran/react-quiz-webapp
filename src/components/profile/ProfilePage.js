import React, { useContext } from 'react'
import ProfilePicture from './sections/picture/ProfilePicture'
import { AppContext } from '../../contexts/AppContext'
import Information from './sections/info/Information'
import PlayerDetails from './sections/details/PlayerDetails'


const ProfilePage = () => {
    const { themeClass } = useContext(AppContext)
    return (
        <div className={`profile-page-container ${themeClass}`}>
            <ProfilePicture />
            <Information />
            <PlayerDetails />
        </div>
    )
}

export default ProfilePage