import React, { useContext } from 'react'
import ProfilePicture from './sections/picture/ProfilePicture'
import { AppContext } from '../../contexts/AppContext'
import Information from './sections/info/Information'
import PlayerDetails from './sections/details/PlayerDetails'
import { ProfileContext } from '../../contexts/ProfileContext'


const ProfilePage = () => {
    const { themeClass } = useContext(AppContext)
    const { profile } = useContext(ProfileContext) 
    return (
        <div className={`profile-page-container ${themeClass}`}>
            <ProfilePicture details={profile} />
            <Information details={profile} />
            <PlayerDetails details={profile} />
        </div>
    )
}

export default ProfilePage