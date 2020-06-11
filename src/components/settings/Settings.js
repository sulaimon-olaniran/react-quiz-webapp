import React, { useContext } from 'react'
import FormikProfileSettings from './profile/Profile'
import { AppContext } from '../../contexts/AppContext'
import DisplayImage from './images/display/DisplayImage'
import CoverImage from './images/cover/CoverImage'
import { ProfileContext } from '../../contexts/ProfileContext'


const SettingsPage = () => {
    const { themeClass } = useContext(AppContext)
    const { profile } = useContext(ProfileContext)
    return(
        <div className={`settings-container ${themeClass}`} >
            <DisplayImage />
            <CoverImage />
            <FormikProfileSettings details={profile} />
        </div>
    )
}


export default SettingsPage 