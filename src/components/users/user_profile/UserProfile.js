import React, { useState, useEffect, useContext, useRef } from 'react'
import ProfilePicture from '../../profile/sections/picture/ProfilePicture'
import Information from '../../profile/sections/info/Information'
import PlayerDetails from '../../profile/sections/details/PlayerDetails'
import Loader from '../../loader/Loader'
import { db, auth } from '../../../firebase/Firebase'
import { Redirect } from 'react-router-dom'
import { AppContext } from '../../../contexts/AppContext'


const UserProfile = ({ match }) => {
    const [profile, setProfile] = useState()
    const [loading, setLoading] = useState(true)
    const [fetching, setFetching] = useState(true)
    const { themeClass } = useContext(AppContext)
    const mountedRef = useRef(true)

    useEffect(() => {
        const userId = match.params.id
        db.collection("users").doc(userId).onSnapshot(snapshot => {
            if (!mountedRef.current) return null
            setProfile(snapshot.data())
            setLoading(false)
            setTimeout(() => {
                setFetching(false)
            }, 1000)
        })
        return () => {
            mountedRef.current = false
        }

    })
    const message = "Fetching Profile"

    if (auth.currentUser === null) return <Redirect  to="/signin" />
    
    if (fetching) return <Loader message={message} loading={loading} />
    else {
        return (
            <div className={`profile-page-container ${themeClass}`}>
                <ProfilePicture details={profile} />
                <Information details={profile} />
                <PlayerDetails details={profile} />
            </div>
        )
    }
}


export default UserProfile