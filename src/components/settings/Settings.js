import React, { useContext } from 'react'
import FormikProfileSettings from './profile/Profile'
import { AppContext } from '../../contexts/AppContext'
import DisplayImage from './images/display/DisplayImage'
import CoverImage from './images/cover/CoverImage'
import { ProfileContext } from '../../contexts/ProfileContext'
import Loader from '../loader/Loader'
import { Redirect } from 'react-router-dom'
import { auth } from '../../firebase/Firebase'


const SettingsPage = () => {
    const { themeClass, usersData } = useContext(AppContext)

    const { profile, loading, fetching } = useContext(ProfileContext)

    const message = "Fetching Details"


    if (auth.currentUser === null) return <Redirect to="/signin" />

    if (fetching) return <Loader message={message} loading={loading} />
    else {
        return (
            <div className={`settings-container ${themeClass}`} >
             
                <div className="image-settings-container">
                    <DisplayImage />
                    <CoverImage />
                </div>
                <div className="details-settings-container" >
                    <FormikProfileSettings details={profile} users={usersData} />
                </div>
            </div>
        )
    }
}


export default SettingsPage 