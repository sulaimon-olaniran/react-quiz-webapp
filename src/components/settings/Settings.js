import React, { useContext, useEffect } from 'react'
import FormikProfileSettings from './profile/Profile'
import { AppContext } from '../../contexts/AppContext'
import DisplayImage from './images/display/DisplayImage'
import CoverImage from './images/cover/CoverImage'
import { ProfileContext } from '../../contexts/ProfileContext'
import Loader from '../loader/Loader'
import { auth } from '../../firebase/Firebase'


const SettingsPage = () => {
    const { themeClass } = useContext(AppContext)
    const { profile, loading, fetching } = useContext(ProfileContext)
    
    const message = "Fetching Details"

    if (fetching) return <Loader message={message} loading={loading} />
    else {
        return (
            <div className={`settings-container ${themeClass}`} >
                <DisplayImage />
                <CoverImage />
                <FormikProfileSettings details={profile} />
            </div>
        )
    }
}


export default SettingsPage 