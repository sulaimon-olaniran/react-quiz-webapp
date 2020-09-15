import React, { useContext, useEffect, useState, useRef } from 'react'
import FormikProfileSettings from './profile/Profile'
import { AppContext } from '../../contexts/AppContext'
import DisplayImage from './images/display/DisplayImage'
import CoverImage from './images/cover/CoverImage'
//import { ProfileContext } from '../../contexts/ProfileContext'
import Loader from '../loader/Loader'
import { Redirect } from 'react-router-dom'
import { auth, db } from '../../firebase/Firebase'


const SettingsPage = () => {
    const [details, setDetails] = useState([])
    const [loading, setLoading] = useState(true)
    const [fetching, setFetching] = useState(true)

    const mountedRef = useRef(true)

    const { themeClass, usersData } = useContext(AppContext)

    //const { profile, loading, fetching, setFetching, getUserProfile } = useContext(ProfileContext)
    const getUserProfile = () => {
        const userId = auth.currentUser && auth.currentUser.uid
        db.collection("users").doc(userId).onSnapshot(snapshot => {
            if (!mountedRef.current) return null
            setDetails(snapshot.data())
            //console.log(snapshot.data())
            setLoading(false)

            setTimeout(() => {
                setFetching(false)
            }, 1000)
        })
    }

    useEffect(() => {
        console.log('profile auth useeffect triggered')
        console.log(auth.currentUser.uid)
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
                    <FormikProfileSettings details={details} users={usersData} />
                </div>
            </div>
        )
    }
}


export default SettingsPage 