import React, { useContext, useEffect, useState, useRef } from 'react'
import { Redirect } from 'react-router-dom'
import { auth, db } from '../../firebase/Firebase'
import ProfilePicture from './sections/picture/ProfilePicture'
import { AppContext } from '../../contexts/AppContext'
import Information from './sections/info/Information'
import PlayerDetails from './sections/details/PlayerDetails'
//import { ProfileContext } from '../../contexts/ProfileContext'
import Loader from '../loader/Loader'


const ProfilePage = () => {
    const { themeClass } = useContext(AppContext)
    const [details, setDetails] = useState(null)
    const [loading, setLoading] = useState(true)
    const [fetching, setFetching] = useState(true)

    const mountedRef = useRef(true)

    //const { profile, loading, fetching, getUserProfile, setFetching } = useContext(ProfileContext)

    const getUserProfile = () => {
        const userId = auth.currentUser && auth.currentUser.uid
        db.collection("users").doc(userId).onSnapshot(snapshot => {
            if (!mountedRef.current) return null
            setDetails(snapshot.data())
            //console.log(snapshot.data())
            setLoading(false)

            setTimeout(() => {
                setFetching(false)
            }, 500)
        })
    }

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                getUserProfile()
            } else {
                setFetching(false)
            }
        })

        return () => {
            mountedRef.current = false
        }

    }, [])

    const message = "Fetching User Data"

    if (fetching || !auth) return <Loader message={message} loading={loading} />

    if (auth.currentUser === null) return <Redirect to="/signin" />
    return (
        <div className={`profile-page-container ${themeClass}`}>
            <ProfilePicture details={details && details} />
            <Information details={details && details} />
            <PlayerDetails details={details && details} />
        </div>
    )

}

export default ProfilePage