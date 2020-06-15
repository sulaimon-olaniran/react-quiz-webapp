import React, { useContext } from 'react'
import ProfilePicture from './sections/picture/ProfilePicture'
import { AppContext } from '../../contexts/AppContext'
import Information from './sections/info/Information'
import PlayerDetails from './sections/details/PlayerDetails'
import { ProfileContext } from '../../contexts/ProfileContext'
import Loader from '../loader/Loader'


const ProfilePage = () => {
    const { themeClass } = useContext(AppContext)
    const { profile, loading, fetching } = useContext(ProfileContext)
    
    const message = "Fetching User Data"
    
    if (fetching) return <Loader message={message} loading={loading} />
    else{
    return (
        <div className={`profile-page-container ${themeClass}`}>
            <ProfilePicture details={profile} />
            <Information details={profile} />
            <PlayerDetails details={profile} />
        </div>
    )
    }
}

export default ProfilePage